import { d as defineComponent, r as ref, x as computed, h as createElementBlock, g as openBlock, n as normalizeClass, e as createBlock, f as createCommentVNode, F as Fragment, A as renderList, l as unref, C as N8nLink, B as withModifiers, w as withCtx, k as createTextVNode, t as toDisplayString, D as useI18n, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { T as Tag } from "./Tag-CKyJVEEK.js";
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
        (openBlock(true), createElementBlock(Fragment, null, renderList(visibleTags.value, (tag) => {
          return openBlock(), createBlock(unref(Tag), {
            key: tag.id,
            text: tag.name,
            clickable: _ctx.clickable,
            onClick: ($event) => emit("click:tag", tag.id, $event)
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
