import { d as defineComponent, h as createElementBlock, f as createCommentVNode, g as openBlock, n as normalizeClass, j as createBaseVNode, i as createVNode, t as toDisplayString, l as unref, q as N8nButton, c as useI18n, _ as _export_sfc } from "./index-PdEQe4H7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectedItemsInfo",
  props: {
    selectedCount: {}
  },
  emits: ["deleteSelected", "clearSelection"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const getSelectedText = () => {
      return i18n.baseText("generic.list.selected", {
        adjustToNumber: props.selectedCount,
        interpolate: { count: `${props.selectedCount}` }
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
      }, [
        createBaseVNode("span", null, toDisplayString(getSelectedText()), 1),
        createVNode(unref(N8nButton), {
          type: "tertiary",
          "data-test-id": "delete-selected-button",
          label: unref(i18n).baseText("generic.delete"),
          class: normalizeClass(_ctx.$style.button),
          onClick: handleDeleteSelected
        }, null, 8, ["label", "class"]),
        createVNode(unref(N8nButton), {
          type: "tertiary",
          "data-test-id": "clear-selection-button",
          label: getClearSelectionText(),
          class: normalizeClass(_ctx.$style.button),
          onClick: handleClearSelection
        }, null, 8, ["label", "class"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const selectionOptions = "_selectionOptions_16kal_123";
const button = "_button_16kal_139";
const style0 = {
  selectionOptions,
  button
};
const cssModules = {
  "$style": style0
};
const SelectedItemsInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SelectedItemsInfo as S
};
