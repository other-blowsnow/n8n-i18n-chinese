;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, ref, onBeforeUnmount, defineComponent, createBlock, normalizeClass, renderSlot, Teleport, withCtx, resolveDynamicComponent, openBlock, vShow, createBaseVNode, withDirectives, normalizeStyle, __plugin_vue_export_helper_default, isPresent, __vite_style__, Draggable_vue_vue_type_script_setup_true_lang_default, dragging, draggable, Draggable_vue_vue_type_style_index_0_lang_module_default, cssModules, Draggable_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        Teleport = _vueRuntimeEsmBundlerLegacy003Js.b;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        isPresent = _useTelemetryLegacy00FJs.vi;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dragging_io9pp_123 {\n  visibility: visible;\n  cursor: grabbing;\n}\n._draggable_io9pp_128 {\n  pointer-events: none;\n  position: fixed;\n  z-index: 9999999;\n  top: 0;\n  left: 0;\n}\n._draggable-data-transfer_io9pp_136 {\n  width: 0;\n  height: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/Draggable.vue?vue&type=script&setup=true&lang.ts
        Draggable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "Draggable",
          props: {
            type: {},
            data: {
              default: null
            },
            tag: {
              default: "div"
            },
            targetDataKey: {
              default: null
            },
            disabled: {
              type: Boolean,
              default: false
            },
            canDrop: {
              type: Boolean,
              default: false
            },
            stickyPosition: {
              default: null
            }
          },
          emits: ["drag", "dragstart", "dragend"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const isDragging = ref(false);
            const draggingElement = ref();
            const draggablePosition = ref([0, 0]);
            const animationFrameId = ref();
            const draggableStyle = computed(() => ({
              transform: `translate(${draggablePosition.value[0]}px, ${draggablePosition.value[1]}px)`
            }));
            const onDragStart = event => {
              if (props.disabled || event.buttons !== 1) return;
              draggingElement.value = event.target;
              if (props.targetDataKey && draggingElement.value.dataset?.target !== props.targetDataKey) draggingElement.value = draggingElement.value.closest(`[data-target="${props.targetDataKey}"]`);
              if (props.targetDataKey && draggingElement.value?.dataset?.target !== props.targetDataKey) return;
              event.preventDefault();
              event.stopPropagation();
              isDragging.value = false;
              draggablePosition.value = [event.pageX, event.pageY];
              window.addEventListener("mousemove", onDrag);
              window.addEventListener("mouseup", onDragEnd);
              const activeElement = document.activeElement;
              if (activeElement) activeElement.blur();
            };
            const onDrag = event => {
              event.preventDefault();
              event.stopPropagation();
              if (props.disabled) return;
              if (!isDragging.value && draggingElement.value) {
                isDragging.value = true;
                const data = props.targetDataKey ? draggingElement.value.dataset.value : props.data ?? "";
                emit("dragstart", draggingElement.value, data);
                document.body.style.cursor = "grabbing";
              }
              animationFrameId.value = window.requestAnimationFrame(() => {
                if (props.canDrop && props.stickyPosition) draggablePosition.value = props.stickyPosition;else draggablePosition.value = [event.pageX, event.pageY];
                emit("drag", draggablePosition.value);
              });
            };
            const onDragEnd = () => {
              if (props.disabled) return;
              document.body.style.cursor = "unset";
              window.removeEventListener("mousemove", onDrag);
              window.removeEventListener("mouseup", onDragEnd);
              if (isPresent(animationFrameId.value)) window.cancelAnimationFrame(animationFrameId.value);
              setTimeout(() => {
                if (draggingElement.value) emit("dragend", draggingElement.value);
                isDragging.value = false;
                draggingElement.value = void 0;
              });
            };
            onBeforeUnmount(() => {
              if (draggingElement.value) emit("dragend", draggingElement.value);
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
                ref: "wrapper",
                class: normalizeClass({
                  [_ctx.$style.dragging]: isDragging.value
                }),
                "data-test-id": "draggable",
                onMousedown: onDragStart
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
                  isDragging: isDragging.value
                }), (openBlock(), createBlock(Teleport, {
                  to: "body"
                }, [withDirectives(createBaseVNode("div", {
                  ref: "draggable",
                  class: normalizeClass(_ctx.$style.draggable),
                  style: normalizeStyle(draggableStyle.value)
                }, [renderSlot(_ctx.$slots, "preview", {
                  canDrop: _ctx.canDrop,
                  el: draggingElement.value
                })], 6), [[vShow, isDragging.value]])]))]),
                _: 3
              }, 40, ["class"]);
            };
          }
        }); //#endregion
        //#region src/app/components/Draggable.vue?vue&type=style&index=0&lang.module.scss
        dragging = "_dragging_io9pp_123";
        draggable = "_draggable_io9pp_128";
        Draggable_vue_vue_type_style_index_0_lang_module_default = {
          dragging,
          draggable,
          "draggable-data-transfer": "_draggable-data-transfer_io9pp_136"
        }; //#endregion
        //#region src/app/components/Draggable.vue
        cssModules = {
          "$style": Draggable_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", Draggable_default = /* @__PURE__ */__plugin_vue_export_helper_default(Draggable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();