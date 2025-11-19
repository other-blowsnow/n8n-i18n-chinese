;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./chatPanel.store-legacy-NYceFr60.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./retry-legacy-CkXCWkMV.js", "./executions.store-legacy-BxTud2_e.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./KeyboardShortcutTooltip-legacy-ZyxuvJWt.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./dataTable.store-legacy-BFWf9Jk0.js", "./useBugReporting-legacy-g7tQDYSS.js", "./uniqBy-legacy-BQtuBYTn.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./CredentialIcon-legacy-73ltKnan.js", "./FileSaver.min-legacy-BTN44Z38.js", "./sortByProperty-legacy-CgPLoqtk.js", "./useRecentResources-legacy-DW2sKJPV.js", "./useActions-legacy-A6v3pRgY.js", "./useCommandBar-legacy-C-Su2-N0.js", "./useWorkflowActivate-legacy-DRFvTgOe.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, nextTick, unref, createVNode, defineAsyncComponent, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, withCtx, openBlock, createTextVNode, createBaseVNode, Suspense, useI18n, N8nButton_default, N8nIconButton_default, AskAssistantIcon_default, N8nTooltip_default, __vitePreload, __plugin_vue_export_helper_default, useUIStore, useTelemetry, getMidCanvasPosition, DEFAULT_STICKY_HEIGHT, NODE_CREATOR_OPEN_SOURCES, STICKY_NODE_TYPE, DEFAULT_STICKY_WIDTH, useBuilderStore, useAssistantStore, useChatPanelStore, useFocusPanelStore, KeyboardShortcutTooltip_default, useActions, useCommandBar, __vite_style__, NodeCreation_vue_vue_type_script_setup_true_lang_default, nodeButtonsWrapper, icon, activeButton, NodeCreation_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeCreation_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        Suspense = _vueRuntimeEsmBundlerLegacy003Js.y;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        AskAssistantIcon_default = _srcLegacy007Js.st;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        getMidCanvasPosition = _useTelemetryLegacy00FJs.v;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        DEFAULT_STICKY_HEIGHT = _constantsLegacy00NJs.br;
        NODE_CREATOR_OPEN_SOURCES = _constantsLegacy00NJs.io;
        STICKY_NODE_TYPE = _constantsLegacy00NJs.xn;
        DEFAULT_STICKY_WIDTH = _constantsLegacy00NJs.xr;
      }, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {
        useBuilderStore = _assistantStoreLegacy00RJs.i;
        useAssistantStore = _assistantStoreLegacy00RJs.t;
      }, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_chatPanelStoreLegacy00ZJs) {
        useChatPanelStore = _chatPanelStoreLegacy00ZJs.t;
      }, function (_npsSurveyStoreLegacy011Js) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {
        useFocusPanelStore = _focusPanelStoreLegacy017Js.t;
      }, function (_useWorkflowSavingLegacy019Js) {}, function (_retryLegacy01bJs) {}, function (_executionsStoreLegacy01dJs) {}, function (_useRunWorkflowLegacy01fJs) {}, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {}, function (_foldersStoreLegacy01tJs) {}, function (_NodeIconLegacy01vJs) {}, function (_KeyboardShortcutTooltipLegacy01xJs) {
        KeyboardShortcutTooltip_default = _KeyboardShortcutTooltipLegacy01xJs.t;
      }, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {}, function (_dataTableStoreLegacy01HJs) {}, function (_useBugReportingLegacy01LJs) {}, function (_uniqByLegacy01$Js) {}, function (_ProjectIconLegacy025Js) {}, function (_CredentialIconLegacy02bJs) {}, function (_FileSaverMinLegacy02rJs) {}, function (_sortByPropertyLegacy02RJs) {}, function (_useRecentResourcesLegacy03bJs) {}, function (_useActionsLegacy03dJs) {
        useActions = _useActionsLegacy03dJs.t;
      }, function (_useCommandBarLegacy03xJs) {
        useCommandBar = _useCommandBarLegacy03xJs.t;
      }, function (_useWorkflowActivateLegacy03zJs) {}],
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
            const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./NodeCreator-legacy-CpO-0kBm.js"), true               ? void 0 : void 0));
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