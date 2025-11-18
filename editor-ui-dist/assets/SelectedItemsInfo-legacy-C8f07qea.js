;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, normalizeClass, openBlock, createBaseVNode, useI18n, N8nButton_default, __plugin_vue_export_helper_default, __vite_style__, SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default, selectionOptions, button, SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default, cssModules, SelectedItemsInfo_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Ln;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._selectionOptions_1rr85_123 {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  padding: var(--spacing--2xs);\n  z-index: 2;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: var(--spacing--3xl);\n  background: var(--execution-selector--color--background);\n  border-radius: var(--radius);\n  color: var(--execution-selector--color--text);\n  font-size: var(--font-size--2xs);\n  gap: var(--spacing--2xs);\n}\n._button_1rr85_139 {\n  display: flex;\n  align-items: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/common/SelectedItemsInfo.vue?vue&type=script&setup=true&lang.ts
        SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SelectedItemsInfo",
          props: {
            selectedCount: {}
          },
          emits: ["deleteSelected", "clearSelection"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const getSelectedText = () => {
              return i18n.baseText("generic.list.selected", {
                adjustToNumber: props.selectedCount,
                interpolate: {
                  count: `${props.selectedCount}`
                }
              });
            };
            const getClearSelectionText = () => {
              return i18n.baseText("generic.list.clearSelection");
            };
            const handleDeleteSelected = () => {
              emit("deleteSelected");
            };
            const handleClearSelection = () => {
              emit("clearSelection");
            };
            return (_ctx, _cache) => {
              return _ctx.selectedCount > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.selectionOptions),
                "data-test-id": `selected-items-info`
              }, [createBaseVNode("span", null, toDisplayString(getSelectedText()), 1), createVNode(unref(N8nButton_default), {
                type: "tertiary",
                "data-test-id": "delete-selected-button",
                label: unref(i18n).baseText("generic.delete"),
                class: normalizeClass(_ctx.$style.button),
                onClick: handleDeleteSelected
              }, null, 8, ["label", "class"]), createVNode(unref(N8nButton_default), {
                type: "tertiary",
                "data-test-id": "clear-selection-button",
                label: getClearSelectionText(),
                class: normalizeClass(_ctx.$style.button),
                onClick: handleClearSelection
              }, null, 8, ["label", "class"])], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/common/SelectedItemsInfo.vue?vue&type=style&index=0&lang.module.scss
        selectionOptions = "_selectionOptions_1rr85_123";
        button = "_button_1rr85_139";
        SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default = {
          selectionOptions,
          button
        }; //#endregion
        //#region src/app/components/common/SelectedItemsInfo.vue
        cssModules = {
          "$style": SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", SelectedItemsInfo_default = /* @__PURE__ */__plugin_vue_export_helper_default(SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();