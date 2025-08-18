import { d as defineComponent, W as createEventBus, r as ref, o as onMounted, ci as resolveDirective, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, f as createCommentVNode, e as createBlock, i as createVNode, l as unref, N as N8nIcon, p as N8nText, w as withCtx, k as createTextVNode, t as toDisplayString, Q as renderSlot, F as Fragment, A as renderList, a4 as N8nTooltip, b4 as withDirectives, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nInfoAccordion" },
  __name: "InfoAccordion",
  props: {
    title: {},
    description: {},
    items: { default: () => [] },
    initiallyExpanded: { type: Boolean, default: false },
    headerIcon: {},
    eventBus: { default: () => createEventBus() }
  },
  emits: ["click:body", "tooltipClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const expanded2 = ref(false);
    onMounted(() => {
      props.eventBus.on("expand", () => {
        expanded2.value = true;
      });
      expanded2.value = props.initiallyExpanded;
    });
    const toggle = () => {
      expanded2.value = !expanded2.value;
    };
    const onClick = (e) => emit("click:body", e);
    const onTooltipClick = (item, event) => emit("tooltipClick", item, event);
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["accordion", _ctx.$style.container])
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.header]: true, [_ctx.$style.expanded]: expanded2.value }),
          onClick: toggle
        }, [
          _ctx.headerIcon ? (openBlock(), createBlock(unref(N8nIcon), {
            key: 0,
            icon: _ctx.headerIcon.icon,
            color: _ctx.headerIcon.color,
            size: "small"
          }, null, 8, ["icon", "color"])) : createCommentVNode("", true),
          createVNode(unref(N8nText), {
            class: normalizeClass(_ctx.$style.headerText),
            color: "text-base",
            size: "small",
            align: "left",
            bold: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(unref(N8nIcon), {
            icon: expanded2.value ? "chevron-up" : "chevron-down",
            bold: ""
          }, null, 8, ["icon"])
        ], 2),
        expanded2.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass({ [_ctx.$style.description]: true, [_ctx.$style.collapsed]: !expanded2.value }),
          onClick
        }, [
          _ctx.items.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.accordionItems)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: normalizeClass(_ctx.$style.accordionItem)
              }, [
                createVNode(unref(N8nTooltip), {
                  disabled: !item.tooltip
                }, {
                  content: withCtx(() => [
                    withDirectives(createBaseVNode("div", {
                      onClick: ($event) => onTooltipClick(item.id, $event)
                    }, null, 8, _hoisted_1), [
                      [_directive_n8n_html, item.tooltip]
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(N8nIcon), {
                      icon: item.icon,
                      color: item.iconColor,
                      size: "small",
                      class: "mr-2xs"
                    }, null, 8, ["icon", "color"])
                  ]),
                  _: 2
                }, 1032, ["disabled"]),
                createVNode(unref(N8nText), {
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ], 2);
            }), 128))
          ], 2)) : createCommentVNode("", true),
          createVNode(unref(N8nText), {
            color: "text-base",
            size: "small",
            align: "left"
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("span", null, null, 512), [
                [_directive_n8n_html, _ctx.description]
              ])
            ]),
            _: 1
          }),
          renderSlot(_ctx.$slots, "customContent")
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container = "_container_1phqv_123";
const header = "_header_1phqv_127";
const expanded = "_expanded_1phqv_136";
const accordionItems = "_accordionItems_1phqv_140";
const accordionItem = "_accordionItem_1phqv_140";
const description = "_description_1phqv_152";
const style0 = {
  container,
  header,
  expanded,
  accordionItems,
  accordionItem,
  description
};
const cssModules = {
  "$style": style0
};
const N8nInfoAccordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  N8nInfoAccordion as N
};
