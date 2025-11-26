;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./constants-legacy-D0ziSY9e.js", "./useRootStore-legacy-D1vvqLPX.js", "./NodeIcon-legacy-CDp2SR0v.js", "./Modal-legacy-BUoIu2MX.js", "./CredentialIcon-legacy-CLlljIZ1.js", "./constants-legacy-BrIb7Ao9.js", "./ChatAgentAvatar-legacy-CqWIcerz.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, renderList, createTextVNode, useTemplateRef, createBaseVNode, normalizeStyle, onClickOutside, useI18n, N8nNavigationDropdown_default, N8nIcon_default, N8nAvatar_default, N8nSelect_default, N8nOption_default, N8nText_default, N8nButton_default, __plugin_vue_export_helper_default, createEventBus, useCredentialsStore, useUIStore, useNodeTypesStore, useTelemetry, PROVIDER_CREDENTIAL_TYPE_MAP, emptyChatModelsResponse, chatHubLLMProviderSchema, useRootStore, NodeIcon_default, Modal_default, CredentialIcon_default, providerDisplayNames, TOOLS_SELECTOR_MODAL_KEY, flattenModel, fetchChatModelsApi, isMatchedAgent, fromStringToModel, ChatAgentAvatar_default, stringifyModel, __vite_style__, CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, title, content, footer, footerRight, header, icon$2, CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default, cssModules$2, CredentialSelectorModal_default, NEW_AGENT_MENU_ID, ModelSelector_vue_vue_type_script_setup_true_lang_default, dropdownButton, selected, icon$1, menuIcon, avatarIcon, ModelSelector_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ModelSelector_default, ToolsSelector_vue_vue_type_script_setup_true_lang_default, toolsButton, iconStack, icon, iconOverlap, iconFallback, ToolsSelector_vue_vue_type_style_index_0_lang_module_default, cssModules, ToolsSelector_default;
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
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNavigationDropdown_default = _srcLegacy007Js.A;
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nAvatar_default = _srcLegacy007Js.Ct;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nButton_default = _srcLegacy007Js.Rn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_useTelemetryLegacy00FJs) {
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00NJs.cr;
        emptyChatModelsResponse = _constantsLegacy00NJs.fr;
        chatHubLLMProviderSchema = _constantsLegacy00NJs.ur;
      }, function (_useRootStoreLegacy00TJs) {
        useRootStore = _useRootStoreLegacy00TJs.t;
      }, function (_NodeIconLegacy01zJs) {
        NodeIcon_default = _NodeIconLegacy01zJs.t;
      }, function (_ModalLegacy01NJs) {
        Modal_default = _ModalLegacy01NJs.t;
      }, function (_CredentialIconLegacy02fJs) {
        CredentialIcon_default = _CredentialIconLegacy02fJs.t;
      }, function (_constantsLegacy03fJs) {
        providerDisplayNames = _constantsLegacy03fJs.c;
        TOOLS_SELECTOR_MODAL_KEY = _constantsLegacy03fJs.s;
      }, function (_ChatAgentAvatarLegacy04PJs) {
        flattenModel = _ChatAgentAvatarLegacy04PJs.a;
        fetchChatModelsApi = _ChatAgentAvatarLegacy04PJs.f;
        isMatchedAgent = _ChatAgentAvatarLegacy04PJs.l;
        fromStringToModel = _ChatAgentAvatarLegacy04PJs.o;
        ChatAgentAvatar_default = _ChatAgentAvatarLegacy04PJs.t;
        stringifyModel = _ChatAgentAvatarLegacy04PJs.u;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._title_1hes0_123 {\n  font-size: var(--font-size--lg);\n  line-height: var(--line-height--md);\n  margin: 0;\n}\n._content_1hes0_129 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--sm) 0;\n}\n._footer_1hes0_136 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_1hes0_143 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}\n._header_1hes0_148 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._icon_1hes0_154 {\n  flex-shrink: 0;\n  flex-grow: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dropdownButton_1vfzi_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n  /* disable underline */\n  text-decoration: none !important;\n}\n._selected_1vfzi_131 {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: var(--spacing--4xs);\n  max-width: 200px;\n}\n._selected_1vfzi_131 > div {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._icon_1vfzi_144 {\n  flex-shrink: 0;\n  margin-block: -4px;\n}\n._menuIcon_1vfzi_149 {\n  flex-shrink: 0;\n}\n._avatarIcon_1vfzi_153 {\n  margin-right: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._toolsButton_tpwui_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  padding: var(--spacing--4xs) var(--spacing--2xs);\n  background-color: transparent;\n}\n._iconStack_tpwui_131 {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n._icon_tpwui_131 {\n  padding: var(--spacing--4xs);\n  background-color: var(--color--background--light-2);\n  border-radius: 50%;\n  outline: 2px var(--color--background--light-3) solid;\n}\n._iconOverlap_tpwui_144 {\n  margin-left: -6px;\n}\n._iconFallback_tpwui_148 {\n  padding: var(--spacing--4xs);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue?vue&type=script&setup=true&lang.ts
        CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialSelectorModal",
          props: {
            provider: {},
            initialValue: {}
          },
          emits: ["select", "createNew"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const credentialsStore = useCredentialsStore();
            const modalBus = ref(createEventBus());
            const selectedCredentialId = ref(props.initialValue);
            const availableCredentials = computed(() => {
              return credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[props.provider]);
            });
            function onCredentialSelect(credentialId) {
              selectedCredentialId.value = credentialId;
            }
            function onConfirm() {
              if (selectedCredentialId.value) {
                emit("select", props.provider, selectedCredentialId.value);
                modalBus.value.emit("close");
              }
            }
            function onCreateNew() {
              emit("createNew", props.provider);
              modalBus.value.emit("close");
            }
            function onCancel() {
              modalBus.value.emit("close");
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: "chatCredentialSelector",
                "event-bus": modalBus.value,
                width: "50%",
                center: true,
                "max-width": "460px",
                "min-height": "250px"
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(CredentialIcon_default, {
                  "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.provider],
                  size: 24,
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["credential-type-name", "class"]), createBaseVNode("h2", {
                  class: normalizeClass(_ctx.$style.title)
                }, "Select " + toDisplayString(unref(providerDisplayNames)[_ctx.provider]) + " Credential", 3)], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode(" Choose an existing credential or create a new one ")])),
                  _: 1
                }), createVNode(unref(N8nSelect_default), {
                  "model-value": selectedCredentialId.value,
                  size: "large",
                  placeholder: "Select credential...",
                  "onUpdate:modelValue": onCredentialSelect
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableCredentials.value, credential => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: credential.id,
                      value: credential.id,
                      label: credential.name
                    }, null, 8, ["value", "label"]);
                  }), 128))]),
                  _: 1
                }, 8, ["model-value"])], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  onClick: onCreateNew
                }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode(" Create New ")])),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerRight)
                }, [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  onClick: onCancel
                }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode(" Cancel ")])),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: !selectedCredentialId.value,
                  onClick: onConfirm
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode(" Select ")])),
                  _: 1
                }, 8, ["disabled"])], 2)], 2)]),
                _: 1
              }, 8, ["event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue?vue&type=style&index=0&lang.module.scss
        title = "_title_1hes0_123";
        content = "_content_1hes0_129";
        footer = "_footer_1hes0_136";
        footerRight = "_footerRight_1hes0_143";
        header = "_header_1hes0_148";
        icon$2 = "_icon_1hes0_154";
        CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
          title,
          content,
          footer,
          footerRight,
          header,
          icon: icon$2
        }; //#endregion
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue
        cssModules$2 = {
          "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default
        };
        CredentialSelectorModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
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
            credentials: {}
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
            const i18n = useI18n();
            const agents = ref(emptyChatModelsResponse);
            const dropdownRef = useTemplateRef("dropdownRef");
            const credentialSelectorProvider = ref(null);
            const uiStore = useUIStore();
            const credentialsStore = useCredentialsStore();
            const telemetry = useTelemetry();
            const credentialsName = computed(() => __props.selectedAgent ? credentialsStore.getCredentialById(__props.credentials?.[__props.selectedAgent.model.provider] ?? "")?.name : void 0);
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
                const theAgents = agents.value[provider].models;
                const error = agents.value[provider].error;
                const agentOptions = theAgents.length > 0 ? theAgents.filter(agent => agent.model.provider !== "custom-agent").map(agent => ({
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
                }] : []), {
                  id: `${provider}::configure`,
                  icon: "settings",
                  title: "Configure credentials...",
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
              credentialSelectorProvider.value = provider;
              uiStore.openModal("chatCredentialSelector");
            }
            function onSelect(id) {
              if (id === NEW_AGENT_MENU_ID) {
                emit("createCustomAgent");
                return;
              }
              const [, identifier] = id.split("::");
              const parsedModel = fromStringToModel(id);
              if (!parsedModel) return;
              if (identifier === "configure" && parsedModel.provider !== "n8n" && parsedModel.provider !== "custom-agent") {
                openCredentialsSelectorOrCreate(parsedModel.provider);
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
                  text: ""
                }, {
                  default: withCtx(() => [credentialSelectorProvider.value ? (openBlock(), createBlock(CredentialSelectorModal_default, {
                    key: credentialSelectorProvider.value,
                    provider: credentialSelectorProvider.value,
                    "initial-value": _ctx.credentials?.[credentialSelectorProvider.value] ?? null,
                    onSelect: handleSelectCredentials,
                    onCreateNew: handleCreateNewCredential
                  }, null, 8, ["provider", "initial-value"])) : createCommentVNode("", true), _ctx.selectedAgent ? (openBlock(), createBlock(ChatAgentAvatar_default, {
                    key: 1,
                    agent: _ctx.selectedAgent,
                    size: credentialsName.value ? "md" : "sm",
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
                }, 8, ["class"])]),
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
            selected: {}
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
                class: normalizeClass(_ctx.$style.toolsButton),
                disabled: _ctx.disabled,
                "aria-label": "Select tools",
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
                }), 128))], 2)) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.iconFallback)
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "plus",
                  size: 12
                })], 2)), createVNode(unref(N8nText_default), {
                  size: "small",
                  bold: "",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(toolsLabel.value), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["class", "disabled"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelector.vue?vue&type=style&index=0&lang.module.scss
        toolsButton = "_toolsButton_tpwui_123";
        iconStack = "_iconStack_tpwui_131";
        icon = "_icon_tpwui_131";
        iconOverlap = "_iconOverlap_tpwui_144";
        iconFallback = "_iconFallback_tpwui_148";
        ToolsSelector_vue_vue_type_style_index_0_lang_module_default = {
          toolsButton,
          iconStack,
          icon,
          iconOverlap,
          iconFallback
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