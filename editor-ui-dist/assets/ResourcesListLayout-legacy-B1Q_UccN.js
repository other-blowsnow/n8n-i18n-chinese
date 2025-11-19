;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./useDebounce-legacy-IwiEyerO.js", "./EnterpriseEdition.ee-legacy-Dc4zPsd3.js", "./ProjectSharing-legacy-whwJ1PEb.js", "./readyToRunWorkflowsV2.store-legacy-C5SMFEOl.js", "./PageViewLayout-legacy-B1As2gDz.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, guardReactiveProps, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, renderList, createTextVNode, vShow, useSlots, onBeforeMount, normalizeProps, createBaseVNode, withDirectives, useI18n, useLocalStorage, N8nInput_default, N8nActionBox_default, N8nOption_default, N8nDatatable_default, N8nText_default, N8nButton_default, N8nInfoTip_default, N8nSelect_default, N8nInputLabel_default, N8nRecycleScroller_default, N8nLoading_default, N8nBadge_default, ElPagination, N8nLink_default, N8nPopover_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useRoute, useProjectsStore, isSharedResource, useUsersStore, isResourceSortableByDate, useTelemetry, isBaseTextKey, EnterpriseEditionFeature, LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, useDebounce, EnterpriseEdition_ee_default, ProjectSharing_default, useProjectPages, PageViewLayout_default, __vite_style__, PageViewLayoutList_vue_vue_type_script_setup_true_lang_default, wrapper, overflow, list, body, PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default, cssModules$2, PageViewLayoutList_default, ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ResourceFiltersDropdown_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, ResourcesListLayout_vue_vue_type_script_setup_true_lang_default, filters, search, listWrapper, paginatedListWrapper, listItems, listPagination, datatable, ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default, cssModules, ResourcesListLayout_default;
    //#endregion
    //#region src/app/composables/useN8nLocalStorage.ts
    /**
    * Simple n8n wrapper around vueuse's useLocalStorage.
    * Provides util functions to read and write n8n values to local storage.
    * Currently only used for workflow list user preferences.
    */
    function useN8nLocalStorage() {
      const projectPages = useProjectPages();
      const getProjectKey = projectId => {
        return projectPages.isOverviewSubPage ? "home" : projectId;
      };
      const saveProjectPreferencesToLocalStorage = (projectId, tabKey, preferences) => {
        const projectKey = getProjectKey(projectId);
        if (!projectKey) return;
        const localStorage = useLocalStorage(LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, {});
        if (!localStorage.value[projectKey]) localStorage.value[projectKey] = {};
        localStorage.value[projectKey][tabKey] = {
          ...localStorage.value[projectKey][tabKey],
          ...preferences
        };
      };
      const loadProjectPreferencesFromLocalStorage = (projectId, tabKey) => {
        const projectKey = getProjectKey(projectId);
        if (!projectKey) return {};
        return useLocalStorage("N8N_WORKFLOWS_LIST_PREFERENCES", {}).value[projectKey]?.[tabKey] || {};
      };
      return {
        saveProjectPreferencesToLocalStorage,
        loadProjectPreferencesFromLocalStorage,
        getProjectKey
      };
    }

    //#endregion
    //#region src/app/composables/useResourcesListI18n.ts
    /**
    * Composable for handling i18n in ResourcesListLayout with dynamic resource keys
    * It provides fallback functionality for translation keys
    */
    function useResourcesListI18n(resourceKey) {
      const i18n = useI18n();
      /**
      * Get a translated text with fallback support for dynamic resource keys
      * First tries the specific resource key, then falls back to generic keys
      */
      const getResourceText = (keySuffix, fallbackKeySuffix, interpolate) => {
        const specificKey = `${resourceKey}.${keySuffix}`;
        const genericKey = `resources.${keySuffix}`;
        const fallbackKey = fallbackKeySuffix ? `resources.${fallbackKeySuffix}` : void 0;
        if (isBaseTextKey(specificKey)) return i18n.baseText(specificKey, {
          interpolate
        });
        if (isBaseTextKey(genericKey)) return i18n.baseText(genericKey, {
          interpolate
        });
        if (fallbackKey && isBaseTextKey(fallbackKey)) return i18n.baseText(fallbackKey, {
          interpolate
        });
        return keySuffix.split(".").pop()?.replace(/([A-Z])/g, " $1").trim() || keySuffix;
      };
      return {
        getResourceText
      };
    }

    //#endregion
    //#region src/app/components/layouts/ResourcesListLayout.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        guardReactiveProps = _vueRuntimeEsmBundlerLegacy003Js.I;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        useSlots = _vueRuntimeEsmBundlerLegacy003Js.pt;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nOption_default = _srcLegacy007Js.G;
        N8nDatatable_default = _srcLegacy007Js.H;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nInputLabel_default = _srcLegacy007Js.Y;
        N8nRecycleScroller_default = _srcLegacy007Js.b;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nBadge_default = _srcLegacy007Js.it;
        ElPagination = _srcLegacy007Js.jt;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nPopover_default = _srcLegacy007Js.w;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00FJs) {
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        isSharedResource = _useTelemetryLegacy00FJs.dr;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        isResourceSortableByDate = _useTelemetryLegacy00FJs.lr;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        isBaseTextKey = _useTelemetryLegacy00FJs.tr;
      }, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY = _constantsLegacy00NJs.ms;
      }, function (_useDebounceLegacy00VJs) {
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_EnterpriseEditionEeLegacy02DJs) {
        EnterpriseEdition_ee_default = _EnterpriseEditionEeLegacy02DJs.t;
      }, function (_ProjectSharingLegacy02LJs) {
        ProjectSharing_default = _ProjectSharingLegacy02LJs.t;
      }, function (_readyToRunWorkflowsV2StoreLegacy03XJs) {
        useProjectPages = _readyToRunWorkflowsV2StoreLegacy03XJs.n;
      }, function (_PageViewLayoutLegacy04jJs) {
        PageViewLayout_default = _PageViewLayoutLegacy04jJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_hn9dc_123 {\n  display: grid;\n  height: 100%;\n}\n._overflow_hn9dc_128 ._list_hn9dc_128 ._body_hn9dc_128 {\n  overflow: auto;\n}\n._list_hn9dc_128 {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  height: 100%;\n}\n._list_hn9dc_128 ._body_hn9dc_128 {\n  position: relative;\n  height: 100%;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._filter-button_1mymx_123 {\n  height: 30px;\n  align-items: center;\n}\n._filter-button_1mymx_123._no-label_1mymx_127 {\n  width: 30px;\n}\n._filter-button_1mymx_123._no-label_1mymx_127 span + span {\n  margin: 0;\n}\n._filter-button_1mymx_123 ._filter-button-count_1mymx_133 {\n  margin-right: var(--spacing--4xs);\n}\n@media screen and (max-width: 767px) {\n._filter-button_1mymx_123 ._filter-button-count_1mymx_133 {\n    margin-right: 0;\n}\n}\n@media screen and (max-width: 480px) {\n._filter-button_1mymx_123 ._filter-button-text_1mymx_142 {\n    text-indent: -10000px;\n}\n._filter-button_1mymx_123 span + span {\n    margin: 0;\n}\n}\n._filters-dropdown_1mymx_150 {\n  width: 280px;\n}\n._filters-dropdown-footer_1mymx_154 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._filters-row_lkzqj_123 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  gap: var(--spacing--2xs);\n}\n._filters_lkzqj_123 {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr max-content max-content max-content;\n  gap: var(--spacing--4xs);\n  align-items: center;\n  justify-content: end;\n  width: 100%;\n}\n._filters_lkzqj_123 ._sort-and-filter_lkzqj_141 {\n  display: flex;\n  gap: var(--spacing--4xs);\n  align-items: center;\n}\n@media screen and (max-width: 767px) {\n._filters_lkzqj_123 {\n    grid-auto-flow: row;\n    grid-auto-columns: unset;\n    grid-template-columns: 1fr;\n}\n}\n._search_lkzqj_154 {\n  max-width: 196px;\n  justify-self: end;\n}\n._search_lkzqj_154 input {\n  height: 30px;\n}\n@media screen and (max-width: 991px) {\n._search_lkzqj_154 {\n    max-width: 100%;\n}\n}\n._listWrapper_lkzqj_167 {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n._paginatedListWrapper_lkzqj_173 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  gap: var(--spacing--md);\n}\n._listItems_lkzqj_181 {\n  overflow-y: auto;\n}\n._listPagination_lkzqj_185 {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--spacing--lg);\n}\n._listPagination_lkzqj_185 .el-pagination__sizes {\n  height: 100%;\n  position: relative;\n  top: -1px;\n}\n._listPagination_lkzqj_185 .el-pagination__sizes input {\n  height: 100%;\n  min-height: 28px;\n}\n._listPagination_lkzqj_185 .el-pagination__sizes .el-input__suffix {\n  width: var(--spacing--md);\n}\n._sort-and-filter_lkzqj_141 {\n  white-space: nowrap;\n}\n@media screen and (max-width: 991px) {\n._sort-and-filter_lkzqj_141 {\n    width: 100%;\n}\n}\n._datatable_lkzqj_212 {\n  padding-bottom: var(--spacing--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.resource-list-loading[data-v-b3f25b76] {\n  position: relative;\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n  /*\n  Show the loading skeleton only if the loading takes longer than 300ms\n  */\n  animation: 0.01s linear 0.3s forwards changeVisibility-b3f25b76;\n}\n.resource-list-loading[data-v-b3f25b76] .el-skeleton {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.resource-list-loading[data-v-b3f25b76] .el-skeleton > div > div:first-child .el-skeleton__item {\n  height: 42px;\n  margin: 0;\n}\n.resource-list-loading[data-v-b3f25b76] .el-skeleton .el-skeleton__item {\n  height: 69px;\n}\n.resource-list-loading-instant[data-v-b3f25b76] {\n  animation: 0.01s linear 0s forwards changeVisibility-b3f25b76;\n}\n@keyframes changeVisibility-b3f25b76 {\nfrom {\n    height: 0;\n}\nto {\n    height: 100%;\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/layouts/PageViewLayoutList.vue?vue&type=script&setup=true&lang.ts
        PageViewLayoutList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "PageViewLayoutList",
          props: {
            overflow: {
              type: Boolean
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  [_ctx.$style.wrapper]: true,
                  [_ctx.$style.overflow]: _ctx.overflow
                })
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.list)
              }, [_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.header)
              }, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.body)
              }, [renderSlot(_ctx.$slots, "default")], 2)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/layouts/PageViewLayoutList.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_hn9dc_123";
        overflow = "_overflow_hn9dc_128";
        list = "_list_hn9dc_128";
        body = "_body_hn9dc_128";
        PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          overflow,
          list,
          body
        }; //#endregion
        //#region src/app/components/layouts/PageViewLayoutList.vue
        cssModules$2 = {
          "$style": PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default
        };
        PageViewLayoutList_default = /* @__PURE__ */__plugin_vue_export_helper_default(PageViewLayoutList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/app/components/forms/ResourceFiltersDropdown.vue?vue&type=script&setup=true&lang.ts
        ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ResourceFiltersDropdown",
          props: {
            modelValue: {
              default: () => ({})
            },
            keys: {
              default: () => []
            },
            shareable: {
              type: Boolean,
              default: true
            },
            reset: {
              type: Function,
              default: () => {}
            },
            justIcon: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:modelValue", "update:filtersLength"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const projectsStore = useProjectsStore();
            const i18n = useI18n();
            const selectedProject = computed({
              get: () => {
                return projectsStore.availableProjects.find(project => project.id === props.modelValue.homeProject) ?? null;
              },
              set: value => setKeyValue("homeProject", value?.id ?? "")
            });
            const filtersLength = computed(() => {
              let length = 0;
              props.keys.forEach(key => {
                if (key === "search") return;
                const value = props.modelValue[key];
                if (value === true) length += 1;
                if (Array.isArray(value) && value.length) length += 1;
                if (typeof value === "string" && value !== "") length += 1;
              });
              return length;
            });
            const hasFilters = computed(() => filtersLength.value > 0);
            const setKeyValue = (key, value) => {
              emit("update:modelValue", {
                ...props.modelValue,
                [key]: value
              });
            };
            const resetFilters = () => {
              if (props.reset) props.reset();else {
                const filters$1 = {
                  ...props.modelValue
                };
                props.keys.forEach(key => {
                  filters$1[key] = Array.isArray(props.modelValue[key]) ? [] : "";
                });
                emit("update:modelValue", filters$1);
              }
              selectedProject.value = null;
            };
            watch(filtersLength, value => {
              emit("update:filtersLength", value);
            });
            onBeforeMount(async () => {
              await projectsStore.getAvailableProjects();
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nPopover_default), {
                trigger: "click",
                width: "304",
                size: "large"
              }, {
                reference: withCtx(() => [createVNode(unref(N8nButton_default), {
                  icon: "funnel",
                  type: "tertiary",
                  size: "small",
                  active: hasFilters.value,
                  class: normalizeClass({
                    [_ctx.$style["filter-button"]]: true,
                    [_ctx.$style["no-label"]]: _ctx.justIcon && filtersLength.value === 0
                  }),
                  "data-test-id": "resources-list-filters-trigger"
                }, {
                  default: withCtx(() => [filtersLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 0,
                    class: normalizeClass(_ctx.$style["filter-button-count"]),
                    "data-test-id": "resources-list-filters-count",
                    theme: "primary"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true), !_ctx.justIcon ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.$style["filter-button-text"])
                  }, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["active", "class"])]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["filters-dropdown"]),
                  "data-test-id": "resources-list-filters-dropdown"
                }, [renderSlot(_ctx.$slots, "default", {
                  filters: _ctx.modelValue,
                  setKeyValue
                }), _ctx.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(EnterpriseEdition_ee_default, {
                  key: 0,
                  features: [unref(EnterpriseEditionFeature).Sharing]
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
                    label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
                    bold: false,
                    size: "small",
                    color: "text-base",
                    class: "mb-3xs"
                  }, null, 8, ["label"]), createVNode(ProjectSharing_default, {
                    modelValue: selectedProject.value,
                    "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => selectedProject.value = $event), _cache[1] || (_cache[1] = $event => setKeyValue("homeProject", $event.id))],
                    projects: unref(projectsStore).availableProjects,
                    placeholder: unref(i18n).baseText("forms.resourceFiltersDropdown.owner.placeholder"),
                    "empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects")
                  }, null, 8, ["modelValue", "projects", "placeholder", "empty-options-text"])]),
                  _: 1
                }, 8, ["features"])) : createCommentVNode("", true), hasFilters.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
                }, [createVNode(unref(N8nLink_default), {
                  onClick: resetFilters
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
                  _: 1
                })], 2)) : createCommentVNode("", true)], 2)]),
                _: 3
              });
            };
          }
        }); //#endregion
        //#region src/app/components/forms/ResourceFiltersDropdown.vue?vue&type=style&index=0&lang.module.scss
        ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default = {
          "filter-button": "_filter-button_1mymx_123",
          "no-label": "_no-label_1mymx_127",
          "filter-button-count": "_filter-button-count_1mymx_133",
          "filter-button-text": "_filter-button-text_1mymx_142",
          "filters-dropdown": "_filters-dropdown_1mymx_150",
          "filters-dropdown-footer": "_filters-dropdown-footer_1mymx_154"
        }; //#endregion
        //#region src/app/components/forms/ResourceFiltersDropdown.vue
        cssModules$1 = {
          "$style": ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default
        };
        ResourceFiltersDropdown_default = /* @__PURE__ */__plugin_vue_export_helper_default(ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]);
        _hoisted_1 = {
          key: 0,
          class: "resource-list-loading"
        };
        _hoisted_2 = {
          key: 0
        };
        _hoisted_3 = {
          key: 0,
          class: "mt-xs",
          "data-test-id": "resources-list-filters-applied-info"
        };
        _hoisted_4 = {
          key: 0,
          class: "resource-list-loading resource-list-loading-instant"
        };
        ResourcesListLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ResourcesListLayout",
          props: {
            resourceKey: {},
            displayName: {
              type: Function,
              default: resource => resource.name || ""
            },
            resources: {},
            disabled: {
              type: Boolean
            },
            initialize: {
              type: Function,
              default: async () => {}
            },
            filters: {
              default: () => ({
                search: "",
                homeProject: ""
              })
            },
            additionalFiltersHandler: {
              type: Function,
              default: void 0
            },
            shareable: {
              type: Boolean,
              default: true
            },
            sortFns: {
              default: () => ({})
            },
            sortOptions: {
              default: () => ["lastUpdated", "lastCreated", "nameAsc", "nameDesc"]
            },
            type: {
              default: "list-full"
            },
            typeProps: {
              default: () => ({
                itemSize: 80
              })
            },
            loading: {
              type: Boolean,
              default: true
            },
            customPageSize: {
              default: 25
            },
            availablePageSizeOptions: {
              default: () => [10, 25, 50, 100]
            },
            totalItems: {
              default: 0
            },
            resourcesRefreshing: {
              type: Boolean,
              default: false
            },
            dontPerformSortingAndFiltering: {
              type: Boolean,
              default: false
            },
            hasEmptyState: {
              type: Boolean,
              default: true
            },
            uiConfig: {
              default: () => ({
                searchEnabled: true,
                showFiltersDropdown: true,
                sortEnabled: true
              })
            }
          },
          emits: ["update:filters", "click:add", "update:pagination-and-sort", "update:search"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const route = useRoute();
            const router = useRouter();
            const {
              callDebounced
            } = useDebounce();
            const usersStore = useUsersStore();
            const telemetry = useTelemetry();
            const n8nLocalStorage = useN8nLocalStorage();
            const props = __props;
            const {
              getResourceText
            } = useResourcesListI18n(props.resourceKey);
            const sortBy = ref(props.sortOptions[0]);
            const hasFilters = ref(false);
            const currentPage = ref(1);
            const rowsPerPage = ref(props.customPageSize);
            const resettingFilters = ref(false);
            const search$1 = ref(null);
            const listWrapperRef = ref(null);
            const listItemsRef = ref(null);
            const preferredPageSize = ref(props.customPageSize);
            const preferredSort = ref(props.sortOptions[0]);
            const emit = __emit;
            useSlots();
            const filtersModel = computed({
              get: () => props.filters,
              set: newValue => emit("update:filters", newValue)
            });
            const showEmptyState = computed(() => {
              return props.hasEmptyState && props.resources.length === 0 && !hasFilters.value && !filtersModel.value.search && !props.resourcesRefreshing;
            });
            const filterKeys = computed(() => {
              return Object.keys(filtersModel.value);
            });
            const filteredAndSortedResources = computed(() => {
              if (props.dontPerformSortingAndFiltering) return props.resources;
              return props.resources.filter(resource => {
                let matches = true;
                if (filtersModel.value.homeProject && isSharedResource(resource)) matches = matches && !!("homeProject" in resource && resource.homeProject && resource.homeProject.id === filtersModel.value.homeProject);
                if (filtersModel.value.search) {
                  const searchString = filtersModel.value.search.toLowerCase();
                  matches = matches && props.displayName(resource).toLowerCase().includes(searchString);
                }
                if (props.additionalFiltersHandler) matches = props.additionalFiltersHandler(resource, filtersModel.value, matches);
                return matches;
              }).sort((a, b) => {
                const sortableByDate = isResourceSortableByDate(a) && isResourceSortableByDate(b);
                switch (sortBy.value) {
                  case "lastUpdated":
                    if (!sortableByDate) return 0;
                    if ("updatedAt" in a && "updatedAt" in b) return props.sortFns.lastUpdated ? props.sortFns.lastUpdated(a, b) : new Date(b.updatedAt ?? "").valueOf() - new Date(a.updatedAt ?? "").valueOf();
                    return 0;
                  case "lastCreated":
                    if (!sortableByDate) return 0;
                    if ("createdAt" in a && "createdAt" in b) return props.sortFns.lastCreated ? props.sortFns.lastCreated(a, b) : new Date(b.createdAt ?? "").valueOf() - new Date(a.createdAt ?? "").valueOf();
                    return 0;
                  case "nameAsc":
                    return props.sortFns.nameAsc ? props.sortFns.nameAsc(a, b) : props.displayName(a).trim().localeCompare(props.displayName(b).trim());
                  case "nameDesc":
                    return props.sortFns.nameDesc ? props.sortFns.nameDesc(a, b) : props.displayName(b).trim().localeCompare(props.displayName(a).trim());
                  default:
                    return props.sortFns[sortBy.value] ? props.sortFns[sortBy.value](a, b) : 0;
                }
              });
            });
            watch(() => props.filters, value => {
              filtersModel.value = value;
              if (hasAppliedFilters()) hasFilters.value = true;
            });
            watch(() => filtersModel.value.homeProject, () => {
              sendFiltersTelemetry("homeProject");
            });
            watch(() => filtersModel.value.tags, () => {
              sendFiltersTelemetry("tags");
            });
            watch(() => filtersModel.value.type, () => {
              sendFiltersTelemetry("type");
            });
            watch(() => filtersModel.value.search, () => callDebounced(sendFiltersTelemetry, {
              debounceTime: 1e3,
              trailing: true
            }, "search"));
            watch(() => filtersModel.value.setupNeeded, () => {
              sendFiltersTelemetry("setupNeeded");
            });
            watch(() => filtersModel.value.incomplete, () => {
              sendFiltersTelemetry("incomplete");
            });
            watch([() => route.params?.projectId, () => route.name], async () => {
              await resetFilters();
              await loadPaginationPreferences();
              await props.initialize();
            });
            onMounted(async () => {
              await loadPaginationPreferences();
              await props.initialize();
              await nextTick();
              if (hasAppliedFilters()) hasFilters.value = true;
              window.addEventListener("keydown", captureSearchHotKey);
            });
            onBeforeUnmount(() => {
              window.removeEventListener("keydown", captureSearchHotKey);
            });
            const captureSearchHotKey = e => {
              if ((e.ctrlKey || e.metaKey) && e.key === "f") {
                e.preventDefault();
                focusSearchInput();
              }
            };
            const focusSearchInput = () => {
              if (search$1.value) search$1.value.focus();
            };
            const isFilterApplied = key => {
              if (key === "search") return false;
              if (typeof props.filters[key] === "boolean") return props.filters[key];
              if (Array.isArray(props.filters[key])) return props.filters[key].length > 0;
              return props.filters[key] !== "";
            };
            const hasOnlyFiltersThatShowMoreResults = computed(() => {
              const activeFilters = filterKeys.value.filter(isFilterApplied);
              const filtersThatShowMoreResults = ["showArchived"];
              return activeFilters.every(filter => {
                return filtersThatShowMoreResults.includes(filter);
              });
            });
            const hasAppliedFilters = () => {
              return !!filterKeys.value.find(isFilterApplied);
            };
            const setRowsPerPage = async numberOfRowsPerPage => {
              rowsPerPage.value = numberOfRowsPerPage;
              await savePaginationPreferences();
              emit("update:pagination-and-sort", {
                pageSize: numberOfRowsPerPage
              });
            };
            const setSorting = async (sort, persistUpdate = true) => {
              sortBy.value = sort;
              if (persistUpdate) {
                await savePaginationPreferences();
                sendSortingTelemetry();
              }
              emit("update:pagination-and-sort", {
                sort
              });
            };
            const setCurrentPage = async (page, persistUpdate = true) => {
              currentPage.value = page;
              if (persistUpdate) await savePaginationPreferences();
              emit("update:pagination-and-sort", {
                page
              });
            };
            const sendFiltersTelemetry = source => {
              if (resettingFilters.value) {
                if (source !== "reset") return;
                setTimeout(() => resettingFilters.value = false, 1500);
              }
              const filters$1 = filtersModel.value;
              const filtersSet = [];
              const filterValues = [];
              Object.keys(filters$1).forEach(key => {
                if (filters$1[key]) {
                  filtersSet.push(key);
                  filterValues.push(key === "search" ? null : filters$1[key]);
                }
              });
              telemetry.track(`User set filters in ${props.resourceKey} list`, {
                filters_set: filtersSet,
                filter_values: filterValues,
                [`${props.resourceKey}_total_in_view`]: props.resources.length,
                [`${props.resourceKey}_after_filtering`]: filteredAndSortedResources.value.length
              });
            };
            const onAddButtonClick = e => {
              emit("click:add", e);
            };
            const onUpdateFilters = e => {
              emit("update:filters", e);
            };
            const resetFilters = async () => {
              Object.keys(filtersModel.value).forEach(key => {
                filtersModel.value[key] = Array.isArray(filtersModel.value[key]) ? [] : "";
              });
              await setCurrentPage(1, false);
              resettingFilters.value = true;
              hasFilters.value = false;
              sendFiltersTelemetry("reset");
              emit("update:filters", filtersModel.value);
            };
            const itemSize = () => {
              if ("itemSize" in props.typeProps) return props.typeProps.itemSize;
              return 0;
            };
            const getColumns = () => {
              if ("columns" in props.typeProps) return props.typeProps.columns;
              return [];
            };
            const sendSortingTelemetry = () => {
              telemetry.track(`User changed sorting in ${props.resourceKey} list`, {
                sorting: sortBy.value
              });
            };
            const onUpdateFiltersLength = length => {
              hasFilters.value = length > 0;
            };
            const onSearch = s => {
              filtersModel.value.search = s;
              emit("update:search", s);
            };
            const findNearestPageSize = size => {
              return props.availablePageSizeOptions.reduce((prev, curr) => Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev);
            };
            /**
            * Saves the current pagination preferences to local storage and updates the URL query parameters.
            */
            const savePaginationPreferences = async () => {
              if (props.type !== "list-paginated") return;
              const currentQuery = {
                ...route.query
              };
              if (currentPage.value !== 1) currentQuery.page = currentPage.value.toString();else delete currentQuery.page;
              if (rowsPerPage.value !== preferredPageSize.value) {
                currentQuery.pageSize = rowsPerPage.value.toString();
                preferredPageSize.value = rowsPerPage.value;
              } else delete currentQuery.pageSize;
              if (sortBy.value !== preferredSort.value) {
                currentQuery.sort = sortBy.value;
                preferredSort.value = sortBy.value;
              } else delete currentQuery.sort;
              n8nLocalStorage.saveProjectPreferencesToLocalStorage(route.params.projectId ?? "", "workflows", {
                sort: sortBy.value,
                pageSize: rowsPerPage.value
              });
              await router.replace({
                query: Object.keys(currentQuery).length ? currentQuery : void 0
              });
            };
            /**
            * Loads the pagination preferences from local storage or URL query parameter
            * Current page is only saved in the URL query parameters
            * Page size and sort are saved both in local storage and URL query parameters, with query parameters taking precedence
            */
            const loadPaginationPreferences = async () => {
              if (props.type !== "list-paginated") return;
              const query = route.query;
              const localStorageValues = n8nLocalStorage.loadProjectPreferencesFromLocalStorage(route.params.projectId ?? "", "workflows");
              const emitPayload = {};
              if (query.page) {
                const newPage = parseInt(query.page, 10);
                if (newPage > 1) {
                  currentPage.value = newPage;
                  emitPayload.page = newPage;
                }
              }
              if (query.pageSize ?? localStorageValues.pageSize) {
                const newPageSize = findNearestPageSize(parseInt(query.pageSize || String(localStorageValues.pageSize), 10));
                rowsPerPage.value = newPageSize;
                emitPayload.pageSize = newPageSize;
                preferredPageSize.value = newPageSize;
              } else {
                rowsPerPage.value = props.customPageSize;
                emitPayload.pageSize = props.customPageSize;
              }
              if (query.sort) sortBy.value = emitPayload.sort = preferredSort.value = query.sort;else if (localStorageValues.sort) {
                await setSorting(localStorageValues.sort, false);
                emitPayload.sort = localStorageValues.sort;
                preferredSort.value = localStorageValues.sort;
              } else sortBy.value = props.sortOptions[0];
              emit("update:pagination-and-sort", emitPayload);
            };
            const getScrollContainer = () => {
              if (props.type === "list-paginated") return listItemsRef.value ?? null;
              return listWrapperRef.value ?? null;
            };
            __expose({
              currentPage,
              setCurrentPage,
              getScrollContainer
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(PageViewLayout_default, null, {
                header: withCtx(() => [renderSlot(_ctx.$slots, "header", {}, void 0, true)]),
                default: withCtx(() => [_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
                  rows: 25,
                  "shrink-last": false
                })])) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [showEmptyState.value ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "empty", {}, () => [createVNode(unref(N8nActionBox_default), {
                  "data-test-id": "empty-resources-list",
                  emoji: "👋",
                  heading: unref(getResourceText)(unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup", unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup", {
                    name: unref(usersStore).currentUser?.firstName ?? ""
                  }),
                  description: unref(getResourceText)("empty.description"),
                  "button-text": unref(getResourceText)("empty.button"),
                  "button-type": "secondary",
                  "button-disabled": _ctx.disabled,
                  "onClick:button": onAddButtonClick
                }, {
                  disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("empty.button.disabled.tooltip")), 1)]),
                  _: 1
                }, 8, ["heading", "description", "button-text", "button-disabled"])], true)])) : (openBlock(), createBlock(PageViewLayoutList_default, {
                  key: 1
                }, {
                  header: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["filters-row"])
                  }, [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.filters)
                  }, [renderSlot(_ctx.$slots, "breadcrumbs", {}, void 0, true), props.uiConfig.searchEnabled ? (openBlock(), createBlock(unref(N8nInput_default), {
                    key: 0,
                    ref_key: "search",
                    ref: search$1,
                    "model-value": filtersModel.value.search,
                    class: normalizeClass(_ctx.$style.search),
                    placeholder: unref(getResourceText)("search.placeholder", "search.placeholder"),
                    size: "small",
                    clearable: "",
                    "data-test-id": "resources-list-search",
                    "onUpdate:modelValue": onSearch
                  }, {
                    prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
                      icon: "search"
                    })]),
                    _: 1
                  }, 8, ["model-value", "class", "placeholder"])) : createCommentVNode("", true), props.uiConfig.sortEnabled ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(_ctx.$style["sort-and-filter"])
                  }, [createVNode(unref(N8nSelect_default), {
                    modelValue: sortBy.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => sortBy.value = $event),
                    size: "small",
                    "data-test-id": "resources-list-sort",
                    onChange: _cache[1] || (_cache[1] = $event => setSorting(sortBy.value))
                  }, {
                    default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sortOptions, sortOption => {
                      return openBlock(), createBlock(unref(N8nOption_default), {
                        key: sortOption,
                        "data-test-id": "resources-list-sort-item",
                        value: sortOption,
                        label: unref(getResourceText)(`sort.${sortOption}`, `sort.${sortOption}`)
                      }, null, 8, ["value", "label"]);
                    }), 128))]),
                    _: 1
                  }, 8, ["modelValue"])], 2)) : createCommentVNode("", true), props.uiConfig.showFiltersDropdown ? (openBlock(), createElementBlock("div", {
                    key: 2,
                    class: normalizeClass(_ctx.$style["sort-and-filter"])
                  }, [createVNode(ResourceFiltersDropdown_default, {
                    keys: filterKeys.value,
                    reset: resetFilters,
                    "model-value": filtersModel.value,
                    shareable: _ctx.shareable,
                    "just-icon": true,
                    "onUpdate:modelValue": onUpdateFilters,
                    "onUpdate:filtersLength": onUpdateFiltersLength
                  }, {
                    default: withCtx(resourceFiltersSlotProps => [renderSlot(_ctx.$slots, "filters", normalizeProps(guardReactiveProps(resourceFiltersSlotProps)), void 0, true)]),
                    _: 3
                  }, 8, ["keys", "model-value", "shareable"]), renderSlot(_ctx.$slots, "add-button", {}, void 0, true)], 2)) : createCommentVNode("", true)], 2)], 2), renderSlot(_ctx.$slots, "callout", {}, void 0, true), props.uiConfig.showFiltersDropdown ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nInfoTip_default), {
                    bold: false
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(hasOnlyFiltersThatShowMoreResults.value ? unref(getResourceText)("filters.active.shortText", "filters.active.shortText") : unref(getResourceText)("filters.active", "filters.active")) + " ", 1), createVNode(unref(N8nLink_default), {
                      "data-test-id": "workflows-filter-reset",
                      size: "small",
                      onClick: resetFilters
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("filters.active.reset", "filters.active.reset")), 1)]),
                      _: 1
                    })]),
                    _: 1
                  })], 512)), [[vShow, hasFilters.value]]) : createCommentVNode("", true), _cache[4] || (_cache[4] = createBaseVNode("div", {
                    class: "pb-xs"
                  }, null, -1))]),
                  default: withCtx(() => [renderSlot(_ctx.$slots, "preamble", {}, void 0, true), _ctx.resourcesRefreshing ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nLoading_default), {
                    rows: rowsPerPage.value,
                    "shrink-last": false
                  }, null, 8, ["rows"])])) : filteredAndSortedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    ref_key: "listWrapperRef",
                    ref: listWrapperRef,
                    "data-test-id": "resources-list-wrapper",
                    class: normalizeClass(_ctx.$style.listWrapper)
                  }, [_ctx.type === "list-full" ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
                    key: 0,
                    "data-test-id": "resources-list",
                    items: filteredAndSortedResources.value,
                    "item-size": itemSize(),
                    "item-key": "id"
                  }, {
                    default: withCtx(({
                      item,
                      updateItemSize
                    }) => [renderSlot(_ctx.$slots, "default", {
                      data: item,
                      updateItemSize
                    }, void 0, true)]),
                    _: 3
                  }, 8, ["items", "item-size"])) : _ctx.type === "list-paginated" ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.paginatedListWrapper),
                    "data-test-id": "paginated-list"
                  }, [createBaseVNode("div", {
                    ref_key: "listItemsRef",
                    ref: listItemsRef,
                    class: normalizeClass(_ctx.$style.listItems)
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resources, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: normalizeClass(_ctx.$style.listItem)
                    }, [renderSlot(_ctx.$slots, "item", {
                      item,
                      index
                    }, () => [createTextVNode(toDisplayString(item), 1)], true)], 2);
                  }), 128))], 2), createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.listPagination)
                  }, [createVNode(unref(ElPagination), {
                    "current-page": currentPage.value,
                    "onUpdate:currentPage": [_cache[2] || (_cache[2] = $event => currentPage.value = $event), setCurrentPage],
                    "page-size": rowsPerPage.value,
                    "onUpdate:pageSize": _cache[3] || (_cache[3] = $event => rowsPerPage.value = $event),
                    background: "",
                    total: _ctx.totalItems,
                    "page-sizes": _ctx.availablePageSizeOptions,
                    layout: "total, prev, pager, next, sizes",
                    "data-test-id": "resources-list-pagination",
                    onSizeChange: setRowsPerPage
                  }, null, 8, ["current-page", "page-size", "total", "page-sizes"])], 2)], 2)) : createCommentVNode("", true), _ctx.type === "datatable" ? (openBlock(), createBlock(unref(N8nDatatable_default), {
                    key: 2,
                    "data-test-id": "resources-table",
                    class: normalizeClass(_ctx.$style.datatable),
                    columns: getColumns(),
                    rows: filteredAndSortedResources.value,
                    "current-page": currentPage.value,
                    "rows-per-page": rowsPerPage.value,
                    "onUpdate:currentPage": setCurrentPage,
                    "onUpdate:rowsPerPage": setRowsPerPage
                  }, {
                    row: withCtx(({
                      columns,
                      row
                    }) => [renderSlot(_ctx.$slots, "default", {
                      data: row,
                      columns
                    }, void 0, true)]),
                    postdata: withCtx(() => [renderSlot(_ctx.$slots, "postdata", {}, void 0, true)]),
                    _: 3
                  }, 8, ["class", "columns", "rows", "current-page", "rows-per-page"])) : createCommentVNode("", true)], 2)) : hasAppliedFilters() || filtersModel.value.search !== "" ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 2,
                    color: "text-base",
                    size: "medium",
                    "data-test-id": "resources-list-empty"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("noResults", "noResults")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "postamble", {}, void 0, true)]),
                  _: 3
                }))], 64))]),
                _: 3
              });
            };
          }
        }); //#endregion
        //#region src/app/components/layouts/ResourcesListLayout.vue?vue&type=style&index=0&lang.module.scss
        filters = "_filters_lkzqj_123";
        search = "_search_lkzqj_154";
        listWrapper = "_listWrapper_lkzqj_167";
        paginatedListWrapper = "_paginatedListWrapper_lkzqj_173";
        listItems = "_listItems_lkzqj_181";
        listPagination = "_listPagination_lkzqj_185";
        datatable = "_datatable_lkzqj_212";
        ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default = {
          "filters-row": "_filters-row_lkzqj_123",
          filters,
          "sort-and-filter": "_sort-and-filter_lkzqj_141",
          search,
          listWrapper,
          paginatedListWrapper,
          listItems,
          listPagination,
          datatable
        }; //#endregion
        //#region src/app/components/layouts/ResourcesListLayout.vue
        cssModules = {
          "$style": ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ResourcesListLayout_default = /* @__PURE__ */__plugin_vue_export_helper_default(ResourcesListLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-b3f25b76"]])); //#endregion
      }
    };
  });
})();