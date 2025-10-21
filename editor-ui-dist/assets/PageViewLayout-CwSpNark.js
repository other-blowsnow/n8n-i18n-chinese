import { _ as _export_sfc, h as createElementBlock, g as openBlock, Y as renderSlot, j as createBaseVNode, n as normalizeClass } from "./index-lkSN61-i.js";
const wrapper = "_wrapper_e6hlb_123";
const content = "_content_e6hlb_139";
const style0 = {
  wrapper,
  content
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.wrapper)
  }, [
    renderSlot(_ctx.$slots, "header"),
    createBaseVNode("main", {
      class: normalizeClass(_ctx.$style.content)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const cssModules = {
  "$style": style0
};
const PageViewLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules]]);
export {
  PageViewLayout as P
};
