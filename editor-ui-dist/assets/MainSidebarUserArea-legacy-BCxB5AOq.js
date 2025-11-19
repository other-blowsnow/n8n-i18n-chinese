;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, withCtx, openBlock, renderList, createTextVNode, createBaseVNode, useI18n, N8nMenuItem_default, N8nPopoverReka_default, N8nText_default, N8nAvatar_default, N8nIconButton_default, __plugin_vue_export_helper_default, useRouter, useUsersStore, VIEWS, __vite_style__, _hoisted_1, MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default, userArea, userName, expanded, userActions, userAreaInner, popover, MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default, cssModules, MainSidebarUserArea_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nMenuItem_default = _srcLegacy007Js.A;
        N8nPopoverReka_default = _srcLegacy007Js.C;
        N8nText_default = _srcLegacy007Js.In;
        N8nAvatar_default = _srcLegacy007Js.St;
        N8nIconButton_default = _srcLegacy007Js.Tt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00FJs) {
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._userArea_r2ew4_123 {\n  display: flex;\n  padding: var(--spacing--xs);\n  align-items: center;\n  border-top: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._userArea_r2ew4_123 ._userName_r2ew4_129 {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: none;\n  overflow: hidden;\n  width: 100px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n._userArea_r2ew4_123 ._userName_r2ew4_129._expanded_r2ew4_138 {\n  display: initial;\n}\n._userArea_r2ew4_123 ._userName_r2ew4_129 span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._userArea_r2ew4_123 ._userActions_r2ew4_145 {\n  display: none;\n}\n._userArea_r2ew4_123 ._userActions_r2ew4_145._expanded_r2ew4_138 {\n  display: initial;\n}\n._userAreaInner_r2ew4_152 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n._popover_r2ew4_158 {\n  padding: var(--spacing--xs);\n  min-width: 200px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/MainSidebarUserArea.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "ml-3xs",
          "data-test-id": "main-sidebar-user-menu"
        };
        MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MainSidebarUserArea",
          props: {
            fullyExpanded: {
              type: Boolean
            },
            isCollapsed: {
              type: Boolean
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const router = useRouter();
            const usersStore = useUsersStore();
            const userMenuItems = ref([{
              id: "settings",
              icon: "settings",
              label: i18n.baseText("settings")
            }, {
              id: "logout",
              icon: "door-open",
              label: i18n.baseText("auth.signout")
            }]);
            const onLogout = () => {
              router.push({
                name: VIEWS.SIGNOUT
              });
            };
            const onUserActionToggle = action => {
              switch (action) {
                case "logout":
                  onLogout();
                  break;
                case "settings":
                  router.push({
                    name: VIEWS.SETTINGS
                  });
                  break;
                default:
                  break;
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref: "user",
                class: normalizeClass(_ctx.$style.userArea)
              }, [createVNode(unref(N8nPopoverReka_default), {
                side: "right",
                align: "end",
                "side-offset": 16
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.popover)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(userMenuItems.value, action => {
                  return openBlock(), createBlock(unref(N8nMenuItem_default), {
                    key: action.id,
                    item: action,
                    "data-test-id": `user-menu-item-${action.id}`,
                    onClick: () => onUserActionToggle(action.id)
                  }, null, 8, ["item", "data-test-id", "onClick"]);
                }), 128))], 2)]),
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.userAreaInner)
                }, [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", {
                  class: normalizeClass({
                    ["clickable"]: _ctx.isCollapsed
                  })
                }, [createVNode(unref(N8nAvatar_default), {
                  "first-name": unref(usersStore).currentUser?.firstName,
                  "last-name": unref(usersStore).currentUser?.lastName,
                  size: "small"
                }, null, 8, ["first-name", "last-name"])], 2)]), createBaseVNode("div", {
                  class: normalizeClass({
                    ["ml-2xs"]: true,
                    [_ctx.$style.userName]: true,
                    [_ctx.$style.expanded]: _ctx.fullyExpanded
                  })
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(usersStore).currentUser?.fullName), 1)]),
                  _: 1
                })], 2), createBaseVNode("div", {
                  "data-test-id": "user-menu",
                  class: normalizeClass({
                    [_ctx.$style.userActions]: true,
                    [_ctx.$style.expanded]: _ctx.fullyExpanded
                  })
                }, [createVNode(unref(N8nIconButton_default), {
                  icon: "ellipsis",
                  text: "",
                  square: "",
                  type: "tertiary"
                })], 2)], 2)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainSidebarUserArea.vue?vue&type=style&index=0&lang.module.scss
        userArea = "_userArea_r2ew4_123";
        userName = "_userName_r2ew4_129";
        expanded = "_expanded_r2ew4_138";
        userActions = "_userActions_r2ew4_145";
        userAreaInner = "_userAreaInner_r2ew4_152";
        popover = "_popover_r2ew4_158";
        MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default = {
          userArea,
          userName,
          expanded,
          userActions,
          userAreaInner,
          popover
        }; //#endregion
        //#region src/app/components/MainSidebarUserArea.vue
        cssModules = {
          "$style": MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", MainSidebarUserArea_default = /* @__PURE__ */__plugin_vue_export_helper_default(MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();