;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-CBjbIfKX.js", "./constants-legacy-DVoQkFTS.js", "./EnterpriseEdition.ee-legacy-BezBlb8Q.js", "./ProjectSharing-legacy-BF7CQSJT.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, createVNode, defineComponent, createBlock, watch, renderSlot, withCtx, openBlock, createTextVNode, onBeforeMount, normalizeClass, createBaseVNode, useI18n, N8nButton_default, N8nPopover_default, N8nInputLabel_default, N8nBadge_default, N8nLink_default, __plugin_vue_export_helper_default, useProjectsStore, EnterpriseEditionFeature, EnterpriseEdition_ee_default, ProjectSharing_default, __vite_style__, ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default, cssModules, ResourceFiltersDropdown_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nPopover_default = _srcLegacy007Js.T;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nBadge_default = _srcLegacy007Js.at;
        N8nLink_default = _srcLegacy007Js.ut;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useProjectsStore = _useTelemetryLegacy00HJs.En;
      }, function (_constantsLegacy00TJs) {
        EnterpriseEditionFeature = _constantsLegacy00TJs.dc;
      }, function (_EnterpriseEditionEeLegacy02PJs) {
        EnterpriseEdition_ee_default = _EnterpriseEditionEeLegacy02PJs.t;
      }, function (_ProjectSharingLegacy02XJs) {
        ProjectSharing_default = _ProjectSharingLegacy02XJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._filter-button_1mymx_123 {\n  height: 30px;\n  align-items: center;\n}\n._filter-button_1mymx_123._no-label_1mymx_127 {\n  width: 30px;\n}\n._filter-button_1mymx_123._no-label_1mymx_127 span + span {\n  margin: 0;\n}\n._filter-button_1mymx_123 ._filter-button-count_1mymx_133 {\n  margin-right: var(--spacing--4xs);\n}\n@media screen and (max-width: 767px) {\n._filter-button_1mymx_123 ._filter-button-count_1mymx_133 {\n    margin-right: 0;\n}\n}\n@media screen and (max-width: 480px) {\n._filter-button_1mymx_123 ._filter-button-text_1mymx_142 {\n    text-indent: -10000px;\n}\n._filter-button_1mymx_123 span + span {\n    margin: 0;\n}\n}\n._filters-dropdown_1mymx_150 {\n  width: 280px;\n}\n._filters-dropdown-footer_1mymx_154 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/forms/ResourceFiltersDropdown.vue?vue&type=script&setup=true&lang.ts
        ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ResourceFiltersDropdown",
          props: {
            modelValue: {
              default: () => ({})
            },
            keys: {
              default: () => []
            },
            shareable: {
              type: Boolean,
              default: true
            },
            reset: {
              type: Function,
              default: () => {}
            },
            justIcon: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:modelValue", "update:filtersLength"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const projectsStore = useProjectsStore();
            const i18n = useI18n();
            const selectedProject = computed({
              get: () => {
                return projectsStore.availableProjects.find(project => project.id === props.modelValue.homeProject) ?? null;
              },
              set: value => setKeyValue("homeProject", value?.id ?? "")
            });
            const filtersLength = computed(() => {
              let length = 0;
              props.keys.forEach(key => {
                if (key === "search") return;
                const value = props.modelValue[key];
                if (value === true) length += 1;
                if (Array.isArray(value) && value.length) length += 1;
                if (typeof value === "string" && value !== "") length += 1;
              });
              return length;
            });
            const hasFilters = computed(() => filtersLength.value > 0);
            const setKeyValue = (key, value) => {
              emit("update:modelValue", {
                ...props.modelValue,
                [key]: value
              });
            };
            const resetFilters = () => {
              if (props.reset) props.reset();else {
                const filters = {
                  ...props.modelValue
                };
                props.keys.forEach(key => {
                  filters[key] = Array.isArray(props.modelValue[key]) ? [] : "";
                });
                emit("update:modelValue", filters);
              }
              selectedProject.value = null;
            };
            watch(filtersLength, value => {
              emit("update:filtersLength", value);
            });
            onBeforeMount(async () => {
              await projectsStore.getAvailableProjects();
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nPopover_default), {
                trigger: "click",
                width: "304",
                size: "large"
              }, {
                reference: withCtx(() => [createVNode(unref(N8nButton_default), {
                  icon: "funnel",
                  type: "tertiary",
                  size: "small",
                  active: hasFilters.value,
                  class: normalizeClass({
                    [_ctx.$style["filter-button"]]: true,
                    [_ctx.$style["no-label"]]: _ctx.justIcon && filtersLength.value === 0
                  }),
                  "data-test-id": "resources-list-filters-trigger"
                }, {
                  default: withCtx(() => [filtersLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 0,
                    class: normalizeClass(_ctx.$style["filter-button-count"]),
                    "data-test-id": "resources-list-filters-count",
                    theme: "primary"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true), !_ctx.justIcon ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.$style["filter-button-text"])
                  }, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["active", "class"])]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["filters-dropdown"]),
                  "data-test-id": "resources-list-filters-dropdown"
                }, [renderSlot(_ctx.$slots, "default", {
                  filters: _ctx.modelValue,
                  setKeyValue
                }), _ctx.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(EnterpriseEdition_ee_default, {
                  key: 0,
                  features: [unref(EnterpriseEditionFeature).Sharing]
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
                    label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
                    bold: false,
                    size: "small",
                    color: "text-base",
                    class: "mb-3xs"
                  }, null, 8, ["label"]), createVNode(ProjectSharing_default, {
                    modelValue: selectedProject.value,
                    "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => selectedProject.value = $event), _cache[1] || (_cache[1] = $event => setKeyValue("homeProject", $event.id))],
                    projects: unref(projectsStore).availableProjects,
                    placeholder: unref(i18n).baseText("forms.resourceFiltersDropdown.owner.placeholder"),
                    "empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects")
                  }, null, 8, ["modelValue", "projects", "placeholder", "empty-options-text"])]),
                  _: 1
                }, 8, ["features"])) : createCommentVNode("", true), hasFilters.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
                }, [createVNode(unref(N8nLink_default), {
                  onClick: resetFilters
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
                  _: 1
                })], 2)) : createCommentVNode("", true)], 2)]),
                _: 3
              });
            };
          }
        }); //#endregion
        //#region src/app/components/forms/ResourceFiltersDropdown.vue?vue&type=style&index=0&lang.module.scss
        ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default = {
          "filter-button": "_filter-button_1mymx_123",
          "no-label": "_no-label_1mymx_127",
          "filter-button-count": "_filter-button-count_1mymx_133",
          "filter-button-text": "_filter-button-text_1mymx_142",
          "filters-dropdown": "_filters-dropdown_1mymx_150",
          "filters-dropdown-footer": "_filters-dropdown-footer_1mymx_154"
        }; //#endregion
        //#region src/app/components/forms/ResourceFiltersDropdown.vue
        cssModules = {
          "$style": ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ResourceFiltersDropdown_default = /* @__PURE__ */__plugin_vue_export_helper_default(ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();