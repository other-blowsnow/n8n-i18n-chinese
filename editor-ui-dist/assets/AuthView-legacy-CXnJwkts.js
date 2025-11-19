;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sso.store-legacy-Bk24_rEU.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, createBlock, mergeProps, normalizeClass, withCtx, openBlock, createTextVNode, createBaseVNode, useI18n, N8nText_default, N8nFormBox_default, N8nButton_default, N8nLogo_default, __plugin_vue_export_helper_default, useRoute, useSettingsStore, useToast, useSSOStore, __vite_style__, SSOLogin_vue_vue_type_script_setup_true_lang_default, ssoLogin, divider, SSOLogin_vue_vue_type_style_index_0_lang_module_default, cssModules$1, SSOLogin_default, AuthView_vue_vue_type_script_setup_true_lang_default, container, textContainer, formContainer, AuthView_vue_vue_type_style_index_0_lang_module_default, cssModules, AuthView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nFormBox_default = _srcLegacy007Js.L;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nLogo_default = _srcLegacy007Js.M;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_ssoStoreLegacy02ZJs) {
        useSSOStore = _ssoStoreLegacy02ZJs.n;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._ssoLogin_8gepk_123 {\n  text-align: center;\n}\n._divider_8gepk_127 {\n  position: relative;\n  text-transform: uppercase;\n}\n._divider_8gepk_127::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: var(--color--foreground);\n}\n._divider_8gepk_127 span {\n  position: relative;\n  display: inline-block;\n  margin: var(--spacing--2xs) auto;\n  padding: var(--spacing--lg);\n  background: var(--color--background--light-3);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\nbody {\n  background-color: var(--color--background--light-2);\n}\n._container_nroon_127 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: var(--spacing--2xl);\n}\n._container_nroon_127 > * {\n  width: 352px;\n}\n._textContainer_nroon_137 {\n  text-align: center;\n}\n._formContainer_nroon_141 {\n  padding-bottom: var(--spacing--xl);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/sso/components/SSOLogin.vue?vue&type=script&setup=true&lang.ts
        SSOLogin_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SSOLogin",
          setup(__props) {
            const i18n = useI18n();
            const ssoStore = useSSOStore();
            const toast = useToast();
            const route = useRoute();
            const onSSOLogin = async () => {
              try {
                const redirectUrl = ssoStore.isDefaultAuthenticationSaml ? await ssoStore.getSSORedirectUrl(typeof route.query?.redirect === "string" ? route.query.redirect : "") : ssoStore.oidc.loginUrl;
                window.location.href = redirectUrl ?? "";
              } catch (error) {
                toast.showError(error, "Error", error.message);
              }
            };
            return (_ctx, _cache) => {
              return unref(ssoStore).showSsoLoginButton ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.ssoLogin)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.divider)
              }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)], 2), createVNode(unref(N8nButton_default), {
                size: "large",
                type: "primary",
                outline: "",
                label: unref(i18n).baseText("sso.login.button"),
                onClick: onSSOLogin
              }, null, 8, ["label"])], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/components/SSOLogin.vue?vue&type=style&index=0&lang.module.scss
        ssoLogin = "_ssoLogin_8gepk_123";
        divider = "_divider_8gepk_127";
        SSOLogin_vue_vue_type_style_index_0_lang_module_default = {
          ssoLogin,
          divider
        }; //#endregion
        //#region src/features/settings/sso/components/SSOLogin.vue
        cssModules$1 = {
          "$style": SSOLogin_vue_vue_type_style_index_0_lang_module_default
        };
        SSOLogin_default = /* @__PURE__ */__plugin_vue_export_helper_default(SSOLogin_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/core/auth/views/AuthView.vue?vue&type=script&setup=true&lang.ts
        AuthView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AuthView",
          props: {
            form: {},
            formLoading: {
              type: Boolean,
              default: false
            },
            subtitle: {},
            withSso: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update", "submit", "secondaryClick"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const onUpdate = e => {
              emit("update", e);
            };
            const onSubmit = data => {
              emit("submit", data);
            };
            const onSecondaryClick = () => {
              emit("secondaryClick");
            };
            const {
              settings: {
                releaseChannel
              }
            } = useSettingsStore();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nLogo_default), {
                size: "large",
                "release-channel": unref(releaseChannel)
              }, null, 8, ["release-channel"]), _ctx.subtitle ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.textContainer)
              }, [createVNode(unref(N8nText_default), {
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.subtitle), 1)]),
                _: 1
              })], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.formContainer)
              }, [createVNode(unref(N8nFormBox_default), mergeProps(_ctx.form, {
                "data-test-id": "auth-form",
                "button-loading": _ctx.formLoading,
                onSecondaryClick,
                onSubmit,
                onUpdate
              }), {
                default: withCtx(() => [_ctx.withSso ? (openBlock(), createBlock(SSOLogin_default, {
                  key: 0
                })) : createCommentVNode("", true)]),
                _: 1
              }, 16, ["button-loading"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/AuthView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_nroon_127";
        textContainer = "_textContainer_nroon_137";
        formContainer = "_formContainer_nroon_141";
        AuthView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          textContainer,
          formContainer
        }; //#endregion
        //#region src/features/core/auth/views/AuthView.vue
        cssModules = {
          "$style": AuthView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", AuthView_default = /* @__PURE__ */__plugin_vue_export_helper_default(AuthView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();