import { d as defineComponent, r as ref, x as computed, a8 as watch, h as createElementBlock, g as openBlock, n as normalizeClass, Y as renderSlot, j as createBaseVNode, f as createCommentVNode, t as toDisplayString, e as createBlock, i as createVNode, l as unref, eh as N8nActionToggle, w as withCtx, p as N8nText, k as createTextVNode, aa as Tooltip, dO as N8nLoading, F as Fragment, A as renderList, B as withModifiers, C as N8nLink, _ as _export_sfc, aG as ProjectTypes, fv as isIconOrEmoji, c as useI18n, fw as __unplugin_components_0$1 } from "./index-B7kv83gZ.js";
const _hoisted_1 = { "data-test-id": "hidden-items-tooltip" };
const _hoisted_2 = ["title", "data-resourceid", "onClick", "onMouseenter", "onMouseup"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nBreadcrumbs" },
  __name: "Breadcrumbs",
  props: {
    items: {},
    hiddenItems: { default: () => new Array() },
    theme: { default: "medium" },
    showBorder: { type: Boolean, default: false },
    loadingSkeletonRows: { default: 3 },
    separator: { default: "/" },
    highlightLastItem: { type: Boolean, default: true },
    hiddenItemsTrigger: { default: "click" },
    pathTruncated: { type: Boolean, default: false },
    dragActive: { type: Boolean, default: false }
  },
  emits: ["tooltipOpened", "tooltipClosed", "hiddenItemsLoadingError", "itemSelected", "itemHover", "itemDrop"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const loadedHiddenItems = ref([]);
    const isLoadingHiddenItems = ref(false);
    const currentPromise = ref(null);
    const hasHiddenItems = computed(() => {
      return Array.isArray(props.hiddenItems) ? props.hiddenItems.length > 0 : props.hiddenItems !== void 0;
    });
    const showEllipsis = computed(() => {
      return props.items.length && (hasHiddenItems.value || props.pathTruncated);
    });
    const dropdownDisabled = computed(() => {
      return props.pathTruncated && !hasHiddenItems.value;
    });
    const hiddenItemActions = computed(() => {
      return loadedHiddenItems.value.map((item2) => ({
        value: item2.id,
        label: item2.label,
        disabled: false
      }));
    });
    const getHiddenItems = async () => {
      if (loadedHiddenItems.value.length > 0 && props.hiddenItems === currentPromise.value) {
        return;
      }
      if (Array.isArray(props.hiddenItems)) {
        loadedHiddenItems.value = props.hiddenItems;
        return;
      }
      isLoadingHiddenItems.value = true;
      try {
        currentPromise.value = props.hiddenItems;
        const items = await props.hiddenItems;
        loadedHiddenItems.value = items;
      } catch (error) {
        loadedHiddenItems.value = [];
        emit("hiddenItemsLoadingError", error);
      } finally {
        isLoadingHiddenItems.value = false;
      }
    };
    watch(
      () => props.hiddenItems,
      (_newValue) => {
        void getHiddenItems();
      }
    );
    const onHiddenMenuVisibleChange = async (visible) => {
      if (visible) {
        emit("tooltipOpened");
        await getHiddenItems();
      } else {
        emit("tooltipClosed");
      }
    };
    const emitItemSelected = (id) => {
      const item2 = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === id);
      if (!item2) {
        return;
      }
      emit("itemSelected", item2);
    };
    const emitItemHover = (id) => {
      const item2 = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === id);
      if (!item2) {
        return;
      }
      emit("itemHover", item2);
    };
    const onHiddenItemMouseUp = (item2) => {
      const pathItem = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === item2.value);
      if (!pathItem || !props.dragActive) {
        return;
      }
      emit("itemDrop", pathItem);
    };
    const onItemMouseUp = (item2) => {
      if (!props.dragActive) {
        return;
      }
      emit("itemDrop", item2);
    };
    const handleTooltipShow = async () => {
      emit("tooltipOpened");
      await getHiddenItems();
    };
    const handleTooltipClose = () => {
      emit("tooltipClosed");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({
          [_ctx.$style.container]: true,
          [_ctx.$style.border]: props.showBorder,
          [_ctx.$style[props.theme]]: true,
          ["n8n-breadcrumbs"]: true
        })
      }, [
        renderSlot(_ctx.$slots, "prepend"),
        createBaseVNode("ul", {
          class: normalizeClass(_ctx.$style.list)
        }, [
          _ctx.$slots.prepend && _ctx.items.length ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(_ctx.$style.separator)
          }, toDisplayString(_ctx.separator), 3)) : createCommentVNode("", true),
          showEllipsis.value ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass({ [_ctx.$style.ellipsis]: true, [_ctx.$style.disabled]: dropdownDisabled.value }),
            "data-test-id": "ellipsis"
          }, [
            props.theme !== "small" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style["hidden-items-menu"])
            }, [
              createVNode(unref(N8nActionToggle), {
                actions: hiddenItemActions.value,
                loading: isLoadingHiddenItems.value,
                "loading-row-count": _ctx.loadingSkeletonRows,
                disabled: dropdownDisabled.value,
                class: normalizeClass(_ctx.$style["action-toggle"]),
                "popper-class": `${_ctx.$style["hidden-items-menu-popper"]} ${_ctx.dragActive ? _ctx.$style.dragging : ""}`,
                trigger: _ctx.hiddenItemsTrigger,
                theme: "dark",
                placement: "bottom",
                size: "small",
                "icon-orientation": "horizontal",
                "data-test-id": "hidden-items-menu",
                onVisibleChange: onHiddenMenuVisibleChange,
                onAction: emitItemSelected,
                onItemMouseup: onHiddenItemMouseUp
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nText), {
                    bold: true,
                    class: normalizeClass(_ctx.$style.dots)
                  }, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("...")
                    ])),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }, 8, ["actions", "loading", "loading-row-count", "disabled", "class", "popper-class", "trigger"])
            ], 2)) : (openBlock(), createBlock(unref(Tooltip), {
              key: 1,
              "popper-class": _ctx.$style.tooltip,
              disabled: dropdownDisabled.value,
              trigger: _ctx.hiddenItemsTrigger,
              placement: "bottom",
              onBeforeShow: handleTooltipShow,
              onHide: handleTooltipClose
            }, {
              content: withCtx(() => [
                isLoadingHiddenItems.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style["tooltip-loading"])
                }, [
                  createVNode(unref(N8nLoading), {
                    rows: 1,
                    loading: isLoadingHiddenItems.value,
                    animated: "",
                    variant: "p",
                    "shrink-last": false
                  }, null, 8, ["loading"])
                ], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.tooltipContent)
                }, [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(unref(N8nText), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(loadedHiddenItems.value.map((item2) => item2.label).join(" / ")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ], 2))
              ]),
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style["tooltip-ellipsis"])
                }, "...", 2)
              ]),
              _: 1
            }, 8, ["popper-class", "disabled", "trigger"]))
          ], 2)) : createCommentVNode("", true),
          showEllipsis.value ? (openBlock(), createElementBlock("li", {
            key: 2,
            class: normalizeClass(_ctx.$style.separator)
          }, toDisplayString(_ctx.separator), 3)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item2, index) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item2.id
            }, [
              createBaseVNode("li", {
                class: normalizeClass({
                  [_ctx.$style.item]: true,
                  [_ctx.$style.current]: props.highlightLastItem && index === _ctx.items.length - 1,
                  [_ctx.$style.dragging]: props.dragActive
                }),
                title: item2.label,
                "data-resourceid": item2.id,
                "data-test-id": "breadcrumbs-item",
                "data-target": "folder-breadcrumb-item",
                onClick: withModifiers(($event) => emitItemSelected(item2.id), ["prevent"]),
                onMouseenter: ($event) => emitItemHover(item2.id),
                onMouseup: ($event) => onItemMouseUp(item2)
              }, [
                item2.href ? (openBlock(), createBlock(unref(N8nLink), {
                  key: 0,
                  href: item2.href,
                  theme: "text"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item2.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href"])) : (openBlock(), createBlock(unref(N8nText), { key: 1 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item2.label), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 42, _hoisted_2),
              index !== _ctx.items.length - 1 ? (openBlock(), createElementBlock("li", {
                key: 0,
                class: normalizeClass(_ctx.$style.separator)
              }, toDisplayString(_ctx.separator), 3)) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ], 2),
        renderSlot(_ctx.$slots, "append")
      ], 2);
    };
  }
});
const container = "_container_1kcxp_123";
const small = "_small_1kcxp_127";
const border = "_border_1kcxp_131";
const list = "_list_1kcxp_136";
const item = "_item_1kcxp_142";
const dragging$1 = "_dragging_1kcxp_146";
const current = "_current_1kcxp_162";
const ellipsis = "_ellipsis_1kcxp_166";
const dots = "_dots_1kcxp_166";
const disabled = "_disabled_1kcxp_172";
const tooltip = "_tooltip_1kcxp_167";
const separator = "_separator_1kcxp_257";
const medium = "_medium_1kcxp_262";
const style0$1 = {
  container,
  small,
  border,
  list,
  item,
  dragging: dragging$1,
  current,
  ellipsis,
  dots,
  "tooltip-ellipsis": "_tooltip-ellipsis_1kcxp_167",
  disabled,
  "hidden-items-menu": "_hidden-items-menu_1kcxp_184",
  "hidden-items-menu-popper": "_hidden-items-menu-popper_1kcxp_189",
  "tooltip-loading": "_tooltip-loading_1kcxp_205",
  tooltip,
  separator,
  medium
};
const cssModules$1 = {
  "$style": style0$1
};
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectBreadcrumb",
  props: {
    currentProject: {},
    isDragging: { type: Boolean, default: false }
  },
  emits: ["projectHover", "projectDrop"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const projectIcon = computed(() => {
      if (props.currentProject?.type === ProjectTypes.Personal) {
        return { type: "icon", value: "user" };
      } else if (props.currentProject?.name) {
        return isIconOrEmoji(props.currentProject.icon) ? props.currentProject.icon : { type: "icon", value: "layers" };
      } else {
        return { type: "icon", value: "house" };
      }
    });
    const projectName = computed(() => {
      if (props.currentProject.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      }
      return props.currentProject.name;
    });
    const onHover = () => {
      emit("projectHover");
    };
    const onProjectMouseUp = () => {
      if (props.isDragging) {
        emit("projectDrop");
      }
    };
    return (_ctx, _cache) => {
      const _component_ProjectIcon = __unplugin_components_0$1;
      const _component_N8nText = N8nText;
      const _component_n8n_link = N8nLink;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ [_ctx.$style["home-project"]]: true, [_ctx.$style.dragging]: _ctx.isDragging }),
        "data-test-id": "home-project",
        onMouseenter: onHover,
        onMouseup: _cache[0] || (_cache[0] = ($event) => _ctx.isDragging ? onProjectMouseUp() : null)
      }, [
        createVNode(_component_n8n_link, {
          to: `/projects/${_ctx.currentProject.id}`,
          class: normalizeClass([_ctx.$style["project-link"]])
        }, {
          default: withCtx(() => [
            createVNode(_component_ProjectIcon, {
              icon: projectIcon.value,
              "border-less": true,
              size: "mini",
              title: projectName.value
            }, null, 8, ["icon", "title"]),
            createVNode(_component_N8nText, {
              size: "medium",
              color: "text-base",
              class: normalizeClass(_ctx.$style["project-label"])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(projectName.value), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["to", "class"])
      ], 34);
    };
  }
});
const dragging = "_dragging_1gp09_128";
const style0 = {
  "home-project": "_home-project_1gp09_123",
  dragging,
  "project-link": "_project-link_1gp09_141",
  "project-label": "_project-label_1gp09_148"
};
const cssModules = {
  "$style": style0
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  Breadcrumbs as B,
  __unplugin_components_0 as _
};
