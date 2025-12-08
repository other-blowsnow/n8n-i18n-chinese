;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./src-legacy-Cj9TtJhY.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, defineComponent, createBlock, renderSlot, useCssModule, openBlock, createTextVNode, normalizeClass, createBaseVNode, N8nIcon_default, __plugin_vue_export_helper_default, __vite_style__, Alert_vue_vue_type_script_setup_true_lang_default, alert, center, success, light, background, dark, info, warning, error, content, icon, text, title, description, hasTitle, aside, Alert_vue_vue_type_style_index_0_lang_module_default, cssModules, Alert_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Wn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._alert_1o6w1_123 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  min-height: 60px;\n  border-bottom: 1px solid transparent;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 8px 16px;\n}\n._alert_1o6w1_123._center_1o6w1_132 {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n._alert_1o6w1_123._success_1o6w1_135._light_1o6w1_135 {\n  color: var(--color--success);\n}\n._alert_1o6w1_123._success_1o6w1_135._light_1o6w1_135._background_1o6w1_138 {\n  background-color: var(--color--success--tint-3);\n  border-color: var(--color--success);\n}\n._alert_1o6w1_123._success_1o6w1_135._light_1o6w1_135 ._el-alert__description_1o6w1_142 {\n  color: var(--color--success);\n}\n._alert_1o6w1_123._success_1o6w1_135._dark_1o6w1_145 {\n  color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._success_1o6w1_135._dark_1o6w1_145:not(._background_1o6w1_138) {\n  color: var(--color--success);\n}\n._alert_1o6w1_123._success_1o6w1_135._dark_1o6w1_145._background_1o6w1_138 {\n  background-color: var(--color--success);\n  border-color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._info_1o6w1_155._light_1o6w1_135 {\n  color: var(--color--info);\n}\n._alert_1o6w1_123._info_1o6w1_155._light_1o6w1_135._background_1o6w1_138 {\n  background-color: var(--color--info--tint-2);\n  border-color: var(--color--info);\n}\n._alert_1o6w1_123._info_1o6w1_155._dark_1o6w1_145 {\n  color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._info_1o6w1_155._dark_1o6w1_145:not(._background_1o6w1_138) {\n  color: var(--color--info);\n}\n._alert_1o6w1_123._info_1o6w1_155._dark_1o6w1_145._background_1o6w1_138 {\n  background-color: var(--color--info);\n  border-color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._info_1o6w1_155 ._el-alert__description_1o6w1_142 {\n  color: var(--color--info);\n}\n._alert_1o6w1_123._warning_1o6w1_175._light_1o6w1_135 {\n  color: var(--color--warning);\n}\n._alert_1o6w1_123._warning_1o6w1_175._light_1o6w1_135._background_1o6w1_138 {\n  background-color: var(--color--warning--tint-2);\n  border-color: var(--color--warning);\n}\n._alert_1o6w1_123._warning_1o6w1_175._light_1o6w1_135 ._el-alert__description_1o6w1_142 {\n  color: var(--color--warning);\n}\n._alert_1o6w1_123._warning_1o6w1_175._dark_1o6w1_145 {\n  color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._warning_1o6w1_175._dark_1o6w1_145:not(._background_1o6w1_138) {\n  color: var(--color--warning);\n}\n._alert_1o6w1_123._warning_1o6w1_175._dark_1o6w1_145._background_1o6w1_138 {\n  background-color: var(--color--warning);\n  border-color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._error_1o6w1_195._light_1o6w1_135 {\n  color: var(--color--danger);\n}\n._alert_1o6w1_123._error_1o6w1_195._light_1o6w1_135._background_1o6w1_138 {\n  background-color: var(--color--danger--tint-4);\n  border-color: var(--color--danger);\n}\n._alert_1o6w1_123._error_1o6w1_195._light_1o6w1_135 ._el-alert__description_1o6w1_142 {\n  color: var(--color--danger);\n}\n._alert_1o6w1_123._error_1o6w1_195._dark_1o6w1_145 {\n  color: var(--color--foreground--tint-2);\n}\n._alert_1o6w1_123._error_1o6w1_195._dark_1o6w1_145:not(._background_1o6w1_138) {\n  color: var(--color--danger);\n}\n._alert_1o6w1_123._error_1o6w1_195._dark_1o6w1_145._background_1o6w1_138 {\n  background-color: var(--color--danger);\n  border-color: var(--color--foreground--tint-2);\n}\n._content_1o6w1_216 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n._icon_1o6w1_221 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  color: inherit;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: var(--spacing--2xs);\n  padding-right: var(--spacing--sm);\n}\n._text_1o6w1_229 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n._title_1o6w1_235 {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: var(--font-weight--bold);\n}\n._description_1o6w1_241 {\n  font-size: 12px;\n}\n._description_1o6w1_241._hasTitle_1o6w1_244 {\n  margin: 5px 0 0;\n}\n._aside_1o6w1_248 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: var(--spacing--sm);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue?vue&type=script&setup=true&lang.ts
        Alert_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "Alert",
          props: {
            title: {},
            type: {
              default: "info"
            },
            description: {},
            center: {
              type: Boolean
            },
            showIcon: {
              type: Boolean,
              default: true
            },
            effect: {
              default: "light"
            },
            background: {
              type: Boolean,
              default: true
            }
          },
          setup(__props) {
            const props = __props;
            const icon$1 = computed(() => {
              switch (props.type) {
                case "success":
                  return "circle-check";
                case "warning":
                  return "triangle-alert";
                case "error":
                  return "circle-x";
                default:
                  return "info";
              }
            });
            const $style = useCssModule();
            const alertBoxClassNames = computed(() => {
              const classNames = ["n8n-alert", $style.alert];
              if (props.type) classNames.push($style[props.type]);
              if (props.effect) classNames.push($style[props.effect]);
              if (props.center) classNames.push($style.center);
              if (props.background) classNames.push($style.background);
              return classNames;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(alertBoxClassNames.value),
                role: "alert"
              }, [createBaseVNode("div", {
                class: normalizeClass(unref($style).content)
              }, [_ctx.showIcon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(unref($style).icon)
              }, [_ctx.showIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                icon: icon$1.value
              }, null, 8, ["icon"])) : _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", {
                key: 1
              }) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(unref($style).text)
              }, [_ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref($style).title)
              }, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])], 2)) : createCommentVNode("", true), _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass({
                  [unref($style).description]: true,
                  [unref($style).hasTitle]: _ctx.$slots.title || _ctx.title
                })
              }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.description), 1)])], 2)) : createCommentVNode("", true)], 2)], 2), _ctx.$slots.aside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref($style).aside)
              }, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue?vue&type=style&index=0&lang.module.scss
        alert = "_alert_1o6w1_123";
        center = "_center_1o6w1_132";
        success = "_success_1o6w1_135";
        light = "_light_1o6w1_135";
        background = "_background_1o6w1_138";
        dark = "_dark_1o6w1_145";
        info = "_info_1o6w1_155";
        warning = "_warning_1o6w1_175";
        error = "_error_1o6w1_195";
        content = "_content_1o6w1_216";
        icon = "_icon_1o6w1_221";
        text = "_text_1o6w1_229";
        title = "_title_1o6w1_235";
        description = "_description_1o6w1_241";
        hasTitle = "_hasTitle_1o6w1_244";
        aside = "_aside_1o6w1_248";
        Alert_vue_vue_type_style_index_0_lang_module_default = {
          alert,
          center,
          success,
          light,
          background,
          "el-alert__description": "_el-alert__description_1o6w1_142",
          dark,
          info,
          warning,
          error,
          content,
          icon,
          text,
          title,
          description,
          hasTitle,
          aside
        }; //#endregion
        //#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue
        cssModules = {
          "$style": Alert_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", Alert_default = /* @__PURE__ */__plugin_vue_export_helper_default(Alert_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();