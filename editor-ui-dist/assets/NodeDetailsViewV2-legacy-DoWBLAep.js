;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./date-picker-legacy-Cor1wJX7.js", "./overlay-legacy-CnSmhTdu.js", "./ParameterInputList-legacy-DirG3aZ4.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./col-legacy-CQMoYMQI.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./chatPanel.store-legacy-NYceFr60.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./retry-legacy-CkXCWkMV.js", "./executions.store-legacy-BxTud2_e.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./dataTable.store-legacy-BFWf9Jk0.js", "./CopyInput-legacy-1gKnXvth.js", "./isEmpty-legacy-Doz7ETSg.js", "./NDVEmptyState-legacy-Hez6Mzj_.js", "./exports-legacy-RTRnyI4R.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js", "./uniqBy-legacy-BQtuBYTn.js", "./semver-legacy-BzFo3drs.js", "./CommunityNodeUpdateInfo-legacy-12fQcwXn.js", "./Draggable-legacy-CcVN489_.js", "./VirtualSchema-legacy-9f7FeJ8b.js", "./TextWithHighlights-legacy-CVW5NpX4.js", "./useTelemetryContext-legacy-CJA6Osaa.js", "./schemaPreview.store-legacy-B2ITMEum.js", "./nodeTransforms-legacy-B6vSYCn_.js", "./FileSaver.min-legacy-BTN44Z38.js", "./vue-json-pretty-legacy-Dk5EQofb.js", "./RunDataHtml-legacy-DopSvQCJ.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js", "./NodeSettings-legacy-DU2oCttT.js", "./useActions-legacy-A6v3pRgY.js", "./vue-legacy-Cj7LJTPA.js", "./useKeybindings-legacy-BQ2atUdb.js", "./useWorkflowActivate-legacy-DRFvTgOe.js", "./core-legacy-BVoFM47F.js", "./useExecutionData-legacy-pAWtPQKq.js", "./VueMarkdown-legacy-DWTbT_8e.js", "./AnimatedSpinner-legacy-a37yY0a9.js", "./useLogsTreeExpand-legacy-zHK_fj8w.js", "./core-legacy-De470jmW.js", "./RunDataParsedAiContent-legacy-DFNSgMiY.js", "./TriggerPanel-legacy-D_mO4E0K.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, toValue, toRef, mergeProps, onMounted, normalizeClass, watch, Teleport, withCtx, openBlock, createTextVNode, useTemplateRef, createBaseVNode, normalizeStyle, useElementSize, useI18n, N8nText_default, N8nIconButton_default, N8nInlineTextEdit_default, N8nLink_default, useDeviceSupport, N8nTooltip_default, N8nResizeWrapper_default, N8nIcon_default, __plugin_vue_export_helper_default, createEventBus, InputPanel_default, useMessage, dataPinningEventBus, useUIStore, LOCAL_STORAGE_NDV_PANEL_WIDTH, storeToRefs, useNDVStore, useWorkflowsStore, useNodeTypesStore, useTelemetry, useNodeHelpers, useStyles, APP_MODALS_ELEMENT_ID, jsonParse, MODAL_CONFIRM, START_NODE_TYPE, NodeConnectionTypes, EXECUTABLE_TRIGGER_NODE_TYPES, getNodeOutputs, STICKY_NODE_TYPE, useExternalHooks, usePinnedData, getNodeIconSource, NodeIcon_default, Draggable_default, useTelemetryContext, useNodeDocsUrl, NodeSettings_default, useKeybindings, useWorkflowActivate, OutputPanel_default, NDVFloatingNodes_default, TriggerPanel_default, __vite_style__, NDVHeader_vue_vue_type_script_setup_true_lang_default, ndvHeader, content, actions, title, docsLabel, icon, NDVHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$2, NDVHeader_default, PanelDragButtonV2_vue_vue_type_script_setup_true_lang_default, dragButton, arrow, handle, dragging, PanelDragButtonV2_vue_vue_type_style_index_0_lang_module_default, cssModules$1, PanelDragButtonV2_default, NodeDetailsViewV2_vue_vue_type_script_setup_true_lang_default, backdrop, dialog, container, main, column, input, output, dataColumn, header, settings, draggable, NodeDetailsViewV2_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeDetailsViewV2_default;
    //#endregion
    //#region src/features/ndv/panel/composables/useNdvLayout.ts
    function useNdvLayout(options) {
      const MIN_MAIN_PANEL_WIDTH_PX = 368;
      const MIN_PANEL_WIDTH_PX = 120;
      const DEFAULT_INPUTLESS_MAIN_WIDTH_PX = 480;
      const DEFAULT_WIDE_MAIN_WIDTH_PX = 640;
      const DEFAULT_REGULAR_MAIN_WIDTH_PX = 420;
      const panelWidthPercentage = ref({
        left: 40,
        main: 20,
        right: 40
      });
      const localStorageKey = computed(() => `${LOCAL_STORAGE_NDV_PANEL_WIDTH}_${toValue(options.paneType).toUpperCase()}`);
      const containerSize = useElementSize(options.container);
      const containerWidth = computed(() => containerSize.width.value);
      const percentageToPixels = percentage => {
        return percentage / 100 * containerWidth.value;
      };
      const pixelsToPercentage = pixels => {
        return pixels / containerWidth.value * 100;
      };
      const minMainPanelWidthPercentage = computed(() => pixelsToPercentage(MIN_MAIN_PANEL_WIDTH_PX));
      const panelWidthPixels = computed(() => ({
        left: percentageToPixels(panelWidthPercentage.value.left),
        main: percentageToPixels(panelWidthPercentage.value.main),
        right: percentageToPixels(panelWidthPercentage.value.right)
      }));
      const minPanelWidthPercentage = computed(() => pixelsToPercentage(MIN_PANEL_WIDTH_PX));
      const defaultPanelSize = computed(() => {
        switch (toValue(options.paneType)) {
          case "inputless":
            {
              const main$1 = pixelsToPercentage(DEFAULT_INPUTLESS_MAIN_WIDTH_PX);
              return {
                left: 0,
                main: main$1,
                right: 100 - main$1
              };
            }
          case "wide":
            {
              const main$1 = pixelsToPercentage(DEFAULT_WIDE_MAIN_WIDTH_PX);
              const panels = (100 - main$1) / 2;
              return {
                left: panels,
                main: main$1,
                right: panels
              };
            }
          case "dragless":
          case "unknown":
          case "regular":
          default:
            {
              const main$1 = pixelsToPercentage(DEFAULT_REGULAR_MAIN_WIDTH_PX);
              const panels = (100 - main$1) / 2;
              return {
                left: panels,
                main: main$1,
                right: panels
              };
            }
        }
      });
      const safePanelWidth = ({
        left,
        main: main$1,
        right
      }) => {
        const minLeft = toValue(options.hasInputPanel) ? minPanelWidthPercentage.value : 0;
        const minRight = minPanelWidthPercentage.value;
        const minMain = minMainPanelWidthPercentage.value;
        const newPanelWidth = {
          left: Math.max(minLeft, left),
          main: Math.max(minMain, main$1),
          right: Math.max(minRight, right)
        };
        const total = newPanelWidth.left + newPanelWidth.main + newPanelWidth.right;
        if (total > 100) {
          const overflow = total - 100;
          const trimLeft = newPanelWidth.left / (newPanelWidth.left + newPanelWidth.right) * overflow;
          const trimRight = overflow - trimLeft;
          newPanelWidth.left = Math.max(minLeft, newPanelWidth.left - trimLeft);
          newPanelWidth.right = Math.max(minRight, newPanelWidth.right - trimRight);
        }
        return newPanelWidth;
      };
      const persistPanelSize = () => {
        localStorage.setItem(localStorageKey.value, JSON.stringify(panelWidthPercentage.value));
      };
      const loadPanelSize = () => {
        const storedPanelSizeString = localStorage.getItem(localStorageKey.value);
        const defaultSize = defaultPanelSize.value;
        if (storedPanelSizeString) panelWidthPercentage.value = safePanelWidth(jsonParse(storedPanelSizeString, {
          fallbackValue: defaultSize
        }) ?? defaultSize);else panelWidthPercentage.value = safePanelWidth(defaultSize);
      };
      const onResizeEnd = () => {
        persistPanelSize();
      };
      const onResize = event => {
        const newMain = Math.max(minMainPanelWidthPercentage.value, pixelsToPercentage(event.width));
        const initialLeft = panelWidthPercentage.value.left;
        const initialMain = panelWidthPercentage.value.main;
        const initialRight = panelWidthPercentage.value.right;
        const diffMain = newMain - initialMain;
        if (event.direction === "left") {
          const potentialLeft = initialLeft - diffMain;
          if (potentialLeft < minPanelWidthPercentage.value) return;
          panelWidthPercentage.value = safePanelWidth({
            left: Math.max(minPanelWidthPercentage.value, potentialLeft),
            main: newMain,
            right: initialRight
          });
        } else if (event.direction === "right") {
          const potentialRight = initialRight - diffMain;
          if (potentialRight < minPanelWidthPercentage.value) return;
          panelWidthPercentage.value = safePanelWidth({
            left: initialLeft,
            main: newMain,
            right: Math.max(minPanelWidthPercentage.value, potentialRight)
          });
        }
      };
      const onDrag = position => {
        const newLeft = Math.max(minPanelWidthPercentage.value, pixelsToPercentage(position[0]) - panelWidthPercentage.value.main / 2);
        const newRight = Math.max(minPanelWidthPercentage.value, 100 - newLeft - panelWidthPercentage.value.main);
        if (newLeft + panelWidthPercentage.value.main + newRight > 100) return;
        panelWidthPercentage.value.left = newLeft;
        panelWidthPercentage.value.right = newRight;
      };
      watch(containerWidth, (newWidth, oldWidth) => {
        if (!newWidth) return;
        if (!oldWidth) loadPanelSize();else panelWidthPercentage.value = safePanelWidth(panelWidthPercentage.value);
      });
      watch(toRef(options.paneType), () => {
        loadPanelSize();
      }, {
        immediate: true
      });
      return {
        containerWidth,
        panelWidthPercentage,
        panelWidthPixels,
        onResize,
        onDrag,
        onResizeEnd
      };
    }

    //#endregion
    //#region src/features/ndv/panel/components/PanelDragButtonV2.vue?vue&type=script&setup=true&lang.ts
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
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
        toRef = _vueRuntimeEsmBundlerLegacy003Js.Vt;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        Teleport = _vueRuntimeEsmBundlerLegacy003Js.b;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        useElementSize = _MapCacheLegacy005Js.E;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nInlineTextEdit_default = _srcLegacy007Js.a;
        N8nLink_default = _srcLegacy007Js.mt;
        useDeviceSupport = _srcLegacy007Js.rt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nResizeWrapper_default = _srcLegacy007Js.y;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00lJs) {}, function (_datePickerLegacy00nJs) {}, function (_overlayLegacy00pJs) {}, function (_ParameterInputListLegacy00rJs) {
        InputPanel_default = _ParameterInputListLegacy00rJs.c;
      }, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_colLegacy00zJs) {}, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        dataPinningEventBus = _useTelemetryLegacy00FJs.Ai;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        LOCAL_STORAGE_NDV_PANEL_WIDTH = _useTelemetryLegacy00FJs.Ro;
        storeToRefs = _useTelemetryLegacy00FJs.Sc;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        useNodeHelpers = _useTelemetryLegacy00FJs.xn;
      }, function (_useToastLegacy00HJs) {
        useStyles = _useToastLegacy00HJs.n;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        APP_MODALS_ELEMENT_ID = _constantsLegacy00NJs.D;
        jsonParse = _constantsLegacy00NJs.Gi;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        START_NODE_TYPE = _constantsLegacy00NJs.bn;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        EXECUTABLE_TRIGGER_NODE_TYPES = _constantsLegacy00NJs.ht;
        getNodeOutputs = _constantsLegacy00NJs.vi;
        STICKY_NODE_TYPE = _constantsLegacy00NJs.xn;
      }, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_chatPanelStoreLegacy00ZJs) {}, function (_npsSurveyStoreLegacy011Js) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_useWorkflowSavingLegacy019Js) {}, function (_retryLegacy01bJs) {}, function (_executionsStoreLegacy01dJs) {}, function (_useRunWorkflowLegacy01fJs) {}, function (_usePinnedDataLegacy01hJs) {
        usePinnedData = _usePinnedDataLegacy01hJs.t;
      }, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {}, function (_foldersStoreLegacy01tJs) {}, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_dataTableStoreLegacy01HJs) {}, function (_CopyInputLegacy01NJs) {}, function (_isEmptyLegacy01TJs) {}, function (_NDVEmptyStateLegacy01VJs) {}, function (_exportsLegacy01XJs) {}, function (_externalSecretsEeStoreLegacy01ZJs) {}, function (_uniqByLegacy01$Js) {}, function (_semverLegacy021Js) {}, function (_CommunityNodeUpdateInfoLegacy023Js) {}, function (_DraggableLegacy02dJs) {
        Draggable_default = _DraggableLegacy02dJs.t;
      }, function (_VirtualSchemaLegacy02fJs) {}, function (_TextWithHighlightsLegacy02hJs) {}, function (_useTelemetryContextLegacy02jJs) {
        useTelemetryContext = _useTelemetryContextLegacy02jJs.t;
      }, function (_schemaPreviewStoreLegacy02lJs) {}, function (_nodeTransformsLegacy02nJs) {}, function (_FileSaverMinLegacy02rJs) {}, function (_vueJsonPrettyLegacy02tJs) {}, function (_RunDataHtmlLegacy02vJs) {}, function (_dateFormatterLegacy02zJs) {}, function (_useExecutionHelpersLegacy02BJs) {}, function (_NodeSettingsLegacy02FJs) {
        useNodeDocsUrl = _NodeSettingsLegacy02FJs.n;
        NodeSettings_default = _NodeSettingsLegacy02FJs.t;
      }, function (_useActionsLegacy03dJs) {}, function (_vueLegacy03hJs) {}, function (_useKeybindingsLegacy03tJs) {
        useKeybindings = _useKeybindingsLegacy03tJs.t;
      }, function (_useWorkflowActivateLegacy03zJs) {
        useWorkflowActivate = _useWorkflowActivateLegacy03zJs.t;
      }, function (_coreLegacy03FJs) {}, function (_useExecutionDataLegacy04bJs) {}, function (_VueMarkdownLegacy04LJs) {}, function (_AnimatedSpinnerLegacy051Js) {}, function (_useLogsTreeExpandLegacy06fJs) {}, function (_coreLegacy06hJs) {}, function (_RunDataParsedAiContentLegacy06zJs) {}, function (_TriggerPanelLegacy06HJs) {
        OutputPanel_default = _TriggerPanelLegacy06HJs.n;
        NDVFloatingNodes_default = _TriggerPanelLegacy06HJs.r;
        TriggerPanel_default = _TriggerPanelLegacy06HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._ndvHeader_1e58b_2 {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: var(--spacing--2xs);\n\tpadding: var(--spacing--4xs);\n\tbackground: var(--color--background--light-3);\n}\n._content_1e58b_12 {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--spacing--2xs);\n\tmargin-left: var(--spacing--2xs);\n}\n._actions_1e58b_19 {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--spacing--4xs);\n}\n._actions_1e58b_19 button:hover {\n\tbackground-color: var(--color--background);\n}\n._actions_1e58b_19 > *:not(:last-child) {\n\tborder-right: var(--border);\n\tpadding-right: var(--spacing--2xs);\n}\n._title_1e58b_34 {\n\tcolor: var(--color--text--shade-1);\n\tfont-size: var(--font-size--sm);\n}\n._docsLabel_1e58b_39 {\n\tdisplay: flex;\n\tgap: var(--spacing--4xs);\n}\n._icon_1e58b_44 {\n\talign-self: center;\n\tz-index: 1;\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dragButton_aofeu_123 {\n  cursor: ew-resize;\n  border: none;\n  outline: none;\n  background: var(--color--background--light-3);\n  display: flex;\n  align-items: baseline;\n  gap: var(--spacing--3xs);\n  padding: var(--spacing--4xs) var(--spacing--3xs) 0 var(--spacing--3xs);\n  color: var(--color--foreground--shade-1);\n  border: var(--border);\n  border-bottom: none;\n  border-top-left-radius: var(--radius);\n  border-top-right-radius: var(--radius);\n}\n._dragButton_aofeu_123 ._arrow_aofeu_138 {\n  opacity: 0;\n  width: 10px;\n}\n._dragButton_aofeu_123 ._handle_aofeu_142 {\n  width: 11px;\n  transform: rotate(90deg);\n}\n._dragButton_aofeu_123:hover ._arrow_aofeu_138, ._dragButton_aofeu_123._dragging_aofeu_146 ._arrow_aofeu_138 {\n  opacity: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._backdrop_11bnq_123 {\n  position: absolute;\n  z-index: var(--ndv--z);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--dialog--overlay--color--background--dark);\n}\n._dialog_11bnq_133 {\n  position: absolute;\n  z-index: var(--ndv--z);\n  width: calc(100% - var(--spacing--2xl));\n  height: calc(100% - var(--spacing--2xl));\n  top: var(--spacing--lg);\n  left: var(--spacing--lg);\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  outline: none;\n}\n._container_11bnq_148 {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  background: var(--border-color);\n  border: var(--border);\n  border-radius: var(--radius--lg);\n  color: var(--color--text);\n  min-width: 0;\n}\n._main_11bnq_159 {\n  width: 100%;\n  flex-grow: 1;\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n  min-height: 0;\n  position: relative;\n}\n._column_11bnq_169 {\n  min-width: 0;\n}\n._column_11bnq_169 + ._column_11bnq_169 {\n  border-left: var(--border);\n}\n._column_11bnq_169:first-child > div {\n  border-bottom-left-radius: var(--radius--lg);\n}\n._column_11bnq_169:last-child {\n  border-bottom-right-radius: var(--radius--lg);\n}\n._input_11bnq_182,\n._output_11bnq_183 {\n  min-width: 280px;\n}\n._dataColumn_11bnq_187 {\n  overflow-x: auto;\n}\n._header_11bnq_191 {\n  border-bottom: var(--border);\n  border-top-left-radius: var(--radius--lg);\n  border-top-right-radius: var(--radius--lg);\n}\n._settings_11bnq_197 {\n  overflow: hidden;\n  flex-grow: 1;\n}\n._draggable_11bnq_202 {\n  --draggable--height: 18px;\n  position: absolute;\n  top: calc(-1 * var(--draggable--height));\n  left: 50%;\n  transform: translateX(-50%);\n  height: var(--draggable--height);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/panel/components/NDVHeader.vue?vue&type=script&setup=true&lang.ts
        NDVHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NDVHeader",
          props: {
            nodeName: {},
            nodeTypeName: {},
            docsUrl: {},
            icon: {},
            readOnly: {
              type: Boolean
            }
          },
          emits: ["close", "rename"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const i18n = useI18n();
            const emit = __emit;
            function onRename(newNodeName) {
              emit("rename", newNodeName || props.nodeTypeName);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("header", {
                class: normalizeClass(_ctx.$style.ndvHeader)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [_ctx.icon ? (openBlock(), createBlock(NodeIcon_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.icon),
                size: 20,
                "icon-source": _ctx.icon
              }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.title)
              }, [createVNode(unref(N8nInlineTextEdit_default), {
                "model-value": _ctx.nodeName,
                "min-width": 0,
                "max-width": 500,
                placeholder: unref(i18n).baseText("ndv.title.rename.placeholder"),
                "read-only": _ctx.readOnly,
                "onUpdate:modelValue": onRename
              }, null, 8, ["model-value", "placeholder", "read-only"])], 2)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [_ctx.docsUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
                key: 0,
                theme: "text",
                target: "_blank",
                href: _ctx.docsUrl
              }, {
                default: withCtx(() => [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.docsLabel)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.docs")), 1)]),
                  _: 1
                }), createVNode(unref(N8nIcon_default), {
                  icon: "external-link"
                })], 2)]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), null, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.close.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: "x",
                  type: "tertiary",
                  text: "",
                  "data-test-id": "ndv-close-button",
                  onClick: _cache[0] || (_cache[0] = $event => emit("close"))
                })]),
                _: 1
              })], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/NDVHeader.vue?vue&type=style&index=0&lang.module.css
        ndvHeader = "_ndvHeader_1e58b_2";
        content = "_content_1e58b_12";
        actions = "_actions_1e58b_19";
        title = "_title_1e58b_34";
        docsLabel = "_docsLabel_1e58b_39";
        icon = "_icon_1e58b_44";
        NDVHeader_vue_vue_type_style_index_0_lang_module_default = {
          ndvHeader,
          content,
          actions,
          title,
          docsLabel,
          icon
        }; //#endregion
        //#region src/features/ndv/panel/components/NDVHeader.vue
        cssModules$2 = {
          "$style": NDVHeader_vue_vue_type_style_index_0_lang_module_default
        };
        NDVHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(NDVHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]);
        PanelDragButtonV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "PanelDragButtonV2",
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
                class: normalizeClass(_ctx.$style.dragContainer),
                type: "panel-resize",
                cursor: "ew-resize",
                "data-test-id": "panel-drag-button",
                onDrag,
                onDragstart: onDragStart,
                onDragend: onDragEnd
              }, {
                default: withCtx(({
                  isDragging
                }) => [createBaseVNode("button", {
                  class: normalizeClass([_ctx.$style.dragButton, {
                    [_ctx.$style.dragging]: isDragging
                  }])
                }, [_ctx.canMoveLeft ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.arrow),
                  icon: "arrow-left"
                }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.handle),
                  icon: "menu"
                }, null, 8, ["class"]), _ctx.canMoveRight ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 1,
                  class: normalizeClass(_ctx.$style.arrow),
                  icon: "arrow-right"
                }, null, 8, ["class"])) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/PanelDragButtonV2.vue?vue&type=style&index=0&lang.module.scss
        dragButton = "_dragButton_aofeu_123";
        arrow = "_arrow_aofeu_138";
        handle = "_handle_aofeu_142";
        dragging = "_dragging_aofeu_146";
        PanelDragButtonV2_vue_vue_type_style_index_0_lang_module_default = {
          dragButton,
          arrow,
          handle,
          dragging
        }; //#endregion
        //#region src/features/ndv/panel/components/PanelDragButtonV2.vue
        cssModules$1 = {
          "$style": PanelDragButtonV2_vue_vue_type_style_index_0_lang_module_default
        };
        PanelDragButtonV2_default = /* @__PURE__ */__plugin_vue_export_helper_default(PanelDragButtonV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ndv/shared/views/NodeDetailsViewV2.vue?vue&type=script&setup=true&lang.ts
        NodeDetailsViewV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeDetailsViewV2",
          props: {
            workflowObject: {},
            readOnly: {
              type: Boolean,
              default: false
            },
            isProductionExecutionPreview: {
              type: Boolean,
              default: false
            }
          },
          emits: ["saveKeyboardShortcut", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "renameNode", "stopExecution"],
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
            const uiStore = useUIStore();
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
            const runOutputIndex = ref(-1);
            const isLinkingEnabled = ref(true);
            const selectedInput = ref();
            const triggerWaitingWarningEnabled = ref(false);
            const isDragging = ref(false);
            const mainPanelPosition = ref(0);
            const pinDataDiscoveryTooltipVisible = ref(false);
            const avgInputRowHeight = ref(0);
            const avgOutputRowHeight = ref(0);
            const isInputPaneActive = ref(false);
            const isOutputPaneActive = ref(false);
            const isPairedItemHoveringEnabled = ref(true);
            const dialogRef = ref();
            const containerRef = useTemplateRef("containerRef");
            const mainPanelRef = useTemplateRef("mainPanelRef");
            const pushRef = computed(() => ndvStore.pushRef);
            const activeNodeType = computed(() => {
              if (activeNode.value) return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
              return null;
            });
            const {
              docsUrl
            } = useNodeDocsUrl({
              nodeType: activeNodeType
            });
            const workflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
            const workflowRunData = computed(() => {
              if (workflowExecution.value === null) return null;
              const executionData = workflowExecution.value.data;
              if (executionData?.resultData) return executionData.resultData.runData;
              return null;
            });
            const parentNodes = computed(() => {
              if (activeNode.value) return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1).map(({
                name
              }) => name) || [];else return [];
            });
            const parentNode = computed(() => {
              for (const parentNodeName of parentNodes.value) {
                if (workflowsStore?.pinnedWorkflowData?.[parentNodeName]) return parentNodeName;
                if (workflowRunData.value?.[parentNodeName]) return parentNodeName;
              }
              return parentNodes.value[0];
            });
            const inputNodeName = computed(() => {
              if ((activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : []).filter(output$1 => {
                if (typeof output$1 === "string") return output$1 !== NodeConnectionTypes.Main;
                return output$1.type !== NodeConnectionTypes.Main;
              }).length > 0 && activeNode.value) return props.workflowObject.getChildNodes(activeNode.value.name, "ALL_NON_MAIN")?.[0];
              return selectedInput.value || parentNode.value;
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
              if (outputs.some(output$1 => output$1 !== NodeConnectionTypes.Main)) node = activeNode.value;
              if (!node || !runData?.hasOwnProperty(node.name)) return 0;
              if (runData[node.name].length) return runData[node.name].length - 1;
              return 0;
            });
            const inputRun = computed(() => {
              if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) return outputRun.value;
              if (runInputIndex.value === -1) return maxInputRun.value;
              return Math.min(runInputIndex.value, maxInputRun.value);
            });
            const canLinkRuns = computed(() => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value);
            const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
            const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
            const isWorkflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
            const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
            const blockUi = computed(() => isWorkflowRunning.value || isExecutionWaitingForWebhook.value);
            const foreignCredentials = computed(() => nodeHelpers.getForeignCredentialsIfSharingEnabled(activeNode.value?.credentials));
            const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
            const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
            const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
            const hasInputPanel = computed(() => !isTriggerNode.value || showTriggerPanel.value);
            const supportedResizeDirections = computed(() => hasInputPanel.value ? ["left", "right"] : ["right"]);
            const nodeSettingsProps = computed(() => ({
              eventBus: settingsEventBus,
              dragging: isDragging.value,
              pushRef: pushRef.value,
              nodeType: activeNodeType.value,
              foreignCredentials: foreignCredentials.value,
              readOnly: props.readOnly,
              blockUI: blockUi.value && showTriggerPanel.value,
              executable: !props.readOnly,
              inputSize: inputSize.value,
              isNdvV2: true
            }));
            const {
              containerWidth,
              onDrag,
              onResize,
              onResizeEnd,
              panelWidthPercentage,
              panelWidthPixels
            } = useNdvLayout({
              container: containerRef,
              hasInputPanel,
              paneType: computed(() => {
                if (!hasInputPanel.value) return "inputless";
                return activeNodeType.value?.parameterPane ?? "regular";
              })
            });
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
            const onDragEnd = () => {
              onResizeEnd();
              isDragging.value = false;
              telemetry.track("User moved parameters pane", {
                window_width: containerWidth.value,
                start_position: mainPanelPosition.value,
                node_type: activeNodeType.value ? activeNodeType.value.name : "",
                push_ref: pushRef.value,
                workflow_id: workflowsStore.workflowId
              });
            };
            const onDragStart = () => {
              isDragging.value = true;
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
                if (!activeNode.value || !workflowRunning.value) return;
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
              runOutputIndex.value = runInputIndex.value;
              isLinkingEnabled.value = true;
              trackLinking("input");
            };
            const onSwitchSelectedNode = nodeTypeName => {
              emit("switchSelectedNode", nodeTypeName);
            };
            const onOpenConnectionNodeCreator = (nodeTypeName, connectionType) => {
              emit("openConnectionNodeCreator", nodeTypeName, connectionType);
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
            useKeybindings({
              Escape: close
            });
            const trackRunChange = (run, pane) => {
              telemetry.track("User changed ndv run dropdown", {
                push_ref: pushRef.value,
                run_index: run,
                node_type: activeNodeType.value ? activeNodeType.value?.name : "",
                pane
              });
            };
            const onRunOutputIndexChange = run => {
              runOutputIndex.value = run;
              trackRunChange(run, "output");
            };
            const onRunInputIndexChange = run => {
              runInputIndex.value = run;
              if (linked.value) runOutputIndex.value = run;
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
            const onRename = name => {
              emit("renameNode", name);
            };
            const handleChangeDisplayMode = (pane, mode) => {
              ndvStore.setPanelDisplayMode({
                pane,
                mode
              });
            };
            watch(activeNode, (node, oldNode) => {
              if (node && !oldNode) {
                registerKeyboardListener();
                dialogRef.value?.show();
              } else if (!node) unregisterKeyboardListener();
              if (node && node.name !== oldNode?.name && !isActiveStickyNode.value) {
                runInputIndex.value = -1;
                runOutputIndex.value = -1;
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
                      selected_view_inputs: isTriggerNode.value ? "trigger" : ndvStore.inputPanelDisplayMode,
                      selected_view_outputs: ndvStore.outputPanelDisplayMode,
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
              runOutputIndex.value = -1;
            });
            watch(maxInputRun, () => {
              runInputIndex.value = -1;
            });
            watch(inputNodeName, nodeName => {
              setTimeout(() => {
                ndvStore.setInputNodeName(nodeName);
              }, 0);
            });
            watch(inputRun, run => {
              setTimeout(() => {
                ndvStore.setInputRunIndex(run);
              }, 0);
            });
            watch(mainPanelRef, mainPanel => {
              if (!mainPanel) return;
              function getTabbableCandidates(element) {
                const nodes = [];
                const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
                  acceptNode: node => {
                    const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
                    if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
                    return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                  }
                });
                while (walker.nextNode()) nodes.push(walker.currentNode);
                return nodes;
              }
              const firstFocusableElement = getTabbableCandidates(mainPanel)[0];
              if (firstFocusableElement) firstFocusableElement.focus();
            });
            onMounted(() => {
              dialogRef.value?.show();
              dataPinningEventBus.on("data-pinning-discovery", setIsTooltipVisible);
            });
            onBeforeUnmount(() => {
              dataPinningEventBus.off("data-pinning-discovery", setIsTooltipVisible);
              unregisterKeyboardListener();
            });
            return (_ctx, _cache) => {
              return unref(activeNode) && !isActiveStickyNode.value ? (openBlock(), createBlock(Teleport, {
                key: 0,
                to: `#${unref(APP_MODALS_ELEMENT_ID)}`
              }, [createBaseVNode("div", {
                "data-test-id": "ndv-backdrop",
                class: normalizeClass(_ctx.$style.backdrop),
                style: normalizeStyle({
                  zIndex: unref(APP_Z_INDEXES).NDV
                }),
                onClick: close
              }, null, 6), createBaseVNode("dialog", {
                ref_key: "dialogRef",
                ref: dialogRef,
                open: "",
                "aria-modal": "true",
                "data-test-id": "ndv",
                class: normalizeClass(_ctx.$style.dialog),
                style: normalizeStyle({
                  zIndex: unref(APP_Z_INDEXES).NDV
                })
              }, [createVNode(NDVFloatingNodes_default, {
                "root-node": unref(activeNode),
                onSwitchSelectedNode
              }, null, 8, ["root-node"]), createBaseVNode("div", {
                ref_key: "containerRef",
                ref: containerRef,
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(NDVHeader_default, {
                class: normalizeClass(_ctx.$style.header),
                "node-name": unref(activeNode).name,
                "node-type-name": activeNodeType.value?.defaults.name ?? activeNodeType.value?.displayName ?? unref(activeNode).name,
                icon: unref(getNodeIconSource)(activeNodeType.value ?? unref(activeNode).type, unref(activeNode)),
                "docs-url": unref(docsUrl),
                onClose: close,
                onRename
              }, null, 8, ["class", "node-name", "node-type-name", "icon", "docs-url"]), createBaseVNode("main", {
                class: normalizeClass(_ctx.$style.main)
              }, [hasInputPanel.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.$style.column, _ctx.$style.dataColumn]),
                style: normalizeStyle({
                  width: `${unref(panelWidthPercentage).left}%`
                })
              }, [showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel_default, {
                key: 0,
                "node-name": unref(activeNode).name,
                "push-ref": pushRef.value,
                class: normalizeClass(_ctx.$style.input),
                onExecute: onNodeExecute,
                onActivate: onWorkflowActivate
              }, null, 8, ["node-name", "push-ref", "class"])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel_default, {
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
                class: normalizeClass(_ctx.$style.input),
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
              }, null, 8, ["workflow-object", "can-link-runs", "run-index", "linked-runs", "active-node-name", "current-node-name", "push-ref", "read-only", "is-production-execution-preview", "search-shortcut", "display-mode", "class", "is-mapping-onboarded", "focused-mappable-input"])) : createCommentVNode("", true)], 6)) : createCommentVNode("", true), createVNode(unref(N8nResizeWrapper_default), {
                width: unref(panelWidthPixels).main,
                "min-width": 260,
                "supported-directions": supportedResizeDirections.value,
                "grid-size": 8,
                class: normalizeClass(_ctx.$style.column),
                style: normalizeStyle({
                  width: `${unref(panelWidthPercentage).main}%`
                }),
                outset: "",
                onResize: unref(onResize),
                onResizestart: onDragStart,
                onResizeend: onDragEnd
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  ref_key: "mainPanelRef",
                  ref: mainPanelRef,
                  class: normalizeClass(_ctx.$style.main)
                }, [hasInputPanel.value ? (openBlock(), createBlock(PanelDragButtonV2_default, {
                  key: 0,
                  class: normalizeClass(_ctx.$style.draggable),
                  "can-move-left": true,
                  "can-move-right": true,
                  onDrag: unref(onDrag),
                  onDragstart: onDragStart,
                  onDragend: onDragEnd
                }, null, 8, ["class", "onDrag"])) : createCommentVNode("", true), createVNode(NodeSettings_default, mergeProps(nodeSettingsProps.value, {
                  class: _ctx.$style.settings,
                  onExecute: onNodeExecute,
                  onStopExecution,
                  onActivate: onWorkflowActivate,
                  onSwitchSelectedNode,
                  onOpenConnectionNodeCreator
                }), null, 16, ["class"])], 2)]),
                _: 1
              }, 8, ["width", "supported-directions", "class", "style", "onResize"]), createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.column, _ctx.$style.dataColumn]),
                style: normalizeStyle({
                  width: `${unref(panelWidthPercentage).right}%`
                })
              }, [createVNode(OutputPanel_default, {
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
                class: normalizeClass(_ctx.$style.output),
                onActivatePane: activateOutputPane,
                onLinkRun: onLinkRunToOutput,
                onUnlinkRun: _cache[2] || (_cache[2] = () => onUnlinkRun("output")),
                onRunChange: onRunOutputIndexChange,
                onOpenSettings: openSettings,
                onTableMounted: onOutputTableMounted,
                onItemHover: onOutputItemHover,
                onSearch,
                onExecute: onNodeExecute,
                onDisplayModeChange: _cache[3] || (_cache[3] = $event => handleChangeDisplayMode("output", $event))
              }, null, 8, ["workflow-object", "can-link-runs", "run-index", "linked-runs", "push-ref", "is-read-only", "block-u-i", "is-production-execution-preview", "is-pane-active", "display-mode", "class"])], 6)], 2)], 2)], 6)], 8, ["to"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/ndv/shared/views/NodeDetailsViewV2.vue?vue&type=style&index=0&lang.module.scss
        backdrop = "_backdrop_11bnq_123";
        dialog = "_dialog_11bnq_133";
        container = "_container_11bnq_148";
        main = "_main_11bnq_159";
        column = "_column_11bnq_169";
        input = "_input_11bnq_182";
        output = "_output_11bnq_183";
        dataColumn = "_dataColumn_11bnq_187";
        header = "_header_11bnq_191";
        settings = "_settings_11bnq_197";
        draggable = "_draggable_11bnq_202";
        NodeDetailsViewV2_vue_vue_type_style_index_0_lang_module_default = {
          backdrop,
          dialog,
          container,
          main,
          column,
          input,
          output,
          dataColumn,
          header,
          settings,
          draggable
        }; //#endregion
        //#region src/features/ndv/shared/views/NodeDetailsViewV2.vue
        cssModules = {
          "$style": NodeDetailsViewV2_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", NodeDetailsViewV2_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeDetailsViewV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();