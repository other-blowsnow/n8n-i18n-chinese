;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-CqPMRSSw.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useSettingsItems-legacy-CiASrqPu.js"], function (_export, _context) {
    "use strict";

    var toDisplayString, createElementBlock, unref, ref, createVNode, defineComponent, createBlock, mergeProps, onMounted, Fragment, withCtx, openBlock, renderList, createTextVNode, resolveComponent, normalizeClass, createBaseVNode, useI18n, N8nText_default, N8nIcon_default, N8nMenuItem_default, N8nLink_default, __plugin_vue_export_helper_default, useRouter, useUIStore, isRouteLocationRaw, VIEWS, ABOUT_MODAL_KEY, useRootStore, useSettingsItems, __vite_style__, SettingsSidebar_vue_vue_type_script_setup_true_lang_default, container$1, returnButton, items, versionContainer, SettingsSidebar_vue_vue_type_style_index_0_lang_module_default, cssModules$1, SettingsSidebar_default, SettingsView_vue_vue_type_script_setup_true_lang_default, container, contentContainer, content, SettingsView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nMenuItem_default = _srcLegacy007Js.j;
        N8nLink_default = _srcLegacy007Js.ut;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        isRouteLocationRaw = _useTelemetryLegacy00HJs.fr;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Lo;
        ABOUT_MODAL_KEY = _constantsLegacy00TJs.Ro;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useSettingsItemsLegacy04nJs) {
        useSettingsItems = _useSettingsItemsLegacy04nJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_189g8_123 {\n  min-width: 200px;\n  height: 100%;\n  background-color: var(--color--background--light-3);\n  border-right: var(--border);\n  position: relative;\n  overflow: auto;\n}\n._returnButton_189g8_132 {\n  padding: var(--spacing--xs);\n  cursor: pointer;\n  display: flex;\n  gap: var(--spacing--3xs);\n  align-items: center;\n}\n._returnButton_189g8_132:hover {\n  color: var(--color--primary);\n}\n._items_189g8_143 {\n  display: flex;\n  flex-direction: column;\n  padding: 0 var(--spacing--3xs);\n}\n._versionContainer_189g8_149 {\n  padding: var(--spacing--xs);\n}\n@media screen and (max-height: 420px) {\n._versionContainer_189g8_149 {\n    display: none;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_93ml1_123 {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n._contentContainer_93ml1_130 {\n  justify-content: center;\n  padding-top: 70.5px;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--color--background--light-2);\n  position: relative;\n}\n._content_93ml1_130 {\n  height: 100%;\n  width: 100%;\n  max-width: 1440px;\n  padding: 0 var(--spacing--2xl);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/SettingsSidebar.vue?vue&type=script&setup=true&lang.ts
        SettingsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsSidebar",
          emits: ["return"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const i18n = useI18n();
            const rootStore = useRootStore();
            const uiStore = useUIStore();
            const {
              settingsItems
            } = useSettingsItems();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.returnButton),
                "data-test-id": "settings-back",
                onClick: _cache[0] || (_cache[0] = $event => emit("return"))
              }, [createBaseVNode("i", null, [createVNode(unref(N8nIcon_default), {
                icon: "arrow-left"
              })]), createVNode(unref(N8nText_default), {
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.items)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(settingsItems), item => {
                return openBlock(), createBlock(unref(N8nMenuItem_default), {
                  key: item.id,
                  item
                }, null, 8, ["item"]);
              }), 128))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.versionContainer)
              }, [createVNode(unref(N8nLink_default), {
                size: "small",
                onClick: _cache[1] || (_cache[1] = $event => unref(uiStore).openModal(unref("about")))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.version")) + " " + toDisplayString(unref(rootStore).versionCli), 1)]),
                _: 1
              })], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/SettingsSidebar.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_189g8_123";
        returnButton = "_returnButton_189g8_132";
        items = "_items_189g8_143";
        versionContainer = "_versionContainer_189g8_149";
        SettingsSidebar_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          returnButton,
          items,
          versionContainer
        }; //#endregion
        //#region src/app/components/SettingsSidebar.vue
        cssModules$1 = {
          "$style": SettingsSidebar_vue_vue_type_style_index_0_lang_module_default
        };
        SettingsSidebar_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/app/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
        SettingsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsView",
          setup(__props) {
            const router = useRouter();
            const previousRoute = ref();
            function onReturn() {
              const resolvedSettingsRoute = router.resolve({
                name: VIEWS.SETTINGS
              });
              const resolvedPreviousRoute = isRouteLocationRaw(previousRoute.value) ? router.resolve(previousRoute.value) : null;
              const backRoute = !resolvedPreviousRoute || resolvedPreviousRoute.path.startsWith(resolvedSettingsRoute.path) ? {
                name: VIEWS.HOMEPAGE
              } : resolvedPreviousRoute;
              router.push(backRoute);
            }
            onMounted(() => {
              previousRoute.value = router.options.history.state.back;
            });
            return (_ctx, _cache) => {
              const _component_RouterView = resolveComponent("RouterView");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(SettingsSidebar_default, {
                onReturn
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.contentContainer)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [createVNode(_component_RouterView, mergeProps({
                name: "settingsView"
              }, _ctx.$attrs), null, 16)], 2)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/views/SettingsView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_93ml1_123";
        contentContainer = "_contentContainer_93ml1_130 _container_93ml1_123";
        content = "_content_93ml1_130";
        SettingsView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          contentContainer,
          content
        }; //#endregion
        //#region src/app/views/SettingsView.vue
        cssModules = {
          "$style": SettingsView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();