;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./chatPanel.store-legacy-NYceFr60.js", "./ItemsRenderer-legacy-gUs-ZSoq.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./executions.store-legacy-BxTud2_e.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./banners.store-legacy-BmDUT9wa.js", "./exports-legacy-RTRnyI4R.js", "./semver-legacy-BzFo3drs.js", "./CommunityNodeUpdateInfo-legacy-12fQcwXn.js", "./useActions-legacy-A6v3pRgY.js"], function (_export, _context) {
    "use strict";

    var __toESM, createStaticVNode, computed, createElementBlock, createCommentVNode, unref, toRefs, ref, onBeforeUnmount, createVNode, defineComponent, reactive, onUnmounted, toDisplayString, withMemo, createBlock, mergeProps, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, withModifiers, createTextVNode, createSlots, Transition, resolveDirective, normalizeProps, createBaseVNode, withDirectives, normalizeStyle, onClickOutside, useI18n, i18n, N8nNotice_default, N8nCallout_default, N8nText_default, N8nButton_default, N8nInfoTip_default, N8nIconButton_default, N8nLink_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, transformNodeType, useCredentialsStore, useUIStore, prepareCommunityNodeDetailsViewStack, shouldShowCommunityNodeDetails, flattenCreateElements, getHumanInTheLoopActions, useUsersStore, isNodePreviewKey, useActionsGenerator, getActiveViewCallouts, getRootSearchCallouts, useNodeTypesStore, filterAndSearchNodes, useTelemetry, removePreviewToken, OPEN_AI_NODE_TYPE, HTTP_REQUEST_NODE_TYPE, CUSTOM_API_CALL_KEY, AI_OTHERS_NODE_CREATOR_VIEW, AI_EVALUATION, WEBHOOK_NODE_TYPE, OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, DRAG_EVENT_DATA_KEY, isCommunityPackageName, AI_UNCATEGORIZED_CATEGORY, REQUEST_NODE_FORM_URL, TRIGGER_NODE_CREATOR_VIEW, HITL_SUBCATEGORY, PRE_BUILT_AGENTS_COLLECTION, AI_NODE_CREATOR_VIEW, REGULAR_NODE_CREATOR_VIEW, useDebounce, useExternalHooks, useChatPanelStore, SlideTransition_default, CategorizedItemsRenderer_default, verified_default, ItemsRenderer_default, useCalloutHelpers, useViewStacks, useKeyboardNavigation, TriggerView, RegularView, AIView, AINodesView, useNodeCreatorStore, require_camelCase, getNodeIconSource, NodeIcon_default, useBannersStore, captureException, useInstallNode, useInstalledCommunityPackage, CommunityNodeFooter_default, ContactAdministratorToInstall_default, CommunityNodeUpdateInfo_default, useActions, __vite_style__, _hoisted_1$5, SearchBar_vue_vue_type_script_setup_true_lang_default, searchContainer, prefix, active$1, text, suffix, clear, clickable, SearchBar_vue_vue_type_style_index_0_lang_module_default, cssModules$8, SearchBar_default, OrderSwitcher_vue_vue_type_script_setup_true_lang_default, OrderSwitcher_default, _hoisted_1$4, shield_alt_default, _hoisted_1$3, _hoisted_2$2, CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default, container$3, nodeIcon$2, description, separator, info$1, tooltipIcon, contactOwnerHint, CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default, cssModules$7, CommunityNodeInfo_default, ActionsMode_vue_vue_type_script_setup_true_lang_default, container$2, containerPaddingBottom, communityNodeFooter, resetSearch, actionsEmpty, apiHint, ActionsMode_vue_vue_type_style_index_0_lang_module_default, cssModules$6, ActionsMode_default, import_camelCase, _sfc_main, _hoisted_1$2, NoResultsIcon_default, _hoisted_1$1, _hoisted_2$1, NoResults_vue_vue_type_script_setup_true_lang_default, noResults, title$2, action, request, icon, external, NoResults_vue_vue_type_style_index_0_lang_module_default, cssModules$5, NoResults_default, NodesMode_vue_vue_type_script_setup_true_lang_default, items, NodesMode_vue_vue_type_style_index_0_lang_module_default, cssModules$4, NodesMode_default, CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default, container$1, header$1, title$1, nodeIcon$1, installedIcon, officialIcon, installed, CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default, cssModules$3, CommunityNodeDetails_default, CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default, container, CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default, cssModules$2, CommunityNodeDocsLink_default, _hoisted_1, _hoisted_2, NodesListPanel_vue_vue_type_script_setup_true_lang_default, info, backButton, backButtonIcon, nodeIcon, renderedItems, searchBar, nodesListPanel, footer, top, header, hasBg, title, subtitle, offsetSubtitle, NodesListPanel_vue_vue_type_style_index_0_lang_module_default, cssModules$1, NodesListPanel_default, NodeCreator_vue_vue_type_script_setup_true_lang_default, nodeCreator, nodeCreatorScrim, active, close, NodeCreator_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeCreator_default;
    function render(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createBaseVNode("path", {
        fill: "currentColor",
        d: "m466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3M256.1 446.3l-.1-381l175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7"
      }, null, -1)]));
    }
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [createStaticVNode("<title>no-nodes-keyart</title><g id=\"Nodes-panel-prototype-V2.1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"nodes-panel-(component)\" transform=\"translate(-2085.000000, -352.000000)\"><g id=\"nodes_panel\" transform=\"translate(1880.000000, 151.000000)\"><g id=\"Panel\" transform=\"translate(50.000000, 0.000000)\"><g id=\"Group-3\" transform=\"translate(105.000000, 171.000000)\"><g id=\"no-nodes-keyart\" transform=\"translate(50.000000, 30.000000)\"><rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"75\" height=\"75\"></rect><g id=\"Group\" transform=\"translate(6.562500, 8.164062)\" fill=\"#C4C8D1\" fill-rule=\"nonzero\"><polygon id=\"Rectangle\" transform=\"translate(49.192016, 45.302553) rotate(-45.000000) translate(-49.192016, -45.302553) \" points=\"44.5045606 32.0526802 53.8794707 32.0526802 53.8794707 58.5524261 44.5045606 58.5524261\"></polygon><path id=\"Path\" d=\"M48.125,23.0859375 C54.15625,23.0859375 59.0625,18.1796875 59.0625,12.1484375 C59.0625,10.3359375 58.5625,8.6484375 57.78125,7.1484375 L49.34375,15.5859375 L44.6875,10.9296875 L53.125,2.4921875 C51.625,1.7109375 49.9375,1.2109375 48.125,1.2109375 C42.09375,1.2109375 37.1875,6.1171875 37.1875,12.1484375 C37.1875,13.4296875 37.4375,14.6484375 37.84375,15.7734375 L32.0625,21.5546875 L26.5,15.9921875 L28.71875,13.7734375 L24.3125,9.3671875 L30.9375,2.7421875 C27.28125,-0.9140625 21.34375,-0.9140625 17.6875,2.7421875 L6.625,13.8046875 L11.03125,18.2109375 L2.21875,18.2109375 L1.38777878e-15,20.4296875 L11.0625,31.4921875 L13.28125,29.2734375 L13.28125,20.4296875 L17.6875,24.8359375 L19.90625,22.6171875 L25.46875,28.1796875 L2.3125,51.3359375 L8.9375,57.9609375 L44.5,22.4296875 C45.625,22.8359375 46.84375,23.0859375 48.125,23.0859375 Z\"></path></g></g></g></g></g></g></g>", 2)]));
    }
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        createStaticVNode = _vueRuntimeEsmBundlerLegacy003Js.A;
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        toRefs = _vueRuntimeEsmBundlerLegacy003Js.Ht;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        onUnmounted = _vueRuntimeEsmBundlerLegacy003Js.Q;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        withMemo = _vueRuntimeEsmBundlerLegacy003Js.St;
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
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_srcLegacy007Js) {
        N8nNotice_default = _srcLegacy007Js.E;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        transformNodeType = _useTelemetryLegacy00FJs.Ct;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        prepareCommunityNodeDetailsViewStack = _useTelemetryLegacy00FJs._t;
        shouldShowCommunityNodeDetails = _useTelemetryLegacy00FJs.bt;
        flattenCreateElements = _useTelemetryLegacy00FJs.ct;
        getHumanInTheLoopActions = _useTelemetryLegacy00FJs.dt;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        isNodePreviewKey = _useTelemetryLegacy00FJs.gt;
        useActionsGenerator = _useTelemetryLegacy00FJs.it;
        getActiveViewCallouts = _useTelemetryLegacy00FJs.lt;
        getRootSearchCallouts = _useTelemetryLegacy00FJs.pt;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        filterAndSearchNodes = _useTelemetryLegacy00FJs.st;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        removePreviewToken = _useTelemetryLegacy00FJs.vt;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        OPEN_AI_NODE_TYPE = _constantsLegacy00NJs.$t;
        HTTP_REQUEST_NODE_TYPE = _constantsLegacy00NJs.Et;
        CUSTOM_API_CALL_KEY = _constantsLegacy00NJs.I;
        AI_OTHERS_NODE_CREATOR_VIEW = _constantsLegacy00NJs.Ja;
        AI_EVALUATION = _constantsLegacy00NJs.Ka;
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
        OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE = _constantsLegacy00NJs.Qt;
        DRAG_EVENT_DATA_KEY = _constantsLegacy00NJs.R;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        AI_UNCATEGORIZED_CATEGORY = _constantsLegacy00NJs.Xa;
        REQUEST_NODE_FORM_URL = _constantsLegacy00NJs.co;
        TRIGGER_NODE_CREATOR_VIEW = _constantsLegacy00NJs.do;
        HITL_SUBCATEGORY = _constantsLegacy00NJs.no;
        PRE_BUILT_AGENTS_COLLECTION = _constantsLegacy00NJs.oo;
        AI_NODE_CREATOR_VIEW = _constantsLegacy00NJs.qa;
        REGULAR_NODE_CREATOR_VIEW = _constantsLegacy00NJs.so;
      }, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_chatPanelStoreLegacy00ZJs) {
        useChatPanelStore = _chatPanelStoreLegacy00ZJs.t;
      }, function (_ItemsRendererLegacy00$Js) {
        SlideTransition_default = _ItemsRendererLegacy00$Js.i;
        CategorizedItemsRenderer_default = _ItemsRendererLegacy00$Js.n;
        verified_default = _ItemsRendererLegacy00$Js.r;
        ItemsRenderer_default = _ItemsRendererLegacy00$Js.t;
      }, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_executionsStoreLegacy01dJs) {}, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01jJs._;
        useViewStacks = _nodeCreatorStoreLegacy01jJs.d;
        useKeyboardNavigation = _nodeCreatorStoreLegacy01jJs.f;
        TriggerView = _nodeCreatorStoreLegacy01jJs.g;
        RegularView = _nodeCreatorStoreLegacy01jJs.h;
        AIView = _nodeCreatorStoreLegacy01jJs.m;
        AINodesView = _nodeCreatorStoreLegacy01jJs.p;
        useNodeCreatorStore = _nodeCreatorStoreLegacy01jJs.t;
        require_camelCase = _nodeCreatorStoreLegacy01jJs.v;
      }, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {}, function (_foldersStoreLegacy01tJs) {}, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_bannersStoreLegacy01FJs) {
        useBannersStore = _bannersStoreLegacy01FJs.t;
      }, function (_exportsLegacy01XJs) {
        captureException = _exportsLegacy01XJs.n;
      }, function (_semverLegacy021Js) {}, function (_CommunityNodeUpdateInfoLegacy023Js) {
        useInstallNode = _CommunityNodeUpdateInfoLegacy023Js.a;
        useInstalledCommunityPackage = _CommunityNodeUpdateInfoLegacy023Js.i;
        CommunityNodeFooter_default = _CommunityNodeUpdateInfoLegacy023Js.n;
        ContactAdministratorToInstall_default = _CommunityNodeUpdateInfoLegacy023Js.r;
        CommunityNodeUpdateInfo_default = _CommunityNodeUpdateInfoLegacy023Js.t;
      }, function (_useActionsLegacy03dJs) {
        useActions = _useActionsLegacy03dJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._searchContainer_1mhzr_123 {\n  display: flex;\n  height: 40px;\n  padding: 0 var(--spacing--xs);\n  align-items: center;\n  margin: var(--search--margin, var(--spacing--sm));\n  filter: drop-shadow(0 2px 5px rgba(46, 46, 50, 0.04));\n  border: 1px solid var(--color--foreground);\n  background-color: var(--color--background--light-3);\n  color: var(--color--text--tint-1);\n  border-radius: 4px;\n}\n._searchContainer_1mhzr_123:focus-within {\n  border-color: var(--color--secondary);\n}\n._prefix_1mhzr_139 {\n  text-align: center;\n  font-size: var(--font-size--md);\n  margin-right: var(--spacing--xs);\n}\n._prefix_1mhzr_139._active_1mhzr_144 {\n  color: var(--color--primary) !important;\n}\n._text_1mhzr_148 {\n  flex-grow: 1;\n}\n._text_1mhzr_148 input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: var(--font-size--sm);\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: var(--color--background--light-3);\n  color: var(--color--text--shade-1);\n}\n._text_1mhzr_148 input::placeholder, ._text_1mhzr_148 input::-webkit-input-placeholder {\n  color: var(--color--text--tint-1);\n}\n._suffix_1mhzr_164 {\n  min-width: 20px;\n  text-align: right;\n  display: inline-block;\n}\n._clear_1mhzr_170 {\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n}\n._clear_1mhzr_170 svg path {\n  fill: var(--color--text--tint-1);\n}\n._clear_1mhzr_170:hover svg path {\n  fill: var(--color--text);\n}\n._clickable_1mhzr_183 {\n  cursor: pointer;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_169ak_123 {\n  width: 100%;\n  padding: var(--spacing--sm);\n  padding-top: 0;\n  margin-top: 0;\n  display: flex;\n  flex-direction: column;\n}\n._nodeIcon_169ak_132 {\n  --node--icon--size: 36px;\n  margin-right: var(--spacing--sm);\n}\n._description_169ak_137 {\n  margin: var(--spacing--md) 0;\n}\n._separator_169ak_141 {\n  height: var(--border-width);\n  background: var(--color--foreground);\n  margin-bottom: var(--spacing--md);\n}\n._info_169ak_147 {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: var(--spacing--md);\n  margin-bottom: var(--spacing--md);\n  flex-wrap: wrap;\n}\n._info_169ak_147 div {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n}\n._tooltipIcon_169ak_162 {\n  color: var(--color--text--tint-1);\n  font-size: var(--font-size--2xs);\n  width: 12px;\n}\n._contactOwnerHint_169ak_168 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--xs);\n  border: var(--border-width) solid var(--color--foreground);\n  border-radius: 0.25em;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_12w99_123 {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n._containerPaddingBottom_12w99_129 {\n  padding-bottom: var(--spacing--3xl);\n}\n._communityNodeFooter_12w99_133 {\n  margin-top: auto;\n}\n._resetSearch_12w99_137 {\n  cursor: pointer;\n  line-height: var(--line-height--md);\n  font-weight: var(--font-weight--regular);\n  font-size: var(--font-size--2xs);\n  padding: var(--spacing--2xs) var(--spacing--sm) 0;\n  color: var(--color--text);\n}\n._resetSearch_12w99_137 i {\n  font-weight: var(--font-weight--bold);\n  font-style: normal;\n  text-decoration: underline;\n}\n._actionsEmpty_12w99_151 {\n  padding: var(--spacing--2xs) var(--spacing--xs) var(--spacing--sm);\n  font-weight: var(--font-weight--regular);\n}\n._actionsEmpty_12w99_151 strong {\n  font-weight: var(--font-weight--bold);\n}\n._apiHint_12w99_159 {\n  padding: 0 var(--spacing--sm) var(--spacing--xl);\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n  line-height: var(--line-height--md);\n  z-index: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._noResults_1w8hr_123 {\n  background-color: var(--color--background--light-3);\n  text-align: center;\n  height: 100%;\n  border-left: 1px solid var(--color--foreground);\n  flex-direction: column;\n  font-weight: var(--font-weight--regular);\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0 var(--spacing--2xl);\n}\n._title_1w8hr_136 {\n  font-size: var(--font-size--md);\n  line-height: var(--line-height--md);\n  margin-top: var(--spacing--xs);\n}\n._title_1w8hr_136 div {\n  margin-bottom: var(--spacing--sm);\n}\n._action_1w8hr_145 p,\n._request_1w8hr_146 p {\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--xl);\n}\n._request_1w8hr_146 {\n  position: fixed;\n  bottom: var(--spacing--md);\n  display: none;\n}\n@media (min-height: 550px) {\n._request_1w8hr_146 {\n    display: block;\n}\n}\n._icon_1w8hr_162 {\n  margin-top: var(--spacing--2xl);\n  min-height: 67px;\n  opacity: 0.6;\n}\n._external_1w8hr_168 {\n  font-size: var(--font-size--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._items_bf97l_123 {\n  margin-bottom: var(--spacing--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1ibv8_123 {\n  width: 100%;\n  padding: var(--spacing--sm);\n  display: flex;\n  flex-direction: column;\n  padding-bottom: var(--spacing--xs);\n}\n._header_1ibv8_131 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n  justify-content: space-between;\n}\n._title_1ibv8_138 {\n  display: flex;\n  align-items: center;\n  color: var(--color--text);\n  font-size: var(--font-size--xl);\n  font-weight: var(--font-weight--bold);\n}\n._nodeIcon_1ibv8_146 {\n  --node--icon--size: 36px;\n  margin-right: var(--spacing--sm);\n}\n._installedIcon_1ibv8_151 {\n  margin-right: var(--spacing--3xs);\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}\n._officialIcon_1ibv8_157 {\n  display: inline-flex;\n  flex-shrink: 0;\n  margin-left: var(--spacing--4xs);\n  color: var(--color--text);\n  width: 14px;\n}\n._installed_1ibv8_151 {\n  display: flex;\n  align-items: center;\n  margin-right: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1ms6i_123 {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-bottom: var(--spacing--5xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.panel-slide-in-leave-active,\n.panel-slide-in-enter-active,\n.panel-slide-out-leave-active,\n.panel-slide-out-enter-active {\n  transition: transform 200ms ease;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.panel-slide-out-enter-from,\n.panel-slide-in-leave-to {\n  transform: translateX(0);\n  z-index: -1;\n}\n.panel-slide-out-leave-to,\n.panel-slide-in-enter-from {\n  transform: translateX(100%);\n  z-index: 1;\n}\n._info_yqjqi_145 {\n  margin: var(--spacing--2xs) var(--spacing--sm);\n}\n._backButton_yqjqi_149 {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: var(--spacing--2xs) var(--spacing--xs) 0 0;\n}\n._backButtonIcon_yqjqi_156 {\n  color: var(--color--text--tint-1);\n  padding: 0;\n}\n._nodeIcon_yqjqi_161 {\n  --node--icon--size: 20px;\n  --node--icon--color: var(--color--text);\n  margin-right: var(--spacing--sm);\n}\n._renderedItems_yqjqi_167 {\n  overflow: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  scrollbar-width: none; /* Firefox 64 */\n  padding-bottom: var(--spacing--xl);\n}\n._renderedItems_yqjqi_167::-webkit-scrollbar {\n  display: none;\n}\n._searchBar_yqjqi_179 {\n  flex-shrink: 0;\n}\n._nodesListPanel_yqjqi_183 {\n  background: var(--color--background--light-3);\n  height: 100%;\n  background-color: var(--color--background--light-3);\n  --node--icon--badge--color--background: var(--color--background--light-3);\n  width: var(--node-creator--width);\n  display: flex;\n  flex-direction: column;\n}\n._nodesListPanel_yqjqi_183:before {\n  box-sizing: border-box;\n  content: \"\";\n  border-left: 1px solid var(--color--foreground);\n  width: 1px;\n  position: absolute;\n  height: 100%;\n}\n._footer_yqjqi_201 {\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n  margin: 0 var(--spacing--xs) 0;\n  padding: var(--spacing--4xs) 0;\n  line-height: var(--line-height--md);\n  border-top: 1px solid var(--color--foreground);\n  z-index: 1;\n  margin-top: -1px;\n}\n._top_yqjqi_212 {\n  display: flex;\n  align-items: center;\n}\n._header_yqjqi_217 {\n  font-size: var(--font-size--lg);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--sm);\n  padding: var(--spacing--sm) var(--spacing--sm);\n}\n._header_yqjqi_217._hasBg_yqjqi_223 {\n  border-bottom: var(--color--foreground) solid 1px;\n  background-color: var(--color--background);\n}\n._title_yqjqi_228 {\n  line-height: 24px;\n  font-weight: var(--font-weight--bold);\n  font-size: var(--font-size--lg);\n  margin: 0;\n}\n._hasBg_yqjqi_223 ._title_yqjqi_228 {\n  font-size: var(--font-size--sm-m);\n  line-height: 22px;\n}\n._subtitle_yqjqi_239 {\n  margin-top: var(--spacing--4xs);\n  font-size: var(--font-size--sm);\n  line-height: 19px;\n  color: var(--color--text);\n  font-weight: var(--font-weight--regular);\n}\n._offsetSubtitle_yqjqi_247 {\n  margin-left: calc(var(--spacing--xl) + var(--spacing--4xs));\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.nodes-list-panel-ai_chain .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_chain-color);\n}\n.nodes-list-panel-ai_document .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_document-color);\n}\n.nodes-list-panel-ai_embedding .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_embedding-color);\n}\n.nodes-list-panel-ai_languageModel .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_languageModel-color);\n}\n.nodes-list-panel-ai_memory .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_memory-color);\n}\n.nodes-list-panel-ai_outputParser .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_outputParser-color);\n}\n.nodes-list-panel-ai_tool .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_tool-color);\n}\n.nodes-list-panel-ai_retriever .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_retriever-color);\n}\n.nodes-list-panel-ai_textSplitter .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_textSplitter-color);\n}\n.nodes-list-panel-ai_vectorRetriever .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_vectorRetriever-color);\n}\n.nodes-list-panel-ai_vectorStore .nodes-list-panel-header .n8n-node-icon svg {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  color: var(--node-type-ai_vectorStore-color);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\nstrong {\n  font-weight: var(--font-weight--bold);\n}\n._nodeCreator_r2zvk_127 {\n  --node-creator--width: 385px;\n  --node--icon--color: var(--color--text);\n  position: fixed;\n  top: calc(var(--header--height) * 1px);\n  bottom: 0;\n  right: 0;\n  z-index: var(--node-creator--z);\n  width: var(--node-creator--width);\n  color: var(--color--text--shade-1);\n}\n._nodeCreatorScrim_r2zvk_139 {\n  position: fixed;\n  top: calc(var(--header--height) * 1px);\n  right: 0;\n  bottom: 0;\n  left: 65px;\n  opacity: 0;\n  z-index: 1;\n  background: var(--dialog--overlay--color--background);\n  pointer-events: none;\n  transition: opacity 200ms ease-in-out;\n}\n._nodeCreatorScrim_r2zvk_139._active_r2zvk_151 {\n  opacity: 0.7;\n}\n._close_r2zvk_155 {\n  position: absolute;\n  z-index: calc(var(--node-creator--z) + 1);\n  top: var(--spacing--xs);\n  right: var(--spacing--xs);\n  background: transparent;\n  border: 0;\n  display: none;\n}\n@media screen and (max-width: 450px) {\n._nodeCreator_r2zvk_127 {\n    --node-creator--width: calc(100vw - 65px);\n}\n._close_r2zvk_155 {\n    display: inline-flex;\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/shared/nodeCreator/components/Panel/SearchBar.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$5 = ["placeholder", "value"];
        SearchBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SearchBar",
          props: {
            placeholder: {
              default: ""
            },
            modelValue: {
              default: ""
            }
          },
          emits: ["update:modelValue"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const emit = __emit;
            const state = reactive({
              inputRef: null
            });
            const externalHooks = useExternalHooks();
            function focus() {
              state.inputRef?.focus();
            }
            function onInput(event) {
              const input = event.target;
              emit("update:modelValue", input.value.trim());
            }
            function clear$1() {
              emit("update:modelValue", "");
            }
            onMounted(() => {
              externalHooks.run("nodeCreatorSearchBar.mount", {
                inputRef: state.inputRef
              });
              setTimeout(focus, 0);
            });
            onBeforeUnmount(() => {
              state.inputRef?.remove();
            });
            const {
              inputRef
            } = toRefs(state);
            __expose({
              focus
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.searchContainer),
                "data-test-id": "search-bar"
              }, [createBaseVNode("div", {
                class: normalizeClass({
                  [_ctx.$style.prefix]: true,
                  [_ctx.$style.active]: _ctx.modelValue.length > 0
                })
              }, [createVNode(unref(N8nIcon_default), {
                icon: "search",
                size: "small"
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.text)
              }, [createBaseVNode("input", {
                ref_key: "inputRef",
                ref: inputRef,
                placeholder: _ctx.placeholder,
                value: _ctx.modelValue,
                class: normalizeClass(_ctx.$style.input),
                autofocus: "",
                "data-test-id": "node-creator-search-bar",
                tabindex: "0",
                onInput
              }, null, 42, _hoisted_1$5)], 2), _ctx.modelValue.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.$style.suffix, _ctx.$style.clickable]),
                onClick: clear$1
              }, [createVNode(unref(N8nIcon_default), {
                size: "small",
                icon: "circle-x"
              })], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/SearchBar.vue?vue&type=style&index=0&lang.module.scss
        searchContainer = "_searchContainer_1mhzr_123";
        prefix = "_prefix_1mhzr_139";
        active$1 = "_active_1mhzr_144";
        text = "_text_1mhzr_148";
        suffix = "_suffix_1mhzr_164";
        clear = "_clear_1mhzr_170";
        clickable = "_clickable_1mhzr_183";
        SearchBar_vue_vue_type_style_index_0_lang_module_default = {
          searchContainer,
          prefix,
          active: active$1,
          text,
          suffix,
          clear,
          clickable
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/SearchBar.vue
        cssModules$8 = {
          "$style": SearchBar_vue_vue_type_style_index_0_lang_module_default
        };
        SearchBar_default = /* @__PURE__ */__plugin_vue_export_helper_default(SearchBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$8]]); //#endregion
        //#region src/features/shared/nodeCreator/components/OrderSwitcher.vue?vue&type=script&setup=true&lang.ts
        OrderSwitcher_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "OrderSwitcher",
          props: {
            rootView: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [_ctx.rootView === unref("Regular") ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [renderSlot(_ctx.$slots, "actions"), renderSlot(_ctx.$slots, "triggers")], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [renderSlot(_ctx.$slots, "triggers"), renderSlot(_ctx.$slots, "actions")], 64))]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/OrderSwitcher.vue
        OrderSwitcher_default = OrderSwitcher_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region ~icons/fa-solid/shield-alt
        _hoisted_1$4 = {
          viewBox: "0 0 512 512",
          width: "1.2em",
          height: "1.2em"
        };
        shield_alt_default = {
          name: "fa-solid-shield-alt",
          render
        }; //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInfo.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = {
          key: 2
        };
        _hoisted_2$2 = {
          key: 3
        };
        CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeInfo",
          setup(__props) {
            const {
              activeViewStack
            } = useViewStacks();
            const {
              communityNodeDetails
            } = activeViewStack;
            const publisherName = ref(void 0);
            const downloads = ref(null);
            const verified = ref(false);
            const official = ref(false);
            const {
              installedPackage,
              initInstalledPackage,
              isUpdateCheckAvailable
            } = useInstalledCommunityPackage(computed(() => communityNodeDetails?.packageName));
            const nodeTypesStore = useNodeTypesStore();
            const isOwner = computed(() => useUsersStore().isInstanceOwner);
            const formatNumber = number => {
              if (!number) return null;
              return new Intl.NumberFormat("en-US").format(number);
            };
            async function fetchPackageInfo(packageName) {
              const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(activeViewStack.communityNodeDetails?.key || "");
              let packageInfo = installedPackage.value;
              if (communityNodeDetails?.installed && !packageInfo) packageInfo = await initInstalledPackage();
              if (communityNodeAttributes) {
                publisherName.value = communityNodeAttributes.companyName ?? communityNodeAttributes.authorName;
                downloads.value = formatNumber(communityNodeAttributes.numberOfDownloads);
                official.value = communityNodeAttributes.isOfficialNode;
                if (!packageInfo) verified.value = true;else verified.value = (communityNodeAttributes.nodeVersions?.map(v => v.npmVersion) ?? []).includes(packageInfo.installedVersion);
                return;
              }
              const url = `https://registry.npmjs.org/${packageName}`;
              try {
                const response = await fetch(url);
                if (!response.ok) {
                  captureException(/* @__PURE__ */new Error("Could not get metadata for package"), {
                    extra: {
                      packageName
                    }
                  });
                  return;
                }
                publisherName.value = (await response.json()).maintainers?.[0]?.name;
                const downloadsUrl = `https://api.npmjs.org/downloads/range/2022-01-01:${(/* @__PURE__ */new Date()).toISOString().split("T")[0]}/${packageName}`;
                const downloadsResponse = await fetch(downloadsUrl);
                if (!downloadsResponse.ok) {
                  captureException(/* @__PURE__ */new Error("Could not get downloads for package"), {
                    extra: {
                      packageName
                    }
                  });
                  return;
                }
                const downloadsData = await downloadsResponse.json();
                if (!downloadsData.downloads?.length) return;
                downloads.value = formatNumber(downloadsData.downloads.reduce((sum, day) => sum + day.downloads, 0));
              } catch (error) {
                captureException(error, {
                  extra: {
                    packageName
                  }
                });
              }
            }
            onMounted(async () => {
              if (communityNodeDetails?.packageName) await fetchPackageInfo(communityNodeDetails.packageName);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nText_default), {
                class: normalizeClass(_ctx.$style.description),
                color: "text-base",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(communityNodeDetails)?.description), 1)]),
                _: 1
              }, 8, ["class"]), unref(isUpdateCheckAvailable) && unref(installedPackage)?.updateAvailable ? (openBlock(), createBlock(CommunityNodeUpdateInfo_default, {
                key: 0,
                "data-test-id": "update-available",
                "package-name": unref(communityNodeDetails)?.packageName,
                source: "node creator panel"
              }, null, 8, ["package-name"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.separator)
              }, null, 2)), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.info)
              }, [verified.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                placement: "top"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(official.value ? unref(i18n).baseText("communityNodeInfo.officialApproved") : unref(i18n).baseText("communityNodeInfo.approved")), 1)]),
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(shield_alt_default), {
                  class: normalizeClass(_ctx.$style.tooltipIcon)
                }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "xsmall",
                  bold: "",
                  "data-test-id": "verified-tag"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.approved.label")), 1)]),
                  _: 1
                })])]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                placement: "top"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified")), 1)]),
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.tooltipIcon),
                  icon: "box"
                }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "xsmall",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified.label")), 1)]),
                  _: 1
                })])]),
                _: 1
              })), downloads.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nIcon_default), {
                class: normalizeClass(_ctx.$style.tooltipIcon),
                icon: "hard-drive-download"
              }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                color: "text-light",
                size: "xsmall",
                bold: "",
                "data-test-id": "number-of-downloads"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.downloads", {
                  interpolate: {
                    downloads: downloads.value
                  }
                })), 1)]),
                _: 1
              })])) : createCommentVNode("", true), publisherName.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [createVNode(unref(N8nIcon_default), {
                class: normalizeClass(_ctx.$style.tooltipIcon),
                icon: "user"
              }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                color: "text-light",
                size: "xsmall",
                bold: "",
                "data-test-id": "publisher-name"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.publishedBy", {
                  interpolate: {
                    publisherName: publisherName.value
                  }
                })), 1)]),
                _: 1
              })])) : createCommentVNode("", true)], 2), !isOwner.value && !unref(communityNodeDetails)?.installed ? (openBlock(), createBlock(ContactAdministratorToInstall_default, {
                key: 2
              })) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInfo.vue?vue&type=style&index=0&lang.module.scss
        container$3 = "_container_169ak_123";
        nodeIcon$2 = "_nodeIcon_169ak_132";
        description = "_description_169ak_137";
        separator = "_separator_169ak_141";
        info$1 = "_info_169ak_147";
        tooltipIcon = "_tooltipIcon_169ak_162";
        contactOwnerHint = "_contactOwnerHint_169ak_168";
        CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default = {
          container: container$3,
          nodeIcon: nodeIcon$2,
          description,
          separator,
          info: info$1,
          tooltipIcon,
          contactOwnerHint
        }; //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInfo.vue
        cssModules$7 = {
          "$style": CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default
        };
        CommunityNodeInfo_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$7]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Modes/ActionsMode.vue?vue&type=script&setup=true&lang.ts
        ActionsMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ActionsMode",
          emits: ["nodeTypeSelected"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const telemetry = useTelemetry();
            const i18n$1 = useI18n();
            const {
              userActivated,
              isInstanceOwner
            } = useUsersStore();
            const {
              popViewStack,
              updateCurrentViewStack
            } = useViewStacks();
            const {
              registerKeyHook
            } = useKeyboardNavigation();
            const {
              setAddedNodeActionParameters,
              getActionData,
              actionDataToNodeTypeSelectedPayload,
              getPlaceholderTriggerActions,
              parseCategoryActions,
              actionsCategoryLocales
            } = useActions();
            const nodeCreatorStore = useNodeCreatorStore();
            const calloutHelpers = useCalloutHelpers();
            const parsedTriggerActions = computed(() => parseActions(actions.value, actionsCategoryLocales.value.triggers, false));
            const parsedActionActions = computed(() => parseActions(actions.value, actionsCategoryLocales.value.actions, !search.value));
            const parsedTriggerActionsBaseline = computed(() => parseActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.triggers, false));
            const parsedActionActionsBaseline = computed(() => parseActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.actions, !search.value));
            const triggerCategoryName = computed(() => parsedTriggerActions.value.length || search.value ? actionsCategoryLocales.value.triggers : `${actionsCategoryLocales.value.triggers} (${placeholderTriggerActions.length})`);
            const actions = computed(() => {
              return (useViewStacks().activeViewStack.items || []).filter(p => p.properties.actionKey !== CUSTOM_API_CALL_KEY);
            });
            const search = computed(() => useViewStacks().activeViewStack.search);
            const subcategory = computed(() => useViewStacks().activeViewStack.subcategory);
            const rootView = computed(() => useViewStacks().activeViewStack.rootView);
            const communityNodeDetails = computed(() => useViewStacks().activeViewStack?.communityNodeDetails);
            const placeholderTriggerActions = getPlaceholderTriggerActions(subcategory.value || "");
            const hasNoTriggerActions = computed(() => parseCategoryActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.triggers, !search.value).length === 0);
            const containsAPIAction = computed(() => {
              return (useViewStacks().activeViewStack.baselineItems || []).some(p => {
                return (p.properties.actionKey ?? "") === CUSTOM_API_CALL_KEY;
              });
            });
            const isTriggerRootView = computed(() => rootView.value === TRIGGER_NODE_CREATOR_VIEW);
            const shouldShowTriggers = computed(() => {
              if (communityNodeDetails.value && !parsedTriggerActions.value.length) return !isNodePreviewKey(useViewStacks().activeViewStack?.items?.[0].key) && isTriggerRootView.value;
              return isTriggerRootView.value || parsedTriggerActionsBaseline.value.length !== 0;
            });
            registerKeyHook("ActionsKeyRight", {
              keyboardKeys: ["ArrowRight", "Enter"],
              condition: type => type === "action",
              handler: onKeySelect
            });
            registerKeyHook("ActionsKeyLeft", {
              keyboardKeys: ["ArrowLeft"],
              condition: type => type === "action",
              handler: arrowLeft
            });
            function parseActions(base, locale, withLabels = false) {
              return parseCategoryActions(base, locale, withLabels);
            }
            function arrowLeft() {
              popViewStack();
            }
            function onKeySelect(activeItemId) {
              const activeAction = [...actions.value, ...placeholderTriggerActions].find(a => a.uuid === activeItemId);
              if (activeAction) onSelected(activeAction);
            }
            function onSelected(actionCreateElement) {
              if (actionCreateElement.type === "openTemplate") calloutHelpers.openSampleWorkflowTemplate(actionCreateElement.properties.templateId, {
                telemetry: {
                  source: "nodeCreator",
                  section: useViewStacks().activeViewStack.title
                }
              });
              if (actionCreateElement.type !== "action") return;
              const actionData = getActionData(actionCreateElement.properties);
              if (placeholderTriggerActions.some(p => p.key === actionCreateElement.key) && isTriggerRootView.value) {
                const actionNode = actions.value[0]?.key;
                if (actionNode) emit("nodeTypeSelected", [{
                  type: actionData.key
                }, {
                  type: actionNode
                }]);
              } else if (actionData?.key === "@n8n/n8n-nodes-langchain.openAi" && actionData?.value?.resource === "assistant" && actionData?.value?.operation === "message") emit("nodeTypeSelected", [{
                type: OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE
              }]);else if (isNodePreviewKey(actionData?.key)) return;else emit("nodeTypeSelected", [actionDataToNodeTypeSelectedPayload(actionData)]);
              if (telemetry) setAddedNodeActionParameters(actionData, telemetry, rootView.value);
            }
            function trackActionsView() {
              const activeViewStack = useViewStacks().activeViewStack;
              const trigger_action_count = (activeViewStack.baselineItems || [])?.filter(action$1 => action$1.key.toLowerCase().includes("trigger")).length;
              const trackingPayload = {
                app_identifier: [...actions.value, ...placeholderTriggerActions][0].key,
                actions: (activeViewStack.baselineItems || [])?.map(action$1 => action$1.properties.displayName),
                regular_action_count: (activeViewStack.baselineItems || [])?.length - trigger_action_count,
                trigger_action_count
              };
              useExternalHooks().run("nodeCreateList.onViewActions", trackingPayload);
              nodeCreatorStore.onViewActions(trackingPayload);
            }
            function resetSearch$1() {
              updateCurrentViewStack({
                search: ""
              });
            }
            function addHttpNode() {
              const updateData = {
                name: "",
                key: HTTP_REQUEST_NODE_TYPE,
                value: {
                  authentication: "predefinedCredentialType"
                }
              };
              emit("nodeTypeSelected", [{
                type: HTTP_REQUEST_NODE_TYPE
              }]);
              if (telemetry) setAddedNodeActionParameters(updateData);
              const app_identifier = actions.value[0]?.key;
              if (!app_identifier) return;
              useExternalHooks().run("nodeCreateList.onActionsCustmAPIClicked", {
                app_identifier
              });
              nodeCreatorStore.onActionsCustomAPIClicked({
                app_identifier
              });
            }
            onMounted(() => {
              trackActionsView();
            });
            const callouts = computed(() => getActiveViewCallouts(useViewStacks().activeViewStack.title, calloutHelpers.isPreBuiltAgentsCalloutVisible.value, calloutHelpers.getPreBuiltAgentNodeCreatorItems()));
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  [_ctx.$style.container]: true,
                  [_ctx.$style.containerPaddingBottom]: !communityNodeDetails.value
                })
              }, [createVNode(ItemsRenderer_default, {
                elements: callouts.value,
                class: normalizeClass(_ctx.$style.items),
                onSelected
              }, null, 8, ["elements", "class"]), communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeInfo_default, {
                key: 0
              })) : createCommentVNode("", true), rootView.value ? (openBlock(), createBlock(OrderSwitcher_default, {
                key: 1,
                "root-view": rootView.value
              }, createSlots({
                _: 2
              }, [shouldShowTriggers.value ? {
                name: "triggers",
                fn: withCtx(() => [withMemo([search.value], () => createVNode(CategorizedItemsRenderer_default, {
                  elements: parsedTriggerActions.value,
                  category: triggerCategoryName.value,
                  "mouse-over-tooltip": unref(i18n$1).baseText("nodeCreator.actionsTooltip.triggersStartWorkflow"),
                  "is-trigger-category": "",
                  expanded: isTriggerRootView.value || parsedActionActions.value.length === 0,
                  onSelected
                }, createSlots({
                  _: 2
                }, [hasNoTriggerActions.value ? {
                  name: "empty",
                  fn: withCtx(() => [hasNoTriggerActions.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                    key: 0,
                    theme: "info",
                    iconless: "",
                    slim: "",
                    "data-test-id": "actions-panel-no-triggers-callout"
                  }, {
                    default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCallout.noTriggerItems", {
                      interpolate: {
                        nodeName: subcategory.value ?? ""
                      }
                    })]])]),
                    _: 1
                  })) : createCommentVNode("", true), createVNode(ItemsRenderer_default, {
                    elements: unref(placeholderTriggerActions),
                    onSelected
                  }, null, 8, ["elements"])]),
                  key: "0"
                } : {
                  name: "empty",
                  fn: withCtx(() => [withDirectives(createBaseVNode("p", {
                    class: normalizeClass(_ctx.$style.resetSearch),
                    onClick: resetSearch$1
                  }, null, 2), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCategory.noMatchingTriggers")]])]),
                  key: "1"
                }]), 1032, ["elements", "category", "mouse-over-tooltip", "expanded"]), _cache, 0)]),
                key: "0"
              } : void 0, !isTriggerRootView.value || parsedActionActionsBaseline.value.length !== 0 ? {
                name: "actions",
                fn: withCtx(() => [withMemo([search.value], () => createVNode(CategorizedItemsRenderer_default, {
                  elements: parsedActionActions.value,
                  category: unref(actionsCategoryLocales).actions,
                  "mouse-over-tooltip": unref(i18n$1).baseText("nodeCreator.actionsTooltip.actionsPerformStep"),
                  expanded: !isTriggerRootView.value || parsedTriggerActions.value.length === 0,
                  onSelected
                }, {
                  empty: withCtx(() => [!search.value ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
                    key: 0,
                    theme: "info",
                    type: "note",
                    class: normalizeClass(_ctx.$style.actionsEmpty)
                  }, {
                    default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCallout.noActionItems", {
                      interpolate: {
                        nodeName: subcategory.value ?? ""
                      }
                    })]])]),
                    _: 1
                  }, 8, ["class"])) : withDirectives((openBlock(), createElementBlock("p", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.resetSearch),
                    "data-test-id": "actions-panel-no-matching-actions",
                    onClick: resetSearch$1
                  }, null, 2)), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCategory.noMatchingActions")]])]),
                  default: withCtx(() => [!unref(userActivated) && isTriggerRootView.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                    key: 0,
                    theme: "info",
                    iconless: "",
                    slim: "",
                    "data-test-id": "actions-panel-activation-callout"
                  }, {
                    default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCallout.triggersStartWorkflow")]])]),
                    _: 1
                  })) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["elements", "category", "mouse-over-tooltip", "expanded"]), _cache, 1)]),
                key: "1"
              } : void 0]), 1032, ["root-view"])) : createCommentVNode("", true), containsAPIAction.value && !communityNodeDetails.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.apiHint)
              }, [withDirectives(createBaseVNode("span", {
                onClick: withModifiers(addHttpNode, ["prevent"])
              }, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsList.apiCall", {
                interpolate: {
                  node: subcategory.value ?? ""
                }
              })]])], 2)) : createCommentVNode("", true), communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
                key: 3,
                class: normalizeClass(_ctx.$style.communityNodeFooter),
                "package-name": communityNodeDetails.value.packageName,
                "show-manage": communityNodeDetails.value.installed && unref(isInstanceOwner)
              }, null, 8, ["class", "package-name", "show-manage"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Modes/ActionsMode.vue?vue&type=style&index=0&lang.module.scss
        container$2 = "_container_12w99_123";
        containerPaddingBottom = "_containerPaddingBottom_12w99_129";
        communityNodeFooter = "_communityNodeFooter_12w99_133";
        resetSearch = "_resetSearch_12w99_137";
        actionsEmpty = "_actionsEmpty_12w99_151";
        apiHint = "_apiHint_12w99_159";
        ActionsMode_vue_vue_type_style_index_0_lang_module_default = {
          container: container$2,
          containerPaddingBottom,
          communityNodeFooter,
          resetSearch,
          actionsEmpty,
          apiHint
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Modes/ActionsMode.vue
        cssModules$6 = {
          "$style": ActionsMode_vue_vue_type_style_index_0_lang_module_default
        };
        ActionsMode_default = /* @__PURE__ */__plugin_vue_export_helper_default(ActionsMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NoResultsIcon.vue
        import_camelCase = /* @__PURE__ */__toESM(require_camelCase());
        _sfc_main = {};
        _hoisted_1$2 = {
          width: "75px",
          height: "75px",
          viewBox: "0 0 75 75",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink"
        };
        NoResultsIcon_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NoResults.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = ["textContent"];
        _hoisted_2$1 = ["textContent"];
        NoResults_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NoResults",
          props: {
            showIcon: {
              type: Boolean
            },
            showRequest: {
              type: Boolean
            },
            rootView: {}
          },
          setup(__props) {
            const i18n$1 = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  [_ctx.$style.noResults]: true,
                  [_ctx.$style.iconless]: !_ctx.showIcon
                }),
                "data-test-id": "node-creator-no-results"
              }, [_ctx.showIcon ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.icon)
              }, [createVNode(NoResultsIcon_default)], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.title)
              }, [renderSlot(_ctx.$slots, "title"), createBaseVNode("p", {
                textContent: toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.weDidntMakeThatYet"))
              }, null, 8, _hoisted_1$1), _ctx.rootView === unref("Regular") || _ctx.rootView === unref("Trigger") ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.action)
              }, [createTextVNode(toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe")) + " ", 1), _ctx.rootView === unref("Regular") ? (openBlock(), createBlock(unref(N8nLink_default), {
                key: 0,
                onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit("addHttpNode"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.httpRequest")), 1)]),
                _: 1
              })) : createCommentVNode("", true), _ctx.rootView === unref("Trigger") ? (openBlock(), createBlock(unref(N8nLink_default), {
                key: 1,
                onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit("addWebhookNode"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.webhook")), 1)]),
                _: 1
              })) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.node")), 1)], 2)) : createCommentVNode("", true)], 2), _ctx.showRequest ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.request)
              }, [createBaseVNode("p", {
                textContent: toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.wantUsToMakeItFaster"))
              }, null, 8, _hoisted_2$1), createBaseVNode("div", null, [createVNode(unref(N8nLink_default), {
                to: unref(REQUEST_NODE_FORM_URL)
              }, {
                default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.requestTheNode")), 1), _cache[2] || (_cache[2] = createTextVNode("\xA0 ")), createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.external),
                  icon: "external-link",
                  title: unref(i18n$1).baseText("nodeCreator.noResults.requestTheNode")
                }, null, 8, ["class", "title"])])]),
                _: 1
              }, 8, ["to"])])], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NoResults.vue?vue&type=style&index=0&lang.module.scss
        noResults = "_noResults_1w8hr_123";
        title$2 = "_title_1w8hr_136";
        action = "_action_1w8hr_145";
        request = "_request_1w8hr_146";
        icon = "_icon_1w8hr_162";
        external = "_external_1w8hr_168";
        NoResults_vue_vue_type_style_index_0_lang_module_default = {
          noResults,
          title: title$2,
          action,
          request,
          icon,
          external
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NoResults.vue
        cssModules$5 = {
          "$style": NoResults_vue_vue_type_style_index_0_lang_module_default
        };
        NoResults_default = /* @__PURE__ */__plugin_vue_export_helper_default(NoResults_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Modes/NodesMode.vue?vue&type=script&setup=true&lang.ts
        NodesMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodesMode",
          emits: ["nodeTypeSelected"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const i18n$1 = useI18n();
            const calloutHelpers = useCalloutHelpers();
            const {
              mergedNodes,
              actions,
              onSubcategorySelected
            } = useNodeCreatorStore();
            const {
              pushViewStack,
              popViewStack,
              isAiSubcategoryView
            } = useViewStacks();
            const {
              setAddedNodeActionParameters,
              nodeCreateElementToNodeTypeSelectedPayload
            } = useActions();
            const {
              registerKeyHook
            } = useKeyboardNavigation();
            const activeViewStack = computed(() => useViewStacks().activeViewStack);
            const globalSearchItemsDiff = computed(() => useViewStacks().globalSearchItemsDiff);
            const communityNodesAndActions = computed(() => useNodeTypesStore().communityNodesAndActions);
            const moreFromCommunity = computed(() => {
              return filterAndSearchNodes(communityNodesAndActions.value.mergedNodes, activeViewStack.value.search ?? "", isAiSubcategoryView(activeViewStack.value));
            });
            const isSearchResultEmpty = computed(() => {
              return (activeViewStack.value.items || []).length === 0 && globalCallouts.value.length + globalSearchItemsDiff.value.length + moreFromCommunity.value.length === 0;
            });
            function getFilteredActions(node, actions$1) {
              const nodeActions = actions$1?.[node.key] || [];
              if (activeViewStack.value.subcategory === "Human in the Loop") return getHumanInTheLoopActions(nodeActions);
              if (activeViewStack.value.actionsFilter) return activeViewStack.value.actionsFilter(nodeActions);
              return nodeActions;
            }
            function onSelected(item) {
              if (item.key === "pre-built-agents-collection") {
                calloutHelpers.openPreBuiltAgentsCollection({
                  telemetry: {
                    source: "nodeCreator",
                    section: activeViewStack.value.title
                  },
                  resetStacks: false
                });
                return;
              }
              if (item.type === "subcategory") {
                const subcategoryKey = (0, import_camelCase.default)(item.properties.title);
                const title$3 = i18n$1.baseText(`nodeCreator.subcategoryNames.${subcategoryKey}`);
                const infoKey = `nodeCreator.subcategoryInfos.${subcategoryKey}`;
                const info$2 = i18n$1.baseText(infoKey);
                const extendedInfo = info$2 !== infoKey ? {
                  info: info$2
                } : {};
                const nodeIcon$3 = item.properties.icon ? {
                  type: "icon",
                  name: item.properties.icon
                } : void 0;
                pushViewStack({
                  subcategory: item.key,
                  mode: "nodes",
                  title: title$3,
                  nodeIcon: nodeIcon$3,
                  ...extendedInfo,
                  ...(item.properties.panelClass ? {
                    panelClass: item.properties.panelClass
                  } : {}),
                  rootView: activeViewStack.value.rootView,
                  forceIncludeNodes: item.properties.forceIncludeNodes,
                  baseFilter: baseSubcategoriesFilter,
                  itemsMapper: subcategoriesMapper,
                  sections: item.properties.sections
                });
                onSubcategorySelected({
                  subcategory: item.key
                });
              }
              if (item.type === "node") {
                let nodeActions = getFilteredActions(item, actions);
                if (shouldShowCommunityNodeDetails(isCommunityPackageName(item.key), activeViewStack.value)) {
                  if (!nodeActions.length) nodeActions = getFilteredActions(item, communityNodesAndActions.value.actions);
                  pushViewStack(prepareCommunityNodeDetailsViewStack(item, getNodeIconSource(item.properties), activeViewStack.value.rootView, nodeActions));
                  return;
                }
                const payload = nodeCreateElementToNodeTypeSelectedPayload(item);
                if (nodeActions.length === 1) {
                  emit("nodeTypeSelected", [payload]);
                  setAddedNodeActionParameters({
                    name: nodeActions[0].defaults.name ?? item.properties.displayName,
                    key: item.key,
                    value: nodeActions[0].values
                  });
                  return;
                }
                if (nodeActions.length === 0 || activeViewStack.value.hideActions) {
                  emit("nodeTypeSelected", [payload]);
                  return;
                }
                const transformedActions = nodeActions?.map(a => transformNodeType(a, item.properties.displayName, "action"));
                pushViewStack({
                  subcategory: item.properties.displayName,
                  title: item.properties.displayName,
                  nodeIcon: getNodeIconSource(item.properties),
                  rootView: activeViewStack.value.rootView,
                  hasSearch: true,
                  mode: "actions",
                  items: transformedActions
                });
              }
              if (item.type === "view") {
                const views = {
                  [TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
                  [REGULAR_NODE_CREATOR_VIEW]: RegularView,
                  ["AI"]: AIView,
                  [AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView
                };
                const itemKey = item.key;
                const matchedView = views[itemKey];
                if (!matchedView) {
                  console.warn(`No view found for ${itemKey}`);
                  return;
                }
                const view = matchedView(mergedNodes);
                pushViewStack({
                  title: view.title,
                  subtitle: view?.subtitle ?? "",
                  info: view?.info ?? "",
                  items: view.items,
                  hasSearch: true,
                  rootView: view.value,
                  mode: "nodes",
                  searchItems: mergedNodes
                });
              }
              if (item.type === "link") window.open(item.properties.url, "_blank");
              if (item.type === "openTemplate") calloutHelpers.openSampleWorkflowTemplate(item.properties.templateId, {
                telemetry: {
                  source: "nodeCreator",
                  section: activeViewStack.value.title
                }
              });
            }
            function subcategoriesMapper(item) {
              if (item.type !== "node") return item;
              const hasTriggerGroup = item.properties.group.includes("trigger");
              const hasActions = getFilteredActions(item, actions).length > 0;
              if (hasTriggerGroup && hasActions) {
                if (item.properties?.codex) item.properties.codex.alias = [...(item.properties.codex?.alias || []), item.properties.displayName];
                item.properties.displayName = item.properties.displayName.replace(" Trigger", "");
              }
              return item;
            }
            function baseSubcategoriesFilter(item) {
              if (item.type === "section") return true;
              if (item.type !== "node") return false;
              const hasTriggerGroup = item.properties.group.includes("trigger");
              const hasActions = getFilteredActions(item, actions).length > 0;
              if (activeViewStack.value.rootView === "Trigger") return hasActions || hasTriggerGroup;
              return hasActions || !hasTriggerGroup;
            }
            const globalCallouts = computed(() => [...getRootSearchCallouts(activeViewStack.value.search ?? "", {
              isRagStarterCalloutVisible: calloutHelpers.isRagStarterCalloutVisible.value
            }), ...getActiveViewCallouts(activeViewStack.value.title, calloutHelpers.isPreBuiltAgentsCalloutVisible.value, calloutHelpers.getPreBuiltAgentNodeCreatorItems())]);
            function arrowLeft() {
              popViewStack();
            }
            function onKeySelect(activeItemId) {
              const item = flattenCreateElements([...(globalCallouts.value ?? []), ...(activeViewStack.value.items ?? []), ...(globalSearchItemsDiff.value ?? []), ...(moreFromCommunity.value ?? [])]).find(i => i.uuid === activeItemId);
              if (!item) return;
              onSelected(item);
            }
            registerKeyHook("MainViewArrowRight", {
              keyboardKeys: ["ArrowRight", "Enter"],
              condition: type => ["subcategory", "node", "link", "view", "openTemplate"].includes(type),
              handler: onKeySelect
            });
            registerKeyHook("MainViewArrowLeft", {
              keyboardKeys: ["ArrowLeft"],
              condition: type => ["subcategory", "node", "link", "view", "openTemplate"].includes(type),
              handler: arrowLeft
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", null, [createVNode(ItemsRenderer_default, {
                elements: globalCallouts.value,
                class: normalizeClass(_ctx.$style.items),
                onSelected
              }, null, 8, ["elements", "class"]), withMemo([activeViewStack.value.search], () => createVNode(ItemsRenderer_default, {
                elements: activeViewStack.value.items,
                class: normalizeClass(_ctx.$style.items),
                onSelected
              }, createSlots({
                _: 2
              }, [isSearchResultEmpty.value ? {
                name: "empty",
                fn: withCtx(() => [createVNode(NoResults_default, {
                  "root-view": activeViewStack.value.rootView,
                  "show-icon": "",
                  "show-request": "",
                  onAddWebhookNode: _cache[0] || (_cache[0] = $event => emit("nodeTypeSelected", [{
                    type: unref("n8n-nodes-base.webhook")
                  }])),
                  onAddHttpNode: _cache[1] || (_cache[1] = $event => emit("nodeTypeSelected", [{
                    type: unref("n8n-nodes-base.httpRequest")
                  }]))
                }, null, 8, ["root-view"])]),
                key: "0"
              } : void 0]), 1032, ["elements", "class"]), _cache, 2), globalSearchItemsDiff.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
                key: 0,
                elements: globalSearchItemsDiff.value,
                category: unref(i18n$1).baseText("nodeCreator.categoryNames.otherCategories"),
                expanded: true,
                onSelected
              }, null, 8, ["elements", "category"])) : createCommentVNode("", true), moreFromCommunity.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
                key: 1,
                elements: moreFromCommunity.value,
                category: unref(i18n$1).baseText("nodeCreator.categoryNames.moreFromCommunity"),
                expanded: true,
                onSelected
              }, null, 8, ["elements", "category"])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Modes/NodesMode.vue?vue&type=style&index=0&lang.module.scss
        items = "_items_bf97l_123";
        NodesMode_vue_vue_type_style_index_0_lang_module_default = {
          items
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Modes/NodesMode.vue
        cssModules$4 = {
          "$style": NodesMode_vue_vue_type_style_index_0_lang_module_default
        };
        NodesMode_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodesMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDetails.vue?vue&type=script&setup=true&lang.ts
        CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeDetails",
          setup(__props) {
            const {
              activeViewStack,
              pushViewStack,
              popViewStack,
              getAllNodeCreateElements,
              updateCurrentViewStack
            } = useViewStacks();
            const {
              communityNodeDetails
            } = activeViewStack;
            const nodeCreatorStore = useNodeCreatorStore();
            const {
              installNode,
              loading
            } = useInstallNode();
            const isOwner = computed(() => useUsersStore().isInstanceOwner);
            const updateViewStack = key => {
              const installedNodeKey = removePreviewToken(key);
              const installedNode = getAllNodeCreateElements().find(node => node.key === installedNodeKey);
              if (installedNode) {
                const nodeActions = nodeCreatorStore.actions?.[installedNode.key] || [];
                popViewStack();
                updateCurrentViewStack({
                  searchItems: nodeCreatorStore.mergedNodes
                });
                pushViewStack(prepareCommunityNodeDetailsViewStack(installedNode, getNodeIconSource(installedNode.properties), activeViewStack.rootView, nodeActions), {
                  transitionDirection: "none"
                });
              } else {
                const viewStack = {
                  ...activeViewStack
                };
                viewStack.communityNodeDetails.installed = true;
                pushViewStack(activeViewStack, {
                  resetStacks: true
                });
              }
            };
            const updateStoresAndViewStack = key => {
              updateViewStack(key);
              nodeCreatorStore.removeNodeFromMergedNodes(key);
            };
            const onInstall = async () => {
              if (isOwner.value && activeViewStack.communityNodeDetails && !communityNodeDetails?.installed) {
                const {
                  key,
                  packageName
                } = activeViewStack.communityNodeDetails;
                if ((await installNode({
                  type: "verified",
                  packageName,
                  nodeType: key
                })).success) updateStoresAndViewStack(key);
              }
            };
            return (_ctx, _cache) => {
              return unref(communityNodeDetails) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.title)
              }, [unref(communityNodeDetails).nodeIcon ? (openBlock(), createBlock(NodeIcon_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.nodeIcon),
                "icon-source": unref(communityNodeDetails).nodeIcon,
                circle: false,
                "show-tooltip": false
              }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(unref(communityNodeDetails).title), 1), unref(communityNodeDetails).official ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                placement: "bottom",
                "show-after": 500
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", {
                  interpolate: {
                    author: unref(communityNodeDetails).companyName ?? unref(communityNodeDetails).title
                  }
                })), 1)]),
                default: withCtx(() => [createVNode(unref(verified_default), {
                  class: normalizeClass(_ctx.$style.officialIcon)
                }, null, 8, ["class"])]),
                _: 1
              })) : createCommentVNode("", true)], 2), createBaseVNode("div", null, [unref(communityNodeDetails).installed ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.installed)
              }, [!unref(communityNodeDetails).official ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.installedIcon),
                icon: "box"
              }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                color: "text-light",
                size: "small",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeDetails.installed")), 1)]),
                _: 1
              })], 2)) : createCommentVNode("", true), isOwner.value && !unref(communityNodeDetails).installed ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                loading: unref(loading),
                disabled: unref(loading),
                label: unref(i18n).baseText("communityNodeDetails.install"),
                size: "small",
                "data-test-id": "install-community-node-button",
                onClick: onInstall
              }, null, 8, ["loading", "disabled", "label"])) : createCommentVNode("", true)])], 2)], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDetails.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_1ibv8_123";
        header$1 = "_header_1ibv8_131";
        title$1 = "_title_1ibv8_138";
        nodeIcon$1 = "_nodeIcon_1ibv8_146";
        installedIcon = "_installedIcon_1ibv8_151";
        officialIcon = "_officialIcon_1ibv8_157";
        installed = "_installed_1ibv8_151";
        CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          header: header$1,
          title: title$1,
          nodeIcon: nodeIcon$1,
          installedIcon,
          officialIcon,
          installed
        }; //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDetails.vue
        cssModules$3 = {
          "$style": CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default
        };
        CommunityNodeDetails_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDocsLink.vue?vue&type=script&setup=true&lang.ts
        CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeDocsLink",
          props: {
            packageName: {}
          },
          setup(__props) {
            const props = __props;
            const openCommunityNodeDocsPage = () => {
              const newTab = window.open(`https://www.npmjs.com/package/${props.packageName}`, "_blank");
              if (newTab) newTab.opener = null;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nLink_default), {
                theme: "text",
                class: normalizeClass(_ctx.$style.container),
                title: unref(i18n).baseText("communityNodesDocsLink.link.title"),
                onClick: openCommunityNodeDocsPage
              }, {
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "small",
                  bold: "",
                  style: {
                    "margin-right": "5px"
                  }
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodesDocsLink.title")), 1)]),
                  _: 1
                }), createVNode(unref(N8nIcon_default), {
                  icon: "external-link"
                })]),
                _: 1
              }, 8, ["class", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDocsLink.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1ms6i_123";
        CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default = {
          container
        }; //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDocsLink.vue
        cssModules$2 = {
          "$style": CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default
        };
        CommunityNodeDocsLink_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NodesListPanel.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["textContent"];
        _hoisted_2 = ["textContent"];
        NodesListPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodesListPanel",
          setup(__props) {
            const i18n$1 = useI18n();
            const {
              callDebounced
            } = useDebounce();
            const {
              mergedNodes
            } = useNodeCreatorStore();
            const {
              pushViewStack,
              popViewStack,
              updateCurrentViewStack
            } = useViewStacks();
            const {
              setActiveItemIndex,
              attachKeydownEvent,
              detachKeydownEvent
            } = useKeyboardNavigation();
            const nodeCreatorStore = useNodeCreatorStore();
            const {
              isInstanceOwner
            } = useUsersStore();
            const activeViewStack = computed(() => useViewStacks().activeViewStack);
            const communityNodeDetails = computed(() => activeViewStack.value.communityNodeDetails);
            const viewStacks = computed(() => useViewStacks().viewStacks);
            const isActionsMode = computed(() => useViewStacks().activeViewStackMode === "actions");
            const searchPlaceholder = computed(() => {
              let node = activeViewStack.value?.title;
              if (communityNodeDetails.value) node = communityNodeDetails.value.title;
              if (isActionsMode.value) return i18n$1.baseText("nodeCreator.actionsCategory.searchActions", {
                interpolate: {
                  node
                }
              });
              return i18n$1.baseText("nodeCreator.searchBar.searchNodes");
            });
            const showSearchBar = computed(() => {
              if (activeViewStack.value.communityNodeDetails) return false;
              return activeViewStack.value.hasSearch;
            });
            const nodeCreatorView = computed(() => useNodeCreatorStore().selectedView);
            const isCommunityNodeActionsMode = computed(() => {
              return communityNodeDetails.value && isActionsMode.value && activeViewStack.value.subcategory;
            });
            function getDefaultActiveIndex(search = "") {
              if (activeViewStack.value.mode === "actions") return 1;else if (activeViewStack.value.sections) return search ? 0 : 1;
              return 0;
            }
            function onSearch(value) {
              if (activeViewStack.value.uuid) {
                updateCurrentViewStack({
                  search: value
                });
                setActiveItemIndex(getDefaultActiveIndex(value));
                if (value.length) callDebounced(nodeCreatorStore.onNodeFilterChanged, {
                  trailing: true,
                  debounceTime: 2e3
                }, {
                  newValue: value,
                  filteredNodes: activeViewStack.value.items ?? [],
                  filterMode: activeViewStack.value.rootView ?? "Regular",
                  subcategory: activeViewStack.value.subcategory,
                  title: activeViewStack.value.title
                });
              }
            }
            function onTransitionEnd() {
              setActiveItemIndex(getDefaultActiveIndex());
            }
            onMounted(() => {
              attachKeydownEvent();
              setActiveItemIndex(getDefaultActiveIndex());
            });
            onUnmounted(() => {
              detachKeydownEvent();
            });
            watch(() => nodeCreatorView.value, selectedView => {
              const views = {
                [TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
                [REGULAR_NODE_CREATOR_VIEW]: RegularView,
                ["AI"]: AIView,
                [AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView,
                [AI_UNCATEGORIZED_CATEGORY]: AINodesView,
                [AI_EVALUATION]: AINodesView
              };
              const itemKey = selectedView;
              const matchedView = views[itemKey];
              if (!matchedView) {
                console.warn(`No view found for ${itemKey}`);
                return;
              }
              const view = matchedView(mergedNodes);
              pushViewStack({
                title: view.title,
                subtitle: view?.subtitle ?? "",
                items: view.items,
                info: view.info,
                hasSearch: true,
                mode: "nodes",
                rootView: selectedView,
                searchItems: mergedNodes
              });
            }, {
              immediate: true
            });
            function onBackButton() {
              popViewStack();
            }
            return (_ctx, _cache) => {
              return viewStacks.value.length > 0 ? (openBlock(), createBlock(Transition, {
                key: 0,
                name: `panel-slide-${activeViewStack.value.transitionDirection}`,
                onAfterLeave: onTransitionEnd
              }, {
                default: withCtx(() => [(openBlock(), createElementBlock("aside", {
                  key: `${activeViewStack.value.uuid}`,
                  class: normalizeClass([_ctx.$style.nodesListPanel, activeViewStack.value.panelClass]),
                  onKeydownCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, [createBaseVNode("header", {
                  class: normalizeClass({
                    [_ctx.$style.header]: true,
                    [_ctx.$style.hasBg]: !activeViewStack.value.subtitle,
                    "nodes-list-panel-header": true
                  }),
                  "data-test-id": "nodes-list-header"
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.top)
                }, [viewStacks.value.length > 1 && !activeViewStack.value.preventBack ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.backButton),
                  onClick: onBackButton
                }, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.backButtonIcon),
                  icon: "arrow-left",
                  size: 22
                }, null, 8, ["class"])], 2)) : createCommentVNode("", true), activeViewStack.value.nodeIcon ? (openBlock(), createBlock(NodeIcon_default, {
                  key: 1,
                  class: normalizeClass(_ctx.$style.nodeIcon),
                  "icon-source": activeViewStack.value.nodeIcon,
                  circle: false,
                  "show-tooltip": false,
                  size: 20
                }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true), activeViewStack.value.title ? (openBlock(), createElementBlock("p", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.title),
                  textContent: toDisplayString(activeViewStack.value.title)
                }, null, 10, _hoisted_1)) : createCommentVNode("", true), communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDocsLink_default, {
                  key: 3,
                  "package-name": communityNodeDetails.value.packageName
                }, null, 8, ["package-name"])) : createCommentVNode("", true)], 2), activeViewStack.value.subtitle ? (openBlock(), createElementBlock("p", {
                  key: 0,
                  class: normalizeClass({
                    [_ctx.$style.subtitle]: true,
                    [_ctx.$style.offsetSubtitle]: viewStacks.value.length > 1
                  }),
                  textContent: toDisplayString(activeViewStack.value.subtitle)
                }, null, 10, _hoisted_2)) : createCommentVNode("", true)], 2), showSearchBar.value ? (openBlock(), createBlock(SearchBar_default, {
                  key: 0,
                  class: normalizeClass(_ctx.$style.searchBar),
                  placeholder: searchPlaceholder.value ? searchPlaceholder.value : unref(i18n$1).baseText("nodeCreator.searchBar.searchNodes"),
                  "model-value": activeViewStack.value.search,
                  "onUpdate:modelValue": onSearch
                }, null, 8, ["class", "placeholder", "model-value"])) : createCommentVNode("", true), communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDetails_default, {
                  key: 1
                })) : createCommentVNode("", true), communityNodeDetails.value && !isActionsMode.value ? (openBlock(), createBlock(CommunityNodeInfo_default, {
                  key: 2
                })) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.renderedItems)
                }, [activeViewStack.value.info && !activeViewStack.value.search ? (openBlock(), createBlock(unref(N8nNotice_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.info),
                  content: activeViewStack.value.info,
                  theme: "warning"
                }, null, 8, ["class", "content"])) : createCommentVNode("", true), isActionsMode.value && activeViewStack.value.subcategory ? (openBlock(), createBlock(ActionsMode_default, normalizeProps(mergeProps({
                  key: 1
                }, _ctx.$attrs)), null, 16)) : (openBlock(), createBlock(NodesMode_default, mergeProps({
                  key: 2,
                  "root-view": nodeCreatorView.value
                }, _ctx.$attrs), null, 16, ["root-view"]))], 2), communityNodeDetails.value && !isCommunityNodeActionsMode.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
                  key: 3,
                  "package-name": communityNodeDetails.value.packageName,
                  "show-manage": communityNodeDetails.value.installed && unref(isInstanceOwner)
                }, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)], 34))]),
                _: 1
              }, 8, ["name"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NodesListPanel.vue?vue&type=style&index=0&lang.module.scss
        info = "_info_yqjqi_145";
        backButton = "_backButton_yqjqi_149";
        backButtonIcon = "_backButtonIcon_yqjqi_156";
        nodeIcon = "_nodeIcon_yqjqi_161";
        renderedItems = "_renderedItems_yqjqi_167";
        searchBar = "_searchBar_yqjqi_179";
        nodesListPanel = "_nodesListPanel_yqjqi_183";
        footer = "_footer_yqjqi_201";
        top = "_top_yqjqi_212";
        header = "_header_yqjqi_217";
        hasBg = "_hasBg_yqjqi_223";
        title = "_title_yqjqi_228";
        subtitle = "_subtitle_yqjqi_239";
        offsetSubtitle = "_offsetSubtitle_yqjqi_247";
        NodesListPanel_vue_vue_type_style_index_0_lang_module_default = {
          info,
          backButton,
          backButtonIcon,
          nodeIcon,
          renderedItems,
          searchBar,
          nodesListPanel,
          footer,
          top,
          header,
          hasBg,
          title,
          subtitle,
          offsetSubtitle
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/Panel/NodesListPanel.vue
        cssModules$1 = {
          "$style": NodesListPanel_vue_vue_type_style_index_0_lang_module_default
        };
        NodesListPanel_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodesListPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/shared/nodeCreator/components/NodeCreator.vue?vue&type=script&setup=true&lang.ts
        NodeCreator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeCreator",
          props: {
            active: {
              type: Boolean
            },
            onNodeTypeSelected: {
              type: Function
            }
          },
          emits: ["closeNodeCreator", "nodeTypeSelected"],
          setup(__props, {
            emit: __emit
          }) {
            const OUTSIDE_CLICK_WHITELIST = [".el-overlay-dialog"];
            const props = __props;
            const {
              resetViewStacks
            } = useViewStacks();
            const {
              registerKeyHook
            } = useKeyboardNavigation();
            const emit = __emit;
            const uiStore = useUIStore();
            const bannersStore = useBannersStore();
            const chatPanelStore = useChatPanelStore();
            const {
              setShowScrim,
              setActions,
              setMergeNodes
            } = useNodeCreatorStore();
            const {
              generateMergedNodesAndActions
            } = useActionsGenerator();
            const state = reactive({
              nodeCreator: null,
              mousedownInsideEvent: null
            });
            const showScrim = computed(() => useNodeCreatorStore().showScrim);
            const viewStacksLength = computed(() => useViewStacks().viewStacks.length);
            const nodeCreatorInlineStyle = computed(() => {
              const rightPosition = getRightOffset();
              return {
                top: `${bannersStore.bannersHeight + uiStore.headerHeight}px`,
                right: `${rightPosition}px`
              };
            });
            function getRightOffset() {
              if (chatPanelStore.isOpen) return chatPanelStore.width;
              return 0;
            }
            function onMouseUpOutside() {
              if (state.mousedownInsideEvent) {
                const clickEvent = new MouseEvent("click", {
                  bubbles: true,
                  cancelable: true
                });
                state.mousedownInsideEvent.target?.dispatchEvent(clickEvent);
                state.mousedownInsideEvent = null;
                unBindOnMouseUpOutside();
              }
            }
            function unBindOnMouseUpOutside() {
              document.removeEventListener("mouseup", onMouseUpOutside);
              document.removeEventListener("touchstart", onMouseUpOutside);
            }
            function onMouseUp() {
              state.mousedownInsideEvent = null;
              unBindOnMouseUpOutside();
            }
            function onMouseDown(event) {
              state.mousedownInsideEvent = event;
              document.addEventListener("mouseup", onMouseUpOutside);
              document.addEventListener("touchstart", onMouseUpOutside);
            }
            function onDragOver(event) {
              event.preventDefault();
            }
            function onDrop(event) {
              if (!event.dataTransfer) return;
              const dragData = event.dataTransfer.getData(DRAG_EVENT_DATA_KEY);
              const nodeCreatorBoundingRect = state.nodeCreator.getBoundingClientRect();
              if (dragData && event.pageX >= nodeCreatorBoundingRect.x && event.pageY >= nodeCreatorBoundingRect.y) event.stopPropagation();
            }
            watch(() => props.active, isActive => {
              if (!isActive) {
                setShowScrim(false);
                resetViewStacks();
              }
            });
            watch(viewStacksLength, value => {
              if (value === 0) {
                emit("closeNodeCreator");
                setShowScrim(false);
              }
            });
            registerKeyHook("NodeCreatorCloseEscape", {
              keyboardKeys: ["Escape"],
              handler: () => emit("closeNodeCreator")
            });
            registerKeyHook("NodeCreatorCloseTab", {
              keyboardKeys: ["Tab"],
              handler: () => emit("closeNodeCreator")
            });
            watch(() => ({
              httpOnlyCredentials: useCredentialsStore().httpOnlyCredentialTypes,
              nodeTypes: useNodeTypesStore().visibleNodeTypes
            }), ({
              nodeTypes,
              httpOnlyCredentials
            }) => {
              const {
                actions,
                mergedNodes
              } = generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials);
              setActions(actions);
              setMergeNodes(mergedNodes);
            }, {
              immediate: true
            });
            const {
              nodeCreator: nodeCreator$1
            } = toRefs(state);
            onBeforeUnmount(() => {
              unBindOnMouseUpOutside();
            });
            onClickOutside(nodeCreator$1, () => {
              emit("closeNodeCreator");
            }, {
              ignore: OUTSIDE_CLICK_WHITELIST
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createBaseVNode("aside", {
                class: normalizeClass({
                  [_ctx.$style.nodeCreatorScrim]: true,
                  [_ctx.$style.active]: showScrim.value
                })
              }, null, 2), _ctx.active ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.close),
                type: "secondary",
                icon: "x",
                "aria-label": "Close Node Creator",
                onClick: _cache[0] || (_cache[0] = $event => emit("closeNodeCreator"))
              }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(SlideTransition_default, null, {
                default: withCtx(() => [_ctx.active ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  ref_key: "nodeCreator",
                  ref: nodeCreator$1,
                  class: normalizeClass({
                    [_ctx.$style.nodeCreator]: true
                  }),
                  style: normalizeStyle(nodeCreatorInlineStyle.value),
                  "data-test-id": "node-creator",
                  onDragover: onDragOver,
                  onDrop,
                  onMousedown: onMouseDown,
                  onMouseup: onMouseUp
                }, [createVNode(NodesListPanel_default, {
                  onNodeTypeSelected: _ctx.onNodeTypeSelected
                }, null, 8, ["onNodeTypeSelected"])], 38)) : createCommentVNode("", true)]),
                _: 1
              })]);
            };
          }
        }); //#endregion
        //#region src/features/shared/nodeCreator/components/NodeCreator.vue?vue&type=style&index=0&lang.module.scss
        nodeCreator = "_nodeCreator_r2zvk_127";
        nodeCreatorScrim = "_nodeCreatorScrim_r2zvk_139";
        active = "_active_r2zvk_151";
        close = "_close_r2zvk_155";
        NodeCreator_vue_vue_type_style_index_0_lang_module_default = {
          nodeCreator,
          nodeCreatorScrim,
          active,
          close
        }; //#endregion
        //#region src/features/shared/nodeCreator/components/NodeCreator.vue
        cssModules = {
          "$style": NodeCreator_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", NodeCreator_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeCreator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();