;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./constants-legacy-CDt9VJ1s.js", "./chat.store-legacy-xVTW4QR1.js", "./useChatHubSidebarState-legacy-giKHkTt5.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, defineComponent, createBlock, onMounted, renderSlot, openBlock, normalizeClass, useEventListener, useMediaQuery, useLocalStorage, N8nIconButton_default, useDeviceSupport, __plugin_vue_export_helper_default, useRouter, useSettingsStore, useCredentialsStore, useUIStore, stringType, nullType, PROVIDER_CREDENTIAL_TYPE_MAP, chatHubProviderSchema, LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, recordType, CHAT_VIEW, MOBILE_MEDIA_QUERY, isLlmProvider, useChatHubSidebarState, __vite_style__, credentialsMapSchema, ChatLayout_vue_vue_type_script_setup_true_lang_default, component, isMobileDevice, ChatLayout_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatLayout_default, ChatSidebarOpener_vue_vue_type_script_setup_true_lang_default, ChatSidebarOpener_default;
    //#endregion
    //#region src/features/ai/chatHub/composables/useChatCredentials.ts
    /**
    * Composable for managing chat credentials including auto-selection and user selection.
    */
    function useChatCredentials(userId) {
      const isInitialized = ref(false);
      const credentialsStore = useCredentialsStore();
      const settingsStore = useSettingsStore();
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
      const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
      const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map(provider => {
        if (!isLlmProvider(provider)) return [provider, null];
        const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
        if (!credentialType) return [provider, null];
        const availableCredentials = credentialsStore.getCredentialsByType(credentialType);
        const settings = settingsStore.moduleSettings?.["chat-hub"]?.providers[provider];
        if (settings && settings.credentialId && availableCredentials.some(c => c.id === settings.credentialId)) return [provider, settings.credentialId];
        return [provider, availableCredentials.toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
      })));
      const credentialsByProvider = computed(() => isCredentialsReady.value ? {
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
    //#region src/features/ai/chatHub/components/ChatLayout.vue?vue&type=script&setup=true&lang.ts
    _export("r", useChatCredentials);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
      }, function (_MapCacheLegacy005Js) {
        useEventListener = _MapCacheLegacy005Js.D;
        useMediaQuery = _MapCacheLegacy005Js.M;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Et;
        useDeviceSupport = _srcLegacy007Js.it;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useCredentialsStore = _useTelemetryLegacy00HJs.Bt;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
      }, function (_constantsLegacy00RJs) {
        stringType = _constantsLegacy00RJs.Ao;
        nullType = _constantsLegacy00RJs.Oo;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00RJs.Zr;
        chatHubProviderSchema = _constantsLegacy00RJs.ei;
        LOCAL_STORAGE_CHAT_HUB_CREDENTIALS = _constantsLegacy00RJs.hs;
        recordType = _constantsLegacy00RJs.ko;
      }, function (_constantsLegacy03jJs) {
        CHAT_VIEW = _constantsLegacy03jJs.l;
        MOBILE_MEDIA_QUERY = _constantsLegacy03jJs.u;
      }, function (_chatStoreLegacy03lJs) {
        isLlmProvider = _chatStoreLegacy03lJs.c;
      }, function (_useChatHubSidebarStateLegacy053Js) {
        useChatHubSidebarState = _useChatHubSidebarStateLegacy053Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_gldft_123 {\n  margin: var(--spacing--4xs);\n  width: 100%;\n  background-color: var(--color--background--light-2);\n  border: var(--border);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n._component_gldft_123._isMobileDevice_gldft_134 {\n  margin: 0;\n  border: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/chat.types.ts
        credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
        ChatLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatLayout",
          setup(__props) {
            const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
            const router = useRouter();
            const uiStore = useUIStore();
            const {
              isCtrlKeyPressed
            } = useDeviceSupport();
            useEventListener(document, "keydown", event => {
              if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
                event.preventDefault();
                event.stopPropagation();
                router.push({
                  name: CHAT_VIEW,
                  force: true
                });
              }
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, {
                  [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1)
                }])
              }, [renderSlot(_ctx.$slots, "default")], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatLayout.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_gldft_123";
        isMobileDevice = "_isMobileDevice_gldft_134";
        ChatLayout_vue_vue_type_style_index_0_lang_module_default = {
          component,
          isMobileDevice
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatLayout.vue
        cssModules = {
          "$style": ChatLayout_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", ChatLayout_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarOpener.vue?vue&type=script&setup=true&lang.ts
        ChatSidebarOpener_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatSidebarOpener",
          setup(__props) {
            const sidebar = useChatHubSidebarState();
            return (_ctx, _cache) => {
              return !unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                type: "secondary",
                icon: unref(sidebar).canBeStatic.value ? "panel-left" : "menu",
                text: "",
                "icon-size": "large",
                onClick: _cache[0] || (_cache[0] = $event => unref(sidebar).toggleStatic(true))
              }, null, 8, ["icon"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatSidebarOpener.vue
        _export("t", ChatSidebarOpener_default = ChatSidebarOpener_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();