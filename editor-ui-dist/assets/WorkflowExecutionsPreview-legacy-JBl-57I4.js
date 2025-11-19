;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./executions.store-legacy-BxTud2_e.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js", "./TagsDropdown-legacy-B77bF58I.js", "./useExecutionDebugging-legacy-BBf4rWwf.js", "./AnnotationTagsDropdown.ee-legacy-CfAAqqBA.js", "./WorkflowPreview-legacy-Cb5LgcWz.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, withCtx, openBlock, renderList, createTextVNode, resolveComponent, resolveDirective, createBaseVNode, withDirectives, useI18n, ElTag, ElDropdown, N8nText_default, ElDropdownItem, N8nButton_default, ElDropdownMenu, N8nHeading_default, N8nSpinner_default, N8nIconButton_default, N8nBadge_default, __plugin_vue_export_helper_default, createEventBus, useRoute, useMessage, useSettingsStore, useWorkflowsStore, useTelemetry, useToast, EnterpriseEditionFeature, MODAL_CONFIRM, getResourcePermissions, VIEWS, useExecutionsStore, useExecutionHelpers, useExecutionDebugging, AnnotationTagsDropdown_ee_default, WorkflowPreview_default, __vite_style__, WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default, highlightDataButton$1, highlightDataButtonActive$1, highlightDataButtonOpen$1, badge$1, container, section, metadata, heading, controls, customDataEntry, key, noResultsContainer, WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default, cssModules$3, WorkflowExecutionAnnotationPanel_ee_default, _hoisted_1$1, WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default, tags, addTagButton, addTagButtonIconOnly, tagsContainer, WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkflowExecutionAnnotationTags_ee_default, VoteButtons_vue_vue_type_script_setup_true_lang_default, ratingIcon, icon, up, down, VoteButtons_vue_vue_type_style_index_0_lang_module_default, cssModules$1, VoteButtons_default, _hoisted_1, _hoisted_2, WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default, previewContainer, executionDetails, executionDetailsLeft, executionTitle, voteButtons, spinner, running, waiting, success, error, newInfo, runningInfo, newMessage, runningMessage, debugLink, actions, highlightDataButton, highlightDataButtonActive, highlightDataButtonOpen, badge, WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowExecutionsPreview_default;
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
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        ElTag = _srcLegacy007Js.Bt;
        ElDropdown = _srcLegacy007Js.Ft;
        N8nText_default = _srcLegacy007Js.In;
        ElDropdownItem = _srcLegacy007Js.It;
        N8nButton_default = _srcLegacy007Js.Ln;
        ElDropdownMenu = _srcLegacy007Js.Lt;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nBadge_default = _srcLegacy007Js.it;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        getResourcePermissions = _constantsLegacy00NJs._r;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_executionsStoreLegacy01dJs) {
        useExecutionsStore = _executionsStoreLegacy01dJs.t;
      }, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {}, function (_dateFormatterLegacy02zJs) {}, function (_useExecutionHelpersLegacy02BJs) {
        useExecutionHelpers = _useExecutionHelpersLegacy02BJs.t;
      }, function (_TagsDropdownLegacy02TJs) {}, function (_useExecutionDebuggingLegacy04dJs) {
        useExecutionDebugging = _useExecutionDebuggingLegacy04dJs.t;
      }, function (_AnnotationTagsDropdownEeLegacy05LJs) {
        AnnotationTagsDropdown_ee_default = _AnnotationTagsDropdownEeLegacy05LJs.t;
      }, function (_WorkflowPreviewLegacy05NJs) {
        WorkflowPreview_default = _WorkflowPreviewLegacy05NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._highlightDataButton_6a6tl_123 {\n  height: 30px;\n  width: 30px;\n}\n._highlightDataButtonActive_6a6tl_128 {\n  width: auto;\n}\n._highlightDataButtonOpen_6a6tl_132 {\n  color: var(--color--primary);\n  background-color: var(--button--color--background--secondary--hover);\n  border-color: var(--button--border-color--secondary--hover-active-focus);\n}\n._badge_6a6tl_138 {\n  border: 0;\n}\n._container_6a6tl_142 {\n  z-index: 1;\n  max-height: calc(100vh - 250px);\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  background-color: var(--color--background--light-3);\n  border: var(--border);\n  border-radius: var(--radius);\n}\n._section_6a6tl_154 {\n  padding: var(--spacing--sm);\n  display: flex;\n  flex-direction: column;\n}\n._section_6a6tl_154:not(:last-child) {\n  border-bottom: var(--border);\n}\n._metadata_6a6tl_163 {\n  padding-top: var(--spacing--sm);\n}\n._heading_6a6tl_167 {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-right: var(--spacing--lg);\n}\n._controls_6a6tl_174 {\n  padding: var(--spacing--sm) 0 var(--spacing--xs);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: var(--spacing--md);\n}\n._controls_6a6tl_174 button {\n  display: flex;\n  align-items: center;\n}\n._customDataEntry_6a6tl_186 {\n  display: flex;\n  flex-direction: column;\n}\n._customDataEntry_6a6tl_186:not(:first-of-type) {\n  margin-top: var(--spacing--sm);\n}\n._customDataEntry_6a6tl_186 ._key_6a6tl_193 {\n  font-weight: var(--font-weight--bold);\n}\n._noResultsContainer_6a6tl_197 {\n  width: 100%;\n  margin-top: var(--spacing--sm);\n}\n._execution-annotation-panel_6a6tl_202 :deep(._el-skeleton__item_6a6tl_202) {\n  height: 60px;\n  border-radius: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._tags_50en8_123 {\n  display: block;\n  margin-top: var(--spacing--4xs);\n}\n._addTagButton_50en8_128 {\n  height: 24px;\n  font-size: var(--font-size--2xs);\n  white-space: nowrap;\n  padding: var(--spacing--4xs) var(--spacing--3xs);\n  background-color: var(--button--color--background--secondary);\n  border: 1px solid var(--color--foreground--tint-1);\n  border-radius: var(--radius);\n  font-weight: var(--font-weight--regular);\n}\n._addTagButton_50en8_128:hover {\n  color: var(--color--primary);\n  text-decoration: none;\n  background-color: var(--button--color--background--secondary--hover);\n  border: 1px solid var(--button--border-color--secondary--hover-active-focus);\n  border-radius: var(--radius);\n}\n._addTagButton_50en8_128 span + span {\n  margin-left: var(--spacing--4xs);\n}\n._addTagButtonIconOnly_50en8_149 {\n  height: 20px;\n  width: 20px;\n}\n._tagsContainer_50en8_154 {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--spacing--4xs);\n  max-width: 360px;\n}\n._tagsContainer_50en8_154 .el-tag {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: max-content;\n  height: var(--tag--height);\n  padding: var(--tag--padding);\n  line-height: var(--tag--line-height);\n  color: var(--tag--color--text);\n  background-color: var(--tag--color--background);\n  border: 1px solid var(--tag--border-color);\n  border-radius: var(--tag--radius);\n  font-size: var(--tag--font-size);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._ratingIcon_w647n_123 {\n  display: flex;\n  flex-direction: row;\n}\n._ratingIcon_w647n_123 ._icon_w647n_127 {\n  color: var(--color--text--tint-1);\n}\n._ratingIcon_w647n_123 ._icon_w647n_127:not(._up_w647n_130):not(._down_w647n_130):hover {\n  color: var(--color--primary);\n}\n._ratingIcon_w647n_123 ._up_w647n_130 {\n  color: var(--color--success);\n}\n._ratingIcon_w647n_123 ._down_w647n_130 {\n  color: var(--color--danger);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._previewContainer_152nc_123 {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n._executionDetails_152nc_129 {\n  position: absolute;\n  padding: var(--spacing--md);\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  transition: all 150ms ease-in-out;\n  pointer-events: none;\n}\n._executionDetails_152nc_129 > div:last-child {\n  display: flex;\n  align-items: center;\n}\n._executionDetails_152nc_129 * {\n  pointer-events: all;\n}\n._executionDetailsLeft_152nc_147 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--5xs);\n}\n._executionTitle_152nc_153 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--3xs);\n}\n._voteButtons_152nc_159 {\n  margin-bottom: 2px;\n}\n._spinner_152nc_163 div div {\n  width: 30px;\n  height: 30px;\n  border-width: 2px;\n}\n._running_152nc_169,\n._spinner_152nc_163 {\n  color: var(--color--warning);\n}\n._waiting_152nc_174 {\n  color: var(--color--secondary);\n}\n._success_152nc_178 {\n  color: var(--color--success);\n}\n._error_152nc_182 {\n  color: var(--color--danger);\n}\n._newInfo_152nc_186,\n._runningInfo_152nc_187 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: var(--spacing--4xl);\n}\n._newMessage_152nc_194,\n._runningMessage_152nc_195 {\n  width: 240px;\n  margin-top: var(--spacing--lg);\n  text-align: center;\n}\n._debugLink_152nc_201 a > span {\n  display: block;\n  padding: var(--button--padding--vertical, var(--spacing--xs)) var(--button--padding--horizontal, var(--spacing--md));\n}\n._actions_152nc_206 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}\n._highlightDataButton_152nc_211 {\n  height: 30px;\n  width: 30px;\n}\n._highlightDataButtonActive_152nc_216 {\n  width: auto;\n}\n._highlightDataButtonOpen_152nc_220 {\n  color: var(--color--primary);\n  background-color: var(--button--color--background--secondary--hover);\n  border-color: var(--button--border-color--secondary--hover-active-focus);\n}\n._badge_152nc_226 {\n  border: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationPanel.ee.vue?vue&type=script&setup=true&lang.ts
        WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionAnnotationPanel.ee",
          props: {
            execution: {}
          },
          setup(__props) {
            const props = __props;
            const workflowsStore = useWorkflowsStore();
            const route = useRoute();
            const i18n = useI18n();
            const annotationDropdownRef = ref(null);
            const isDropdownVisible = ref(false);
            const workflowId = computed(() => route.params.name);
            const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
            const customDataLength = computed(() => {
              return props.execution?.customData ? Object.keys(props.execution?.customData).length : 0;
            });
            function onEllipsisButtonBlur(event) {
              if (annotationDropdownRef.value && event.relatedTarget === null) annotationDropdownRef.value.handleClose();
            }
            function onDropdownVisibleChange(visible) {
              isDropdownVisible.value = visible;
            }
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return _ctx.execution ? (openBlock(), createBlock(unref(ElDropdown), {
                key: 0,
                ref_key: "annotationDropdownRef",
                ref: annotationDropdownRef,
                trigger: "click",
                onVisibleChange: onDropdownVisibleChange
              }, {
                dropdown: withCtx(() => [createBaseVNode("div", {
                  ref: "container",
                  class: normalizeClass(["execution-annotation-panel", _ctx.$style.container]),
                  "data-test-id": "execution-annotation-panel"
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.section)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.heading)
                }, [createVNode(unref(N8nHeading_default), {
                  tag: "h3",
                  size: "small",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.annotationData")), 1)]),
                  _: 1
                })], 2), _ctx.execution?.customData && Object.keys(_ctx.execution?.customData).length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.metadata)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.execution?.customData), attr => {
                  return openBlock(), createElementBlock("div", {
                    key: attr,
                    class: normalizeClass(_ctx.$style.customDataEntry)
                  }, [createVNode(unref(N8nText_default), {
                    class: normalizeClass(_ctx.$style.key),
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(attr), 1)]),
                    _: 2
                  }, 1032, ["class"]), createVNode(unref(N8nText_default), {
                    class: normalizeClass(_ctx.$style.value),
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.execution?.customData[attr]), 1)]),
                    _: 2
                  }, 1032, ["class"])], 2);
                }), 128))], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.noResultsContainer),
                  "data-test-id": "execution-annotation-data-empty"
                }, [createVNode(unref(N8nText_default), {
                  color: "text-base",
                  size: "small",
                  align: "center"
                }, {
                  default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("executionAnnotationView.data.notFound")]])]),
                  _: 1
                })], 2))], 2)], 2)]),
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  title: unref(i18n).baseText("executionDetails.additionalActions"),
                  disabled: !workflowPermissions.value.update,
                  icon: "list-checks",
                  class: normalizeClass({
                    [_ctx.$style.highlightDataButton]: true,
                    [_ctx.$style.highlightDataButtonActive]: customDataLength.value > 0,
                    [_ctx.$style.highlightDataButtonOpen]: isDropdownVisible.value
                  }),
                  size: "small",
                  type: "secondary",
                  "data-test-id": "execution-preview-ellipsis-button",
                  onBlur: onEllipsisButtonBlur
                }, {
                  default: withCtx(() => [customDataLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 0,
                    class: normalizeClass(_ctx.$style.badge),
                    theme: "primary"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(customDataLength.value.toString()), 1)]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["title", "disabled", "class"])]),
                _: 1
              }, 512)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationPanel.ee.vue?vue&type=style&index=0&lang.module.scss
        highlightDataButton$1 = "_highlightDataButton_6a6tl_123";
        highlightDataButtonActive$1 = "_highlightDataButtonActive_6a6tl_128";
        highlightDataButtonOpen$1 = "_highlightDataButtonOpen_6a6tl_132";
        badge$1 = "_badge_6a6tl_138";
        container = "_container_6a6tl_142";
        section = "_section_6a6tl_154";
        metadata = "_metadata_6a6tl_163";
        heading = "_heading_6a6tl_167";
        controls = "_controls_6a6tl_174";
        customDataEntry = "_customDataEntry_6a6tl_186";
        key = "_key_6a6tl_193";
        noResultsContainer = "_noResultsContainer_6a6tl_197";
        WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default = {
          highlightDataButton: highlightDataButton$1,
          highlightDataButtonActive: highlightDataButtonActive$1,
          highlightDataButtonOpen: highlightDataButtonOpen$1,
          badge: badge$1,
          container,
          section,
          metadata,
          heading,
          controls,
          customDataEntry,
          key,
          noResultsContainer,
          "execution-annotation-panel": "_execution-annotation-panel_6a6tl_202",
          "el-skeleton__item": "_el-skeleton__item_6a6tl_202"
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationPanel.ee.vue
        cssModules$3 = {
          "$style": WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowExecutionAnnotationPanel_ee_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationTags.ee.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 1
        };
        WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionAnnotationTags.ee",
          props: {
            execution: {}
          },
          setup(__props) {
            const props = __props;
            const locale = useI18n();
            const telemetry = useTelemetry();
            const {
              showError
            } = useToast();
            const executionsStore = useExecutionsStore();
            const tagIds = computed(() => props.execution.annotation?.tags.map(tag => tag.id) ?? []);
            const tags$1 = computed(() => props.execution.annotation?.tags);
            const tagsEventBus = createEventBus();
            const isTagsEditEnabled = ref(false);
            const appliedTagIds = ref([]);
            const tagsSaving = ref(false);
            const tagsHasChanged = (prev, curr) => {
              if (prev.length !== curr.length) return true;
              const set = new Set(prev);
              return curr.reduce((acc, val) => acc || !set.has(val), false);
            };
            const onTagsEditEnable = () => {
              appliedTagIds.value = tagIds.value;
              isTagsEditEnabled.value = true;
              tagsEventBus.emit("focus");
            };
            const onTagsBlur = async () => {
              if (!props.execution) return;
              const currentTagIds = tagIds.value ?? [];
              const newTagIds = appliedTagIds.value;
              if (!tagsHasChanged(currentTagIds, newTagIds)) {
                isTagsEditEnabled.value = false;
                return;
              }
              if (tagsSaving.value) return;
              tagsSaving.value = true;
              try {
                await executionsStore.annotateExecution(props.execution.id, {
                  tags: newTagIds
                });
                if (newTagIds.length > 0) telemetry.track("User added execution annotation tag", {
                  tag_ids: newTagIds,
                  execution_id: props.execution.id
                });
              } catch (e) {
                showError(e, "executionAnnotationView.tag.error");
              }
              tagsSaving.value = false;
              isTagsEditEnabled.value = false;
            };
            const onTagsEditEsc = () => {
              isTagsEditEnabled.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.executionDetailsTags)
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.tags),
                "data-test-id": "annotation-tags-container"
              }, [isTagsEditEnabled.value ? (openBlock(), createBlock(AnnotationTagsDropdown_ee_default, {
                key: 0,
                ref: "dropdown",
                modelValue: appliedTagIds.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => appliedTagIds.value = $event),
                "create-enabled": true,
                "event-bus": unref(tagsEventBus),
                placeholder: unref(locale).baseText("executionAnnotationView.chooseOrCreateATag"),
                class: "tags-edit",
                "data-test-id": "workflow-tags-dropdown",
                onBlur: onTagsBlur,
                onEsc: onTagsEditEsc
              }, null, 8, ["modelValue", "event-bus", "placeholder"])) : tagIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nButton_default), {
                class: normalizeClass([_ctx.$style.addTagButton, "clickable"]),
                label: unref(locale).baseText("executionAnnotationView.addTag"),
                type: "secondary",
                size: "mini",
                outline: false,
                text: true,
                "data-test-id": "new-tag-link",
                icon: "plus",
                onClick: onTagsEditEnable
              }, null, 8, ["class", "label"])])) : (openBlock(), createElementBlock("span", {
                key: 2,
                class: normalizeClass(["tags-container", _ctx.$style.tagsContainer]),
                "data-test-id": "execution-annotation-tags",
                onClick: onTagsEditEnable
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags$1.value, tag => {
                return openBlock(), createElementBlock("span", {
                  key: tag.id,
                  class: "clickable"
                }, [createVNode(unref(ElTag), {
                  title: tag.name,
                  type: "info",
                  size: "small",
                  "disable-transitions": true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag.name), 1)]),
                  _: 2
                }, 1032, ["title"])]);
              }), 128)), createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.addTagWrapper)
              }, [createVNode(unref(N8nButton_default), {
                class: normalizeClass([_ctx.$style.addTagButton, _ctx.$style.addTagButtonIconOnly, "clickable"]),
                type: "secondary",
                size: "mini",
                outline: false,
                text: true,
                "data-test-id": "new-tag-link",
                icon: "plus",
                onClick: onTagsEditEnable
              }, null, 8, ["class"])], 2)], 2))], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationTags.ee.vue?vue&type=style&index=0&lang.module.scss
        tags = "_tags_50en8_123";
        addTagButton = "_addTagButton_50en8_128";
        addTagButtonIconOnly = "_addTagButtonIconOnly_50en8_149";
        tagsContainer = "_tagsContainer_50en8_154";
        WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default = {
          tags,
          addTagButton,
          addTagButtonIconOnly,
          tagsContainer
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationTags.ee.vue
        cssModules$2 = {
          "$style": WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowExecutionAnnotationTags_ee_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/execution/executions/components/workflow/VoteButtons.vue?vue&type=script&setup=true&lang.ts
        VoteButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "VoteButtons",
          props: {
            vote: {}
          },
          emits: ["vote-click"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const onVoteClick = vote => {
              emit("vote-click", vote);
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.ratingIcon)
              }, [createVNode(unref(N8nIconButton_default), {
                class: normalizeClass([_ctx.$style.icon, _ctx.vote === "up" && _ctx.$style.up]),
                type: "tertiary",
                text: "",
                size: "small",
                icon: "thumbs-up",
                onClick: _cache[0] || (_cache[0] = $event => onVoteClick("up"))
              }, null, 8, ["class"]), createVNode(unref(N8nIconButton_default), {
                class: normalizeClass([_ctx.$style.icon, _ctx.vote === "down" && _ctx.$style.down]),
                type: "tertiary",
                text: "",
                size: "small",
                icon: "thumbs-down",
                onClick: _cache[1] || (_cache[1] = $event => onVoteClick("down"))
              }, null, 8, ["class"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/VoteButtons.vue?vue&type=style&index=0&lang.module.scss
        ratingIcon = "_ratingIcon_w647n_123";
        icon = "_icon_w647n_127";
        up = "_up_w647n_130";
        down = "_down_w647n_130";
        VoteButtons_vue_vue_type_style_index_0_lang_module_default = {
          ratingIcon,
          icon,
          up,
          down
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/VoteButtons.vue
        cssModules$1 = {
          "$style": VoteButtons_vue_vue_type_style_index_0_lang_module_default
        };
        VoteButtons_default = /* @__PURE__ */__plugin_vue_export_helper_default(VoteButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsPreview.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["data-test-id"];
        _hoisted_2 = {
          class: "retry-button"
        };
        WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsPreview",
          props: {
            execution: {}
          },
          emits: ["deleteCurrentExecution", "retryExecution", "stopExecution"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const route = useRoute();
            const locale = useI18n();
            const {
              showError
            } = useToast();
            const executionHelpers = useExecutionHelpers();
            const message = useMessage();
            const executionDebugging = useExecutionDebugging();
            const workflowsStore = useWorkflowsStore();
            const settingsStore = useSettingsStore();
            const retryDropdownRef = ref(null);
            const workflowId = computed(() => route.params.name);
            const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
            const executionId = computed(() => route.params.executionId);
            const nodeId = computed(() => route.params.nodeId);
            const executionUIDetails = computed(() => props.execution ? executionHelpers.getUIDetails(props.execution) : null);
            const debugButtonData = computed(() => props.execution?.status === "success" ? {
              text: locale.baseText("executionsList.debug.button.copyToEditor"),
              type: "secondary"
            } : {
              text: locale.baseText("executionsList.debug.button.debugInEditor"),
              type: "primary"
            });
            const isRetriable = computed(() => !!props.execution && executionHelpers.isExecutionRetriable(props.execution));
            const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
            const hasAnnotation = computed(() => !!props.execution?.annotation && (props.execution?.annotation.vote || props.execution?.annotation.tags.length > 0));
            const executionsStore = useExecutionsStore();
            const activeExecution = computed(() => {
              return executionsStore.activeExecution;
            });
            const vote = computed(() => activeExecution.value?.annotation?.vote || null);
            async function onDeleteExecution() {
              const confirmationText = [hasAnnotation.value && locale.baseText("executionDetails.confirmMessage.annotationsNote"), locale.baseText("executionDetails.confirmMessage.message")].filter(Boolean).join(" ");
              if ((await message.confirm(confirmationText, locale.baseText("executionDetails.confirmMessage.headline"), {
                type: "warning",
                confirmButtonText: locale.baseText("executionDetails.confirmMessage.confirmButtonText"),
                cancelButtonText: ""
              })) !== "confirm") return;
              emit("deleteCurrentExecution");
            }
            function handleRetryClick(command) {
              if (props.execution) emit("retryExecution", {
                execution: props.execution,
                command
              });
            }
            function handleStopClick() {
              emit("stopExecution");
            }
            function onRetryButtonBlur(event) {
              if (retryDropdownRef.value && event.relatedTarget === null) retryDropdownRef.value.handleClose();
            }
            const onVoteClick = async voteValue => {
              if (!activeExecution.value) return;
              const voteToSet = voteValue === vote.value ? null : voteValue;
              try {
                await executionsStore.annotateExecution(activeExecution.value.id, {
                  vote: voteToSet
                });
              } catch (e) {
                showError(e, "executionAnnotationView.vote.error");
              }
            };
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return executionUIDetails.value?.name === "new" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.newInfo)
              }, [createVNode(unref(N8nText_default), {
                class: normalizeClass(_ctx.$style.newMessage),
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.newMessage")), 1)]),
                _: 1
              }, 8, ["class"]), createVNode(unref(N8nButton_default), {
                class: "mt-l",
                type: "tertiary",
                onClick: handleStopClick
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
                _: 1
              })], 2)) : executionUIDetails.value?.name === "running" ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.runningInfo)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.spinner)
              }, [createVNode(unref(N8nSpinner_default), {
                type: "ring"
              })], 2), createVNode(unref(N8nText_default), {
                class: normalizeClass(_ctx.$style.runningMessage),
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningMessage")), 1)]),
                _: 1
              }, 8, ["class"]), createVNode(unref(N8nButton_default), {
                "data-test-id": "stop-execution",
                class: "mt-l",
                type: "tertiary",
                disabled: !workflowPermissions.value.execute,
                onClick: handleStopClick
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
                _: 1
              }, 8, ["disabled"])], 2)) : executionUIDetails.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.previewContainer)
              }, [_ctx.execution ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionDetails),
                "data-test-id": `execution-preview-details-${executionId.value}`
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.executionDetailsLeft)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.executionTitle)
              }, [createVNode(unref(N8nText_default), {
                size: "large",
                color: "text-dark",
                bold: true,
                "data-test-id": "execution-time"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value?.startTime), 1)]),
                _: 1
              }), isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(VoteButtons_default, {
                key: 0,
                "data-test-id": "execution-preview-vote-buttons",
                vote: vote.value,
                class: normalizeClass(_ctx.$style.voteButtons),
                onVoteClick
              }, null, 8, ["vote", "class"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.executionDetailsInfo)
              }, [executionUIDetails.value?.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
                key: 0,
                size: "small",
                class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
              }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                size: "medium",
                class: normalizeClass([_ctx.$style.status, _ctx.$style[executionUIDetails.value.name]]),
                "data-test-id": "execution-preview-label"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
                _: 1
              }, 8, ["class"]), _cache[1] || (_cache[1] = createTextVNode(" " + toDisplayString(" ") + " ")), executionUIDetails.value?.showTimestamp === false ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 1,
                color: "text-base",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(" | ID#" + toDisplayString(_ctx.execution.id), 1)]),
                _: 1
              })) : executionUIDetails.value.name === "running" ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 2,
                color: "text-base",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning", {
                  interpolate: {
                    time: executionUIDetails.value?.runningTime
                  }
                })) + " | ID#" + toDisplayString(_ctx.execution.id), 1)]),
                _: 1
              })) : executionUIDetails.value.name !== "waiting" ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 3,
                color: "text-base",
                size: "medium",
                "data-test-id": "execution-preview-id"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeFinished", {
                  interpolate: {
                    time: executionUIDetails.value?.runningTime ?? "unknown"
                  }
                })) + " | ID#" + toDisplayString(_ctx.execution.id), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2), _ctx.execution.mode === "retry" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionDetailsRetry)
              }, [createVNode(unref(N8nText_default), {
                color: "text-base",
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " ", 1), createVNode(_component_RouterLink, {
                  class: normalizeClass(_ctx.$style.executionLink),
                  to: {
                    name: unref(VIEWS).EXECUTION_PREVIEW,
                    params: {
                      workflowId: _ctx.execution.workflowId,
                      executionId: _ctx.execution.retryOf
                    }
                  }
                }, {
                  default: withCtx(() => [createTextVNode(" #" + toDisplayString(_ctx.execution.retryOf), 1)]),
                  _: 1
                }, 8, ["class", "to"])]),
                _: 1
              })], 2)) : createCommentVNode("", true), isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(WorkflowExecutionAnnotationTags_ee_default, {
                key: 1,
                execution: _ctx.execution
              }, null, 8, ["execution"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [createVNode(_component_RouterLink, {
                to: {
                  name: unref(VIEWS).EXECUTION_DEBUG,
                  params: {
                    name: _ctx.execution.workflowId,
                    executionId: _ctx.execution.id
                  }
                }
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  size: "medium",
                  type: debugButtonData.value.type,
                  class: normalizeClass(_ctx.$style.debugLink),
                  disabled: !workflowPermissions.value.update
                }, {
                  default: withCtx(() => [createBaseVNode("span", {
                    "data-test-id": "execution-debug-button",
                    onClick: _cache[0] || (_cache[0] = (...args) => unref(executionDebugging).handleDebugLinkClick && unref(executionDebugging).handleDebugLinkClick(...args))
                  }, toDisplayString(debugButtonData.value.text), 1)]),
                  _: 1
                }, 8, ["type", "class", "disabled"])]),
                _: 1
              }, 8, ["to"]), isRetriable.value ? (openBlock(), createBlock(unref(ElDropdown), {
                key: 0,
                ref: "retryDropdown",
                trigger: "click",
                onCommand: handleRetryClick
              }, {
                dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), null, {
                  default: withCtx(() => [createVNode(unref(ElDropdownItem), {
                    command: "current-workflow"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
                    _: 1
                  }), createVNode(unref(ElDropdownItem), {
                    command: "original-workflow"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
                    _: 1
                  })]),
                  _: 1
                })]),
                default: withCtx(() => [createBaseVNode("span", _hoisted_2, [createVNode(unref(N8nIconButton_default), {
                  size: "medium",
                  type: "tertiary",
                  title: unref(locale).baseText("executionsList.retryExecution"),
                  disabled: !workflowPermissions.value.update,
                  icon: "redo-2",
                  "data-test-id": "execution-preview-retry-button",
                  onBlur: onRetryButtonBlur
                }, null, 8, ["title", "disabled"])])]),
                _: 1
              }, 512)) : createCommentVNode("", true), isAnnotationEnabled.value && activeExecution.value ? (openBlock(), createBlock(WorkflowExecutionAnnotationPanel_ee_default, {
                key: 1,
                execution: activeExecution.value
              }, null, 8, ["execution"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
                title: unref(locale).baseText("executionDetails.deleteExecution"),
                disabled: !workflowPermissions.value.update,
                icon: "trash-2",
                size: "medium",
                type: "tertiary",
                "data-test-id": "execution-preview-delete-button",
                onClick: onDeleteExecution
              }, null, 8, ["title", "disabled"])], 2)], 10, _hoisted_1)) : createCommentVNode("", true), (openBlock(), createBlock(WorkflowPreview_default, {
                key: executionId.value,
                mode: "execution",
                "loader-type": "spinner",
                "execution-id": executionId.value,
                "execution-mode": _ctx.execution?.mode || "",
                "node-id": nodeId.value
              }, null, 8, ["execution-id", "execution-mode", "node-id"]))], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsPreview.vue?vue&type=style&index=0&lang.module.scss
        previewContainer = "_previewContainer_152nc_123";
        executionDetails = "_executionDetails_152nc_129";
        executionDetailsLeft = "_executionDetailsLeft_152nc_147";
        executionTitle = "_executionTitle_152nc_153";
        voteButtons = "_voteButtons_152nc_159";
        spinner = "_spinner_152nc_163";
        running = "_running_152nc_169";
        waiting = "_waiting_152nc_174";
        success = "_success_152nc_178";
        error = "_error_152nc_182";
        newInfo = "_newInfo_152nc_186";
        runningInfo = "_runningInfo_152nc_187";
        newMessage = "_newMessage_152nc_194";
        runningMessage = "_runningMessage_152nc_195";
        debugLink = "_debugLink_152nc_201";
        actions = "_actions_152nc_206";
        highlightDataButton = "_highlightDataButton_152nc_211";
        highlightDataButtonActive = "_highlightDataButtonActive_152nc_216";
        highlightDataButtonOpen = "_highlightDataButtonOpen_152nc_220";
        badge = "_badge_152nc_226";
        WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default = {
          previewContainer,
          executionDetails,
          executionDetailsLeft,
          executionTitle,
          voteButtons,
          spinner,
          running,
          waiting,
          success,
          error,
          newInfo,
          runningInfo,
          newMessage,
          runningMessage,
          debugLink,
          actions,
          highlightDataButton,
          highlightDataButtonActive,
          highlightDataButtonOpen,
          badge
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsPreview.vue
        cssModules = {
          "$style": WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", WorkflowExecutionsPreview_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();