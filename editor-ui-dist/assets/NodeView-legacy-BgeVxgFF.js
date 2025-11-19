;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./date-picker-legacy-Cor1wJX7.js", "./overlay-legacy-CnSmhTdu.js", "./ParameterInputList-legacy-DirG3aZ4.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./col-legacy-CQMoYMQI.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./chatPanel.store-legacy-NYceFr60.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./retry-legacy-CkXCWkMV.js", "./executions.store-legacy-BxTud2_e.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./KeyboardShortcutTooltip-legacy-ZyxuvJWt.js", "./useCanvasMapping-legacy-BymVyJ8h.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./dataTable.store-legacy-BFWf9Jk0.js", "./isEmpty-legacy-Doz7ETSg.js", "./NDVEmptyState-legacy-Hez6Mzj_.js", "./exports-legacy-RTRnyI4R.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js", "./uniqBy-legacy-BQtuBYTn.js", "./semver-legacy-BzFo3drs.js", "./CommunityNodeUpdateInfo-legacy-12fQcwXn.js", "./Draggable-legacy-CcVN489_.js", "./VirtualSchema-legacy-9f7FeJ8b.js", "./TextWithHighlights-legacy-CVW5NpX4.js", "./useTelemetryContext-legacy-CJA6Osaa.js", "./schemaPreview.store-legacy-B2ITMEum.js", "./nodeTransforms-legacy-B6vSYCn_.js", "./FileSaver.min-legacy-BTN44Z38.js", "./vue-json-pretty-legacy-Dk5EQofb.js", "./RunDataHtml-legacy-DopSvQCJ.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js", "./NodeSettings-legacy-DU2oCttT.js", "./useActions-legacy-A6v3pRgY.js", "./vue-legacy-Cj7LJTPA.js", "./sourceControl.eventBus-legacy-CMJhIsjd.js", "./useKeybindings-legacy-BQ2atUdb.js", "./useBeforeUnload-legacy-Dk0Umr-a.js", "./readyToRunWorkflows.store-legacy-D55qrb6S.js", "./useExecutionData-legacy-pAWtPQKq.js", "./useExecutionDebugging-legacy-BBf4rWwf.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, onActivated, h, createVNode, defineAsyncComponent, defineComponent, reactive, onUnmounted, toDisplayString, createBlock, toRef, mergeProps, onDeactivated, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, useCssModule, openBlock, withModifiers, renderList, createTextVNode, useTemplateRef, provide, onBeforeMount, createBaseVNode, Suspense, normalizeStyle, refThrottled, useActiveElement, useI18n, useThrottleFn, N8nInput_default, N8nCallout_default, N8nText_default, N8nButton_default, N8nInfoTip_default, N8nIconButton_default, CanvasThinkingPill_default, N8nInlineTextEdit_default, N8nKeyboardShortcut_default, useDeviceSupport, N8nRadioButtons_default, N8nResizeWrapper_default, N8nIcon_default, __vitePreload, __plugin_vue_export_helper_default, useRouter, onBeforeRouteLeave, createEventBus, useRoute, ExpressionEditorModalInput_default, CodeNodeEditor_default, JsEditor_default, SqlEditor_default, isValidParameterOption, ParameterOptions_default, getParameterTypeOption, HtmlEditor_default, CssEditor_default, formatAsExpression, useResolvedExpression, useNodeSettingsParameters, parseFromExpression, useMessage, useSettingsStore, getNodesWithNormalizedPosition, useWorkflowState, useHistoryStore, useSourceControlStore, nodeViewEventBus, useProjectsStore, useCredentialsStore, useUIStore, htmlEditorEventBus, getSampleWorkflowByTemplateId, historyBus, useRootStore, injectWorkflowState, CanvasNodeRenderType, useDocumentTitle, useCanvasStore, useVueFlow, isFocusableEl, useTagsStore, useNDVStore, isValueExpression, useEnvironmentsStore, useUsersStore, getBounds, usePostHog, globalLinkActionsEventBus, hasFocusOnInput, useWorkflowsStore, useNodeTypesStore, useTelemetry, getNodeViewTab, useNodeHelpers, useToast, isTriggerNode, WorkflowStateKey, FROM_AI_PARAMETERS_MODAL_KEY, jsonParse, EnterpriseEditionFeature, MANUAL_CHAT_TRIGGER_NODE_TYPE, isResourceLocatorValue, VALID_WORKFLOW_IMPORT_URL_REGEX, MODAL_CONFIRM, NDV_UI_OVERHAUL_EXPERIMENT, CHAT_TRIGGER_NODE_TYPE, DRAG_EVENT_DATA_KEY, getNodeInputs, getResourcePermissions, START_NODE_TYPE, EVALUATION_NODE_TYPE, EVALUATION_TRIGGER_NODE_TYPE, HTML_NODE_TYPE, ABOUT_MODAL_KEY, NODE_CREATOR_OPEN_SOURCES, VIEWS, NEW_WORKFLOW_ID, MAIN_HEADER_TABS, WORKFLOW_SETTINGS_MODAL_KEY, PLACEHOLDER_EMPTY_WORKFLOW_ID, AI_TRANSFORM_NODE_TYPE, getNodeOutputs, ExpressionLocalResolveContextSymbol, STICKY_NODE_TYPE, useBuilderStore, useExternalHooks, useNpsSurveyStore, useFocusPanelStore, useWorkflowSaving, useExecutionsStore, usePushConnectionStore, useAgentRequestStore, useRunWorkflow, useNodeCreatorStore, shouldIgnoreCanvasShortcut, useClipboard, useLogsStore, useExperimentalNdvStore, useParentFolder, canvasEventBus, useCanvasOperations, NodeIcon_default, KeyboardShortcutTooltip_default, ExperimentalCanvasNodeSettings_default, useWorkflowExtraction, Canvas_default, useContextMenuItems, useExpressionResolveCtx, useCanvasMapping, CanvasRunWorkflowButton_default, JsonEditor_default, useExternalSecretsStore, NodeExecuteButton_default, useTelemetryContext, needsAgentInput, sourceControlEventBus, useKeybindings, useBeforeUnload, useAITemplatesStarterCollectionStore, useReadyToRunWorkflowsStore, useExecutionData, useExecutionDebugging, __vite_style__, WorkflowCanvas_vue_vue_type_script_setup_true_lang_default, wrapper$2, canvas, WorkflowCanvas_vue_vue_type_style_index_0_lang_module_default, cssModules$4, WorkflowCanvas_default, ExperimentalNodeDetailsDrawer_vue_vue_type_script_setup_true_lang_default, component$1, multipleNodes, multipleNodesActions, multipleNodesAction, ExperimentalNodeDetailsDrawer_vue_vue_type_style_index_0_lang_module_default, cssModules$3, ExperimentalNodeDetailsDrawer_default, ExperimentalFocusPanelHeader_vue_vue_type_script_setup_true_lang_default, component, breadcrumbs, ExperimentalFocusPanelHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$2, ExperimentalFocusPanelHeader_default, FocusPanel_vue_vue_type_script_setup_true_lang_default, wrapper$1, container, content, emptyContent, isNdvInFocusPanelEnabled, emptyText, focusParameterWrapper, iconWrapper, pointerIcon, tabHeader, tabHeaderText, buttonWrapper, parameterDetailsWrapper, parameterOptionsWrapper, noExecutionDataTip, editorContainer, editor, delayedShow, triggerShow, closeButton, heightFull, forceHover, FocusPanel_vue_vue_type_style_index_0_lang_module_default, cssModules$1, FocusPanel_default, state, CanvasStopCurrentExecutionButton_vue_vue_type_script_setup_true_lang_default, CanvasStopCurrentExecutionButton_default, CanvasStopWaitingForWebhookButton_vue_vue_type_script_setup_true_lang_default, CanvasStopWaitingForWebhookButton_default, _hoisted_1, _hoisted_2, NodeViewUnfinishedWorkflowMessage_vue_vue_type_script_setup_true_lang_default, NodeViewUnfinishedWorkflowMessage_default, CanvasChatButton_vue_vue_type_script_setup_true_lang_default, CanvasChatButton_default, NodeView_vue_vue_type_script_setup_true_lang_default, wrapper, executionButtons, chatButton, setupCredentialsButtonWrapper, readOnlyEnvironmentNotification, thinkingPill, NodeView_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeView_default;
    function useGlobalLinkActions() {
      function registerCustomAction({
        key,
        action
      }) {
        state.customActions[key] = action;
      }
      function unregisterCustomAction(key) {
        const {
          [key]: _,
          ...rest
        } = state.customActions;
        state.customActions = rest;
      }
      function getElementAttributes(element) {
        const attributesObject = {};
        for (let i = 0; i < element.attributes.length; i++) {
          const attr = element.attributes[i];
          if (attr.name.startsWith("data-action-parameter-")) attributesObject[attr.name.replace("data-action-parameter-", "")] = attr.value;
        }
        return attributesObject;
      }
      function delegateClick(e) {
        const clickedElement = e.target;
        if (!(clickedElement instanceof Element) || clickedElement.tagName !== "A") return;
        const actionAttribute = clickedElement.getAttribute("data-action");
        if (actionAttribute && typeof availableActions.value[actionAttribute] === "function") {
          e.preventDefault();
          const elementAttributes = getElementAttributes(clickedElement);
          availableActions.value[actionAttribute](elementAttributes);
        }
      }
      function reload() {
        if (window.top) window.top.location.reload();else window.location.reload();
      }
      const availableActions = computed(() => ({
        reload,
        ...state.customActions
      }));
      onMounted(() => {
        if (state.delegatedClickHandler) return;
        state.delegatedClickHandler = delegateClick;
        window.addEventListener("click", delegateClick);
        globalLinkActionsEventBus.on("registerGlobalLinkAction", registerCustomAction);
      });
      onUnmounted(() => {
        window.removeEventListener("click", delegateClick);
        state.delegatedClickHandler = null;
        globalLinkActionsEventBus.off("registerGlobalLinkAction", registerCustomAction);
      });
      return {
        registerCustomAction,
        unregisterCustomAction
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/components/elements/buttons/CanvasStopCurrentExecutionButton.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        onActivated = _vueRuntimeEsmBundlerLegacy003Js.K;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        onUnmounted = _vueRuntimeEsmBundlerLegacy003Js.Q;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toRef = _vueRuntimeEsmBundlerLegacy003Js.Vt;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onDeactivated = _vueRuntimeEsmBundlerLegacy003Js.Y;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        Suspense = _vueRuntimeEsmBundlerLegacy003Js.y;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        refThrottled = _MapCacheLegacy005Js.Z;
        useActiveElement = _MapCacheLegacy005Js.b;
        useI18n = _MapCacheLegacy005Js.gt;
        useThrottleFn = _MapCacheLegacy005Js.it;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        CanvasThinkingPill_default = _srcLegacy007Js.Z;
        N8nInlineTextEdit_default = _srcLegacy007Js.a;
        N8nKeyboardShortcut_default = _srcLegacy007Js.nt;
        useDeviceSupport = _srcLegacy007Js.rt;
        N8nRadioButtons_default = _srcLegacy007Js.x;
        N8nResizeWrapper_default = _srcLegacy007Js.y;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        onBeforeRouteLeave = _truncateLegacy00hJs.v;
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_datePickerLegacy00nJs) {}, function (_overlayLegacy00pJs) {}, function (_ParameterInputListLegacy00rJs) {
        ExpressionEditorModalInput_default = _ParameterInputListLegacy00rJs.C;
        CodeNodeEditor_default = _ParameterInputListLegacy00rJs.D;
        JsEditor_default = _ParameterInputListLegacy00rJs.O;
        SqlEditor_default = _ParameterInputListLegacy00rJs.S;
        isValidParameterOption = _ParameterInputListLegacy00rJs._;
        ParameterOptions_default = _ParameterInputListLegacy00rJs.a;
        getParameterTypeOption = _ParameterInputListLegacy00rJs.g;
        HtmlEditor_default = _ParameterInputListLegacy00rJs.k;
        CssEditor_default = _ParameterInputListLegacy00rJs.l;
        formatAsExpression = _ParameterInputListLegacy00rJs.m;
        useResolvedExpression = _ParameterInputListLegacy00rJs.s;
        useNodeSettingsParameters = _ParameterInputListLegacy00rJs.u;
        parseFromExpression = _ParameterInputListLegacy00rJs.y;
      }, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_colLegacy00zJs) {}, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        getNodesWithNormalizedPosition = _useTelemetryLegacy00FJs.C;
        useWorkflowState = _useTelemetryLegacy00FJs.Cn;
        useHistoryStore = _useTelemetryLegacy00FJs.Cr;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        nodeViewEventBus = _useTelemetryLegacy00FJs.Ei;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        htmlEditorEventBus = _useTelemetryLegacy00FJs.Oi;
        getSampleWorkflowByTemplateId = _useTelemetryLegacy00FJs.Ot;
        historyBus = _useTelemetryLegacy00FJs.Pr;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        CanvasNodeRenderType = _useTelemetryLegacy00FJs.Sr;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useCanvasStore = _useTelemetryLegacy00FJs.Un;
        useVueFlow = _useTelemetryLegacy00FJs.V;
        isFocusableEl = _useTelemetryLegacy00FJs._i;
        useTagsStore = _useTelemetryLegacy00FJs._n;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        isValueExpression = _useTelemetryLegacy00FJs.ai;
        useEnvironmentsStore = _useTelemetryLegacy00FJs.bn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        getBounds = _useTelemetryLegacy00FJs.g;
        usePostHog = _useTelemetryLegacy00FJs.i;
        globalLinkActionsEventBus = _useTelemetryLegacy00FJs.ki;
        hasFocusOnInput = _useTelemetryLegacy00FJs.mi;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        getNodeViewTab = _useTelemetryLegacy00FJs.x;
        useNodeHelpers = _useTelemetryLegacy00FJs.xn;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        isTriggerNode = _constantsLegacy00NJs.Ai;
        WorkflowStateKey = _constantsLegacy00NJs.Ds;
        FROM_AI_PARAMETERS_MODAL_KEY = _constantsLegacy00NJs.Eo;
        jsonParse = _constantsLegacy00NJs.Gi;
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        MANUAL_CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.It;
        isResourceLocatorValue = _constantsLegacy00NJs.Li;
        VALID_WORKFLOW_IMPORT_URL_REGEX = _constantsLegacy00NJs.M;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        NDV_UI_OVERHAUL_EXPERIMENT = _constantsLegacy00NJs.Ps;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        DRAG_EVENT_DATA_KEY = _constantsLegacy00NJs.R;
        getNodeInputs = _constantsLegacy00NJs._i;
        getResourcePermissions = _constantsLegacy00NJs._r;
        START_NODE_TYPE = _constantsLegacy00NJs.bn;
        EVALUATION_NODE_TYPE = _constantsLegacy00NJs.da;
        EVALUATION_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.fa;
        HTML_NODE_TYPE = _constantsLegacy00NJs.ga;
        ABOUT_MODAL_KEY = _constantsLegacy00NJs.ho;
        NODE_CREATOR_OPEN_SOURCES = _constantsLegacy00NJs.io;
        VIEWS = _constantsLegacy00NJs.mo;
        NEW_WORKFLOW_ID = _constantsLegacy00NJs.o;
        MAIN_HEADER_TABS = _constantsLegacy00NJs.po;
        WORKFLOW_SETTINGS_MODAL_KEY = _constantsLegacy00NJs.qo;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
        AI_TRANSFORM_NODE_TYPE = _constantsLegacy00NJs.sa;
        getNodeOutputs = _constantsLegacy00NJs.vi;
        ExpressionLocalResolveContextSymbol = _constantsLegacy00NJs.ws;
        STICKY_NODE_TYPE = _constantsLegacy00NJs.xn;
      }, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {
        useBuilderStore = _assistantStoreLegacy00RJs.i;
      }, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_chatPanelStoreLegacy00ZJs) {}, function (_npsSurveyStoreLegacy011Js) {
        useNpsSurveyStore = _npsSurveyStoreLegacy011Js.t;
      }, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {
        useFocusPanelStore = _focusPanelStoreLegacy017Js.t;
      }, function (_useWorkflowSavingLegacy019Js) {
        useWorkflowSaving = _useWorkflowSavingLegacy019Js.t;
      }, function (_retryLegacy01bJs) {}, function (_executionsStoreLegacy01dJs) {
        useExecutionsStore = _executionsStoreLegacy01dJs.t;
      }, function (_useRunWorkflowLegacy01fJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01fJs.i;
        useAgentRequestStore = _useRunWorkflowLegacy01fJs.n;
        useRunWorkflow = _useRunWorkflowLegacy01fJs.t;
      }, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {
        useNodeCreatorStore = _nodeCreatorStoreLegacy01jJs.t;
        shouldIgnoreCanvasShortcut = _nodeCreatorStoreLegacy01jJs.u;
      }, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {
        useClipboard = _useClipboardLegacy01nJs.t;
      }, function (_useCanvasOperationsLegacy01pJs) {
        useLogsStore = _useCanvasOperationsLegacy01pJs.a;
        useExperimentalNdvStore = _useCanvasOperationsLegacy01pJs.i;
        useParentFolder = _useCanvasOperationsLegacy01pJs.n;
        canvasEventBus = _useCanvasOperationsLegacy01pJs.r;
        useCanvasOperations = _useCanvasOperationsLegacy01pJs.t;
      }, function (_foldersStoreLegacy01tJs) {}, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_KeyboardShortcutTooltipLegacy01xJs) {
        KeyboardShortcutTooltip_default = _KeyboardShortcutTooltipLegacy01xJs.t;
      }, function (_useCanvasMappingLegacy01zJs) {
        ExperimentalCanvasNodeSettings_default = _useCanvasMappingLegacy01zJs.c;
        useWorkflowExtraction = _useCanvasMappingLegacy01zJs.l;
        Canvas_default = _useCanvasMappingLegacy01zJs.n;
        useContextMenuItems = _useCanvasMappingLegacy01zJs.o;
        useExpressionResolveCtx = _useCanvasMappingLegacy01zJs.s;
        useCanvasMapping = _useCanvasMappingLegacy01zJs.t;
        CanvasRunWorkflowButton_default = _useCanvasMappingLegacy01zJs.u;
      }, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {}, function (_dataTableStoreLegacy01HJs) {}, function (_isEmptyLegacy01TJs) {
        JsonEditor_default = _isEmptyLegacy01TJs.c;
      }, function (_NDVEmptyStateLegacy01VJs) {}, function (_exportsLegacy01XJs) {}, function (_externalSecretsEeStoreLegacy01ZJs) {
        useExternalSecretsStore = _externalSecretsEeStoreLegacy01ZJs.t;
      }, function (_uniqByLegacy01$Js) {}, function (_semverLegacy021Js) {}, function (_CommunityNodeUpdateInfoLegacy023Js) {}, function (_DraggableLegacy02dJs) {}, function (_VirtualSchemaLegacy02fJs) {
        NodeExecuteButton_default = _VirtualSchemaLegacy02fJs.n;
      }, function (_TextWithHighlightsLegacy02hJs) {}, function (_useTelemetryContextLegacy02jJs) {
        useTelemetryContext = _useTelemetryContextLegacy02jJs.t;
      }, function (_schemaPreviewStoreLegacy02lJs) {}, function (_nodeTransformsLegacy02nJs) {
        needsAgentInput = _nodeTransformsLegacy02nJs.a;
      }, function (_FileSaverMinLegacy02rJs) {}, function (_vueJsonPrettyLegacy02tJs) {}, function (_RunDataHtmlLegacy02vJs) {}, function (_dateFormatterLegacy02zJs) {}, function (_useExecutionHelpersLegacy02BJs) {}, function (_NodeSettingsLegacy02FJs) {}, function (_useActionsLegacy03dJs) {}, function (_vueLegacy03hJs) {}, function (_sourceControlEventBusLegacy03pJs) {
        sourceControlEventBus = _sourceControlEventBusLegacy03pJs.t;
      }, function (_useKeybindingsLegacy03tJs) {
        useKeybindings = _useKeybindingsLegacy03tJs.t;
      }, function (_useBeforeUnloadLegacy03NJs) {
        useBeforeUnload = _useBeforeUnloadLegacy03NJs.t;
      }, function (_readyToRunWorkflowsStoreLegacy03VJs) {
        useAITemplatesStarterCollectionStore = _readyToRunWorkflowsStoreLegacy03VJs.n;
        useReadyToRunWorkflowsStore = _readyToRunWorkflowsStoreLegacy03VJs.t;
      }, function (_useExecutionDataLegacy04bJs) {
        useExecutionData = _useExecutionDataLegacy04bJs.t;
      }, function (_useExecutionDebuggingLegacy04dJs) {
        useExecutionDebugging = _useExecutionDebuggingLegacy04dJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_jyurh_123 {\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n._canvas_jyurh_131 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: block;\n  align-items: stretch;\n  justify-content: stretch;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_17fl4_123 {\n  height: 100%;\n  overflow: auto;\n}\n._multipleNodes_17fl4_128 {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  padding: var(--spacing--3xl) var(--spacing--md);\n  gap: var(--spacing--md);\n}\n._multipleNodesActions_17fl4_138 {\n  align-self: stretch;\n  list-style-type: none;\n}\n._multipleNodesAction_17fl4_138 {\n  margin-top: -1px;\n}\n._multipleNodesAction_17fl4_138 button {\n  width: 100%;\n  border-radius: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-color: var(--border-color--light);\n}\n._multipleNodesAction_17fl4_138 button:disabled {\n  border-color: var(--border-color--light);\n}\n._multipleNodesAction_17fl4_138:first-of-type button {\n  border-top-left-radius: var(--radius);\n  border-top-right-radius: var(--radius);\n}\n._multipleNodesAction_17fl4_138:last-of-type button {\n  border-bottom-left-radius: var(--radius);\n  border-bottom-right-radius: var(--radius);\n}\n._multipleNodesAction_17fl4_138 button:hover {\n  z-index: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_hvb6m_123 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--2xs);\n  gap: var(--spacing--2xs);\n  border-bottom: var(--border);\n}\n._breadcrumbs_hvb6m_131 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n  flex-grow: 1;\n  flex-shrink: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1aqcs_123 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  border-left: 1px solid var(--color--foreground);\n  background: var(--color--background--light-3);\n  overflow-y: hidden;\n  height: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n._container_1aqcs_135 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n._content_1aqcs_141 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n._content_1aqcs_141._emptyContent_1aqcs_147 {\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n._isNdvInFocusPanelEnabled_1aqcs_152 ._content_1aqcs_141._emptyContent_1aqcs_147 {\n  flex-direction: column-reverse;\n}\n._content_1aqcs_141._emptyContent_1aqcs_147 ._emptyText_1aqcs_155 {\n  margin: 0 var(--spacing--xl);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n}\n._content_1aqcs_141._emptyContent_1aqcs_147 ._focusParameterWrapper_1aqcs_161 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing--2xs);\n  margin-block: var(--spacing--md);\n}\n._content_1aqcs_141._emptyContent_1aqcs_147 ._focusParameterWrapper_1aqcs_161 ._iconWrapper_1aqcs_168 {\n  position: relative;\n  display: inline-block;\n}\n._content_1aqcs_141._emptyContent_1aqcs_147 ._focusParameterWrapper_1aqcs_161 ._pointerIcon_1aqcs_172 {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translate(-20%, -30%);\n  pointer-events: none;\n}\n._content_1aqcs_141._emptyContent_1aqcs_147 ._focusParameterWrapper_1aqcs_161 [class*=\"_disabled_\"] {\n  cursor: default !important;\n}\n._content_1aqcs_141 ._tabHeader_1aqcs_182 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--color--foreground);\n  padding: var(--spacing--2xs);\n}\n._content_1aqcs_141 ._tabHeader_1aqcs_182 ._tabHeaderText_1aqcs_189 {\n  display: flex;\n  gap: var(--spacing--4xs);\n  align-items: baseline;\n}\n._content_1aqcs_141 ._tabHeader_1aqcs_182 ._buttonWrapper_1aqcs_194 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._content_1aqcs_141 ._parameterDetailsWrapper_1aqcs_199 {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n  padding: var(--spacing--2xs);\n}\n._content_1aqcs_141 ._parameterDetailsWrapper_1aqcs_199 ._parameterOptionsWrapper_1aqcs_206 {\n  display: flex;\n  justify-content: space-between;\n}\n._content_1aqcs_141 ._parameterDetailsWrapper_1aqcs_199 ._noExecutionDataTip_1aqcs_210 {\n  align-content: center;\n}\n._content_1aqcs_141 ._parameterDetailsWrapper_1aqcs_199 ._editorContainer_1aqcs_213 {\n  height: 0;\n  flex-grow: 1;\n}\n._content_1aqcs_141 ._parameterDetailsWrapper_1aqcs_199 ._editorContainer_1aqcs_213 ._editor_1aqcs_213 {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  font-size: var(--font-size--2xs);\n}\n._content_1aqcs_141 ._parameterDetailsWrapper_1aqcs_199 ._editorContainer_1aqcs_213 ._editor_1aqcs_213 .cm-editor {\n  background-color: var(--code--color--background);\n  width: 100%;\n}\n._delayedShow_1aqcs_228 {\n  opacity: 0;\n  transition: opacity 0.1s none;\n  animation: _triggerShow_1aqcs_1 0.1s normal 0.1s forwards;\n}\n@keyframes _triggerShow_1aqcs_1 {\nto {\n    opacity: 1;\n}\n}\n._closeButton_1aqcs_239 {\n  cursor: pointer;\n}\n._heightFull_1aqcs_243 {\n  height: 100%;\n}\n._forceHover_1aqcs_247 {\n  color: var(--button--color--text--secondary--hover-active-focus);\n  border-color: var(--button--border-color--secondary--hover-active-focus);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1ahwb_123 {\n  display: flex;\n  width: 100%;\n}\n._executionButtons_1ahwb_128 {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: var(--spacing--sm);\n  width: auto;\n}\n@media screen and (max-width: 991px) {\n._executionButtons_1ahwb_128 {\n    left: auto;\n    right: var(--spacing--sm);\n    transform: none;\n}\n}\n._executionButtons_1ahwb_128 button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.625rem;\n}\n._executionButtons_1ahwb_128 button:first-child {\n  margin: 0;\n}\n@media screen and (max-width: 767px) {\n._executionButtons_1ahwb_128 button {\n    text-indent: -10000px;\n    width: 42px;\n    height: 42px;\n    padding: 0;\n}\n._executionButtons_1ahwb_128 button span {\n    margin: 0;\n}\n}\n._executionButtons_1ahwb_128 ._chatButton_1ahwb_165 {\n  align-self: stretch;\n}\n._setupCredentialsButtonWrapper_1ahwb_169 {\n  position: absolute;\n  left: var(--spacing--sm);\n  top: var(--spacing--sm);\n}\n._readOnlyEnvironmentNotification_1ahwb_175 {\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n._thinkingPill_1ahwb_182 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/canvas/components/WorkflowCanvas.vue?vue&type=script&setup=true&lang.ts
        WorkflowCanvas_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          inheritAttrs: false,
          __name: "WorkflowCanvas",
          props: {
            id: {
              default: "canvas"
            },
            workflow: {},
            workflowObject: {},
            fallbackNodes: {
              default: () => []
            },
            showFallbackNodes: {
              type: Boolean,
              default: true
            },
            eventBus: {
              default: () => createEventBus()
            },
            readOnly: {
              type: Boolean
            },
            executing: {
              type: Boolean
            },
            suppressInteraction: {
              type: Boolean,
              default: false
            }
          },
          setup(__props, {
            expose: __expose
          }) {
            const props = __props;
            const canvasRef = useTemplateRef("canvas");
            const $style = useCssModule();
            const {
              onNodesInitialized
            } = useVueFlow(props.id);
            const workflow = toRef(props, "workflow");
            const workflowObject = toRef(props, "workflowObject");
            const {
              nodes: mappedNodes,
              connections: mappedConnections
            } = useCanvasMapping({
              nodes: computed(() => {
                return props.showFallbackNodes ? [...props.workflow.nodes, ...props.fallbackNodes] : props.workflow.nodes;
              }),
              connections: computed(() => props.workflow.connections),
              workflowObject
            });
            const initialFitViewDone = ref(false);
            onNodesInitialized(() => {
              if (!initialFitViewDone.value || props.showFallbackNodes) {
                props.eventBus.emit("fitView");
                initialFitViewDone.value = true;
              }
            });
            const mappedNodesThrottled = refThrottled(mappedNodes, 200);
            const mappedConnectionsThrottled = refThrottled(mappedConnections, 200);
            __expose({
              executeContextMenuAction: (action, nodeIds) => canvasRef.value?.executeContextMenuAction(action, nodeIds)
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(unref($style).wrapper),
                "data-test-id": "canvas-wrapper"
              }, [createBaseVNode("div", {
                id: "canvas",
                class: normalizeClass(unref($style).canvas)
              }, [workflow.value ? (openBlock(), createBlock(Canvas_default, mergeProps({
                key: 0,
                id: _ctx.id,
                ref: "canvas",
                nodes: _ctx.executing ? unref(mappedNodesThrottled) : unref(mappedNodes),
                connections: _ctx.executing ? unref(mappedConnectionsThrottled) : unref(mappedConnections),
                "event-bus": _ctx.eventBus,
                "read-only": _ctx.readOnly,
                executing: _ctx.executing,
                "suppress-interaction": _ctx.suppressInteraction
              }, _ctx.$attrs), null, 16, ["id", "nodes", "connections", "event-bus", "read-only", "executing", "suppress-interaction"])) : createCommentVNode("", true)], 2), renderSlot(_ctx.$slots, "default")], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/WorkflowCanvas.vue?vue&type=style&index=0&lang.module.scss
        wrapper$2 = "_wrapper_jyurh_123";
        canvas = "_canvas_jyurh_131";
        WorkflowCanvas_vue_vue_type_style_index_0_lang_module_default = {
          wrapper: wrapper$2,
          canvas
        }; //#endregion
        //#region src/features/workflows/canvas/components/WorkflowCanvas.vue
        cssModules$4 = {
          "$style": WorkflowCanvas_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowCanvas_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowCanvas_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalNodeDetailsDrawer.vue?vue&type=script&setup=true&lang.ts
        ExperimentalNodeDetailsDrawer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExperimentalNodeDetailsDrawer",
          props: {
            node: {},
            nodeIds: {},
            isReadOnly: {
              type: Boolean
            }
          },
          emits: ["openNdv", "contextMenuAction"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const expressionResolveCtx = useExpressionResolveCtx(computed(() => __props.node));
            const contextMenuItems = useContextMenuItems(computed(() => __props.nodeIds));
            const ndvStore = useNDVStore();
            const ndvCloseTimes = ref(0);
            const nodeSettingsViewKey = computed(() => [__props.node.id, ndvCloseTimes.value].join("|"));
            watch(() => ndvStore.activeNodeName, (name, oldName) => {
              if (name === null && oldName !== null) ndvCloseTimes.value += 1;
            });
            provide(ExpressionLocalResolveContextSymbol, expressionResolveCtx);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.component)
              }, [_ctx.nodeIds.length > 1 ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 0,
                tag: "div",
                color: "text-base",
                class: normalizeClass(_ctx.$style.multipleNodes)
              }, {
                default: withCtx(() => [createBaseVNode("div", null, toDisplayString(_ctx.nodeIds.length) + " nodes selected", 1), createBaseVNode("ul", {
                  class: normalizeClass(_ctx.$style.multipleNodesActions)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(contextMenuItems), action => {
                  return openBlock(), createElementBlock("li", {
                    key: action.id,
                    class: normalizeClass(_ctx.$style.multipleNodesAction)
                  }, [createVNode(unref(N8nButton_default), {
                    type: "secondary",
                    disabled: action.disabled,
                    onClick: $event => emit("contextMenuAction", action.id, _ctx.nodeIds)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(action.label) + " ", 1), action.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut_default), mergeProps({
                      key: 0,
                      ref_for: true
                    }, action.shortcut), null, 16)) : createCommentVNode("", true)]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])], 2);
                }), 128))], 2)]),
                _: 1
              }, 8, ["class"])) : _ctx.node ? (openBlock(), createBlock(ExperimentalCanvasNodeSettings_default, {
                key: nodeSettingsViewKey.value,
                "node-id": _ctx.node.id,
                "is-read-only": _ctx.isReadOnly
              }, null, 8, ["node-id", "is-read-only"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalNodeDetailsDrawer.vue?vue&type=style&index=0&lang.module.scss
        component$1 = "_component_17fl4_123";
        multipleNodes = "_multipleNodes_17fl4_128";
        multipleNodesActions = "_multipleNodesActions_17fl4_138";
        multipleNodesAction = "_multipleNodesAction_17fl4_138";
        ExperimentalNodeDetailsDrawer_vue_vue_type_style_index_0_lang_module_default = {
          component: component$1,
          multipleNodes,
          multipleNodesActions,
          multipleNodesAction
        }; //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalNodeDetailsDrawer.vue
        cssModules$3 = {
          "$style": ExperimentalNodeDetailsDrawer_vue_vue_type_style_index_0_lang_module_default
        };
        ExperimentalNodeDetailsDrawer_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExperimentalNodeDetailsDrawer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalFocusPanelHeader.vue?vue&type=script&setup=true&lang.ts
        ExperimentalFocusPanelHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExperimentalFocusPanelHeader",
          props: {
            node: {},
            parameter: {},
            isExecutable: {
              type: Boolean
            },
            readOnly: {
              type: Boolean
            }
          },
          emits: ["execute", "openNdv", "clearParameter", "renameNode"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const nodeTypesStore = useNodeTypesStore();
            const i18n = useI18n();
            const nodeType = computed(() => nodeTypesStore.getNodeType(__props.node.type, __props.node.typeVersion));
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nText_default), {
                tag: "header",
                size: "small",
                bold: "",
                class: normalizeClass(_ctx.$style.component)
              }, {
                default: withCtx(() => [createVNode(NodeIcon_default, {
                  "node-type": nodeType.value,
                  size: 16
                }, null, 8, ["node-type"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.breadcrumbs)
                }, [_ctx.parameter ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-base",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.node.name), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-light"
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("/")])),
                  _: 1
                }), createTextVNode(" " + toDisplayString(_ctx.parameter.displayName), 1)], 64)) : (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
                  key: 1,
                  "model-value": _ctx.node.name,
                  "min-width": 0,
                  "max-width": 500,
                  placeholder: unref(i18n).baseText("ndv.title.rename.placeholder"),
                  "read-only": _ctx.readOnly,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => emit("renameNode", $event))
                }, null, 8, ["model-value", "placeholder", "read-only"]))], 2), _ctx.parameter ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                  key: 0,
                  icon: "x",
                  size: "small",
                  type: "tertiary",
                  text: "",
                  onClick: _cache[1] || (_cache[1] = $event => emit("clearParameter"))
                })) : (openBlock(), createBlock(unref(N8nIconButton_default), {
                  key: 1,
                  icon: "expand",
                  size: "small",
                  type: "tertiary",
                  text: "",
                  onClick: _cache[2] || (_cache[2] = $event => emit("openNdv"))
                })), _ctx.isExecutable ? (openBlock(), createBlock(NodeExecuteButton_default, {
                  key: 2,
                  "data-test-id": "node-execute-button",
                  "node-name": _ctx.node.name,
                  tooltip: `Execute ${_ctx.node.name}`,
                  type: "secondary",
                  size: "small",
                  icon: "play",
                  square: true,
                  "hide-label": true,
                  "telemetry-source": "focus",
                  onExecute: _cache[3] || (_cache[3] = $event => emit("execute"))
                }, null, 8, ["node-name", "tooltip"])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalFocusPanelHeader.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_hvb6m_123";
        breadcrumbs = "_breadcrumbs_hvb6m_131";
        ExperimentalFocusPanelHeader_vue_vue_type_style_index_0_lang_module_default = {
          component,
          breadcrumbs
        }; //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalFocusPanelHeader.vue
        cssModules$2 = {
          "$style": ExperimentalFocusPanelHeader_vue_vue_type_style_index_0_lang_module_default
        };
        ExperimentalFocusPanelHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExperimentalFocusPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/app/components/FocusPanel.vue?vue&type=script&setup=true&lang.ts
        FocusPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          name: "FocusPanel",
          __name: "FocusPanel",
          props: {
            isCanvasReadOnly: {
              type: Boolean
            }
          },
          emits: ["focus", "saveKeyboardShortcut", "contextMenuAction"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const inputField = ref();
            const wrapperRef = useTemplateRef("wrapper");
            const locale = useI18n();
            const nodeHelpers = useNodeHelpers();
            const focusPanelStore = useFocusPanelStore();
            const workflowsStore = useWorkflowsStore();
            const workflowState = injectWorkflowState();
            const nodeTypesStore = useNodeTypesStore();
            const telemetry = useTelemetry();
            const nodeSettingsParameters = useNodeSettingsParameters();
            const environmentsStore = useEnvironmentsStore();
            const experimentalNdvStore = useExperimentalNdvStore();
            const ndvStore = useNDVStore();
            const deviceSupport = useDeviceSupport();
            const vueFlow = useVueFlow(workflowsStore.workflowId);
            const activeElement = useActiveElement();
            const {
              renameNode
            } = useCanvasOperations();
            useTelemetryContext({
              view_shown: "focus_panel"
            });
            const resolvedParameter = computed(() => focusPanelStore.resolvedParameter);
            const inputValue = ref("");
            const focusPanelActive = computed(() => focusPanelStore.focusPanelActive);
            const focusPanelWidth = computed(() => focusPanelStore.focusPanelWidth);
            const isDisabled = computed(() => {
              if (!resolvedParameter.value) return false;
              return !!resolvedParameter.value.parameter.disabledOptions && nodeSettingsParameters.shouldDisplayNodeParameter(resolvedParameter.value.node.parameters, resolvedParameter.value.node, resolvedParameter.value.parameter, resolvedParameter.value.parameterPath.split(".").slice(1, -1).join("."), "disabledOptions");
            });
            const isDisplayed = computed(() => {
              if (!resolvedParameter.value) return true;
              return nodeSettingsParameters.shouldDisplayNodeParameter(resolvedParameter.value.node.parameters, resolvedParameter.value.node, resolvedParameter.value.parameter, resolvedParameter.value.parameterPath.split(".").slice(1, -1).join("."), "displayOptions");
            });
            const node = computed(() => {
              if (!experimentalNdvStore.isNdvInFocusPanelEnabled || resolvedParameter.value) return resolvedParameter.value?.node;
              const selected = vueFlow.getSelectedNodes.value[0];
              return selected?.data?.render.type === CanvasNodeRenderType.Default ? workflowsStore.allNodes.find(n => n.id === selected.id) : void 0;
            });
            const multipleNodesSelected = computed(() => vueFlow.getSelectedNodes.value.length > 1);
            const isExecutable = computed(() => {
              if (!node.value) return false;
              if (!isDisplayed.value) return false;
              const foreignCredentials = nodeHelpers.getForeignCredentialsIfSharingEnabled(node.value.credentials);
              return nodeHelpers.isNodeExecutable(node.value, !props.isCanvasReadOnly, foreignCredentials);
            });
            const {
              workflowRunData
            } = useExecutionData({
              node
            });
            const hasNodeRun = computed(() => {
              if (!node.value) return true;
              const parentNode = workflowsStore.workflowObject.getParentNodes(node.value.name, "main", 1)[0];
              return Boolean(parentNode && workflowRunData.value && Object.prototype.hasOwnProperty.bind(workflowRunData.value)(parentNode));
            });
            function getTypeOption(optionName) {
              return resolvedParameter.value ? getParameterTypeOption(resolvedParameter.value.parameter, optionName) : void 0;
            }
            const codeEditorMode = computed(() => {
              return resolvedParameter.value?.node.parameters.mode;
            });
            const editorType = computed(() => {
              return getTypeOption("editor") ?? void 0;
            });
            const editorLanguage = computed(() => {
              if (editorType.value === "json" || resolvedParameter.value?.parameter.type === "json") return "json";
              return getTypeOption("editorLanguage") ?? "javaScript";
            });
            const editorRows = computed(() => getTypeOption("rows"));
            const isToolNode = computed(() => resolvedParameter.value ? nodeTypesStore.isToolNode(resolvedParameter.value?.node.type) : false);
            const isHtmlNode = computed(() => !!resolvedParameter.value && resolvedParameter.value.node.type === "n8n-nodes-base.html");
            const expressionModeEnabled = computed(() => resolvedParameter.value && isValueExpression(resolvedParameter.value.parameter, resolvedParameter.value.value));
            const expression = computed(() => {
              if (!expressionModeEnabled.value) return "";
              return isResourceLocatorValue(resolvedParameter.value) ? resolvedParameter.value.value : resolvedParameter.value;
            });
            const shouldCaptureForPosthog = computed(() => resolvedParameter.value?.node.type === AI_TRANSFORM_NODE_TYPE);
            const isReadOnly = computed(() => props.isCanvasReadOnly || isDisabled.value);
            const resolvedAdditionalExpressionData = computed(() => {
              return {
                $vars: environmentsStore.variablesAsObject
              };
            });
            const targetNodeParameterContext = computed(() => {
              if (!resolvedParameter.value) return void 0;
              return {
                nodeName: resolvedParameter.value.node.name,
                parameterPath: resolvedParameter.value.parameterPath
              };
            });
            const isNodeExecuting = computed(() => workflowState.executingNode.isNodeExecuting(node.value?.name ?? ""));
            const selectedNodeIds = computed(() => vueFlow.getSelectedNodes.value.map(n => n.id));
            const emptyTitle = computed(() => experimentalNdvStore.isNdvInFocusPanelEnabled ? locale.baseText("nodeView.focusPanel.v2.noParameters.title") : locale.baseText("nodeView.focusPanel.noParameters.title"));
            const emptySubtitle = computed(() => experimentalNdvStore.isNdvInFocusPanelEnabled ? locale.baseText("nodeView.focusPanel.v2.noParameters.subtitle") : locale.baseText("nodeView.focusPanel.noParameters.subtitle"));
            const {
              resolvedExpression
            } = useResolvedExpression({
              expression,
              additionalData: resolvedAdditionalExpressionData,
              stringifyObject: resolvedParameter.value && resolvedParameter.value.parameter.type !== "multiOptions"
            });
            function valueChanged(value) {
              if (resolvedParameter.value === void 0) return;
              nodeSettingsParameters.updateNodeParameter(toRef(resolvedParameter.value.node.parameters), {
                value,
                name: resolvedParameter.value.parameterPath
              }, value, resolvedParameter.value.node, isToolNode.value);
            }
            async function setFocus() {
              await nextTick();
              if (inputField.value) {
                if (hasFocusOnInput(inputField.value)) inputField.value.focusOnInput();else if (isFocusableEl(inputField.value)) inputField.value.focus();
              }
              emit("focus");
            }
            function optionSelected(command) {
              if (!resolvedParameter.value) return;
              switch (command) {
                case "resetValue":
                  if (typeof resolvedParameter.value.parameter.default === "string") valueChanged(resolvedParameter.value.parameter.default);
                  setFocus();
                  break;
                case "addExpression":
                  {
                    const newValue = formatAsExpression(resolvedParameter.value.value, resolvedParameter.value.parameter.type);
                    valueChanged(typeof newValue === "string" ? newValue : newValue.value);
                    setFocus();
                    break;
                  }
                case "removeExpression":
                  {
                    const newValue = parseFromExpression(resolvedParameter.value.value, resolvedExpression.value, resolvedParameter.value.parameter.type, resolvedParameter.value.parameter.default, (resolvedParameter.value.parameter.options ?? []).filter(isValidParameterOption));
                    if (typeof newValue === "string") valueChanged(newValue);else if (newValue && typeof newValue.value === "string") valueChanged(newValue.value);
                    setFocus();
                    break;
                  }
                case "formatHtml":
                  htmlEditorEventBus.emit("format-html");
                  break;
              }
            }
            function closeFocusPanel() {
              if (experimentalNdvStore.isNdvInFocusPanelEnabled && resolvedParameter.value) {
                focusPanelStore.unsetParameters();
                telemetry.track("User removed focused param", {
                  source: "closeIcon",
                  parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
                });
                return;
              }
              telemetry.track("User closed focus panel", {
                source: "closeIcon",
                parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
              });
              focusPanelStore.closeFocusPanel();
            }
            function onExecute() {
              telemetry.track("User executed node from focus panel", focusPanelStore.focusedNodeParametersInTelemetryFormat[0]);
            }
            function onInputChange(val) {
              inputValue.value = val;
              valueChanged(val);
            }
            function focusWithDelay() {
              setTimeout(() => {
                setFocus();
              }, 50);
            }
            function handleKeydown(event) {
              if (event.key === "s" && deviceSupport.isCtrlKeyPressed(event)) {
                event.stopPropagation();
                event.preventDefault();
                if (isReadOnly.value) return;
                emit("saveKeyboardShortcut", event);
              }
            }
            const registerKeyboardListener = () => {
              document.addEventListener("keydown", handleKeydown, true);
            };
            const unregisterKeyboardListener = () => {
              document.removeEventListener("keydown", handleKeydown, true);
            };
            watch([() => focusPanelStore.lastFocusTimestamp, () => expressionModeEnabled.value], () => focusWithDelay());
            watch(() => focusPanelStore.focusPanelActive, newValue => {
              if (newValue) registerKeyboardListener();else unregisterKeyboardListener();
            }, {
              immediate: true
            });
            watch(() => resolvedParameter.value, newValue => {
              if (newValue) {
                const value = newValue.value;
                if (typeof value === "string" && value !== inputValue.value) inputValue.value = value;
              }
            }, {
              immediate: true
            });
            watch(activeElement, active => {
              if (!node.value || !active || !wrapperRef.value?.contains(active)) return;
              const path = active.closest(".parameter-input")?.getAttribute("data-parameter-path");
              if (!path) return;
              telemetry.track("User focused focus panel", {
                node_id: node.value.id,
                node_type: node.value.type,
                parameter_path: path
              });
            });
            function onResize(event) {
              focusPanelStore.updateWidth(event.width);
            }
            const onResizeThrottle = useThrottleFn(onResize, 10);
            function onOpenNdv() {
              if (node.value) ndvStore.setActiveNodeName(node.value.name, "focus_panel");
            }
            function onRenameNode(value) {
              if (node.value) renameNode(node.value.name, value);
            }
            return (_ctx, _cache) => {
              return focusPanelActive.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref: "wrapper",
                "data-test-id": "focus-panel",
                class: normalizeClass([_ctx.$style.wrapper, "ignore-key-press-canvas", {
                  [_ctx.$style.isNdvInFocusPanelEnabled]: unref(experimentalNdvStore).isNdvInFocusPanelEnabled
                }]),
                onKeydown: _cache[10] || (_cache[10] = withModifiers(() => {}, ["stop"]))
              }, [createVNode(unref(N8nResizeWrapper_default), {
                width: focusPanelWidth.value,
                "supported-directions": ["left"],
                "min-width": 300,
                "max-width": unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? void 0 : 1e3,
                "grid-size": 8,
                style: normalizeStyle({
                  width: `${focusPanelWidth.value}px`
                }),
                onResize: unref(onResizeThrottle)
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.container)
                }, [unref(experimentalNdvStore).isNdvInFocusPanelEnabled && node.value && !multipleNodesSelected.value ? (openBlock(), createBlock(ExperimentalFocusPanelHeader_default, {
                  key: 0,
                  node: node.value,
                  parameter: resolvedParameter.value?.parameter,
                  "is-executable": isExecutable.value,
                  "read-only": _ctx.isCanvasReadOnly,
                  onExecute,
                  onOpenNdv,
                  onClearParameter: closeFocusPanel,
                  onRenameNode
                }, null, 8, ["node", "parameter", "is-executable", "read-only"])) : createCommentVNode("", true), resolvedParameter.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.content),
                  "data-test-id": "focus-parameter"
                }, [!unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.tabHeader)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tabHeaderText)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-dark",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(resolvedParameter.value.parameter.displayName), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  color: "text-base",
                  size: "xsmall"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(resolvedParameter.value.node.name), 1)]),
                  _: 1
                })], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.buttonWrapper)
                }, [createVNode(NodeExecuteButton_default, {
                  "data-test-id": "node-execute-button",
                  "node-name": resolvedParameter.value.node.name,
                  tooltip: `Execute ${resolvedParameter.value.node.name}`,
                  disabled: !isExecutable.value,
                  size: "small",
                  icon: "play",
                  square: true,
                  "hide-label": true,
                  "telemetry-source": "focus",
                  onExecute
                }, null, 8, ["node-name", "tooltip", "disabled"]), createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.closeButton),
                  icon: "x",
                  color: "text-base",
                  size: "xlarge",
                  onClick: closeFocusPanel
                }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.parameterDetailsWrapper)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.parameterOptionsWrapper)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.noExecutionDataTip)
                }, [!hasNodeRun.value && !isNodeExecuting.value ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.delayedShow),
                  bold: true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("nodeView.focusPanel.noExecutionData")), 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)], 2), isDisplayed.value ? (openBlock(), createBlock(ParameterOptions_default, {
                  key: 0,
                  parameter: resolvedParameter.value.parameter,
                  value: resolvedParameter.value.value,
                  "is-read-only": isReadOnly.value,
                  "onUpdate:modelValue": optionSelected
                }, null, 8, ["parameter", "value", "is-read-only"])) : createCommentVNode("", true)], 2), typeof resolvedParameter.value.value === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.editorContainer)
                }, [!isDisplayed.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass([_ctx.$style.content, _ctx.$style.emptyContent])
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.emptyText)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("nodeView.focusPanel.missingParameter")), 1)]),
                  _: 1
                })], 2)], 2)) : expressionModeEnabled.value ? (openBlock(), createBlock(ExpressionEditorModalInput_default, {
                  key: 1,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => inputValue.value = $event),
                  class: normalizeClass(_ctx.$style.editor),
                  "is-read-only": isReadOnly.value,
                  path: resolvedParameter.value.parameterPath,
                  "data-test-id": "expression-modal-input",
                  "target-node-parameter-context": targetNodeParameterContext.value,
                  onChange: _cache[1] || (_cache[1] = $event => onInputChange($event.value))
                }, null, 8, ["modelValue", "class", "is-read-only", "path", "target-node-parameter-context"])) : ["json", "string"].includes(resolvedParameter.value.parameter.type) ? (openBlock(), createElementBlock(Fragment, {
                  key: 2
                }, [editorType.value === "codeNodeEditor" ? (openBlock(), createBlock(CodeNodeEditor_default, {
                  key: 0,
                  id: resolvedParameter.value.parameterPath,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[2] || (_cache[2] = $event => inputValue.value = $event), onInputChange],
                  class: normalizeClass(_ctx.$style.heightFull),
                  mode: codeEditorMode.value,
                  "default-value": resolvedParameter.value.parameter.default,
                  language: editorLanguage.value,
                  "is-read-only": isReadOnly.value,
                  "target-node-parameter-context": targetNodeParameterContext.value,
                  "fill-parent": "",
                  "disable-ask-ai": true
                }, null, 8, ["id", "modelValue", "class", "mode", "default-value", "language", "is-read-only", "target-node-parameter-context"])) : editorType.value === "htmlEditor" ? (openBlock(), createBlock(HtmlEditor_default, {
                  key: 1,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => inputValue.value = $event), onInputChange],
                  "is-read-only": isReadOnly.value,
                  rows: editorRows.value,
                  "disable-expression-coloring": !isHtmlNode.value,
                  "disable-expression-completions": !isHtmlNode.value,
                  fullscreen: "",
                  "target-node-parameter-context": targetNodeParameterContext.value
                }, null, 8, ["modelValue", "is-read-only", "rows", "disable-expression-coloring", "disable-expression-completions", "target-node-parameter-context"])) : editorType.value === "cssEditor" ? (openBlock(), createBlock(CssEditor_default, {
                  key: 2,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[4] || (_cache[4] = $event => inputValue.value = $event), onInputChange],
                  "is-read-only": isReadOnly.value,
                  rows: editorRows.value,
                  fullscreen: "",
                  "target-node-parameter-context": targetNodeParameterContext.value
                }, null, 8, ["modelValue", "is-read-only", "rows", "target-node-parameter-context"])) : editorType.value === "sqlEditor" ? (openBlock(), createBlock(SqlEditor_default, {
                  key: 3,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[5] || (_cache[5] = $event => inputValue.value = $event), onInputChange],
                  dialect: getTypeOption("sqlDialect"),
                  "is-read-only": isReadOnly.value,
                  rows: editorRows.value,
                  fullscreen: "",
                  "target-node-parameter-context": targetNodeParameterContext.value
                }, null, 8, ["modelValue", "dialect", "is-read-only", "rows", "target-node-parameter-context"])) : editorType.value === "jsEditor" ? (openBlock(), createBlock(JsEditor_default, {
                  key: 4,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[6] || (_cache[6] = $event => inputValue.value = $event), onInputChange],
                  "is-read-only": isReadOnly.value,
                  rows: editorRows.value,
                  "posthog-capture": shouldCaptureForPosthog.value,
                  "fill-parent": ""
                }, null, 8, ["modelValue", "is-read-only", "rows", "posthog-capture"])) : resolvedParameter.value.parameter.type === "json" ? (openBlock(), createBlock(JsonEditor_default, {
                  key: 5,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[7] || (_cache[7] = $event => inputValue.value = $event), onInputChange],
                  "is-read-only": isReadOnly.value,
                  rows: editorRows.value,
                  fullscreen: "",
                  "fill-parent": ""
                }, null, 8, ["modelValue", "is-read-only", "rows"])) : (openBlock(), createBlock(unref(N8nInput_default), {
                  key: 6,
                  ref_key: "inputField",
                  ref: inputField,
                  modelValue: inputValue.value,
                  "onUpdate:modelValue": [_cache[8] || (_cache[8] = $event => inputValue.value = $event), onInputChange],
                  class: normalizeClass(_ctx.$style.editor),
                  readonly: isReadOnly.value,
                  type: "textarea",
                  resize: "none"
                }, null, 8, ["modelValue", "class", "readonly"]))], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2)], 2)) : node.value && unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? (openBlock(), createBlock(ExperimentalNodeDetailsDrawer_default, {
                  key: 2,
                  node: node.value,
                  "node-ids": selectedNodeIds.value,
                  "is-read-only": isReadOnly.value,
                  onOpenNdv,
                  onContextMenuAction: _cache[9] || (_cache[9] = (action, nodeIds) => emit("contextMenuAction", action, nodeIds))
                }, null, 8, ["node", "node-ids", "is-read-only"])) : (openBlock(), createElementBlock("div", {
                  key: 3,
                  class: normalizeClass([_ctx.$style.content, _ctx.$style.emptyContent])
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.focusParameterWrapper)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.iconWrapper)
                }, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.forceHover),
                  icon: "panel-right",
                  size: "medium"
                }, null, 8, ["class"]), createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.pointerIcon),
                  icon: "mouse-pointer",
                  color: "text-dark",
                  size: "large"
                }, null, 8, ["class"])], 2), createVNode(unref(N8nIcon_default), {
                  icon: "ellipsis-vertical",
                  size: "small",
                  color: "text-base"
                }), createVNode(unref(N8nRadioButtons_default), {
                  size: "small",
                  "model-value": "expression",
                  disabled: true,
                  options: [{
                    label: unref(locale).baseText("parameterInput.fixed"),
                    value: "fixed"
                  }, {
                    label: unref(locale).baseText("parameterInput.expression"),
                    value: "expression"
                  }]
                }, null, 8, ["options"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.emptyText)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-base",
                  size: "medium",
                  bold: true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(emptyTitle.value), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  color: "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(emptySubtitle.value), 1)]),
                  _: 1
                })], 2)], 2))], 2)]),
                _: 1
              }, 8, ["width", "max-width", "style", "onResize"])], 34)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/FocusPanel.vue?vue&type=style&index=0&lang.module.scss
        wrapper$1 = "_wrapper_1aqcs_123";
        container = "_container_1aqcs_135";
        content = "_content_1aqcs_141";
        emptyContent = "_emptyContent_1aqcs_147";
        isNdvInFocusPanelEnabled = "_isNdvInFocusPanelEnabled_1aqcs_152";
        emptyText = "_emptyText_1aqcs_155";
        focusParameterWrapper = "_focusParameterWrapper_1aqcs_161";
        iconWrapper = "_iconWrapper_1aqcs_168";
        pointerIcon = "_pointerIcon_1aqcs_172";
        tabHeader = "_tabHeader_1aqcs_182";
        tabHeaderText = "_tabHeaderText_1aqcs_189";
        buttonWrapper = "_buttonWrapper_1aqcs_194";
        parameterDetailsWrapper = "_parameterDetailsWrapper_1aqcs_199";
        parameterOptionsWrapper = "_parameterOptionsWrapper_1aqcs_206";
        noExecutionDataTip = "_noExecutionDataTip_1aqcs_210";
        editorContainer = "_editorContainer_1aqcs_213";
        editor = "_editor_1aqcs_213";
        delayedShow = "_delayedShow_1aqcs_228";
        triggerShow = "_triggerShow_1aqcs_1";
        closeButton = "_closeButton_1aqcs_239";
        heightFull = "_heightFull_1aqcs_243";
        forceHover = "_forceHover_1aqcs_247";
        FocusPanel_vue_vue_type_style_index_0_lang_module_default = {
          wrapper: wrapper$1,
          container,
          content,
          emptyContent,
          isNdvInFocusPanelEnabled,
          emptyText,
          focusParameterWrapper,
          iconWrapper,
          pointerIcon,
          tabHeader,
          tabHeaderText,
          buttonWrapper,
          parameterDetailsWrapper,
          parameterOptionsWrapper,
          noExecutionDataTip,
          editorContainer,
          editor,
          delayedShow,
          triggerShow,
          closeButton,
          heightFull,
          forceHover
        }; //#endregion
        //#region src/app/components/FocusPanel.vue
        cssModules$1 = {
          "$style": FocusPanel_vue_vue_type_style_index_0_lang_module_default
        };
        FocusPanel_default = /* @__PURE__ */__plugin_vue_export_helper_default(FocusPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/app/composables/useGlobalLinkActions.ts
        state = reactive({
          customActions: {},
          delegatedClickHandler: null
        });
        CanvasStopCurrentExecutionButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasStopCurrentExecutionButton",
          props: {
            stopping: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const title = computed(() => props.stopping ? i18n.baseText("nodeView.stoppingCurrentExecution") : i18n.baseText("nodeView.stopCurrentExecution"));
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nIconButton_default), {
                icon: "square",
                size: "large",
                class: "stop-execution",
                type: "secondary",
                title: title.value,
                loading: _ctx.stopping,
                "data-test-id": "stop-execution-button"
              }, null, 8, ["title", "loading"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasStopCurrentExecutionButton.vue
        CanvasStopCurrentExecutionButton_default = CanvasStopCurrentExecutionButton_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasStopWaitingForWebhookButton.vue?vue&type=script&setup=true&lang.ts
        CanvasStopWaitingForWebhookButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasStopWaitingForWebhookButton",
          setup(__props) {
            const i18n = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nIconButton_default), {
                class: "stop-execution",
                icon: "square",
                size: "large",
                title: unref(i18n).baseText("nodeView.stopWaitingForWebhookCall"),
                type: "secondary",
                "data-test-id": "stop-execution-waiting-for-webhook-button"
              }, null, 8, ["title"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasStopWaitingForWebhookButton.vue
        CanvasStopWaitingForWebhookButton_default = CanvasStopWaitingForWebhookButton_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/components/NodeViewUnfinishedWorkflowMessage.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          "data-action": "reload"
        };
        _hoisted_2 = {
          href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/",
          target: "_blank"
        };
        NodeViewUnfinishedWorkflowMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeViewUnfinishedWorkflowMessage",
          setup(__props) {
            const i18 = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createBaseVNode("a", _hoisted_1, toDisplayString(unref(i18).baseText("nodeView.refresh")), 1), createTextVNode(" " + toDisplayString(unref(i18).baseText("nodeView.toSeeTheLatestStatus")) + ". ", 1), _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18).baseText("nodeView.moreInfo")), 1)]);
            };
          }
        }); //#endregion
        //#region src/app/components/NodeViewUnfinishedWorkflowMessage.vue
        NodeViewUnfinishedWorkflowMessage_default = NodeViewUnfinishedWorkflowMessage_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasChatButton.vue?vue&type=script&setup=true&lang.ts
        CanvasChatButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasChatButton",
          props: {
            label: {},
            type: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nButton_default), {
                label: _ctx.label,
                size: "large",
                icon: "message-circle",
                type: _ctx.type,
                "data-test-id": "workflow-chat-button"
              }, null, 8, ["label", "type"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasChatButton.vue
        CanvasChatButton_default = CanvasChatButton_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/views/NodeView.vue?vue&type=script&setup=true&lang.ts
        NodeView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          name: "NodeView",
          __name: "NodeView",
          setup(__props) {
            const LazyNodeCreation = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./NodeCreation-legacy-DHbcI_-C.js"), true               ? void 0 : void 0));
            const LazyNodeDetailsView = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./NodeDetailsView-legacy-DGzFrDjg.js"), true               ? void 0 : void 0));
            const LazyNodeDetailsViewV2 = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./NodeDetailsViewV2-legacy-DoWBLAep.js"), true               ? void 0 : void 0));
            const LazySetupWorkflowCredentialsButton = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./SetupWorkflowCredentialsButton-legacy-D3QQ8VBR.js"), true               ? void 0 : void 0));
            const $style = useCssModule();
            const router = useRouter();
            const route = useRoute();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const externalHooks = useExternalHooks();
            const toast = useToast();
            const message = useMessage();
            const documentTitle = useDocumentTitle();
            const workflowSaving = useWorkflowSaving({
              router
            });
            const nodeHelpers = useNodeHelpers();
            const nodeTypesStore = useNodeTypesStore();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const sourceControlStore = useSourceControlStore();
            const nodeCreatorStore = useNodeCreatorStore();
            const settingsStore = useSettingsStore();
            const credentialsStore = useCredentialsStore();
            const environmentsStore = useEnvironmentsStore();
            const externalSecretsStore = useExternalSecretsStore();
            const rootStore = useRootStore();
            const executionsStore = useExecutionsStore();
            const canvasStore = useCanvasStore();
            const npsSurveyStore = useNpsSurveyStore();
            const historyStore = useHistoryStore();
            const projectsStore = useProjectsStore();
            const usersStore = useUsersStore();
            const tagsStore = useTagsStore();
            const pushConnectionStore = usePushConnectionStore();
            const ndvStore = useNDVStore();
            const focusPanelStore = useFocusPanelStore();
            const builderStore = useBuilderStore();
            const posthogStore = usePostHog();
            const agentRequestStore = useAgentRequestStore();
            const logsStore = useLogsStore();
            const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
            const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
            const experimentalNdvStore = useExperimentalNdvStore();
            const workflowState = useWorkflowState();
            provide(WorkflowStateKey, workflowState);
            const {
              addBeforeUnloadEventBindings,
              removeBeforeUnloadEventBindings
            } = useBeforeUnload({
              route
            });
            const {
              registerCustomAction,
              unregisterCustomAction
            } = useGlobalLinkActions();
            const {
              runWorkflow,
              runEntireWorkflow,
              stopCurrentExecution,
              stopWaitingForWebhook
            } = useRunWorkflow({
              router
            });
            const {
              updateNodePosition,
              updateNodesPosition,
              tidyUp,
              revertUpdateNodePosition,
              renameNode,
              revertRenameNode,
              revertReplaceNodeParameters,
              setNodeActive,
              setNodeSelected,
              toggleNodesDisabled,
              revertToggleNodeDisabled,
              toggleNodesPinned,
              setNodeParameters,
              deleteNode,
              deleteNodes,
              copyNodes,
              cutNodes,
              duplicateNodes,
              revertDeleteNode,
              revertAddNode,
              createConnection,
              revertCreateConnection,
              deleteConnection,
              revertDeleteConnection,
              revalidateNodeInputConnections,
              revalidateNodeOutputConnections,
              setNodeActiveByName,
              clearNodeActive,
              tryToOpenSubworkflowInNewTab,
              importWorkflowData,
              fetchWorkflowDataFromUrl,
              resetWorkspace,
              initializeWorkspace,
              openExecution,
              editableWorkflow,
              editableWorkflowObject,
              lastClickPosition,
              startChat,
              addNodesAndConnections,
              fitView,
              openWorkflowTemplate,
              openWorkflowTemplateFromJSON
            } = useCanvasOperations();
            const {
              extractWorkflow
            } = useWorkflowExtraction();
            const {
              applyExecutionData
            } = useExecutionDebugging();
            const {
              fetchAndSetParentFolder
            } = useParentFolder();
            useClipboard({
              onPaste: onClipboardPaste
            });
            useKeybindings({
              ctrl_alt_o: () => uiStore.openModal(ABOUT_MODAL_KEY)
            });
            const canvasRef = useTemplateRef("canvas");
            const isLoading = ref(true);
            const readOnlyNotification = ref(null);
            const isProductionExecutionPreview = ref(false);
            const isExecutionPreview = ref(false);
            const canOpenNDV = ref(true);
            const hideNodeIssues = ref(false);
            const fallbackNodes = ref([]);
            const initializedWorkflowId = ref();
            const workflowId = computed(() => {
              const workflowIdParam = route.params.name;
              return ["__EMPTY__", "new"].includes(workflowIdParam) ? void 0 : workflowIdParam;
            });
            const routeNodeId = computed(() => route.params.nodeId);
            const isNewWorkflowRoute = computed(() => route.name === VIEWS.NEW_WORKFLOW || !workflowId.value);
            const isWorkflowRoute = computed(() => !!route?.meta?.nodeView || isDemoRoute.value);
            const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
            const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
            const isReadOnlyEnvironment = computed(() => {
              return sourceControlStore.preferences.branchReadOnly;
            });
            const isNDVV2 = computed(() => posthogStore.isVariantEnabled(NDV_UI_OVERHAUL_EXPERIMENT.name, NDV_UI_OVERHAUL_EXPERIMENT.variant));
            const isCanvasReadOnly = computed(() => {
              return isDemoRoute.value || isReadOnlyEnvironment.value || !(workflowPermissions.value.update ?? projectPermissions.value.workflow.update) || editableWorkflow.value.isArchived || builderStore.streaming;
            });
            const showFallbackNodes = computed(() => triggerNodes.value.length === 0);
            const keyBindingsEnabled = computed(() => {
              return !ndvStore.activeNode && uiStore.activeModals.length === 0;
            });
            const isLogsPanelOpen = computed(() => logsStore.isOpen);
            /**
            * Initialization
            */
            async function initializeData() {
              const loadPromises = (() => {
                if (settingsStore.isPreviewMode && isDemoRoute.value) return [];
                const promises = [workflowsStore.fetchActiveWorkflows(), credentialsStore.fetchAllCredentials(), credentialsStore.fetchCredentialTypes(true)];
                if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) promises.push(environmentsStore.fetchAllVariables());
                if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]) promises.push(externalSecretsStore.fetchAllSecrets());
                return promises;
              })();
              if (nodeTypesStore.allNodeTypes.length === 0) loadPromises.push(nodeTypesStore.getNodeTypes());
              try {
                await Promise.all(loadPromises);
                nodeTypesStore.fetchCommunityNodePreviews();
              } catch (error) {
                toast.showError(error, i18n.baseText("nodeView.showError.mounted1.title"), i18n.baseText("nodeView.showError.mounted1.message") + ":");
                return;
              }
            }
            async function initializeRoute(force = false) {
              if (route.query.action === "workflowSave") {
                uiStore.stateIsDirty = false;
                await router.replace({
                  query: {
                    ...route.query,
                    action: void 0
                  }
                });
                return;
              }
              if (route.query.action === "addEvaluationTrigger") nodeCreatorStore.openNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.ADD_EVALUATION_TRIGGER_BUTTON);else if (route.query.action === "addEvaluationNode") nodeCreatorStore.openNodeCreatorForActions(EVALUATION_NODE_TYPE, NODE_CREATOR_OPEN_SOURCES.ADD_EVALUATION_NODE_BUTTON);else if (route.query.action === "executeEvaluation") {
                if (evaluationTriggerNode.value) runEntireWorkflow("node", evaluationTriggerNode.value.name);
              }
              const isAlreadyInitialized = !force && initializedWorkflowId.value && ["new", workflowId.value].includes(initializedWorkflowId.value);
              if (uiStore.isBlankRedirect) uiStore.isBlankRedirect = false;else if (route.name === VIEWS.TEMPLATE_IMPORT) {
                const loadWorkflowFromJSON = route.query.fromJson === "true";
                const templateId = route.params.id;
                if (!templateId) return;
                if (loadWorkflowFromJSON) {
                  const workflow = getSampleWorkflowByTemplateId(templateId.toString());
                  if (!workflow) {
                    toast.showError(new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")), i18n.baseText("nodeView.couldntImportWorkflow"));
                    await router.replace({
                      name: VIEWS.NEW_WORKFLOW
                    });
                    return;
                  }
                  await openWorkflowTemplateFromJSON(workflow);
                } else await openWorkflowTemplate(templateId.toString());
              } else if (isWorkflowRoute.value) {
                if (!isAlreadyInitialized) {
                  historyStore.reset();
                  if (!isDemoRoute.value) await loadCredentials();
                  if (isNewWorkflowRoute.value || !workflowId.value) {
                    if (route.meta?.nodeView === true) await initializeWorkspaceForNewWorkflow();
                    return;
                  }
                  await initializeWorkspaceForExistingWorkflow(workflowId.value);
                  nextTick(() => {
                    updateNodesIssues();
                  });
                }
                if (route.name === VIEWS.EXECUTION_DEBUG) await initializeDebugMode();
              }
            }
            async function initializeWorkspaceForNewWorkflow() {
              resetWorkspace();
              const parentFolderId = route.query.parentFolderId;
              await workflowState.getNewWorkflowDataAndMakeShareable(void 0, projectsStore.currentProjectId, parentFolderId);
              await projectsStore.refreshCurrentProject();
              await fetchAndSetParentFolder(parentFolderId);
              uiStore.nodeViewInitialized = true;
              initializedWorkflowId.value = "new";
            }
            async function initializeWorkspaceForExistingWorkflow(id) {
              try {
                const workflowData = await workflowsStore.fetchWorkflow(id);
                openWorkflow(workflowData);
                if (workflowData.parentFolder) workflowsStore.setParentFolder(workflowData.parentFolder);
                if (workflowData.meta?.onboardingId) trackOpenWorkflowFromOnboardingTemplate();
                if (workflowData.meta?.templateId?.startsWith("035_template_onboarding")) aiTemplatesStarterCollectionStore.trackUserOpenedWorkflow(workflowData.meta.templateId.split("-").pop() ?? "");
                if (workflowData.meta?.templateId?.startsWith("37_onboarding_experiments_batch_aug11")) readyToRunWorkflowsStore.trackOpenWorkflow(workflowData.meta.templateId.split("-").pop() ?? "");
                await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject, workflowData.sharedWithProjects);
                workflowsStore.fetchLastSuccessfulExecution();
              } catch (error) {
                if (error.httpStatusCode === 404) return await router.replace({
                  name: VIEWS.ENTITY_NOT_FOUND,
                  params: {
                    entityType: "workflow"
                  }
                });
                if (error.httpStatusCode === 403) return await router.replace({
                  name: VIEWS.ENTITY_UNAUTHORIZED,
                  params: {
                    entityType: "workflow"
                  }
                });
                toast.showError(error, i18n.baseText("openWorkflow.workflowNotFoundError"));
                router.push({
                  name: VIEWS.NEW_WORKFLOW
                });
              } finally {
                uiStore.nodeViewInitialized = true;
                initializedWorkflowId.value = workflowId.value;
              }
            }
            function updateNodesIssues() {
              nodeHelpers.updateNodesInputIssues();
              nodeHelpers.updateNodesCredentialsIssues();
              nodeHelpers.updateNodesParameterIssues();
            }
            /**
            * Workflow
            */
            function openWorkflow(data) {
              resetWorkspace();
              documentTitle.setDocumentTitle(data.name, "IDLE");
              initializeWorkspace(data);
              externalHooks.run("workflow.open", {
                workflowId: data.id,
                workflowName: data.name
              });
              fitView();
            }
            function trackOpenWorkflowFromOnboardingTemplate() {
              telemetry.track(`User opened workflow from onboarding template with ID ${editableWorkflow.value.meta?.onboardingId}`, {
                workflow_id: workflowId.value
              });
            }
            /**
            * Nodes
            */
            const triggerNodes = computed(() => {
              return editableWorkflow.value.nodes.filter(node => node.type === "n8n-nodes-base.start" || nodeTypesStore.isTriggerNode(node.type));
            });
            const containsTriggerNodes = computed(() => triggerNodes.value.length > 0);
            const allTriggerNodesDisabled = computed(() => {
              return triggerNodes.value.filter(node => node.disabled).length === triggerNodes.value.length;
            });
            function onTidyUp(event, options) {
              tidyUp(event, options);
            }
            function onExtractWorkflow(nodeIds) {
              extractWorkflow(nodeIds);
            }
            function onUpdateNodesPosition(events) {
              updateNodesPosition(events, {
                trackHistory: true
              });
            }
            function onUpdateNodePosition(id, position) {
              updateNodePosition(id, position, {
                trackHistory: true
              });
            }
            function onRevertNodePosition({
              nodeName,
              position
            }) {
              revertUpdateNodePosition(nodeName, {
                x: position[0],
                y: position[1]
              });
            }
            function onDeleteNode(id) {
              const matchedFallbackNode = fallbackNodes.value.findIndex(node => node.id === id);
              if (matchedFallbackNode >= 0) fallbackNodes.value.splice(matchedFallbackNode, 1);else deleteNode(id, {
                trackHistory: true
              });
            }
            function onDeleteNodes(ids) {
              deleteNodes(ids);
            }
            function onRevertDeleteNode({
              node
            }) {
              revertDeleteNode(node);
            }
            function onToggleNodeDisabled(id) {
              if (!checkIfEditingIsAllowed()) return;
              toggleNodesDisabled([id]);
            }
            function onRevertToggleNodeDisabled({
              nodeName
            }) {
              revertToggleNodeDisabled(nodeName);
            }
            function onToggleNodesDisabled(ids) {
              if (!checkIfEditingIsAllowed()) return;
              toggleNodesDisabled(ids);
            }
            function onClickNode(_id, event) {
              lastClickPosition.value = [event.x, event.y];
              closeNodeCreator();
            }
            function onSetNodeActivated(id, event) {
              if (event?.metaKey || event?.ctrlKey) {
                if (tryToOpenSubworkflowInNewTab(id)) return;
              }
              setNodeActive(id, "canvas_default_view");
            }
            function onOpenSubWorkflow(id) {
              tryToOpenSubworkflowInNewTab(id);
            }
            function onSetNodeDeactivated() {
              clearNodeActive();
            }
            function onSetNodeSelected(id) {
              closeNodeCreator();
              setNodeSelected(id);
            }
            async function onCopyNodes(ids) {
              await copyNodes(ids);
              toast.showMessage({
                title: i18n.baseText("generic.copiedToClipboard"),
                type: "success"
              });
            }
            async function onClipboardPaste(plainTextData) {
              if (getNodeViewTab(route) !== MAIN_HEADER_TABS.WORKFLOW || !keyBindingsEnabled.value || !checkIfEditingIsAllowed()) return;
              let workflowData = null;
              if (plainTextData.match(VALID_WORKFLOW_IMPORT_URL_REGEX)) {
                if ((await message.confirm(i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.message", {
                  interpolate: {
                    plainTextData
                  }
                }), i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.headline"), {
                  type: "warning",
                  confirmButtonText: i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.confirmButtonText"),
                  cancelButtonText: i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.cancelButtonText")
                })) !== "confirm") return;
                workflowData = await fetchWorkflowDataFromUrl(plainTextData);
              } else workflowData = jsonParse(plainTextData, {
                fallbackValue: null
              });
              if (!workflowData) return;
              selectNodes((await importWorkflowData(workflowData, "paste", {
                importTags: false,
                viewport: viewportBoundaries.value
              })).nodes?.map(node => node.id) ?? []);
            }
            async function onCutNodes(ids) {
              if (isCanvasReadOnly.value) await copyNodes(ids);else await cutNodes(ids);
            }
            async function onDuplicateNodes(ids) {
              if (!checkIfEditingIsAllowed()) return;
              selectNodes(await duplicateNodes(ids, {
                viewport: viewportBoundaries.value
              }));
            }
            function onPinNodes(ids, source) {
              if (!checkIfEditingIsAllowed()) return;
              toggleNodesPinned(ids, source);
            }
            async function onSaveWorkflow() {
              const workflowIsSaved = !uiStore.stateIsDirty && !workflowsStore.isNewWorkflow;
              const workflowIsArchived = workflowsStore.workflow.isArchived;
              if (workflowIsSaved || workflowIsArchived) return;
              if (await workflowSaving.saveCurrentWorkflow()) canvasEventBus.emit("saved:workflow");
            }
            function onContextMenuAction(action, nodeIds) {
              canvasRef.value?.executeContextMenuAction(action, nodeIds);
            }
            function addWorkflowSavedEventBindings() {
              canvasEventBus.on("saved:workflow", npsSurveyStore.fetchPromptsData);
              canvasEventBus.on("saved:workflow", onSaveFromWithinNDV);
            }
            function removeWorkflowSavedEventBindings() {
              canvasEventBus.off("saved:workflow", npsSurveyStore.fetchPromptsData);
              canvasEventBus.off("saved:workflow", onSaveFromWithinNDV);
              canvasEventBus.off("saved:workflow", onSaveFromWithinExecutionDebug);
            }
            async function onSaveFromWithinNDV() {
              if (ndvStore.activeNodeName) toast.showMessage({
                title: i18n.baseText("generic.workflowSaved"),
                type: "success"
              });
            }
            async function onCreateWorkflow() {
              await router.push({
                name: VIEWS.NEW_WORKFLOW
              });
            }
            function onRenameNode(name) {
              if (ndvStore.activeNode?.name) renameNode(ndvStore.activeNode.name, name);
            }
            async function onOpenRenameNodeModal(id) {
              const currentName = workflowsStore.getNodeById(id)?.name ?? "";
              const activeElement = document.activeElement;
              if (activeElement && shouldIgnoreCanvasShortcut(activeElement)) return;
              if (!keyBindingsEnabled.value || document.querySelector(".rename-prompt")) return;
              try {
                const promptResponsePromise = message.prompt(i18n.baseText("nodeView.prompt.newName") + ":", i18n.baseText("nodeView.prompt.renameNode") + `: ${currentName}`, {
                  customClass: "rename-prompt",
                  confirmButtonText: i18n.baseText("nodeView.prompt.rename"),
                  cancelButtonText: i18n.baseText("nodeView.prompt.cancel"),
                  inputErrorMessage: i18n.baseText("nodeView.prompt.invalidName"),
                  inputValue: currentName,
                  inputValidator: value => {
                    if (!value.trim()) return i18n.baseText("nodeView.prompt.invalidName");
                    return true;
                  }
                });
                await nextTick();
                const nameInput = document.querySelector(".rename-prompt .el-input__inner");
                nameInput?.focus();
                nameInput?.select();
                let shouldSaveAfterRename = false;
                const handleKeyDown = e => {
                  if ((e.ctrlKey || e.metaKey) && e.key === "s") {
                    e.preventDefault();
                    shouldSaveAfterRename = true;
                    nameInput?.dispatchEvent(new KeyboardEvent("keydown", {
                      key: "Enter"
                    }));
                  }
                };
                nameInput?.addEventListener("keydown", handleKeyDown);
                const promptResponse = await promptResponsePromise;
                nameInput?.removeEventListener("keydown", handleKeyDown);
                if (promptResponse.action === "confirm") {
                  await renameNode(currentName, promptResponse.value, {
                    trackHistory: true
                  });
                  if (shouldSaveAfterRename) await onSaveWorkflow();
                }
              } catch (e) {}
            }
            async function onRevertRenameNode({
              currentName,
              newName
            }) {
              await revertRenameNode(currentName, newName);
            }
            async function onRevertReplaceNodeParameters({
              nodeId,
              currentProperties,
              newProperties
            }) {
              await revertReplaceNodeParameters(nodeId, currentProperties, newProperties);
            }
            function onUpdateNodeParameters(id, parameters) {
              setNodeParameters(id, parameters);
            }
            function onUpdateNodeInputs(id) {
              revalidateNodeInputConnections(id);
            }
            function onUpdateNodeOutputs(id) {
              revalidateNodeOutputConnections(id);
            }
            function onClickNodeAdd(source, sourceHandle) {
              nodeCreatorStore.openNodeCreatorForConnectingNode({
                connection: {
                  source,
                  sourceHandle
                },
                eventSource: NODE_CREATOR_OPEN_SOURCES.PLUS_ENDPOINT
              });
            }
            /**
            * Credentials
            */
            async function loadCredentials() {
              let options;
              if (workflowId.value) options = {
                workflowId: workflowId.value
              };else {
                const projectId = (typeof route.query?.projectId === "string" ? route.query?.projectId : void 0) ?? projectsStore.personalProject?.id;
                if (projectId === void 0) throw new Error("Could not find projectId in the query nor could I find the personal project in the project store");
                options = {
                  projectId
                };
              }
              await credentialsStore.fetchAllCredentialsForWorkflow(options);
            }
            /**
            * Connections
            */
            function onCreateConnection(connection) {
              createConnection(connection, {
                trackHistory: true
              });
            }
            function onRevertCreateConnection({
              connection
            }) {
              revertCreateConnection(connection);
            }
            function onCreateConnectionCancelled(event, position, mouseEvent) {
              if ((mouseEvent?.target).classList?.contains("clickable")) return;
              uiStore.lastInteractedWithNodeId = event.nodeId;
              uiStore.lastInteractedWithNodeHandle = event.handleId;
              uiStore.lastCancelledConnectionPosition = [position.x, position.y];
              setTimeout(() => {
                if (!event.nodeId) return;
                nodeCreatorStore.openNodeCreatorForConnectingNode({
                  connection: {
                    source: event.nodeId,
                    sourceHandle: event.handleId
                  },
                  eventSource: NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_DROP
                });
              });
            }
            function onDeleteConnection(connection) {
              deleteConnection(connection, {
                trackHistory: true
              });
            }
            function onRevertDeleteConnection({
              connection
            }) {
              revertDeleteConnection(connection);
            }
            /**
            * Import / Export
            */
            async function importWorkflowExact({
              workflow: workflowData
            }) {
              if (!workflowData.nodes || !workflowData.connections) throw new Error("Invalid workflow object");
              resetWorkspace();
              await initializeData();
              initializeWorkspace({
                ...workflowData,
                nodes: getNodesWithNormalizedPosition(workflowData.nodes)
              });
              fitView();
            }
            async function onImportWorkflowDataEvent(data) {
              const workflowData = data.data;
              const trackEvents = typeof data.trackEvents === "boolean" ? data.trackEvents : void 0;
              await importWorkflowData(workflowData, "file", {
                viewport: viewportBoundaries.value,
                regenerateIds: data.regenerateIds === true || data.regenerateIds === void 0,
                trackEvents
              });
              await nextTick();
              fitView();
              selectNodes(workflowData.nodes?.map(node => node.id) ?? []);
              if (data.tidyUp) {
                const nodesIdsToTidyUp = data.nodesIdsToTidyUp;
                setTimeout(async () => {
                  canvasEventBus.emit("tidyUp", {
                    source: "import-workflow-data",
                    nodeIdsFilter: nodesIdsToTidyUp,
                    trackEvents
                  });
                  await nextTick();
                  fitView();
                }, 0);
              }
            }
            async function onImportWorkflowUrlEvent(data) {
              const workflowData = await fetchWorkflowDataFromUrl(data.url);
              if (!workflowData) return;
              await importWorkflowData(workflowData, "url", {
                viewport: viewportBoundaries.value
              });
              fitView();
              selectNodes(workflowData.nodes?.map(node => node.id) ?? []);
            }
            function addImportEventBindings() {
              nodeViewEventBus.on("importWorkflowData", onImportWorkflowDataEvent);
              nodeViewEventBus.on("importWorkflowUrl", onImportWorkflowUrlEvent);
              nodeViewEventBus.on("openChat", onOpenChat);
            }
            function removeImportEventBindings() {
              nodeViewEventBus.off("importWorkflowData", onImportWorkflowDataEvent);
              nodeViewEventBus.off("importWorkflowUrl", onImportWorkflowUrlEvent);
              nodeViewEventBus.off("openChat", onOpenChat);
            }
            /**
            * Node creator
            */
            const nodeCreatorReplaceTargetId = ref(void 0);
            function onNodeCreatorClose() {
              nodeCreatorReplaceTargetId.value = void 0;
            }
            async function onAddNodesAndConnections({
              nodes,
              connections
            }, dragAndDrop = false, position) {
              if (!checkIfEditingIsAllowed()) return;
              if (nodeCreatorReplaceTargetId.value !== void 0) {
                uiStore.resetLastInteractedWith();
                nodes = nodes.map(x => ({
                  ...x,
                  openDetail: false
                }));
              }
              const {
                addedNodes
              } = await addNodesAndConnections(nodes, connections, {
                dragAndDrop,
                position,
                viewport: viewportBoundaries.value,
                telemetry: true,
                replaceNodeId: nodeCreatorReplaceTargetId.value
              });
              if (addedNodes.length > 0) {
                const lastAddedNodeId = addedNodes[addedNodes.length - 1].id;
                selectNodes([lastAddedNodeId]);
              }
            }
            async function onRevertAddNode({
              node
            }) {
              await revertAddNode(node.name);
            }
            function onSwitchActiveNode(nodeName) {
              const node = workflowsStore.getNodeByName(nodeName);
              if (!node) return;
              setNodeActiveByName(nodeName, "other");
              selectNodes([node.id]);
            }
            function onOpenSelectiveNodeCreator(node, connectionType, connectionIndex = 0) {
              nodeCreatorStore.openSelectiveNodeCreator({
                node,
                connectionType,
                connectionIndex
              });
            }
            function onToggleNodeCreator(options) {
              nodeCreatorStore.setNodeCreatorState(options);
              if (!options.createNodeActive) {
                nodeCreatorReplaceTargetId.value = void 0;
                if (!options.hasAddedNodes) uiStore.resetLastInteractedWith();
              }
            }
            function onOpenNodeCreatorFromCanvas(source) {
              onToggleNodeCreator({
                createNodeActive: true,
                source
              });
            }
            function onOpenNodeCreatorForTriggerNodes(source) {
              nodeCreatorStore.openNodeCreatorForTriggerNodes(source);
            }
            function onToggleFocusPanel() {
              focusPanelStore.toggleFocusPanel();
              telemetry.track(`User ${focusPanelStore.focusPanelActive ? "opened" : "closed"} focus panel`, {
                source: "canvasKeyboardShortcut",
                parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat,
                parameterCount: focusPanelStore.focusedNodeParametersInTelemetryFormat.length
              });
            }
            function closeNodeCreator() {
              if (nodeCreatorStore.isCreateNodeActive) nodeCreatorStore.isCreateNodeActive = false;
            }
            function onCreateSticky() {
              onAddNodesAndConnections({
                nodes: [{
                  type: STICKY_NODE_TYPE
                }],
                connections: []
              });
            }
            function onClickConnectionAdd(connection) {
              nodeCreatorStore.openNodeCreatorForConnectingNode({
                connection,
                eventSource: NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_ACTION
              });
            }
            function onClickReplaceNode(nodeId) {
              const node = workflowsStore.getNodeById(nodeId);
              if (!node) return;
              const nodeType = nodeTypesStore.getNodeType(node.type);
              if (!nodeType) return;
              nodeCreatorReplaceTargetId.value = nodeId;
              if (isTriggerNode(nodeType)) nodeCreatorStore.openNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.REPLACE_NODE_ACTION);else {
                const inputs = getNodeInputs(editableWorkflowObject.value, node, nodeType).map(output => typeof output === "string" ? output : output.type);
                const outputs = getNodeOutputs(editableWorkflowObject.value, node, nodeType).map(output => typeof output === "string" ? output : output.type);
                if (inputs[0] && outputs[0] && inputs[0] !== outputs[0]) nodeCreatorStore.openNodeCreatorForRegularNodes(NODE_CREATOR_OPEN_SOURCES.REPLACE_NODE_ACTION);else nodeCreatorStore.openSelectiveNodeCreator({
                  connectionType: inputs[0] ?? outputs[0],
                  node: node.name
                });
              }
            }
            /**
            * Permissions
            */
            const workflowPermissions = computed(() => {
              return workflowId.value ? getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow : {};
            });
            const projectPermissions = computed(() => {
              return getResourcePermissions((route.query?.projectId ? projectsStore.myProjects.find(p => p.id === route.query.projectId) : projectsStore.currentProject ?? projectsStore.personalProject)?.scopes);
            });
            /**
            * Executions
            */
            const isStoppingExecution = ref(false);
            const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
            const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
            const isExecutionDisabled = computed(() => {
              if (containsChatTriggerNodes.value && isOnlyChatTriggerNodeActive.value && !chatTriggerNodePinnedData.value) return true;
              return !containsTriggerNodes.value || allTriggerNodesDisabled.value;
            });
            const isRunWorkflowButtonVisible = computed(() => !isOnlyChatTriggerNodeActive.value || chatTriggerNodePinnedData.value);
            const isStopExecutionButtonVisible = computed(() => isWorkflowRunning.value && !isExecutionWaitingForWebhook.value);
            const isStopWaitingForWebhookButtonVisible = computed(() => isWorkflowRunning.value && isExecutionWaitingForWebhook.value);
            async function onRunWorkflowToNode(id) {
              const node = workflowsStore.getNodeById(id);
              if (!node) return;
              if (needsAgentInput(node) && nodeTypesStore.isToolNode(node.type)) uiStore.openModalWithData({
                name: FROM_AI_PARAMETERS_MODAL_KEY,
                data: {
                  nodeName: node.name
                }
              });else {
                trackRunWorkflowToNode(node);
                agentRequestStore.clearAgentRequests(workflowsStore.workflowId, node.id);
                runWorkflow({
                  destinationNode: node.name,
                  source: "Node.executeNode"
                });
              }
            }
            function trackRunWorkflowToNode(node) {
              const telemetryPayload = {
                node_type: node.type,
                workflow_id: workflowsStore.workflowId,
                source: "canvas",
                push_ref: ndvStore.pushRef
              };
              telemetry.track("User clicked execute node button", telemetryPayload);
              externalHooks.run("nodeView.onRunNode", telemetryPayload);
            }
            async function onOpenExecution(executionId, nodeId) {
              canvasStore.startLoading();
              resetWorkspace();
              await initializeData();
              const data = await openExecution(executionId, nodeId);
              if (!data) return;
              nextTick(() => {
                updateNodesIssues();
              });
              canvasStore.stopLoading();
              fitView();
              canvasEventBus.emit("open:execution", data);
              externalHooks.run("execution.open", {
                workflowId: data.workflowData.id,
                workflowName: data.workflowData.name,
                executionId
              });
              telemetry.track("User opened read-only execution", {
                workflow_id: data.workflowData.id,
                execution_mode: data.mode,
                execution_finished: data.finished
              });
            }
            function onExecutionOpenedWithError(data) {
              if (!data.finished && data.data?.resultData?.error) {
                let nodeErrorFound = false;
                if (data.data.resultData.runData) {
                  const runData = data.data.resultData.runData;
                  errorCheck: for (const nodeName of Object.keys(runData)) for (const taskData of runData[nodeName]) if (taskData.error) {
                    nodeErrorFound = true;
                    break errorCheck;
                  }
                }
                if (!nodeErrorFound && (data.data.resultData.error.stack ?? data.data.resultData.error.message)) {
                  console.error(`Execution ${data.id} error:`);
                  console.error(data.data.resultData.error.stack);
                  toast.showMessage({
                    title: i18n.baseText("nodeView.showError.workflowError"),
                    message: data.data.resultData.error.message,
                    type: "error",
                    duration: 0
                  });
                }
              }
            }
            function onExecutionOpenedWithWaitTill(data) {
              if (data.waitTill) toast.showMessage({
                title: i18n.baseText("nodeView.thisExecutionHasntFinishedYet"),
                message: h(NodeViewUnfinishedWorkflowMessage_default),
                type: "warning",
                duration: 0
              });
            }
            function addExecutionOpenedEventBindings() {
              canvasEventBus.on("open:execution", onExecutionOpenedWithError);
              canvasEventBus.on("open:execution", onExecutionOpenedWithWaitTill);
            }
            function removeExecutionOpenedEventBindings() {
              canvasEventBus.off("open:execution", onExecutionOpenedWithError);
              canvasEventBus.off("open:execution", onExecutionOpenedWithWaitTill);
            }
            async function onStopExecution() {
              isStoppingExecution.value = true;
              await stopCurrentExecution();
              isStoppingExecution.value = false;
            }
            async function onStopWaitingForWebhook() {
              await stopWaitingForWebhook();
            }
            function onRunWorkflowButtonMouseEnter() {
              nodeViewEventBus.emit("runWorkflowButton:mouseenter");
            }
            function onRunWorkflowButtonMouseLeave() {
              nodeViewEventBus.emit("runWorkflowButton:mouseleave");
            }
            /**
            * Chat
            */
            const chatTriggerNode = computed(() => {
              return editableWorkflow.value.nodes.find(node => node.type === CHAT_TRIGGER_NODE_TYPE);
            });
            const containsChatTriggerNodes = computed(() => {
              return !isExecutionWaitingForWebhook.value && !!editableWorkflow.value.nodes.find(node => ["@n8n/n8n-nodes-langchain.manualChatTrigger", "@n8n/n8n-nodes-langchain.chatTrigger"].includes(node.type) && node.disabled !== true);
            });
            const isOnlyChatTriggerNodeActive = computed(() => {
              return triggerNodes.value.every(node => node.disabled || node.type === "@n8n/n8n-nodes-langchain.chatTrigger");
            });
            const chatTriggerNodePinnedData = computed(() => {
              if (!chatTriggerNode.value) return null;
              return workflowsStore.pinDataByNodeName(chatTriggerNode.value.name);
            });
            function onOpenChat() {
              startChat("main");
            }
            /**
            * Evaluation
            */
            const evaluationTriggerNode = computed(() => {
              return editableWorkflow.value.nodes.find(node => node.type === EVALUATION_TRIGGER_NODE_TYPE);
            });
            /**
            * History events
            */
            function addUndoRedoEventBindings() {
              historyBus.on("nodeMove", onRevertNodePosition);
              historyBus.on("revertAddNode", onRevertAddNode);
              historyBus.on("revertRemoveNode", onRevertDeleteNode);
              historyBus.on("revertAddConnection", onRevertCreateConnection);
              historyBus.on("revertRemoveConnection", onRevertDeleteConnection);
              historyBus.on("revertRenameNode", onRevertRenameNode);
              historyBus.on("revertReplaceNodeParameters", onRevertReplaceNodeParameters);
              historyBus.on("enableNodeToggle", onRevertToggleNodeDisabled);
            }
            function removeUndoRedoEventBindings() {
              historyBus.off("nodeMove", onRevertNodePosition);
              historyBus.off("revertAddNode", onRevertAddNode);
              historyBus.off("revertRemoveNode", onRevertDeleteNode);
              historyBus.off("revertAddConnection", onRevertCreateConnection);
              historyBus.off("revertRemoveConnection", onRevertDeleteConnection);
              historyBus.off("revertRenameNode", onRevertRenameNode);
              historyBus.off("revertReplaceNodeParameters", onRevertReplaceNodeParameters);
              historyBus.off("enableNodeToggle", onRevertToggleNodeDisabled);
            }
            /**
            * Source control
            */
            async function onSourceControlPull() {
              try {
                await Promise.all([environmentsStore.fetchAllVariables(), tagsStore.fetchAll(), loadCredentials(), projectsStore.getAvailableProjects()]);
                if (workflowId.value && !uiStore.stateIsDirty) {
                  const workflowData = await workflowsStore.fetchWorkflow(workflowId.value);
                  if (workflowData) {
                    documentTitle.setDocumentTitle(workflowData.name, "IDLE");
                    openWorkflow(workflowData);
                  }
                }
              } catch (error) {
                console.error(error);
              }
            }
            function addSourceControlEventBindings() {
              sourceControlEventBus.on("pull", onSourceControlPull);
            }
            function removeSourceControlEventBindings() {
              sourceControlEventBus.off("pull", onSourceControlPull);
            }
            /**
            * Command bar
            * */
            function addCommandBarEventBindings() {
              canvasEventBus.on("create:sticky", onCreateSticky);
            }
            function removeCommandBarEventBindings() {
              canvasEventBus.off("create:sticky", onCreateSticky);
            }
            /**
            * Post message events
            */
            function addPostMessageEventBindings() {
              window.addEventListener("message", onPostMessageReceived);
            }
            function removePostMessageEventBindings() {
              window.removeEventListener("message", onPostMessageReceived);
            }
            function emitPostMessageReady() {
              if (window.parent) window.parent.postMessage(JSON.stringify({
                command: "n8nReady",
                version: rootStore.versionCli
              }), "*");
            }
            async function onPostMessageReceived(messageEvent) {
              if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
              try {
                const json = JSON.parse(messageEvent.data);
                if (json && json.command === "openWorkflow") try {
                  if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
                  await importWorkflowExact(json);
                  canOpenNDV.value = json.canOpenNDV ?? true;
                  hideNodeIssues.value = json.hideNodeIssues ?? false;
                  isExecutionPreview.value = false;
                } catch (e) {
                  if (window.top) window.top.postMessage(JSON.stringify({
                    command: "error",
                    message: i18n.baseText("openWorkflow.workflowImportError")
                  }), "*");
                  toast.showError(e, i18n.baseText("openWorkflow.workflowImportError"));
                } else if (json && json.command === "openExecution") try {
                  if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
                  isProductionExecutionPreview.value = json.executionMode !== "manual" && json.executionMode !== "evaluation";
                  await onOpenExecution(json.executionId, json.nodeId);
                  canOpenNDV.value = json.canOpenNDV ?? true;
                  hideNodeIssues.value = json.hideNodeIssues ?? false;
                  isExecutionPreview.value = true;
                } catch (e) {
                  if (window.top) window.top.postMessage(JSON.stringify({
                    command: "error",
                    message: i18n.baseText("nodeView.showError.openExecution.title")
                  }), "*");
                  toast.showMessage({
                    title: i18n.baseText("nodeView.showError.openExecution.title"),
                    message: e.message,
                    type: "error"
                  });
                } else if (json?.command === "setActiveExecution") executionsStore.activeExecution = await executionsStore.fetchExecution(json.executionId);
              } catch (e) {}
            }
            /**
            * Permission checks
            */
            function checkIfEditingIsAllowed() {
              if (!initializedWorkflowId.value) return true;
              if (readOnlyNotification.value?.visible) return false;
              if (isReadOnlyRoute.value || isReadOnlyEnvironment.value) {
                const messageContext = isReadOnlyRoute.value ? "executions" : "workflows";
                readOnlyNotification.value = toast.showMessage({
                  title: i18n.baseText(isReadOnlyEnvironment.value ? `readOnlyEnv.showMessage.${messageContext}.title` : "readOnly.showMessage.executions.title"),
                  message: i18n.baseText(isReadOnlyEnvironment.value ? `readOnlyEnv.showMessage.${messageContext}.message` : "readOnly.showMessage.executions.message"),
                  type: "info"
                });
                return false;
              }
              return true;
            }
            function checkIfRouteIsAllowed() {
              if (isReadOnlyEnvironment.value && [VIEWS.NEW_WORKFLOW, VIEWS.TEMPLATE_IMPORT].find(view => view === route.name)) nextTick(async () => {
                resetWorkspace();
                uiStore.stateIsDirty = false;
                await router.replace({
                  name: VIEWS.HOMEPAGE
                });
              });
            }
            /**
            * Debug mode
            */
            async function initializeDebugMode() {
              documentTitle.setDocumentTitle(workflowsStore.workflowName, "DEBUG");
              if (!workflowsStore.isInDebugMode) {
                await applyExecutionData(route.params.executionId);
                workflowsStore.isInDebugMode = true;
              }
              canvasEventBus.on("saved:workflow", onSaveFromWithinExecutionDebug);
            }
            async function onSaveFromWithinExecutionDebug() {
              if (route.name !== VIEWS.EXECUTION_DEBUG) return;
              await router.replace({
                name: VIEWS.WORKFLOW,
                params: {
                  name: workflowId.value
                }
              });
            }
            /**
            * Canvas
            */
            const viewportTransform = ref({
              x: 0,
              y: 0,
              zoom: 1
            });
            const viewportDimensions = ref({
              width: 0,
              height: 0
            });
            const viewportBoundaries = computed(() => getBounds(viewportTransform.value, viewportDimensions.value));
            function onViewportChange(viewport, dimensions) {
              viewportTransform.value = viewport;
              viewportDimensions.value = dimensions;
              uiStore.nodeViewOffsetPosition = [viewport.x, viewport.y];
            }
            function selectNodes(ids) {
              setTimeout(() => canvasEventBus.emit("nodes:select", {
                ids
              }));
            }
            /**
            * Mouse events
            */
            function onClickPane(position) {
              lastClickPosition.value = [position.x, position.y];
              onSetNodeSelected();
            }
            function onSelectionEnd(position) {
              lastClickPosition.value = [position.x, position.y];
            }
            /**
            * Drag and Drop events
            */
            async function onDragAndDrop(position, event) {
              if (!event.dataTransfer) return;
              const dropData = jsonParse(event.dataTransfer.getData(DRAG_EVENT_DATA_KEY));
              if (dropData) {
                await onAddNodesAndConnections(dropData, true, [position.x, position.y]);
                onToggleNodeCreator({
                  createNodeActive: false,
                  hasAddedNodes: true
                });
              }
            }
            /**
            * Custom Actions
            */
            function registerCustomActions() {
              registerCustomAction({
                key: "openNodeDetail",
                action: ({
                  node
                }) => {
                  setNodeActiveByName(node, "other");
                }
              });
              registerCustomAction({
                key: "openSelectiveNodeCreator",
                action: ({
                  creatorview: creatorView,
                  connectiontype: connectionType,
                  node
                }) => {
                  nodeCreatorStore.openSelectiveNodeCreator({
                    node,
                    connectionType,
                    creatorView
                  });
                }
              });
              registerCustomAction({
                key: "showNodeCreator",
                action: () => {
                  ndvStore.unsetActiveNodeName();
                  nextTick(() => {
                    onOpenNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TAB);
                  });
                }
              });
            }
            function unregisterCustomActions() {
              unregisterCustomAction("openNodeDetail");
              unregisterCustomAction("openSelectiveNodeCreator");
              unregisterCustomAction("showNodeCreator");
            }
            function showAddFirstStepIfEnabled() {
              if (uiStore.addFirstStepOnLoad) {
                onOpenNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TRIGGER_PLACEHOLDER_BUTTON);
                uiStore.addFirstStepOnLoad = false;
              }
            }
            /**
            * Routing
            */
            function updateNodeRoute(nodeId) {
              const nodeUi = workflowsStore.findNodeByPartialId(nodeId);
              if (nodeUi) setNodeActive(nodeUi.id, "other");else {
                toast.showToast({
                  title: i18n.baseText("nodeView.showMessage.ndvUrl.missingNodes.title"),
                  message: i18n.baseText("nodeView.showMessage.ndvUrl.missingNodes.content"),
                  type: "warning"
                });
                router.replace({
                  name: route.name,
                  params: {
                    name: workflowId.value
                  }
                });
              }
            }
            watch(() => route.name, async (newRouteName, oldRouteName) => {
              await initializeRoute(newRouteName === VIEWS.NEW_WORKFLOW && oldRouteName === VIEWS.WORKFLOW || newRouteName === VIEWS.WORKFLOW && oldRouteName === VIEWS.NEW_WORKFLOW);
            });
            watch(() => {
              return isLoading.value || isCanvasReadOnly.value || editableWorkflow.value.nodes.length !== 0;
            }, isReadOnlyOrLoading => {
              if (isReadOnlyOrLoading) {
                fallbackNodes.value = [];
                return;
              }
              const addNodesItem = {
                id: CanvasNodeRenderType.AddNodes,
                name: CanvasNodeRenderType.AddNodes,
                type: CanvasNodeRenderType.AddNodes,
                typeVersion: 1,
                position: [0, 0],
                parameters: {}
              };
              const choicePromptItem = {
                id: CanvasNodeRenderType.ChoicePrompt,
                name: CanvasNodeRenderType.ChoicePrompt,
                type: CanvasNodeRenderType.ChoicePrompt,
                typeVersion: 1,
                position: [0, 0],
                parameters: {},
                draggable: false
              };
              fallbackNodes.value = builderStore.isAIBuilderEnabled ? [choicePromptItem] : [addNodesItem];
            });
            watch(() => route.params.nodeId, async newId => {
              if (typeof newId !== "string" || newId === "") ndvStore.unsetActiveNodeName();else updateNodeRoute(newId);
            });
            watch(() => ndvStore.activeNode, async val => {
              if (![VIEWS.WORKFLOW].includes(String(route.name))) return;
              const nodeId = val?.id ? workflowsStore.getPartialIdForNode(val?.id) : "";
              if (nodeId !== route.params.nodeId) await router.replace({
                name: route.name,
                params: {
                  name: workflowId.value,
                  nodeId
                }
              });
            });
            onBeforeRouteLeave(async (to, from, next) => {
              const toNodeViewTab = getNodeViewTab(to);
              if (toNodeViewTab === MAIN_HEADER_TABS.EXECUTIONS || from.name === VIEWS.TEMPLATE_IMPORT || toNodeViewTab === MAIN_HEADER_TABS.WORKFLOW && from.name === VIEWS.EXECUTION_DEBUG || isReadOnlyEnvironment.value) {
                next();
                return;
              }
              await useWorkflowSaving({
                router
              }).promptSaveUnsavedWorkflowChanges(next, {
                async confirm() {
                  if (from.name === VIEWS.NEW_WORKFLOW) {
                    const savedWorkflowId = workflowsStore.workflowId;
                    await router.replace({
                      name: VIEWS.WORKFLOW,
                      params: {
                        name: savedWorkflowId
                      }
                    });
                    await router.push(to);
                    return false;
                  }
                  workflowState.setWorkflowId(PLACEHOLDER_EMPTY_WORKFLOW_ID);
                  return true;
                }
              });
            });
            /**
            * Lifecycle
            */
            onBeforeMount(() => {
              if (!isDemoRoute.value) pushConnectionStore.pushConnect();
              addPostMessageEventBindings();
            });
            onMounted(() => {
              canvasStore.startLoading();
              documentTitle.reset();
              resetWorkspace();
              initializeData().then(() => {
                initializeRoute().then(() => {
                  toast.showNotificationForViews([VIEWS.WORKFLOW, VIEWS.NEW_WORKFLOW]);
                  if (route.query.settings) {
                    uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
                    router.replace({
                      query: {
                        settings: void 0
                      }
                    });
                  }
                }).finally(() => {
                  isLoading.value = false;
                  canvasStore.stopLoading();
                  externalHooks.run("nodeView.mount").catch(() => {});
                  setTimeout(() => {
                    if (routeNodeId.value) updateNodeRoute(routeNodeId.value);
                  }, 500);
                  emitPostMessageReady();
                });
                usersStore.showPersonalizationSurvey();
                checkIfRouteIsAllowed();
              });
              addSourceControlEventBindings();
              addWorkflowSavedEventBindings();
              addBeforeUnloadEventBindings();
              addImportEventBindings();
              addExecutionOpenedEventBindings();
              addCommandBarEventBindings();
              registerCustomActions();
            });
            onActivated(() => {
              addUndoRedoEventBindings();
              showAddFirstStepIfEnabled();
            });
            onDeactivated(() => {
              uiStore.closeModal(WORKFLOW_SETTINGS_MODAL_KEY);
              removeUndoRedoEventBindings();
            });
            onBeforeUnmount(() => {
              removeSourceControlEventBindings();
              removePostMessageEventBindings();
              removeWorkflowSavedEventBindings();
              removeBeforeUnloadEventBindings();
              removeImportEventBindings();
              removeExecutionOpenedEventBindings();
              removeCommandBarEventBindings();
              unregisterCustomActions();
              if (!isDemoRoute.value) pushConnectionStore.pushDisconnect();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(unref($style).wrapper)
              }, [unref(editableWorkflow) && unref(editableWorkflowObject) && !isLoading.value ? (openBlock(), createBlock(WorkflowCanvas_default, {
                key: 0,
                id: unref(editableWorkflow).id,
                ref: "canvas",
                workflow: unref(editableWorkflow),
                "workflow-object": unref(editableWorkflowObject),
                "fallback-nodes": fallbackNodes.value,
                "show-fallback-nodes": showFallbackNodes.value,
                "event-bus": unref(canvasEventBus),
                "read-only": isCanvasReadOnly.value,
                executing: isWorkflowRunning.value,
                "key-bindings": keyBindingsEnabled.value,
                "suppress-interaction": unref(experimentalNdvStore).isMapperOpen,
                "onUpdate:nodes:position": onUpdateNodesPosition,
                "onUpdate:node:position": onUpdateNodePosition,
                "onUpdate:node:activated": onSetNodeActivated,
                "onUpdate:node:deactivated": onSetNodeDeactivated,
                "onUpdate:node:selected": onSetNodeSelected,
                "onUpdate:node:enabled": onToggleNodeDisabled,
                "onUpdate:node:name": onOpenRenameNodeModal,
                "onUpdate:node:parameters": onUpdateNodeParameters,
                "onUpdate:node:inputs": onUpdateNodeInputs,
                "onUpdate:node:outputs": onUpdateNodeOutputs,
                "onUpdate:logsOpen": _cache[3] || (_cache[3] = $event => unref(logsStore).toggleOpen($event)),
                "onUpdate:logs:inputOpen": unref(logsStore).toggleInputOpen,
                "onUpdate:logs:outputOpen": unref(logsStore).toggleOutputOpen,
                "onUpdate:hasRangeSelection": unref(canvasStore).setHasRangeSelection,
                "onOpen:subWorkflow": onOpenSubWorkflow,
                "onClick:node": onClickNode,
                "onClick:node:add": onClickNodeAdd,
                "onRun:node": onRunWorkflowToNode,
                "onDelete:node": onDeleteNode,
                "onCreate:connection": onCreateConnection,
                "onCreate:connection:cancelled": onCreateConnectionCancelled,
                "onDelete:connection": onDeleteConnection,
                "onClick:connection:add": onClickConnectionAdd,
                "onClick:pane": onClickPane,
                "onCreate:node": onOpenNodeCreatorFromCanvas,
                "onCreate:sticky": onCreateSticky,
                "onDelete:nodes": onDeleteNodes,
                "onUpdate:nodes:enabled": onToggleNodesDisabled,
                "onUpdate:nodes:pin": onPinNodes,
                "onDuplicate:nodes": onDuplicateNodes,
                "onCopy:nodes": onCopyNodes,
                "onCut:nodes": onCutNodes,
                "onReplace:node": onClickReplaceNode,
                "onRun:workflow": _cache[4] || (_cache[4] = $event => unref(runEntireWorkflow)("main")),
                "onSave:workflow": onSaveWorkflow,
                "onCreate:workflow": onCreateWorkflow,
                "onViewport:change": onViewportChange,
                "onSelection:end": onSelectionEnd,
                onDragAndDrop,
                onTidyUp,
                "onToggle:focusPanel": onToggleFocusPanel,
                onExtractWorkflow,
                onStartChat: _cache[5] || (_cache[5] = $event => unref(startChat)())
              }, {
                default: withCtx(() => [!isCanvasReadOnly.value ? (openBlock(), createBlock(Suspense, {
                  key: 0
                }, {
                  default: withCtx(() => [createVNode(unref(LazySetupWorkflowCredentialsButton), {
                    class: normalizeClass(unref($style).setupCredentialsButtonWrapper)
                  }, null, 8, ["class"])]),
                  _: 1
                })) : createCommentVNode("", true), !isCanvasReadOnly.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref($style).executionButtons)
                }, [isRunWorkflowButtonVisible.value ? (openBlock(), createBlock(CanvasRunWorkflowButton_default, {
                  key: 0,
                  "waiting-for-webhook": isExecutionWaitingForWebhook.value,
                  disabled: isExecutionDisabled.value,
                  executing: isWorkflowRunning.value,
                  "trigger-nodes": triggerNodes.value,
                  "get-node-type": unref(nodeTypesStore).getNodeType,
                  "selected-trigger-node-name": unref(workflowsStore).selectedTriggerNodeName,
                  onMouseenter: onRunWorkflowButtonMouseEnter,
                  onMouseleave: onRunWorkflowButtonMouseLeave,
                  onExecute: _cache[0] || (_cache[0] = $event => unref(runEntireWorkflow)("main")),
                  onSelectTriggerNode: unref(workflowsStore).setSelectedTriggerNodeName
                }, null, 8, ["waiting-for-webhook", "disabled", "executing", "trigger-nodes", "get-node-type", "selected-trigger-node-name", "onSelectTriggerNode"])) : createCommentVNode("", true), containsChatTriggerNodes.value ? (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [isLogsPanelOpen.value ? (openBlock(), createBlock(CanvasChatButton_default, {
                  key: 0,
                  type: "tertiary",
                  label: unref(i18n).baseText("chat.hide"),
                  class: normalizeClass(unref($style).chatButton),
                  onClick: _cache[1] || (_cache[1] = $event => unref(logsStore).toggleOpen(false))
                }, null, 8, ["label", "class"])) : (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                  key: 1,
                  label: unref(i18n).baseText("chat.open"),
                  shortcut: {
                    keys: ["c"]
                  }
                }, {
                  default: withCtx(() => [createVNode(CanvasChatButton_default, {
                    type: isRunWorkflowButtonVisible.value ? "secondary" : "primary",
                    label: unref(i18n).baseText("chat.open"),
                    class: normalizeClass(unref($style).chatButton),
                    onClick: onOpenChat
                  }, null, 8, ["type", "label", "class"])]),
                  _: 1
                }, 8, ["label"]))], 64)) : createCommentVNode("", true), isStopExecutionButtonVisible.value ? (openBlock(), createBlock(CanvasStopCurrentExecutionButton_default, {
                  key: 2,
                  stopping: isStoppingExecution.value,
                  onClick: onStopExecution
                }, null, 8, ["stopping"])) : createCommentVNode("", true), isStopWaitingForWebhookButtonVisible.value ? (openBlock(), createBlock(CanvasStopWaitingForWebhookButton_default, {
                  key: 3,
                  onClick: onStopWaitingForWebhook
                })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                  key: 2,
                  theme: "warning",
                  icon: "lock",
                  class: normalizeClass(unref($style).readOnlyEnvironmentNotification)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.cantEditOrRun")), 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true), unref(builderStore).streaming ? (openBlock(), createBlock(unref(CanvasThinkingPill_default), {
                  key: 3,
                  class: normalizeClass(unref($style).thinkingPill),
                  "show-stop": "",
                  onStop: unref(builderStore).stopStreaming
                }, null, 8, ["class", "onStop"])) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
                  default: withCtx(() => [!isCanvasReadOnly.value ? (openBlock(), createBlock(unref(LazyNodeCreation), {
                    key: 0,
                    "create-node-active": unref(nodeCreatorStore).isCreateNodeActive,
                    "node-view-scale": viewportTransform.value.zoom,
                    "focus-panel-active": unref(focusPanelStore).focusPanelActive,
                    onToggleNodeCreator,
                    onAddNodes: onAddNodesAndConnections,
                    onClose: onNodeCreatorClose
                  }, null, 8, ["create-node-active", "node-view-scale", "focus-panel-active"])) : createCommentVNode("", true)]),
                  _: 1
                })), (openBlock(), createBlock(Suspense, null, {
                  default: withCtx(() => [!isNDVV2.value ? (openBlock(), createBlock(unref(LazyNodeDetailsView), {
                    key: 0,
                    "workflow-object": unref(editableWorkflowObject),
                    "read-only": isCanvasReadOnly.value,
                    "is-production-execution-preview": isProductionExecutionPreview.value,
                    renaming: false,
                    onValueChanged: _cache[2] || (_cache[2] = $event => onRenameNode($event.value)),
                    onStopExecution,
                    onSwitchSelectedNode: onSwitchActiveNode,
                    onOpenConnectionNodeCreator: onOpenSelectiveNodeCreator,
                    onSaveKeyboardShortcut: onSaveWorkflow
                  }, null, 8, ["workflow-object", "read-only", "is-production-execution-preview"])) : createCommentVNode("", true)]),
                  _: 1
                })), (openBlock(), createBlock(Suspense, null, {
                  default: withCtx(() => [isNDVV2.value ? (openBlock(), createBlock(unref(LazyNodeDetailsViewV2), {
                    key: 0,
                    "workflow-object": unref(editableWorkflowObject),
                    "read-only": isCanvasReadOnly.value,
                    "is-production-execution-preview": isProductionExecutionPreview.value,
                    onRenameNode,
                    onStopExecution,
                    onSwitchSelectedNode: onSwitchActiveNode,
                    onOpenConnectionNodeCreator: onOpenSelectiveNodeCreator,
                    onSaveKeyboardShortcut: onSaveWorkflow
                  }, null, 8, ["workflow-object", "read-only", "is-production-execution-preview"])) : createCommentVNode("", true)]),
                  _: 1
                }))]),
                _: 1
              }, 8, ["id", "workflow", "workflow-object", "fallback-nodes", "show-fallback-nodes", "event-bus", "read-only", "executing", "key-bindings", "suppress-interaction", "onUpdate:logs:inputOpen", "onUpdate:logs:outputOpen", "onUpdate:hasRangeSelection"])) : createCommentVNode("", true), !isLoading.value && (unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? !isCanvasReadOnly.value : true) ? (openBlock(), createBlock(FocusPanel_default, {
                key: 1,
                "is-canvas-read-only": isCanvasReadOnly.value,
                onSaveKeyboardShortcut: onSaveWorkflow,
                onContextMenuAction
              }, null, 8, ["is-canvas-read-only"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/app/views/NodeView.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_1ahwb_123";
        executionButtons = "_executionButtons_1ahwb_128";
        chatButton = "_chatButton_1ahwb_165";
        setupCredentialsButtonWrapper = "_setupCredentialsButtonWrapper_1ahwb_169";
        readOnlyEnvironmentNotification = "_readOnlyEnvironmentNotification_1ahwb_175";
        thinkingPill = "_thinkingPill_1ahwb_182";
        NodeView_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          executionButtons,
          chatButton,
          setupCredentialsButtonWrapper,
          readOnlyEnvironmentNotification,
          thinkingPill
        }; //#endregion
        //#region src/app/views/NodeView.vue
        cssModules = {
          "$style": NodeView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", NodeView_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();