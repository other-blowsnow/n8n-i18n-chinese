;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./overlay-legacy-B0b_K0kO.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BdVFquy4.js", "./dialog-legacy-CiZVEV8k.js", "./ModalDrawer-legacy-D_ekoZ-O.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./retry-legacy-CTwsGM7o.js", "./CredentialIcon-legacy-BNm3IfGT.js", "./constants-legacy-DjFSod4r.js", "./chat.store-legacy-zhhYNgMQ.js", "./fileUtils-legacy-BbiGYBne.js", "./ChatAgentAvatar-legacy-DvqZsR0e.js", "./useChatHubSidebarState-legacy-D83XtcfV.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, createVNode, defineComponent, createBlock, onMounted, Fragment, watch, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, createSlots, useTemplateRef, resolveComponent, normalizeClass, createBaseVNode, useIntersectionObserver, useEventListener, useMediaQuery, useI18n, N8nLogo_default, N8nText_default, N8nIcon_default, N8nScrollArea_default, N8nMenuItem_default, N8nActionDropdown_default, N8nAvatar_default, N8nPopoverReka_default, N8nIconButton_default, N8nInput_default, __plugin_vue_export_helper_default, useRouter, useRoute, useMessage, ModalDrawer_default, useUIStore, useCredentialsStore, useSettingsStore, useUsersStore, useTelemetry, useToast, VIEWS, CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY, MODAL_CONFIRM, CHAT_VIEW, CHAT_AGENTS_VIEW, CHAT_CONVERSATION_VIEW, MOBILE_MEDIA_QUERY, unflattenModel, groupConversationsByDate, useChatStore, ChatAgentAvatar_default, useChatHubSidebarState, __vite_style__, _hoisted_1, MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default, userArea, userName, expanded, userActions, userAreaInner, popover, MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default, cssModules$4, MainSidebarUserArea_default, ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, menuItem, active, menuItemLink, label, actionDropdown, actionDropdownTrigger, ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default, cssModules$3, ChatSidebarLink_default, ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default, ChatSessionMenuItem_default, skeletonItem, skeletonAvatar, skeletonText, SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default, _sfc_main, cssModules$2, SkeletonMenuItem_default, ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, component, isMobileDevice, header, logo, items, group, groupHeader, loadMoreTrigger, loading, empty, ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatSidebarContent_default, EDGE_TRIGGER_DISTANCE, ChatSidebar_vue_vue_type_script_setup_true_lang_default, drawer, inDrawer, ChatSidebar_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatSidebar_default;
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.skeletonItem)
      }, [createBaseVNode("div", {
        class: normalizeClass(_ctx.$style.skeletonAvatar)
      }, null, 2), createBaseVNode("div", {
        class: normalizeClass(_ctx.$style.skeletonText)
      }, null, 2)], 2);
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
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
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useIntersectionObserver = _MapCacheLegacy005Js.A;
        useEventListener = _MapCacheLegacy005Js.D;
        useMediaQuery = _MapCacheLegacy005Js.M;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nLogo_default = _srcLegacy007Js.N;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nScrollArea_default = _srcLegacy007Js.i;
        N8nMenuItem_default = _srcLegacy007Js.j;
        N8nActionDropdown_default = _srcLegacy007Js.nt;
        N8nAvatar_default = _srcLegacy007Js.vt;
        N8nPopoverReka_default = _srcLegacy007Js.w;
        N8nIconButton_default = _srcLegacy007Js.xt;
        N8nInput_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_dialogLegacy00DJs) {}, function (_ModalDrawerLegacy00FJs) {
        ModalDrawer_default = _ModalDrawerLegacy00FJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useCredentialsStore = _useTelemetryLegacy00HJs.Ht;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Lo;
        CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY = _constantsLegacy00TJs.Vo;
        MODAL_CONFIRM = _constantsLegacy00TJs.ns;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_retryLegacy01lJs) {}, function (_CredentialIconLegacy02lJs) {}, function (_constantsLegacy03lJs) {
        CHAT_VIEW = _constantsLegacy03lJs.l;
        CHAT_AGENTS_VIEW = _constantsLegacy03lJs.n;
        CHAT_CONVERSATION_VIEW = _constantsLegacy03lJs.r;
        MOBILE_MEDIA_QUERY = _constantsLegacy03lJs.u;
      }, function (_chatStoreLegacy03nJs) {
        unflattenModel = _chatStoreLegacy03nJs.f;
        groupConversationsByDate = _chatStoreLegacy03nJs.s;
        useChatStore = _chatStoreLegacy03nJs.t;
      }, function (_fileUtilsLegacy03pJs) {}, function (_ChatAgentAvatarLegacy055Js) {
        ChatAgentAvatar_default = _ChatAgentAvatarLegacy055Js.t;
      }, function (_useChatHubSidebarStateLegacy059Js) {
        useChatHubSidebarState = _useChatHubSidebarStateLegacy059Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._userArea_r2ew4_123 {\n  display: flex;\n  padding: var(--spacing--xs);\n  align-items: center;\n  border-top: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._userArea_r2ew4_123 ._userName_r2ew4_129 {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: none;\n  overflow: hidden;\n  width: 100px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n._userArea_r2ew4_123 ._userName_r2ew4_129._expanded_r2ew4_138 {\n  display: initial;\n}\n._userArea_r2ew4_123 ._userName_r2ew4_129 span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._userArea_r2ew4_123 ._userActions_r2ew4_145 {\n  display: none;\n}\n._userArea_r2ew4_123 ._userActions_r2ew4_145._expanded_r2ew4_138 {\n  display: initial;\n}\n._userAreaInner_r2ew4_152 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n._popover_r2ew4_158 {\n  padding: var(--spacing--xs);\n  min-width: 200px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._menuItem_xggh1_123 {\n  display: flex;\n  align-items: center;\n  border-radius: var(--spacing--4xs);\n  padding-right: 0;\n}\n._menuItem_xggh1_123:focus-within, ._menuItem_xggh1_123:has([aria-expanded=true]), ._menuItem_xggh1_123._active_xggh1_129, ._menuItem_xggh1_123:hover {\n  background-color: var(--color--foreground);\n}\n._menuItemLink_xggh1_133 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--3xs);\n  gap: var(--spacing--3xs);\n  cursor: pointer;\n  color: var(--color--text);\n  min-width: 0;\n  flex: 1;\n  text-decoration: none;\n  outline: none;\n}\n._menuItemLink_xggh1_133:active {\n  color: var(--color--text--shade-1);\n}\n._label_xggh1_149 {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex: 1;\n  line-height: var(--font-size--lg);\n  min-width: 0;\n}\n._actionDropdown_xggh1_158 {\n  opacity: 0;\n  transition: opacity 0.2s;\n  flex-shrink: 0;\n  width: 0;\n}\n._menuItem_xggh1_123:has([aria-expanded=true]) ._actionDropdown_xggh1_158, ._menuItem_xggh1_123:has(:focus) ._actionDropdown_xggh1_158, ._menuItem_xggh1_123:hover ._actionDropdown_xggh1_158, ._active_xggh1_129 ._actionDropdown_xggh1_158 {\n  width: auto;\n  opacity: 1;\n}\n._actionDropdownTrigger_xggh1_169 {\n  box-shadow: none !important;\n  outline: none !important;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._skeletonItem_zmho6_123 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--3xs);\n  gap: var(--spacing--3xs);\n  border-radius: var(--spacing--4xs);\n  height: 30px;\n}\n._skeletonAvatar_zmho6_132,\n._skeletonText_zmho6_133 {\n  background: var(--color--foreground);\n  animation: _skeleton-pulse_zmho6_1 1s ease-in-out infinite;\n}\n._skeletonAvatar_zmho6_132 {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n._skeletonText_zmho6_133 {\n  height: 14px;\n  width: 80%;\n  border-radius: var(--radius--sm);\n}\n@keyframes _skeleton-pulse_zmho6_1 {\n0%, 100% {\n    opacity: 0.6;\n}\n50% {\n    opacity: 0.3;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_3m9u4_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-block: var(--spacing--4xs);\n}\n._component_3m9u4_123._isMobileDevice_3m9u4_129 {\n  padding-block: 0;\n}\n._header_3m9u4_133 {\n  height: 56px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-inline: var(--spacing--xs);\n  gap: var(--spacing--2xs);\n}\n._logo_3m9u4_144 {\n  /* Adjust vertical alignment */\n  margin-top: -4px;\n}\n._items_3m9u4_149 {\n  display: flex;\n  flex-direction: column;\n  padding: 0 var(--spacing--xs) var(--spacing--sm) var(--spacing--xs);\n  gap: var(--spacing--xs);\n}\n._isMobileDevice_3m9u4_129 ._items_3m9u4_149 {\n  gap: var(--spacing--sm);\n}\n._group_3m9u4_159 {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n._groupHeader_3m9u4_165 {\n  padding: 0 var(--spacing--4xs) var(--spacing--3xs) var(--spacing--4xs);\n}\n._loadMoreTrigger_3m9u4_169 {\n  height: 1px;\n  width: 100%;\n}\n._loading_3m9u4_174,\n._empty_3m9u4_175 {\n  padding: var(--spacing--xs);\n  text-align: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._drawer_ox5ii_123 .el-drawer__header {\n  padding: 0;\n  margin: 0;\n}\n._inDrawer_ox5ii_128,\n._static_ox5ii_129 {\n  height: 100%;\n  background-color: var(--color--background--light-2);\n}\n._static_ox5ii_129 {\n  width: 240px;\n  position: relative;\n  overflow: auto;\n  margin-right: calc(-1 * var(--spacing--4xs));\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/MainSidebarUserArea.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "ml-3xs",
          "data-test-id": "main-sidebar-user-menu"
        };
        MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MainSidebarUserArea",
          props: {
            fullyExpanded: {
              type: Boolean
            },
            isCollapsed: {
              type: Boolean
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const router = useRouter();
            const usersStore = useUsersStore();
            const userMenuItems = ref([{
              id: "settings",
              icon: "settings",
              label: i18n.baseText("settings")
            }, {
              id: "logout",
              icon: "door-open",
              label: i18n.baseText("auth.signout")
            }]);
            const onLogout = () => {
              router.push({
                name: VIEWS.SIGNOUT
              });
            };
            const onUserActionToggle = action => {
              switch (action) {
                case "logout":
                  onLogout();
                  break;
                case "settings":
                  router.push({
                    name: VIEWS.SETTINGS
                  });
                  break;
                default:
                  break;
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref: "user",
                class: normalizeClass(_ctx.$style.userArea)
              }, [createVNode(unref(N8nPopoverReka_default), {
                side: "right",
                align: "end",
                "side-offset": 16
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.popover)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(userMenuItems.value, action => {
                  return openBlock(), createBlock(unref(N8nMenuItem_default), {
                    key: action.id,
                    item: action,
                    "data-test-id": `user-menu-item-${action.id}`,
                    onClick: () => onUserActionToggle(action.id)
                  }, null, 8, ["item", "data-test-id", "onClick"]);
                }), 128))], 2)]),
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.userAreaInner)
                }, [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", {
                  class: normalizeClass({
                    ["clickable"]: _ctx.isCollapsed
                  })
                }, [createVNode(unref(N8nAvatar_default), {
                  "first-name": unref(usersStore).currentUser?.firstName,
                  "last-name": unref(usersStore).currentUser?.lastName,
                  size: "small"
                }, null, 8, ["first-name", "last-name"])], 2)]), createBaseVNode("div", {
                  class: normalizeClass({
                    ["ml-2xs"]: true,
                    [_ctx.$style.userName]: true,
                    [_ctx.$style.expanded]: _ctx.fullyExpanded
                  })
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(usersStore).currentUser?.fullName), 1)]),
                  _: 1
                })], 2), createBaseVNode("div", {
                  "data-test-id": "user-menu",
                  class: normalizeClass({
                    [_ctx.$style.userActions]: true,
                    [_ctx.$style.expanded]: _ctx.fullyExpanded
                  })
                }, [createVNode(unref(N8nIconButton_default), {
                  icon: "ellipsis",
                  text: "",
                  square: "",
                  type: "tertiary"
                })], 2)], 2)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainSidebarUserArea.vue?vue&type=style&index=0&lang.module.scss
        userArea = "_userArea_r2ew4_123";
        userName = "_userName_r2ew4_129";
        expanded = "_expanded_r2ew4_138";
        userActions = "_userActions_r2ew4_145";
        userAreaInner = "_userAreaInner_r2ew4_152";
        popover = "_popover_r2ew4_158";
        MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default = {
          userArea,
          userName,
          expanded,
          userActions,
          userAreaInner,
          popover
        }; //#endregion
        //#region src/app/components/MainSidebarUserArea.vue
        cssModules$4 = {
          "$style": MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default
        };
        MainSidebarUserArea_default = /* @__PURE__ */__plugin_vue_export_helper_default(MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarLink.vue?vue&type=script&setup=true&lang.ts
        ChatSidebarLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatSidebarLink",
          props: {
            active: {
              type: Boolean,
              default: false
            },
            to: {},
            label: {},
            menuItems: {
              default: () => []
            },
            icon: {}
          },
          emits: ["actionSelect", "click"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.menuItem, {
                  [_ctx.$style.active]: _ctx.active
                }])
              }, [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
                key: 0
              }) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createVNode(_component_RouterLink, {
                to: _ctx.to,
                class: normalizeClass(_ctx.$style.menuItemLink),
                title: _ctx.label,
                onClick: _cache[0] || (_cache[0] = $event => emit("click", $event))
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "icon", {}, () => [_ctx.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  size: "large",
                  icon: _ctx.icon
                }, null, 8, ["icon"])) : createCommentVNode("", true)]), createVNode(unref(N8nText_default), {
                  class: normalizeClass(_ctx.$style.label)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.label), 1)]),
                  _: 1
                }, 8, ["class"])]),
                _: 3
              }, 8, ["to", "class", "title"]), _ctx.menuItems.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
                key: 0,
                items: _ctx.menuItems,
                class: normalizeClass(_ctx.$style.actionDropdown),
                placement: "bottom-start",
                onSelect: _cache[1] || (_cache[1] = $event => emit("actionSelect", $event)),
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
              }, {
                activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: "ellipsis-vertical",
                  type: "tertiary",
                  text: "",
                  class: normalizeClass(_ctx.$style.actionDropdownTrigger)
                }, null, 8, ["class"])]),
                _: 1
              }, 8, ["items", "class"])) : createCommentVNode("", true)], 64))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarLink.vue?vue&type=style&index=0&lang.module.scss
        menuItem = "_menuItem_xggh1_123";
        active = "_active_xggh1_129";
        menuItemLink = "_menuItemLink_xggh1_133";
        label = "_label_xggh1_149";
        actionDropdown = "_actionDropdown_xggh1_158";
        actionDropdownTrigger = "_actionDropdownTrigger_xggh1_169";
        ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default = {
          menuItem,
          active,
          menuItemLink,
          label,
          actionDropdown,
          actionDropdownTrigger
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarLink.vue
        cssModules$3 = {
          "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default
        };
        ChatSidebarLink_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatSessionMenuItem.vue?vue&type=script&setup=true&lang.ts
        ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatSessionMenuItem",
          props: {
            session: {},
            isRenaming: {
              type: Boolean
            },
            active: {
              type: Boolean
            }
          },
          emits: ["startRename", "cancelRename", "confirmRename", "delete"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const input = useTemplateRef("input");
            const editedLabel = ref("");
            const chatStore = useChatStore();
            const i18n = useI18n();
            const agent = computed(() => {
              const model = unflattenModel(__props.session);
              if (!model) return null;
              return chatStore.getAgent(model, __props.session.agentName);
            });
            const dropdownItems = computed(() => [{
              id: "rename",
              label: i18n.baseText("chatHub.session.actions.rename"),
              icon: "pencil"
            }, {
              id: "delete",
              label: i18n.baseText("chatHub.session.actions.delete"),
              icon: "trash-2"
            }]);
            function handleActionSelect(action) {
              if (action === "rename") {
                editedLabel.value = __props.session.title;
                emit("startRename", __props.session.id);
              } else if (action === "delete") emit("delete", __props.session.id);
            }
            function handleBlur() {
              const trimmed = editedLabel.value.trim();
              if (trimmed && trimmed !== __props.session.title) emit("confirmRename", __props.session.id, trimmed);else emit("cancelRename");
            }
            function handleKeyDown(e) {
              if (e.key === "Escape") {
                emit("cancelRename");
                return;
              }
              if (e.key === "Enter" && !e.isComposing) handleBlur();
            }
            watch(() => __props.isRenaming, async renaming => {
              if (renaming) {
                editedLabel.value = __props.session.title;
                await nextTick();
                input.value?.focus();
                input.value?.select();
              } else editedLabel.value = "";
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(ChatSidebarLink_default, {
                to: {
                  name: unref(CHAT_CONVERSATION_VIEW),
                  params: {
                    id: _ctx.session.id
                  }
                },
                active: _ctx.active,
                "menu-items": dropdownItems.value,
                label: _ctx.session.title,
                onActionSelect: handleActionSelect
              }, createSlots({
                icon: withCtx(() => [createVNode(ChatAgentAvatar_default, {
                  agent: agent.value,
                  size: "sm"
                }, null, 8, ["agent"])]),
                _: 2
              }, [_ctx.isRenaming ? {
                name: "default",
                fn: withCtx(() => [createVNode(unref(N8nInput_default), {
                  size: "small",
                  ref_key: "input",
                  ref: input,
                  modelValue: editedLabel.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editedLabel.value = $event),
                  onBlur: handleBlur,
                  onKeydown: handleKeyDown
                }, null, 8, ["modelValue"])]),
                key: "0"
              } : void 0]), 1032, ["to", "active", "menu-items", "label"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatSessionMenuItem.vue
        ChatSessionMenuItem_default = ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/ai/chatHub/components/SkeletonMenuItem.vue?vue&type=style&index=0&lang.module.scss
        skeletonItem = "_skeletonItem_zmho6_123";
        skeletonAvatar = "_skeletonAvatar_zmho6_132";
        skeletonText = "_skeletonText_zmho6_133";
        SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default = {
          skeletonItem,
          skeletonAvatar,
          skeletonText,
          "skeleton-pulse": "_skeleton-pulse_zmho6_1"
        }; //#endregion
        //#region src/features/ai/chatHub/components/SkeletonMenuItem.vue
        _sfc_main = {};
        cssModules$2 = {
          "$style": SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default
        };
        SkeletonMenuItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarContent.vue?vue&type=script&setup=true&lang.ts
        ChatSidebarContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatSidebarContent",
          props: {
            isMobileDevice: {
              type: Boolean
            }
          },
          setup(__props) {
            const route = useRoute();
            const router = useRouter();
            const chatStore = useChatStore();
            const toast = useToast();
            const message = useMessage();
            const sidebar = useChatHubSidebarState();
            const settingsStore = useSettingsStore();
            const credentialsStore = useCredentialsStore();
            const telemetry = useTelemetry();
            const readyToShowSessions = computed(() => chatStore.sessionsReady && credentialsStore.allCredentialTypes.length > 0);
            const i18n = useI18n();
            const renamingSessionId = ref();
            const loadMoreTrigger$1 = ref(null);
            const currentSessionId = computed(() => typeof route.params.id === "string" ? route.params.id : void 0);
            const groupedConversations = computed(() => groupConversationsByDate((chatStore.sessions.ids ?? []).reduce((acc, id) => {
              const session = chatStore.sessions.byId[id];
              if (session) acc.push(session);
              return acc;
            }, [])));
            function handleStartRename(sessionId) {
              renamingSessionId.value = sessionId;
            }
            function handleCancelRename() {
              renamingSessionId.value = void 0;
            }
            async function handleConfirmRename(sessionId, newLabel) {
              try {
                await chatStore.renameSession(sessionId, newLabel);
                renamingSessionId.value = void 0;
              } catch (error) {
                toast.showError(error, i18n.baseText("chatHub.session.updateTitle.error"));
              }
            }
            async function handleDeleteSession(sessionId) {
              if ((await message.confirm(i18n.baseText("chatHub.session.delete.confirm.message"), i18n.baseText("chatHub.session.delete.confirm.title"), {
                confirmButtonText: i18n.baseText("chatHub.session.delete.confirm.button"),
                cancelButtonText: i18n.baseText("chatHub.session.delete.cancel.button")
              })) !== "confirm") return;
              try {
                await chatStore.deleteSession(sessionId);
                toast.showMessage({
                  type: "success",
                  title: i18n.baseText("chatHub.session.delete.success")
                });
                if (sessionId === currentSessionId.value) router.push({
                  name: CHAT_VIEW
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("chatHub.session.delete.error"));
              }
            }
            function handleNewChatClick() {
              telemetry.track("User clicked new chat button", {});
              sidebar.toggleOpen(false);
            }
            useIntersectionObserver(loadMoreTrigger$1, ([{
              isIntersecting
            }]) => {
              if (isIntersecting) chatStore.fetchMoreSessions();
            }, {
              threshold: .1
            });
            onMounted(() => {
              if (!chatStore.sessionsReady) chatStore.fetchSessions(true);
            });
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, {
                  [_ctx.$style.isMobileDevice]: _ctx.isMobileDevice
                }])
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(_component_RouterLink, {
                to: {
                  name: unref(VIEWS).HOMEPAGE
                }
              }, {
                default: withCtx(() => [createVNode(unref(N8nLogo_default), {
                  class: normalizeClass(_ctx.$style.logo),
                  size: "small",
                  collapsed: false,
                  "release-channel": unref(settingsStore).settings.releaseChannel
                }, null, 8, ["class", "release-channel"])]),
                _: 1
              }, 8, ["to"]), unref(sidebar).canBeStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                title: unref(i18n).baseText("chatHub.sidebar.button.toggle"),
                icon: "panel-left",
                type: "tertiary",
                text: "",
                size: "small",
                "icon-size": "large",
                onClick: _cache[0] || (_cache[0] = $event => unref(sidebar).toggleStatic())
              }, null, 8, ["title"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.items)
              }, [createVNode(ChatSidebarLink_default, {
                to: {
                  name: unref(CHAT_VIEW),
                  force: true
                },
                label: unref(i18n).baseText("chatHub.sidebar.link.newChat"),
                icon: "square-pen",
                active: unref(route).name === unref(CHAT_VIEW),
                onClick: handleNewChatClick
              }, null, 8, ["to", "label", "active"]), createVNode(ChatSidebarLink_default, {
                to: {
                  name: unref(CHAT_AGENTS_VIEW)
                },
                label: unref(i18n).baseText("chatHub.sidebar.link.customAgents"),
                icon: "robot",
                active: unref(route).name === unref(CHAT_AGENTS_VIEW),
                onClick: _cache[1] || (_cache[1] = $event => unref(sidebar).toggleOpen(false))
              }, null, 8, ["to", "label", "active"])], 2), createVNode(unref(N8nScrollArea_default), {
                "as-child": "",
                type: "scroll"
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.items)
                }, [!readyToShowSessions.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.group)
                }, [(openBlock(), createElementBlock(Fragment, null, renderList(10, i => {
                  return createVNode(SkeletonMenuItem_default, {
                    key: `loading-${i}`
                  });
                }), 64))], 2)) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(groupedConversations.value, (group$1, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: group$1.group,
                    class: normalizeClass(_ctx.$style.group)
                  }, [createVNode(unref(N8nText_default), {
                    class: normalizeClass(_ctx.$style.groupHeader),
                    size: "small",
                    bold: "",
                    color: "text-light"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(group$1.group), 1)]),
                    _: 2
                  }, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(group$1.sessions, session => {
                    return openBlock(), createBlock(ChatSessionMenuItem_default, {
                      key: session.id,
                      session,
                      active: currentSessionId.value === session.id,
                      "is-renaming": renamingSessionId.value === session.id,
                      onStartRename: handleStartRename,
                      onCancelRename: handleCancelRename,
                      onConfirmRename: handleConfirmRename,
                      onDelete: handleDeleteSession
                    }, null, 8, ["session", "active", "is-renaming"]);
                  }), 128)), index === groupedConversations.value.length - 1 && unref(chatStore).sessionsLoading ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, renderList(10, i => {
                    return createVNode(SkeletonMenuItem_default, {
                      key: i
                    });
                  }), 64)) : createCommentVNode("", true)], 2);
                }), 128)), createBaseVNode("div", {
                  ref_key: "loadMoreTrigger",
                  ref: loadMoreTrigger$1,
                  class: normalizeClass(_ctx.$style.loadMoreTrigger)
                }, null, 2)], 2)]),
                _: 1
              }), createVNode(MainSidebarUserArea_default, {
                "fully-expanded": true,
                "is-collapsed": false
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarContent.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_3m9u4_123";
        isMobileDevice = "_isMobileDevice_3m9u4_129";
        header = "_header_3m9u4_133";
        logo = "_logo_3m9u4_144";
        items = "_items_3m9u4_149";
        group = "_group_3m9u4_159";
        groupHeader = "_groupHeader_3m9u4_165";
        loadMoreTrigger = "_loadMoreTrigger_3m9u4_169";
        loading = "_loading_3m9u4_174";
        empty = "_empty_3m9u4_175";
        ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default = {
          component,
          isMobileDevice,
          header,
          logo,
          items,
          group,
          groupHeader,
          loadMoreTrigger,
          loading,
          empty
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarContent.vue
        cssModules$1 = {
          "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default
        };
        ChatSidebarContent_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebar.vue?vue&type=script&setup=true&lang.ts
        EDGE_TRIGGER_DISTANCE = 10;
        ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatSidebar",
          setup(__props) {
            const uiStore = useUIStore();
            const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
            const route = useRoute();
            const sidebar = useChatHubSidebarState();
            watch(() => route.fullPath, () => uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY));
            useEventListener(window, "mousemove", event => {
              if (sidebar.isCollapsed.value && event.clientX <= EDGE_TRIGGER_DISTANCE) sidebar.toggleOpen(true);
            });
            onBeforeUnmount(() => {
              uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
            });
            return (_ctx, _cache) => {
              return unref(sidebar).isStatic.value ? (openBlock(), createBlock(ChatSidebarContent_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.static),
                "is-mobile-device": unref(isMobileDevice$1)
              }, null, 8, ["class", "is-mobile-device"])) : (openBlock(), createBlock(ModalDrawer_default, {
                key: 1,
                direction: "ltr",
                width: "min(240px, 80vw)",
                name: unref(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY),
                class: normalizeClass(_ctx.$style.drawer),
                "close-on-click-modal": true,
                "show-close": false
              }, {
                content: withCtx(() => [createVNode(ChatSidebarContent_default, {
                  class: normalizeClass(_ctx.$style.inDrawer),
                  "is-mobile-device": unref(isMobileDevice$1)
                }, null, 8, ["class", "is-mobile-device"])]),
                _: 1
              }, 8, ["name", "class"]));
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebar.vue?vue&type=style&index=0&lang.module.scss
        drawer = "_drawer_ox5ii_123";
        inDrawer = "_inDrawer_ox5ii_128";
        ChatSidebar_vue_vue_type_style_index_0_lang_module_default = {
          drawer,
          inDrawer,
          "static": "_static_ox5ii_129"
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebar.vue
        cssModules = {
          "$style": ChatSidebar_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ChatSidebar_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();