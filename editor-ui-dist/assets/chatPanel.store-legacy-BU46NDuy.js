;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./truncate-legacy-B7Y_hCM_.js", "./useTelemetry-legacy-CBjbIfKX.js", "./constants-legacy-DVoQkFTS.js", "./assistant.store-legacy-BX8dK0Zr.js", "./_baseOrderBy-legacy-CowL7g45.js"], function (_export, _context) {
    "use strict";

    var computed, watch, useRoute, useUIStore, useSettingsStore, STORES, EDITABLE_CANVAS_VIEWS, ASK_AI_SLIDE_OUT_DURATION_MS, ASSISTANT_ENABLED_VIEWS, useBuilderStore, BUILDER_ENABLED_VIEWS, useChatPanelStateStore, useAssistantStore, defineStore, MAX_CHAT_WIDTH, MIN_CHAT_WIDTH, DEFAULT_CHAT_WIDTH, useChatPanelStore;
    /**
    * Type guard to check if a route name is a valid VIEWS value within the enabled views
    * Performs runtime validation to safely narrow the type without unsafe assertions
    */
    function isEnabledView(route, views) {
      return typeof route === "string" && views.includes(route);
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        STORES = _useTelemetryLegacy00HJs.oc;
      }, function (_constantsLegacy00TJs) {
        EDITABLE_CANVAS_VIEWS = _constantsLegacy00TJs.Mo;
        ASK_AI_SLIDE_OUT_DURATION_MS = _constantsLegacy00TJs.Nc;
      }, function (_assistantStoreLegacy00XJs) {
        ASSISTANT_ENABLED_VIEWS = _assistantStoreLegacy00XJs.a;
        useBuilderStore = _assistantStoreLegacy00XJs.i;
        BUILDER_ENABLED_VIEWS = _assistantStoreLegacy00XJs.o;
        useChatPanelStateStore = _assistantStoreLegacy00XJs.r;
        useAssistantStore = _assistantStoreLegacy00XJs.t;
      }, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
      }],
      execute: function () {
        //#region src/features/ai/assistant/chatPanel.store.ts
        MAX_CHAT_WIDTH = 425;
        MIN_CHAT_WIDTH = 380;
        DEFAULT_CHAT_WIDTH = 400;
        _export("t", useChatPanelStore = defineStore(STORES.CHAT_PANEL, () => {
          const uiStore = useUIStore();
          const route = useRoute();
          const chatPanelStateStore = useChatPanelStateStore();
          const settingsStore = useSettingsStore();
          const isAssistantModeActive = computed(() => chatPanelStateStore.activeMode === "assistant");
          const isBuilderModeActive = computed(() => chatPanelStateStore.activeMode === "builder");
          const canShowAiButtonOnCanvas = computed(() => settingsStore.isAiAssistantOrBuilderEnabled && EDITABLE_CANVAS_VIEWS.includes(route.name));
          async function open(options) {
            const mode = options?.mode;
            if (mode) chatPanelStateStore.activeMode = mode;
            const enabledViews = chatPanelStateStore.activeMode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS;
            const currentRoute = route?.name;
            if (!isEnabledView(currentRoute, enabledViews)) {
              close();
              return;
            }
            chatPanelStateStore.isOpen = true;
            if (chatPanelStateStore.activeMode === "builder") {
              const builderStore = useBuilderStore();
              builderStore.chatMessages = [];
              builderStore.fetchBuilderCredits();
              builderStore.loadSessions();
            } else if (chatPanelStateStore.activeMode === "assistant") {
              const assistantStore = useAssistantStore();
              assistantStore.chatMessages = assistantStore.chatMessages.map(msg => ({
                ...msg,
                read: true
              }));
            }
            uiStore.appGridDimensions = {
              ...uiStore.appGridDimensions,
              width: window.innerWidth - chatPanelStateStore.width
            };
          }
          function close() {
            chatPanelStateStore.isOpen = false;
            setTimeout(() => {
              uiStore.appGridDimensions = {
                ...uiStore.appGridDimensions,
                width: window.innerWidth
              };
              const assistantStore = useAssistantStore();
              const builderStore = useBuilderStore();
              if (assistantStore.isSessionEnded) assistantStore.resetAssistantChat();
              builderStore.resetBuilderChat();
            }, 200 + 50);
          }
          async function toggle(options) {
            if (chatPanelStateStore.isOpen) close();else await open(options);
          }
          function switchMode(mode) {
            const enabledViews = mode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS;
            const currentRoute = route?.name;
            if (!isEnabledView(currentRoute, enabledViews)) {
              close();
              return;
            }
            chatPanelStateStore.activeMode = mode;
          }
          function updateWidth(newWidth) {
            const clampedWidth = Math.min(Math.max(newWidth, 380), 425);
            chatPanelStateStore.width = clampedWidth;
            if (chatPanelStateStore.isOpen) uiStore.appGridDimensions = {
              ...uiStore.appGridDimensions,
              width: window.innerWidth - clampedWidth
            };
          }
          /**
          * Opens assistant with credential help context
          */
          async function openWithCredHelp(credentialType) {
            await useAssistantStore().initCredHelp(credentialType);
            await open({
              mode: "assistant"
            });
          }
          /**
          * Opens assistant with error helper context
          */
          async function openWithErrorHelper(context) {
            await useAssistantStore().initErrorHelper(context);
            await open({
              mode: "assistant"
            });
          }
          watch(() => route?.name, newRoute => {
            if (!chatPanelStateStore.isOpen || !newRoute) return;
            const builderStore = useBuilderStore();
            if (!isEnabledView(newRoute, chatPanelStateStore.activeMode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS)) close();else if (isEnabledView(newRoute, BUILDER_ENABLED_VIEWS)) builderStore.resetBuilderChat();
          });
          return {
            isOpen: computed(() => chatPanelStateStore.isOpen),
            width: computed(() => chatPanelStateStore.width),
            activeMode: computed(() => chatPanelStateStore.activeMode),
            isAssistantModeActive,
            isBuilderModeActive,
            canShowAiButtonOnCanvas,
            open,
            close,
            toggle,
            switchMode,
            updateWidth,
            openWithCredHelp,
            openWithErrorHelper,
            DEFAULT_CHAT_WIDTH: 400,
            MIN_CHAT_WIDTH: 380,
            MAX_CHAT_WIDTH: 425
          };
        })); //#endregion
      }
    };
  });
})();