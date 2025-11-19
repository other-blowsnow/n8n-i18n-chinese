;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./Modal-legacy-QjB-Eju3.js", "./CredentialIcon-legacy-73ltKnan.js", "./constants-legacy-D22nGw-a.js", "./useChatHubSidebarState-legacy-DoVQwr5b.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, renderList, createTextVNode, useTemplateRef, createBaseVNode, onClickOutside, useI18n, useLocalStorage, N8nInput_default, N8nOption_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nAvatar_default, N8nSelect_default, N8nInputLabel_default, N8nNavigationDropdown_default, N8nIcon_default, __plugin_vue_export_helper_default, createEventBus, useMessage, useCredentialsStore, useUIStore, useRootStore, assert, useTelemetry, useToast, recordType, stringType, nullType, LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, PROVIDER_CREDENTIAL_TYPE_MAP, chatHubProviderSchema, emptyChatModelsResponse, chatHubLLMProviderSchema, Modal_default, CredentialIcon_default, providerDisplayNames, stringifyModel, ChatAgentAvatar_default, flattenModel, fetchChatModelsApi, useChatStore, fromStringToModel, isMatchedAgent, __vite_style__, CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, title, content$1, footer$1, footerRight$1, header, icon$1, CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default, cssModules$2, CredentialSelectorModal_default, NEW_AGENT_MENU_ID, ModelSelector_vue_vue_type_script_setup_true_lang_default, dropdownButton, selected, icon, menuIcon, avatarIcon, ModelSelector_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ModelSelector_default, AgentEditorModal_vue_vue_type_script_setup_true_lang_default, content, input, footer, footerRight, AgentEditorModal_vue_vue_type_style_index_0_lang_module_default, cssModules, AgentEditorModal_default, credentialsMapSchema;
    //#endregion
    //#region src/features/ai/chatHub/composables/useChatCredentials.ts
    /**
    * Composable for managing chat credentials including auto-selection and user selection.
    */
    function useChatCredentials(userId) {
      const isInitialized = ref(false);
      const credentialsStore = useCredentialsStore();
      const selectedCredentials = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_CREDENTIALS(userId), {}, {
        writeDefaults: false,
        shallow: true,
        serializer: {
          read: value => {
            try {
              return credentialsMapSchema.parse(JSON.parse(value));
            } catch (error) {
              return {};
            }
          },
          write: value => JSON.stringify(value)
        }
      });
      const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map(provider => {
        if (provider === "n8n" || provider === "custom-agent") return [provider, null];
        const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
        if (!credentialType) return [provider, null];
        return [provider, credentialsStore.getCredentialsByType(credentialType).toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
      })));
      const credentialsByProvider = computed(() => isInitialized.value ? {
        ...autoSelectCredentials.value,
        ...selectedCredentials.value
      } : null);
      function selectCredential(provider, id) {
        selectedCredentials.value = {
          ...selectedCredentials.value,
          [provider]: id
        };
      }
      onMounted(async () => {
        await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentials()]);
        isInitialized.value = true;
      });
      return {
        credentialsByProvider,
        selectCredential
      };
    }

    //#endregion
    _export("t", useChatCredentials);
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
      }, function (_MapCacheLegacy005Js) {
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nAvatar_default = _srcLegacy007Js.St;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nInputLabel_default = _srcLegacy007Js.Y;
        N8nNavigationDropdown_default = _srcLegacy007Js.k;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        assert = _useTelemetryLegacy00FJs._c;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        recordType = _constantsLegacy00NJs.Gr;
        stringType = _constantsLegacy00NJs.Kr;
        nullType = _constantsLegacy00NJs.Wr;
        LOCAL_STORAGE_CHAT_HUB_CREDENTIALS = _constantsLegacy00NJs.Xo;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00NJs.cr;
        chatHubProviderSchema = _constantsLegacy00NJs.dr;
        emptyChatModelsResponse = _constantsLegacy00NJs.fr;
        chatHubLLMProviderSchema = _constantsLegacy00NJs.ur;
      }, function (_ModalLegacy01JJs) {
        Modal_default = _ModalLegacy01JJs.t;
      }, function (_CredentialIconLegacy02bJs) {
        CredentialIcon_default = _CredentialIconLegacy02bJs.t;
      }, function (_constantsLegacy039Js) {
        providerDisplayNames = _constantsLegacy039Js.o;
      }, function (_useChatHubSidebarStateLegacy04FJs) {
        stringifyModel = _useChatHubSidebarStateLegacy04FJs.d;
        ChatAgentAvatar_default = _useChatHubSidebarStateLegacy04FJs.n;
        flattenModel = _useChatHubSidebarStateLegacy04FJs.o;
        fetchChatModelsApi = _useChatHubSidebarStateLegacy04FJs.p;
        useChatStore = _useChatHubSidebarStateLegacy04FJs.r;
        fromStringToModel = _useChatHubSidebarStateLegacy04FJs.s;
        isMatchedAgent = _useChatHubSidebarStateLegacy04FJs.u;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._title_1hes0_123 {\n  font-size: var(--font-size--lg);\n  line-height: var(--line-height--md);\n  margin: 0;\n}\n._content_1hes0_129 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--sm) 0;\n}\n._footer_1hes0_136 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_1hes0_143 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}\n._header_1hes0_148 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._icon_1hes0_154 {\n  flex-shrink: 0;\n  flex-grow: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dropdownButton_1vfzi_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n  /* disable underline */\n  text-decoration: none !important;\n}\n._selected_1vfzi_131 {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: var(--spacing--4xs);\n  max-width: 200px;\n}\n._selected_1vfzi_131 > div {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._icon_1vfzi_144 {\n  flex-shrink: 0;\n  margin-block: -4px;\n}\n._menuIcon_1vfzi_149 {\n  flex-shrink: 0;\n}\n._avatarIcon_1vfzi_153 {\n  margin-right: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_9wlob_123 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n  padding: var(--spacing--sm) 0;\n}\n._input_9wlob_130 {\n  width: 100%;\n}\n._footer_9wlob_134 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_9wlob_141 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
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
        content$1 = "_content_1hes0_129";
        footer$1 = "_footer_1hes0_136";
        footerRight$1 = "_footerRight_1hes0_143";
        header = "_header_1hes0_148";
        icon$1 = "_icon_1hes0_154";
        CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
          title,
          content: content$1,
          footer: footer$1,
          footerRight: footerRight$1,
          header,
          icon: icon$1
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
        icon = "_icon_1vfzi_144";
        menuIcon = "_menuIcon_1vfzi_149";
        avatarIcon = "_avatarIcon_1vfzi_153";
        ModelSelector_vue_vue_type_style_index_0_lang_module_default = {
          dropdownButton,
          selected,
          icon,
          menuIcon,
          avatarIcon
        }; //#endregion
        //#region src/features/ai/chatHub/components/ModelSelector.vue
        cssModules$1 = {
          "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default
        };
        _export("r", ModelSelector_default = /* @__PURE__ */__plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=script&setup=true&lang.ts
        AgentEditorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AgentEditorModal",
          props: {
            credentials: {},
            agentId: {}
          },
          emits: ["createCustomAgent", "close"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const chatStore = useChatStore();
            const uiStore = useUIStore();
            const i18n = useI18n();
            const toast = useToast();
            const message = useMessage();
            const modalBus = ref(createEventBus());
            const name = ref("");
            const description = ref("");
            const systemPrompt = ref("");
            const selectedModel = ref(null);
            const isSaving = ref(false);
            const isDeleting = ref(false);
            const agentSelectedCredentials = ref({});
            const isEditMode = computed(() => !!props.agentId);
            const title$1 = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
            const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
            const isValid = computed(() => {
              return name.value.trim().length > 0 && systemPrompt.value.trim().length > 0 && selectedModel.value !== null;
            });
            const agentMergedCredentials = computed(() => {
              return {
                ...props.credentials,
                ...agentSelectedCredentials.value
              };
            });
            function loadAgent() {
              const customAgent = chatStore.currentEditingAgent;
              if (!customAgent) return;
              name.value = customAgent.name;
              description.value = customAgent.description ?? "";
              systemPrompt.value = customAgent.systemPrompt;
              selectedModel.value = chatStore.getAgent(customAgent) ?? null;
              if (customAgent.credentialId) agentSelectedCredentials.value[customAgent.provider] = customAgent.credentialId;
            }
            function resetForm() {
              name.value = "";
              description.value = "";
              systemPrompt.value = "";
              selectedModel.value = null;
              agentSelectedCredentials.value = {};
            }
            watch(() => uiStore.modalsById.agentEditor?.open, isOpen => {
              if (isOpen) if (props.agentId) loadAgent();else resetForm();
            });
            function onCredentialSelected(provider, credentialId) {
              agentSelectedCredentials.value = {
                ...agentSelectedCredentials.value,
                [provider]: credentialId
              };
            }
            function onModelChange(model) {
              selectedModel.value = model;
            }
            async function onSave() {
              if (!isValid.value || isSaving.value) return;
              isSaving.value = true;
              try {
                assert(selectedModel.value);
                const model = "model" in selectedModel.value ? selectedModel.value.model : void 0;
                assert(model);
                assert(model.provider !== "n8n" && model.provider !== "custom-agent");
                const credentialId = agentMergedCredentials.value[model.provider];
                assert(credentialId);
                const payload = {
                  name: name.value.trim(),
                  description: description.value.trim() || void 0,
                  systemPrompt: systemPrompt.value.trim(),
                  ...model,
                  credentialId
                };
                if (isEditMode.value && props.agentId) {
                  await chatStore.updateCustomAgent(props.agentId, payload, props.credentials);
                  toast.showMessage({
                    title: i18n.baseText("chatHub.agent.editor.success.update"),
                    type: "success"
                  });
                } else {
                  emit("createCustomAgent", await chatStore.createCustomAgent(payload, props.credentials));
                  toast.showMessage({
                    title: i18n.baseText("chatHub.agent.editor.success.create"),
                    type: "success"
                  });
                }
                modalBus.value.emit("close");
              } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "";
                toast.showError(error, i18n.baseText("chatHub.agent.editor.error.save"), errorMessage);
              } finally {
                isSaving.value = false;
              }
            }
            async function onDelete() {
              if (!isEditMode.value || !props.agentId || isDeleting.value) return;
              if ((await message.confirm(i18n.baseText("chatHub.agent.editor.delete.confirm.message"), i18n.baseText("chatHub.agent.editor.delete.confirm.title"), {
                confirmButtonText: i18n.baseText("chatHub.agent.editor.delete.confirm.button"),
                cancelButtonText: i18n.baseText("chatHub.agent.editor.delete.cancel.button"),
                type: "warning"
              })) !== "confirm") return;
              isDeleting.value = true;
              try {
                await chatStore.deleteCustomAgent(props.agentId, props.credentials);
                toast.showMessage({
                  title: i18n.baseText("chatHub.agent.editor.success.delete"),
                  type: "success"
                });
                emit("close");
                modalBus.value.emit("close");
              } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "";
                toast.showError(error, i18n.baseText("chatHub.agent.editor.error.delete"), errorMessage);
              } finally {
                isDeleting.value = false;
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: "agentEditor",
                "event-bus": modalBus.value,
                width: "600px",
                center: true,
                "max-width": "90%",
                "min-height": "400px"
              }, {
                header: withCtx(() => [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  size: "large"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(title$1.value), 1)]),
                  _: 1
                })]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-name",
                  label: unref(i18n).baseText("chatHub.agent.editor.name.label"),
                  required: true
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "agent-name",
                    modelValue: name.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => name.value = $event),
                    placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
                    maxlength: 128,
                    class: normalizeClass(_ctx.$style.input)
                  }, null, 8, ["modelValue", "placeholder", "class"])]),
                  _: 1
                }, 8, ["label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-description",
                  label: unref(i18n).baseText("chatHub.agent.editor.description.label")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "agent-description",
                    modelValue: description.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => description.value = $event),
                    type: "textarea",
                    placeholder: unref(i18n).baseText("chatHub.agent.editor.description.placeholder"),
                    maxlength: 512,
                    rows: 3,
                    class: normalizeClass(_ctx.$style.input)
                  }, null, 8, ["modelValue", "placeholder", "class"])]),
                  _: 1
                }, 8, ["label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-system-prompt",
                  label: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.label"),
                  required: true
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "agent-system-prompt",
                    modelValue: systemPrompt.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => systemPrompt.value = $event),
                    type: "textarea",
                    placeholder: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.placeholder"),
                    rows: 6,
                    class: normalizeClass(_ctx.$style.input)
                  }, null, 8, ["modelValue", "placeholder", "class"])]),
                  _: 1
                }, 8, ["label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-model",
                  label: unref(i18n).baseText("chatHub.agent.editor.model.label"),
                  required: true
                }, {
                  default: withCtx(() => [createVNode(ModelSelector_default, {
                    selectedAgent: selectedModel.value,
                    "include-custom-agents": false,
                    credentials: agentMergedCredentials.value,
                    onChange: onModelChange,
                    onSelectCredential: onCredentialSelected
                  }, null, 8, ["selectedAgent", "credentials"])]),
                  _: 1
                }, 8, ["label"])], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerRight)
                }, [isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  type: "secondary",
                  icon: "trash-2",
                  disabled: isDeleting.value,
                  loading: isDeleting.value,
                  onClick: onDelete
                }, null, 8, ["disabled", "loading"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: !isValid.value || isSaving.value,
                  onClick: onSave
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)], 2)]),
                _: 1
              }, 8, ["event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_9wlob_123";
        input = "_input_9wlob_130";
        footer = "_footer_9wlob_134";
        footerRight = "_footerRight_9wlob_141";
        AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
          content,
          input,
          footer,
          footerRight
        }; //#endregion
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue
        cssModules = {
          "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", AgentEditorModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
        //#region src/features/ai/chatHub/chat.types.ts
        credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
      }
    };
  });
})();