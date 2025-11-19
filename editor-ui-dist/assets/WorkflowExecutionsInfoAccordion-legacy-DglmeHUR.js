;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js"], function (_export, _context) {
    "use strict";

    var computed, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, watch, withCtx, openBlock, withModifiers, createTextVNode, createBaseVNode, useI18n, N8nInfoAccordion_default, N8nLink_default, N8nTooltip_default, __plugin_vue_export_helper_default, useRouter, useSettingsStore, useUIStore, useWorkflowsStore, deepCopy, WORKFLOW_SETTINGS_MODAL_KEY, PLACEHOLDER_EMPTY_WORKFLOW_ID, useNpsSurveyStore, useWorkflowSaving, __vite_style__, _hoisted_1, WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default, accordion, disabled, WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowExecutionsInfoAccordion_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInfoAccordion_default = _srcLegacy007Js.F;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_constantsLegacy00NJs) {
        deepCopy = _constantsLegacy00NJs.Hi;
        WORKFLOW_SETTINGS_MODAL_KEY = _constantsLegacy00NJs.qo;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
      }, function (_npsSurveyStoreLegacy011Js) {
        useNpsSurveyStore = _npsSurveyStoreLegacy011Js.t;
      }, function (_useWorkflowSavingLegacy019Js) {
        useWorkflowSaving = _useWorkflowSavingLegacy019Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._accordion_1yhpp_123 {\n  background: none;\n  width: 320px;\n}\n._accordion_1yhpp_123 > div:nth-child(1) {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-block: var(--spacing--2xs);\n  padding-inline: var(--spacing--sm);\n  width: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  color: var(--color--text) !important;\n}\n._accordion_1yhpp_123 > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 var(--spacing--sm) var(--spacing--2xs) !important;\n}\n._accordion_1yhpp_123 > div:nth-child(2) span {\n  width: 100%;\n}\n._accordion_1yhpp_123 footer {\n  text-align: left;\n  width: 100%;\n  font-size: var(--font-size--2xs);\n}\n._accordion_1yhpp_123 ._disabled_1yhpp_151 a {\n  color: currentColor;\n  cursor: not-allowed;\n  opacity: 0.5;\n  text-decoration: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsInfoAccordion.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "mt-2xs"
        };
        WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsInfoAccordion",
          props: {
            initiallyExpanded: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const router = useRouter();
            const workflowSaving = useWorkflowSaving({
              router
            });
            const locale = useI18n();
            const settingsStore = useSettingsStore();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const npsSurveyStore = useNpsSurveyStore();
            const defaultValues = ref({
              saveFailedExecutions: "all",
              saveSuccessfulExecutions: "all",
              saveManualExecutions: false
            });
            const workflowSaveSettings = ref({
              saveFailedExecutions: false,
              saveSuccessfulExecutions: false,
              saveTestExecutions: false
            });
            const accordionItems = computed(() => [{
              id: "productionExecutions",
              label: locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutions"),
              icon: productionExecutionsIcon.value.icon,
              iconColor: productionExecutionsIcon.value.color,
              tooltip: productionExecutionsStatus.value === "unknown" ? locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip") : null
            }, {
              id: "manualExecutions",
              label: locale.baseText("executionsLandingPage.emptyState.accordion.testExecutions"),
              icon: workflowSaveSettings.value.saveTestExecutions ? "check" : "x",
              iconColor: workflowSaveSettings.value.saveTestExecutions ? "success" : "danger"
            }]);
            const shouldExpandAccordion = computed(() => {
              if (!props.initiallyExpanded) return false;
              return !workflowSaveSettings.value.saveFailedExecutions || !workflowSaveSettings.value.saveSuccessfulExecutions || !workflowSaveSettings.value.saveTestExecutions;
            });
            const productionExecutionsIcon = computed(() => {
              if (productionExecutionsStatus.value === "saving") return {
                icon: "check",
                color: "success"
              };else if (productionExecutionsStatus.value === "not-saving") return {
                icon: "x",
                color: "danger"
              };
              return {
                icon: "triangle-alert",
                color: "warning"
              };
            });
            const productionExecutionsStatus = computed(() => {
              if (workflowSaveSettings.value.saveSuccessfulExecutions === workflowSaveSettings.value.saveFailedExecutions) {
                if (workflowSaveSettings.value.saveSuccessfulExecutions) return "saving";
                return "not-saving";
              } else return "unknown";
            });
            const workflowSettings = computed(() => deepCopy(workflowsStore.workflowSettings));
            const accordionIcon = computed(() => {
              if (!workflowSaveSettings.value.saveTestExecutions || productionExecutionsStatus.value !== "saving") return {
                icon: "triangle-alert",
                color: "warning"
              };
            });
            const currentWorkflowId = computed(() => workflowsStore.workflowId);
            const isNewWorkflow = computed(() => {
              return !currentWorkflowId.value || currentWorkflowId.value === "__EMPTY__" || currentWorkflowId.value === "new";
            });
            const workflowName = computed(() => workflowsStore.workflowName);
            const currentWorkflowTagIds = computed(() => workflowsStore.workflowTags);
            watch(workflowSettings, newSettings => {
              updateSettings(newSettings);
            });
            onMounted(() => {
              defaultValues.value.saveFailedExecutions = settingsStore.saveDataErrorExecution;
              defaultValues.value.saveSuccessfulExecutions = settingsStore.saveDataSuccessExecution;
              defaultValues.value.saveManualExecutions = settingsStore.saveManualExecutions;
              updateSettings(workflowSettings.value);
            });
            function updateSettings(wfSettings) {
              workflowSaveSettings.value.saveFailedExecutions = wfSettings.saveDataErrorExecution === void 0 ? defaultValues.value.saveFailedExecutions === "all" : wfSettings.saveDataErrorExecution === "all";
              workflowSaveSettings.value.saveSuccessfulExecutions = wfSettings.saveDataSuccessExecution === void 0 ? defaultValues.value.saveSuccessfulExecutions === "all" : wfSettings.saveDataSuccessExecution === "all";
              workflowSaveSettings.value.saveTestExecutions = wfSettings.saveManualExecutions === void 0 ? defaultValues.value.saveManualExecutions : wfSettings.saveManualExecutions;
            }
            function onAccordionClick(event) {
              if (event.target instanceof HTMLAnchorElement) {
                event.preventDefault();
                uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
              }
            }
            function onItemTooltipClick(item, event) {
              if (item === "productionExecutions" && event.target instanceof HTMLAnchorElement) {
                event.preventDefault();
                uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
              }
            }
            function openWorkflowSettings() {
              uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
            }
            async function onSaveWorkflowClick() {
              let currentId = void 0;
              if (currentWorkflowId.value !== "__EMPTY__") currentId = currentWorkflowId.value;else if (router.currentRoute.value.params.name && router.currentRoute.value.params.name !== "new") {
                const routeName = router.currentRoute.value.params.name;
                currentId = Array.isArray(routeName) ? routeName[0] : routeName;
              }
              if (!currentId) return;
              if (await workflowSaving.saveCurrentWorkflow({
                id: currentId,
                name: workflowName.value,
                tags: currentWorkflowTagIds.value
              })) await npsSurveyStore.fetchPromptsData();
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nInfoAccordion_default), {
                class: normalizeClass([_ctx.$style.accordion, "mt-2xl"]),
                title: unref(i18n).baseText("executionsLandingPage.emptyState.accordion.title"),
                items: accordionItems.value,
                "initially-expanded": shouldExpandAccordion.value,
                "header-icon": accordionIcon.value,
                "onClick:body": onAccordionClick,
                onTooltipClick: onItemTooltipClick
              }, {
                customContent: withCtx(() => [createBaseVNode("footer", _hoisted_1, [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer")) + " ", 1), createVNode(unref(N8nTooltip_default), {
                  disabled: !isNewWorkflow.value
                }, {
                  content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nLink_default), {
                    onClick: withModifiers(onSaveWorkflowClick, ["prevent"])
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipLink")), 1)]),
                    _: 1
                  }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipText")), 1)])]),
                  default: withCtx(() => [createVNode(unref(N8nLink_default), {
                    class: normalizeClass({
                      [_ctx.$style.disabled]: isNewWorkflow.value
                    }),
                    size: "small",
                    onClick: withModifiers(openWorkflowSettings, ["prevent"])
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.settingsLink")), 1)]),
                    _: 1
                  }, 8, ["class"])]),
                  _: 1
                }, 8, ["disabled"])])]),
                _: 1
              }, 8, ["class", "title", "items", "initially-expanded", "header-icon"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsInfoAccordion.vue?vue&type=style&index=0&lang.module.scss
        accordion = "_accordion_1yhpp_123";
        disabled = "_disabled_1yhpp_151";
        WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default = {
          accordion,
          disabled
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsInfoAccordion.vue
        cssModules = {
          "$style": WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", WorkflowExecutionsInfoAccordion_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();