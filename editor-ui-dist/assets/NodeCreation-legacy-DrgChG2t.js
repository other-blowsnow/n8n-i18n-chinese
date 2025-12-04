;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./assistant.store-legacy-DA-XPgP-.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./chatPanel.store-legacy-FzNnu3b1.js", "./npsSurvey.store-legacy-B5srzxcX.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./templates.store-legacy-dWApE3rc.js", "./focusPanel.store-legacy-BYC5h8FJ.js", "./useWorkflowSaving-legacy-Bw9fkKuY.js", "./retry-legacy-CSXRWnZ-.js", "./executions.store-legacy-DarjeF75.js", "./useRunWorkflow-legacy-B_MOKTHf.js", "./usePinnedData-legacy-DF_tF6WF.js", "./nodeCreator.store-legacy-06_T1NV-.js", "./nodeIcon-legacy-vDRr0hL7.js", "./useClipboard-legacy-CkqS6mrY.js", "./useCanvasOperations-legacy-nXNbEUno.js", "./folders.store-legacy-B-8jqnKg.js", "./NodeIcon-legacy-nNR3V-3Y.js", "./KeyboardShortcutTooltip-legacy-D6dPIjVo.js", "./versions.store-legacy-GXtvQmrr.js", "./usePageRedirectionHelper-legacy-BYf33Ms4.js", "./dataTable.store-legacy-ENA4UMK7.js", "./useBugReporting-legacy-BByGyDaU.js", "./uniqBy-legacy-diDph4dv.js", "./ProjectIcon-legacy-ByRpi0-Z.js", "./CredentialIcon-legacy-BDJvL2pe.js", "./FileSaver.min-legacy-CcqEXadD.js", "./sortByProperty-legacy-B-geXLIx.js", "./useRecentResources-legacy-BOYKJL9I.js", "./useActions-legacy-BAoR-3Sl.js", "./useCommandBar-legacy-ZH3ELZKA.js", "./useWorkflowActivate-legacy-B_BYWOsp.js"], function (_export, _context) {
    "use strict";

    var toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, createVNode, defineAsyncComponent, defineComponent, createBlock, Fragment, withCtx, openBlock, createTextVNode, normalizeClass, createBaseVNode, Suspense, useI18n, N8nIconButton_default, AskAssistantIcon_default, N8nButton_default, N8nTooltip_default, __vitePreload, __plugin_vue_export_helper_default, useUIStore, useTelemetry, getMidCanvasPosition, NODE_CREATOR_OPEN_SOURCES, DEFAULT_STICKY_WIDTH, DEFAULT_STICKY_HEIGHT, STICKY_NODE_TYPE, useBuilderStore, useAssistantStore, useChatPanelStore, useFocusPanelStore, KeyboardShortcutTooltip_default, useActions, useCommandBar, __vite_style__, NodeCreation_vue_vue_type_script_setup_true_lang_default, nodeButtonsWrapper, icon, activeButton, NodeCreation_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeCreation_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        Suspense = _vueRuntimeEsmBundlerLegacy003Js.y;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Et;
        AskAssistantIcon_default = _srcLegacy007Js.ct;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        getMidCanvasPosition = _useTelemetryLegacy00HJs.v;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        NODE_CREATOR_OPEN_SOURCES = _constantsLegacy00RJs.Ct;
        DEFAULT_STICKY_WIDTH = _constantsLegacy00RJs.G;
        DEFAULT_STICKY_HEIGHT = _constantsLegacy00RJs.W;
        STICKY_NODE_TYPE = _constantsLegacy00RJs.ur;
      }, function (_mergeLegacy00TJs) {}, function (_assistantStoreLegacy00VJs) {
        useBuilderStore = _assistantStoreLegacy00VJs.i;
        useAssistantStore = _assistantStoreLegacy00VJs.t;
      }, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_chatPanelStoreLegacy015Js) {
        useChatPanelStore = _chatPanelStoreLegacy015Js.t;
      }, function (_npsSurveyStoreLegacy019Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_templatesStoreLegacy01dJs) {}, function (_focusPanelStoreLegacy01fJs) {
        useFocusPanelStore = _focusPanelStoreLegacy01fJs.t;
      }, function (_useWorkflowSavingLegacy01hJs) {}, function (_retryLegacy01jJs) {}, function (_executionsStoreLegacy01lJs) {}, function (_useRunWorkflowLegacy01nJs) {}, function (_usePinnedDataLegacy01pJs) {}, function (_nodeCreatorStoreLegacy01rJs) {}, function (_nodeIconLegacy01tJs) {}, function (_useClipboardLegacy01vJs) {}, function (_useCanvasOperationsLegacy01xJs) {}, function (_foldersStoreLegacy01BJs) {}, function (_NodeIconLegacy01DJs) {}, function (_KeyboardShortcutTooltipLegacy01FJs) {
        KeyboardShortcutTooltip_default = _KeyboardShortcutTooltipLegacy01FJs.t;
      }, function (_versionsStoreLegacy01JJs) {}, function (_usePageRedirectionHelperLegacy01LJs) {}, function (_dataTableStoreLegacy01PJs) {}, function (_useBugReportingLegacy01TJs) {}, function (_uniqByLegacy027Js) {}, function (_ProjectIconLegacy02dJs) {}, function (_CredentialIconLegacy02jJs) {}, function (_FileSaverMinLegacy02FJs) {}, function (_sortByPropertyLegacy02$Js) {}, function (_useRecentResourcesLegacy03pJs) {}, function (_useActionsLegacy03rJs) {
        useActions = _useActionsLegacy03rJs.t;
      }, function (_useCommandBarLegacy03PJs) {
        useCommandBar = _useCommandBarLegacy03PJs.t;
      }, function (_useWorkflowActivateLegacy03RJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeButtonsWrapper_13o6j_123 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n  padding: var(--spacing--sm);\n  pointer-events: all !important;\n}\n._icon_13o6j_134 {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n._icon_13o6j_134 svg {\n  display: block;\n}\n._activeButton_13o6j_143 {\n  background-color: var(--button--color--background--hover) !important;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/shared/nodeCreator/views/NodeCreation.vue?vue&type=script&setup=true&lang.ts
        NodeCreation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeCreation",
          props: {
            nodeViewScale: {},
            createNodeActive: {
              type: Boolean,
              default: false
            },
            focusPanelActive: {
              type: Boolean
            }
          },
          emits: ["addNodes", "toggleNodeCreator", "close"],
          setup(__props, {
            emit: __emit
          }) {
            const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./NodeCreator-legacy-MicNGhC9.js"), true               ? void 0 : void 0));
            const props = __props;
            const emit = __emit;
            const uiStore = useUIStore();
            const focusPanelStore = useFocusPanelStore();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const assistantStore = useAssistantStore();
            const builderStore = useBuilderStore();
            const chatPanelStore = useChatPanelStore();
            const {
              isEnabled: isCommandBarEnabled
            } = useCommandBar();
            const {
              getAddedNodesAndConnections
            } = useActions();
            function openNodeCreator() {
              emit("toggleNodeCreator", {
                source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
                createNodeActive: true
              });
            }
            function addStickyNote() {
              if (document.activeElement) document.activeElement.blur();
              const offset = [...uiStore.nodeViewOffsetPosition];
              const position = getMidCanvasPosition(props.nodeViewScale, offset);
              position[0] -= 240 / 2;
              position[1] -= 160 / 2;
              emit("addNodes", getAddedNodesAndConnections([{
                type: STICKY_NODE_TYPE,
                position
              }]));
            }
            function closeNodeCreator(hasAddedNodes = false) {
              if (props.createNodeActive) emit("toggleNodeCreator", {
                createNodeActive: false,
                hasAddedNodes
              });
              emit("close");
            }
            function nodeTypeSelected(value) {
              emit("addNodes", getAddedNodesAndConnections(value));
              closeNodeCreator(true);
            }
            function toggleFocusPanel() {
              focusPanelStore.toggleFocusPanel();
              telemetry.track(focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel", {
                source: "canvasButton",
                parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
              });
            }
            async function onAskAssistantButtonClick() {
              if (builderStore.isAIBuilderEnabled) await chatPanelStore.toggle({
                mode: "builder"
              });else await chatPanelStore.toggle({
                mode: "assistant"
              });
              if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
                source: "canvas",
                task: "placeholder",
                has_existing_session: !assistantStore.isSessionEnded
              });
            }
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
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock(Fragment, null, [!_ctx.createNodeActive ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
              }, [createVNode(KeyboardShortcutTooltip_default, {
                label: unref(i18n).baseText("nodeView.openNodesPanel"),
                shortcut: {
                  keys: ["Tab"]
                },
                placement: "left"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  size: "large",
                  icon: "plus",
                  type: "tertiary",
                  "data-test-id": "node-creator-plus-button",
                  onClick: openNodeCreator
                })]),
                _: 1
              }, 8, ["label"]), unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                key: 0,
                label: unref(i18n).baseText("nodeView.openCommandBar"),
                shortcut: {
                  keys: ["k"],
                  metaKey: true
                },
                placement: "left"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  size: "large",
                  icon: "search",
                  type: "tertiary",
                  "data-test-id": "command-bar-button",
                  onClick: openCommandBar
                })]),
                _: 1
              }, 8, ["label"])) : createCommentVNode("", true), createVNode(KeyboardShortcutTooltip_default, {
                label: unref(i18n).baseText("nodeView.addStickyHint"),
                shortcut: {
                  keys: ["s"],
                  shiftKey: true
                },
                placement: "left"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  size: "large",
                  type: "tertiary",
                  icon: "sticky-note",
                  "data-test-id": "add-sticky-button",
                  onClick: addStickyNote
                })]),
                _: 1
              }, 8, ["label"]), createVNode(KeyboardShortcutTooltip_default, {
                label: unref(i18n).baseText("nodeView.openFocusPanel"),
                shortcut: {
                  keys: ["f"],
                  shiftKey: true
                },
                placement: "left"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  type: "tertiary",
                  size: "large",
                  icon: "panel-right",
                  class: normalizeClass(_ctx.focusPanelActive ? _ctx.$style.activeButton : ""),
                  active: _ctx.focusPanelActive,
                  "data-test-id": "toggle-focus-panel-button",
                  onClick: toggleFocusPanel
                }, null, 8, ["class", "active"])]),
                _: 1
              }, 8, ["label"]), unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                placement: "left"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  size: "large",
                  square: "",
                  class: normalizeClass(_ctx.$style.icon),
                  "data-test-id": "ask-assistant-canvas-action-button",
                  onClick: onAskAssistantButtonClick
                }, {
                  default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), {
                    size: "large"
                  })])]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
                default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
                  active: _ctx.createNodeActive,
                  onNodeTypeSelected: nodeTypeSelected,
                  onCloseNodeCreator: closeNodeCreator
                }, null, 8, ["active"])]),
                _: 1
              }))], 64);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/views/NodeCreation.vue?vue&type=style&index=0&lang.module.scss
        nodeButtonsWrapper = "_nodeButtonsWrapper_13o6j_123";
        icon = "_icon_13o6j_134";
        activeButton = "_activeButton_13o6j_143";
        NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
          nodeButtonsWrapper,
          icon,
          activeButton
        }; //#endregion
        //#region src/features/shared/nodeCreator/views/NodeCreation.vue
        cssModules = {
          "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", NodeCreation_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();