;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./constants-legacy-D0ziSY9e.js", "./constants-legacy-BrIb7Ao9.js", "./useChatHubSidebarState-legacy-DEvuSMoc.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, defineComponent, createBlock, onMounted, normalizeClass, renderSlot, openBlock, useMediaQuery, useLocalStorage, N8nIconButton_default, __plugin_vue_export_helper_default, useCredentialsStore, nullType, recordType, PROVIDER_CREDENTIAL_TYPE_MAP, chatHubProviderSchema, stringType, LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, MOBILE_MEDIA_QUERY, useChatHubSidebarState, __vite_style__, credentialsMapSchema, ChatLayout_vue_vue_type_script_setup_true_lang_default, component, isMobileDevice, ChatLayout_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatLayout_default, ChatSidebarOpener_vue_vue_type_script_setup_true_lang_default, ChatSidebarOpener_default;
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
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useMediaQuery = _MapCacheLegacy005Js.M;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Et;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
      }, function (_constantsLegacy00NJs) {
        nullType = _constantsLegacy00NJs.Gr;
        recordType = _constantsLegacy00NJs.Kr;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00NJs.cr;
        chatHubProviderSchema = _constantsLegacy00NJs.dr;
        stringType = _constantsLegacy00NJs.qr;
        LOCAL_STORAGE_CHAT_HUB_CREDENTIALS = _constantsLegacy00NJs.us;
      }, function (_constantsLegacy03fJs) {
        MOBILE_MEDIA_QUERY = _constantsLegacy03fJs.o;
      }, function (_useChatHubSidebarStateLegacy04TJs) {
        useChatHubSidebarState = _useChatHubSidebarStateLegacy04TJs.t;
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