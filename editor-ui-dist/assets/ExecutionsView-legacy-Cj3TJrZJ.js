;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./date-picker-legacy-CNGqXigs.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./executions.store-legacy-DarjeF75.js", "./folders.store-legacy-B-8jqnKg.js", "./versions.store-legacy-GXtvQmrr.js", "./usePageRedirectionHelper-legacy-BYf33Ms4.js", "./ProjectIcon-legacy-ByRpi0-Z.js", "./dateFormatter-legacy-CLWNrLSo.js", "./useExecutionHelpers-legacy-B4Q498oD.js", "./TagsDropdown-legacy-DPljinU6.js", "./WorkflowTagsDropdown-legacy-Ba8gRVHO.js", "./insights.store-legacy-BA4cTmK7.js", "./insights.constants-legacy-BcO47XGR.js", "./insights.utils-legacy-BIH8A6hh.js", "./readyToRun.store-legacy-D3EKAUpp.js", "./ProjectHeader-legacy-BYuXwF61.js", "./smartDecimal-legacy-iG84Poh8.js", "./InsightsSummary-legacy-CDs-s8rk.js", "./AnimatedSpinner-legacy-CvzgRCW1.js", "./SelectedItemsInfo-legacy-Dh5RUu3L.js", "./AnnotationTagsDropdown.ee-legacy-FNRoXt4S.js", "./ExecutionsTime-legacy-SwpkMDTw.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, createBlock, onMounted, Fragment, watch, renderSlot, withCtx, useCssModule, openBlock, withModifiers, renderList, createTextVNode, useTemplateRef, resolveComponent, onBeforeMount, normalizeClass, createBaseVNode, useIntersectionObserver, I18nT, useI18n, N8nIconButton_default, ElCheckbox, ElDropdown, N8nText_default, ElDropdownItem, ElDropdownMenu, TableBase_default, N8nCheckbox_default, N8nIcon_default, N8nLink_default, ElSkeletonItem, N8nButton_default, N8nTooltip_default, __plugin_vue_export_helper_default, useRoute, useMessage, useSettingsStore, useDocumentTitle, executionRetryMessage, useWorkflowsStore, useTelemetry, useToast, VIEWS, MODAL_CONFIRM, getResourcePermissions, WAIT_INDEFINITELY, EnterpriseEditionFeature, storeToRefs, useExternalHooks, useExecutionsStore, usePageRedirectionHelper, convertToDisplayDate, useExecutionHelpers, useInsightsStore, useProjectPages, ProjectHeader_default, InsightsSummary_default, AnimatedSpinner_default, SelectedItemsInfo_default, ExecutionsFilter_default, ConcurrentExecutionsHeader_default, ExecutionsTime_default, __vite_style__, GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default, link, GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default, cssModules$2, GlobalExecutionsListItemQueuedTooltip_default, _hoisted_1$1, _hoisted_2$1, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1, GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default, dangerBg, workflowName, GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default, cssModules$1, GlobalExecutionsListItem_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default, execListWrapper, execList, execListHeaderControls, execTable, GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default, cssModules, GlobalExecutionsList_default, ExecutionsView_vue_vue_type_script_setup_true_lang_default, ExecutionsView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useIntersectionObserver = _MapCacheLegacy005Js.A;
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Et;
        ElCheckbox = _srcLegacy007Js.Ht;
        ElDropdown = _srcLegacy007Js.It;
        N8nText_default = _srcLegacy007Js.Kn;
        ElDropdownItem = _srcLegacy007Js.Lt;
        ElDropdownMenu = _srcLegacy007Js.Rt;
        TableBase_default = _srcLegacy007Js.W;
        N8nCheckbox_default = _srcLegacy007Js.Y;
        N8nIcon_default = _srcLegacy007Js.Yn;
        N8nLink_default = _srcLegacy007Js.ht;
        ElSkeletonItem = _srcLegacy007Js.jt;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_datePickerLegacy00pJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        executionRetryMessage = _useTelemetryLegacy00HJs.X;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
        MODAL_CONFIRM = _constantsLegacy00RJs.Qo;
        getResourcePermissions = _constantsLegacy00RJs.To;
        WAIT_INDEFINITELY = _constantsLegacy00RJs.mo;
        EnterpriseEditionFeature = _constantsLegacy00RJs.sc;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {
        storeToRefs = _baseOrderByLegacy00XJs.A;
      }, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {
        useExternalHooks = _useExternalHooksLegacy011Js.t;
      }, function (_useStylesLegacy013Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_executionsStoreLegacy01lJs) {
        useExecutionsStore = _executionsStoreLegacy01lJs.t;
      }, function (_foldersStoreLegacy01BJs) {}, function (_versionsStoreLegacy01JJs) {}, function (_usePageRedirectionHelperLegacy01LJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01LJs.t;
      }, function (_ProjectIconLegacy02dJs) {}, function (_dateFormatterLegacy02JJs) {
        convertToDisplayDate = _dateFormatterLegacy02JJs.t;
      }, function (_useExecutionHelpersLegacy02LJs) {
        useExecutionHelpers = _useExecutionHelpersLegacy02LJs.t;
      }, function (_TagsDropdownLegacy031Js) {}, function (_WorkflowTagsDropdownLegacy033Js) {}, function (_insightsStoreLegacy03bJs) {
        useInsightsStore = _insightsStoreLegacy03bJs.t;
      }, function (_insightsConstantsLegacy03dJs) {}, function (_insightsUtilsLegacy03fJs) {}, function (_readyToRunStoreLegacy04dJs) {
        useProjectPages = _readyToRunStoreLegacy04dJs.n;
      }, function (_ProjectHeaderLegacy04RJs) {
        ProjectHeader_default = _ProjectHeaderLegacy04RJs.t;
      }, function (_smartDecimalLegacy04VJs) {}, function (_InsightsSummaryLegacy04XJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04XJs.t;
      }, function (_AnimatedSpinnerLegacy05zJs) {
        AnimatedSpinner_default = _AnimatedSpinnerLegacy05zJs.t;
      }, function (_SelectedItemsInfoLegacy065Js) {
        SelectedItemsInfo_default = _SelectedItemsInfoLegacy065Js.t;
      }, function (_AnnotationTagsDropdownEeLegacy06jJs) {}, function (_ExecutionsTimeLegacy06pJs) {
        ExecutionsFilter_default = _ExecutionsTimeLegacy06pJs.n;
        ConcurrentExecutionsHeader_default = _ExecutionsTimeLegacy06pJs.r;
        ExecutionsTime_default = _ExecutionsTimeLegacy06pJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._link_g8cyq_123 {\n  display: inline-block;\n  margin-top: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\ntr._dangerBg_1j9ti_123 {\n  background-color: rgba(215, 56, 58, 0.1);\n}\n._workflowName_1j9ti_127 {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  max-width: 100%;\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--lg);\n  max-width: 450px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._execListWrapper_figer_123 {\n  padding: var(--spacing--lg) var(--spacing--2xl);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  max-width: var(--content-container--width);\n}\n._execList_figer_123 {\n  flex-shrink: 1; /* Allows shrinking when needed */\n  max-height: 100%; /* Prevents overflowing the parent */\n  overflow: auto; /* Scroll only when needed */\n}\n._execListHeaderControls_figer_138 {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: var(--spacing--sm);\n}\n._execTable_figer_145 {\n  height: 100%;\n  flex: 0 1 auto;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n[data-v-99838607] .el-checkbox {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/executions/components/global/GlobalExecutionsListItemQueuedTooltip.vue?vue&type=script&setup=true&lang.ts
        GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "GlobalExecutionsListItemQueuedTooltip",
          props: {
            status: {},
            concurrencyCap: {},
            isCloudDeployment: {
              type: Boolean
            }
          },
          emits: ["goToUpgrade"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                placement: "top"
              }, {
                content: withCtx(() => [props.status === "waiting" ? (openBlock(), createBlock(unref(I18nT), {
                  key: 0,
                  keypath: "executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely",
                  scope: "global"
                })) : createCommentVNode("", true), props.status === "new" ? (openBlock(), createBlock(unref(I18nT), {
                  key: 1,
                  keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity",
                  scope: "global"
                }, {
                  instance: withCtx(() => [props.isCloudDeployment ? (openBlock(), createBlock(unref(I18nT), {
                    key: 0,
                    keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud",
                    scope: "global"
                  }, {
                    concurrencyCap: withCtx(() => [createTextVNode(toDisplayString(props.concurrencyCap), 1)]),
                    link: withCtx(() => [createVNode(unref(N8nLink_default), {
                      bold: "",
                      size: "small",
                      class: normalizeClass(_ctx.$style.link),
                      onClick: _cache[0] || (_cache[0] = $event => emit("goToUpgrade"))
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgradeNow")), 1)]),
                      _: 1
                    }, 8, ["class"])]),
                    _: 1
                  })) : (openBlock(), createBlock(unref(I18nT), {
                    key: 1,
                    keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.self",
                    scope: "global"
                  }, {
                    concurrencyCap: withCtx(() => [createTextVNode(toDisplayString(props.concurrencyCap), 1)]),
                    link: withCtx(() => [createVNode(unref(N8nLink_default), {
                      class: normalizeClass(_ctx.$style.link),
                      href: unref(i18n).baseText("executions.concurrency.docsLink"),
                      target: "_blank"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.viewDocs")), 1)]),
                      _: 1
                    }, 8, ["class", "href"])]),
                    _: 1
                  }))]),
                  _: 1
                })) : createCommentVNode("", true)]),
                default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
                _: 3
              });
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsListItemQueuedTooltip.vue?vue&type=style&index=0&lang.module.scss
        link = "_link_g8cyq_123";
        GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default = {
          link
        }; //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsListItemQueuedTooltip.vue
        cssModules$2 = {
          "$style": GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default
        };
        GlobalExecutionsListItemQueuedTooltip_default = /* @__PURE__ */__plugin_vue_export_helper_default(GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsListItem.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          "data-test-id": "execution-status"
        };
        _hoisted_2$1 = {
          "data-test-id": "execution-time"
        };
        _hoisted_3$1 = {
          key: 0
        };
        _hoisted_4$1 = {
          key: 1
        };
        _hoisted_5$1 = {
          key: 2
        };
        GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "GlobalExecutionsListItem",
          props: {
            execution: {},
            selected: {
              type: Boolean,
              default: false
            },
            workflowName: {
              default: ""
            },
            workflowPermissions: {},
            concurrencyCap: {},
            isCloudDeployment: {
              type: Boolean
            }
          },
          emits: ["stop", "select", "retrySaved", "retryOriginal", "delete", "goToUpgrade"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const style = useCssModule();
            const locale = useI18n();
            const executionHelpers = useExecutionHelpers();
            const isStopping = ref(false);
            const isRunning = computed(() => props.execution.status === "running");
            const isWaitTillIndefinite = computed(() => {
              if (!props.execution.waitTill) return false;
              return new Date(props.execution.waitTill).getTime() === WAIT_INDEFINITELY.getTime();
            });
            const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
            const EXECUTION_STATUS = {
              CRASHED: "crashed",
              ERROR: "error",
              WAITING: "waiting",
              SUCCESS: "success",
              NEW: "new",
              RUNNING: "running",
              UNKNOWN: "unknown",
              CANCELED: "canceled"
            };
            const executionIconStatusDictionary = {
              [EXECUTION_STATUS.CRASHED]: {
                icon: "status-error",
                color: "danger"
              },
              [EXECUTION_STATUS.ERROR]: {
                icon: "status-error",
                color: "danger"
              },
              [EXECUTION_STATUS.WAITING]: {
                icon: "status-waiting",
                color: "secondary"
              },
              [EXECUTION_STATUS.SUCCESS]: {
                icon: "status-completed",
                color: "success"
              },
              [EXECUTION_STATUS.NEW]: {
                icon: "status-new",
                color: "foreground-xdark"
              },
              [EXECUTION_STATUS.RUNNING]: {
                icon: "spinner",
                color: "secondary"
              },
              [EXECUTION_STATUS.UNKNOWN]: {
                icon: "status-unknown",
                color: "foreground-xdark"
              },
              [EXECUTION_STATUS.CANCELED]: {
                icon: "status-canceled",
                color: "foreground-xdark"
              }
            };
            const errorStatuses = [EXECUTION_STATUS.ERROR, EXECUTION_STATUS.CRASHED];
            const classes = computed(() => {
              return {
                [style.dangerBg]: errorStatuses.includes(props.execution.status)
              };
            });
            const formattedStartedAtDate = computed(() => {
              return props.execution.startedAt ? formatDate(props.execution.startedAt) : locale.baseText("executionsList.startingSoon");
            });
            const formattedWaitTillDate = computed(() => {
              return props.execution.waitTill ? formatDate(props.execution.waitTill) : "";
            });
            const formattedStoppedAtDate = computed(() => {
              return props.execution.stoppedAt ? locale.displayTimer(new Date(props.execution.stoppedAt).getTime() - new Date(props.execution.startedAt ?? props.execution.createdAt).getTime(), true) : "";
            });
            function getStatusLabel(status) {
              if (status === EXECUTION_STATUS.CRASHED) return locale.baseText("executionsList.error");
              return locale.baseText(`executionsList.${status}`);
            }
            const statusRender = computed(() => {
              return {
                ...executionIconStatusDictionary[props.execution.status],
                label: getStatusLabel(props.execution.status)
              };
            });
            function formatDate(fullDate) {
              const {
                date,
                time
              } = convertToDisplayDate(fullDate);
              return locale.baseText("executionsList.started", {
                interpolate: {
                  time,
                  date
                }
              });
            }
            function onStopExecution() {
              isStopping.value = true;
              emit("stop", props.execution);
            }
            function onSelect() {
              emit("select", props.execution);
            }
            async function handleActionItemClick(commandData) {
              emit(commandData, props.execution);
            }
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("tr", {
                class: normalizeClass(classes.value)
              }, [createBaseVNode("td", null, [createVNode(unref(N8nCheckbox_default), {
                "model-value": _ctx.selected,
                "data-test-id": "select-execution-checkbox",
                disabled: !Boolean(_ctx.execution.id && _ctx.execution.stoppedAt),
                class: "mb-0",
                style: {
                  marginTop: "-3px"
                },
                "onUpdate:modelValue": onSelect
              }, null, 8, ["model-value", "disabled"])]), createBaseVNode("td", null, [createVNode(unref(N8nTooltip_default), {
                content: _ctx.execution.workflowName || _ctx.workflowName,
                placement: "top"
              }, {
                default: withCtx(() => [createVNode(_component_RouterLink, {
                  to: {
                    name: unref(VIEWS).EXECUTION_PREVIEW,
                    params: {
                      name: _ctx.execution.workflowId,
                      executionId: _ctx.execution.id
                    }
                  },
                  class: normalizeClass(_ctx.$style.workflowName),
                  target: "_blank"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.execution.workflowName || _ctx.workflowName), 1)]),
                  _: 1
                }, 8, ["to", "class"])]),
                _: 1
              }, 8, ["content"])]), createBaseVNode("td", _hoisted_1$1, [isWaitTillIndefinite.value || _ctx.execution.status === EXECUTION_STATUS.NEW ? (openBlock(), createBlock(GlobalExecutionsListItemQueuedTooltip_default, {
                key: 0,
                status: props.execution.status,
                "concurrency-cap": props.concurrencyCap,
                "is-cloud-deployment": props.isCloudDeployment,
                onGoToUpgrade: _cache[0] || (_cache[0] = $event => emit("goToUpgrade"))
              }, {
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
                  icon: statusRender.value.icon,
                  color: statusRender.value.color,
                  class: "mr-2xs"
                }, null, 8, ["icon", "color"]), createTextVNode(" " + toDisplayString(statusRender.value.label), 1)])]),
                _: 1
              }, 8, ["status", "concurrency-cap", "is-cloud-deployment"])) : (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                disabled: _ctx.execution.status !== EXECUTION_STATUS.WAITING,
                content: unref(locale).baseText("executionsList.statusWaiting", {
                  interpolate: {
                    status: _ctx.execution.status,
                    time: formattedWaitTillDate.value
                  }
                })
              }, {
                default: withCtx(() => [createBaseVNode("div", null, [_ctx.execution.status === EXECUTION_STATUS.RUNNING ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  color: "secondary",
                  class: "mr-2xs"
                }, {
                  default: withCtx(() => [createVNode(AnimatedSpinner_default)]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 1,
                  size: "medium",
                  icon: statusRender.value.icon,
                  color: statusRender.value.color,
                  class: "mr-2xs"
                }, null, 8, ["icon", "color"])), createTextVNode(" " + toDisplayString(statusRender.value.label), 1)])]),
                _: 1
              }, 8, ["disabled", "content"]))]), createBaseVNode("td", null, toDisplayString(formattedStartedAtDate.value), 1), createBaseVNode("td", _hoisted_2$1, [formattedStoppedAtDate.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createTextVNode(toDisplayString(formattedStoppedAtDate.value), 1)], 64)) : (openBlock(), createBlock(ExecutionsTime_default, {
                key: 1,
                "start-time": _ctx.execution.startedAt ?? _ctx.execution.createdAt
              }, null, 8, ["start-time"]))]), createBaseVNode("td", null, [_ctx.execution.id ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(_ctx.execution.id), 1)) : createCommentVNode("", true), _ctx.execution.retryOf ? (openBlock(), createElementBlock("span", _hoisted_4$1, [_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.retryOf")) + " " + toDisplayString(_ctx.execution.retryOf) + ") ", 1)])) : _ctx.execution.retrySuccessId ? (openBlock(), createElementBlock("span", _hoisted_5$1, [_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.successRetry")) + " " + toDisplayString(_ctx.execution.retrySuccessId) + ") ", 1)])) : createCommentVNode("", true)]), createBaseVNode("td", null, [_ctx.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                content: "Manual Execution",
                placement: "top"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "flask-conical"
                })]),
                _: 1
              })) : _ctx.execution.mode === "chat" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                content: "Chat Execution",
                placement: "top"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "messages-square"
                })]),
                _: 1
              })) : createCommentVNode("", true)]), createBaseVNode("td", null, [!_ctx.execution.stoppedAt || _ctx.execution.waitTill ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                "data-test-id": "stop-execution-button",
                type: "secondary",
                loading: isStopping.value,
                disabled: isStopping.value,
                onClick: withModifiers(onStopExecution, ["stop"])
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stop")), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])) : createCommentVNode("", true)]), createBaseVNode("td", null, [!isRunning.value ? (openBlock(), createBlock(unref(ElDropdown), {
                key: 0,
                trigger: "click",
                onCommand: handleActionItemClick
              }, {
                dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), {
                  class: normalizeClass({
                    [_ctx.$style.actions]: true,
                    [_ctx.$style.deleteOnly]: !isRetriable.value
                  })
                }, {
                  default: withCtx(() => [isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
                    key: 0,
                    "data-test-id": "execution-retry-saved-dropdown-item",
                    class: normalizeClass(_ctx.$style.retryAction),
                    command: "retrySaved",
                    disabled: !_ctx.workflowPermissions.execute
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
                    _: 1
                  }, 8, ["class", "disabled"])) : createCommentVNode("", true), isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
                    key: 1,
                    "data-test-id": "execution-retry-original-dropdown-item",
                    class: normalizeClass(_ctx.$style.retryAction),
                    command: "retryOriginal",
                    disabled: !_ctx.workflowPermissions.execute
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
                    _: 1
                  }, 8, ["class", "disabled"])) : createCommentVNode("", true), createVNode(unref(ElDropdownItem), {
                    "data-test-id": "execution-delete-dropdown-item",
                    class: normalizeClass(_ctx.$style.deleteAction),
                    command: "delete",
                    disabled: !_ctx.workflowPermissions.update
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.delete")), 1)]),
                    _: 1
                  }, 8, ["class", "disabled"])]),
                  _: 1
                }, 8, ["class"])]),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  text: "",
                  type: "tertiary",
                  icon: "ellipsis-vertical"
                })]),
                _: 1
              })) : createCommentVNode("", true)])], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsListItem.vue?vue&type=style&index=0&lang.module.scss
        dangerBg = "_dangerBg_1j9ti_123";
        workflowName = "_workflowName_1j9ti_127";
        GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default = {
          dangerBg,
          workflowName
        }; //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsListItem.vue
        cssModules$1 = {
          "$style": GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default
        };
        GlobalExecutionsListItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsList.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          style: {
            "margin-left": "auto"
          }
        };
        _hoisted_2 = {
          key: 0
        };
        _hoisted_3 = {
          style: {
            "width": "50px"
          }
        };
        _hoisted_4 = {
          colspan: "8"
        };
        _hoisted_5 = {
          style: {
            "width": "50px"
          }
        };
        _hoisted_6 = {
          colspan: "9",
          style: {
            "text-align": "center"
          }
        };
        _hoisted_7 = {
          key: 0,
          "data-test-id": "execution-list-empty"
        };
        GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "GlobalExecutionsList",
          props: {
            executions: {},
            filters: {},
            total: {
              default: 0
            },
            concurrentTotal: {
              default: 0
            },
            estimated: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:filters", "execution:stop"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const workflowsStore = useWorkflowsStore();
            const executionsStore = useExecutionsStore();
            const settingsStore = useSettingsStore();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const allVisibleSelected = ref(false);
            const allExistingSelected = ref(false);
            const selectedItems = ref({});
            const message = useMessage();
            const toast = useToast();
            const selectedCount = computed(() => {
              if (allExistingSelected.value) return props.total;
              return Object.keys(selectedItems.value).length;
            });
            const workflows = computed(() => {
              return [{
                id: "all",
                name: i18n.baseText("executionsList.allWorkflows")
              }, ...workflowsStore.allWorkflows];
            });
            const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
            const showConcurrencyHeader = computed(() => settingsStore.isConcurrencyEnabled && !settingsStore.isQueueModeEnabled);
            watch(() => props.executions, () => {
              if (props.executions.length === 0) handleClearSelection();
              adjustSelectionAfterMoreItemsLoaded();
            });
            function handleCheckAllExistingChange() {
              allExistingSelected.value = !allExistingSelected.value;
              allVisibleSelected.value = !allExistingSelected.value;
              handleCheckAllVisibleChange();
            }
            function handleCheckAllVisibleChange() {
              allVisibleSelected.value = !allVisibleSelected.value;
              if (!allVisibleSelected.value) {
                allExistingSelected.value = false;
                selectedItems.value = {};
              } else selectAllVisibleExecutions();
            }
            function toggleSelectExecution(execution) {
              const executionId = execution.id;
              if (selectedItems.value[executionId]) {
                const {
                  [executionId]: removedSelectedItem,
                  ...rest
                } = selectedItems.value;
                selectedItems.value = rest;
              } else selectedItems.value = {
                ...selectedItems.value,
                [executionId]: true
              };
              allVisibleSelected.value = Object.keys(selectedItems.value).length === props.executions.length;
              allExistingSelected.value = Object.keys(selectedItems.value).length === props.total;
            }
            async function handleDeleteSelected() {
              const confirmationText = [isAnnotationEnabled.value && i18n.baseText("executionsList.confirmMessage.annotationsNote"), i18n.baseText("executionsList.confirmMessage.message", {
                interpolate: {
                  count: selectedCount.value.toString()
                }
              })].filter(Boolean).join(" ");
              if ((await message.confirm(confirmationText, i18n.baseText("executionsList.confirmMessage.headline"), {
                type: "warning",
                confirmButtonText: i18n.baseText("executionsList.confirmMessage.confirmButtonText"),
                cancelButtonText: i18n.baseText("executionsList.confirmMessage.cancelButtonText")
              })) !== "confirm") return;
              try {
                await executionsStore.deleteExecutions({
                  filters: executionsStore.executionsFilters,
                  ...(allExistingSelected.value ? {
                    deleteBefore: /* @__PURE__ */new Date()
                  } : {
                    ids: Object.keys(selectedItems.value)
                  })
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
                return;
              }
              toast.showMessage({
                title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
                type: "success"
              });
              handleClearSelection();
            }
            function handleClearSelection() {
              allVisibleSelected.value = false;
              allExistingSelected.value = false;
              selectedItems.value = {};
            }
            async function onFilterChanged(filters) {
              emit("update:filters", filters);
              handleClearSelection();
            }
            function getExecutionWorkflowName(execution) {
              return getWorkflowName(execution.workflowId ?? "") ?? i18n.baseText("executionsList.unsavedWorkflow");
            }
            function getExecutionWorkflowPermissions(execution) {
              return getResourcePermissions(execution.scopes).workflow;
            }
            function getWorkflowName(workflowId) {
              return workflows.value.find(data => data.id === workflowId)?.name;
            }
            useIntersectionObserver(useTemplateRef("loadMoreButton"), ([entry]) => {
              if (!entry?.isIntersecting) return;
              loadMore();
            });
            async function loadMore() {
              if (executionsStore.filters.status === "running") return;
              const lastItem = props.executions.at(-1);
              try {
                await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastItem?.id);
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.loadMore.title"));
              }
            }
            function selectAllVisibleExecutions() {
              props.executions.forEach(execution => {
                selectedItems.value[execution.id] = true;
              });
            }
            function adjustSelectionAfterMoreItemsLoaded() {
              if (allExistingSelected.value) {
                allVisibleSelected.value = true;
                selectAllVisibleExecutions();
              }
            }
            async function retrySavedExecution(execution) {
              await retryExecution(execution, true);
            }
            async function retryOriginalExecution(execution) {
              await retryExecution(execution, false);
            }
            async function retryExecution(execution, loadWorkflow) {
              try {
                const retryMessage = executionRetryMessage((await executionsStore.retryExecution(execution.id, loadWorkflow)).status);
                if (retryMessage) toast.showMessage(retryMessage);
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.retryExecution.title"));
              }
              telemetry.track("User clicked retry execution button", {
                workflow_id: workflowsStore.workflowId,
                execution_id: execution.id,
                retry_type: loadWorkflow ? "current" : "original"
              });
            }
            async function stopExecution(execution) {
              try {
                await executionsStore.stopCurrentExecution(execution.id);
                toast.showMessage({
                  title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
                  message: i18n.baseText("executionsList.showMessage.stopExecution.message", {
                    interpolate: {
                      activeExecutionId: execution.id
                    }
                  }),
                  type: "success"
                });
                emit("execution:stop");
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.stopExecution.title"));
              }
            }
            async function deleteExecution(execution) {
              if (!!execution.annotation && (execution.annotation.vote || execution.annotation.tags.length > 0)) {
                if ((await message.confirm(i18n.baseText("executionsList.confirmMessage.annotatedExecutionMessage"), i18n.baseText("executionDetails.confirmMessage.headline"), {
                  type: "warning",
                  confirmButtonText: i18n.baseText("executionDetails.confirmMessage.confirmButtonText"),
                  cancelButtonText: ""
                })) !== "confirm") return;
              }
              try {
                await executionsStore.deleteExecutions({
                  ids: [execution.id]
                });
                if (allVisibleSelected.value) {
                  const {
                    [execution.id]: _,
                    ...rest
                  } = selectedItems.value;
                  selectedItems.value = rest;
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
              }
            }
            async function onAutoRefreshToggle(value) {
              if (typeof value === "boolean" ? value : Boolean(value)) await executionsStore.startAutoRefreshInterval();else executionsStore.stopAutoRefreshInterval();
            }
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.execListWrapper)
              }, [renderSlot(_ctx.$slots, "default", {}, void 0, true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.execListHeaderControls)
              }, [createVNode(ExecutionsFilter_default, {
                workflows: workflows.value,
                class: "execFilter",
                onFilterChanged
              }, null, 8, ["workflows"]), createBaseVNode("div", _hoisted_1, [showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
                key: 0,
                "running-executions-count": _ctx.concurrentTotal,
                "concurrency-cap": unref(settingsStore).concurrency,
                "is-cloud-deployment": unref(settingsStore).isCloudDeployment,
                onGoToUpgrade: goToUpgrade
              }, null, 8, ["running-executions-count", "concurrency-cap", "is-cloud-deployment"])) : (openBlock(), createBlock(unref(ElCheckbox), {
                key: 1,
                modelValue: unref(executionsStore).autoRefresh,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => unref(executionsStore).autoRefresh = $event), _cache[1] || (_cache[1] = $event => onAutoRefreshToggle($event))],
                "data-test-id": "execution-auto-refresh-checkbox"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.autoRefresh")), 1)]),
                _: 1
              }, 8, ["modelValue"]))])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.execList)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.execTable)
              }, [createVNode(unref(TableBase_default), null, {
                default: withCtx(() => [createBaseVNode("thead", null, [allVisibleSelected.value && _ctx.total > 0 ? (openBlock(), createElementBlock("tr", _hoisted_2, [createBaseVNode("th", _hoisted_3, [createVNode(unref(N8nCheckbox_default), {
                  "model-value": allExistingSelected.value,
                  "data-test-id": "select-all-executions-checkbox",
                  class: "mb-0",
                  "onUpdate:modelValue": handleCheckAllExistingChange
                }, null, 8, ["model-value"])]), createBaseVNode("th", _hoisted_4, toDisplayString(unref(i18n).baseText("executionsList.selectAll", {
                  adjustToNumber: _ctx.total,
                  interpolate: {
                    count: `${_ctx.total}`
                  }
                })), 1)])) : createCommentVNode("", true), createBaseVNode("tr", null, [createBaseVNode("th", _hoisted_5, [createVNode(unref(N8nCheckbox_default), {
                  "model-value": allVisibleSelected.value,
                  disabled: _ctx.total < 1,
                  "data-test-id": "select-visible-executions-checkbox",
                  class: "mb-0",
                  "onUpdate:modelValue": handleCheckAllVisibleChange
                }, null, 8, ["model-value", "disabled"])]), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("generic.workflow")), 1), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.status")), 1), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.startedAt")), 1), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.runTime")), 1), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.id")), 1), _cache[3] || (_cache[3] = createBaseVNode("th", null, null, -1)), _cache[4] || (_cache[4] = createBaseVNode("th", {
                  style: {
                    "width": "69px"
                  }
                }, null, -1)), _cache[5] || (_cache[5] = createBaseVNode("th", {
                  style: {
                    "width": "50px"
                  }
                }, null, -1))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.executions, execution => {
                  return openBlock(), createBlock(GlobalExecutionsListItem_default, {
                    key: execution.id,
                    execution,
                    "workflow-name": getExecutionWorkflowName(execution),
                    "workflow-permissions": getExecutionWorkflowPermissions(execution),
                    selected: selectedItems.value[execution.id] || allExistingSelected.value,
                    "concurrency-cap": unref(settingsStore).concurrency,
                    "is-cloud-deployment": unref(settingsStore).isCloudDeployment,
                    "data-test-id": "global-execution-list-item",
                    onStop: stopExecution,
                    onDelete: deleteExecution,
                    onSelect: toggleSelectExecution,
                    onRetrySaved: retrySavedExecution,
                    onRetryOriginal: retryOriginalExecution,
                    onGoToUpgrade: goToUpgrade
                  }, null, 8, ["execution", "workflow-name", "workflow-permissions", "selected", "concurrency-cap", "is-cloud-deployment"]);
                }), 128)), unref(executionsStore).loading && !_ctx.executions.length ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(unref(executionsStore).itemsPerPage, item => {
                  return openBlock(), createElementBlock("tr", {
                    key: item
                  }, [(openBlock(), createElementBlock(Fragment, null, renderList(9, col => {
                    return createBaseVNode("td", {
                      key: col
                    }, [createVNode(unref(ElSkeletonItem))]);
                  }), 64))]);
                }), 128)) : createCommentVNode("", true), createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_6, [!_ctx.executions.length ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(i18n).baseText("executionsList.empty")), 1)) : _ctx.total > _ctx.executions.length || _ctx.estimated ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 1,
                  ref: "loadMoreButton",
                  icon: "refresh-cw",
                  title: unref(i18n).baseText("executionsList.loadMore"),
                  label: unref(i18n).baseText("executionsList.loadMore"),
                  loading: unref(executionsStore).loading,
                  "data-test-id": "load-more-button",
                  onClick: _cache[2] || (_cache[2] = $event => loadMore())
                }, null, 8, ["title", "label", "loading"])) : (openBlock(), createElementBlock(Fragment, {
                  key: 2
                }, [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.loadedAll")), 1)], 64))])])])]),
                _: 1
              })], 2)], 2), createVNode(SelectedItemsInfo_default, {
                "selected-count": selectedCount.value,
                onDeleteSelected: handleDeleteSelected,
                onClearSelection: handleClearSelection
              }, null, 8, ["selected-count"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsList.vue?vue&type=style&index=0&lang.module.scss
        execListWrapper = "_execListWrapper_figer_123";
        execList = "_execList_figer_123";
        execListHeaderControls = "_execListHeaderControls_figer_138";
        execTable = "_execTable_figer_145";
        GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
          execListWrapper,
          execList,
          execListHeaderControls,
          execTable
        }; //#endregion
        //#region src/features/execution/executions/components/global/GlobalExecutionsList.vue
        cssModules = {
          "$style": GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default
        };
        GlobalExecutionsList_default = /* @__PURE__ */__plugin_vue_export_helper_default(GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-99838607"]]); //#endregion
        //#region src/features/execution/executions/views/ExecutionsView.vue?vue&type=script&setup=true&lang.ts
        ExecutionsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExecutionsView",
          setup(__props) {
            const route = useRoute();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const externalHooks = useExternalHooks();
            const workflowsStore = useWorkflowsStore();
            const executionsStore = useExecutionsStore();
            const insightsStore = useInsightsStore();
            const documentTitle = useDocumentTitle();
            const toast = useToast();
            const overview = useProjectPages();
            const {
              executionsCount,
              executionsCountEstimated,
              concurrentExecutionsCount,
              filters,
              allExecutions
            } = storeToRefs(executionsStore);
            onBeforeMount(async () => {
              await loadWorkflows();
              externalHooks.run("executionsList.openDialog");
              telemetry.track("User opened Executions log", {
                workflow_id: workflowsStore.workflowId
              });
            });
            onMounted(async () => {
              documentTitle.set(i18n.baseText("executionsList.workflowExecutions"));
              document.addEventListener("visibilitychange", onDocumentVisibilityChange);
              await executionsStore.initialize();
            });
            onBeforeUnmount(() => {
              executionsStore.reset();
              document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
            });
            async function loadWorkflows() {
              try {
                await workflowsStore.fetchAllWorkflows(route.params?.projectId);
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.loadWorkflows.title"));
              }
            }
            function onDocumentVisibilityChange() {
              if (document.visibilityState === "hidden") executionsStore.stopAutoRefreshInterval();else executionsStore.startAutoRefreshInterval();
            }
            async function onRefreshData() {
              try {
                await executionsStore.fetchExecutions();
              } catch (error) {
                toast.showError(error, i18n.baseText("executionsList.showError.refreshData.title"));
              }
            }
            async function onUpdateFilters(newFilters) {
              executionsStore.reset();
              executionsStore.setFilters(newFilters);
              await executionsStore.initialize();
            }
            async function onExecutionStop() {
              await onRefreshData();
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(GlobalExecutionsList_default, {
                executions: unref(allExecutions),
                filters: unref(filters),
                total: unref(executionsCount),
                "estimated-total": unref(executionsCountEstimated),
                "concurrent-total": unref(concurrentExecutionsCount),
                "onExecution:stop": onExecutionStop,
                "onUpdate:filters": onUpdateFilters
              }, {
                default: withCtx(() => [createVNode(ProjectHeader_default, null, {
                  default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
                    key: 0,
                    loading: unref(insightsStore).weeklySummary.isLoading,
                    summary: unref(insightsStore).weeklySummary.state,
                    "time-range": "week"
                  }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["executions", "filters", "total", "estimated-total", "concurrent-total"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/views/ExecutionsView.vue
        _export("default", ExecutionsView_default = ExecutionsView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();