;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, mergeProps, onMounted, normalizeClass, renderSlot, withCtx, openBlock, withModifiers, createTextVNode, createSlots, withKeys, normalizeProps, createBaseVNode, normalizeStyle, N8nHeading_default, N8nSpinner_default, __plugin_vue_export_helper_default, ElDialog, useUIStore, useStyles, APP_MODALS_ELEMENT_ID, __vite_style__, _hoisted_1, Modal_vue_vue_type_script_setup_true_lang_default, center, loader, centerTitle, subtitle, footer, Modal_vue_vue_type_style_index_1_lang_module_default, cssModules, Modal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        withKeys = _vueRuntimeEsmBundlerLegacy003Js.m;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_srcLegacy007Js) {
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_dialogLegacy00BJs) {
        ElDialog = _dialogLegacy00BJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
      }, function (_useToastLegacy00HJs) {
        useStyles = _useToastLegacy00HJs.n;
      }, function (_constantsLegacy00NJs) {
        APP_MODALS_ELEMENT_ID = _constantsLegacy00NJs.D;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.dialog-wrapper.el-dialog {\n  display: flex;\n  flex-direction: column;\n  max-width: var(--dialog--max-width, 80%);\n  min-width: var(--dialog--min-width, 420px);\n  height: var(--dialog--height);\n  min-height: var(--dialog--min-height);\n  max-height: var(--dialog--max-height);\n}\n.dialog-wrapper .el-dialog__body {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.dialog-wrapper .modal-content {\n  overflow: hidden;\n  overflow-y: auto;\n  flex-grow: 1;\n}\n.dialog-wrapper.scrollable .modal-content {\n  overflow-y: auto;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._center_mypjw_123 > div {\n  justify-content: center;\n}\n._loader_mypjw_127 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color--primary--tint-1);\n  font-size: 30px;\n  height: 80%;\n}\n._centerTitle_mypjw_136 {\n  text-align: center;\n}\n._subtitle_mypjw_140 {\n  margin-top: var(--spacing--2xs);\n}\n._footer_mypjw_144 {\n  margin-top: var(--spacing--lg);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/Modal.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        Modal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "Modal",
          props: {
            name: {},
            title: {
              default: ""
            },
            subtitle: {
              default: ""
            },
            eventBus: {},
            showClose: {
              type: Boolean,
              default: true
            },
            loading: {
              type: Boolean,
              default: false
            },
            classic: {
              type: Boolean,
              default: false
            },
            beforeClose: {},
            customClass: {
              default: ""
            },
            center: {
              type: Boolean,
              default: true
            },
            width: {
              default: "50%"
            },
            minWidth: {},
            maxWidth: {},
            height: {},
            minHeight: {},
            maxHeight: {},
            scrollable: {
              type: Boolean,
              default: false
            },
            centerTitle: {
              type: Boolean,
              default: false
            },
            closeOnClickModal: {
              type: Boolean,
              default: true
            },
            closeOnPressEscape: {
              type: Boolean,
              default: true
            },
            appendToBody: {
              type: Boolean,
              default: false
            },
            lockScroll: {
              type: Boolean,
              default: true
            }
          },
          emits: ["enter"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              APP_Z_INDEXES
            } = useStyles();
            const styles = computed(() => {
              const styles$1 = {};
              if (props.height) styles$1["--dialog--height"] = props.height;
              if (props.minHeight) styles$1["--dialog--min-height"] = props.minHeight;
              if (props.maxHeight) styles$1["--dialog--max-height"] = props.maxHeight;
              if (props.maxWidth) styles$1["--dialog--max-width"] = props.maxWidth;
              if (props.minWidth) styles$1["--dialog--min-width"] = props.minWidth;
              return styles$1;
            });
            const appModalsId = `#${APP_MODALS_ELEMENT_ID}`;
            onMounted(() => {
              window.addEventListener("keydown", onWindowKeydown);
              props.eventBus?.on("close", closeDialog);
              const activeElement = document.activeElement;
              if (activeElement && uiStore.modalsById[props.name]?.open) activeElement.blur();
            });
            onBeforeUnmount(() => {
              props.eventBus?.off("close", closeDialog);
              window.removeEventListener("keydown", onWindowKeydown);
            });
            const uiStore = useUIStore();
            function handleEnter() {
              if (!uiStore.isModalActiveById[props.name]) return;
              emit("enter");
            }
            function onOpened() {
              props.eventBus?.emit("opened");
            }
            function onWindowKeydown(event) {
              if (event?.keyCode === 13) handleEnter();
            }
            async function closeDialog(returnData) {
              if (props.beforeClose) {
                if ((await props.beforeClose()) === false) return;
              }
              uiStore.closeModal(props.name);
              props.eventBus?.emit("closed", returnData);
            }
            async function onCloseDialog() {
              await closeDialog();
            }
            function getCustomClass() {
              let classes = props.customClass || "";
              if (props.classic) classes = `${classes} classic`;
              return classes;
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                "model-value": unref(uiStore).modalsById[_ctx.name]?.open,
                "before-close": onCloseDialog,
                class: normalizeClass({
                  "dialog-wrapper": true,
                  scrollable: _ctx.scrollable,
                  [getCustomClass()]: true
                }),
                center: _ctx.center,
                width: _ctx.width,
                "show-close": _ctx.showClose,
                "close-on-click-modal": _ctx.closeOnClickModal,
                "close-on-press-escape": _ctx.closeOnPressEscape,
                style: normalizeStyle(styles.value),
                "append-to": _ctx.appendToBody ? void 0 : appModalsId,
                "lock-scroll": _ctx.lockScroll,
                "append-to-body": _ctx.appendToBody,
                "data-test-id": `${_ctx.name}-modal`,
                "modal-class": _ctx.center ? _ctx.$style.center : "",
                "z-index": unref(APP_Z_INDEXES).MODALS,
                onOpened
              }, createSlots({
                default: withCtx(() => [createBaseVNode("div", {
                  class: "modal-content",
                  onKeydown: [_cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])), withKeys(handleEnter, ["enter"]), withKeys(onCloseDialog, ["esc"])]
                }, [!_ctx.loading ? renderSlot(_ctx.$slots, "content", {
                  key: 0
                }) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.loader)
                }, [createVNode(unref(N8nSpinner_default))], 2))], 32), !_ctx.loading && _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.footer)
                }, [renderSlot(_ctx.$slots, "footer", {
                  close: closeDialog
                })], 2)) : createCommentVNode("", true)]),
                _: 2
              }, [_ctx.$slots.header ? {
                name: "header",
                fn: withCtx(() => [!_ctx.loading ? renderSlot(_ctx.$slots, "header", normalizeProps(mergeProps({
                  key: 0
                }, {
                  closeDialog
                }))) : createCommentVNode("", true)]),
                key: "0"
              } : _ctx.title ? {
                name: "title",
                fn: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.centerTitle ? _ctx.$style.centerTitle : "")
                }, [_ctx.title ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
                  tag: "h1",
                  size: "xlarge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.title), 1)]),
                  _: 1
                })])) : createCommentVNode("", true), _ctx.subtitle ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.subtitle)
                }, [createVNode(unref(N8nHeading_default), {
                  tag: "h3",
                  size: "small",
                  color: "text-light"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.subtitle), 1)]),
                  _: 1
                })], 2)) : createCommentVNode("", true)], 2)]),
                key: "1"
              } : void 0]), 1032, ["model-value", "class", "center", "width", "show-close", "close-on-click-modal", "close-on-press-escape", "style", "append-to", "lock-scroll", "append-to-body", "data-test-id", "modal-class", "z-index"]);
            };
          }
        }); //#endregion
        //#region src/app/components/Modal.vue?vue&type=style&index=1&lang.module.scss
        center = "_center_mypjw_123";
        loader = "_loader_mypjw_127";
        centerTitle = "_centerTitle_mypjw_136";
        subtitle = "_subtitle_mypjw_140";
        footer = "_footer_mypjw_144";
        Modal_vue_vue_type_style_index_1_lang_module_default = {
          center,
          loader,
          centerTitle,
          subtitle,
          footer
        }; //#endregion
        //#region src/app/components/Modal.vue
        cssModules = {
          "$style": Modal_vue_vue_type_style_index_1_lang_module_default
        };
        _export("t", Modal_default = /* @__PURE__ */__plugin_vue_export_helper_default(Modal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();