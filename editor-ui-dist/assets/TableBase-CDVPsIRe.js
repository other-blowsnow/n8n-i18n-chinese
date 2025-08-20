import { _ as _export_sfc, h as createElementBlock, g as openBlock, j as createBaseVNode, Q as renderSlot, n as normalizeClass } from "./index-BsWH3eYA.js";
const n8nTableScroll = "_n8nTableScroll_28kfv_123";
const n8nTable = "_n8nTable_28kfv_123";
const style0 = {
  n8nTableScroll,
  n8nTable
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.n8nTable)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$style.n8nTableScroll)
    }, [
      createBaseVNode("table", null, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 2)
  ], 2);
}
const cssModules = {
  "$style": style0
};
const N8nTableBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules]]);
export {
  N8nTableBase as N
};
