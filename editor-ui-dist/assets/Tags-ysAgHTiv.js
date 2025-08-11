import { d as defineComponent, h as createElementBlock, g as openBlock, D as mergeProps, J as renderSlot, t as toDisplayString, _ as _export_sfc, r as ref, x as computed, n as normalizeClass, e as createBlock, f as createCommentVNode, F as Fragment, y as renderList, l as unref, a2 as N8nLink, bS as withModifiers, w as withCtx, k as createTextVNode, c$ as useI18n } from "./index-MSgOD_Ak.js";
const _hoisted_1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const style0$1 = {
  tag,
  clickable
};
const cssModules$1 = {
  "$style": style0$1
};
const Tag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nTags" },
  __name: "Tags",
  props: {
    tags: { default: () => [] },
    truncate: { type: Boolean, default: false },
    truncateAt: { default: 3 },
    clickable: { type: Boolean, default: true }
  },
  emits: ["expand", "click:tag"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const showAll = ref(false);
    const visibleTags = computed(() => {
      const { tags: tags2, truncate, truncateAt } = props;
      if (truncate && !showAll.value && tags2.length > truncateAt) {
        return tags2.slice(0, truncateAt);
      }
      return tags2;
    });
    const hiddenTagsLength = computed(() => props.tags.length - props.truncateAt);
    const onExpand = () => {
      showAll.value = true;
      emit("expand", true);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["n8n-tags", _ctx.$style.tags])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(visibleTags.value, (tag2) => {
          return openBlock(), createBlock(unref(Tag), {
            key: tag2.id,
            text: tag2.name,
            clickable: _ctx.clickable,
            onClick: ($event) => emit("click:tag", tag2.id, $event)
          }, null, 8, ["text", "clickable", "onClick"]);
        }), 128)),
        _ctx.truncate && !showAll.value && hiddenTagsLength.value > 0 ? (openBlock(), createBlock(unref(N8nLink), {
          key: 0,
          theme: "text",
          underline: "",
          size: "small",
          onClick: withModifiers(onExpand, ["stop", "prevent"])
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("tags.showMore", [`${hiddenTagsLength.value}`])), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const tags = "_tags_1q3u8_123";
const style0 = {
  tags
};
const cssModules = {
  "$style": style0
};
const Tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  Tags as T
};
