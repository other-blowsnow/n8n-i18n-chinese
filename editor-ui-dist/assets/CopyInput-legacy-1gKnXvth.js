;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useToast-legacy-D8KBGcJW.js", "./useClipboard-legacy-DdtOZJuB.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, normalizeClass, withCtx, openBlock, createBaseVNode, useI18n, N8nInputLabel_default, __plugin_vue_export_helper_default, useToast, useClipboard, __vite_style__, CopyInput_vue_vue_type_script_setup_true_lang_default, copyText, noHover, large, medium, collapsed, copyButton, hint, CopyInput_vue_vue_type_style_index_0_lang_module_default, cssModules, CopyInput_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInputLabel_default = _srcLegacy007Js.Y;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_useClipboardLegacy01nJs) {
        useClipboard = _useClipboardLegacy01nJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._copyText_ih6nn_123 {\n  padding: var(--spacing--xs);\n  background-color: var(--color--background--light-2);\n  border: var(--border);\n  border-radius: var(--radius);\n  cursor: pointer;\n  position: relative;\n  font-weight: var(--font-weight--regular);\n}\n._copyText_ih6nn_123 span {\n  font-family: Monaco, Consolas;\n  color: var(--color--text);\n  overflow-wrap: break-word;\n}\n._copyText_ih6nn_123:hover {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --display-copy-button: flex;\n  width: 100%;\n}\n._noHover_ih6nn_143 {\n  cursor: default;\n}\n._large_ih6nn_147 span {\n  font-size: var(--font-size--sm);\n  line-height: 1.5;\n}\n._medium_ih6nn_152 span {\n  font-size: var(--font-size--xs);\n  line-height: 1;\n}\n._collapsed_ih6nn_157 {\n  white-space: nowrap;\n  overflow: hidden;\n}\n._copyButton_ih6nn_162 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  display: var(--display-copy-button, none);\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: var(--spacing--xs);\n  background-color: var(--color--background--light-2);\n  height: 100%;\n  align-items: center;\n  border-radius: var(--radius);\n}\n._copyButton_ih6nn_162 span {\n  font-family: unset;\n}\n._hint_ih6nn_178 {\n  margin-top: var(--spacing--2xs);\n  font-size: var(--font-size--2xs);\n  line-height: var(--line-height--lg);\n  font-weight: var(--font-weight--regular);\n  word-break: normal;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/CopyInput.vue?vue&type=script&setup=true&lang.ts
        CopyInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CopyInput",
          props: {
            label: {
              default: ""
            },
            hint: {
              default: ""
            },
            value: {
              default: ""
            },
            copyButtonText: {
              default: useI18n().baseText("generic.copy")
            },
            toastTitle: {
              default: useI18n().baseText("generic.copiedToClipboard")
            },
            toastMessage: {},
            size: {
              default: "medium"
            },
            collapse: {
              type: Boolean
            },
            redactValue: {
              type: Boolean
            },
            disableCopy: {
              type: Boolean,
              default: false
            }
          },
          emits: ["copy"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const clipboard = useClipboard();
            const {
              showMessage
            } = useToast();
            function copy() {
              if (props.disableCopy) return;
              emit("copy");
              clipboard.copy(props.value ?? "");
              showMessage({
                title: props.toastTitle,
                message: props.toastMessage,
                type: "success"
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nInputLabel_default), {
                label: _ctx.label
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass({
                    [_ctx.$style.copyText]: true,
                    [_ctx.$style[_ctx.size]]: true,
                    [_ctx.$style.collapsed]: _ctx.collapse,
                    [_ctx.$style.noHover]: _ctx.disableCopy,
                    "ph-no-capture": _ctx.redactValue
                  }),
                  "data-test-id": "copy-input",
                  onClick: copy
                }, [createBaseVNode("span", {
                  ref: "copyInputValue"
                }, toDisplayString(_ctx.value), 513), !_ctx.disableCopy ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.copyButton)
                }, [createBaseVNode("span", null, toDisplayString(_ctx.copyButtonText), 1)], 2)) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["label"]), _ctx.hint ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.hint)
              }, toDisplayString(_ctx.hint), 3)) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/app/components/CopyInput.vue?vue&type=style&index=0&lang.module.scss
        copyText = "_copyText_ih6nn_123";
        noHover = "_noHover_ih6nn_143";
        large = "_large_ih6nn_147";
        medium = "_medium_ih6nn_152";
        collapsed = "_collapsed_ih6nn_157";
        copyButton = "_copyButton_ih6nn_162";
        hint = "_hint_ih6nn_178";
        CopyInput_vue_vue_type_style_index_0_lang_module_default = {
          copyText,
          noHover,
          large,
          medium,
          collapsed,
          copyButton,
          hint
        }; //#endregion
        //#region src/app/components/CopyInput.vue
        cssModules = {
          "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", CopyInput_default = /* @__PURE__ */__plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();