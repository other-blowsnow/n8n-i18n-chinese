;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./retry-legacy-CSXRWnZ-.js", "./nodeIcon-legacy-vDRr0hL7.js", "./useClipboard-legacy-CkqS6mrY.js", "./NodeIcon-legacy-nNR3V-3Y.js", "./CredentialIcon-legacy-BDJvL2pe.js", "./VueMarkdown-legacy-u6cEOcId.js", "./constants-legacy-CDt9VJ1s.js", "./chat.store-legacy-xVTW4QR1.js", "./fileUtils-legacy-C-uhaiIn.js", "./ChatAgentAvatar-legacy-BIai45_k.js", "./ChatSidebarOpener-legacy-CtKzPcVT.js", "./useChatHubSidebarState-legacy-giKHkTt5.js", "./ToolsSelector-legacy-n-px_zo_.js", "./ChatFile-legacy-nQoUioQE.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, ref, createVNode, defineComponent, createBlock, Fragment, watch, normalizeStyle, withCtx, openBlock, withModifiers, renderList, createTextVNode, useTemplateRef, onBeforeMount, normalizeClass, createBaseVNode, useSpeechRecognition, useSpeechSynthesis, useMediaQuery, useScroll, useI18n, useLocalStorage, N8nIconButton_default, N8nText_default, N8nHeading_default, N8nIcon_default, require_markdown_it_link_attributes, N8nLink_default, N8nScrollArea_default, useDeviceSupport, N8nButton_default, N8nInput_default, N8nTooltip_default, __vitePreload, __plugin_vue_export_helper_default, useRouter, useRoute, useDocumentTitle, v4_default, useUIStore, useUsersStore, useToast, VIEWS, chatHubConversationModelSchema, PROVIDER_CREDENTIAL_TYPE_MAP, LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS, LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, INodesSchema, useRootStore, useClipboard, VueMarkdown_default, providerDisplayNames, CHAT_VIEW, CHAT_CONVERSATION_VIEW, AGENT_EDITOR_MODAL_KEY, MOBILE_MEDIA_QUERY, isLlmProvider, unflattenModel, isLlmProviderModel, buildChatAttachmentUrl, findOneFromModelsResponse, useChatStore, ChatAgentAvatar_default, ChatLayout_default, useChatCredentials, ChatSidebarOpener_default, useChatHubSidebarState, ModelSelector_default, ToolsSelector_default, ChatFile_default, __vite_style__, ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, component, menuButton, grow, title, editAgent, ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$6, ChatConversationHeader_default, typing, blink, ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default, _sfc_main, cssModules$5, ChatTypingIndicator_default, hljsInstance, asyncImport, import_markdown_it_link_attributes, ChatMessageActions_vue_vue_type_script_setup_true_lang_default, actions$2, ChatMessageActions_vue_vue_type_style_index_0_lang_module_default, cssModules$4, ChatMessageActions_default, _hoisted_1, _hoisted_2, _hoisted_3, ChatMessage_vue_vue_type_script_setup_true_lang_default, message, avatar, compact, content, attachments$1, chatMessage, user, errorMessage, chatMessageMarkdown, actions$1, editContainer, textarea, editActions, typingIndicator, ChatMessage_vue_vue_type_style_index_0_lang_module_default, cssModules$3, ChatMessage_default, ChatPrompt_vue_vue_type_script_setup_true_lang_default, prompt$1, inputWrap, callout, fileInput, inputWrapper, footer, tools, toolsButton, iconStack, icon, iconOverlap, iconFallback, actions, attachments, recording, chatHubPromptRecordingPulse, ChatPrompt_vue_vue_type_style_index_0_lang_module_default, cssModules$2, ChatPrompt_default, ChatStarter_vue_vue_type_script_setup_true_lang_default, starter$1, card, cardIcon, cardText, ChatStarter_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatStarter_default, ChatView_vue_vue_type_script_setup_true_lang_default, chatLayout, scrollArea, scrollable, isNewSession, header, isMobileDevice, starter, messageList, promptContainer, isExistingSession, prompt, scrollToBottomButton, isDraggingFile, dropOverlay, ChatView_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatView_default;
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
            promise: Promise.all([__vitePreload(() => _context.import("./es-legacy-DzL_k4ns.js"), true               ? void 0 : void 0), __vitePreload(() => _context.import("./languageModules-legacy-Ck5HtpoH.js"), true               ? void 0 : void 0)])
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

    //#endregion
    //#region src/features/ai/chatHub/composables/useFileDrop.ts
    function useFileDrop(canAcceptFiles, onFilesDropped) {
      const isDragging = ref(false);
      function handleDragEnter(e) {
        if (!canAcceptFiles.value) return;
        if (e.dataTransfer?.types.includes("Files")) isDragging.value = true;
      }
      function handleDragLeave(e) {
        if (!canAcceptFiles.value) return;
        const target = e.currentTarget;
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && target.contains(relatedTarget)) return;
        isDragging.value = false;
      }
      function handleDragOver(e) {
        if (!canAcceptFiles.value) return;
        e.preventDefault();
        e.stopPropagation();
      }
      function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        isDragging.value = false;
        if (!canAcceptFiles.value) return;
        const files = e.dataTransfer?.files;
        if (!files || files.length === 0) return;
        onFilesDropped(Array.from(files));
      }
      function handlePaste(e) {
        if (!canAcceptFiles.value) return;
        const items = e.clipboardData?.items;
        if (!items) return;
        let hasFiles = false;
        const files = [];
        for (const item of Array.from(items)) if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            files.push(file);
            hasFiles = true;
          }
        }
        if (hasFiles) {
          e.preventDefault();
          onFilesDropped(files);
        }
      }
      return {
        isDragging,
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        handlePaste
      };
    }

    //#endregion
    //#region src/features/ai/chatHub/ChatView.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useSpeechRecognition = _MapCacheLegacy005Js.I;
        useSpeechSynthesis = _MapCacheLegacy005Js.L;
        useMediaQuery = _MapCacheLegacy005Js.M;
        useScroll = _MapCacheLegacy005Js.P;
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Et;
        N8nText_default = _srcLegacy007Js.Kn;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nIcon_default = _srcLegacy007Js.Yn;
        require_markdown_it_link_attributes = _srcLegacy007Js.bt;
        N8nLink_default = _srcLegacy007Js.ht;
        N8nScrollArea_default = _srcLegacy007Js.i;
        useDeviceSupport = _srcLegacy007Js.it;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nInput_default = _srcLegacy007Js.wt;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        v4_default = _useTelemetryLegacy00HJs.Io;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useUsersStore = _useTelemetryLegacy00HJs.er;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
        chatHubConversationModelSchema = _constantsLegacy00RJs.Qr;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00RJs.Zr;
        LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS = _constantsLegacy00RJs._s;
        LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL = _constantsLegacy00RJs.gs;
        INodesSchema = _constantsLegacy00RJs.mi;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {
        useRootStore = _baseOrderByLegacy00XJs.r;
      }, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_retryLegacy01jJs) {}, function (_nodeIconLegacy01tJs) {}, function (_useClipboardLegacy01vJs) {
        useClipboard = _useClipboardLegacy01vJs.t;
      }, function (_NodeIconLegacy01DJs) {}, function (_CredentialIconLegacy02jJs) {}, function (_VueMarkdownLegacy02pJs) {
        VueMarkdown_default = _VueMarkdownLegacy02pJs.t;
      }, function (_constantsLegacy03jJs) {
        providerDisplayNames = _constantsLegacy03jJs.f;
        CHAT_VIEW = _constantsLegacy03jJs.l;
        CHAT_CONVERSATION_VIEW = _constantsLegacy03jJs.r;
        AGENT_EDITOR_MODAL_KEY = _constantsLegacy03jJs.t;
        MOBILE_MEDIA_QUERY = _constantsLegacy03jJs.u;
      }, function (_chatStoreLegacy03lJs) {
        isLlmProvider = _chatStoreLegacy03lJs.c;
        unflattenModel = _chatStoreLegacy03lJs.f;
        isLlmProviderModel = _chatStoreLegacy03lJs.l;
        buildChatAttachmentUrl = _chatStoreLegacy03lJs.p;
        findOneFromModelsResponse = _chatStoreLegacy03lJs.r;
        useChatStore = _chatStoreLegacy03lJs.t;
      }, function (_fileUtilsLegacy03nJs) {}, function (_ChatAgentAvatarLegacy04$Js) {
        ChatAgentAvatar_default = _ChatAgentAvatarLegacy04$Js.t;
      }, function (_ChatSidebarOpenerLegacy051Js) {
        ChatLayout_default = _ChatSidebarOpenerLegacy051Js.n;
        useChatCredentials = _ChatSidebarOpenerLegacy051Js.r;
        ChatSidebarOpener_default = _ChatSidebarOpenerLegacy051Js.t;
      }, function (_useChatHubSidebarStateLegacy053Js) {
        useChatHubSidebarState = _useChatHubSidebarStateLegacy053Js.t;
      }, function (_ToolsSelectorLegacy057Js) {
        ModelSelector_default = _ToolsSelectorLegacy057Js.n;
        ToolsSelector_default = _ToolsSelectorLegacy057Js.t;
      }, function (_ChatFileLegacy059Js) {
        ChatFile_default = _ChatFileLegacy059Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_1rkfw_123 {\n  padding-inline: var(--spacing--4xs);\n  height: 56px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n  border-bottom: var(--border);\n}\n._component_1rkfw_123:has(._menuButton_1rkfw_133) {\n  padding-inline: var(--spacing--xs);\n}\n._grow_1rkfw_137 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n}\n._title_1rkfw_144 {\n  margin-inline: var(--spacing--md);\n}\n._editAgent_1rkfw_148 {\n  margin-right: var(--spacing--3xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._typing_9qr9t_123 {\n  display: inline-flex;\n  gap: 6px;\n}\n._typing_9qr9t_123 i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.35;\n  animation: _blink_9qr9t_1 1.2s infinite;\n}\n._typing_9qr9t_123 i:nth-child(2) {\n  animation-delay: 0.2s;\n}\n._typing_9qr9t_123 i:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _blink_9qr9t_1 {\n0%, 80%, 100% {\n    opacity: 0.35;\n    transform: translateY(0);\n}\n40% {\n    opacity: 1;\n    transform: translateY(-2px);\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._actions_1sizk_123 {\n  display: flex;\n  align-items: center;\n}\n._actions_1sizk_123 g, ._actions_1sizk_123 path {\n  color: var(--color--text--tint-1);\n  stroke-width: 2.5;\n}\n.fade-enter-active[data-v-8fc94c16],\n.fade-leave-active[data-v-8fc94c16] {\n\ttransition: opacity 0.15s ease;\n}\n.fade-enter-from[data-v-8fc94c16],\n.fade-leave-to[data-v-8fc94c16] {\n\topacity: 0;\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._message_1j1m4_123 {\n  position: relative;\n  scroll-margin-block: var(--spacing--sm);\n}\n._avatar_1j1m4_128 {\n  position: absolute;\n  right: 100%;\n  margin-right: var(--spacing--xs);\n  top: 0;\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--color--background);\n  color: var(--color--text--tint-1);\n}\n._compact_1j1m4_141 ._avatar_1j1m4_128 {\n  position: static;\n  margin-bottom: var(--spacing--xs);\n}\n._content_1j1m4_146 {\n  display: flex;\n  flex-direction: column;\n}\n._attachments_1j1m4_151 {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing--2xs);\n}\n._chatMessage_1j1m4_156 ._attachments_1j1m4_151 {\n  margin-top: var(--spacing--xs);\n}\n._chatMessage_1j1m4_156 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n  position: relative;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n._user_1j1m4_168 ._chatMessage_1j1m4_156 {\n  padding: var(--spacing--2xs) var(--spacing--sm);\n  border-radius: var(--radius--xl);\n  background-color: var(--color--background);\n  white-space-collapse: preserve-breaks;\n  line-height: 1.8;\n}\n._errorMessage_1j1m4_176 {\n  padding: var(--spacing--xs) var(--spacing--sm);\n  border-radius: var(--radius--lg);\n  background-color: var(--color--danger--tint-4);\n  border: var(--border-width) var(--border-style) var(--color--danger--tint-3);\n  color: var(--color--danger);\n}\n._chatMessageMarkdown_1j1m4_184 {\n  display: block;\n  box-sizing: border-box;\n}\n._chatMessageMarkdown_1j1m4_184 > *:first-child {\n  margin-top: 0;\n}\n._chatMessageMarkdown_1j1m4_184 > *:last-child {\n  margin-bottom: 0;\n}\n._chatMessageMarkdown_1j1m4_184 * {\n  font-size: var(--font-size--md);\n  line-height: 1.8;\n}\n._chatMessageMarkdown_1j1m4_184 p {\n  margin: var(--spacing--xs) 0;\n}\n._chatMessageMarkdown_1j1m4_184 h1 {\n  font-size: var(--font-size--2xl);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--md);\n}\n._chatMessageMarkdown_1j1m4_184 h2 {\n  font-size: var(--font-size--xl);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--lg);\n}\n._chatMessageMarkdown_1j1m4_184 h3 {\n  font-size: var(--font-size--lg);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--lg);\n}\n._chatMessageMarkdown_1j1m4_184 h4 {\n  font-size: var(--font-size--md);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--xl);\n}\n._chatMessageMarkdown_1j1m4_184 h5 {\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--xl);\n}\n._chatMessageMarkdown_1j1m4_184 h6 {\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n  line-height: var(--line-height--xl);\n}\n._chatMessageMarkdown_1j1m4_184 pre {\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre-wrap;\n  box-sizing: border-box;\n  padding: var(--chat--spacing);\n  background: var(--chat--message--pre--background);\n  border-radius: var(--chat--border-radius);\n}\n._chatMessageMarkdown_1j1m4_184 table {\n  width: 100%;\n  border-bottom: var(--border);\n  border-top: var(--border);\n  border-width: 2px;\n  margin-bottom: 1em;\n  border-color: var(--color--text--shade-1);\n}\n._chatMessageMarkdown_1j1m4_184 th,\n._chatMessageMarkdown_1j1m4_184 td {\n  padding: 0.25em 1em 0.25em 0;\n}\n._chatMessageMarkdown_1j1m4_184 th {\n  border-bottom: var(--border);\n  border-color: var(--color--text--shade-1);\n}\n._chatMessageMarkdown_1j1m4_184 ul li,\n._chatMessageMarkdown_1j1m4_184 ol li {\n  margin-bottom: 0.125rem;\n}\n._actions_1j1m4_262 {\n  margin-top: var(--spacing--2xs);\n}\n._editContainer_1j1m4_266 {\n  width: 100%;\n  border-radius: var(--radius--lg);\n  padding: var(--spacing--xs);\n  background-color: var(--color--background--light-3);\n  border: var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._editContainer_1j1m4_266:focus-within, ._editContainer_1j1m4_266:hover {\n  border-color: var(--color--secondary);\n}\n._textarea_1j1m4_281 {\n  scroll-margin-block: var(--spacing--sm);\n}\n._textarea_1j1m4_281 textarea {\n  font-family: inherit;\n  line-height: 1.5em;\n  resize: none;\n  background-color: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n}\n._editActions_1j1m4_294 {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing--2xs);\n}\n._typingIndicator_1j1m4_300 {\n  margin-top: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._prompt_1a1iv_123 {\n  display: grid;\n  place-items: center;\n}\n._inputWrap_1a1iv_128 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n._callout_1a1iv_136 {\n  color: var(--color--secondary);\n  background-color: hsla(247, 49%, 53%, 0.1);\n  padding: 12px 16px 24px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  width: 100%;\n  border: var(--border);\n  border-color: var(--color--secondary);\n  text-align: center;\n  margin-bottom: -16px;\n}\n._callout_1a1iv_136 a {\n  text-decoration: underline;\n  color: inherit;\n}\n._fileInput_1a1iv_153 {\n  display: none;\n}\n._inputWrapper_1a1iv_157 {\n  width: 100%;\n  border-radius: 16px !important;\n  padding: 16px;\n  box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.062745098);\n  background-color: var(--color--background--light-3);\n  border: var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._inputWrapper_1a1iv_157:focus-within, ._inputWrapper_1a1iv_157:hover {\n  border-color: var(--color--secondary);\n}\n._inputWrapper_1a1iv_157 textarea {\n  font: inherit;\n  line-height: 1.5em;\n  resize: none;\n  background-color: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n}\n._footer_1a1iv_181 {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  gap: var(--spacing--sm);\n}\n._tools_1a1iv_188 {\n  flex-grow: 1;\n}\n._toolsButton_1a1iv_192 {\n  /* maintain the same height with other buttons regardless of selected tools */\n  height: 30px;\n}\n._iconStack_1a1iv_197 {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n._icon_1a1iv_197 {\n  padding: var(--spacing--4xs);\n  background-color: var(--button--color--background--secondary);\n  border-radius: 50%;\n  outline: 2px var(--color--background--light-3) solid;\n}\n._iconOverlap_1a1iv_210 {\n  margin-left: -6px;\n}\n._iconFallback_1a1iv_214 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._actions_1a1iv_220 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._actions_1a1iv_220 button path {\n  stroke-width: 2.5;\n}\n._attachments_1a1iv_229 {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing--2xs);\n}\n._recording_1a1iv_235 {\n  animation: _chatHubPromptRecordingPulse_1a1iv_1 1.5s ease-in-out infinite;\n}\n@keyframes _chatHubPromptRecordingPulse_1a1iv_1 {\n0%, 100% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.6;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._starter_1julh_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing--2xl);\n}\n._card_1julh_131 {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--md);\n  border: 1px solid var(--color--foreground);\n  background: var(--color--background);\n  border-radius: var(--radius--lg);\n  text-align: left;\n  cursor: pointer;\n  transition: transform 0.06s ease, background 0.06s ease, border-color 0.06s ease;\n}\n._card_1julh_131:hover {\n  border-color: var(--color--primary);\n  background: rgba(124, 58, 237, 0.04);\n}\n._cardIcon_1julh_149 {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n._cardText_1julh_155 {\n  display: grid;\n  gap: 2px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._chatLayout_1sy6c_123 {\n  position: relative;\n}\n._scrollArea_1sy6c_127 {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n._scrollable_1sy6c_132 {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: start;\n  gap: var(--spacing--2xl);\n}\n._isNewSession_1sy6c_141 ._scrollable_1sy6c_132 {\n  justify-content: center;\n}\n._header_1sy6c_145 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n._isMobileDevice_1sy6c_151 ._starter_1sy6c_151 {\n  padding-top: 30px;\n  padding-bottom: 200px;\n}\n._messageList_1sy6c_156 {\n  width: 100%;\n  max-width: 55rem;\n  min-height: 100%;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n  padding-top: 30px;\n  padding-bottom: 200px;\n  padding-inline: 64px;\n}\n._isMobileDevice_1sy6c_151 ._messageList_1sy6c_156 {\n  padding-inline: var(--spacing--md);\n}\n._promptContainer_1sy6c_172 {\n  display: flex;\n  justify-content: center;\n}\n._isMobileDevice_1sy6c_151 ._promptContainer_1sy6c_172, ._isExistingSession_1sy6c_176 ._promptContainer_1sy6c_172 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-block: var(--spacing--md);\n  background: linear-gradient(transparent 0%, var(--color--background--light-2) 30%);\n}\n._prompt_1sy6c_172 {\n  width: 100%;\n  max-width: 55rem;\n  padding-inline: 64px;\n}\n._isMobileDevice_1sy6c_151 ._prompt_1sy6c_172 {\n  padding-inline: var(--spacing--md);\n}\n._scrollToBottomButton_1sy6c_194 {\n  position: absolute;\n  bottom: 100%;\n  left: auto;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n}\n._isDraggingFile_1sy6c_202 {\n  border-color: var(--color--secondary);\n}\n._dropOverlay_1sy6c_206 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: color-mix(in srgb, var(--color--background--light-2) 95%, transparent);\n  pointer-events: none;\n}/*$vite$:1*/";
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
              }, [createVNode(ChatSidebarOpener_default, {
                class: normalizeClass(_ctx.$style.menuButton)
              }, null, 8, ["class"]), !unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.menuButton),
                type: "secondary",
                icon: "square-pen",
                text: "",
                "icon-size": "large",
                onClick: onNewChat
              }, null, 8, ["class"])) : createCommentVNode("", true), _ctx.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
                key: 1,
                ref_key: "modelSelectorRef",
                ref: modelSelectorRef,
                "selected-agent": _ctx.selectedModel,
                credentials: _ctx.credentials,
                text: "",
                onChange: onModelChange,
                onCreateCustomAgent: _cache[0] || (_cache[0] = $event => emit("createCustomAgent")),
                onSelectCredential: _cache[1] || (_cache[1] = (provider, credentialId) => emit("selectCredential", provider, credentialId))
              }, null, 8, ["selected-agent", "credentials"])) : createCommentVNode("", true)], 2), _ctx.selectedModel?.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.editAgent),
                type: "secondary",
                size: "small",
                icon: "settings",
                label: "Edit Agent",
                onClick: _cache[2] || (_cache[2] = $event => emit("editCustomAgent", _ctx.selectedModel.model.agentId))
              }, null, 8, ["class"])) : createCommentVNode("", true), _ctx.selectedModel?.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.editAgent),
                type: "secondary",
                size: "small",
                icon: "settings",
                label: "Open Workflow",
                onClick: _cache[3] || (_cache[3] = $event => emit("openWorkflow", _ctx.selectedModel.model.workflowId))
              }, null, 8, ["class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatConversationHeader.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_1rkfw_123";
        menuButton = "_menuButton_1rkfw_133";
        grow = "_grow_1rkfw_137";
        title = "_title_1rkfw_144";
        editAgent = "_editAgent_1rkfw_148";
        ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default = {
          component,
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
              })) : createCommentVNode("", true), _ctx.message.status === "success" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
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
              })) : createCommentVNode("", true), _ctx.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 2,
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
                key: 3,
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
                key: 4
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
        ChatMessageActions_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4], ["__scopeId", "data-v-8fc94c16"]]); //#endregion
        //#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["data-message-id"];
        _hoisted_2 = {
          key: 1
        };
        _hoisted_3 = {
          key: 1
        };
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
            const chatStore = useChatStore();
            const rootStore = useRootStore();
            const {
              isCtrlKeyPressed
            } = useDeviceSupport();
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
            const agent = computed(() => {
              const model = unflattenModel(__props.message);
              return model ? chatStore.getAgent(model) : null;
            });
            const attachments$2 = computed(() => __props.message.attachments.map(({
              fileName,
              mimeType
            }, index) => ({
              file: new File([], fileName ?? "file", {
                type: mimeType
              }),
              downloadUrl: buildChatAttachmentUrl(rootStore.restApiContext, __props.message.sessionId, __props.message.id, index)
            })));
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
            function handleKeydownTextarea(e) {
              const trimmed = editedText.value.trim();
              if (e.key === "Enter" && isCtrlKeyPressed(e) && !e.isComposing && trimmed) {
                e.preventDefault();
                handleConfirmEdit();
              }
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
            watch(() => __props.isEditing, editing => {
              editedText.value = editing ? __props.message.content : "";
            }, {
              immediate: true
            });
            watch(textareaRef, async textarea$1 => {
              if (textarea$1) {
                await new Promise(r => setTimeout(r, 0));
                textarea$1.focus();
                textarea$1.$el.scrollIntoView({
                  block: "nearest"
                });
              }
            }, {
              immediate: true,
              flush: "post"
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
              })) : agent.value ? (openBlock(), createBlock(ChatAgentAvatar_default, {
                key: 1,
                agent: agent.value,
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
              }, [attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.attachments)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (attachment, index) => {
                return openBlock(), createBlock(ChatFile_default, {
                  key: index,
                  file: attachment.file,
                  "is-removable": false,
                  href: attachment.downloadUrl
                }, null, 8, ["file", "href"]);
              }), 128))], 2)) : createCommentVNode("", true), createVNode(unref(N8nInput_default), {
                ref: "textarea",
                modelValue: editedText.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editedText.value = $event),
                type: "textarea",
                autosize: {
                  minRows: 3,
                  maxRows: 20
                },
                class: normalizeClass(_ctx.$style.textarea),
                onKeydown: handleKeydownTextarea
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
              }, 8, ["disabled"])], 2)], 2)) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.chatMessage, {
                  [_ctx.$style.errorMessage]: _ctx.message.status === "error"
                }])
              }, [attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.attachments)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (attachment, index) => {
                return openBlock(), createBlock(ChatFile_default, {
                  key: index,
                  file: attachment.file,
                  "is-removable": false,
                  href: attachment.downloadUrl
                }, null, 8, ["file", "href"]);
              }), 128))], 2)) : createCommentVNode("", true), _ctx.message.type === "human" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.message.content), 1)) : (openBlock(), createBlock(unref(VueMarkdown_default), {
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
              }, null, 8, ["just-copied", "is-speech-synthesis-available", "is-speaking", "class", "message", "alternatives"]))]))], 2)], 14, _hoisted_1);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=style&index=0&lang.module.scss
        message = "_message_1j1m4_123";
        avatar = "_avatar_1j1m4_128";
        compact = "_compact_1j1m4_141";
        content = "_content_1j1m4_146";
        attachments$1 = "_attachments_1j1m4_151";
        chatMessage = "_chatMessage_1j1m4_156";
        user = "_user_1j1m4_168";
        errorMessage = "_errorMessage_1j1m4_176";
        chatMessageMarkdown = "_chatMessageMarkdown_1j1m4_184";
        actions$1 = "_actions_1j1m4_262";
        editContainer = "_editContainer_1j1m4_266";
        textarea = "_textarea_1j1m4_281";
        editActions = "_editActions_1j1m4_294";
        typingIndicator = "_typingIndicator_1j1m4_300";
        ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
          message,
          avatar,
          compact,
          content,
          attachments: attachments$1,
          chatMessage,
          user,
          errorMessage,
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
            isToolsSelectable: {
              type: Boolean
            },
            isMissingCredentials: {
              type: Boolean
            },
            selectedModel: {},
            selectedTools: {}
          },
          emits: ["submit", "stop", "selectModel", "selectTools", "setCredentials"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const emit = __emit;
            const inputRef = useTemplateRef("inputRef");
            const fileInputRef = useTemplateRef("fileInputRef");
            const message$1 = ref("");
            const committedSpokenMessage = ref("");
            const attachments$2 = ref([]);
            const toast = useToast();
            const speechInput = useSpeechRecognition({
              continuous: true,
              interimResults: true,
              lang: navigator.language
            });
            const placeholder = computed(() => __props.selectedModel ? `Message ${__props.selectedModel.name ?? "a model"}...` : "Select a model");
            const llmProvider = computed(() => isLlmProviderModel(__props.selectedModel?.model) ? __props.selectedModel?.model.provider : void 0);
            function onMic() {
              committedSpokenMessage.value = message$1.value;
              if (speechInput.isListening.value) speechInput.stop();else speechInput.start();
            }
            function onStop() {
              emit("stop");
            }
            function onAttach() {
              fileInputRef.value?.click();
            }
            function handleFileSelect(e) {
              const target = e.target;
              const files = target.files;
              if (!files || files.length === 0) return;
              for (const file of Array.from(files)) attachments$2.value.push(file);
              if (target) target.value = "";
              inputRef.value?.focus();
            }
            function removeAttachment(removed) {
              attachments$2.value = attachments$2.value.filter(attachment => attachment !== removed);
            }
            function handleSubmitForm() {
              const trimmed = message$1.value.trim();
              if (trimmed) {
                speechInput.stop();
                emit("submit", trimmed, attachments$2.value);
                message$1.value = "";
                committedSpokenMessage.value = "";
                attachments$2.value = [];
              }
            }
            function handleKeydownTextarea(e) {
              const trimmed = message$1.value.trim();
              if (e.key === "Enter" && !e.shiftKey && !e.isComposing && trimmed) {
                e.preventDefault();
                speechInput.stop();
                emit("submit", trimmed, attachments$2.value);
                message$1.value = "";
                committedSpokenMessage.value = "";
                attachments$2.value = [];
              }
            }
            function handleClickInputWrapper() {
              inputRef.value?.focus();
            }
            watch(speechInput.result, spoken => {
              message$1.value = committedSpokenMessage.value + " " + spoken.trimStart();
            });
            watch(speechInput.isFinal, final => {
              if (final) committedSpokenMessage.value = message$1.value;
            }, {
              flush: "post"
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
            function onSelectTools(tools$1) {
              emit("selectTools", tools$1);
            }
            __expose({
              focus: () => inputRef.value?.focus(),
              setText: text => {
                message$1.value = text;
              },
              addAttachments: files => {
                attachments$2.value.push(...files);
                inputRef.value?.focus();
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
                }, [_cache[6] || (_cache[6] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[0] || (_cache[0] = withModifiers($event => emit("selectModel"), ["prevent"]))
                }, "select a model"), _cache[7] || (_cache[7] = createTextVNode(" to start a conversation "))], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [_cache[8] || (_cache[8] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[1] || (_cache[1] = withModifiers($event => emit("selectModel"), ["prevent"]))
                }, "reselect a model"), _cache[9] || (_cache[9] = createTextVNode(" to continue the conversation "))], 64))]),
                _: 1
              }, 8, ["class"])) : _ctx.isMissingCredentials && llmProvider.value ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.callout)
              }, {
                default: withCtx(() => [_ctx.isNewSession ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [_cache[10] || (_cache[10] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[2] || (_cache[2] = withModifiers($event => emit("setCredentials", llmProvider.value), ["prevent"]))
                }, "set credentials"), createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[llmProvider.value]) + " to start a conversation ", 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [_cache[11] || (_cache[11] = createTextVNode(" Please ")), createBaseVNode("a", {
                  href: "",
                  onClick: _cache[3] || (_cache[3] = withModifiers($event => emit("setCredentials", llmProvider.value), ["prevent"]))
                }, "set credentials"), createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[llmProvider.value]) + " to continue the conversation ", 1)], 64))]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("input", {
                ref_key: "fileInputRef",
                ref: fileInputRef,
                type: "file",
                class: normalizeClass(_ctx.$style.fileInput),
                multiple: "",
                onChange: handleFileSelect
              }, null, 34), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.inputWrapper),
                onClick: handleClickInputWrapper
              }, [attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.attachments)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (file, index) => {
                return openBlock(), createBlock(ChatFile_default, {
                  key: index,
                  file,
                  "is-previewable": true,
                  "is-removable": true,
                  onRemove: removeAttachment
                }, null, 8, ["file"]);
              }), 128))], 2)) : createCommentVNode("", true), createVNode(unref(N8nInput_default), {
                ref_key: "inputRef",
                ref: inputRef,
                modelValue: message$1.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => message$1.value = $event),
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
              }, null, 8, ["modelValue", "placeholder", "disabled"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.footer)
              }, [_ctx.isToolsSelectable ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.tools)
              }, [createVNode(ToolsSelector_default, {
                class: normalizeClass(_ctx.$style.toolsButton),
                selected: _ctx.selectedTools ?? [],
                disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || _ctx.isResponding,
                "transparent-bg": "",
                onSelect: onSelectTools
              }, null, 8, ["class", "selected", "disabled"])], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [_ctx.selectedModel?.allowFileUploads ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                "native-type": "button",
                type: "secondary",
                title: "Attach",
                disabled: _ctx.isMissingCredentials || _ctx.isResponding,
                icon: "paperclip",
                "icon-size": "large",
                text: "",
                onClick: withModifiers(onAttach, ["stop"])
              }, null, 8, ["disabled"])) : createCommentVNode("", true), unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 1,
                "native-type": "button",
                title: unref(speechInput).isListening.value ? "Stop recording" : "Voice input",
                type: "secondary",
                disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || _ctx.isResponding,
                icon: unref(speechInput).isListening.value ? "square" : "mic",
                class: normalizeClass({
                  [_ctx.$style.recording]: unref(speechInput).isListening.value
                }),
                "icon-size": "large",
                onClick: withModifiers(onMic, ["stop"])
              }, null, 8, ["title", "disabled", "icon", "class"])) : createCommentVNode("", true), !_ctx.isResponding ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 2,
                "native-type": "submit",
                disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || !message$1.value.trim(),
                title: "Send",
                icon: "arrow-up",
                "icon-size": "large",
                onClick: _cache[5] || (_cache[5] = withModifiers(() => {}, ["stop"]))
              }, null, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 3,
                "native-type": "button",
                title: "Stop generating",
                icon: "square",
                "icon-size": "large",
                onClick: withModifiers(onStop, ["stop"])
              }))], 2)], 2)], 2)], 2)], 34);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatPrompt.vue?vue&type=style&index=0&lang.module.scss
        prompt$1 = "_prompt_1a1iv_123";
        inputWrap = "_inputWrap_1a1iv_128";
        callout = "_callout_1a1iv_136";
        fileInput = "_fileInput_1a1iv_153";
        inputWrapper = "_inputWrapper_1a1iv_157";
        footer = "_footer_1a1iv_181";
        tools = "_tools_1a1iv_188";
        toolsButton = "_toolsButton_1a1iv_192";
        iconStack = "_iconStack_1a1iv_197";
        icon = "_icon_1a1iv_197";
        iconOverlap = "_iconOverlap_1a1iv_210";
        iconFallback = "_iconFallback_1a1iv_214";
        actions = "_actions_1a1iv_220";
        attachments = "_attachments_1a1iv_229";
        recording = "_recording_1a1iv_235";
        chatHubPromptRecordingPulse = "_chatHubPromptRecordingPulse_1a1iv_1";
        ChatPrompt_vue_vue_type_style_index_0_lang_module_default = {
          prompt: prompt$1,
          inputWrap,
          callout,
          fileInput,
          inputWrapper,
          footer,
          tools,
          toolsButton,
          iconStack,
          icon,
          iconOverlap,
          iconFallback,
          actions,
          attachments,
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
        ChatStarter_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatStarter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]);
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
            const canSelectTools = computed(() => isLlmProvider(selectedModel.value?.model.provider));
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
            const defaultTools = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS(usersStore.currentUserId ?? "anonymous"), null, {
              writeDefaults: false,
              shallow: true,
              serializer: {
                read: value => {
                  try {
                    return INodesSchema.parse(JSON.parse(value));
                  } catch (error) {
                    return null;
                  }
                },
                write: value => JSON.stringify(value)
              }
            });
            const toolsSelection = ref(null);
            const shouldSkipNextScrollTrigger = ref(false);
            const selectedTools = computed(() => {
              if (currentConversation.value?.tools) return currentConversation.value.tools;
              if (toolsSelection.value !== null) return toolsSelection.value;
              return defaultTools.value ?? [];
            });
            const modelFromQuery = computed(() => {
              const agentId = route.query.agentId;
              const workflowId = route.query.workflowId;
              if (!isNewSession$1.value) return null;
              if (typeof agentId === "string") return chatStore.getAgent({
                provider: "custom-agent",
                agentId
              });
              if (typeof workflowId === "string") return chatStore.getAgent({
                provider: "n8n",
                workflowId
              });
              return null;
            });
            const selectedModel = computed(() => {
              if (!chatStore.agentsReady) return null;
              if (modelFromQuery.value) return modelFromQuery.value;
              if (currentConversation.value?.provider) {
                const model = unflattenModel(currentConversation.value);
                return model ? chatStore.getAgent(model) : null;
              }
              if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.getAgent(chatStore.streaming.model);
              return defaultModel.value ? chatStore.getAgent(defaultModel.value) : null;
            });
            const {
              credentialsByProvider,
              selectCredential
            } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
            const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
            const credentialsForSelectedProvider = computed(() => {
              const provider = selectedModel.value?.model.provider;
              if (!provider) return null;
              if (!isLlmProvider(provider)) return {};
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
            const fileDrop = useFileDrop(computed(() => editingMessageId.value === void 0 && !!selectedModel.value?.allowFileUploads && !isMissingSelectedCredential.value), onFilesDropped);
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
              if (shouldSkipNextScrollTrigger.value) {
                shouldSkipNextScrollTrigger.value = false;
                return;
              }
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
            watch([inputRef, sessionId], ([input]) => {
              input?.focus();
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
            function onSubmit(message$1, attachments$2) {
              if (!message$1.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
              didSubmitInCurrentSession.value = true;
              editingMessageId.value = void 0;
              chatStore.sendMessage(sessionId.value, message$1, selectedModel.value.model, credentialsForSelectedProvider.value, canSelectTools.value ? selectedTools.value : [], attachments$2);
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
              const messageToRetry = message$1.id;
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
              shouldSkipNextScrollTrigger.value = true;
              chatStore.switchAlternative(sessionId.value, messageId);
            }
            function handleConfigureCredentials(_provider) {}
            function handleConfigureModel() {
              headerRef.value?.openModelSelector();
            }
            async function handleUpdateTools(newTools) {
              toolsSelection.value = newTools;
              defaultTools.value = newTools;
              if (currentConversation.value) try {
                await chatStore.updateToolsInSession(sessionId.value, newTools);
              } catch (error) {
                toast.showError(error, "Could not update selected tools");
              }
            }
            async function handleEditAgent(agentId) {
              try {
                await chatStore.fetchCustomAgent(agentId);
                uiStore.openModalWithData({
                  name: AGENT_EDITOR_MODAL_KEY,
                  data: {
                    agentId,
                    credentials: credentialsByProvider,
                    onCreateCustomAgent: handleSelectModel
                  }
                });
              } catch (error) {
                toast.showError(error, "Failed to load agent");
              }
            }
            function openNewAgentCreator() {
              chatStore.currentEditingAgent = null;
              uiStore.openModalWithData({
                name: AGENT_EDITOR_MODAL_KEY,
                data: {
                  credentials: credentialsByProvider,
                  onCreateCustomAgent: handleSelectModel
                }
              });
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
            function onFilesDropped(files) {
              inputRef.value?.addAttachments(files);
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(ChatLayout_default, {
                class: normalizeClass({
                  [_ctx.$style.chatLayout]: true,
                  [_ctx.$style.isNewSession]: isNewSession$1.value,
                  [_ctx.$style.isExistingSession]: !isNewSession$1.value,
                  [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1),
                  [_ctx.$style.isDraggingFile]: unref(fileDrop).isDragging.value
                }),
                onDragenter: unref(fileDrop).handleDragEnter,
                onDragleave: unref(fileDrop).handleDragLeave,
                onDragover: unref(fileDrop).handleDragOver,
                onDrop: unref(fileDrop).handleDrop,
                onPaste: unref(fileDrop).handlePaste
              }, {
                default: withCtx(() => [unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.dropOverlay)
                }, [createVNode(unref(N8nText_default), {
                  size: "large",
                  color: "text-dark"
                }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("Drop files here to attach")])),
                  _: 1
                })], 2)) : createCommentVNode("", true), createVNode(ChatConversationHeader_default, {
                  ref_key: "headerRef",
                  ref: headerRef,
                  "selected-model": selectedModel.value,
                  credentials: unref(credentialsByProvider),
                  "ready-to-show-model-selector": unref(chatStore).agentsReady,
                  onSelectModel: handleSelectModel,
                  onEditCustomAgent: handleEditAgent,
                  onCreateCustomAgent: openNewAgentCreator,
                  onSelectCredential: unref(selectCredential),
                  onOpenWorkflow: handleOpenWorkflow
                }, null, 8, ["selected-model", "credentials", "ready-to-show-model-selector", "onSelectCredential"]), readyToShowMessages.value ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
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
                    "selected-model": selectedModel.value,
                    "selected-tools": selectedTools.value,
                    "is-responding": isResponding.value,
                    "is-tools-selectable": canSelectTools.value,
                    "is-missing-credentials": isMissingSelectedCredential.value,
                    "is-new-session": isNewSession$1.value,
                    onSubmit,
                    onStop,
                    onSelectModel: handleConfigureModel,
                    onSelectTools: handleUpdateTools,
                    onSetCredentials: handleConfigureCredentials
                  }, null, 8, ["class", "selected-model", "selected-tools", "is-responding", "is-tools-selectable", "is-missing-credentials", "is-new-session"])], 2)], 2)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["class", "onDragenter", "onDragleave", "onDragover", "onDrop", "onPaste"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/ChatView.vue?vue&type=style&index=0&lang.module.scss
        chatLayout = "_chatLayout_1sy6c_123";
        scrollArea = "_scrollArea_1sy6c_127";
        scrollable = "_scrollable_1sy6c_132";
        isNewSession = "_isNewSession_1sy6c_141";
        header = "_header_1sy6c_145";
        isMobileDevice = "_isMobileDevice_1sy6c_151";
        starter = "_starter_1sy6c_151";
        messageList = "_messageList_1sy6c_156";
        promptContainer = "_promptContainer_1sy6c_172";
        isExistingSession = "_isExistingSession_1sy6c_176";
        prompt = "_prompt_1sy6c_172";
        scrollToBottomButton = "_scrollToBottomButton_1sy6c_194";
        isDraggingFile = "_isDraggingFile_1sy6c_202";
        dropOverlay = "_dropOverlay_1sy6c_206";
        ChatView_vue_vue_type_style_index_0_lang_module_default = {
          chatLayout,
          scrollArea,
          scrollable,
          isNewSession,
          header,
          isMobileDevice,
          starter,
          messageList,
          promptContainer,
          isExistingSession,
          prompt,
          scrollToBottomButton,
          isDraggingFile,
          dropOverlay
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