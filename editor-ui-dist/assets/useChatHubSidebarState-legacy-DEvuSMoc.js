;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./constants-legacy-D0ziSY9e.js", "./constants-legacy-BrIb7Ao9.js"], function (_export, _context) {
    "use strict";

    var computed, useMediaQuery, useLocalStorage, useUIStore, useUsersStore, CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY, LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR, MOBILE_MEDIA_QUERY;
    //#region src/features/ai/chatHub/composables/useChatHubSidebarState.ts
    function useChatHubSidebarState() {
      const isMobileDevice = useMediaQuery(MOBILE_MEDIA_QUERY);
      const uiStore = useUIStore();
      const isStatic = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR(useUsersStore().currentUserId ?? "anonymous"), !isMobileDevice.value, {
        writeDefaults: false
      });
      const canBeStatic = computed(() => !isMobileDevice.value);
      function toggleOpen(value) {
        const isOpen = !!uiStore.isModalActiveById[CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY];
        if (value ?? !isOpen) uiStore.openModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);else uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
      }
      function toggleStatic(value) {
        const newValue = value ?? !isStatic.value;
        isStatic.value = newValue;
        toggleOpen(newValue);
      }
      return {
        canBeStatic,
        isStatic: computed(() => canBeStatic.value && isStatic.value),
        isCollapsed: computed(() => !isStatic.value && uiStore.isModalActiveById["chatHubSideMenuDrawer"] !== true),
        toggleOpen,
        toggleStatic
      };
    }

    //#endregion
    _export("t", useChatHubSidebarState);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
      }, function (_MapCacheLegacy005Js) {
        useMediaQuery = _MapCacheLegacy005Js.M;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_constantsLegacy00NJs) {
        CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY = _constantsLegacy00NJs.Mo;
        LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR = _constantsLegacy00NJs.ps;
      }, function (_constantsLegacy03fJs) {
        MOBILE_MEDIA_QUERY = _constantsLegacy03fJs.o;
      }],
      execute: function () {}
    };
  });
})();