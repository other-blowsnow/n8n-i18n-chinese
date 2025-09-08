import { d as defineComponent, h as createElementBlock, f as createCommentVNode, g as openBlock, n as normalizeClass, j as createBaseVNode, i as createVNode, t as toDisplayString, l as unref, q as N8nButton, c as useI18n, _ as _export_sfc } from "./index-DfVt-3V5.js";
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
          label: unref(i18n).baseText("generic.delete"),
          type: "tertiary",
          "data-test-id": "delete-selected-button",
          onClick: handleDeleteSelected
        }, null, 8, ["label"]),
        createVNode(unref(N8nButton), {
          label: getClearSelectionText(),
          type: "tertiary",
          "data-test-id": "clear-selection-button",
          onClick: handleClearSelection
        }, null, 8, ["label"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const selectionOptions = "_selectionOptions_7ou6i_123";
const style0 = {
  selectionOptions
};
const cssModules = {
  "$style": style0
};
const SelectedItemsInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SelectedItemsInfo as S
};
