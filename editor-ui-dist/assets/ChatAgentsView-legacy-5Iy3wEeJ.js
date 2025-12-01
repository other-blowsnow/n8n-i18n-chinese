;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./retry-legacy-CSXRWnZ-.js", "./CredentialIcon-legacy-BDJvL2pe.js", "./constants-legacy-CDt9VJ1s.js", "./chat.store-legacy-xVTW4QR1.js", "./fileUtils-legacy-C-uhaiIn.js", "./ChatAgentAvatar-legacy-BIai45_k.js", "./ChatSidebarOpener-legacy-CtKzPcVT.js", "./useChatHubSidebarState-legacy-giKHkTt5.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, Fragment, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, normalizeClass, createBaseVNode, useMediaQuery, N8nIconButton_default, N8nSelect_default, N8nOption_default, N8nText_default, N8nIcon_default, N8nBadge_default, N8nActionDropdown_default, N8nButton_default, N8nInput_default, __plugin_vue_export_helper_default, useRouter, RouterLink, useMessage, useUIStore, useUsersStore, useToast, VIEWS, MODAL_CONFIRM, AGENT_EDITOR_MODAL_KEY, MOBILE_MEDIA_QUERY, stringifyModel, filterAndSortAgents, getAgentRoute, useChatStore, ChatAgentAvatar_default, ChatLayout_default, useChatCredentials, ChatSidebarOpener_default, __vite_style__, ChatAgentCard_vue_vue_type_script_setup_true_lang_default, card, avatar, content, badge, title, description, actions, actionDropdownTrigger, ChatAgentCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatAgentCard_default, ChatAgentsView_vue_vue_type_script_setup_true_lang_default, container, menuButton, isMobileDevice, header, headerContent, controls, search, filter, sort, empty, agentsGrid, ChatAgentsView_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatAgentsView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useMediaQuery = _MapCacheLegacy005Js.M;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Et;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Kn;
        N8nIcon_default = _srcLegacy007Js.Yn;
        N8nBadge_default = _srcLegacy007Js.at;
        N8nActionDropdown_default = _srcLegacy007Js.nt;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nInput_default = _srcLegacy007Js.wt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        RouterLink = _truncateLegacy00hJs.p;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useUsersStore = _useTelemetryLegacy00HJs.er;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
        MODAL_CONFIRM = _constantsLegacy00RJs.Qo;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_retryLegacy01jJs) {}, function (_CredentialIconLegacy02jJs) {}, function (_constantsLegacy03jJs) {
        AGENT_EDITOR_MODAL_KEY = _constantsLegacy03jJs.t;
        MOBILE_MEDIA_QUERY = _constantsLegacy03jJs.u;
      }, function (_chatStoreLegacy03lJs) {
        stringifyModel = _chatStoreLegacy03lJs.d;
        filterAndSortAgents = _chatStoreLegacy03lJs.n;
        getAgentRoute = _chatStoreLegacy03lJs.o;
        useChatStore = _chatStoreLegacy03lJs.t;
      }, function (_fileUtilsLegacy03nJs) {}, function (_ChatAgentAvatarLegacy04$Js) {
        ChatAgentAvatar_default = _ChatAgentAvatarLegacy04$Js.t;
      }, function (_ChatSidebarOpenerLegacy051Js) {
        ChatLayout_default = _ChatSidebarOpenerLegacy051Js.n;
        useChatCredentials = _ChatSidebarOpenerLegacy051Js.r;
        ChatSidebarOpener_default = _ChatSidebarOpenerLegacy051Js.t;
      }, function (_useChatHubSidebarStateLegacy053Js) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._card_1v5ca_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--sm);\n  background-color: var(--color--background--light-3);\n  border: var(--border);\n  border-radius: var(--radius--lg);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.3s ease;\n}\n._card_1v5ca_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._avatar_1v5ca_139 {\n  flex-shrink: 0;\n}\n._content_1v5ca_143 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--4xs);\n  flex: 1;\n  min-width: 0;\n}\n._badge_1v5ca_151 {\n  padding: var(--spacing--4xs) var(--spacing--2xs);\n}\n._title_1v5ca_155 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._description_1v5ca_161 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._actions_1v5ca_167 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  flex-shrink: 0;\n}\n._actionDropdownTrigger_1v5ca_173 {\n  box-shadow: none !important;\n  outline: none !important;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_18hjw_123 {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--xl);\n  gap: var(--spacing--xl);\n  overflow-y: auto;\n  position: relative;\n}\n._menuButton_18hjw_136 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: var(--spacing--sm);\n}\n._isMobileDevice_18hjw_142 ._menuButton_18hjw_136 {\n  margin: var(--spacing--2xs);\n}\n._header_18hjw_146 {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--spacing--lg);\n  width: 100%;\n}\n._headerContent_18hjw_154 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--3xs);\n}\n._controls_18hjw_160 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._search_18hjw_166 {\n  flex: 1;\n  min-width: 200px;\n}\n._filter_18hjw_171 {\n  width: 200px;\n}\n._sort_18hjw_175 {\n  width: 200px;\n}\n._empty_18hjw_179 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  flex: 1;\n  width: 100%;\n}\n._agentsGrid_18hjw_188 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/ChatAgentCard.vue?vue&type=script&setup=true&lang.ts
        ChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatAgentCard",
          props: {
            agent: {}
          },
          emits: ["edit", "delete"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const menuItems = computed(() => {
              return [{
                id: "edit",
                label: "Edit"
              }, ...(__props.agent.model.provider === "custom-agent" ? [{
                id: "delete",
                label: "Delete"
              }] : [])];
            });
            function handleSelectMenu(action) {
              switch (action) {
                case "delete":
                  emit("delete");
                  return;
                case "edit":
                  emit("edit");
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(RouterLink), {
                to: unref(getAgentRoute)(_ctx.agent.model),
                class: normalizeClass(_ctx.$style.card)
              }, {
                default: withCtx(() => [createVNode(ChatAgentAvatar_default, {
                  agent: _ctx.agent,
                  size: "lg"
                }, null, 8, ["agent"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nText_default), {
                  tag: "h3",
                  size: "medium",
                  bold: "",
                  class: normalizeClass(_ctx.$style.title)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.name), 1)]),
                  _: 1
                }, 8, ["class"]), createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-light",
                  class: normalizeClass(_ctx.$style.description)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.description || "No description"), 1)]),
                  _: 1
                }, 8, ["class"])], 2), createVNode(unref(N8nBadge_default), {
                  theme: "tertiary",
                  "show-border": "",
                  class: normalizeClass(_ctx.$style.badge)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.model.provider === "n8n" ? "n8n workflow" : "Custom agent"), 1)]),
                  _: 1
                }, 8, ["class"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.actions)
                }, [createVNode(unref(N8nIconButton_default), {
                  icon: "pen",
                  type: "tertiary",
                  size: "medium",
                  title: "Edit",
                  onClick: _cache[0] || (_cache[0] = withModifiers($event => emit("edit"), ["prevent"]))
                }), createVNode(unref(N8nActionDropdown_default), {
                  items: menuItems.value,
                  placement: "bottom-end",
                  onSelect: handleSelectMenu,
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop", "prevent"]))
                }, {
                  activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    icon: "ellipsis-vertical",
                    type: "tertiary",
                    size: "medium",
                    title: "More options",
                    text: "",
                    class: normalizeClass(_ctx.$style.actionDropdownTrigger)
                  }, null, 8, ["class"])]),
                  _: 1
                }, 8, ["items"])], 2)]),
                _: 1
              }, 8, ["to", "class"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatAgentCard.vue?vue&type=style&index=0&lang.module.scss
        card = "_card_1v5ca_123";
        avatar = "_avatar_1v5ca_139";
        content = "_content_1v5ca_143";
        badge = "_badge_1v5ca_151";
        title = "_title_1v5ca_155";
        description = "_description_1v5ca_161";
        actions = "_actions_1v5ca_167";
        actionDropdownTrigger = "_actionDropdownTrigger_1v5ca_173";
        ChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
          card,
          avatar,
          content,
          badge,
          title,
          description,
          actions,
          actionDropdownTrigger
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatAgentCard.vue
        cssModules$1 = {
          "$style": ChatAgentCard_vue_vue_type_style_index_0_lang_module_default
        };
        ChatAgentCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatAgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/chatHub/ChatAgentsView.vue?vue&type=script&setup=true&lang.ts
        ChatAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatAgentsView",
          setup(__props) {
            const chatStore = useChatStore();
            const uiStore = useUIStore();
            const toast = useToast();
            const message = useMessage();
            const usersStore = useUsersStore();
            const router = useRouter();
            const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
            const agentFilter = ref({
              search: "",
              provider: "",
              sortBy: "updatedAt"
            });
            const {
              credentialsByProvider
            } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
            const readyToShowList = computed(() => chatStore.agentsReady);
            const allModels = computed(() => chatStore.agents.n8n.models.concat(chatStore.agents["custom-agent"].models));
            const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
            const providerOptions = [{
              label: "All",
              value: ""
            }, {
              label: "Custom agents",
              value: "custom-agent"
            }, {
              label: "n8n workflows",
              value: "n8n"
            }];
            const sortOptions = [{
              label: "Sort by last updated",
              value: "updatedAt"
            }, {
              label: "Sort by created",
              value: "createdAt"
            }];
            function handleCreateAgent() {
              chatStore.currentEditingAgent = null;
              uiStore.openModalWithData({
                name: AGENT_EDITOR_MODAL_KEY,
                data: {
                  credentials: credentialsByProvider
                }
              });
            }
            async function handleEditAgent(model) {
              if (model.provider === "n8n") {
                const routeData = router.resolve({
                  name: VIEWS.WORKFLOW,
                  params: {
                    name: model.workflowId
                  }
                });
                window.open(routeData.href, "_blank");
                return;
              }
              if (model.provider === "custom-agent") try {
                await chatStore.fetchCustomAgent(model.agentId);
                uiStore.openModalWithData({
                  name: AGENT_EDITOR_MODAL_KEY,
                  data: {
                    agentId: model.agentId,
                    credentials: credentialsByProvider
                  }
                });
              } catch (error) {
                toast.showError(error, "Failed to load agent");
              }
            }
            async function handleDeleteAgent(agentId) {
              if ((await message.confirm("Are you sure you want to delete this agent?", "Delete agent", {
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel"
              })) !== "confirm" || !credentialsByProvider.value) return;
              try {
                await chatStore.deleteCustomAgent(agentId, credentialsByProvider.value);
                toast.showMessage({
                  type: "success",
                  title: "Agent deleted successfully"
                });
              } catch (error) {
                toast.showError(error, "Could not delete the agent");
              }
            }
            watch(credentialsByProvider, credentials => {
              if (credentials) chatStore.fetchAgents(credentials);
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(ChatLayout_default, null, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.container, {
                    [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1)
                  }])
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.headerContent)
                }, [createVNode(unref(N8nText_default), {
                  tag: "h1",
                  size: "xlarge",
                  bold: ""
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("Custom Agents")])),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  color: "text-light"
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode(" Use n8n workflow agents or create custom AI agents with specific instructions and behaviors ")])),
                  _: 1
                })], 2), createVNode(unref(N8nButton_default), {
                  icon: "plus",
                  type: "primary",
                  size: "medium",
                  onClick: handleCreateAgent
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode(" New Agent ")])),
                  _: 1
                })], 2), readyToShowList.value && allModels.value.length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.controls)
                }, [createVNode(unref(N8nInput_default), {
                  modelValue: agentFilter.value.search,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => agentFilter.value.search = $event),
                  class: normalizeClass(_ctx.$style.search),
                  placeholder: "Search",
                  clearable: ""
                }, {
                  prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "search"
                  })]),
                  _: 1
                }, 8, ["modelValue", "class"]), createVNode(unref(N8nSelect_default), {
                  modelValue: agentFilter.value.provider,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => agentFilter.value.provider = $event),
                  class: normalizeClass(_ctx.$style.filter)
                }, {
                  default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(providerOptions, option => {
                    return createVNode(unref(N8nOption_default), {
                      key: String(option.value),
                      label: option.label,
                      value: option.value
                    }, null, 8, ["label", "value"]);
                  }), 64))]),
                  _: 1
                }, 8, ["modelValue", "class"]), createVNode(unref(N8nSelect_default), {
                  modelValue: agentFilter.value.sortBy,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => agentFilter.value.sortBy = $event),
                  class: normalizeClass(_ctx.$style.sort),
                  placeholder: "Sort by"
                }, {
                  default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(sortOptions, option => {
                    return createVNode(unref(N8nOption_default), {
                      key: option.value,
                      label: option.label,
                      value: option.value
                    }, null, 8, ["label", "value"]);
                  }), 64))]),
                  _: 1
                }, 8, ["modelValue", "class"])], 2)) : createCommentVNode("", true), !readyToShowList.value ? (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [], 64)) : allModels.value.length === 0 ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.empty)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "medium"
                }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode(" No agents available. Create your first custom agent to get started. ")])),
                  _: 1
                })], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
                  key: 3,
                  class: normalizeClass(_ctx.$style.empty)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "medium"
                }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode(" No agents match your search criteria. ")])),
                  _: 1
                })], 2)) : (openBlock(), createElementBlock("div", {
                  key: 4,
                  class: normalizeClass(_ctx.$style.agentsGrid)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(agents.value, agent => {
                  return openBlock(), createBlock(ChatAgentCard_default, {
                    key: unref(stringifyModel)(agent.model),
                    agent,
                    onEdit: $event => handleEditAgent(agent.model),
                    onDelete: $event => agent.model.provider === "custom-agent" ? handleDeleteAgent(agent.model.agentId) : void 0
                  }, null, 8, ["agent", "onEdit", "onDelete"]);
                }), 128))], 2))], 2), createVNode(ChatSidebarOpener_default, {
                  class: normalizeClass(_ctx.$style.menuButton)
                }, null, 8, ["class"])]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/ChatAgentsView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_18hjw_123";
        menuButton = "_menuButton_18hjw_136";
        isMobileDevice = "_isMobileDevice_18hjw_142";
        header = "_header_18hjw_146";
        headerContent = "_headerContent_18hjw_154";
        controls = "_controls_18hjw_160";
        search = "_search_18hjw_166";
        filter = "_filter_18hjw_171";
        sort = "_sort_18hjw_175";
        empty = "_empty_18hjw_179";
        agentsGrid = "_agentsGrid_18hjw_188";
        ChatAgentsView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          menuButton,
          isMobileDevice,
          header,
          headerContent,
          controls,
          search,
          filter,
          sort,
          empty,
          agentsGrid
        }; //#endregion
        //#region src/features/ai/chatHub/ChatAgentsView.vue
        cssModules = {
          "$style": ChatAgentsView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ChatAgentsView_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();