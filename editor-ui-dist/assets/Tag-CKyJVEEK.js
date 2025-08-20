import { d as defineComponent, h as createElementBlock, g as openBlock, K as mergeProps, Q as renderSlot, t as toDisplayString, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nTag" },
  __name: "Tag",
  props: {
    text: {},
    clickable: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", mergeProps({
        class: ["n8n-tag", _ctx.$style.tag, { [_ctx.$style.clickable]: _ctx.clickable }]
      }, _ctx.$attrs), [
        _ctx.$slots["tag"] ? renderSlot(_ctx.$slots, "tag", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.text), 1))
      ], 16);
    };
  }
});
const tag = "_tag_49pvx_123";
const clickable = "_clickable_49pvx_138";
const style0 = {
  tag,
  clickable
};
const cssModules = {
  "$style": style0
};
const Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  Tag as T
};
