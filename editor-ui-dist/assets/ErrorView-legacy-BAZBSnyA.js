;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, createBlock, normalizeClass, withCtx, openBlock, createTextVNode, createBaseVNode, useI18n, N8nText_default, N8nButton_default, N8nHeading_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, VIEWS, __vite_style__, ErrorView_vue_vue_type_script_setup_true_lang_default, container, icon, message, ErrorView_vue_vue_type_style_index_0_lang_module_default, cssModules, ErrorView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_whkd2_123 {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n._icon_whkd2_132 {\n  min-height: 96px;\n  min-width: 108px;\n  margin-bottom: var(--spacing--2xl);\n  color: var(--color--foreground);\n}\n._message_whkd2_139 {\n  margin-bottom: var(--spacing--lg);\n}\n._message_whkd2_139 * {\n  margin-bottom: var(--spacing--2xs);\n  display: flex;\n  justify-content: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/views/ErrorView.vue?vue&type=script&setup=true&lang.ts
        ErrorView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ErrorView",
          props: {
            messageKey: {},
            errorCode: {},
            redirectTextKey: {},
            redirectPage: {}
          },
          setup(__props) {
            const router = useRouter();
            const props = __props;
            const i18n = useI18n();
            function onButtonClick() {
              router.push({
                name: props.redirectPage ?? VIEWS.HOMEPAGE
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "triangle-alert",
                class: normalizeClass(_ctx.$style.icon)
              }, null, 8, ["class"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.message)
              }, [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(_ctx.messageKey)), 1)]),
                _: 1
              })]), createBaseVNode("div", null, [_ctx.errorCode ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 0,
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.errorCode) + " " + toDisplayString(unref(i18n).baseText("error")), 1)]),
                _: 1
              })) : createCommentVNode("", true)])], 2), createVNode(unref(N8nButton_default), {
                label: unref(i18n).baseText(_ctx.redirectTextKey),
                onClick: onButtonClick
              }, null, 8, ["label"])], 2);
            };
          }
        }); //#endregion
        //#region src/app/views/ErrorView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_whkd2_123";
        icon = "_icon_whkd2_132";
        message = "_message_whkd2_139";
        ErrorView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          icon,
          message
        }; //#endregion
        //#region src/app/views/ErrorView.vue
        cssModules = {
          "$style": ErrorView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ErrorView_default = /* @__PURE__ */__plugin_vue_export_helper_default(ErrorView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();