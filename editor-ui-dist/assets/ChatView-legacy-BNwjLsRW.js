;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./retry-legacy-CkXCWkMV.js", "./useClipboard-legacy-DdtOZJuB.js", "./Modal-legacy-QjB-Eju3.js", "./CredentialIcon-legacy-73ltKnan.js", "./constants-legacy-D22nGw-a.js", "./useChatHubSidebarState-legacy-DoVQwr5b.js", "./useChatCredentials-legacy-24-vajya.js", "./VueMarkdown-legacy-DWTbT_8e.js", "./useAgent-legacy-157ygI6k.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, nextTick, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, useTemplateRef, onBeforeMount, createBaseVNode, normalizeStyle, useSpeechRecognition, useSpeechSynthesis, useMediaQuery, useScroll, useI18n, useLocalStorage, N8nInput_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nIconButton_default, N8nScrollArea_default, N8nLink_default, N8nTooltip_default, require_markdown_it_link_attributes, N8nIcon_default, __vitePreload, __plugin_vue_export_helper_default, useRouter, useRoute, v4_default, useUIStore, useDocumentTitle, useUsersStore, useToast, LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, PROVIDER_CREDENTIAL_TYPE_MAP, chatHubConversationModelSchema, VIEWS, useClipboard, MOBILE_MEDIA_QUERY, CHAT_VIEW, CHAT_CONVERSATION_VIEW, providerDisplayNames, findOneFromModelsResponse, unflattenModel, ChatAgentAvatar_default, useChatStore, useChatHubSidebarState, AgentEditorModal_default, ModelSelector_default, useChatCredentials, VueMarkdown_default, useAgent, __vite_style__, ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, component$1, menuButton, grow, title, editAgent, ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$6, ChatConversationHeader_default, typing, blink, ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default, _sfc_main, cssModules$5, ChatTypingIndicator_default, hljsInstance, asyncImport, import_markdown_it_link_attributes, ChatMessageActions_vue_vue_type_script_setup_true_lang_default, actions$2, ChatMessageActions_vue_vue_type_style_index_0_lang_module_default, cssModules$4, ChatMessageActions_default, _hoisted_1, ChatMessage_vue_vue_type_script_setup_true_lang_default, message, avatar, compact, content, chatMessage, user, chatMessageMarkdown, actions$1, editContainer, textarea, editActions, typingIndicator, ChatMessage_vue_vue_type_style_index_0_lang_module_default, cssModules$3, ChatMessage_default, ChatPrompt_vue_vue_type_script_setup_true_lang_default, prompt$1, inputWrap, callout, input, actions, recording, chatHubPromptRecordingPulse, ChatPrompt_vue_vue_type_style_index_0_lang_module_default, cssModules$2, ChatPrompt_default, ChatStarter_vue_vue_type_script_setup_true_lang_default, starter$1, card, cardIcon, cardText, ChatStarter_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatStarter_default, ChatView_vue_vue_type_script_setup_true_lang_default, component, isMobileDevice, scrollArea, scrollable, isNewSession, header, starter, messageList, promptContainer, prompt, scrollToBottomButton, ChatView_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatView_default;
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(_ctx.$style.typing)
      }, _cache[0] || (_cache[0] = [createBaseVNode("i", null, null, -1), createBaseVNode("i", null, null, -1), createBaseVNode("i", null, null, -1)]), 2);
    }
    function useChatHubMarkdownOptions() {
      const forceReRenderKey = ref(0);
      const markdownOptions = {
        highlight(str, lang) {
          if (!lang) return "";
          const normalizedLang = lang.toLowerCase();
          if (hljsInstance?.getLanguage(normalizedLang)) try {
            return hljsInstance.highlight(str, {
              language: normalizedLang
            }).value;
          } catch {}
          loadLanguageModules();
          return "";
        }
      };
      async function loadLanguageModules() {
        if (asyncImport.status === "done") return;
        if (asyncImport.status === "inProgress") {
          await asyncImport.promise;
          forceReRenderKey.value++;
          return;
        }
        try {
          asyncImport = {
            status: "inProgress",
            promise: Promise.all([__vitePreload(() => _context.import("./es-legacy-8dRs2C3P.js"), true               ? void 0 : void 0), __vitePreload(() => _context.import("./languageModules-legacy-BaU1eOK3.js"), true               ? void 0 : void 0)])
          };
          const [hljs, languages] = await asyncImport.promise;
          asyncImport = {
            status: "done"
          };
          hljsInstance = hljs.default.newInstance();
          for (const [lang, module] of Object.entries(languages)) hljsInstance.registerLanguage(lang, module);
          forceReRenderKey.value++;
        } catch (error) {
          console.warn("Failed to load syntax highlighting modules", error);
        }
      }
      return {
        markdownOptions,
        forceReRenderKey
      };
    }

    //#endregion
    //#region src/features/ai/chatHub/components/ChatMessageActions.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
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
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        useSpeechRecognition = _MapCacheLegacy005Js.I;
        useSpeechSynthesis = _MapCacheLegacy005Js.L;
        useMediaQuery = _MapCacheLegacy005Js.M;
        useScroll = _MapCacheLegacy005Js.P;
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nScrollArea_default = _srcLegacy007Js.i;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        require_markdown_it_link_attributes = _srcLegacy007Js.yt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        v4_default = _useTelemetryLegacy00FJs.Io;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL = _constantsLegacy00NJs.Zo;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00NJs.cr;
        chatHubConversationModelSchema = _constantsLegacy00NJs.lr;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_retryLegacy01bJs) {}, function (_useClipboardLegacy01nJs) {
        useClipboard = _useClipboardLegacy01nJs.t;
      }, function (_ModalLegacy01JJs) {}, function (_CredentialIconLegacy02bJs) {}, function (_constantsLegacy039Js) {
        MOBILE_MEDIA_QUERY = _constantsLegacy039Js.a;
        CHAT_VIEW = _constantsLegacy039Js.i;
        CHAT_CONVERSATION_VIEW = _constantsLegacy039Js.n;
        providerDisplayNames = _constantsLegacy039Js.o;
      }, function (_useChatHubSidebarStateLegacy04FJs) {
        findOneFromModelsResponse = _useChatHubSidebarStateLegacy04FJs.a;
        unflattenModel = _useChatHubSidebarStateLegacy04FJs.f;
        ChatAgentAvatar_default = _useChatHubSidebarStateLegacy04FJs.n;
        useChatStore = _useChatHubSidebarStateLegacy04FJs.r;
        useChatHubSidebarState = _useChatHubSidebarStateLegacy04FJs.t;
      }, function (_useChatCredentialsLegacy04HJs) {
        AgentEditorModal_default = _useChatCredentialsLegacy04HJs.n;
        ModelSelector_default = _useChatCredentialsLegacy04HJs.r;
        useChatCredentials = _useChatCredentialsLegacy04HJs.t;
      }, function (_VueMarkdownLegacy04LJs) {
        VueMarkdown_default = _VueMarkdownLegacy04LJs.t;
      }, function (_useAgentLegacy04NJs) {
        useAgent = _useAgentLegacy04NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_1rkfw_123 {\n  padding-inline: var(--spacing--4xs);\n  height: 56px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n  border-bottom: var(--border);\n}\n._component_1rkfw_123:has(._menuButton_1rkfw_133) {\n  padding-inline: var(--spacing--xs);\n}\n._grow_1rkfw_137 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n}\n._title_1rkfw_144 {\n  margin-inline: var(--spacing--md);\n}\n._editAgent_1rkfw_148 {\n  margin-right: var(--spacing--3xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._typing_9qr9t_123 {\n  display: inline-flex;\n  gap: 6px;\n}\n._typing_9qr9t_123 i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.35;\n  animation: _blink_9qr9t_1 1.2s infinite;\n}\n._typing_9qr9t_123 i:nth-child(2) {\n  animation-delay: 0.2s;\n}\n._typing_9qr9t_123 i:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _blink_9qr9t_1 {\n0%, 80%, 100% {\n    opacity: 0.35;\n    transform: translateY(0);\n}\n40% {\n    opacity: 1;\n    transform: translateY(-2px);\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._actions_1sizk_123 {\n  display: flex;\n  align-items: center;\n}\n._actions_1sizk_123 g, ._actions_1sizk_123 path {\n  color: var(--color--text--tint-1);\n  stroke-width: 2.5;\n}\n.fade-enter-active[data-v-1a4933d7],\n.fade-leave-active[data-v-1a4933d7] {\n\ttransition: opacity 0.15s ease;\n}\n.fade-enter-from[data-v-1a4933d7],\n.fade-leave-to[data-v-1a4933d7] {\n\topacity: 0;\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._message_s7m4z_123 {\n  position: relative;\n  scroll-margin-block: var(--spacing--sm);\n}\n._avatar_s7m4z_128 {\n  position: absolute;\n  right: 100%;\n  margin-right: var(--spacing--xs);\n  top: 0;\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--color--background--light-3);\n  color: var(--color--text--tint-1);\n}\n._compact_s7m4z_141 ._avatar_s7m4z_128 {\n  position: static;\n  margin-bottom: var(--spacing--xs);\n}\n._content_s7m4z_146 {\n  display: flex;\n  flex-direction: column;\n}\n._chatMessage_s7m4z_151 {\n  display: block;\n  position: relative;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n._user_s7m4z_156 ._chatMessage_s7m4z_151 {\n  padding: var(--spacing--4xs) var(--spacing--md);\n  border-radius: var(--radius--xl);\n  background-color: var(--color--background);\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 {\n  display: block;\n  box-sizing: border-box;\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 > *:first-child {\n  margin-top: 0;\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 > *:last-child {\n  margin-bottom: 0;\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 * {\n  font-size: var(--font-size--md);\n  line-height: 1.8;\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 p {\n  margin: var(--spacing--xs) 0;\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 pre {\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre-wrap;\n  box-sizing: border-box;\n  padding: var(--chat--spacing);\n  background: var(--chat--message--pre--background);\n  border-radius: var(--chat--border-radius);\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 table {\n  width: 100%;\n  border-bottom: var(--border);\n  border-top: var(--border);\n  border-width: 2px;\n  margin-bottom: 1em;\n  border-color: var(--color--text--shade-1);\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 th,\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 td {\n  padding: 0.25em 1em 0.25em 0;\n}\n._chatMessage_s7m4z_151 > ._chatMessageMarkdown_s7m4z_161 th {\n  border-bottom: var(--border);\n  border-color: var(--color--text--shade-1);\n}\n._actions_s7m4z_205 {\n  margin-top: var(--spacing--2xs);\n}\n._editContainer_s7m4z_209 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n}\n._textarea_s7m4z_215 textarea {\n  font-family: inherit;\n  background-color: var(--color--background--light-3);\n  border-radius: var(--radius--lg);\n}\n._editActions_s7m4z_221 {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing--2xs);\n}\n._typingIndicator_s7m4z_227 {\n  margin-top: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._prompt_l0yq4_123 {\n  display: grid;\n  place-items: center;\n}\n._inputWrap_l0yq4_128 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n._callout_l0yq4_136 {\n  color: var(--color--secondary);\n  background-color: hsla(247, 49%, 53%, 0.1);\n  padding: 12px 16px 24px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  width: 100%;\n  border: var(--border);\n  border-color: var(--color--secondary);\n  text-align: center;\n  margin-bottom: -16px;\n}\n._callout_l0yq4_136 a {\n  text-decoration: underline;\n  color: inherit;\n}\n._input_l0yq4_128 textarea {\n  font: inherit;\n  line-height: 1.5em;\n  border-radius: 16px !important;\n  resize: none;\n  padding: 16px 16px 48px;\n  box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.062745098);\n  background-color: var(--color--background--light-3);\n}\n\n/* Right-side actions */\n._actions_l0yq4_164 {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: var(--spacing--sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._actions_l0yq4_164 button path {\n  stroke-width: 2.5;\n}\n._recording_l0yq4_177 {\n  animation: _chatHubPromptRecordingPulse_l0yq4_1 1.5s ease-in-out infinite;\n}\n@keyframes _chatHubPromptRecordingPulse_l0yq4_1 {\n0%, 100% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.6;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._starter_1julh_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing--2xl);\n}\n._card_1julh_131 {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--md);\n  border: 1px solid var(--color--foreground);\n  background: var(--color--background);\n  border-radius: var(--radius--lg);\n  text-align: left;\n  cursor: pointer;\n  transition: transform 0.06s ease, background 0.06s ease, border-color 0.06s ease;\n}\n._card_1julh_131:hover {\n  border-color: var(--color--primary);\n  background: rgba(124, 58, 237, 0.04);\n}\n._cardIcon_1julh_149 {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n._cardText_1julh_155 {\n  display: grid;\n  gap: 2px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_136cw_123 {\n  margin: var(--spacing--4xs);\n  width: 100%;\n  background-color: var(--color--background--light-2);\n  border: var(--border);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n._component_136cw_123._isMobileDevice_136cw_134 {\n  margin: 0;\n  border: none;\n}\n._scrollArea_136cw_139 {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n._scrollable_136cw_144 {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: start;\n  gap: var(--spacing--2xl);\n}\n._isNewSession_136cw_153 ._scrollable_136cw_144 {\n  justify-content: center;\n}\n._header_136cw_157 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n._isMobileDevice_136cw_134 ._starter_136cw_163 {\n  padding-top: 30px;\n  padding-bottom: 200px;\n}\n._messageList_136cw_168 {\n  width: 100%;\n  max-width: 55rem;\n  min-height: 100%;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n  padding-top: 30px;\n  padding-bottom: 200px;\n  padding-inline: 64px;\n}\n._isMobileDevice_136cw_134 ._messageList_136cw_168 {\n  padding-inline: var(--spacing--md);\n}\n._promptContainer_136cw_184 {\n  display: flex;\n  justify-content: center;\n}\n._isMobileDevice_136cw_134 ._promptContainer_136cw_184, ._component_136cw_123:not(._isNewSession_136cw_153) ._promptContainer_136cw_184 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-block: var(--spacing--md);\n  background: linear-gradient(transparent 0%, var(--color--background--light-2) 30%);\n}\n._prompt_136cw_184 {\n  width: 100%;\n  max-width: 55rem;\n  padding-inline: 64px;\n}\n._isMobileDevice_136cw_134 ._prompt_136cw_184 {\n  padding-inline: var(--spacing--md);\n}\n._scrollToBottomButton_136cw_206 {\n  position: absolute;\n  bottom: 100%;\n  left: auto;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/ChatConversationHeader.vue?vue&type=script&setup=true&lang.ts
        ChatConversationHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatConversationHeader",
          props: {
            selectedModel: {},
            credentials: {},
            readyToShowModelSelector: {
              type: Boolean
            }
          },
          emits: ["selectModel", "renameConversation", "editCustomAgent", "createCustomAgent", "selectCredential", "openWorkflow"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const emit = __emit;
            const sidebar = useChatHubSidebarState();
            const router = useRouter();
            const modelSelectorRef = useTemplateRef("modelSelectorRef");
            function onModelChange(selection) {
              emit("selectModel", selection);
            }
            function onNewChat() {
              sidebar.toggleOpen(false);
              router.push({
                name: CHAT_VIEW,
                force: true
              });
            }
            __expose({
              openModelSelector: () => modelSelectorRef.value?.open()
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.component)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.grow)
              }, [!unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.menuButton),
                type: "secondary",
                icon: "panel-left",
                text: "",
                "icon-size": "large",
                onClick: _cache[0] || (_cache[0] = $event => unref(sidebar).toggleOpen(true))
              }, null, 8, ["class"])) : createCommentVNode("", true), !unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.menuButton),
                type: "secondary",
                icon: "square-pen",
                text: "",
                "icon-size": "large",
                onClick: onNewChat
              }, null, 8, ["class"])) : createCommentVNode("", true), _ctx.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
                key: 2,
                ref_key: "modelSelectorRef",
                ref: modelSelectorRef,
                selectedAgent: _ctx.selectedModel,
                credentials: _ctx.credentials,
                onChange: onModelChange,
                onCreateCustomAgent: _cache[1] || (_cache[1] = $event => emit("createCustomAgent")),
                onSelectCredential: _cache[2] || (_cache[2] = (provider, credentialId) => emit("selectCredential", provider, credentialId))
              }, null, 8, ["selectedAgent", "credentials"])) : createCommentVNode("", true)], 2), _ctx.selectedModel?.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.editAgent),
                type: "secondary",
                size: "small",
                icon: "settings",
                label: "Edit Agent",
                onClick: _cache[3] || (_cache[3] = $event => emit("editCustomAgent", _ctx.selectedModel.model.agentId))
              }, null, 8, ["class"])) : createCommentVNode("", true), _ctx.selectedModel?.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.editAgent),
                type: "secondary",
                size: "small",
                icon: "settings",
                label: "Open Workflow",
                onClick: _cache[4] || (_cache[4] = $event => emit("openWorkflow", _ctx.selectedModel.model.workflowId))
              }, null, 8, ["class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatConversationHeader.vue?vue&type=style&index=0&lang.module.scss
        component$1 = "_component_1rkfw_123";
        menuButton = "_menuButton_1rkfw_133";
        grow = "_grow_1rkfw_137";
        title = "_title_1rkfw_144";
        editAgent = "_editAgent_1rkfw_148";
        ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default = {
          component: component$1,
          menuButton,
          grow,
          title,
          editAgent
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatConversationHeader.vue
        cssModules$6 = {
          "$style": ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default
        };
        ChatConversationHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
        typing = "_typing_9qr9t_123";
        blink = "_blink_9qr9t_1";
        ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
          typing,
          blink
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatTypingIndicator.vue
        _sfc_main = {};
        cssModules$5 = {
          "$style": ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default
        };
        ChatTypingIndicator_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules$5]]); //#endregion
        //#region src/features/ai/chatHub/composables/useChatHubMarkdownOptions.ts
        asyncImport = {
          status: "uninitialized"
        };
        import_markdown_it_link_attributes = /* @__PURE__ */__toESM(require_markdown_it_link_attributes());
        ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatMessageActions",
          props: {
            justCopied: {
              type: Boolean
            },
            message: {},
            alternatives: {},
            isSpeechSynthesisAvailable: {
              type: Boolean
            },
            isSpeaking: {
              type: Boolean
            }
          },
          emits: ["copy", "edit", "regenerate", "switchAlternative", "readAloud"],
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const router = useRouter();
            const emit = __emit;
            const copyTooltip = computed(() => {
              return __props.justCopied ? i18n.baseText("generic.copied") : i18n.baseText("generic.copy");
            });
            const currentAlternativeIndex = computed(() => {
              return __props.alternatives.findIndex(id => id === __props.message.id);
            });
            const executionUrl = computed(() => {
              if (__props.message.type === "ai" && __props.message.provider === "n8n" && __props.message.executionId) return router.resolve({
                name: VIEWS.EXECUTION_PREVIEW,
                params: {
                  name: __props.message.workflowId,
                  executionId: __props.message.executionId
                }
              }).href;
            });
            function handleCopy() {
              emit("copy");
            }
            function handleEdit() {
              emit("edit");
            }
            function handleRegenerate() {
              emit("regenerate");
            }
            function handleReadAloud() {
              emit("readAloud");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [createVNode(unref(N8nTooltip_default), {
                placement: "bottom",
                "show-after": 300
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(copyTooltip.value), 1)]),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: _ctx.justCopied ? "check" : "copy",
                  type: "tertiary",
                  size: "medium",
                  text: "",
                  onClick: handleCopy
                }, null, 8, ["icon"])]),
                _: 1
              }), _ctx.isSpeechSynthesisAvailable && _ctx.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                placement: "bottom",
                "show-after": 300
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(_ctx.isSpeaking ? "Stop reading" : "Read aloud"), 1)]),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: _ctx.isSpeaking ? "volume-x" : "volume-2",
                  type: "tertiary",
                  size: "medium",
                  text: "",
                  onClick: handleReadAloud
                }, null, 8, ["icon"])]),
                _: 1
              })) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), {
                placement: "bottom",
                "show-after": 300
              }, {
                content: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode("Edit")])),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: "pen",
                  type: "tertiary",
                  size: "medium",
                  text: "",
                  onClick: handleEdit
                })]),
                _: 1
              }), _ctx.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                placement: "bottom",
                "show-after": 300
              }, {
                content: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("Regenerate")])),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: "refresh-cw",
                  type: "tertiary",
                  size: "medium",
                  text: "",
                  onClick: handleRegenerate
                })]),
                _: 1
              })) : createCommentVNode("", true), executionUrl.value && _ctx.message.executionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 2,
                placement: "bottom",
                "show-after": 300
              }, {
                content: withCtx(() => [_cache[4] || (_cache[4] = createTextVNode(" Execution ID: ")), createVNode(unref(N8nLink_default), {
                  to: executionUrl.value,
                  "new-window": true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.message.executionId), 1)]),
                  _: 1
                }, 8, ["to"])]),
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  icon: "info",
                  type: "tertiary",
                  size: "medium",
                  text: ""
                })]),
                _: 1
              })) : createCommentVNode("", true), _ctx.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, {
                key: 3
              }, [createVNode(unref(N8nIconButton_default), {
                icon: "chevron-left",
                type: "tertiary",
                size: "medium",
                text: "",
                disabled: currentAlternativeIndex.value === 0,
                onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit("switchAlternative", _ctx.alternatives[currentAlternativeIndex.value - 1]))
              }, null, 8, ["disabled"]), createVNode(unref(N8nText_default), {
                size: "medium",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(`${currentAlternativeIndex.value + 1}/${_ctx.alternatives.length}`), 1)]),
                _: 1
              }), createVNode(unref(N8nIconButton_default), {
                icon: "chevron-right",
                type: "tertiary",
                size: "medium",
                text: "",
                disabled: currentAlternativeIndex.value === _ctx.alternatives.length - 1,
                onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit("switchAlternative", _ctx.alternatives[currentAlternativeIndex.value + 1]))
              }, null, 8, ["disabled"])], 64)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatMessageActions.vue?vue&type=style&index=0&lang.module.scss
        actions$2 = "_actions_1sizk_123";
        ChatMessageActions_vue_vue_type_style_index_0_lang_module_default = {
          actions: actions$2
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatMessageActions.vue
        cssModules$4 = {
          "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default
        };
        ChatMessageActions_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4], ["__scopeId", "data-v-1a4933d7"]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["data-message-id"];
        ChatMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatMessage",
          props: {
            message: {},
            compact: {
              type: Boolean
            },
            isEditing: {
              type: Boolean
            },
            isStreaming: {
              type: Boolean
            },
            minHeight: {}
          },
          emits: ["startEdit", "cancelEdit", "update", "regenerate", "switchAlternative"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const clipboard = useClipboard();
            const editedText = ref("");
            const textareaRef = useTemplateRef("textarea");
            const justCopied = ref(false);
            const {
              markdownOptions,
              forceReRenderKey
            } = useChatHubMarkdownOptions();
            const speech = useSpeechSynthesis(computed(() => __props.message.content), {
              pitch: 1,
              rate: 1,
              volume: 1
            });
            const agent = useAgent(computed(() => unflattenModel(__props.message)));
            async function handleCopy() {
              const text = __props.message.content;
              await clipboard.copy(text);
              justCopied.value = true;
              setTimeout(() => {
                justCopied.value = false;
              }, 1e3);
            }
            function handleEdit() {
              emit("startEdit");
            }
            function handleCancelEdit() {
              emit("cancelEdit");
            }
            function handleConfirmEdit() {
              if (!editedText.value.trim()) return;
              emit("update", {
                ...__props.message,
                content: editedText.value
              });
            }
            function handleRegenerate() {
              emit("regenerate", __props.message);
            }
            function handleReadAloud() {
              if (speech.isSupported.value) if (speech.isPlaying.value) speech.stop();else speech.speak();
            }
            function handleSwitchAlternative(messageId) {
              emit("switchAlternative", messageId);
            }
            const linksNewTabPlugin = vueMarkdownItInstance => {
              vueMarkdownItInstance.use(import_markdown_it_link_attributes.default, {
                attrs: {
                  target: "_blank",
                  rel: "noopener"
                }
              });
            };
            watch(() => __props.isEditing, async editing => {
              if (editing) {
                editedText.value = __props.message.content;
                await nextTick();
                textareaRef.value?.focus();
              } else editedText.value = "";
            }, {
              immediate: true
            });
            onBeforeMount(() => {
              speech.stop();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.message, _ctx.message.type === "human" ? _ctx.$style.user : _ctx.$style.assistant, {
                  [_ctx.$style.compact]: _ctx.compact
                }]),
                style: normalizeStyle(_ctx.minHeight ? {
                  minHeight: `${_ctx.minHeight}px`
                } : void 0),
                "data-message-id": _ctx.message.id
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.avatar)
              }, [_ctx.message.type === "human" ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                icon: "user",
                width: "20",
                height: "20"
              })) : unref(agent) ? (openBlock(), createBlock(ChatAgentAvatar_default, {
                key: 1,
                agent: unref(agent),
                size: "md",
                tooltip: ""
              }, null, 8, ["agent"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 2,
                icon: "sparkles",
                width: "20",
                height: "20"
              }))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [_ctx.isEditing ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.editContainer)
              }, [createVNode(unref(N8nInput_default), {
                ref: "textarea",
                modelValue: editedText.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editedText.value = $event),
                type: "textarea",
                autosize: {
                  minRows: 3,
                  maxRows: 20
                },
                class: normalizeClass(_ctx.$style.textarea)
              }, null, 8, ["modelValue", "class"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.editActions)
              }, [createVNode(unref(N8nButton_default), {
                type: "secondary",
                size: "small",
                onClick: handleCancelEdit
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode(" Cancel ")])),
                _: 1
              }), createVNode(unref(N8nButton_default), {
                type: "primary",
                size: "small",
                disabled: !editedText.value.trim(),
                onClick: handleConfirmEdit
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode(" Send ")])),
                _: 1
              }, 8, ["disabled"])], 2)], 2)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.chatMessage)
              }, [(openBlock(), createBlock(unref(VueMarkdown_default), {
                key: unref(forceReRenderKey),
                class: normalizeClass([_ctx.$style.chatMessageMarkdown, "chat-message-markdown"]),
                source: _ctx.message.status === "error" && !_ctx.message.content ? "Error: Unknown error occurred" : _ctx.message.content,
                options: unref(markdownOptions),
                plugins: [linksNewTabPlugin]
              }, null, 8, ["class", "source", "options", "plugins"]))], 2), _ctx.isStreaming ? (openBlock(), createBlock(ChatTypingIndicator_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.typingIndicator)
              }, null, 8, ["class"])) : (openBlock(), createBlock(ChatMessageActions_default, {
                key: 1,
                "just-copied": justCopied.value,
                "is-speech-synthesis-available": unref(speech).isSupported.value,
                "is-speaking": unref(speech).isPlaying.value,
                class: normalizeClass(_ctx.$style.actions),
                message: _ctx.message,
                alternatives: _ctx.message.alternatives,
                onCopy: handleCopy,
                onEdit: handleEdit,
                onRegenerate: handleRegenerate,
                onReadAloud: handleReadAloud,
                onSwitchAlternative: handleSwitchAlternative
              }, null, 8, ["just-copied", "is-speech-synthesis-available", "is-speaking", "class", "message", "alternatives"]))], 64))], 2)], 14, _hoisted_1);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=style&index=0&lang.module.scss
        message = "_message_s7m4z_123";
        avatar = "_avatar_s7m4z_128";
        compact = "_compact_s7m4z_141";
        content = "_content_s7m4z_146";
        chatMessage = "_chatMessage_s7m4z_151";
        user = "_user_s7m4z_156";
        chatMessageMarkdown = "_chatMessageMarkdown_s7m4z_161";
        actions$1 = "_actions_s7m4z_205";
        editContainer = "_editContainer_s7m4z_209";
        textarea = "_textarea_s7m4z_215";
        editActions = "_editActions_s7m4z_221";
        typingIndicator = "_typingIndicator_s7m4z_227";
        ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
          message,
          avatar,
          compact,
          content,
          chatMessage,
          user,
          chatMessageMarkdown,
          actions: actions$1,
          editContainer,
          textarea,
          editActions,
          typingIndicator
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatMessage.vue
        cssModules$3 = {
          "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default
        };
        ChatMessage_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatPrompt.vue?vue&type=script&setup=true&lang.ts
        ChatPrompt_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatPrompt",
          props: {
            isResponding: {
              type: Boolean
            },
            isNewSession: {
              type: Boolean
            },
            selectedModel: {},
            isMissingCredentials: {
              type: Boolean
            }
          },
          emits: ["submit", "stop", "selectModel", "setCredentials"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const emit = __emit;
            const inputRef = useTemplateRef("inputRef");
            const message$1 = ref("");
            const toast = useToast();
            const speechInput = useSpeechRecognition({
              continuous: true,
              interimResults: true,
              lang: navigator.language
            });
            const placeholder = computed(() => __props.selectedModel ? `Message ${__props.selectedModel.name ?? "a model"}...` : "Select a model");
            const llmProvider = computed(() => __props.selectedModel?.model.provider === "n8n" || __props.selectedModel?.model.provider === "custom-agent" ? void 0 : __props.selectedModel?.model.provider);
            function onMic() {
              if (speechInput.isListening.value) speechInput.stop();else speechInput.start();
            }
            function onStop() {
              emit("stop");
            }
            function handleSubmitForm() {
              const trimmed = message$1.value.trim();
              if (trimmed) {
                speechInput.stop();
                emit("submit", trimmed);
              }
            }
            function handleKeydownTextarea(e) {
              const trimmed = message$1.value.trim();
              if (e.key === "Enter" && !e.shiftKey && !e.isComposing && trimmed) {
                e.preventDefault();
                speechInput.stop();
                emit("submit", trimmed);
              }
            }
            watch(speechInput.result, spoken => {
              if (spoken) message$1.value = spoken;
            });
            watch(speechInput.error, event => {
              if (event?.error === "not-allowed") {
                toast.showError(/* @__PURE__ */new Error("Microphone access denied"), "Please allow microphone access to use voice input");
                return;
              }
              if (event?.error === "no-speech") toast.showMessage({
                title: "No speech detected. Please try again",
                type: "warning"
              });
            });
            __expose({
              focus: () => inputRef.value?.focus(),
              setText: text => {
                message$1.value = text;
              }
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("form", {
                class: normalizeClass(_ctx.$style.prompt),
                onSubmit: withModifiers(handleSubmitForm, ["prevent"])
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.inputWrap)
              }, [!_ctx.selectedModel ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.callout)
              }, {
                default: withCtx(() => [_ctx.isNewSession ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [_cache[5] || (_cache[5] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[0] || (_cache[0] = withModifiers($event => emit("selectModel"), ["prevent"]))
                }, "select a model"), _cache[6] || (_cache[6] = createTextVNode(" to start a conversation "))], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [_cache[7] || (_cache[7] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[1] || (_cache[1] = withModifiers($event => emit("selectModel"), ["prevent"]))
                }, "reselect a model"), _cache[8] || (_cache[8] = createTextVNode(" to continue the conversation "))], 64))]),
                _: 1
              }, 8, ["class"])) : _ctx.isMissingCredentials && llmProvider.value ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.callout)
              }, {
                default: withCtx(() => [_ctx.isNewSession ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [_cache[9] || (_cache[9] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[2] || (_cache[2] = withModifiers($event => emit("setCredentials", llmProvider.value), ["prevent"]))
                }, " set credentials "), createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[llmProvider.value]) + " to start a conversation ", 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [_cache[10] || (_cache[10] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[3] || (_cache[3] = withModifiers($event => emit("setCredentials", llmProvider.value), ["prevent"]))
                }, " set credentials "), createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[llmProvider.value]) + " to continue the conversation ", 1)], 64))]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nInput_default), {
                ref_key: "inputRef",
                ref: inputRef,
                modelValue: message$1.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => message$1.value = $event),
                class: normalizeClass(_ctx.$style.input),
                type: "textarea",
                placeholder: placeholder.value,
                autocomplete: "off",
                autosize: {
                  minRows: 1,
                  maxRows: 6
                },
                autofocus: "",
                disabled: _ctx.isMissingCredentials || !_ctx.selectedModel,
                onKeydown: handleKeydownTextarea
              }, null, 8, ["modelValue", "class", "placeholder", "disabled"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                "native-type": "button",
                title: unref(speechInput).isListening.value ? "Stop recording" : "Voice input",
                type: "secondary",
                disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || _ctx.isResponding,
                icon: unref(speechInput).isListening.value ? "square" : "mic",
                class: normalizeClass({
                  [_ctx.$style.recording]: unref(speechInput).isListening.value
                }),
                "icon-size": "large",
                onClick: onMic
              }, null, 8, ["title", "disabled", "icon", "class"])) : createCommentVNode("", true), !_ctx.isResponding ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 1,
                "native-type": "submit",
                disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || !message$1.value.trim(),
                title: "Send",
                icon: "arrow-up",
                "icon-size": "large"
              }, null, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 2,
                "native-type": "button",
                title: "Stop generating",
                icon: "square",
                "icon-size": "large",
                onClick: onStop
              }))], 2)], 2)], 34);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatPrompt.vue?vue&type=style&index=0&lang.module.scss
        prompt$1 = "_prompt_l0yq4_123";
        inputWrap = "_inputWrap_l0yq4_128";
        callout = "_callout_l0yq4_136";
        input = "_input_l0yq4_128";
        actions = "_actions_l0yq4_164";
        recording = "_recording_l0yq4_177";
        chatHubPromptRecordingPulse = "_chatHubPromptRecordingPulse_l0yq4_1";
        ChatPrompt_vue_vue_type_style_index_0_lang_module_default = {
          prompt: prompt$1,
          inputWrap,
          callout,
          input,
          actions,
          recording,
          chatHubPromptRecordingPulse
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatPrompt.vue
        cssModules$2 = {
          "$style": ChatPrompt_vue_vue_type_style_index_0_lang_module_default
        };
        ChatPrompt_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatPrompt_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatStarter.vue?vue&type=script&setup=true&lang.ts
        ChatStarter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatStarter",
          props: {
            isMobileDevice: {
              type: Boolean
            }
          },
          setup(__props) {
            const userStore = useUsersStore();
            const greetings = computed(() => `Hello, ${userStore.currentUser?.firstName ?? userStore.currentUser?.fullName ?? "User"}!`);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.starter, {
                  [_ctx.$style.isMobileDevice]: _ctx.isMobileDevice
                }])
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                bold: "",
                size: "xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(greetings.value), 1)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatStarter.vue?vue&type=style&index=0&lang.module.scss
        starter$1 = "_starter_1julh_123";
        card = "_card_1julh_131";
        cardIcon = "_cardIcon_1julh_149";
        cardText = "_cardText_1julh_155";
        ChatStarter_vue_vue_type_style_index_0_lang_module_default = {
          starter: starter$1,
          card,
          cardIcon,
          cardText
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatStarter.vue
        cssModules$1 = {
          "$style": ChatStarter_vue_vue_type_style_index_0_lang_module_default
        };
        ChatStarter_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatStarter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/chatHub/ChatView.vue?vue&type=script&setup=true&lang.ts
        ChatView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatView",
          setup(__props) {
            const router = useRouter();
            const route = useRoute();
            const usersStore = useUsersStore();
            const chatStore = useChatStore();
            const toast = useToast();
            const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
            const documentTitle = useDocumentTitle();
            const uiStore = useUIStore();
            const headerRef = useTemplateRef("headerRef");
            const inputRef = useTemplateRef("inputRef");
            const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
            const isResponding = computed(() => chatStore.isResponding(sessionId.value));
            const isNewSession$1 = computed(() => sessionId.value !== route.params.id);
            const scrollableRef = useTemplateRef("scrollable");
            const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
            const currentConversation = computed(() => sessionId.value ? chatStore.sessions.find(session => session.id === sessionId.value) : void 0);
            const currentConversationTitle = computed(() => currentConversation.value?.title);
            const readyToShowMessages = computed(() => chatStore.agentsReady);
            const {
              arrivedState,
              measure
            } = useScroll(scrollContainerRef, {
              throttle: 100,
              offset: {
                bottom: 100
              }
            });
            const defaultModel = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL(usersStore.currentUserId ?? "anonymous"), null, {
              writeDefaults: false,
              shallow: true,
              serializer: {
                read: value => {
                  try {
                    return chatHubConversationModelSchema.parse(JSON.parse(value));
                  } catch (error) {
                    return null;
                  }
                },
                write: value => JSON.stringify(value)
              }
            });
            const modelFromQuery = computed(() => {
              const agentId = route.query.agentId;
              const workflowId = route.query.workflowId;
              if (!isNewSession$1.value) return null;
              if (typeof agentId === "string") return chatStore.getAgent({
                provider: "custom-agent",
                agentId
              }) ?? null;
              if (typeof workflowId === "string") return chatStore.getAgent({
                provider: "n8n",
                workflowId
              }) ?? null;
              return null;
            });
            const selectedModel = computed(() => {
              if (!chatStore.agentsReady) return;
              if (modelFromQuery.value) return modelFromQuery.value;
              if (currentConversation.value?.provider) {
                const model = unflattenModel(currentConversation.value);
                return model ? chatStore.getAgent(model) : void 0;
              }
              if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.getAgent(chatStore.streaming.model);
              return defaultModel.value ? chatStore.getAgent(defaultModel.value) : void 0;
            });
            const {
              credentialsByProvider,
              selectCredential
            } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
            const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
            const credentialsForSelectedProvider = computed(() => {
              const provider = selectedModel.value?.model.provider;
              if (!provider) return null;
              if (provider === "custom-agent" || provider === "n8n") return {};
              const credentialsId = credentialsByProvider.value?.[provider];
              if (!credentialsId) return null;
              return {
                [PROVIDER_CREDENTIAL_TYPE_MAP[provider]]: {
                  id: credentialsId,
                  name: ""
                }
              };
            });
            const isMissingSelectedCredential = computed(() => !credentialsForSelectedProvider.value);
            const editingMessageId = ref();
            const didSubmitInCurrentSession = ref(false);
            const editingAgentId = ref(void 0);
            function scrollToBottom(smooth) {
              scrollContainerRef.value?.scrollTo({
                top: scrollableRef.value?.scrollHeight,
                behavior: smooth ? "smooth" : "instant"
              });
            }
            function scrollToMessage(messageId) {
              scrollableRef.value?.querySelector(`[data-message-id="${messageId}"]`)?.scrollIntoView({
                behavior: "smooth"
              });
            }
            watch([readyToShowMessages, () => chatMessages.value[chatMessages.value.length - 1]?.id], ([ready, lastMessageId]) => {
              if (!ready || !lastMessageId) return;
              nextTick(measure);
              if (chatStore.streaming?.sessionId === sessionId.value) {
                scrollToMessage(chatStore.streaming.promptId);
                return;
              }
              scrollToBottom(false);
            }, {
              immediate: true,
              flush: "post"
            });
            watch(() => chatStore.agents, models => {
              if (!models || !!selectedModel.value || !isNewSession$1.value) return;
              const model = findOneFromModelsResponse(models) ?? null;
              if (model) handleSelectModel(model);
            }, {
              immediate: true
            });
            watch([sessionId, isNewSession$1], async ([id, isNew]) => {
              didSubmitInCurrentSession.value = false;
              if (!isNew && !chatStore.getConversation(id)) try {
                await chatStore.fetchMessages(id);
              } catch (error) {
                toast.showError(error, "Error fetching a conversation");
                await router.push({
                  name: CHAT_VIEW
                });
              }
            }, {
              immediate: true
            });
            watch([inputRef, sessionId], ([input$1]) => {
              input$1?.focus();
            }, {
              immediate: true
            });
            watch(currentConversationTitle, title$1 => {
              documentTitle.set(title$1 ?? "Chat");
            }, {
              immediate: true
            });
            watch(credentialsByProvider, credentials => {
              if (credentials) chatStore.fetchAgents(credentials);
            }, {
              immediate: true
            });
            function onSubmit(message$1) {
              if (!message$1.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
              didSubmitInCurrentSession.value = true;
              chatStore.sendMessage(sessionId.value, message$1, selectedModel.value.model, credentialsForSelectedProvider.value);
              inputRef.value?.setText("");
              if (isNewSession$1.value) router.push({
                name: CHAT_CONVERSATION_VIEW,
                params: {
                  id: sessionId.value
                }
              });
            }
            async function onStop() {
              await chatStore.stopStreamingMessage(sessionId.value);
            }
            function handleStartEditMessage(messageId) {
              editingMessageId.value = messageId;
            }
            function handleCancelEditMessage() {
              editingMessageId.value = void 0;
            }
            function handleEditMessage(message$1) {
              if (isResponding.value || !["human", "ai"].includes(message$1.type) || !selectedModel.value || !credentialsForSelectedProvider.value) return;
              const messageToEdit = message$1.revisionOfMessageId ?? message$1.id;
              chatStore.editMessage(sessionId.value, messageToEdit, message$1.content, selectedModel.value.model, credentialsForSelectedProvider.value);
              editingMessageId.value = void 0;
            }
            function handleRegenerateMessage(message$1) {
              if (isResponding.value || message$1.type !== "ai" || !selectedModel.value || !credentialsForSelectedProvider.value) return;
              const messageToRetry = message$1.retryOfMessageId ?? message$1.id;
              chatStore.regenerateMessage(sessionId.value, messageToRetry, selectedModel.value.model, credentialsForSelectedProvider.value);
            }
            async function handleSelectModel(selection) {
              if (currentConversation.value) try {
                await chatStore.updateSessionModel(sessionId.value, selection.model);
              } catch (error) {
                toast.showError(error, "Could not update selected model");
              } else defaultModel.value = selection.model;
            }
            function handleSwitchAlternative(messageId) {
              chatStore.switchAlternative(sessionId.value, messageId);
            }
            function handleConfigureCredentials(_provider) {}
            function handleConfigureModel() {
              headerRef.value?.openModelSelector();
            }
            async function handleEditAgent(agentId) {
              try {
                await chatStore.fetchCustomAgent(agentId);
                editingAgentId.value = agentId;
                uiStore.openModal("agentEditor");
              } catch (error) {
                toast.showError(error, "Failed to load agent");
              }
            }
            function openNewAgentCreator() {
              chatStore.currentEditingAgent = null;
              editingAgentId.value = void 0;
              uiStore.openModal("agentEditor");
            }
            function closeAgentEditor() {
              editingAgentId.value = void 0;
            }
            function handleOpenWorkflow(workflowId) {
              const routeData = router.resolve({
                name: VIEWS.WORKFLOW,
                params: {
                  name: workflowId
                }
              });
              window.open(routeData.href, "_blank");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, {
                  [_ctx.$style.isNewSession]: isNewSession$1.value,
                  [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1)
                }])
              }, [createVNode(ChatConversationHeader_default, {
                ref_key: "headerRef",
                ref: headerRef,
                "selected-model": selectedModel.value ?? null,
                credentials: unref(credentialsByProvider),
                "ready-to-show-model-selector": unref(chatStore).agentsReady,
                onSelectModel: handleSelectModel,
                onEditCustomAgent: handleEditAgent,
                onCreateCustomAgent: openNewAgentCreator,
                onSelectCredential: unref(selectCredential),
                onOpenWorkflow: handleOpenWorkflow
              }, null, 8, ["selected-model", "credentials", "ready-to-show-model-selector", "onSelectCredential"]), unref(credentialsByProvider) ? (openBlock(), createBlock(AgentEditorModal_default, {
                key: 0,
                "agent-id": editingAgentId.value,
                credentials: unref(credentialsByProvider),
                onCreateCustomAgent: handleSelectModel,
                onClose: closeAgentEditor
              }, null, 8, ["agent-id", "credentials"])) : createCommentVNode("", true), readyToShowMessages.value ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
                key: 1,
                type: "scroll",
                "enable-vertical-scroll": true,
                "enable-horizontal-scroll": false,
                "as-child": "",
                class: normalizeClass(_ctx.$style.scrollArea)
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.scrollable),
                  ref: "scrollable"
                }, [isNewSession$1.value ? (openBlock(), createBlock(ChatStarter_default, {
                  key: 0,
                  class: normalizeClass(_ctx.$style.starter),
                  "is-mobile-device": unref(isMobileDevice$1)
                }, null, 8, ["class", "is-mobile-device"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  role: "log",
                  "aria-live": "polite",
                  class: normalizeClass(_ctx.$style.messageList)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(chatMessages.value, (message$1, index) => {
                  return openBlock(), createBlock(ChatMessage_default, {
                    key: message$1.id,
                    message: message$1,
                    compact: unref(isMobileDevice$1),
                    "is-editing": editingMessageId.value === message$1.id,
                    "is-streaming": message$1.status === "running",
                    "min-height": didSubmitInCurrentSession.value && message$1.type === "ai" && index === chatMessages.value.length - 1 && scrollContainerRef.value ? scrollContainerRef.value.offsetHeight - 30 - 200 : void 0,
                    onStartEdit: $event => handleStartEditMessage(message$1.id),
                    onCancelEdit: handleCancelEditMessage,
                    onRegenerate: handleRegenerateMessage,
                    onUpdate: handleEditMessage,
                    onSwitchAlternative: handleSwitchAlternative
                  }, null, 8, ["message", "compact", "is-editing", "is-streaming", "min-height", "onStartEdit"]);
                }), 128))], 2)), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.promptContainer)
                }, [!unref(arrivedState).bottom && !isNewSession$1.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                  key: 0,
                  type: "secondary",
                  icon: "arrow-down",
                  class: normalizeClass(_ctx.$style.scrollToBottomButton),
                  title: "Scroll to bottom",
                  onClick: _cache[0] || (_cache[0] = $event => scrollToBottom(true))
                }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(ChatPrompt_default, {
                  ref_key: "inputRef",
                  ref: inputRef,
                  class: normalizeClass(_ctx.$style.prompt),
                  "is-responding": isResponding.value,
                  "selected-model": selectedModel.value ?? null,
                  "is-missing-credentials": isMissingSelectedCredential.value,
                  "is-new-session": isNewSession$1.value,
                  onSubmit,
                  onStop,
                  onSelectModel: handleConfigureModel,
                  onSetCredentials: handleConfigureCredentials
                }, null, 8, ["class", "is-responding", "selected-model", "is-missing-credentials", "is-new-session"])], 2)], 2)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/ChatView.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_136cw_123";
        isMobileDevice = "_isMobileDevice_136cw_134";
        scrollArea = "_scrollArea_136cw_139";
        scrollable = "_scrollable_136cw_144";
        isNewSession = "_isNewSession_136cw_153";
        header = "_header_136cw_157";
        starter = "_starter_136cw_163";
        messageList = "_messageList_136cw_168";
        promptContainer = "_promptContainer_136cw_184";
        prompt = "_prompt_136cw_184";
        scrollToBottomButton = "_scrollToBottomButton_136cw_206";
        ChatView_vue_vue_type_style_index_0_lang_module_default = {
          component,
          isMobileDevice,
          scrollArea,
          scrollable,
          isNewSession,
          header,
          starter,
          messageList,
          promptContainer,
          prompt,
          scrollToBottomButton
        }; //#endregion
        //#region src/features/ai/chatHub/ChatView.vue
        cssModules = {
          "$style": ChatView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ChatView_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();