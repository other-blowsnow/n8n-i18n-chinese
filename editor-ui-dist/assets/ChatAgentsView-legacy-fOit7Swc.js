;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./retry-legacy-CkXCWkMV.js", "./Modal-legacy-QjB-Eju3.js", "./CredentialIcon-legacy-73ltKnan.js", "./TimeAgo-legacy-DZ56LCYg.js", "./constants-legacy-D22nGw-a.js", "./useChatHubSidebarState-legacy-DoVQwr5b.js", "./useChatCredentials-legacy-24-vajya.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, createBaseVNode, useMediaQuery, N8nInput_default, N8nOption_default, N8nText_default, N8nButton_default, N8nIconButton_default, N8nSelect_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, RouterLink, useMessage, useUIStore, useUsersStore, useToast, MODAL_CONFIRM, VIEWS, TimeAgo_default, MOBILE_MEDIA_QUERY, getAgentRoute, stringifyModel, filterAndSortAgents, ChatAgentAvatar_default, useChatStore, useChatHubSidebarState, AgentEditorModal_default, useChatCredentials, __vite_style__, ChatAgentCard_vue_vue_type_script_setup_true_lang_default, card, avatar, content, title, description, metadata, actions, ChatAgentCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatAgentCard_default, ChatAgentsView_vue_vue_type_script_setup_true_lang_default, container, menuButton, isMobileDevice, header, headerContent, controls, search, filter, sort, empty, agentsGrid, ChatAgentsView_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatAgentsView_default;
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
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useMediaQuery = _MapCacheLegacy005Js.M;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        RouterLink = _truncateLegacy00hJs.p;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_retryLegacy01bJs) {}, function (_ModalLegacy01JJs) {}, function (_CredentialIconLegacy02bJs) {}, function (_TimeAgoLegacy02HJs) {
        TimeAgo_default = _TimeAgoLegacy02HJs.t;
      }, function (_constantsLegacy039Js) {
        MOBILE_MEDIA_QUERY = _constantsLegacy039Js.a;
      }, function (_useChatHubSidebarStateLegacy04FJs) {
        getAgentRoute = _useChatHubSidebarStateLegacy04FJs.c;
        stringifyModel = _useChatHubSidebarStateLegacy04FJs.d;
        filterAndSortAgents = _useChatHubSidebarStateLegacy04FJs.i;
        ChatAgentAvatar_default = _useChatHubSidebarStateLegacy04FJs.n;
        useChatStore = _useChatHubSidebarStateLegacy04FJs.r;
        useChatHubSidebarState = _useChatHubSidebarStateLegacy04FJs.t;
      }, function (_useChatCredentialsLegacy04HJs) {
        AgentEditorModal_default = _useChatCredentialsLegacy04HJs.n;
        useChatCredentials = _useChatCredentialsLegacy04HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._card_1q9hn_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--sm);\n  background-color: var(--color--background--light-3);\n  border: var(--border);\n  border-radius: var(--radius--lg);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.3s ease;\n}\n._card_1q9hn_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._avatar_1q9hn_139 {\n  flex-shrink: 0;\n}\n._content_1q9hn_143 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--4xs);\n  flex: 1;\n  min-width: 0;\n}\n._title_1q9hn_151 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._description_1q9hn_157 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._metadata_1q9hn_163 {\n  display: flex;\n  align-items: center;\n}\n._metadata_1q9hn_163 > * {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre;\n}\n._metadata_1q9hn_163 > *:not(:last-child):after {\n  content: \"|\";\n  display: block;\n  padding-inline: var(--spacing--3xs);\n}\n._actions_1q9hn_180 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  flex-shrink: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_15w0c_123 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--xl);\n  gap: var(--spacing--xl);\n  overflow-y: auto;\n  position: relative;\n}\n._menuButton_15w0c_135 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: var(--spacing--sm);\n}\n._isMobileDevice_15w0c_141 ._menuButton_15w0c_135 {\n  margin: var(--spacing--2xs);\n}\n._header_15w0c_145 {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--spacing--lg);\n  width: 100%;\n}\n._headerContent_15w0c_153 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--3xs);\n}\n._controls_15w0c_159 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._search_15w0c_165 {\n  flex: 1;\n  min-width: 200px;\n}\n._filter_15w0c_170 {\n  width: 200px;\n}\n._sort_15w0c_174 {\n  width: 200px;\n}\n._empty_15w0c_178 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  flex: 1;\n  width: 100%;\n}\n._agentsGrid_15w0c_187 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
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
                }, 8, ["class"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.metadata)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-light"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.model.provider === "n8n" ? "n8n workflow" : "Custom agent"), 1)]),
                  _: 1
                }), _ctx.agent.updatedAt ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  size: "small",
                  color: "text-light"
                }, {
                  default: withCtx(() => [_cache[2] || (_cache[2] = createTextVNode(" Last updated ")), createVNode(TimeAgo_default, {
                    date: _ctx.agent.updatedAt
                  }, null, 8, ["date"])]),
                  _: 1
                })) : createCommentVNode("", true), _ctx.agent.createdAt ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  size: "small",
                  color: "text-light"
                }, {
                  default: withCtx(() => [_cache[3] || (_cache[3] = createTextVNode(" Created ")), createVNode(TimeAgo_default, {
                    date: _ctx.agent.createdAt
                  }, null, 8, ["date"])]),
                  _: 1
                })) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.actions)
                }, [createVNode(unref(N8nIconButton_default), {
                  icon: "pen",
                  type: "tertiary",
                  size: "medium",
                  title: "Edit",
                  onClick: _cache[0] || (_cache[0] = withModifiers($event => emit("edit"), ["prevent"]))
                }), _ctx.agent.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                  key: 0,
                  icon: "trash-2",
                  type: "tertiary",
                  size: "medium",
                  title: "More options",
                  onClick: _cache[1] || (_cache[1] = withModifiers($event => emit("delete"), ["prevent"]))
                })) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["to", "class"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatAgentCard.vue?vue&type=style&index=0&lang.module.scss
        card = "_card_1q9hn_123";
        avatar = "_avatar_1q9hn_139";
        content = "_content_1q9hn_143";
        title = "_title_1q9hn_151";
        description = "_description_1q9hn_157";
        metadata = "_metadata_1q9hn_163";
        actions = "_actions_1q9hn_180";
        ChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
          card,
          avatar,
          content,
          title,
          description,
          metadata,
          actions
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
            const sidebar = useChatHubSidebarState();
            const router = useRouter();
            const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
            const editingAgentId = ref(void 0);
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
              editingAgentId.value = void 0;
              uiStore.openModal("agentEditor");
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
                editingAgentId.value = model.agentId;
                uiStore.openModal("agentEditor");
              } catch (error) {
                toast.showError(error, "Failed to load agent");
              }
            }
            function handleCloseAgentEditor() {
              editingAgentId.value = void 0;
            }
            async function handleAgentCreatedOrUpdated() {
              editingAgentId.value = void 0;
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
              return openBlock(), createElementBlock("div", {
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
                default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("Custom Agents")])),
                _: 1
              }), createVNode(unref(N8nText_default), {
                color: "text-light"
              }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode(" Use n8n workflow agents or create custom AI agents with specific instructions and behaviors ")])),
                _: 1
              })], 2), createVNode(unref(N8nButton_default), {
                icon: "plus",
                type: "primary",
                size: "large",
                onClick: handleCreateAgent
              }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode(" New Agent ")])),
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
                default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode(" No agents available. Create your first custom agent to get started. ")])),
                _: 1
              })], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(_ctx.$style.empty)
              }, [createVNode(unref(N8nText_default), {
                color: "text-light",
                size: "medium"
              }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode(" No agents match your search criteria. ")])),
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
              }), 128))], 2)), unref(credentialsByProvider) ? (openBlock(), createBlock(AgentEditorModal_default, {
                key: 5,
                "agent-id": editingAgentId.value,
                credentials: unref(credentialsByProvider),
                onCreateCustomAgent: handleAgentCreatedOrUpdated,
                onClose: handleCloseAgentEditor
              }, null, 8, ["agent-id", "credentials"])) : createCommentVNode("", true), !unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 6,
                class: normalizeClass(_ctx.$style.menuButton),
                type: "secondary",
                icon: "panel-left",
                text: "",
                "icon-size": "large",
                onClick: _cache[3] || (_cache[3] = $event => unref(sidebar).toggleOpen(true))
              }, null, 8, ["class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/ChatAgentsView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_15w0c_123";
        menuButton = "_menuButton_15w0c_135";
        isMobileDevice = "_isMobileDevice_15w0c_141";
        header = "_header_15w0c_145";
        headerContent = "_headerContent_15w0c_153";
        controls = "_controls_15w0c_159";
        search = "_search_15w0c_165";
        filter = "_filter_15w0c_170";
        sort = "_sort_15w0c_174";
        empty = "_empty_15w0c_178";
        agentsGrid = "_agentsGrid_15w0c_187";
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