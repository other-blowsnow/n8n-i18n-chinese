;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./useActions-legacy-A6v3pRgY.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, toRefs, guardReactiveProps, ref, createVNode, defineComponent, reactive, onUnmounted, toDisplayString, createBlock, mergeProps, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, createSlots, Transition, vShow, resolveDirective, normalizeProps, createBaseVNode, withDirectives, normalizeStyle, useI18n, N8nNodeIcon_default, N8nText_default, N8nButton_default, N8nNodeCreatorNode_default, N8nLoading_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, COMMUNITY_NODES_INSTALLATION_DOCS_URL, getNewNodePosition, shouldShowCommunityNodeDetails, useUsersStore, isNodePreviewKey, useWorkflowsStore, useNodeTypesStore, useTelemetry, DEFAULT_NODE_SIZE, removePreviewToken, DEFAULT_SUBCATEGORY, WEBHOOK_NODE_TYPE, DRAG_EVENT_DATA_KEY, isCommunityPackageName, CREDENTIAL_ONLY_NODE_PREFIX, HITL_SUBCATEGORY, useNodeType, useViewStacks, useKeyboardNavigation, useNodeCreatorStore, require_camelCase, NodeIcon_default, useActions, __vite_style__, _sfc_main, SlideTransition_default, _hoisted_1$4, verified_default, NodeItem_vue_vue_type_script_setup_true_lang_default, nodeItem, nodeIcon$1, subNodeBackground, communityNodeIcon, draggable$1, draggableDataTransfer$1, icon, official, NodeItem_vue_vue_type_style_index_0_lang_module_default, cssModules$11, NodeItem_default, import_camelCase, SubcategoryItem_vue_vue_type_script_setup_true_lang_default, subCategory, SubcategoryItem_vue_vue_type_style_index_0_lang_module_default, cssModules$10, SubcategoryItem_default, _hoisted_1$3, LabelItem_vue_vue_type_script_setup_true_lang_default, label$1, LabelItem_vue_vue_type_style_index_0_lang_module_default, cssModules$9, LabelItem_default, ActionItem_vue_vue_type_script_setup_true_lang_default, action, nodeIcon, draggable, draggableDataTransfer, ActionItem_vue_vue_type_style_index_0_lang_module_default, cssModules$8, ActionItem_default, ViewItem_vue_vue_type_script_setup_true_lang_default, view$1, ViewItem_vue_vue_type_style_index_0_lang_module_default, cssModules$7, ViewItem_default, LinkItem_vue_vue_type_script_setup_true_lang_default, creatorLink, LinkItem_vue_vue_type_style_index_0_lang_module_default, cssModules$6, LinkItem_default, CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default, container, CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default, cssModules$5, CommunityNodeInstallHint_default, CommunityNodeItem_vue_vue_type_script_setup_true_lang_default, marginLeft, CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default, cssModules$4, CommunityNodeItem_default, _hoisted_1$2, CategoryItem_vue_vue_type_script_setup_true_lang_default, triggerIcon, category$1, active$1, name, CategoryItem_vue_vue_type_style_index_0_lang_module_default, cssModules$3, CategoryItem_default, _hoisted_1$1, CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default, mouseOverTooltip, categorizedItemsRenderer, tooltipPopper, contentSlot, preview$1, CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default, cssModules$2, CategorizedItemsRenderer_default, OpenTemplateItem_vue_vue_type_script_setup_true_lang_default, creatorOpenTemplate, compact, OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default, cssModules$1, OpenTemplateItem_default, _hoisted_1, _hoisted_2, LAZY_LOAD_THRESHOLD, LAZY_LOAD_ITEMS_PER_TICK, ItemsRenderer_vue_vue_type_script_setup_true_lang_default, itemSkeleton, iteratorItem, label, category, active, empty, itemsRenderer, view, link, borderless, preview, ItemsRenderer_vue_vue_type_style_index_0_lang_module_default, cssModules, ItemsRenderer_default;
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createBlock(Transition, {
        name: "slide"
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
        _: 3
      });
    }
    function render(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createBaseVNode("path", {
        fill: "currentColor",
        d: "m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
      }, null, -1)]));
    }
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        toRefs = _vueRuntimeEsmBundlerLegacy003Js.Ht;
        guardReactiveProps = _vueRuntimeEsmBundlerLegacy003Js.I;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        onUnmounted = _vueRuntimeEsmBundlerLegacy003Js.Q;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNodeIcon_default = _srcLegacy007Js.D;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nNodeCreatorNode_default = _srcLegacy007Js.O;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        COMMUNITY_NODES_INSTALLATION_DOCS_URL = _useTelemetryLegacy00FJs.Ri;
        getNewNodePosition = _useTelemetryLegacy00FJs.b;
        shouldShowCommunityNodeDetails = _useTelemetryLegacy00FJs.bt;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        isNodePreviewKey = _useTelemetryLegacy00FJs.gt;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        DEFAULT_NODE_SIZE = _useTelemetryLegacy00FJs.u;
        removePreviewToken = _useTelemetryLegacy00FJs.vt;
      }, function (_constantsLegacy00NJs) {
        DEFAULT_SUBCATEGORY = _constantsLegacy00NJs.$a;
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
        DRAG_EVENT_DATA_KEY = _constantsLegacy00NJs.R;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        CREDENTIAL_ONLY_NODE_PREFIX = _constantsLegacy00NJs.it;
        HITL_SUBCATEGORY = _constantsLegacy00NJs.no;
      }, function (_usePinnedDataLegacy01hJs) {
        useNodeType = _usePinnedDataLegacy01hJs.n;
      }, function (_nodeCreatorStoreLegacy01jJs) {
        useViewStacks = _nodeCreatorStoreLegacy01jJs.d;
        useKeyboardNavigation = _nodeCreatorStoreLegacy01jJs.f;
        useNodeCreatorStore = _nodeCreatorStoreLegacy01jJs.t;
        require_camelCase = _nodeCreatorStoreLegacy01jJs.v;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_useActionsLegacy03dJs) {
        useActions = _useActionsLegacy03dJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.slide-leave-active[data-v-c503546a],\n.slide-enter-active[data-v-c503546a] {\n  transition: 200ms ease;\n}\n.slide-leave-to[data-v-c503546a],\n.slide-enter-from[data-v-c503546a] {\n  transform: translateX(100%);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeItem_4xp4b_123 {\n  --trigger-icon--color--background: var(--color--background--light-3);\n  --trigger-icon--border-color: var(--color--text--tint-2);\n  margin-left: 15px;\n  margin-right: 12px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n._nodeIcon_4xp4b_131 {\n  z-index: 2;\n}\n._subNodeBackground_4xp4b_135 {\n  background-color: var(--node-type--supplemental--color--background);\n  border-radius: 50%;\n  height: 40px;\n  position: absolute;\n  transform: translate(-7px, -7px);\n  width: 40px;\n  z-index: 1;\n}\n._communityNodeIcon_4xp4b_145 {\n  vertical-align: top;\n}\n._draggable_4xp4b_149 {\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  z-index: 1;\n  opacity: 0.66;\n  border: 2px solid var(--color--foreground--shade-2);\n  border-radius: var(--radius--lg);\n  background-color: var(--color--background--light-3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n._draggableDataTransfer_4xp4b_163 {\n  width: 1px;\n  height: 1px;\n}\n._icon_4xp4b_168 {\n  display: inline-flex;\n  color: var(--color--text);\n  width: 12px;\n}\n._icon_4xp4b_168._official_4xp4b_173 {\n  width: 14px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._subCategory_1co34_123 {\n  --action--arrow--color: var(--color--text--tint-1);\n  margin-left: 15px;\n  margin-right: 12px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._label_crtw6_123 {\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--sm);\n  margin-bottom: var(--spacing--4xs);\n  letter-spacing: 1px;\n  padding-top: var(--spacing--sm);\n  font-style: normal;\n  font-weight: var(--font-weight--bold);\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: var(--color--text);\n  cursor: default;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._action_26pq8_123 {\n  --node-creator--name--font-size: var(--font-size--2xs);\n  --node-creator--name--font-weight: var(--font-weight--regular);\n  --trigger-icon--color--background: var(--color--background--light-3);\n  --trigger-icon--border-color: var(--color--text--tint-2);\n  --node--icon--size: 20px;\n  --node--icon--margin-right: var(--spacing--xs);\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--sm);\n  padding: var(--spacing--2xs) 0;\n}\n._nodeIcon_26pq8_135 {\n  margin-right: var(--spacing--xs);\n}\n._draggable_26pq8_139 {\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  z-index: 1;\n  opacity: 0.66;\n  border: 2px solid var(--color--foreground--shade-2);\n  border-radius: var(--radius--lg);\n  background-color: var(--color--background--light-3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n._draggableDataTransfer_26pq8_153 {\n  width: 1px;\n  height: 1px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._view_5ke24_123 {\n  --action--arrow--color: var(--color--text--tint-1);\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._creatorLink_g3v4r_123 {\n  --action--arrow--color: var(--color--text--tint-1);\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_ikrhv_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--sm);\n  margin: var(--spacing--xs);\n  margin-top: 0;\n  padding: var(--spacing--xs);\n  border: var(--border-width) solid var(--color--foreground);\n  border-radius: 0.25em;\n  pointer-events: none;\n  cursor: default;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._marginLeft_1q8y4_123 {\n  margin-left: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._triggerIcon_2nqmq_123 {\n  color: var(--color--primary);\n  margin-left: var(--spacing--3xs);\n}\n._category_2nqmq_128 {\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--sm);\n  padding: var(--spacing--2xs) var(--spacing--sm);\n  border-bottom: 1px solid var(--color--foreground);\n  display: flex;\n  cursor: pointer;\n  position: relative;\n}\n._category_2nqmq_128::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  border-left: 2px solid transparent;\n}\n._category_2nqmq_128:hover::before {\n  border-color: var(--color--text--tint-1);\n}\n._category_2nqmq_128._active_2nqmq_149::before {\n  border-color: var(--color--primary);\n}\n._name_2nqmq_153 {\n  flex-grow: 1;\n  color: var(--color--text--shade-1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._mouseOverTooltip_1c8sx_123 {\n  opacity: 0;\n  margin-left: var(--spacing--3xs);\n  color: var(--color--foreground--shade-2);\n}\n._mouseOverTooltip_1c8sx_123:hover {\n  color: var(--color--primary);\n}\n._categorizedItemsRenderer_1c8sx_131:hover ._mouseOverTooltip_1c8sx_123 {\n  opacity: 1;\n}\n._tooltipPopper_1c8sx_135 {\n  max-width: 260px;\n}\n._contentSlot_1c8sx_139 {\n  padding: 0 var(--spacing--sm) var(--spacing--3xs);\n  margin-top: var(--spacing--xs);\n}\n._categorizedItemsRenderer_1c8sx_131 {\n  padding-bottom: var(--spacing--sm);\n}\n._preview_1c8sx_148 {\n  opacity: 0.7;\n  pointer-events: none;\n  cursor: default;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._creatorOpenTemplate_tyk6y_123 {\n  --action--arrow--color: var(--color--text--tint-1);\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--xs);\n  padding-bottom: var(--spacing--xs);\n  margin-bottom: var(--spacing--xs);\n}\n._compact_tyk6y_131 {\n  margin-left: 0;\n  padding-right: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._itemSkeleton_1ehs8_123 {\n  height: 50px;\n}\n._iteratorItem_1ehs8_127 {\n  margin-left: 1px;\n  position: relative;\n}\n._iteratorItem_1ehs8_127::before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: 0;\n  bottom: 0;\n  border-left: 2px solid transparent;\n}\n._iteratorItem_1ehs8_127:not(._label_1ehs8_139):not(._category_1ehs8_139):hover::before {\n  border-color: var(--color--text--tint-1);\n}\n._iteratorItem_1ehs8_127._active_1ehs8_142:not(._category_1ehs8_139)::before {\n  border-color: var(--color--primary);\n}\n._empty_1ehs8_146 [role=\"alert\"] {\n  margin: var(--spacing--xs) var(--spacing--sm);\n}\n._itemsRenderer_1ehs8_150 {\n  display: flex;\n  flex-direction: column;\n  scrollbar-width: none; /* Firefox 64 */\n}\n._itemsRenderer_1ehs8_150 > *::-webkit-scrollbar {\n  display: none;\n}\n._view_1ehs8_159 {\n  position: relative;\n}\n._view_1ehs8_159:last-child {\n  margin-top: var(--spacing--sm);\n  padding-top: var(--spacing--xs);\n}\n._view_1ehs8_159:last-child:after {\n  content: \"\";\n  position: absolute;\n  left: var(--spacing--sm);\n  right: var(--spacing--sm);\n  top: 0;\n  margin: auto;\n  bottom: 0;\n  border-top: 1px solid var(--color--foreground);\n}\n._link_1ehs8_177 {\n  position: relative;\n}\n._link_1ehs8_177:last-child {\n  margin-bottom: var(--spacing--sm);\n  padding-bottom: var(--spacing--xs);\n}\n._link_1ehs8_177:last-child:after {\n  content: \"\";\n  position: absolute;\n  left: var(--spacing--sm);\n  right: var(--spacing--sm);\n  top: 0;\n  margin: auto;\n  bottom: 0;\n  border-bottom: 1px solid var(--color--foreground);\n}\n._borderless_1ehs8_195:last-child {\n  margin-top: 0;\n  padding-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n._borderless_1ehs8_195:last-child:after {\n  content: none;\n}\n._preview_1ehs8_205 {\n  pointer-events: none;\n  cursor: default;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/transitions/SlideTransition.vue
        _sfc_main = {};
        _export("i", SlideTransition_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c503546a"]])); //#endregion
        //#region ~icons/mdi/verified
        _hoisted_1$4 = {
          viewBox: "0 0 24 24",
          width: "1.2em",
          height: "1.2em"
        };
        _export("r", verified_default = {
          name: "mdi-verified",
          render
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/NodeItem.vue?vue&type=script&setup=true&lang.ts
        NodeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeItem",
          props: {
            nodeType: {},
            subcategory: {
              default: void 0
            },
            active: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const {
              actions
            } = useNodeCreatorStore();
            const {
              getAddedNodesAndConnections
            } = useActions();
            const {
              activeViewStack
            } = useViewStacks();
            const {
              isSubNodeType
            } = useNodeType({
              nodeType: props.nodeType
            });
            const nodeTypesStore = useNodeTypesStore();
            const dragging = ref(false);
            const draggablePosition = ref({
              x: -100,
              y: -100
            });
            const draggableDataTransfer$2 = ref(null);
            const description = computed(() => {
              if (isCommunityNodePreview.value) return props.nodeType.description;
              if (isSendAndWaitCategory.value) return "";
              if (props.subcategory === "*" && !props.nodeType.name.startsWith("n8n-creds-base")) return "";
              return i18n.headerText({
                key: `headers.${shortNodeType.value}.description`,
                fallback: props.nodeType.description
              });
            });
            const showActionArrow = computed(() => {
              if (shouldShowCommunityNodeDetails(isCommunityNode.value, activeViewStack)) return true;
              return hasActions.value && !isSendAndWaitCategory.value;
            });
            const isSendAndWaitCategory = computed(() => activeViewStack.subcategory === HITL_SUBCATEGORY);
            const dataTestId = computed(() => hasActions.value ? "node-creator-action-item" : "node-creator-node-item");
            const hasActions = computed(() => {
              return nodeActions.value.length > 1 && !activeViewStack.hideActions;
            });
            const nodeActions = computed(() => {
              return actions[props.nodeType.name] || [];
            });
            const shortNodeType = computed(() => i18n.shortNodeType(props.nodeType.name) || "");
            const draggableStyle = computed(() => ({
              top: `${draggablePosition.value.y}px`,
              left: `${draggablePosition.value.x}px`
            }));
            const isCommunityNode = computed(() => isCommunityPackageName(props.nodeType.name));
            const isCommunityNodePreview = computed(() => isNodePreviewKey(props.nodeType.name));
            const displayName = computed(() => {
              const trimmedDisplayName = props.nodeType.displayName.trimEnd();
              return i18n.headerText({
                key: `headers.${shortNodeType.value}.displayName`,
                fallback: hasActions.value ? trimmedDisplayName.replace("Trigger", "") : trimmedDisplayName
              });
            });
            const isTrigger = computed(() => {
              return props.nodeType.group.includes("trigger") && !hasActions.value;
            });
            const communityNodeType = computed(() => {
              return nodeTypesStore.communityNodeType(removePreviewToken(props.nodeType.name));
            });
            const isOfficial = computed(() => {
              return communityNodeType.value?.isOfficialNode ?? false;
            });
            const author = computed(() => {
              return communityNodeType.value?.displayName ?? displayName.value;
            });
            const tag = computed(() => {
              if (props.nodeType.tag) return {
                text: props.nodeType.tag
              };
              if (description.value.toLowerCase().includes("deprecated")) return {
                text: i18n.baseText("nodeCreator.nodeItem.deprecated"),
                type: "info"
              };
            });
            function onDragStart(event) {
              if (event.dataTransfer) {
                event.dataTransfer.effectAllowed = "copy";
                event.dataTransfer.dropEffect = "copy";
                event.dataTransfer.setDragImage(draggableDataTransfer$2.value, 0, 0);
                event.dataTransfer.setData(DRAG_EVENT_DATA_KEY, JSON.stringify(getAddedNodesAndConnections([{
                  type: props.nodeType.name
                }])));
              }
              dragging.value = true;
            }
            function onDragEnd() {
              dragging.value = false;
              setTimeout(() => {
                draggablePosition.value = {
                  x: -100,
                  y: -100
                };
              }, 300);
            }
            function onCommunityNodeTooltipClick(event) {
              if (event.target.localName === "a") telemetry.track("user clicked cnr docs link", {
                source: "nodes panel node"
              });
            }
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
                draggable: !showActionArrow.value,
                class: normalizeClass(_ctx.$style.nodeItem),
                description: description.value,
                title: displayName.value,
                "show-action-arrow": showActionArrow.value,
                "is-trigger": isTrigger.value,
                "is-official": isOfficial.value,
                "data-test-id": dataTestId.value,
                tag: tag.value,
                onDragstart: onDragStart,
                onDragend: onDragEnd
              }, createSlots({
                icon: withCtx(() => [unref(isSubNodeType) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.subNodeBackground)
                }, null, 2)) : createCommentVNode("", true), createVNode(NodeIcon_default, {
                  class: normalizeClass(_ctx.$style.nodeIcon),
                  "node-type": _ctx.nodeType,
                  "color-default": "var(--color--foreground--shade-2)"
                }, null, 8, ["class", "node-type"])]),
                dragContent: withCtx(() => [withDirectives(createBaseVNode("div", {
                  ref_key: "draggableDataTransfer",
                  ref: draggableDataTransfer$2,
                  class: normalizeClass(_ctx.$style.draggable),
                  style: normalizeStyle(draggableStyle.value)
                }, [createVNode(NodeIcon_default, {
                  "node-type": _ctx.nodeType,
                  size: 40,
                  shrink: false,
                  "color-default": "var(--color--foreground--shade-2)",
                  onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, null, 8, ["node-type"])], 6), [[vShow, dragging.value]])]),
                _: 2
              }, [isOfficial.value ? {
                name: "extraDetails",
                fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
                  placement: "top",
                  "show-after": 500
                }, {
                  content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", {
                    interpolate: {
                      author: author.value
                    }
                  })), 1)]),
                  default: withCtx(() => [createVNode(unref(verified_default), {
                    class: normalizeClass([_ctx.$style.icon, _ctx.$style.official])
                  }, null, 8, ["class"])]),
                  _: 1
                })]),
                key: "0"
              } : isCommunityNode.value && !isCommunityNodePreview.value && !unref(activeViewStack)?.communityNodeDetails ? {
                name: "extraDetails",
                fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
                  placement: "top",
                  "show-after": 500
                }, {
                  content: withCtx(() => [withDirectives(createBaseVNode("p", {
                    class: normalizeClass(_ctx.$style.communityNodeIcon),
                    onClick: onCommunityNodeTooltipClick
                  }, null, 2), [[_directive_n8n_html, unref(i18n).baseText("generic.communityNode.tooltip", {
                    interpolate: {
                      packageName: _ctx.nodeType.name.split(".")[0],
                      docURL: unref(COMMUNITY_NODES_INSTALLATION_DOCS_URL)
                    }
                  })]])]),
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    size: "small",
                    class: normalizeClass(_ctx.$style.icon),
                    icon: "box"
                  }, null, 8, ["class"])]),
                  _: 1
                })]),
                key: "1"
              } : void 0]), 1032, ["draggable", "class", "description", "title", "show-action-arrow", "is-trigger", "is-official", "data-test-id", "tag"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/NodeItem.vue?vue&type=style&index=0&lang.module.scss
        nodeItem = "_nodeItem_4xp4b_123";
        nodeIcon$1 = "_nodeIcon_4xp4b_131";
        subNodeBackground = "_subNodeBackground_4xp4b_135";
        communityNodeIcon = "_communityNodeIcon_4xp4b_145";
        draggable$1 = "_draggable_4xp4b_149";
        draggableDataTransfer$1 = "_draggableDataTransfer_4xp4b_163";
        icon = "_icon_4xp4b_168";
        official = "_official_4xp4b_173";
        NodeItem_vue_vue_type_style_index_0_lang_module_default = {
          nodeItem,
          nodeIcon: nodeIcon$1,
          subNodeBackground,
          communityNodeIcon,
          draggable: draggable$1,
          draggableDataTransfer: draggableDataTransfer$1,
          icon,
          official
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/NodeItem.vue
        cssModules$11 = {
          "$style": NodeItem_vue_vue_type_style_index_0_lang_module_default
        };
        NodeItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$11]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/SubcategoryItem.vue?vue&type=script&setup=true&lang.ts
        import_camelCase = /* @__PURE__ */__toESM(require_camelCase());
        SubcategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SubcategoryItem",
          props: {
            item: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const subcategoryName = computed(() => (0, import_camelCase.default)(props.item.subcategory || props.item.title));
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
                class: normalizeClass(_ctx.$style.subCategory),
                title: unref(i18n).baseText(`nodeCreator.subcategoryNames.${subcategoryName.value}`),
                "is-trigger": false,
                description: unref(i18n).baseText(`nodeCreator.subcategoryDescriptions.${subcategoryName.value}`),
                "show-action-arrow": true
              }, {
                icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), mergeProps({
                  type: "icon",
                  name: _ctx.item.icon,
                  circle: false,
                  "show-tooltip": false
                }, _ctx.item.iconProps), null, 16, ["name"])]),
                _: 1
              }, 8, ["class", "title", "description"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/SubcategoryItem.vue?vue&type=style&index=0&lang.module.scss
        subCategory = "_subCategory_1co34_123";
        SubcategoryItem_vue_vue_type_style_index_0_lang_module_default = {
          subCategory
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/SubcategoryItem.vue
        cssModules$10 = {
          "$style": SubcategoryItem_vue_vue_type_style_index_0_lang_module_default
        };
        SubcategoryItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(SubcategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$10]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/LabelItem.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = ["textContent"];
        LabelItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "LabelItem",
          props: {
            item: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.label)
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.name),
                textContent: toDisplayString(_ctx.item.key)
              }, null, 10, _hoisted_1$3)], 2);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/LabelItem.vue?vue&type=style&index=0&lang.module.scss
        label$1 = "_label_crtw6_123";
        LabelItem_vue_vue_type_style_index_0_lang_module_default = {
          label: label$1
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/LabelItem.vue
        cssModules$9 = {
          "$style": LabelItem_vue_vue_type_style_index_0_lang_module_default
        };
        LabelItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(LabelItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$9]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/ActionItem.vue?vue&type=script&setup=true&lang.ts
        ActionItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ActionItem",
          props: {
            nodeType: {},
            action: {}
          },
          setup(__props) {
            const props = __props;
            const telemetry = useTelemetry();
            const {
              getActionData,
              getAddedNodesAndConnections,
              setAddedNodeActionParameters
            } = useActions();
            const {
              activeViewStack
            } = useViewStacks();
            const state = reactive({
              dragging: false,
              draggablePosition: {
                x: -100,
                y: -100
              },
              storeWatcher: null,
              draggableDataTransfer: null
            });
            const draggableStyle = computed(() => ({
              top: `${state.draggablePosition.y}px`,
              left: `${state.draggablePosition.x}px`
            }));
            const actionData = computed(() => getActionData(props.action));
            const isTriggerAction = action$1 => action$1.name?.toLowerCase().includes("trigger") || action$1.name === "n8n-nodes-base.webhook";
            function onDragStart(event) {
              /**
              * Workaround for firefox, that doesn't attach the pageX and pageY coordinates to "ondrag" event.
              * All browsers attach the correct page coordinates to the "dragover" event.
              * @bug https://bugzilla.mozilla.org/show_bug.cgi?id=505521
              */
              document.body.addEventListener("dragover", onDragOver);
              const {
                pageX: x,
                pageY: y
              } = event;
              if (event.dataTransfer && actionData.value.key) {
                event.dataTransfer.effectAllowed = "copy";
                event.dataTransfer.dropEffect = "copy";
                event.dataTransfer.setDragImage(state.draggableDataTransfer, 0, 0);
                event.dataTransfer.setData(DRAG_EVENT_DATA_KEY, JSON.stringify(getAddedNodesAndConnections([{
                  type: actionData.value.key
                }])));
                if (telemetry) state.storeWatcher = setAddedNodeActionParameters(actionData.value, telemetry, activeViewStack.rootView);
                document.body.addEventListener("dragend", onDragEnd);
              }
              state.dragging = true;
              state.draggablePosition = {
                x,
                y
              };
            }
            function onDragOver(event) {
              if (!state.dragging || event.pageX === 0 && event.pageY === 0) return;
              const [x, y] = getNewNodePosition([], [event.pageX - DEFAULT_NODE_SIZE[0] / 2, event.pageY - DEFAULT_NODE_SIZE[1] / 2]);
              state.draggablePosition = {
                x,
                y
              };
            }
            function onDragEnd() {
              if (state.storeWatcher) state.storeWatcher();
              document.body.removeEventListener("dragend", onDragEnd);
              document.body.removeEventListener("dragover", onDragOver);
              state.dragging = false;
              setTimeout(() => {
                state.draggablePosition = {
                  x: -100,
                  y: -100
                };
              }, 300);
            }
            const {
              draggableDataTransfer: draggableDataTransfer$2,
              dragging
            } = toRefs(state);
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
                draggable: "",
                class: normalizeClass(_ctx.$style.action),
                title: _ctx.action.displayName,
                "is-trigger": isTriggerAction(_ctx.action),
                "data-keyboard-nav": "true",
                onDragstart: onDragStart,
                onDragend: onDragEnd
              }, {
                dragContent: withCtx(() => [createBaseVNode("div", {
                  ref_key: "draggableDataTransfer",
                  ref: draggableDataTransfer$2,
                  class: normalizeClass(_ctx.$style.draggableDataTransfer)
                }, null, 2), withDirectives(createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.draggable),
                  style: normalizeStyle(draggableStyle.value)
                }, [createVNode(NodeIcon_default, {
                  "node-type": _ctx.nodeType,
                  size: 40,
                  shrink: false,
                  onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, null, 8, ["node-type"])], 6), [[vShow, unref(dragging)]])]),
                icon: withCtx(() => [createVNode(NodeIcon_default, {
                  "node-type": _ctx.action
                }, null, 8, ["node-type"])]),
                _: 1
              }, 8, ["class", "title", "is-trigger"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/ActionItem.vue?vue&type=style&index=0&lang.module.scss
        action = "_action_26pq8_123";
        nodeIcon = "_nodeIcon_26pq8_135";
        draggable = "_draggable_26pq8_139";
        draggableDataTransfer = "_draggableDataTransfer_26pq8_153";
        ActionItem_vue_vue_type_style_index_0_lang_module_default = {
          action,
          nodeIcon,
          draggable,
          draggableDataTransfer
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/ActionItem.vue
        cssModules$8 = {
          "$style": ActionItem_vue_vue_type_style_index_0_lang_module_default
        };
        ActionItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(ActionItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$8]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/ViewItem.vue?vue&type=script&setup=true&lang.ts
        ViewItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ViewItem",
          props: {
            view: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
                class: normalizeClass(_ctx.$style.view),
                title: _ctx.view.title,
                tag: _ctx.view.tag,
                "is-trigger": false,
                description: _ctx.view.description,
                "show-action-arrow": true
              }, {
                icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
                  type: "icon",
                  name: _ctx.view.icon,
                  circle: false,
                  "show-tooltip": false
                }, null, 8, ["name"])]),
                _: 1
              }, 8, ["class", "title", "tag", "description"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/ViewItem.vue?vue&type=style&index=0&lang.module.scss
        view$1 = "_view_5ke24_123";
        ViewItem_vue_vue_type_style_index_0_lang_module_default = {
          view: view$1
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/ViewItem.vue
        cssModules$7 = {
          "$style": ViewItem_vue_vue_type_style_index_0_lang_module_default
        };
        ViewItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(ViewItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$7]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/LinkItem.vue?vue&type=script&setup=true&lang.ts
        LinkItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "LinkItem",
          props: {
            link: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
                class: normalizeClass(_ctx.$style.creatorLink),
                title: _ctx.link.title,
                "is-trigger": false,
                description: _ctx.link.description,
                tag: _ctx.link.tag,
                "show-action-arrow": true
              }, {
                icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
                  type: "icon",
                  name: _ctx.link.icon,
                  circle: false,
                  "show-tooltip": false
                }, null, 8, ["name"])]),
                _: 1
              }, 8, ["class", "title", "description", "tag"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/LinkItem.vue?vue&type=style&index=0&lang.module.scss
        creatorLink = "_creatorLink_g3v4r_123";
        LinkItem_vue_vue_type_style_index_0_lang_module_default = {
          creatorLink
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/LinkItem.vue
        cssModules$6 = {
          "$style": LinkItem_vue_vue_type_style_index_0_lang_module_default
        };
        LinkItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(LinkItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]]); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInstallHint.vue?vue&type=script&setup=true&lang.ts
        CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeInstallHint",
          props: {
            hint: {}
          },
          setup(__props) {
            const isOwner = computed(() => useUsersStore().isInstanceOwner);
            return (_ctx, _cache) => {
              return isOwner.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nIcon_default), {
                color: "text-light",
                icon: "info",
                size: "large"
              }), createVNode(unref(N8nText_default), {
                color: "text-base",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.hint), 1)]),
                _: 1
              })], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInstallHint.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_ikrhv_123";
        CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default = {
          container
        }; //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInstallHint.vue
        cssModules$5 = {
          "$style": CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default
        };
        CommunityNodeInstallHint_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/CommunityNodeItem.vue?vue&type=script&setup=true&lang.ts
        CommunityNodeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeItem",
          props: {
            isPreview: {
              type: Boolean
            }
          },
          setup(__props) {
            const i18n = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [_ctx.isPreview ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
                key: 0,
                hint: unref(i18n).baseText("communityNodeItem.node.hint")
              }, null, 8, ["hint"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.marginLeft)
              }, [createVNode(unref(N8nButton_default), {
                size: "medium",
                type: "secondary",
                icon: "plus",
                label: unref(i18n).baseText("communityNodeItem.label"),
                outline: ""
              }, null, 8, ["label"])], 2))]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/CommunityNodeItem.vue?vue&type=style&index=0&lang.module.scss
        marginLeft = "_marginLeft_1q8y4_123";
        CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default = {
          marginLeft
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/CommunityNodeItem.vue
        cssModules$4 = {
          "$style": CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default
        };
        CommunityNodeItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityNodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/CategoryItem.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = ["textContent"];
        CategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CategoryItem",
          props: {
            expanded: {
              type: Boolean,
              default: true
            },
            active: {
              type: Boolean
            },
            count: {},
            name: {},
            isTrigger: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const categoryName = computed(() => {
              const itemsCount = props.count || 0;
              return itemsCount > 0 ? `${props.name} (${itemsCount})` : props.name;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", mergeProps({
                class: _ctx.$style.categoryWrapper
              }, _ctx.$attrs, {
                "data-keyboard-nav": "true",
                "data-test-id": "node-creator-category-item"
              }), [createBaseVNode("div", {
                class: normalizeClass({
                  [_ctx.$style.category]: true,
                  [_ctx.$style.active]: _ctx.active
                })
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.name)
              }, [createBaseVNode("span", {
                textContent: toDisplayString(categoryName.value)
              }, null, 8, _hoisted_1$2), _ctx.isTrigger ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                icon: "bolt-filled",
                size: "xsmall",
                class: normalizeClass(_ctx.$style.triggerIcon)
              }, null, 8, ["class"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2), _ctx.expanded ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                icon: "chevron-down",
                color: "text-light",
                size: "large"
              })) : (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 1,
                icon: "chevron-up",
                color: "text-light",
                size: "large"
              }))], 2)], 16);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/CategoryItem.vue?vue&type=style&index=0&lang.module.scss
        triggerIcon = "_triggerIcon_2nqmq_123";
        category$1 = "_category_2nqmq_128";
        active$1 = "_active_2nqmq_149";
        name = "_name_2nqmq_153";
        CategoryItem_vue_vue_type_style_index_0_lang_module_default = {
          triggerIcon,
          category: category$1,
          active: active$1,
          name
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/CategoryItem.vue
        cssModules$3 = {
          "$style": CategoryItem_vue_vue_type_style_index_0_lang_module_default
        };
        CategoryItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(CategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Renderers/CategorizedItemsRenderer.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = ["data-category-collapsed"];
        CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CategorizedItemsRenderer",
          props: {
            elements: {
              default: () => []
            },
            category: {},
            disabled: {
              type: Boolean
            },
            activeIndex: {},
            isTriggerCategory: {
              type: Boolean
            },
            mouseOverTooltip: {},
            expanded: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const {
              popViewStack,
              activeViewStack
            } = useViewStacks();
            const {
              registerKeyHook
            } = useKeyboardNavigation();
            const {
              workflowId
            } = useWorkflowsStore();
            const nodeCreatorStore = useNodeCreatorStore();
            const i18n = useI18n();
            const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
            const actionCount = computed(() => props.elements.filter(({
              type
            }) => type === "action").length);
            const expanded = ref(props.expanded ?? false);
            const isPreview = computed(() => activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed);
            function toggleExpanded() {
              setExpanded(!expanded.value);
            }
            function setExpanded(isExpanded) {
              const prev = expanded.value;
              expanded.value = isExpanded;
              if (expanded.value && !prev) nodeCreatorStore.onCategoryExpanded({
                category_name: props.category,
                workflow_id: workflowId
              });
            }
            function arrowRight() {
              if (expanded.value) return;
              setExpanded(true);
            }
            function arrowLeft() {
              if (!expanded.value) {
                popViewStack();
                return;
              }
              setExpanded(false);
            }
            watch(() => props.elements, () => {
              setExpanded(true);
            });
            registerKeyHook(`CategoryRight_${props.category}`, {
              keyboardKeys: ["ArrowRight"],
              condition: (type, activeItemId$1) => type === "category" && props.category === activeItemId$1,
              handler: arrowRight
            });
            registerKeyHook(`CategoryToggle_${props.category}`, {
              keyboardKeys: ["Enter"],
              condition: (type, activeItemId$1) => type === "category" && props.category === activeItemId$1,
              handler: toggleExpanded
            });
            registerKeyHook(`CategoryLeft_${props.category}`, {
              keyboardKeys: ["ArrowLeft"],
              condition: (type, activeItemId$1) => type === "category" && props.category === activeItemId$1,
              handler: arrowLeft
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.categorizedItemsRenderer),
                "data-category-collapsed": !expanded.value
              }, [createVNode(CategoryItem_default, {
                class: normalizeClass(_ctx.$style.categoryItem),
                name: _ctx.category,
                disabled: _ctx.disabled,
                active: activeItemId.value === _ctx.category,
                count: actionCount.value,
                expanded: expanded.value,
                "is-trigger": _ctx.isTriggerCategory,
                "data-keyboard-nav-type": "category",
                "data-keyboard-nav-id": _ctx.category,
                onClick: toggleExpanded
              }, {
                default: withCtx(() => [_ctx.mouseOverTooltip ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.mouseOverTooltip)
                }, [createVNode(unref(N8nTooltip_default), {
                  placement: "top",
                  "popper-class": _ctx.$style.tooltipPopper
                }, {
                  content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, _ctx.mouseOverTooltip]])]),
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "circle-help",
                    size: "small"
                  })]),
                  _: 1
                }, 8, ["popper-class"])], 2)) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["class", "name", "disabled", "active", "count", "expanded", "is-trigger", "data-keyboard-nav-id"]), expanded.value && actionCount.value > 0 && _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.contentSlot)
              }, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true), isPreview.value && expanded.value ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
                key: 1,
                hint: unref(i18n).baseText("communityNodeItem.actions.hint")
              }, null, 8, ["hint"])) : createCommentVNode("", true), expanded.value ? (openBlock(), createBlock(ItemsRenderer_default, mergeProps({
                key: 2
              }, _ctx.$attrs, {
                elements: _ctx.elements,
                "is-trigger": _ctx.isTriggerCategory,
                class: [{
                  [_ctx.$style.preview]: isPreview.value
                }]
              }), {
                default: withCtx(() => _cache[0] || (_cache[0] = [])),
                empty: withCtx(() => [renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps({
                  elements: _ctx.elements
                })))]),
                _: 3
              }, 16, ["elements", "is-trigger", "class"])) : createCommentVNode("", true)], 10, _hoisted_1$1);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Renderers/CategorizedItemsRenderer.vue?vue&type=style&index=0&lang.module.scss
        mouseOverTooltip = "_mouseOverTooltip_1c8sx_123";
        categorizedItemsRenderer = "_categorizedItemsRenderer_1c8sx_131";
        tooltipPopper = "_tooltipPopper_1c8sx_135";
        contentSlot = "_contentSlot_1c8sx_139";
        preview$1 = "_preview_1c8sx_148";
        CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default = {
          mouseOverTooltip,
          categorizedItemsRenderer,
          tooltipPopper,
          contentSlot,
          preview: preview$1
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Renderers/CategorizedItemsRenderer.vue
        cssModules$2 = {
          "$style": CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", CategorizedItemsRenderer_default = /* @__PURE__ */__plugin_vue_export_helper_default(CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]])); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/OpenTemplateItem.vue?vue&type=script&setup=true&lang.ts
        OpenTemplateItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "OpenTemplateItem",
          props: {
            openTemplate: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
                class: normalizeClass({
                  [_ctx.$style.creatorOpenTemplate]: true,
                  [_ctx.$style.compact]: _ctx.openTemplate.compact
                }),
                title: _ctx.openTemplate.title,
                description: _ctx.openTemplate.description,
                tag: _ctx.openTemplate.tag,
                "show-action-arrow": true,
                "is-trigger": false
              }, createSlots({
                _: 2
              }, [_ctx.openTemplate.icon ? {
                name: "icon",
                fn: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
                  type: "icon",
                  name: _ctx.openTemplate.icon,
                  circle: false,
                  "show-tooltip": false
                }, null, 8, ["name"])]),
                key: "0"
              } : void 0, _ctx.openTemplate.nodes ? {
                name: "extraDetails",
                fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.openTemplate.nodes, node => {
                  return openBlock(), createBlock(NodeIcon_default, {
                    key: node.name,
                    "node-type": node,
                    size: 16,
                    "show-tooltip": true
                  }, null, 8, ["node-type"]);
                }), 128))]),
                key: "1"
              } : void 0]), 1032, ["class", "title", "description", "tag"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/OpenTemplateItem.vue?vue&type=style&index=0&lang.module.scss
        creatorOpenTemplate = "_creatorOpenTemplate_tyk6y_123";
        compact = "_compact_tyk6y_131";
        OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default = {
          creatorOpenTemplate,
          compact
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/ItemTypes/OpenTemplateItem.vue
        cssModules$1 = {
          "$style": OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default
        };
        OpenTemplateItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(OpenTemplateItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Renderers/ItemsRenderer.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        _hoisted_2 = ["data-keyboard-nav-type", "data-keyboard-nav-id", "onClick"];
        LAZY_LOAD_THRESHOLD = 20;
        LAZY_LOAD_ITEMS_PER_TICK = 5;
        ItemsRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ItemsRenderer",
          props: {
            elements: {
              default: () => []
            },
            activeIndex: {},
            disabled: {
              type: Boolean
            },
            lazyRender: {
              type: Boolean,
              default: true
            }
          },
          emits: ["selected", "dragstart", "dragend"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const renderedItems = ref([]);
            const renderAnimationRequest = ref(0);
            const {
              activeViewStack
            } = useViewStacks();
            const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
            const communityNode = computed(() => activeViewStack.mode === "community-node");
            const isPreview = computed(() => {
              return communityNode.value && !activeViewStack.communityNodeDetails?.installed;
            });
            const highlightActiveItem = computed(() => {
              if (activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed) return false;
              return true;
            });
            function renderItems() {
              if (props.elements.length <= LAZY_LOAD_THRESHOLD || !props.lazyRender) {
                renderedItems.value = props.elements;
                return;
              }
              if (renderedItems.value.length < props.elements.length) {
                renderedItems.value.push(...props.elements.slice(renderedItems.value.length, renderedItems.value.length + LAZY_LOAD_ITEMS_PER_TICK));
                renderAnimationRequest.value = window.requestAnimationFrame(renderItems);
              }
            }
            function wrappedEmit(event, element, $e) {
              if (props.disabled) return;
              switch (event) {
                case "dragstart":
                  if ($e) {
                    emit("dragstart", element, $e);
                    break;
                  }
                case "dragend":
                  if ($e) {
                    emit("dragend", element, $e);
                    break;
                  }
                case "selected":
                  emit("selected", element, $e);
                  break;
                default:
                  emit(event, element, $e);
              }
            }
            function beforeEnter(el) {
              el.style.height = "0";
            }
            function enter(el) {
              el.style.height = `${el.scrollHeight}px`;
            }
            function beforeLeave(el) {
              el.style.height = `${el.scrollHeight}px`;
            }
            function leave(el) {
              el.style.height = "0";
            }
            onMounted(() => {
              renderItems();
            });
            onUnmounted(() => {
              window.cancelAnimationFrame(renderAnimationRequest.value);
              renderedItems.value = [];
            });
            watch(() => props.elements, () => {
              window.cancelAnimationFrame(renderAnimationRequest.value);
              renderedItems.value = [];
              renderItems();
            });
            return (_ctx, _cache) => {
              return _ctx.elements.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.itemsRenderer),
                name: "accordion",
                onBeforeEnter: beforeEnter,
                onEnter: enter,
                onBeforeLeave: beforeLeave,
                onLeave: leave
              }, [renderSlot(_ctx.$slots, "default"), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.elements, item => {
                return openBlock(), createElementBlock("div", {
                  key: item.uuid
                }, [renderedItems.value.includes(item) ? (openBlock(), createElementBlock("div", _hoisted_1, [item.type === "section" ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
                  key: 0,
                  elements: item.children,
                  expanded: "",
                  category: item.title,
                  onSelected: _cache[0] || (_cache[0] = child => wrappedEmit("selected", child))
                }, null, 8, ["elements", "category"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  ref_for: true,
                  ref: "iteratorItems",
                  class: normalizeClass({
                    clickable: !_ctx.disabled,
                    [_ctx.$style.active]: activeItemId.value === item.uuid && highlightActiveItem.value,
                    [_ctx.$style.iteratorItem]: !communityNode.value,
                    [_ctx.$style[item.type]]: true,
                    [_ctx.$style.preview]: isPreview.value,
                    [_ctx.$style.borderless]: item.type === "view" && item.properties.borderless === true
                  }),
                  "data-test-id": "item-iterator-item",
                  "data-keyboard-nav-type": item.type !== "label" ? item.type : void 0,
                  "data-keyboard-nav-id": item.uuid,
                  onClick: $event => wrappedEmit("selected", item)
                }, [item.type === "label" ? (openBlock(), createBlock(LabelItem_default, {
                  key: 0,
                  item
                }, null, 8, ["item"])) : createCommentVNode("", true), item.type === "subcategory" ? (openBlock(), createBlock(SubcategoryItem_default, {
                  key: 1,
                  item: item.properties
                }, null, 8, ["item"])) : createCommentVNode("", true), communityNode.value ? (openBlock(), createBlock(CommunityNodeItem_default, {
                  key: 2,
                  "is-preview": isPreview.value
                }, null, 8, ["is-preview"])) : createCommentVNode("", true), item.type === "node" && !communityNode.value ? (openBlock(), createBlock(NodeItem_default, {
                  key: 3,
                  "node-type": item.properties,
                  active: true,
                  subcategory: item.subcategory
                }, null, 8, ["node-type", "subcategory"])) : createCommentVNode("", true), item.type === "action" ? (openBlock(), createBlock(ActionItem_default, {
                  key: 4,
                  "node-type": item.properties,
                  action: item.properties,
                  active: true
                }, null, 8, ["node-type", "action"])) : item.type === "view" ? (openBlock(), createBlock(ViewItem_default, {
                  key: 5,
                  view: item.properties,
                  class: normalizeClass(_ctx.$style.viewItem)
                }, null, 8, ["view", "class"])) : item.type === "link" ? (openBlock(), createBlock(LinkItem_default, {
                  key: 6,
                  link: item.properties,
                  class: normalizeClass(_ctx.$style.linkItem)
                }, null, 8, ["link", "class"])) : item.type === "openTemplate" ? (openBlock(), createBlock(OpenTemplateItem_default, {
                  key: 7,
                  "open-template": item.properties,
                  class: normalizeClass(_ctx.$style.linkItem)
                }, null, 8, ["open-template", "class"])) : createCommentVNode("", true)], 10, _hoisted_2))])) : (openBlock(), createBlock(unref(N8nLoading_default), {
                  key: 1,
                  loading: true,
                  rows: 1,
                  variant: "p",
                  class: normalizeClass(_ctx.$style.itemSkeleton)
                }, null, 8, ["class"]))]);
              }), 128))], 34)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.empty)
              }, [renderSlot(_ctx.$slots, "empty")], 2));
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Renderers/ItemsRenderer.vue?vue&type=style&index=0&lang.module.scss
        itemSkeleton = "_itemSkeleton_1ehs8_123";
        iteratorItem = "_iteratorItem_1ehs8_127";
        label = "_label_1ehs8_139";
        category = "_category_1ehs8_139";
        active = "_active_1ehs8_142";
        empty = "_empty_1ehs8_146";
        itemsRenderer = "_itemsRenderer_1ehs8_150";
        view = "_view_1ehs8_159";
        link = "_link_1ehs8_177";
        borderless = "_borderless_1ehs8_195";
        preview = "_preview_1ehs8_205";
        ItemsRenderer_vue_vue_type_style_index_0_lang_module_default = {
          itemSkeleton,
          iteratorItem,
          label,
          category,
          active,
          empty,
          itemsRenderer,
          view,
          link,
          borderless,
          preview
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Renderers/ItemsRenderer.vue
        cssModules = {
          "$style": ItemsRenderer_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ItemsRenderer_default = /* @__PURE__ */__plugin_vue_export_helper_default(ItemsRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();