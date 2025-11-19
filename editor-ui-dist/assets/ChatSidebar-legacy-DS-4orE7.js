;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./dialog-legacy-DgHQtAIU.js", "./ModalDrawer-legacy-BUW9hiy7.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./retry-legacy-CkXCWkMV.js", "./CredentialIcon-legacy-73ltKnan.js", "./constants-legacy-D22nGw-a.js", "./MainSidebarUserArea-legacy-BCxB5AOq.js", "./useChatHubSidebarState-legacy-DoVQwr5b.js", "./useAgent-legacy-157ygI6k.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, createSlots, useTemplateRef, resolveComponent, createBaseVNode, useMediaQuery, N8nInput_default, N8nText_default, N8nLogo_default, N8nIconButton_default, N8nScrollArea_default, N8nActionDropdown_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useRoute, useMessage, ModalDrawer_default, useSettingsStore, useUIStore, useTelemetry, useToast, MODAL_CONFIRM, VIEWS, CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY, MOBILE_MEDIA_QUERY, CHAT_VIEW, CHAT_CONVERSATION_VIEW, CHAT_AGENTS_VIEW, MainSidebarUserArea_default, unflattenModel, groupConversationsByDate, ChatAgentAvatar_default, useChatStore, useChatHubSidebarState, useAgent, __vite_style__, ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, menuItem, active, menuItemLink, label, actionDropdown, actionDropdownTrigger, ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default, cssModules$2, ChatSidebarLink_default, ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default, ChatSessionMenuItem_default, ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, component, isMobileDevice, header, logo, items, group, groupHeader, loading, empty, ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatSidebarContent_default, ChatSidebar_vue_vue_type_script_setup_true_lang_default, drawer, inDrawer, ChatSidebar_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatSidebar_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
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
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useMediaQuery = _MapCacheLegacy005Js.M;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nText_default = _srcLegacy007Js.In;
        N8nLogo_default = _srcLegacy007Js.M;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nScrollArea_default = _srcLegacy007Js.i;
        N8nActionDropdown_default = _srcLegacy007Js.tt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_dialogLegacy00BJs) {}, function (_ModalDrawerLegacy00DJs) {
        ModalDrawer_default = _ModalDrawerLegacy00DJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        VIEWS = _constantsLegacy00NJs.mo;
        CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY = _constantsLegacy00NJs.vo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_retryLegacy01bJs) {}, function (_CredentialIconLegacy02bJs) {}, function (_constantsLegacy039Js) {
        MOBILE_MEDIA_QUERY = _constantsLegacy039Js.a;
        CHAT_VIEW = _constantsLegacy039Js.i;
        CHAT_CONVERSATION_VIEW = _constantsLegacy039Js.n;
        CHAT_AGENTS_VIEW = _constantsLegacy039Js.t;
      }, function (_MainSidebarUserAreaLegacy03$Js) {
        MainSidebarUserArea_default = _MainSidebarUserAreaLegacy03$Js.t;
      }, function (_useChatHubSidebarStateLegacy04FJs) {
        unflattenModel = _useChatHubSidebarStateLegacy04FJs.f;
        groupConversationsByDate = _useChatHubSidebarStateLegacy04FJs.l;
        ChatAgentAvatar_default = _useChatHubSidebarStateLegacy04FJs.n;
        useChatStore = _useChatHubSidebarStateLegacy04FJs.r;
        useChatHubSidebarState = _useChatHubSidebarStateLegacy04FJs.t;
      }, function (_useAgentLegacy04NJs) {
        useAgent = _useAgentLegacy04NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._menuItem_xggh1_123 {\n  display: flex;\n  align-items: center;\n  border-radius: var(--spacing--4xs);\n  padding-right: 0;\n}\n._menuItem_xggh1_123:focus-within, ._menuItem_xggh1_123:has([aria-expanded=true]), ._menuItem_xggh1_123._active_xggh1_129, ._menuItem_xggh1_123:hover {\n  background-color: var(--color--foreground);\n}\n._menuItemLink_xggh1_133 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--3xs);\n  gap: var(--spacing--3xs);\n  cursor: pointer;\n  color: var(--color--text);\n  min-width: 0;\n  flex: 1;\n  text-decoration: none;\n  outline: none;\n}\n._menuItemLink_xggh1_133:active {\n  color: var(--color--text--shade-1);\n}\n._label_xggh1_149 {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex: 1;\n  line-height: var(--font-size--lg);\n  min-width: 0;\n}\n._actionDropdown_xggh1_158 {\n  opacity: 0;\n  transition: opacity 0.2s;\n  flex-shrink: 0;\n  width: 0;\n}\n._menuItem_xggh1_123:has([aria-expanded=true]) ._actionDropdown_xggh1_158, ._menuItem_xggh1_123:has(:focus) ._actionDropdown_xggh1_158, ._menuItem_xggh1_123:hover ._actionDropdown_xggh1_158, ._active_xggh1_129 ._actionDropdown_xggh1_158 {\n  width: auto;\n  opacity: 1;\n}\n._actionDropdownTrigger_xggh1_169 {\n  box-shadow: none !important;\n  outline: none !important;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_6tn5s_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-block: var(--spacing--4xs);\n}\n._component_6tn5s_123._isMobileDevice_6tn5s_129 {\n  padding-block: 0;\n}\n._header_6tn5s_133 {\n  height: 56px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-inline: var(--spacing--xs);\n  gap: var(--spacing--2xs);\n}\n._logo_6tn5s_144 {\n  /* Adjust vertical alignment */\n  margin-top: -4px;\n}\n._items_6tn5s_149 {\n  display: flex;\n  flex-direction: column;\n  padding: 0 var(--spacing--xs) var(--spacing--sm) var(--spacing--xs);\n  gap: var(--spacing--xs);\n}\n._isMobileDevice_6tn5s_129 ._items_6tn5s_149 {\n  gap: var(--spacing--sm);\n}\n._group_6tn5s_159 {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n._groupHeader_6tn5s_165 {\n  padding: 0 var(--spacing--4xs) var(--spacing--3xs) var(--spacing--4xs);\n}\n._loading_6tn5s_169,\n._empty_6tn5s_170 {\n  padding: var(--spacing--xs);\n  text-align: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._drawer_1yjrp_123 .el-drawer__header {\n  padding: 0;\n}\n._inDrawer_1yjrp_127,\n._static_1yjrp_128 {\n  height: 100%;\n  background-color: var(--color--background--light-2);\n}\n._static_1yjrp_128 {\n  width: 240px;\n  position: relative;\n  overflow: auto;\n  margin-right: calc(-1 * var(--spacing--4xs));\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
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
              }, 8, ["to", "class"]), _ctx.menuItems.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
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
        cssModules$2 = {
          "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default
        };
        ChatSidebarLink_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
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
            const agent = useAgent(computed(() => unflattenModel(__props.session)));
            const dropdownItems = computed(() => [{
              id: "rename",
              label: "Rename",
              icon: "pencil"
            }, {
              id: "delete",
              label: "Delete",
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
              if (e.key === "Enter") handleBlur();
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
                  agent: unref(agent) ?? null,
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
            const telemetry = useTelemetry();
            const renamingSessionId = ref();
            const currentSessionId = computed(() => typeof route.params.id === "string" ? route.params.id : void 0);
            const readyToShowConversations = computed(() => chatStore.agentsReady && chatStore.sessionsReady);
            const groupedConversations = computed(() => groupConversationsByDate(chatStore.sessions));
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
                toast.showError(error, "Could not update the conversation title.");
              }
            }
            async function handleDeleteSession(sessionId) {
              if ((await message.confirm("Are you sure you want to delete this conversation?", "Delete conversation", {
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel"
              })) !== "confirm") return;
              try {
                await chatStore.deleteSession(sessionId);
                toast.showMessage({
                  type: "success",
                  title: "Conversation is deleted"
                });
                if (sessionId === currentSessionId.value) router.push({
                  name: CHAT_VIEW
                });
              } catch (error) {
                toast.showError(error, "Could not delete the conversation");
              }
            }
            function handleNewChatClick() {
              telemetry.track("User clicked new chat button", {});
              sidebar.toggleOpen(false);
            }
            onMounted(() => {
              chatStore.fetchSessions();
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
                title: "Toggle menu",
                icon: "panel-left",
                type: "tertiary",
                text: "",
                size: "small",
                "icon-size": "large",
                onClick: _cache[0] || (_cache[0] = $event => unref(sidebar).toggleStatic())
              })) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.items)
              }, [createVNode(ChatSidebarLink_default, {
                to: {
                  name: unref(CHAT_VIEW),
                  force: true
                },
                label: "New Chat",
                icon: "square-pen",
                active: unref(route).name === unref(CHAT_VIEW),
                onClick: handleNewChatClick
              }, null, 8, ["to", "active"]), createVNode(ChatSidebarLink_default, {
                to: {
                  name: unref(CHAT_AGENTS_VIEW)
                },
                label: "Custom Agents",
                icon: "robot",
                active: unref(route).name === unref(CHAT_AGENTS_VIEW),
                onClick: _cache[1] || (_cache[1] = $event => unref(sidebar).toggleOpen(false))
              }, null, 8, ["to", "active"])], 2), createVNode(unref(N8nScrollArea_default), {
                "as-child": "",
                type: "scroll"
              }, {
                default: withCtx(() => [readyToShowConversations.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.items)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(groupedConversations.value, group$1 => {
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
                  }), 128))], 2);
                }), 128))], 2)) : createCommentVNode("", true)]),
                _: 1
              }), createVNode(MainSidebarUserArea_default, {
                "fully-expanded": true,
                "is-collapsed": false
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarContent.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_6tn5s_123";
        isMobileDevice = "_isMobileDevice_6tn5s_129";
        header = "_header_6tn5s_133";
        logo = "_logo_6tn5s_144";
        items = "_items_6tn5s_149";
        group = "_group_6tn5s_159";
        groupHeader = "_groupHeader_6tn5s_165";
        loading = "_loading_6tn5s_169";
        empty = "_empty_6tn5s_170";
        ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default = {
          component,
          isMobileDevice,
          header,
          logo,
          items,
          group,
          groupHeader,
          loading,
          empty
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarContent.vue
        cssModules$1 = {
          "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default
        };
        ChatSidebarContent_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebar.vue?vue&type=script&setup=true&lang.ts
        ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatSidebar",
          setup(__props) {
            const uiStore = useUIStore();
            const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
            const route = useRoute();
            const sidebar = useChatHubSidebarState();
            watch(() => route.fullPath, () => uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY));
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
        drawer = "_drawer_1yjrp_123";
        inDrawer = "_inDrawer_1yjrp_127";
        ChatSidebar_vue_vue_type_style_index_0_lang_module_default = {
          drawer,
          inDrawer,
          "static": "_static_1yjrp_128"
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