;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./executions.store-legacy-BxTud2_e.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./FileSaver.min-legacy-BTN44Z38.js", "./WorkflowPreview-legacy-Cb5LgcWz.js", "./useIntersectionObserver-legacy-CQWXa295.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, h, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, resolveComponent, onBeforeMount, watchEffect, createBaseVNode, I18nT, useI18n, N8nActionToggle_default, N8nButton_default, N8nHeading_default, N8nLoading_default, N8nBadge_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useRoute, useSettingsStore, getWorkflowVersion, useUIStore, getNewWorkflow, useRootStore, getWorkflowHistory, useWorkflowsStore, telemetry, defineStore, useToast, WORKFLOW_HISTORY_VERSION_RESTORE, getResourcePermissions, VIEWS, require_dateformat, usePageRedirectionHelper, require_FileSaver_min, WorkflowPreview_default, useIntersectionObserver, __vite_style__, import_dateformat, _hoisted_1$3, _hoisted_2$1, WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, item, tail, active, actionsVisible, actions, WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default, cssModules$3, WorkflowHistoryListItem_default, _hoisted_1$2, WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, list, empty, loader, retention, WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkflowHistoryList_default, _hoisted_1$1, _hoisted_2, WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, content, info, card, text, label, WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default, cssModules$1, WorkflowHistoryContent_default, import_FileSaver_min, useWorkflowHistoryStore, _hoisted_1, WorkflowHistoryVersionRestoreModalActions, WorkflowHistory_vue_vue_type_script_setup_true_lang_default, view, header, corner, contentComponentWrapper, listComponentWrapper, WorkflowHistory_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowHistory_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        watchEffect = _vueRuntimeEsmBundlerLegacy003Js.vt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        getWorkflowVersion = _useTelemetryLegacy00FJs.Ho;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        getNewWorkflow = _useTelemetryLegacy00FJs.Po;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        getWorkflowHistory = _useTelemetryLegacy00FJs.Vo;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        telemetry = _useTelemetryLegacy00FJs.r;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        WORKFLOW_HISTORY_VERSION_RESTORE = _constantsLegacy00NJs.Ko;
        getResourcePermissions = _constantsLegacy00NJs._r;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_executionsStoreLegacy01dJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_FileSaverMinLegacy02rJs) {
        require_FileSaver_min = _FileSaverMinLegacy02rJs.t;
      }, function (_WorkflowPreviewLegacy05NJs) {
        WorkflowPreview_default = _WorkflowPreviewLegacy05NJs.t;
      }, function (_useIntersectionObserverLegacy05VJs) {
        useIntersectionObserver = _useIntersectionObserverLegacy05VJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._item_myt2r_123 {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 2px var(--border-style) transparent;\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}\n._item_myt2r_123 p {\n  display: grid;\n  padding: var(--spacing--sm);\n  cursor: pointer;\n  flex: 1 1 auto;\n}\n._item_myt2r_123 p time {\n  padding: 0 0 var(--spacing--5xs);\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n}\n._item_myt2r_123 p span,\n._item_myt2r_123 p data {\n  justify-self: start;\n  max-width: 160px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: calc(var(--spacing--4xs) * -1);\n  font-size: var(--font-size--2xs);\n}\n._item_myt2r_123 ._tail_myt2r_155 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._item_myt2r_123._active_myt2r_160 {\n  background-color: var(--color--background);\n  border-left-color: var(--color--primary);\n}\n._item_myt2r_123._active_myt2r_160 p {\n  cursor: default;\n}\n._item_myt2r_123:hover, ._item_myt2r_123._actionsVisible_myt2r_167 {\n  border-left-color: var(--color--foreground--shade-2);\n}\n._actions_myt2r_167 {\n  display: block;\n  padding: var(--spacing--3xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._list_1i94b_123 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n._empty_1i94b_132 {\n  display: flex;\n  position: absolute;\n  height: 100%;\n  padding: 0 25%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: var(--color--text);\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--lg);\n}\n._loader_1i94b_145 {\n  padding: 0 var(--spacing--sm);\n}\n._retention_1i94b_149 {\n  display: grid;\n  padding: var(--spacing--sm);\n  font-size: var(--font-size--2xs);\n  line-height: var(--line-height--lg);\n  text-align: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_1hiff_123 {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n._info_1hiff_133 {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n._card_1hiff_141 {\n  padding: var(--spacing--sm) var(--spacing--lg) 0 var(--spacing--xl);\n  border: 0;\n  align-items: start;\n}\n._card_1hiff_141 ._text_1hiff_146 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n._card_1hiff_141 ._text_1hiff_146 p {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  cursor: default;\n}\n._card_1hiff_141 ._text_1hiff_146 p:first-child {\n  padding-top: var(--spacing--3xs);\n  padding-bottom: var(--spacing--4xs);\n}\n._card_1hiff_141 ._text_1hiff_146 p:first-child * {\n  margin-top: auto;\n  font-size: var(--font-size--md);\n}\n._card_1hiff_141 ._text_1hiff_146 p:last-child {\n  padding-top: var(--spacing--3xs);\n}\n._card_1hiff_141 ._text_1hiff_146 p:last-child * {\n  font-size: var(--font-size--2xs);\n}\n._card_1hiff_141 ._text_1hiff_146 p ._label_1hiff_171 {\n  color: var(--color--text--tint-1);\n  padding-right: var(--spacing--4xs);\n}\n._card_1hiff_141 ._text_1hiff_146 p * {\n  max-width: unset;\n  justify-self: unset;\n  white-space: unset;\n  overflow: hidden;\n  text-overflow: unset;\n  padding: 0;\n  font-size: var(--font-size--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._view_ley84_123 {\n  position: relative;\n  display: grid;\n  width: 100%;\n  grid-template-areas: \"header corner\" \"content list\";\n  grid-template-columns: auto 330px;\n  grid-template-rows: 65px auto;\n  background-color: var(--color--background--light-3);\n}\n._header_ley84_133 {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  padding: 0 var(--spacing--lg);\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._corner_ley84_141 {\n  grid-area: corner;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--spacing--3xs) 0 var(--spacing--sm);\n  background-color: var(--color--background--light-2er);\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n  border-left: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._contentComponentWrapper_ley84_152 {\n  grid-area: content;\n  position: relative;\n}\n._listComponentWrapper_ley84_157 {\n  grid-area: list;\n  position: relative;\n}\n._listComponentWrapper_ley84_157::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: var(--border-width);\n  background-color: var(--color--foreground);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryListItem.vue?vue&type=script&setup=true&lang.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _hoisted_1$3 = ["datetime"];
        _hoisted_2$1 = ["value"];
        WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryListItem",
          props: {
            item: {},
            index: {},
            actions: {},
            isActive: {
              type: Boolean
            }
          },
          emits: ["action", "preview", "mounted"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const actionsVisible$1 = ref(false);
            const itemElement = ref(null);
            const authorElement = ref(null);
            const isAuthorElementTruncated = ref(false);
            const formattedCreatedAt = computed(() => {
              const currentYear = (/* @__PURE__ */new Date()).getFullYear().toString();
              const [date, time] = (0, import_dateformat.default)(props.item.createdAt, `${props.item.createdAt.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
              return i18n.baseText("workflowHistory.item.createdAt", {
                interpolate: {
                  date,
                  time
                }
              });
            });
            const authors = computed(() => {
              const allAuthors = props.item.authors.split(", ");
              let label$1 = allAuthors[0];
              if (allAuthors.length > 1) label$1 = `${label$1} + ${allAuthors.length - 1}`;
              return {
                size: allAuthors.length,
                label: label$1
              };
            });
            const idLabel = computed(() => i18n.baseText("workflowHistory.item.id", {
              interpolate: {
                id: props.item.versionId
              }
            }));
            const onAction = value => {
              emit("action", {
                action: value,
                id: props.item.versionId,
                data: {
                  formattedCreatedAt: formattedCreatedAt.value
                }
              });
            };
            const onVisibleChange = visible => {
              actionsVisible$1.value = visible;
            };
            const onItemClick = event => {
              emit("preview", {
                event,
                id: props.item.versionId
              });
            };
            onMounted(() => {
              emit("mounted", {
                index: props.index,
                offsetTop: itemElement.value?.offsetTop ?? 0,
                isActive: props.isActive
              });
              isAuthorElementTruncated.value = (authorElement.value?.scrollWidth ?? 0) > (authorElement.value?.clientWidth ?? 0);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("li", {
                ref_key: "itemElement",
                ref: itemElement,
                "data-test-id": "workflow-history-list-item",
                class: normalizeClass({
                  [_ctx.$style.item]: true,
                  [_ctx.$style.active]: props.isActive,
                  [_ctx.$style.actionsVisible]: actionsVisible$1.value
                })
              }, [renderSlot(_ctx.$slots, "default", {
                formattedCreatedAt: formattedCreatedAt.value
              }, () => [createBaseVNode("p", {
                onClick: onItemClick
              }, [createBaseVNode("time", {
                datetime: _ctx.item.createdAt
              }, toDisplayString(formattedCreatedAt.value), 9, _hoisted_1$3), createVNode(unref(N8nTooltip_default), {
                placement: "right-end",
                disabled: authors.value.size < 2 && !isAuthorElementTruncated.value
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(props.item.authors), 1)]),
                default: withCtx(() => [createBaseVNode("span", {
                  ref_key: "authorElement",
                  ref: authorElement
                }, toDisplayString(authors.value.label), 513)]),
                _: 1
              }, 8, ["disabled"]), createBaseVNode("data", {
                value: _ctx.item.versionId
              }, toDisplayString(idLabel.value), 9, _hoisted_2$1)])]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tail)
              }, [props.index === 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
                key: 0
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.latest")), 1)]),
                _: 1
              })) : createCommentVNode("", true), createVNode(unref(N8nActionToggle_default), {
                theme: "dark",
                class: normalizeClass(_ctx.$style.actions),
                actions: props.actions,
                placement: "bottom-end",
                onAction,
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
                onVisibleChange
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "action-toggle-button")]),
                _: 3
              }, 8, ["class", "actions"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryListItem.vue?vue&type=style&index=0&lang.module.scss
        item = "_item_myt2r_123";
        tail = "_tail_myt2r_155";
        active = "_active_myt2r_160";
        actionsVisible = "_actionsVisible_myt2r_167";
        actions = "_actions_myt2r_167";
        WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default = {
          item,
          tail,
          active,
          actionsVisible,
          actions
        }; //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryListItem.vue
        cssModules$3 = {
          "$style": WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHistoryListItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryList.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = ["aria-label"];
        WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryList",
          props: {
            items: {},
            activeItem: {},
            actions: {},
            requestNumberOfItems: {},
            lastReceivedItemsLength: {},
            evaluatedPruneTime: {},
            shouldUpgrade: {
              type: Boolean
            },
            isListLoading: {
              type: Boolean
            }
          },
          emits: ["action", "preview", "loadMore", "upgrade"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const listElement = ref(null);
            const shouldAutoScroll = ref(true);
            const {
              observe: observeForLoadMore
            } = useIntersectionObserver({
              root: listElement,
              threshold: .01,
              onIntersect: () => emit("loadMore", {
                take: props.requestNumberOfItems,
                skip: props.items.length
              })
            });
            const getActions = index => index === 0 ? props.actions.filter(action => action.value !== "restore") : props.actions;
            const onAction = ({
              action,
              id,
              data
            }) => {
              shouldAutoScroll.value = false;
              emit("action", {
                action,
                id,
                data
              });
            };
            const onPreview = ({
              event,
              id
            }) => {
              shouldAutoScroll.value = false;
              emit("preview", {
                event,
                id
              });
            };
            const onItemMounted = ({
              index,
              offsetTop,
              isActive
            }) => {
              if (isActive && shouldAutoScroll.value) {
                shouldAutoScroll.value = false;
                listElement.value?.scrollTo({
                  top: offsetTop,
                  behavior: "smooth"
                });
              }
              if (index === props.items.length - 1 && props.lastReceivedItemsLength === props.requestNumberOfItems) observeForLoadMore(listElement.value?.children[index]);
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("ul", {
                ref_key: "listElement",
                ref: listElement,
                class: normalizeClass(_ctx.$style.list),
                "data-test-id": "workflow-history-list"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item$1, index) => {
                return openBlock(), createBlock(WorkflowHistoryListItem_default, {
                  key: item$1.versionId,
                  index,
                  item: item$1,
                  "is-active": item$1.versionId === props.activeItem?.versionId,
                  actions: getActions(index),
                  onAction,
                  onPreview,
                  onMounted: onItemMounted
                }, null, 8, ["index", "item", "is-active", "actions"]);
              }), 128)), !props.items.length && !props.isListLoading ? (openBlock(), createElementBlock("li", {
                key: 0,
                class: normalizeClass(_ctx.$style.empty)
              }, [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.empty")) + " ", 1), _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowHistory.hint")), 1)], 2)) : createCommentVNode("", true), props.isListLoading ? (openBlock(), createElementBlock("li", {
                key: 1,
                class: normalizeClass(_ctx.$style.loader),
                role: "status",
                "aria-live": "polite",
                "aria-busy": "true",
                "aria-label": unref(i18n).baseText("generic.loading")
              }, [createVNode(unref(N8nLoading_default), {
                rows: 3,
                class: "mb-xs"
              }), createVNode(unref(N8nLoading_default), {
                rows: 3,
                class: "mb-xs"
              }), createVNode(unref(N8nLoading_default), {
                rows: 3,
                class: "mb-xs"
              })], 10, _hoisted_1$2)) : createCommentVNode("", true), props.shouldUpgrade ? (openBlock(), createElementBlock("li", {
                key: 2,
                class: normalizeClass(_ctx.$style.retention)
              }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workflowHistory.limit", {
                interpolate: {
                  evaluatedPruneTime: String(props.evaluatedPruneTime)
                }
              })), 1), createVNode(unref(I18nT), {
                keypath: "workflowHistory.upgrade",
                tag: "span",
                scope: "global"
              }, {
                link: withCtx(() => [createBaseVNode("a", {
                  href: "#",
                  onClick: _cache[0] || (_cache[0] = $event => emit("upgrade"))
                }, toDisplayString(unref(i18n).baseText("workflowHistory.upgrade.link")), 1)]),
                _: 1
              })], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryList.vue?vue&type=style&index=0&lang.module.scss
        list = "_list_1i94b_123";
        empty = "_empty_1i94b_132";
        loader = "_loader_1i94b_145";
        retention = "_retention_1i94b_149";
        WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default = {
          list,
          empty,
          loader,
          retention
        }; //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryList.vue
        cssModules$2 = {
          "$style": WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHistoryList_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryContent.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = ["datetime"];
        _hoisted_2 = ["value"];
        WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryContent",
          props: {
            workflow: {},
            workflowVersion: {},
            actions: {},
            isListLoading: {
              type: Boolean
            },
            isFirstItemShown: {
              type: Boolean
            }
          },
          emits: ["action"],
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const props = __props;
            const emit = __emit;
            const workflowVersionPreview = computed(() => {
              if (!props.workflowVersion || !props.workflow) return;
              const {
                pinData,
                ...workflow
              } = props.workflow;
              return {
                ...workflow,
                nodes: props.workflowVersion.nodes,
                connections: props.workflowVersion.connections
              };
            });
            const actions$1 = computed(() => props.isFirstItemShown ? props.actions.filter(action => action.value !== "restore") : props.actions);
            const onAction = ({
              action,
              id,
              data
            }) => {
              emit("action", {
                action,
                id,
                data
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowPreview_default, {
                key: 0,
                workflow: workflowVersionPreview.value,
                loading: props.isListLoading,
                "loader-type": "spinner"
              }, null, 8, ["workflow", "loading"])) : createCommentVNode("", true), createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.info)
              }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowHistoryListItem_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.card),
                index: -1,
                item: props.workflowVersion,
                "is-active": false,
                actions: actions$1.value,
                onAction
              }, {
                default: withCtx(({
                  formattedCreatedAt
                }) => [createBaseVNode("section", {
                  class: normalizeClass(_ctx.$style.text)
                }, [createBaseVNode("p", null, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("workflowHistory.content.title")) + ": ", 3), createBaseVNode("time", {
                  datetime: props.workflowVersion.createdAt
                }, toDisplayString(formattedCreatedAt), 9, _hoisted_1$1)]), createBaseVNode("p", null, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("workflowHistory.content.editedBy")) + ": ", 3), createBaseVNode("span", null, toDisplayString(props.workflowVersion.authors), 1)]), createBaseVNode("p", null, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("workflowHistory.content.versionId")) + ": ", 3), createBaseVNode("data", {
                  value: props.workflowVersion.versionId
                }, toDisplayString(props.workflowVersion.versionId), 9, _hoisted_2)])], 2)]),
                "action-toggle-button": withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  size: "large",
                  "data-test-id": "action-toggle-button"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.content.actions")) + " ", 1), createVNode(unref(N8nIcon_default), {
                    class: "ml-3xs",
                    icon: "chevron-down",
                    size: "small"
                  })]),
                  _: 1
                })]),
                _: 1
              }, 8, ["class", "item", "actions"])) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryContent.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_1hiff_123";
        info = "_info_1hiff_133";
        card = "_card_1hiff_141";
        text = "_text_1hiff_146";
        label = "_label_1hiff_171";
        WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default = {
          content,
          info,
          card,
          text,
          label
        }; //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryContent.vue
        cssModules$1 = {
          "$style": WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHistoryContent_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region ../@n8n/rest-api-client/dist/api/workflowHistory.js
        import_FileSaver_min = /* @__PURE__ */__toESM(require_FileSaver_min()); //#endregion
        //#region src/features/workflows/workflowHistory/workflowHistory.store.ts
        useWorkflowHistoryStore = defineStore("workflowHistory", () => {
          const rootStore = useRootStore();
          const settingsStore = useSettingsStore();
          const workflowsStore = useWorkflowsStore();
          const licensePruneTime = computed(() => settingsStore.settings.workflowHistory.licensePruneTime);
          const pruneTime = computed(() => settingsStore.settings.workflowHistory.pruneTime);
          const evaluatedPruneTime = computed(() => Math.min(pruneTime.value, licensePruneTime.value));
          const shouldUpgrade = computed(() => licensePruneTime.value !== -1 && licensePruneTime.value === pruneTime.value);
          const getWorkflowHistory$1 = async (workflowId, queryParams) => await getWorkflowHistory(rootStore.restApiContext, workflowId, queryParams);
          const getWorkflowVersion$1 = async (workflowId, versionId) => await getWorkflowVersion(rootStore.restApiContext, workflowId, versionId);
          const downloadVersion = async (workflowId, workflowVersionId, data) => {
            const [workflow, workflowVersion] = await Promise.all([workflowsStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
            const {
              connections,
              nodes
            } = workflowVersion;
            (0, import_FileSaver_min.saveAs)(new Blob([JSON.stringify({
              ...workflow,
              nodes,
              connections
            }, null, 2)], {
              type: "application/json;charset=utf-8"
            }), `${workflow.name}(${data.formattedCreatedAt}).json`);
          };
          const cloneIntoNewWorkflow = async (workflowId, workflowVersionId, data) => {
            const [workflow, workflowVersion] = await Promise.all([workflowsStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
            const {
              connections,
              nodes
            } = workflowVersion;
            const {
              name
            } = workflow;
            const newWorkflowData = {
              nodes,
              connections,
              name: (await getNewWorkflow(rootStore.restApiContext, {
                name: `${name} (${data.formattedCreatedAt})`
              })).name
            };
            return await workflowsStore.createNewWorkflow(newWorkflowData);
          };
          const restoreWorkflow = async (workflowId, workflowVersionId, shouldDeactivate) => {
            const {
              connections,
              nodes
            } = await getWorkflowVersion$1(workflowId, workflowVersionId);
            const updateData = {
              connections,
              nodes
            };
            if (shouldDeactivate) updateData.active = false;
            return await workflowsStore.updateWorkflow(workflowId, updateData, true).catch(async error => {
              if (error.httpStatusCode === 400 && typeof error.message === "string" && error.message.includes("can not be activated")) return await workflowsStore.fetchWorkflow(workflowId);else throw new Error(error);
            });
          };
          return {
            getWorkflowHistory: getWorkflowHistory$1,
            getWorkflowVersion: getWorkflowVersion$1,
            downloadVersion,
            cloneIntoNewWorkflow,
            restoreWorkflow,
            evaluatedPruneTime,
            shouldUpgrade
          };
        }); //#endregion
        //#region src/features/workflows/workflowHistory/views/WorkflowHistory.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        WorkflowHistoryVersionRestoreModalActions = /* @__PURE__ */function (WorkflowHistoryVersionRestoreModalActions$1) {
          WorkflowHistoryVersionRestoreModalActions$1["restore"] = "restore";
          WorkflowHistoryVersionRestoreModalActions$1["deactivateAndRestore"] = "deactivateAndRestore";
          WorkflowHistoryVersionRestoreModalActions$1["cancel"] = "cancel";
          return WorkflowHistoryVersionRestoreModalActions$1;
        }(WorkflowHistoryVersionRestoreModalActions || {});
        WorkflowHistory_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistory",
          setup(__props) {
            const workflowHistoryActionTypes = ["restore", "clone", "open", "download"];
            const WORKFLOW_HISTORY_ACTIONS = workflowHistoryActionTypes.reduce((record, key) => ({
              ...record,
              [key.toUpperCase()]: key
            }), {});
            const route = useRoute();
            const router = useRouter();
            const i18n = useI18n();
            const toast = useToast();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const workflowHistoryStore = useWorkflowHistoryStore();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const canRender = ref(true);
            const isListLoading = ref(true);
            const requestNumberOfItems = ref(20);
            const lastReceivedItemsLength = ref(0);
            const activeWorkflow = ref(null);
            const workflowHistory = ref([]);
            const activeWorkflowVersion = ref(null);
            const workflowId = computed(() => normalizeSingleRouteParam("workflowId"));
            const versionId = computed(() => normalizeSingleRouteParam("versionId"));
            const editorRoute = computed(() => ({
              name: VIEWS.WORKFLOW,
              params: {
                name: workflowId.value
              }
            }));
            const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
            const actions$1 = computed(() => workflowHistoryActionTypes.map(value => ({
              label: i18n.baseText(`workflowHistory.item.actions.${value}`),
              disabled: value === "clone" && !workflowPermissions.value.create || value === "restore" && !workflowPermissions.value.update,
              value
            })));
            const isFirstItemShown = computed(() => workflowHistory.value[0]?.versionId === versionId.value);
            const evaluatedPruneTime = computed(() => Math.floor(workflowHistoryStore.evaluatedPruneTime / 24));
            const sendTelemetry = event => {
              telemetry.track(event, {
                instance_id: useRootStore().instanceId,
                workflow_id: workflowId.value
              });
            };
            const loadMore = async queryParams => {
              const history = await workflowHistoryStore.getWorkflowHistory(workflowId.value, queryParams);
              lastReceivedItemsLength.value = history.length;
              workflowHistory.value = workflowHistory.value.concat(history);
            };
            onBeforeMount(async () => {
              sendTelemetry("User opened workflow history");
              try {
                const [workflow] = await Promise.all([workflowsStore.fetchWorkflow(workflowId.value), loadMore({
                  take: requestNumberOfItems.value
                })]);
                activeWorkflow.value = workflow;
                isListLoading.value = false;
                if (!versionId.value && workflowHistory.value.length) await router.replace({
                  name: VIEWS.WORKFLOW_HISTORY,
                  params: {
                    workflowId: workflowId.value,
                    versionId: workflowHistory.value[0].versionId
                  }
                });
              } catch (error) {
                canRender.value = false;
                toast.showError(error, i18n.baseText("workflowHistory.title"));
              }
            });
            const normalizeSingleRouteParam = name => {
              const param = route.params[name];
              if (typeof param === "string") return param;
              return param?.[0] ?? "";
            };
            const openInNewTab = id => {
              const {
                href
              } = router.resolve({
                name: VIEWS.WORKFLOW_HISTORY,
                params: {
                  workflowId: workflowId.value,
                  versionId: id
                }
              });
              window.open(href, "_blank");
            };
            const openRestorationModal = async (isWorkflowActivated, formattedCreatedAt) => {
              return await new Promise((resolve, reject) => {
                const buttons = [{
                  text: i18n.baseText("workflowHistory.action.restore.modal.button.cancel"),
                  type: "tertiary",
                  action: () => {
                    resolve(WorkflowHistoryVersionRestoreModalActions.cancel);
                  }
                }];
                if (isWorkflowActivated) buttons.push({
                  text: i18n.baseText("workflowHistory.action.restore.modal.button.deactivateAndRestore"),
                  type: "tertiary",
                  action: () => {
                    resolve(WorkflowHistoryVersionRestoreModalActions.deactivateAndRestore);
                  }
                });
                buttons.push({
                  text: i18n.baseText("workflowHistory.action.restore.modal.button.restore"),
                  type: "primary",
                  action: () => {
                    resolve(WorkflowHistoryVersionRestoreModalActions.restore);
                  }
                });
                try {
                  uiStore.openModalWithData({
                    name: WORKFLOW_HISTORY_VERSION_RESTORE,
                    data: {
                      beforeClose: () => {
                        resolve(WorkflowHistoryVersionRestoreModalActions.cancel);
                      },
                      isWorkflowActivated,
                      formattedCreatedAt,
                      buttons
                    }
                  });
                } catch (error) {
                  reject(error);
                }
              });
            };
            const cloneWorkflowVersion = async (id, data) => {
              const clonedWorkflow = await workflowHistoryStore.cloneIntoNewWorkflow(workflowId.value, id, data);
              const {
                href
              } = router.resolve({
                name: VIEWS.WORKFLOW,
                params: {
                  name: clonedWorkflow.id
                }
              });
              toast.showMessage({
                title: i18n.baseText("workflowHistory.action.clone.success.title"),
                message: h("a", {
                  href,
                  target: "_blank"
                }, i18n.baseText("workflowHistory.action.clone.success.message")),
                type: "success",
                duration: 1e4
              });
            };
            const restoreWorkflowVersion = async (id, data) => {
              const modalAction = await openRestorationModal((await workflowsStore.fetchWorkflow(workflowId.value)).active, data.formattedCreatedAt);
              if (modalAction === WorkflowHistoryVersionRestoreModalActions.cancel) return;
              activeWorkflow.value = await workflowHistoryStore.restoreWorkflow(workflowId.value, id, modalAction === WorkflowHistoryVersionRestoreModalActions.deactivateAndRestore);
              workflowHistory.value = (await workflowHistoryStore.getWorkflowHistory(workflowId.value, {
                take: 1
              })).concat(workflowHistory.value);
              toast.showMessage({
                title: i18n.baseText("workflowHistory.action.restore.success.title"),
                type: "success"
              });
            };
            const onAction = async ({
              action,
              id,
              data
            }) => {
              try {
                switch (action) {
                  case WORKFLOW_HISTORY_ACTIONS.OPEN:
                    openInNewTab(id);
                    sendTelemetry("User opened version in new tab");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.DOWNLOAD:
                    await workflowHistoryStore.downloadVersion(workflowId.value, id, data);
                    sendTelemetry("User downloaded version");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.CLONE:
                    await cloneWorkflowVersion(id, data);
                    sendTelemetry("User cloned version");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.RESTORE:
                    await restoreWorkflowVersion(id, data);
                    sendTelemetry("User restored version");
                    break;
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("workflowHistory.action.error.title", {
                  interpolate: {
                    action: i18n.baseText(`workflowHistory.item.actions.${action}`).toLowerCase()
                  }
                }));
              }
            };
            const onPreview = async ({
              event,
              id
            }) => {
              if (event.metaKey || event.ctrlKey) {
                openInNewTab(id);
                sendTelemetry("User opened version in new tab");
              } else await router.push({
                name: VIEWS.WORKFLOW_HISTORY,
                params: {
                  workflowId: workflowId.value,
                  versionId: id
                }
              });
            };
            const onUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
            };
            watchEffect(async () => {
              if (!versionId.value) return;
              try {
                const [workflowVersion, workflow] = await Promise.all([workflowHistoryStore.getWorkflowVersion(workflowId.value, versionId.value), workflowsStore.fetchWorkflow(workflowId.value)]);
                activeWorkflowVersion.value = workflowVersion;
                activeWorkflow.value = workflow;
                sendTelemetry("User selected version");
              } catch (error) {
                if (error.message?.includes("version")) toast.showError(/* @__PURE__ */new Error(`${error.message} "${versionId.value}"&nbsp;`), i18n.baseText("workflowHistory.title"));else {
                  canRender.value = false;
                  toast.showError(error, i18n.baseText("workflowHistory.title"));
                }
              }
            });
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.view)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(activeWorkflow.value?.name), 1)]),
                _: 1
              }), activeWorkflow.value?.isArchived ? (openBlock(), createElementBlock("span", _hoisted_1, [createVNode(unref(N8nBadge_default), {
                class: "ml-s",
                theme: "tertiary",
                bold: "",
                "data-test-id": "workflow-archived-tag"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.archived")), 1)]),
                _: 1
              })])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.corner)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.title")), 1)]),
                _: 1
              }), createVNode(_component_RouterLink, {
                to: editorRoute.value,
                "data-test-id": "workflow-history-close-button"
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  icon: "x",
                  size: "small",
                  text: "",
                  square: ""
                })]),
                _: 1
              }, 8, ["to"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.listComponentWrapper)
              }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryList_default, {
                key: 0,
                items: workflowHistory.value,
                "last-received-items-length": lastReceivedItemsLength.value,
                "active-item": activeWorkflowVersion.value,
                actions: actions$1.value,
                "request-number-of-items": requestNumberOfItems.value,
                "should-upgrade": unref(workflowHistoryStore).shouldUpgrade,
                "evaluated-prune-time": evaluatedPruneTime.value,
                "is-list-loading": isListLoading.value,
                onAction,
                onPreview,
                onLoadMore: loadMore,
                onUpgrade
              }, null, 8, ["items", "last-received-items-length", "active-item", "actions", "request-number-of-items", "should-upgrade", "evaluated-prune-time", "is-list-loading"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.contentComponentWrapper)
              }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryContent_default, {
                key: 0,
                workflow: activeWorkflow.value,
                "workflow-version": activeWorkflowVersion.value,
                actions: actions$1.value,
                "is-list-loading": isListLoading.value,
                "is-first-item-shown": isFirstItemShown.value,
                onAction
              }, null, 8, ["workflow", "workflow-version", "actions", "is-list-loading", "is-first-item-shown"])) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/views/WorkflowHistory.vue?vue&type=style&index=0&lang.module.scss
        view = "_view_ley84_123";
        header = "_header_ley84_133";
        corner = "_corner_ley84_141";
        contentComponentWrapper = "_contentComponentWrapper_ley84_152";
        listComponentWrapper = "_listComponentWrapper_ley84_157";
        WorkflowHistory_vue_vue_type_style_index_0_lang_module_default = {
          view,
          header,
          corner,
          contentComponentWrapper,
          listComponentWrapper
        }; //#endregion
        //#region src/features/workflows/workflowHistory/views/WorkflowHistory.vue
        cssModules = {
          "$style": WorkflowHistory_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", WorkflowHistory_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistory_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();