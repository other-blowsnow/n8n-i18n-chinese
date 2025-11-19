;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./executions.store-legacy-BxTud2_e.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./usage.store-legacy-DM-Ej7_u.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, createTextVNode, resolveComponent, createBaseVNode, I18nT, useI18n, useAsyncState, N8nActionBox_default, N8nCallout_default, N8nText_default, N8nButton_default, N8nBadge_default, N8nLink_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useSourceControlStore, useUIStore, useEvaluationStore, COMMUNITY_PLUS_ENROLLMENT_MODAL, useWorkflowsStore, useNodeTypesStore, useTelemetry, useToast, EVALUATIONS_DOCS_URL, VIEWS, PLACEHOLDER_EMPTY_WORKFLOW_ID, useCanvasOperations, usePageRedirectionHelper, useUsageStore, __vite_style__, EvaluationsPaywall_vue_vue_type_script_setup_true_lang_default, EvaluationsPaywall_default, StepIndicator_vue_vue_type_script_setup_true_lang_default, stepIndicator, active, completed, inactive, StepIndicator_vue_vue_type_style_index_0_lang_module_default, cssModules$3, StepIndicator_default, StepHeader_vue_vue_type_script_setup_true_lang_default, stepHeader, StepHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$2, StepHeader_default, SetupWizard_vue_vue_type_script_setup_true_lang_default, container, steps, step, stepContent, slideDown, bulletPoints, actionButton, actionButtonInline, quotaNote, SetupWizard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, SetupWizard_default, EvaluationsRootView_vue_vue_type_script_setup_true_lang_default, evaluationsView, setupContent, description, config, setupDescription, EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default, cssModules, EvaluationsRootView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_srcLegacy007Js) {
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useEvaluationStore = _useTelemetryLegacy00FJs.at;
        COMMUNITY_PLUS_ENROLLMENT_MODAL = _useTelemetryLegacy00FJs.ko;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EVALUATIONS_DOCS_URL = _constantsLegacy00NJs._;
        VIEWS = _constantsLegacy00NJs.mo;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_executionsStoreLegacy01dJs) {}, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {
        useCanvasOperations = _useCanvasOperationsLegacy01pJs.t;
      }, function (_foldersStoreLegacy01tJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_usageStoreLegacy029Js) {
        useUsageStore = _usageStoreLegacy029Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._stepIndicator_1vioh_123 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid var(--color--text--tint-1);\n  color: var(--color--text--tint-1);\n  font-weight: var(--font-weight--bold);\n  font-size: var(--font-size--2xs);\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n._stepIndicator_1vioh_123._active_1vioh_137 {\n  border-color: var(--color--primary);\n  color: var(--color--text--shade-1);\n}\n._stepIndicator_1vioh_123._completed_1vioh_141 {\n  background-color: var(--color--success);\n  border-color: var(--color--success);\n  color: var(--p--color--white);\n}\n._stepIndicator_1vioh_123._inactive_1vioh_146 {\n  color: var(--color--text--tint-1);\n  border-color: var(--color--text);\n  opacity: 0.7;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._stepHeader_cqtb0_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n  cursor: pointer;\n  position: relative;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_7v9ik_123 {\n  background-color: var(--color--background--light-2);\n}\n._steps_7v9ik_127 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n}\n._step_7v9ik_127 {\n  overflow: hidden;\n}\n._stepContent_7v9ik_137 {\n  padding: 0 0 0 calc(var(--spacing--xs) + 28px);\n  animation: _slideDown_7v9ik_1 0.2s ease;\n}\n._bulletPoints_7v9ik_142 {\n  padding-left: var(--spacing--sm);\n}\n._bulletPoints_7v9ik_142 li {\n  margin-bottom: var(--spacing--3xs);\n}\n._actionButton_7v9ik_149 {\n  margin-top: var(--spacing--sm);\n  display: flex;\n  gap: var(--spacing--sm);\n}\n._actionButton_7v9ik_149 button {\n  font-weight: var(--font-weight--bold);\n}\n._actionButtonInline_7v9ik_158 {\n  margin: 0;\n}\n._quotaNote_7v9ik_162 {\n  margin-top: var(--spacing--2xs);\n}\n@keyframes _slideDown_7v9ik_1 {\nfrom {\n    opacity: 0;\n    transform: translateY(-10px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._evaluationsView_3y4a8_123 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n._setupContent_3y4a8_130 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--lg);\n  max-width: 1024px;\n  margin-top: var(--spacing--2xl);\n  padding: 0;\n}\n._description_3y4a8_139 {\n  max-width: 600px;\n  margin-bottom: 20px;\n}\n._config_3y4a8_144 {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacing--lg);\n}\n._setupDescription_3y4a8_150 {\n  margin-top: var(--spacing--2xs);\n}\n._setupDescription_3y4a8_150 ul li {\n  margin-top: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/evaluation.ee/components/Paywall/EvaluationsPaywall.vue?vue&type=script&setup=true&lang.ts
        EvaluationsPaywall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EvaluationsPaywall",
          setup(__props) {
            const i18n = useI18n();
            const uiStore = useUIStore();
            const goToUpgrade = async () => {
              uiStore.openModalWithData({
                name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
                data: {
                  customHeading: void 0
                }
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nActionBox_default), {
                "data-test-id": "evaluations-unlicensed",
                heading: unref(i18n).baseText("evaluations.paywall.title"),
                description: unref(i18n).baseText("evaluations.paywall.description"),
                "button-text": unref(i18n).baseText("evaluations.paywall.cta"),
                onClick: goToUpgrade
              }, null, 8, ["heading", "description", "button-text"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/Paywall/EvaluationsPaywall.vue
        EvaluationsPaywall_default = EvaluationsPaywall_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/StepIndicator.vue?vue&type=script&setup=true&lang.ts
        StepIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "StepIndicator",
          props: {
            stepNumber: {},
            isCompleted: {
              type: Boolean
            },
            isActive: {
              type: Boolean
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.stepIndicator, _ctx.isCompleted && _ctx.$style.completed, _ctx.isActive && _ctx.$style.active, !_ctx.isActive && !_ctx.isCompleted && _ctx.$style.inactive])
              }, [_ctx.isCompleted ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                icon: "check",
                size: "xsmall"
              })) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createTextVNode(toDisplayString(_ctx.stepNumber), 1)], 64))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/StepIndicator.vue?vue&type=style&index=0&lang.module.scss
        stepIndicator = "_stepIndicator_1vioh_123";
        active = "_active_1vioh_137";
        completed = "_completed_1vioh_141";
        inactive = "_inactive_1vioh_146";
        StepIndicator_vue_vue_type_style_index_0_lang_module_default = {
          stepIndicator,
          active,
          completed,
          inactive
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/StepIndicator.vue
        cssModules$3 = {
          "$style": StepIndicator_vue_vue_type_style_index_0_lang_module_default
        };
        StepIndicator_default = /* @__PURE__ */__plugin_vue_export_helper_default(StepIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/StepHeader.vue?vue&type=script&setup=true&lang.ts
        StepHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "StepHeader",
          props: {
            stepNumber: {},
            title: {},
            isCompleted: {
              type: Boolean
            },
            isActive: {
              type: Boolean
            },
            isOptional: {
              type: Boolean
            }
          },
          emits: ["click"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const locale = useI18n();
            const handleClick = event => {
              if (!event.target.closest("button") && !event.target.closest("a") && !event.target.closest("input") && !event.target.closest("select")) emit("click");
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.stepHeader),
                onClick: handleClick
              }, [createVNode(StepIndicator_default, {
                "step-number": _ctx.stepNumber,
                "is-completed": _ctx.isCompleted,
                "is-active": _ctx.isActive
              }, null, 8, ["step-number", "is-completed", "is-active"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.titleSlot)
              }, [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(N8nText_default), {
                size: "medium",
                color: _ctx.isActive || _ctx.isCompleted ? "text-dark" : "text-light",
                tag: "span",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.title), 1)]),
                _: 1
              }, 8, ["color"])])], 2), _ctx.isOptional ? (openBlock(), createBlock(unref(N8nBadge_default), {
                key: 0,
                style: {
                  "background-color": "var(--color--background)",
                  "border": "none"
                }
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.stepHeader.optional")), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/StepHeader.vue?vue&type=style&index=0&lang.module.scss
        stepHeader = "_stepHeader_cqtb0_123";
        StepHeader_vue_vue_type_style_index_0_lang_module_default = {
          stepHeader
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/StepHeader.vue
        cssModules$2 = {
          "$style": StepHeader_vue_vue_type_style_index_0_lang_module_default
        };
        StepHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(StepHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/ai/evaluation.ee/components/SetupWizard/SetupWizard.vue?vue&type=script&setup=true&lang.ts
        SetupWizard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SetupWizard",
          emits: ["runTest"],
          setup(__props) {
            const router = useRouter();
            const locale = useI18n();
            const workflowsStore = useWorkflowsStore();
            const evaluationStore = useEvaluationStore();
            const usageStore = useUsageStore();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const hasRuns = computed(() => {
              return evaluationStore.testRunsByWorkflowId[workflowsStore.workflow.id]?.length > 0;
            });
            const evaluationsAvailable = computed(() => {
              return usageStore.workflowsWithEvaluationsLimit === -1 || usageStore.workflowsWithEvaluationsCount < usageStore.workflowsWithEvaluationsLimit;
            });
            const evaluationsQuotaExceeded = computed(() => {
              return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
            });
            const activeStepIndex = ref(0);
            const initializeActiveStep = () => {
              if (evaluationsQuotaExceeded.value) {
                activeStepIndex.value = 2;
                return;
              }
              if (evaluationStore.evaluationTriggerExists && evaluationStore.evaluationSetMetricsNodeExist) activeStepIndex.value = 3;else if (evaluationStore.evaluationTriggerExists && evaluationStore.evaluationSetOutputsNodeExist) activeStepIndex.value = 2;else if (evaluationStore.evaluationTriggerExists) activeStepIndex.value = 1;else activeStepIndex.value = 0;
            };
            initializeActiveStep();
            const toggleStep = index => {
              activeStepIndex.value = index;
            };
            function navigateToWorkflow(action) {
              const routeWorkflowId = workflowsStore.workflow.id === "__EMPTY__" ? "new" : workflowsStore.workflow.id;
              router.push({
                name: VIEWS.WORKFLOW,
                params: {
                  name: routeWorkflowId
                },
                query: action ? {
                  action
                } : void 0
              });
            }
            function onSeePlans() {
              pageRedirectionHelper.goToUpgrade("evaluations", "upgrade-evaluations");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container),
                "data-test-id": "evaluation-setup-wizard"
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.steps)
              }, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.step, _ctx.$style.completed])
              }, [createVNode(StepHeader_default, {
                "step-number": 1,
                title: unref(locale).baseText("evaluations.setupWizard.step1.title"),
                "is-completed": unref(evaluationStore).evaluationTriggerExists,
                "is-active": activeStepIndex.value === 0,
                onClick: _cache[0] || (_cache[0] = $event => toggleStep(0))
              }, null, 8, ["title", "is-completed", "is-active"]), activeStepIndex.value === 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.stepContent)
              }, [createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.bulletPoints)
              }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item1")), 1)]),
                _: 1
              })]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item2")), 1)]),
                _: 1
              })])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actionButton)
              }, [createVNode(unref(N8nButton_default), {
                size: "small",
                type: "secondary",
                onClick: _cache[1] || (_cache[1] = $event => navigateToWorkflow("addEvaluationTrigger"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.button")), 1)]),
                _: 1
              })], 2)], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.step, activeStepIndex.value === 1 ? _ctx.$style.active : ""])
              }, [createVNode(StepHeader_default, {
                "step-number": 2,
                title: unref(locale).baseText("evaluations.setupWizard.step2.title"),
                "is-completed": unref(evaluationStore).evaluationSetOutputsNodeExist,
                "is-active": activeStepIndex.value === 1,
                onClick: _cache[2] || (_cache[2] = $event => toggleStep(1))
              }, null, 8, ["title", "is-completed", "is-active"]), activeStepIndex.value === 1 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.stepContent)
              }, [createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.bulletPoints)
              }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.item1")), 1)]),
                _: 1
              })])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actionButton)
              }, [createVNode(unref(N8nButton_default), {
                size: "small",
                type: "secondary",
                onClick: _cache[3] || (_cache[3] = $event => navigateToWorkflow("addEvaluationNode"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.button")), 1)]),
                _: 1
              })], 2)], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.step)
              }, [createVNode(StepHeader_default, {
                "step-number": 3,
                title: unref(locale).baseText("evaluations.setupWizard.step3.title"),
                "is-completed": unref(evaluationStore).evaluationSetMetricsNodeExist,
                "is-active": activeStepIndex.value === 2,
                "is-optional": true,
                onClick: _cache[4] || (_cache[4] = $event => toggleStep(2))
              }, null, 8, ["title", "is-completed", "is-active"]), activeStepIndex.value === 2 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.stepContent)
              }, [!evaluationsQuotaExceeded.value ? (openBlock(), createElementBlock("ul", {
                key: 0,
                class: normalizeClass(_ctx.$style.bulletPoints)
              }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item1")), 1)]),
                _: 1
              })]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item2")), 1)]),
                _: 1
              })])], 2)) : (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 1,
                theme: "warning",
                iconless: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.limitReached")), 1)]),
                _: 1
              })), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actionButton)
              }, [!evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                size: "small",
                type: "secondary",
                onClick: _cache[5] || (_cache[5] = $event => navigateToWorkflow("addEvaluationNode"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.button")), 1)]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                size: "small",
                onClick: onSeePlans
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.seePlans")), 1)]),
                _: 1
              })), createVNode(unref(N8nButton_default), {
                size: "small",
                text: "",
                style: {
                  "color": "var(--color--text--tint-1)"
                },
                onClick: _cache[6] || (_cache[6] = $event => toggleStep(3))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.skip")), 1)]),
                _: 1
              })], 2), unref(usageStore).workflowsWithEvaluationsLimit !== -1 && evaluationsAvailable.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.quotaNote)
              }, [createVNode(unref(N8nText_default), {
                size: "xsmall",
                color: "text-base"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "evaluations.setupWizard.step3.notice",
                  scope: "global"
                }, {
                  link: withCtx(() => [createBaseVNode("a", {
                    style: {
                      "text-decoration": "underline",
                      "color": "inherit"
                    },
                    onClick: onSeePlans
                  }, toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.notice.link")), 1)]),
                  _: 1
                })]),
                _: 1
              })], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.step)
              }, [createVNode(StepHeader_default, {
                "step-number": 4,
                title: unref(locale).baseText("evaluations.setupWizard.step4.title"),
                "is-completed": false,
                "is-active": activeStepIndex.value === 3,
                onClick: _cache[9] || (_cache[9] = $event => toggleStep(3))
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.actionButton, _ctx.$style.actionButtonInline])
                }, [unref(evaluationStore).evaluationSetMetricsNodeExist && !evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  size: "medium",
                  type: "secondary",
                  disabled: !unref(evaluationStore).evaluationTriggerExists || !unref(evaluationStore).evaluationSetOutputsNodeExist && !unref(evaluationStore).evaluationSetMetricsNodeExist,
                  onClick: _cache[7] || (_cache[7] = $event => _ctx.$emit("runTest"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.button")), 1)]),
                  _: 1
                }, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 1,
                  size: "medium",
                  type: "secondary",
                  disabled: !unref(evaluationStore).evaluationTriggerExists || !unref(evaluationStore).evaluationSetOutputsNodeExist && !unref(evaluationStore).evaluationSetMetricsNodeExist,
                  onClick: _cache[8] || (_cache[8] = $event => navigateToWorkflow("executeEvaluation"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.altButton")), 1)]),
                  _: 1
                }, 8, ["disabled"]))], 2)]),
                _: 1
              }, 8, ["title", "is-active"])], 2)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/SetupWizard/SetupWizard.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_7v9ik_123";
        steps = "_steps_7v9ik_127";
        step = "_step_7v9ik_127";
        stepContent = "_stepContent_7v9ik_137";
        slideDown = "_slideDown_7v9ik_1";
        bulletPoints = "_bulletPoints_7v9ik_142";
        actionButton = "_actionButton_7v9ik_149";
        actionButtonInline = "_actionButtonInline_7v9ik_158";
        quotaNote = "_quotaNote_7v9ik_162";
        SetupWizard_vue_vue_type_style_index_0_lang_module_default = {
          container,
          steps,
          step,
          stepContent,
          slideDown,
          bulletPoints,
          actionButton,
          actionButtonInline,
          quotaNote
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/SetupWizard/SetupWizard.vue
        cssModules$1 = {
          "$style": SetupWizard_vue_vue_type_style_index_0_lang_module_default
        };
        SetupWizard_default = /* @__PURE__ */__plugin_vue_export_helper_default(SetupWizard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/evaluation.ee/views/EvaluationsRootView.vue?vue&type=script&setup=true&lang.ts
        EvaluationsRootView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EvaluationsRootView",
          props: {
            name: {}
          },
          setup(__props) {
            const props = __props;
            const workflowsStore = useWorkflowsStore();
            const usageStore = useUsageStore();
            const evaluationStore = useEvaluationStore();
            const nodeTypesStore = useNodeTypesStore();
            const telemetry = useTelemetry();
            const toast = useToast();
            const locale = useI18n();
            const sourceControlStore = useSourceControlStore();
            const {
              initializeWorkspace
            } = useCanvasOperations();
            const evaluationsLicensed = computed(() => {
              return usageStore.workflowsWithEvaluationsLimit !== 0;
            });
            const isProtectedEnvironment = computed(() => {
              return sourceControlStore.preferences.branchReadOnly;
            });
            const runs = computed(() => {
              return Object.values(evaluationStore.testRunsById ?? {}).filter(({
                workflowId
              }) => workflowId === props.name);
            });
            const hasRuns = computed(() => {
              return runs.value.length > 0;
            });
            const showWizard = computed(() => !hasRuns.value);
            async function runTest() {
              try {
                await evaluationStore.startTestRun(props.name);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
                return;
              }
              try {
                await evaluationStore.fetchTestRuns(props.name);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
              }
            }
            const evaluationsQuotaExceeded = computed(() => {
              return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
            });
            const {
              isReady
            } = useAsyncState(async () => {
              try {
                await usageStore.getLicenseInfo();
                await evaluationStore.fetchTestRuns(props.name);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
              }
              const workflowId = props.name;
              if (workflowsStore.workflow.id === workflowId) return;
              if (workflowId && workflowId !== "new") {
                if (workflowsStore.workflow.id === "__EMPTY__") try {
                  const data = await workflowsStore.fetchWorkflow(workflowId);
                  if (nodeTypesStore.allNodeTypes.length === 0) await nodeTypesStore.getNodeTypes();
                  initializeWorkspace(data);
                } catch (error) {
                  toast.showError(error, locale.baseText("nodeView.showError.openWorkflow.title"));
                }
              }
            }, void 0);
            watch(isReady, ready => {
              if (ready) if (showWizard.value) telemetry.track("User viewed tests tab", {
                workflow_id: props.name,
                test_type: "evaluation",
                view: "setup",
                trigger_set_up: evaluationStore.evaluationTriggerExists,
                output_set_up: evaluationStore.evaluationSetOutputsNodeExist,
                metrics_set_up: evaluationStore.evaluationSetMetricsNodeExist,
                quota_reached: evaluationsQuotaExceeded.value
              });else telemetry.track("User viewed tests tab", {
                workflow_id: props.name,
                test_type: "evaluation",
                view: "overview",
                run_count: runs.value.length
              });
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              const _component_RouterView = resolveComponent("RouterView");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.evaluationsView)
              }, [unref(isReady) && showWizard.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.setupContent)
              }, [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
                size: "large",
                color: "text-dark",
                tag: "h3",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.title")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                tag: "p",
                size: "small",
                color: "text-base",
                class: normalizeClass(_ctx.$style.description)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.description")) + " ", 1), createVNode(unref(N8nLink_default), {
                  size: "small",
                  href: unref(EVALUATIONS_DOCS_URL)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.moreInfo")), 1)]),
                  _: 1
                }, 8, ["href"])]),
                _: 1
              }, 8, ["class"])]), isProtectedEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 0,
                theme: "info",
                icon: "info"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.readOnlyNotice")), 1)]),
                _: 1
              })) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.config)
              }, [_cache[0] || (_cache[0] = createBaseVNode("iframe", {
                style: {
                  "min-width": "500px"
                },
                width: "500",
                height: "280",
                src: "https://www.youtube.com/embed/5LlF196PKaE",
                title: "n8n Evaluation quickstart",
                frameborder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                referrerpolicy: "strict-origin-when-cross-origin",
                allowfullscreen: ""
              }, null, -1)), evaluationsLicensed.value ? (openBlock(), createBlock(SetupWizard_default, {
                key: 0,
                onRunTest: runTest
              })) : (openBlock(), createBlock(EvaluationsPaywall_default, {
                key: 1
              }))], 2))], 2)) : unref(isReady) ? (openBlock(), createBlock(_component_RouterView, {
                key: 1
              })) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/views/EvaluationsRootView.vue?vue&type=style&index=0&lang.module.scss
        evaluationsView = "_evaluationsView_3y4a8_123";
        setupContent = "_setupContent_3y4a8_130";
        description = "_description_3y4a8_139";
        config = "_config_3y4a8_144";
        setupDescription = "_setupDescription_3y4a8_150";
        EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default = {
          evaluationsView,
          setupContent,
          description,
          config,
          setupDescription
        }; //#endregion
        //#region src/features/ai/evaluation.ee/views/EvaluationsRootView.vue
        cssModules = {
          "$style": EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", EvaluationsRootView_default = /* @__PURE__ */__plugin_vue_export_helper_default(EvaluationsRootView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();