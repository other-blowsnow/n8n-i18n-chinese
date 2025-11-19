;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, unref, defineComponent, toDisplayString, createBlock, normalizeClass, withCtx, openBlock, createTextVNode, N8nText_default, N8nIcon_default, __plugin_vue_export_helper_default, __vite_style__, ProjectIcon_vue_vue_type_script_setup_true_lang_default, container, round, borderless, mini, icon, emoji, small, medium, large, ProjectIcon_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectIcon_default;
    //#region ../@n8n/design-system/src/components/N8nIconPicker/types.ts
    function isIconOrEmoji(icon$1) {
      return typeof icon$1 === "object" && icon$1 !== null && "type" in icon$1 && (icon$1.type === "icon" || icon$1.type === "emoji") && "value" in icon$1 && typeof icon$1.value === "string";
    }

    //#endregion
    //#region src/features/collaboration/projects/components/ProjectIcon.vue?vue&type=script&setup=true&lang.ts
    _export("n", isIconOrEmoji);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_kzol1_123 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: var(--border-width) var(--border-style) var(--color--foreground--tint-1);\n  border-radius: var(--radius);\n}\n._container_kzol1_123._round_kzol1_130 {\n  border-radius: 50%;\n}\n._container_kzol1_123._borderless_kzol1_133 {\n  border: none;\n}\n._mini_kzol1_137 {\n  width: var(--spacing--xs);\n  height: var(--spacing--xs);\n}\n._mini_kzol1_137 ._icon_kzol1_141 {\n  font-size: var(--font-size--2xs);\n}\n._mini_kzol1_137 ._emoji_kzol1_144 {\n  font-size: var(--font-size--3xs);\n}\n._small_kzol1_148 {\n  min-width: var(--spacing--lg);\n  height: var(--spacing--lg);\n}\n._small_kzol1_148 ._emoji_kzol1_144 {\n  font-size: var(--font-size--2xs);\n}\n._medium_kzol1_156 {\n  min-width: var(--spacing--xl);\n  height: var(--spacing--xl);\n}\n._medium_kzol1_156 ._emoji_kzol1_144 {\n  font-size: var(--font-size--xs);\n}\n._large_kzol1_164 {\n  min-width: 40px;\n  height: 40px;\n}\n._large_kzol1_164 ._emoji_kzol1_144 {\n  font-size: var(--font-size--sm);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        ProjectIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectIcon",
          props: {
            icon: {},
            size: {
              default: "medium"
            },
            round: {
              type: Boolean,
              default: false
            },
            borderLess: {
              type: Boolean,
              default: false
            },
            color: {
              default: "text-base"
            }
          },
          setup(__props) {
            const props = __props;
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.container, _ctx.$style[props.size], {
                  [_ctx.$style.round]: props.round,
                  [_ctx.$style.borderless]: props.borderLess
                }])
              }, [_ctx.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                icon: _ctx.icon.value,
                class: normalizeClass(_ctx.$style.icon),
                color: _ctx.color
              }, null, 8, ["icon", "class", "color"])) : _ctx.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 1,
                color: "text-light",
                class: normalizeClass(_ctx.$style.emoji)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.icon.value), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectIcon.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_kzol1_123";
        round = "_round_kzol1_130";
        borderless = "_borderless_kzol1_133";
        mini = "_mini_kzol1_137";
        icon = "_icon_kzol1_141";
        emoji = "_emoji_kzol1_144";
        small = "_small_kzol1_148";
        medium = "_medium_kzol1_156";
        large = "_large_kzol1_164";
        ProjectIcon_vue_vue_type_style_index_0_lang_module_default = {
          container,
          round,
          borderless,
          mini,
          icon,
          emoji,
          small,
          medium,
          large
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectIcon.vue
        cssModules = {
          "$style": ProjectIcon_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ProjectIcon_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();