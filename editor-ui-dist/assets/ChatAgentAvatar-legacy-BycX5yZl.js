;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./src-legacy-CT0lqlSJ.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./constants-legacy-gArZ_E9E.js", "./CredentialIcon-legacy-Bm9ESCj_.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, unref, defineComponent, createBlock, withCtx, openBlock, createTextVNode, createSlots, normalizeClass, N8nIcon_default, N8nTooltip_default, N8nAvatar_default, __plugin_vue_export_helper_default, useCredentialsStore, PROVIDER_CREDENTIAL_TYPE_MAP, CredentialIcon_default, __vite_style__, ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, avatar, md, credentialsIcon, isReady, ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default, cssModules, ChatAgentAvatar_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nAvatar_default = _srcLegacy007Js.vt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useCredentialsStore = _useTelemetryLegacy00HJs.Ht;
      }, function (_constantsLegacy00TJs) {
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00TJs.Qr;
      }, function (_CredentialIconLegacy02lJs) {
        CredentialIcon_default = _CredentialIconLegacy02lJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._avatar_uup7d_123._md_uup7d_123 {\n  transform: scale(1.2);\n}\n._credentialsIcon_uup7d_127 {\n  visibility: hidden;\n}\n._credentialsIcon_uup7d_127._isReady_uup7d_130 {\n  visibility: visible;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/ChatAgentAvatar.vue?vue&type=script&setup=true&lang.ts
        ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatAgentAvatar",
          props: {
            agent: {},
            size: {},
            tooltip: {
              type: Boolean
            }
          },
          setup(__props) {
            const credentialsStore = useCredentialsStore();
            const isCredentialsIconReady = computed(() => credentialsStore.allCredentialTypes.length > 0);
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                "show-after": 100,
                placement: "left",
                disabled: !_ctx.tooltip
              }, createSlots({
                default: withCtx(() => [!_ctx.agent ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  icon: "messages-square",
                  size: _ctx.size === "lg" ? "xxlarge" : _ctx.size === "sm" ? "large" : "xlarge"
                }, null, 8, ["size"])) : _ctx.agent.model.provider === "custom-agent" || _ctx.agent.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nAvatar_default), {
                  key: 1,
                  class: normalizeClass([_ctx.$style.avatar, _ctx.$style[_ctx.size]]),
                  "first-name": _ctx.agent.name,
                  size: _ctx.size === "lg" ? "medium" : _ctx.size === "sm" ? "xxsmall" : "xsmall"
                }, null, 8, ["class", "first-name", "size"])) : (openBlock(), createBlock(CredentialIcon_default, {
                  key: 2,
                  class: normalizeClass([_ctx.$style.credentialsIcon, {
                    [_ctx.$style.isReady]: isCredentialsIconReady.value
                  }]),
                  "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.agent.model.provider],
                  size: _ctx.size === "sm" ? 16 : _ctx.size === "lg" ? 40 : 20
                }, null, 8, ["class", "credential-type-name", "size"]))]),
                _: 2
              }, [_ctx.agent ? {
                name: "content",
                fn: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.name), 1)]),
                key: "0"
              } : void 0]), 1032, ["disabled"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatAgentAvatar.vue?vue&type=style&index=0&lang.module.scss
        avatar = "_avatar_uup7d_123";
        md = "_md_uup7d_123";
        credentialsIcon = "_credentialsIcon_uup7d_127";
        isReady = "_isReady_uup7d_130";
        ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default = {
          avatar,
          md,
          credentialsIcon,
          isReady
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatAgentAvatar.vue
        cssModules = {
          "$style": ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ChatAgentAvatar_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();