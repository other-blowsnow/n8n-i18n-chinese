;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./KeyboardShortcutTooltip-legacy-ZyxuvJWt.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, withCtx, openBlock, withModifiers, useI18n, N8nButton_default, __plugin_vue_export_helper_default, KeyboardShortcutTooltip_default, __vite_style__, SaveButton_vue_vue_type_script_setup_true_lang_default, container, button, saved, SaveButton_vue_vue_type_style_index_0_lang_module_default, cssModules, SaveButton_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Ln;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_KeyboardShortcutTooltipLegacy01xJs) {
        KeyboardShortcutTooltip_default = _KeyboardShortcutTooltipLegacy01xJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_cqvm4_123 {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n}\n._button_cqvm4_130 {\n  height: 30px;\n}\n._saved_cqvm4_134 {\n  color: var(--color--text--tint-1);\n  font-size: 12px;\n  font-weight: var(--font-weight--bold);\n  line-height: 12px;\n  text-align: center;\n  padding: var(--spacing--2xs) var(--spacing--2xs);\n  min-width: 53px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/SaveButton.vue?vue&type=script&setup=true&lang.ts
        SaveButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SaveButton",
          props: {
            saved: {
              type: Boolean
            },
            isSaving: {
              type: Boolean,
              default: false
            },
            disabled: {
              type: Boolean,
              default: false
            },
            type: {
              default: "primary"
            },
            withShortcut: {
              type: Boolean,
              default: false
            },
            shortcutTooltip: {},
            savingLabel: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const saveButtonLabel = computed(() => {
              return props.isSaving ? props.savingLabel ?? i18n.baseText("saveButton.saving") : i18n.baseText("saveButton.save");
            });
            const shortcutTooltipLabel = computed(() => {
              return props.shortcutTooltip ?? i18n.baseText("saveButton.save");
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", {
                class: normalizeClass(_ctx.$style.container),
                "data-test-id": "save-button"
              }, [_ctx.saved ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.saved),
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent", "stop"]))
              }, toDisplayString(unref(i18n).baseText("saveButton.saved")), 3)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [_ctx.withShortcut ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                key: 0,
                label: shortcutTooltipLabel.value,
                shortcut: {
                  keys: ["s"],
                  metaKey: true
                },
                placement: "bottom"
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  label: saveButtonLabel.value,
                  loading: _ctx.isSaving,
                  disabled: _ctx.disabled,
                  class: normalizeClass(_ctx.$style.button),
                  type: _ctx.type
                }, null, 8, ["label", "loading", "disabled", "class", "type"])]),
                _: 1
              }, 8, ["label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                label: saveButtonLabel.value,
                loading: _ctx.isSaving,
                disabled: _ctx.disabled,
                class: normalizeClass(_ctx.$style.button),
                type: _ctx.type
              }, null, 8, ["label", "loading", "disabled", "class", "type"]))], 64))], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/SaveButton.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_cqvm4_123";
        button = "_button_cqvm4_130";
        saved = "_saved_cqvm4_134";
        SaveButton_vue_vue_type_style_index_0_lang_module_default = {
          container,
          button,
          saved
        }; //#endregion
        //#region src/app/components/SaveButton.vue
        cssModules = {
          "$style": SaveButton_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", SaveButton_default = /* @__PURE__ */__plugin_vue_export_helper_default(SaveButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();