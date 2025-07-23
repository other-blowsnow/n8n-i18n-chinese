import { d as defineComponent, c1 as useAttrs, ab as useCssModule, r as ref, x as computed, h as createElementBlock, g as openBlock, n as normalizeClass, l as unref, i as createVNode, E as ElDropdown, w as withCtx, J as renderSlot, e as createBlock, a0 as _sfc_main$1, A as ElDropdownMenu, F as Fragment, y as renderList, j as createBaseVNode, f as createCommentVNode, N as N8nIcon, k as createTextVNode, t as toDisplayString, D as mergeProps, av as N8nBadge, fs as N8nKeyboardShortcut, B as ElDropdownItem, _ as _export_sfc } from "./index-BSyItHSy.js";
const _hoisted_1 = ["data-test-id"];
const _hoisted_2 = { key: 2 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActionDropdown",
  props: {
    items: {},
    placement: { default: "bottom" },
    activatorIcon: { default: "ellipsis" },
    activatorSize: { default: "medium" },
    iconSize: { default: "medium" },
    trigger: { default: "click" },
    hideArrow: { type: Boolean, default: false },
    teleported: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false }
  },
  emits: ["select", "visibleChange"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const testIdPrefix = attrs["data-test-id"];
    const $style = useCssModule();
    const getItemClasses = (item) => {
      return {
        [$style.itemContainer]: true,
        [$style.disabled]: !!item.disabled,
        [$style.hasCustomStyling]: item.customClass !== void 0,
        ...item.customClass !== void 0 ? { [item.customClass]: true } : {}
      };
    };
    const emit = __emit;
    const elementDropdown = ref();
    const popperClass = computed(
      () => `${$style.shadow}${props.hideArrow ? ` ${$style.hideArrow}` : ""}`
    );
    const onSelect = (action) => emit("select", action);
    const onVisibleChange = (open2) => emit("visibleChange", open2);
    const onButtonBlur = (event) => {
      if (elementDropdown.value?.handleClose && event.relatedTarget === null) {
        elementDropdown.value.handleClose();
      }
    };
    const open = () => elementDropdown.value?.handleOpen();
    const close = () => elementDropdown.value?.handleClose();
    __expose({ open, close });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["action-dropdown-container", unref($style).actionDropdownContainer])
      }, [
        createVNode(unref(ElDropdown), {
          ref_key: "elementDropdown",
          ref: elementDropdown,
          placement: _ctx.placement,
          trigger: _ctx.trigger,
          "popper-class": popperClass.value,
          teleported: _ctx.teleported,
          disabled: _ctx.disabled,
          onCommand: onSelect,
          onVisibleChange
        }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), {
              class: normalizeClass(unref($style).userActionsMenu)
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
                  return openBlock(), createBlock(unref(ElDropdownItem), {
                    key: item.id,
                    command: item.id,
                    disabled: item.disabled,
                    divided: item.divided,
                    class: normalizeClass(unref($style).elementItem)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass(getItemClasses(item)),
                        "data-test-id": `${unref(testIdPrefix)}-item-${item.id}`
                      }, [
                        item.icon ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          class: normalizeClass(unref($style).icon)
                        }, [
                          createVNode(unref(N8nIcon), {
                            icon: item.icon,
                            size: _ctx.iconSize
                          }, null, 8, ["icon", "size"])
                        ], 2)) : createCommentVNode("", true),
                        createBaseVNode("span", {
                          class: normalizeClass(unref($style).label)
                        }, [
                          renderSlot(_ctx.$slots, "menuItem", mergeProps({ ref_for: true }, item), () => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ])
                        ], 2),
                        item.checked ? (openBlock(), createBlock(unref(N8nIcon), {
                          key: 1,
                          icon: "check",
                          size: _ctx.iconSize
                        }, null, 8, ["size"])) : createCommentVNode("", true),
                        item.badge ? (openBlock(), createElementBlock("span", _hoisted_2, [
                          createVNode(unref(N8nBadge), mergeProps({
                            theme: "primary",
                            size: "xsmall",
                            ref_for: true
                          }, item.badgeProps), {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.badge), 1)
                            ]),
                            _: 2
                          }, 1040)
                        ])) : createCommentVNode("", true),
                        item.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut), mergeProps({
                          key: 3,
                          ref_for: true
                        }, item.shortcut, {
                          class: unref($style).shortcut
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ], 10, _hoisted_1)
                    ]),
                    _: 2
                  }, 1032, ["command", "disabled", "divided", "class"]);
                }), 128))
              ]),
              _: 3
            }, 8, ["class"])
          ]),
          default: withCtx(() => [
            _ctx.$slots.activator ? renderSlot(_ctx.$slots, "activator", { key: 0 }) : (openBlock(), createBlock(unref(_sfc_main$1), {
              key: 1,
              type: "tertiary",
              text: "",
              class: normalizeClass(unref($style).activator),
              size: _ctx.activatorSize,
              icon: _ctx.activatorIcon,
              onBlur: onButtonBlur
            }, null, 8, ["class", "size", "icon"]))
          ]),
          _: 3
        }, 8, ["placement", "trigger", "popper-class", "teleported", "disabled"])
      ], 2);
    };
  }
});
const userActionsMenu = "_userActionsMenu_1bu0w_123";
const elementItem = "_elementItem_1bu0w_127";
const hideArrow = "_hideArrow_1bu0w_131";
const shadow = "_shadow_1bu0w_135";
const activator = "_activator_1bu0w_139";
const itemContainer = "_itemContainer_1bu0w_143";
const disabled = "_disabled_1bu0w_152";
const shortcut = "_shortcut_1bu0w_152";
const icon = "_icon_1bu0w_156";
const hasCustomStyling = "_hasCustomStyling_1bu0w_168";
const style0 = {
  userActionsMenu,
  elementItem,
  hideArrow,
  shadow,
  activator,
  itemContainer,
  disabled,
  shortcut,
  icon,
  hasCustomStyling
};
const cssModules = {
  "$style": style0
};
const N8nActionDropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  N8nActionDropdown as N
};
