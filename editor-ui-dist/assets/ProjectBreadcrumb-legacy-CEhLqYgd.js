;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./ProjectIcon-legacy-ktkmz5xT.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, createVNode, defineComponent, toDisplayString, normalizeClass, withCtx, openBlock, createTextVNode, useI18n, N8nText_default, N8nLink_default, __plugin_vue_export_helper_default, ProjectTypes, isIconOrEmoji, ProjectIcon_default, __vite_style__, ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default, dragging, ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectBreadcrumb_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nLink_default = _srcLegacy007Js.mt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        ProjectTypes = _useTelemetryLegacy00FJs.On;
      }, function (_ProjectIconLegacy025Js) {
        isIconOrEmoji = _ProjectIconLegacy025Js.n;
        ProjectIcon_default = _ProjectIconLegacy025Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._home-project_1goi6_123 {\n  display: flex;\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n  border: var(--border-width) var(--border-style) transparent;\n}\n._home-project_1goi6_123._dragging_1goi6_128:hover {\n  border: var(--border-width) var(--border-style) var(--color--secondary);\n  border-radius: var(--radius);\n  background-color: var(--callout--color--background--secondary);\n}\n._home-project_1goi6_123._dragging_1goi6_128:hover * {\n  cursor: grabbing;\n  color: var(--color--text);\n}\n._home-project_1goi6_123:hover .n8n-text {\n  color: var(--color--text--shade-1);\n}\n._project-link_1goi6_141 .n8n-text {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n}\n@media (max-width: 992px) {\n.n8n-text._project-label_1goi6_148 {\n    display: none;\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/folders/components/ProjectBreadcrumb.vue?vue&type=script&setup=true&lang.ts
        ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectBreadcrumb",
          props: {
            currentProject: {
              default: void 0
            },
            isDragging: {
              type: Boolean,
              default: false
            },
            isShared: {
              type: Boolean,
              default: false
            }
          },
          emits: ["projectHover", "projectDrop"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const projectIcon = computed(() => {
              if (props.isShared) return {
                type: "icon",
                value: "share"
              };
              if (props.currentProject?.type === ProjectTypes.Personal) return {
                type: "icon",
                value: "user"
              };
              if (props.currentProject?.name) return isIconOrEmoji(props.currentProject.icon) ? props.currentProject.icon : {
                type: "icon",
                value: "layers"
              };
              return {
                type: "icon",
                value: "house"
              };
            });
            const projectName = computed(() => {
              if (props.isShared) return i18n.baseText("projects.menu.shared");
              if (props.currentProject?.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
              return props.currentProject?.name;
            });
            const projectLink = computed(() => {
              if (props.isShared) return "/shared";
              if (props.currentProject) return `/projects/${props.currentProject.id}`;
              return "/home";
            });
            const onHover = () => {
              emit("projectHover");
            };
            const onProjectMouseUp = () => {
              if (props.isDragging) emit("projectDrop");
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  [_ctx.$style["home-project"]]: true,
                  [_ctx.$style.dragging]: _ctx.isDragging
                }),
                "data-test-id": "home-project",
                onMouseenter: onHover,
                onMouseup: _cache[0] || (_cache[0] = $event => _ctx.isDragging ? onProjectMouseUp() : null)
              }, [createVNode(unref(N8nLink_default), {
                to: projectLink.value,
                class: normalizeClass([_ctx.$style["project-link"]])
              }, {
                default: withCtx(() => [createVNode(ProjectIcon_default, {
                  icon: projectIcon.value,
                  "border-less": true,
                  size: "mini",
                  title: projectName.value
                }, null, 8, ["icon", "title"]), createVNode(unref(N8nText_default), {
                  size: "medium",
                  color: "text-base",
                  class: normalizeClass(_ctx.$style["project-label"])
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              }, 8, ["to", "class"])], 34);
            };
          }
        }); //#endregion
        //#region src/features/core/folders/components/ProjectBreadcrumb.vue?vue&type=style&index=0&lang.module.scss
        dragging = "_dragging_1goi6_128";
        ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default = {
          "home-project": "_home-project_1goi6_123",
          dragging,
          "project-link": "_project-link_1goi6_141",
          "project-label": "_project-label_1goi6_148"
        }; //#endregion
        //#region src/features/core/folders/components/ProjectBreadcrumb.vue
        cssModules = {
          "$style": ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ProjectBreadcrumb_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();