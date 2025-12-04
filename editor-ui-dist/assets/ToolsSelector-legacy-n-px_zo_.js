;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./NodeIcon-legacy-nNR3V-3Y.js", "./CredentialIcon-legacy-BDJvL2pe.js", "./constants-legacy-CDt9VJ1s.js", "./chat.store-legacy-xVTW4QR1.js", "./ChatAgentAvatar-legacy-BIai45_k.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, Fragment, watch, normalizeStyle, withCtx, openBlock, renderList, createTextVNode, useTemplateRef, normalizeClass, createBaseVNode, onClickOutside, useI18n, N8nNavigationDropdown_default, N8nAvatar_default, N8nText_default, N8nIcon_default, N8nButton_default, __plugin_vue_export_helper_default, useSettingsStore, useCredentialsStore, useUIStore, useNodeTypesStore, useTelemetry, chatHubLLMProviderSchema, PROVIDER_CREDENTIAL_TYPE_MAP, emptyChatModelsResponse, useRootStore, NodeIcon_default, CredentialIcon_default, CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, TOOLS_SELECTOR_MODAL_KEY, providerDisplayNames, CHAT_CREDENTIAL_SELECTOR_MODAL_KEY, fromStringToModel, stringifyModel, flattenModel, isLlmProviderModel, fetchChatModelsApi, isMatchedAgent, ChatAgentAvatar_default, __vite_style__, NEW_AGENT_MENU_ID, ModelSelector_vue_vue_type_script_setup_true_lang_default, dropdownButton, selected, icon$1, menuIcon, avatarIcon, ModelSelector_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ModelSelector_default, ToolsSelector_vue_vue_type_script_setup_true_lang_default, toolsButton, transparentBg, iconStack, icon, iconOverlap, ToolsSelector_vue_vue_type_style_index_0_lang_module_default, cssModules, ToolsSelector_default;
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
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNavigationDropdown_default = _srcLegacy007Js.A;
        N8nAvatar_default = _srcLegacy007Js.Ct;
        N8nText_default = _srcLegacy007Js.Kn;
        N8nIcon_default = _srcLegacy007Js.Yn;
        N8nButton_default = _srcLegacy007Js.qn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useCredentialsStore = _useTelemetryLegacy00HJs.Bt;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useNodeTypesStore = _useTelemetryLegacy00HJs.rt;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_constantsLegacy00RJs) {
        chatHubLLMProviderSchema = _constantsLegacy00RJs.$r;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00RJs.Zr;
        emptyChatModelsResponse = _constantsLegacy00RJs.ti;
      }, function (_baseOrderByLegacy00XJs) {
        useRootStore = _baseOrderByLegacy00XJs.r;
      }, function (_NodeIconLegacy01DJs) {
        NodeIcon_default = _NodeIconLegacy01DJs.t;
      }, function (_CredentialIconLegacy02jJs) {
        CredentialIcon_default = _CredentialIconLegacy02jJs.t;
      }, function (_constantsLegacy03jJs) {
        CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY = _constantsLegacy03jJs.a;
        TOOLS_SELECTOR_MODAL_KEY = _constantsLegacy03jJs.d;
        providerDisplayNames = _constantsLegacy03jJs.f;
        CHAT_CREDENTIAL_SELECTOR_MODAL_KEY = _constantsLegacy03jJs.i;
      }, function (_chatStoreLegacy03lJs) {
        fromStringToModel = _chatStoreLegacy03lJs.a;
        stringifyModel = _chatStoreLegacy03lJs.d;
        flattenModel = _chatStoreLegacy03lJs.i;
        isLlmProviderModel = _chatStoreLegacy03lJs.l;
        fetchChatModelsApi = _chatStoreLegacy03lJs.m;
        isMatchedAgent = _chatStoreLegacy03lJs.u;
      }, function (_ChatAgentAvatarLegacy04$Js) {
        ChatAgentAvatar_default = _ChatAgentAvatarLegacy04$Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dropdownButton_1vfzi_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n  /* disable underline */\n  text-decoration: none !important;\n}\n._selected_1vfzi_131 {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: var(--spacing--4xs);\n  max-width: 200px;\n}\n._selected_1vfzi_131 > div {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._icon_1vfzi_144 {\n  flex-shrink: 0;\n  margin-block: -4px;\n}\n._menuIcon_1vfzi_149 {\n  flex-shrink: 0;\n}\n._avatarIcon_1vfzi_153 {\n  margin-right: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._toolsButton_8q67j_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._toolsButton_8q67j_123._transparentBg_8q67j_128 {\n  background-color: transparent;\n}\n._iconStack_8q67j_132 {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n._icon_8q67j_132 {\n  padding: var(--spacing--4xs);\n  background-color: var(--color--background--light-2);\n  border-radius: 50%;\n  outline: 2px var(--color--background--light-3) solid;\n}\n._iconOverlap_8q67j_145 {\n  margin-left: -6px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/ModelSelector.vue?vue&type=script&setup=true&lang.ts
        NEW_AGENT_MENU_ID = "agent::new";
        ModelSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ModelSelector",
          props: {
            selectedAgent: {},
            includeCustomAgents: {
              type: Boolean,
              default: true
            },
            credentials: {},
            text: {
              type: Boolean
            }
          },
          emits: ["change", "createCustomAgent", "selectCredential"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const emit = __emit;
            function handleSelectCredentials(provider, id) {
              emit("selectCredential", provider, id);
            }
            function handleSelectModelById(provider, modelId) {
              emit("change", {
                model: {
                  provider,
                  model: modelId
                },
                name: modelId,
                description: null,
                updatedAt: null,
                createdAt: null,
                allowFileUploads: true
              });
            }
            const i18n = useI18n();
            const agents = ref(emptyChatModelsResponse);
            const dropdownRef = useTemplateRef("dropdownRef");
            const uiStore = useUIStore();
            const settingStore = useSettingsStore();
            const credentialsStore = useCredentialsStore();
            const telemetry = useTelemetry();
            const credentialsName = computed(() => __props.selectedAgent ? credentialsStore.getCredentialById(__props.credentials?.[__props.selectedAgent.model.provider] ?? "")?.name : void 0);
            const isCredentialsRequired = computed(() => isLlmProviderModel(__props.selectedAgent?.model));
            const menu = computed(() => {
              const menuItems = [];
              if (__props.includeCustomAgents) {
                const customAgents = [...agents.value["custom-agent"].models, ...agents.value["n8n"].models].map(agent => ({
                  id: stringifyModel(agent.model),
                  title: agent.name,
                  disabled: false
                }));
                menuItems.push({
                  id: "custom-agents",
                  title: i18n.baseText("chatHub.agent.customAgents"),
                  icon: "robot",
                  iconSize: "large",
                  iconMargin: false,
                  submenu: [...customAgents, ...(customAgents.length > 0 ? [{
                    isDivider: true,
                    id: "divider"
                  }] : []), {
                    id: NEW_AGENT_MENU_ID,
                    icon: "plus",
                    title: i18n.baseText("chatHub.agent.newAgent"),
                    disabled: false
                  }]
                });
              }
              for (const provider of chatHubLLMProviderSchema.options) {
                const settings = settingStore.moduleSettings?.["chat-hub"]?.providers[provider];
                if (settings && !settings.enabled) continue;
                const theAgents = [...agents.value[provider].models];
                for (const model of settings?.allowedModels ?? []) if (model.isManual) theAgents.push({
                  name: model.displayName,
                  description: "",
                  model: {
                    provider,
                    model: model.model
                  },
                  createdAt: "",
                  updatedAt: null
                });
                const error = agents.value[provider].error;
                const agentOptions = theAgents.length > 0 ? theAgents.filter(agent => agent.model.provider === "n8n" || !settings || settings.allowedModels.length === 0 || settings.allowedModels.some(m => "model" in agent.model && m.model === agent.model.model)).map(agent => ({
                  id: stringifyModel(agent.model),
                  title: agent.name,
                  disabled: false
                })) : error ? [{
                  id: `${provider}::error`,
                  value: null,
                  disabled: true,
                  title: error
                }] : [];
                const submenu = agentOptions.concat([...(agentOptions.length > 0 ? [{
                  isDivider: true,
                  id: "divider"
                }] : []), ...(settings?.allowedModels.length === 0 ? [{
                  id: `${provider}::add-model`,
                  icon: "plus",
                  title: i18n.baseText("chatHub.agent.addModel"),
                  disabled: false
                }] : []), {
                  id: `${provider}::configure`,
                  icon: "settings",
                  title: i18n.baseText("chatHub.agent.configureCredentials"),
                  disabled: false
                }]);
                menuItems.push({
                  id: provider,
                  title: providerDisplayNames[provider],
                  submenu
                });
              }
              return menuItems;
            });
            const selectedLabel = computed(() => __props.selectedAgent?.name ?? "Select model");
            function openCredentialsSelectorOrCreate(provider) {
              const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
              if (credentialsStore.getCredentialsByType(credentialType).length === 0) {
                uiStore.openNewCredential(credentialType);
                return;
              }
              uiStore.openModalWithData({
                name: CHAT_CREDENTIAL_SELECTOR_MODAL_KEY,
                data: {
                  provider,
                  initialValue: __props.credentials?.[provider] ?? null,
                  onSelect: handleSelectCredentials,
                  onCreateNew: handleCreateNewCredential
                }
              });
            }
            function openModelByIdSelector(provider) {
              uiStore.openModalWithData({
                name: CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY,
                data: {
                  provider,
                  initialValue: null,
                  onSelect: handleSelectModelById
                }
              });
            }
            function onSelect(id) {
              if (id === NEW_AGENT_MENU_ID) {
                emit("createCustomAgent");
                return;
              }
              const [, identifier] = id.split("::");
              const parsedModel = fromStringToModel(id);
              if (!parsedModel) return;
              if (identifier === "configure" && isLlmProviderModel(parsedModel)) {
                openCredentialsSelectorOrCreate(parsedModel.provider);
                return;
              }
              if (identifier === "add-model" && isLlmProviderModel(parsedModel)) {
                openModelByIdSelector(parsedModel.provider);
                return;
              }
              const selected$1 = agents.value[parsedModel.provider].models.find(a => isMatchedAgent(a, parsedModel));
              if (!selected$1) return;
              telemetry.track("User selected model or agent", {
                ...flattenModel(selected$1.model),
                is_custom: selected$1.model.provider === "custom-agent"
              });
              emit("change", selected$1);
            }
            function handleCreateNewCredential(provider) {
              const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
              telemetry.track("User opened Credential modal", {
                credential_type: credentialType,
                source: "chat",
                new_credential: true,
                workflow_id: null
              });
              uiStore.openNewCredential(credentialType);
            }
            onClickOutside(computed(() => dropdownRef.value?.$el), () => dropdownRef.value?.close());
            watch(() => __props.credentials, async credentials => {
              if (credentials) agents.value = await fetchChatModelsApi(useRootStore().restApiContext, {
                credentials
              });
            }, {
              immediate: true
            });
            __expose({
              open: () => dropdownRef.value?.open()
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
                ref_key: "dropdownRef",
                ref: dropdownRef,
                menu: menu.value,
                onSelect
              }, {
                "item-icon": withCtx(({
                  item
                }) => [item.id in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon_default, {
                  key: 0,
                  "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[item.id],
                  size: 16,
                  class: normalizeClass(_ctx.$style.menuIcon)
                }, null, 8, ["credential-type-name", "class"])) : item.id.startsWith("n8n::") || item.id.startsWith("custom-agent::") ? (openBlock(), createBlock(unref(N8nAvatar_default), {
                  key: 1,
                  class: normalizeClass(_ctx.$style.avatarIcon),
                  "first-name": item.title,
                  size: "xsmall"
                }, null, 8, ["class", "first-name"])) : createCommentVNode("", true)]),
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  class: normalizeClass(_ctx.$style.dropdownButton),
                  type: "secondary",
                  text: _ctx.text
                }, {
                  default: withCtx(() => [_ctx.selectedAgent ? (openBlock(), createBlock(ChatAgentAvatar_default, {
                    key: 0,
                    agent: _ctx.selectedAgent,
                    size: credentialsName.value || !isCredentialsRequired.value ? "md" : "sm",
                    class: normalizeClass(_ctx.$style.icon)
                  }, null, 8, ["agent", "size", "class"])) : createCommentVNode("", true), createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.selected)
                  }, [createBaseVNode("div", null, toDisplayString(selectedLabel.value), 1), credentialsName.value ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 0,
                    size: "xsmall",
                    color: "text-light"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(credentialsName.value), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)], 2), createVNode(unref(N8nIcon_default), {
                    icon: "chevron-down",
                    size: "medium"
                  })]),
                  _: 1
                }, 8, ["class", "text"])]),
                _: 1
              }, 8, ["menu"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ModelSelector.vue?vue&type=style&index=0&lang.module.scss
        dropdownButton = "_dropdownButton_1vfzi_123";
        selected = "_selected_1vfzi_131";
        icon$1 = "_icon_1vfzi_144";
        menuIcon = "_menuIcon_1vfzi_149";
        avatarIcon = "_avatarIcon_1vfzi_153";
        ModelSelector_vue_vue_type_style_index_0_lang_module_default = {
          dropdownButton,
          selected,
          icon: icon$1,
          menuIcon,
          avatarIcon
        }; //#endregion
        //#region src/features/ai/chatHub/components/ModelSelector.vue
        cssModules$1 = {
          "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", ModelSelector_default = /* @__PURE__ */__plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelector.vue?vue&type=script&setup=true&lang.ts
        ToolsSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ToolsSelector",
          props: {
            disabled: {
              type: Boolean
            },
            selected: {},
            transparentBg: {
              type: Boolean,
              default: false
            }
          },
          emits: ["select"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const uiStore = useUIStore();
            const nodeTypesStore = useNodeTypesStore();
            const toolCount = computed(() => __props.selected.length ?? 0);
            const displayToolNodeTypes = computed(() => {
              return __props.selected.slice(0, 3).map(t => nodeTypesStore.getNodeType(t.type)).filter(Boolean);
            });
            const toolsLabel = computed(() => toolCount.value > 0 ? `${toolCount.value} Tool${toolCount.value > 1 ? "s" : ""}` : "Tools");
            onMounted(async () => {
              await nodeTypesStore.loadNodeTypesIfNotLoaded();
            });
            const handleSelect = tools => {
              emit("select", tools);
            };
            const onClick = () => {
              uiStore.openModalWithData({
                name: TOOLS_SELECTOR_MODAL_KEY,
                data: {
                  selected: __props.selected,
                  onConfirm: handleSelect
                }
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nButton_default), {
                type: "secondary",
                "native-type": "button",
                class: normalizeClass([_ctx.$style.toolsButton, {
                  [_ctx.$style.transparentBg]: _ctx.transparentBg
                }]),
                disabled: _ctx.disabled,
                "aria-label": "Select tools",
                icon: toolCount.value > 0 ? void 0 : "plus",
                onClick
              }, {
                default: withCtx(() => [toolCount.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.iconStack)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayToolNodeTypes.value, (nodeType, i) => {
                  return openBlock(), createBlock(NodeIcon_default, {
                    key: `${nodeType?.name}-${i}`,
                    style: normalizeStyle({
                      zIndex: displayToolNodeTypes.value.length - i
                    }),
                    "node-type": nodeType,
                    class: normalizeClass([_ctx.$style.icon, {
                      [_ctx.$style.iconOverlap]: i !== 0
                    }]),
                    circle: true,
                    size: 12
                  }, null, 8, ["style", "node-type", "class"]);
                }), 128))], 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(toolsLabel.value), 1)]),
                _: 1
              }, 8, ["class", "disabled", "icon"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelector.vue?vue&type=style&index=0&lang.module.scss
        toolsButton = "_toolsButton_8q67j_123";
        transparentBg = "_transparentBg_8q67j_128";
        iconStack = "_iconStack_8q67j_132";
        icon = "_icon_8q67j_132";
        iconOverlap = "_iconOverlap_8q67j_145";
        ToolsSelector_vue_vue_type_style_index_0_lang_module_default = {
          toolsButton,
          transparentBg,
          iconStack,
          icon,
          iconOverlap
        }; //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelector.vue
        cssModules = {
          "$style": ToolsSelector_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ToolsSelector_default = /* @__PURE__ */__plugin_vue_export_helper_default(ToolsSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();