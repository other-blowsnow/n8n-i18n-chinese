;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, mergeProps, onMounted, normalizeClass, renderSlot, Teleport, withCtx, openBlock, withModifiers, Transition, resolveComponent, vShow, createBaseVNode, withDirectives, useDeprecated, ElFocusTrap, useLocale, addUnit, buildProps, useNamespace, close_default, withInstall, _export_sfc, ElIcon, ElOverlay, dialogProps, useDialog, dialogEmits, useUIStore, __vite_style__, drawerProps, drawerEmits, _sfc_main, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, Drawer, ElDrawer, ModalDrawer_vue_vue_type_script_setup_true_lang_default, ModalDrawer_default;
    function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_close = resolveComponent("close");
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_focus_trap = resolveComponent("el-focus-trap");
      const _component_el_overlay = resolveComponent("el-overlay");
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [createVNode(Transition, {
        name: _ctx.ns.b("fade"),
        onAfterEnter: _ctx.afterEnter,
        onAfterLeave: _ctx.afterLeave,
        onBeforeLeave: _ctx.beforeLeave,
        persisted: ""
      }, {
        default: withCtx(() => [withDirectives(createVNode(_component_el_overlay, {
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex,
          onClick: _ctx.onModalClick
        }, {
          default: withCtx(() => [createVNode(_component_el_focus_trap, {
            loop: "",
            trapped: _ctx.visible,
            "focus-trap-el": _ctx.drawerRef,
            "focus-start-el": _ctx.focusStartRef,
            onReleaseRequested: _ctx.onCloseRequested
          }, {
            default: withCtx(() => [createBaseVNode("div", mergeProps({
              ref: "drawerRef",
              "aria-modal": "true",
              "aria-label": _ctx.title || void 0,
              "aria-labelledby": !_ctx.title ? _ctx.titleId : void 0,
              "aria-describedby": _ctx.bodyId
            }, _ctx.$attrs, {
              class: [_ctx.ns.b(), _ctx.direction, _ctx.visible && "open", _ctx.customClass],
              style: _ctx.isHorizontal ? "width: " + _ctx.drawerSize : "height: " + _ctx.drawerSize,
              role: "dialog",
              onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
            }), [createBaseVNode("span", {
              ref: "focusStartRef",
              class: normalizeClass(_ctx.ns.e("sr-focus")),
              tabindex: "-1"
            }, null, 2), _ctx.withHeader ? (openBlock(), createElementBlock("header", {
              key: 0,
              class: normalizeClass(_ctx.ns.e("header"))
            }, [!_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
              key: 0,
              close: _ctx.handleClose,
              titleId: _ctx.titleId,
              titleClass: _ctx.ns.e("title")
            }, () => [!_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
              key: 0,
              id: _ctx.titleId,
              role: "heading",
              "aria-level": _ctx.headerAriaLevel,
              class: normalizeClass(_ctx.ns.e("title"))
            }, toDisplayString(_ctx.title), 11, _hoisted_2)) : createCommentVNode("v-if", true)]) : renderSlot(_ctx.$slots, "title", {
              key: 1
            }, () => [createCommentVNode(" DEPRECATED SLOT ")]), _ctx.showClose ? (openBlock(), createElementBlock("button", {
              key: 2,
              "aria-label": _ctx.t("el.drawer.close"),
              class: normalizeClass(_ctx.ns.e("close-btn")),
              type: "button",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
            }, [createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("close"))
            }, {
              default: withCtx(() => [createVNode(_component_close)]),
              _: 1
            }, 8, ["class"])], 10, _hoisted_3)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), _ctx.rendered ? (openBlock(), createElementBlock("div", {
              key: 1,
              id: _ctx.bodyId,
              class: normalizeClass(_ctx.ns.e("body"))
            }, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_4)) : createCommentVNode("v-if", true), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.ns.e("footer"))
            }, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("v-if", true)], 16, _hoisted_1)]),
            _: 3
          }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [[vShow, _ctx.visible]])]),
        _: 3
      }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])], 8, ["disabled"]);
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        Teleport = _vueRuntimeEsmBundlerLegacy003Js.b;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_srcLegacy007Js) {
        useDeprecated = _srcLegacy007Js.in;
        ElFocusTrap = _srcLegacy007Js.qt;
      }, function (_truncateLegacy00hJs) {
        useLocale = _truncateLegacy00hJs.A;
        addUnit = _truncateLegacy00hJs.L;
        buildProps = _truncateLegacy00hJs.P;
        useNamespace = _truncateLegacy00hJs.k;
      }, function (_iconLegacy00lJs) {
        close_default = _iconLegacy00lJs.b;
        withInstall = _iconLegacy00lJs.i;
        _export_sfc = _iconLegacy00lJs.n;
        ElIcon = _iconLegacy00lJs.t;
      }, function (_overlayLegacy00pJs) {
        ElOverlay = _overlayLegacy00pJs.t;
      }, function (_dialogLegacy00BJs) {
        dialogProps = _dialogLegacy00BJs.i;
        useDialog = _dialogLegacy00BJs.n;
        dialogEmits = _dialogLegacy00BJs.r;
      }, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.el-drawer__header {\n  margin: 0;\n  padding: 30px 30px 0;\n}\n.el-drawer__body {\n  overflow: hidden;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/drawer/src/drawer.mjs
        drawerProps = buildProps({
          ...dialogProps,
          direction: {
            type: String,
            default: "rtl",
            values: ["ltr", "rtl", "ttb", "btt"]
          },
          size: {
            type: [String, Number],
            default: "30%"
          },
          withHeader: {
            type: Boolean,
            default: true
          },
          modalFade: {
            type: Boolean,
            default: true
          },
          headerAriaLevel: {
            type: String,
            default: "2"
          }
        });
        drawerEmits = dialogEmits; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/drawer/src/drawer2.mjs
        _sfc_main = defineComponent({
          name: "ElDrawer",
          components: {
            ElOverlay,
            ElFocusTrap,
            ElIcon,
            Close: close_default
          },
          inheritAttrs: false,
          props: drawerProps,
          emits: drawerEmits,
          setup(props, {
            slots
          }) {
            useDeprecated({
              scope: "el-drawer",
              from: "the title slot",
              replacement: "the header slot",
              version: "3.0.0",
              ref: "https://element-plus.org/en-US/component/drawer.html#slots"
            }, computed(() => !!slots.title));
            useDeprecated({
              scope: "el-drawer",
              from: "custom-class",
              replacement: "class",
              version: "2.3.0",
              ref: "https://element-plus.org/en-US/component/drawer.html#attributes",
              type: "Attribute"
            }, computed(() => !!props.customClass));
            const drawerRef = ref();
            const focusStartRef = ref();
            const ns = useNamespace("drawer");
            const {
              t
            } = useLocale();
            const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
            const drawerSize = computed(() => addUnit(props.size));
            return {
              ...useDialog(props, drawerRef),
              drawerRef,
              focusStartRef,
              isHorizontal,
              drawerSize,
              ns,
              t
            };
          }
        });
        _hoisted_1 = ["aria-label", "aria-labelledby", "aria-describedby"];
        _hoisted_2 = ["id", "aria-level"];
        _hoisted_3 = ["aria-label"];
        _hoisted_4 = ["id"];
        Drawer = /* @__PURE__ */_export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/drawer/index.mjs
        ElDrawer = withInstall(Drawer); //#endregion
        //#region src/app/components/ModalDrawer.vue?vue&type=script&setup=true&lang.ts
        ModalDrawer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ModalDrawer",
          props: {
            name: {},
            beforeClose: {},
            eventBus: {},
            direction: {},
            modal: {
              type: Boolean,
              default: true
            },
            width: {},
            wrapperClosable: {
              type: Boolean,
              default: true
            },
            closeOnClickModal: {
              type: Boolean,
              default: false
            },
            showClose: {
              type: Boolean,
              default: true
            },
            zIndex: {}
          },
          emits: ["enter"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const uiStore = useUIStore();
            const handleEnter = () => {
              if (uiStore.isModalActiveById[props.name]) emit("enter");
            };
            const onWindowKeydown = event => {
              if (!uiStore.isModalActiveById[props.name]) return;
              if (event && event.keyCode === 13) handleEnter();
            };
            const close = async () => {
              if (props.beforeClose) {
                if ((await props.beforeClose()) === false) return;
              }
              uiStore.closeModal(props.name);
            };
            onMounted(() => {
              window.addEventListener("keydown", onWindowKeydown);
              props.eventBus?.on("close", close);
              const activeElement = document.activeElement;
              if (activeElement) activeElement.blur();
            });
            onBeforeUnmount(() => {
              props.eventBus?.off("close", close);
              window.removeEventListener("keydown", onWindowKeydown);
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDrawer), {
                direction: _ctx.direction,
                "model-value": unref(uiStore).modalsById[_ctx.name]?.open ?? false,
                size: _ctx.width,
                "before-close": close,
                modal: _ctx.modal,
                "wrapper-closable": _ctx.wrapperClosable,
                "close-on-click-modal": _ctx.closeOnClickModal,
                "z-index": _ctx.zIndex,
                "show-close": _ctx.showClose
              }, {
                header: withCtx(() => [renderSlot(_ctx.$slots, "header")]),
                default: withCtx(() => [createBaseVNode("span", {
                  onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, [renderSlot(_ctx.$slots, "content")], 32)]),
                _: 3
              }, 8, ["direction", "model-value", "size", "modal", "wrapper-closable", "close-on-click-modal", "z-index", "show-close"]);
            };
          }
        }); //#endregion
        //#region src/app/components/ModalDrawer.vue
        _export("t", ModalDrawer_default = ModalDrawer_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();