;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./dialog-legacy-ZOm2ObnR.js", "./useTelemetry-legacy-z15msZ3G.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useStyles-legacy-CJudPaTy.js", "./Modal-legacy-C_BRQNW_.js", "./CredentialIcon-legacy-BDJvL2pe.js", "./constants-legacy-CDt9VJ1s.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, unref, ref, createVNode, defineComponent, createBlock, Fragment, withCtx, openBlock, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nSelect_default, N8nOption_default, N8nText_default, N8nHeading_default, N8nButton_default, __plugin_vue_export_helper_default, createEventBus, useCredentialsStore, PROVIDER_CREDENTIAL_TYPE_MAP, Modal_default, CredentialIcon_default, providerDisplayNames, __vite_style__, CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, content, footer, footerRight, header, icon, CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default, cssModules, CredentialSelectorModal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nSelect_default = _srcLegacy007Js.G;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Kn;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nButton_default = _srcLegacy007Js.qn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_dialogLegacy00DJs) {}, function (_useTelemetryLegacy00HJs) {
        useCredentialsStore = _useTelemetryLegacy00HJs.Bt;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00RJs.Zr;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useStylesLegacy013Js) {}, function (_ModalLegacy01RJs) {
        Modal_default = _ModalLegacy01RJs.t;
      }, function (_CredentialIconLegacy02jJs) {
        CredentialIcon_default = _CredentialIconLegacy02jJs.t;
      }, function (_constantsLegacy03jJs) {
        providerDisplayNames = _constantsLegacy03jJs.f;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_1ja21_123 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--sm) 0;\n}\n._footer_1ja21_130 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_1ja21_137 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}\n._header_1ja21_142 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._icon_1ja21_148 {\n  flex-shrink: 0;\n  flex-grow: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue?vue&type=script&setup=true&lang.ts
        CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialSelectorModal",
          props: {
            modalName: {},
            data: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const credentialsStore = useCredentialsStore();
            const modalBus = ref(createEventBus());
            const selectedCredentialId = ref(props.data.initialValue);
            const availableCredentials = computed(() => {
              return credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[props.data.provider]);
            });
            function onCredentialSelect(credentialId) {
              selectedCredentialId.value = credentialId;
            }
            function onConfirm() {
              if (selectedCredentialId.value) {
                props.data.onSelect(props.data.provider, selectedCredentialId.value);
                modalBus.value.emit("close");
              }
            }
            function onCreateNew() {
              props.data.onCreateNew(props.data.provider);
              modalBus.value.emit("close");
            }
            function onCancel() {
              modalBus.value.emit("close");
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: _ctx.modalName,
                "event-bus": modalBus.value,
                width: "50%",
                center: true,
                "max-width": "460px",
                "min-height": "250px"
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(CredentialIcon_default, {
                  "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.data.provider],
                  size: 24,
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
                  size: "medium",
                  tag: "h2",
                  class: normalizeClass(_ctx.$style.title)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.title", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[_ctx.data.provider]
                    }
                  })), 1)]),
                  _: 1
                }, 8, ["class"])], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.chooseOrCreate", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[_ctx.data.provider]
                    }
                  })), 1)]),
                  _: 1
                }), createVNode(unref(N8nSelect_default), {
                  "model-value": selectedCredentialId.value,
                  size: "large",
                  placeholder: "Select credential...",
                  "onUpdate:modelValue": onCredentialSelect
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableCredentials.value, credential => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: credential.id,
                      value: credential.id,
                      label: credential.name
                    }, null, 8, ["value", "label"]);
                  }), 128))]),
                  _: 1
                }, 8, ["model-value"])], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  onClick: onCreateNew
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.createNew")), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerRight)
                }, [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  onClick: onCancel
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: !selectedCredentialId.value,
                  onClick: onConfirm
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.confirm")), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)], 2)]),
                _: 1
              }, 8, ["name", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_1ja21_123";
        footer = "_footer_1ja21_130";
        footerRight = "_footerRight_1ja21_137";
        header = "_header_1ja21_142";
        icon = "_icon_1ja21_148";
        CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
          content,
          footer,
          footerRight,
          header,
          icon
        }; //#endregion
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue
        cssModules = {
          "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", CredentialSelectorModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();