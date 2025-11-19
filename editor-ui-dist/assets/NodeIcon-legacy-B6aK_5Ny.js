;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./nodeIcon-legacy-7NxDDHQi.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, normalizeClass, openBlock, useCssVars, N8nNodeIcon_default, __plugin_vue_export_helper_default, getNodeIconSource, __vite_style__, NodeIcon_vue_vue_type_script_setup_true_lang_default, nodeIcon, NodeIcon_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeIcon_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useCssVars = _vueRuntimeEsmBundlerLegacy003Js.l;
      }, function (_srcLegacy007Js) {
        N8nNodeIcon_default = _srcLegacy007Js.D;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeIcon_1mo9k_123 {\n  --node--icon--color: var(--canvas-node--icon-color, var(--5a547dd0));\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/NodeIcon.vue?vue&type=script&setup=true&lang.ts
        NodeIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeIcon",
          props: {
            size: {
              default: void 0
            },
            disabled: {
              type: Boolean,
              default: false
            },
            circle: {
              type: Boolean,
              default: false
            },
            colorDefault: {
              default: ""
            },
            showTooltip: {
              type: Boolean,
              default: false
            },
            tooltipPosition: {
              default: "top"
            },
            nodeName: {
              default: ""
            },
            iconSource: {
              default: void 0
            },
            nodeType: {
              default: void 0
            },
            node: {
              default: void 0
            }
          },
          emits: ["click"],
          setup(__props, {
            emit: __emit
          }) {
            useCssVars(_ctx => ({
              "5a547dd0": iconColor.value
            }));
            const props = __props;
            const emit = __emit;
            const iconSource = computed(() => {
              if (props.iconSource) return props.iconSource;
              return getNodeIconSource(props.nodeType, props.node ?? null);
            });
            const iconType = computed(() => iconSource.value?.type ?? "unknown");
            const src = computed(() => {
              if (iconSource.value?.type !== "file") return;
              return iconSource.value.src;
            });
            const iconName = computed(() => {
              if (iconSource.value?.type !== "icon") return;
              return iconSource.value.name;
            });
            const iconColor = computed(() => {
              if (iconSource.value?.type !== "icon") return;
              return iconSource.value.color ?? props.colorDefault;
            });
            const badge = computed(() => {
              if (iconSource.value?.badge?.type !== "file") return;
              return iconSource.value.badge;
            });
            const nodeTypeName = computed(() => props.nodeName && props.nodeName !== "" ? props.nodeName : props.nodeType?.displayName);
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeIcon_default), {
                type: iconType.value,
                src: src.value,
                name: iconName.value,
                disabled: _ctx.disabled,
                size: _ctx.size,
                circle: _ctx.circle,
                "node-type-name": nodeTypeName.value,
                "show-tooltip": _ctx.showTooltip,
                "tooltip-position": _ctx.tooltipPosition,
                badge: badge.value,
                class: normalizeClass(_ctx.$style.nodeIcon),
                onClick: _cache[0] || (_cache[0] = $event => emit("click"))
              }, null, 8, ["type", "src", "name", "disabled", "size", "circle", "node-type-name", "show-tooltip", "tooltip-position", "badge", "class"]);
            };
          }
        }); //#endregion
        //#region src/app/components/NodeIcon.vue?vue&type=style&index=0&lang.module.scss
        nodeIcon = "_nodeIcon_1mo9k_123";
        NodeIcon_vue_vue_type_style_index_0_lang_module_default = {
          nodeIcon
        }; //#endregion
        //#region src/app/components/NodeIcon.vue
        cssModules = {
          "$style": NodeIcon_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", NodeIcon_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();