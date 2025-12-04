;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./npsSurvey.store-legacy-B5srzxcX.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./templates.store-legacy-dWApE3rc.js", "./focusPanel.store-legacy-BYC5h8FJ.js", "./useWorkflowSaving-legacy-Bw9fkKuY.js", "./WorkflowExecutionsInfoAccordion-legacy-DHKxRQgB.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, createVNode, defineComponent, withCtx, openBlock, createTextVNode, normalizeClass, useI18n, N8nText_default, N8nHeading_default, N8nButton_default, __plugin_vue_export_helper_default, useRouter, useRoute, useUIStore, useWorkflowsStore, VIEWS, PLACEHOLDER_EMPTY_WORKFLOW_ID, WorkflowExecutionsInfoAccordion_default, __vite_style__, _hoisted_1, _hoisted_2, WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, container, messageContainer, icon, WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowExecutionsLandingPage_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Kn;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nButton_default = _srcLegacy007Js.qn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00RJs.s;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_npsSurveyStoreLegacy019Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_templatesStoreLegacy01dJs) {}, function (_focusPanelStoreLegacy01fJs) {}, function (_useWorkflowSavingLegacy01hJs) {}, function (_WorkflowExecutionsInfoAccordionLegacy06fJs) {
        WorkflowExecutionsInfoAccordion_default = _WorkflowExecutionsInfoAccordionLegacy06fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1ofdn_123 {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  background-color: var(--color--background--light-2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n._messageContainer_1ofdn_133 {\n  margin-top: var(--spacing--4xl);\n  color: var(--color--text);\n}\n._messageContainer_1ofdn_133 div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n._icon_1ofdn_144 {\n  font-size: 24px;\n  color: var(--color--foreground--shade-1);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0,
          "data-test-id": "workflow-execution-no-trigger-content"
        };
        _hoisted_2 = {
          key: 1,
          "data-test-id": "workflow-execution-no-content"
        };
        WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsLandingPage",
          setup(__props) {
            const router = useRouter();
            const route = useRoute();
            const locale = useI18n();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const executionCount = computed(() => workflowsStore.currentWorkflowExecutions.length);
            const containsTrigger = computed(() => workflowsStore.workflowTriggerNodes.length > 0);
            function onSetupFirstStep() {
              uiStore.addFirstStepOnLoad = true;
              const workflowRoute = getWorkflowRoute();
              router.push(workflowRoute);
            }
            function getWorkflowRoute() {
              const workflowId = workflowsStore.workflowId || route.params.name;
              if (workflowId === "__EMPTY__") return {
                name: VIEWS.NEW_WORKFLOW,
                params: {}
              };else return {
                name: VIEWS.WORKFLOW,
                params: {
                  name: workflowId
                }
              };
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["workflow-executions-container", _ctx.$style.container])
              }, [executionCount.value === 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.$style.messageContainer, _ctx.$style.noExecutionsMessage])
              }, [!containsTrigger.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "xlarge",
                color: "text-dark",
                class: "mb-2xs"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.heading")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.message")), 1)]),
                _: 1
              }), createVNode(unref(N8nButton_default), {
                class: "mt-l",
                type: "tertiary",
                size: "large",
                onClick: onSetupFirstStep
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.buttonText")), 1)]),
                _: 1
              })])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "xlarge",
                color: "text-dark",
                class: "mb-2xs"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.heading")), 1)]),
                _: 1
              }), createVNode(WorkflowExecutionsInfoAccordion_default)]))], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1ofdn_123";
        messageContainer = "_messageContainer_1ofdn_133";
        icon = "_icon_1ofdn_144";
        WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default = {
          container,
          messageContainer,
          icon
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue
        cssModules = {
          "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", WorkflowExecutionsLandingPage_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();