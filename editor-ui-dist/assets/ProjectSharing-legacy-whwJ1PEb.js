;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./orderBy-legacy-CdPMW7_h.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, mergeModels, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, useModel, renderList, createTextVNode, createBaseVNode, useI18n, N8nOption_default, N8nText_default, N8nButton_default, N8nAvatar_default, N8nSelect_default, N8nBadge_default, N8nIcon_default, __plugin_vue_export_helper_default, ProjectTypes, splitName, isIconOrEmoji, ProjectIcon_default, require_orderBy, __vite_style__, _hoisted_1, ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default, projectInfo, text, ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ProjectSharingInfo_default, import_orderBy, ProjectSharing_vue_vue_type_script_setup_true_lang_default, project, selectedProjects, projectRoleSelect, popper, emoji, ProjectSharing_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectSharing_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nAvatar_default = _srcLegacy007Js.St;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        ProjectTypes = _useTelemetryLegacy00FJs.On;
        splitName = _useTelemetryLegacy00FJs.Rr;
      }, function (_ProjectIconLegacy025Js) {
        isIconOrEmoji = _ProjectIconLegacy025Js.n;
        ProjectIcon_default = _ProjectIconLegacy025Js.t;
      }, function (_orderByLegacy02JJs) {
        require_orderBy = _orderByLegacy02JJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._projectInfo_5ycyd_123 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--spacing--2xs) 0;\n  gap: 8px;\n  justify-content: space-between;\n}\n._projectInfo_5ycyd_123 > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n._projectInfo_5ycyd_123 p {\n  font-size: var(--font-size--sm);\n  color: var(--color--text--shade-1);\n  font-weight: var(--font-weight--medium);\n  line-height: var(--line-height--lg);\n}\n._projectInfo_5ycyd_123 small {\n  font-size: var(--font-size--xs);\n  color: var(--color--text--tint-1);\n  line-height: var(--line-height--lg);\n}\n._text_5ycyd_148 {\n  display: flex;\n  flex-direction: column;\n}\n._text_5ycyd_148 p {\n  margin: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._project_nd1i0_123 {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: var(--spacing--2xs) 0;\n  gap: var(--spacing--2xs);\n}\n._selectedProjects_nd1i0_131 li {\n  padding: 0;\n  border-bottom: var(--border);\n}\n._selectedProjects_nd1i0_131 li:first-child {\n  padding-top: var(--spacing--md);\n}\n._selectedProjects_nd1i0_131 li:last-child {\n  border-bottom: none;\n}\n._projectRoleSelect_nd1i0_142 {\n  width: auto;\n}\n._popper_nd1i0_146 .el-scrollbar__wrap {\n  overflow: hidden;\n}\n._emoji_nd1i0_150 {\n  font-size: var(--font-size--sm);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/collaboration/projects/components/ProjectSharingInfo.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectSharingInfo",
          props: {
            project: {}
          },
          setup(__props) {
            const props = __props;
            const processedName = computed(() => {
              const {
                name,
                email
              } = splitName(props.project.name ?? "");
              const nameArray = name?.split(" ");
              const lastName = nameArray?.pop() ?? "";
              return {
                firstName: nameArray?.join(" ") ?? "",
                lastName,
                email
              };
            });
            const projectIcon = computed(() => {
              if (props.project.icon && isIconOrEmoji(props.project.icon)) return props.project.icon;
              return null;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.projectInfo),
                "data-test-id": "project-sharing-info"
              }, [createBaseVNode("div", null, [projectIcon.value ? (openBlock(), createBlock(ProjectIcon_default, {
                key: 0,
                icon: projectIcon.value,
                size: "large",
                round: true
              }, null, 8, ["icon"])) : (openBlock(), createBlock(unref(N8nAvatar_default), {
                key: 1,
                "first-name": processedName.value.firstName,
                "last-name": processedName.value.lastName
              }, null, 8, ["first-name", "last-name"])), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.text)
              }, [processedName.value.firstName || processedName.value.lastName ? (openBlock(), createElementBlock("p", _hoisted_1, toDisplayString(processedName.value.firstName) + " " + toDisplayString(processedName.value.lastName), 1)) : createCommentVNode("", true), createBaseVNode("small", null, toDisplayString(processedName.value.email), 1)], 2)]), renderSlot(_ctx.$slots, "default")], 2);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectSharingInfo.vue?vue&type=style&index=0&lang.module.scss
        projectInfo = "_projectInfo_5ycyd_123";
        text = "_text_5ycyd_148";
        ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default = {
          projectInfo,
          text
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectSharingInfo.vue
        cssModules$1 = {
          "$style": ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default
        };
        ProjectSharingInfo_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/collaboration/projects/components/ProjectSharing.vue?vue&type=script&setup=true&lang.ts
        import_orderBy = /* @__PURE__ */__toESM(require_orderBy());
        ProjectSharing_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectSharing",
          props: /* @__PURE__ */mergeModels({
            projects: {},
            homeProject: {},
            roles: {},
            readonly: {
              type: Boolean
            },
            static: {
              type: Boolean
            },
            placeholder: {},
            emptyOptionsText: {},
            size: {},
            clearable: {
              type: Boolean
            }
          }, {
            "modelValue": {
              required: true
            },
            "modelModifiers": {}
          }),
          emits: /* @__PURE__ */mergeModels(["projectAdded", "projectRemoved", "clear"], ["update:modelValue"]),
          setup(__props, {
            emit: __emit
          }) {
            const locale = useI18n();
            const props = __props;
            const model = useModel(__props, "modelValue");
            const emit = __emit;
            const selectedProject = ref(Array.isArray(model.value) ? "" : model.value?.id ?? "");
            const filter = ref("");
            const selectPlaceholder = computed(() => props.placeholder ?? locale.baseText("projects.sharing.select.placeholder"));
            const noDataText = computed(() => props.emptyOptionsText ?? locale.baseText("projects.sharing.noMatchingUsers"));
            const filteredProjects = computed(() => props.projects.filter(project$1 => project$1.name?.toLowerCase().includes(filter.value.toLowerCase()) && (Array.isArray(model.value) ? !model.value?.find(p => p.id === project$1.id) : true)));
            const sortedProjects = computed(() => (0, import_orderBy.default)(filteredProjects.value, ["type", project$1 => project$1.name?.toLowerCase()], ["desc", "asc"]));
            const projectIcon = computed(() => {
              const defaultIcon = {
                type: "icon",
                value: "layers"
              };
              const project$1 = props.projects.find(p => p.id === selectedProject.value);
              if (project$1?.type === ProjectTypes.Personal) return {
                type: "icon",
                value: "user"
              };else if (project$1?.type === ProjectTypes.Team) return isIconOrEmoji(project$1.icon) ? project$1.icon : defaultIcon;
              return defaultIcon;
            });
            const setFilter = query => {
              filter.value = query;
            };
            const onProjectSelected = projectId => {
              const project$1 = props.projects.find(p => p.id === projectId);
              if (!project$1) return;
              if (Array.isArray(model.value)) model.value = [...model.value, project$1];else model.value = project$1;
              emit("projectAdded", project$1);
            };
            const onRoleAction = (project$1, role) => {
              if (!Array.isArray(model.value) || props.readonly) return;
              if ((model.value?.findIndex(p => p.id === project$1.id) ?? -1) === -1) return;
              if (role === "remove") {
                model.value = model.value.filter(p => p.id !== project$1.id);
                emit("projectRemoved", project$1);
              }
            };
            watch(() => model.value, () => {
              if (model.value === null || Array.isArray(model.value)) selectedProject.value = "";else selectedProject.value = model.value.id;
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [!props.static ? (openBlock(), createBlock(unref(N8nSelect_default), {
                key: 0,
                "model-value": selectedProject.value,
                "data-test-id": "project-sharing-select",
                filterable: true,
                "filter-method": setFilter,
                placeholder: selectPlaceholder.value,
                "default-first-option": true,
                "no-data-text": noDataText.value,
                size: _ctx.size ?? "medium",
                disabled: props.readonly,
                clearable: _ctx.clearable,
                "popper-class": _ctx.$style.popper,
                "onUpdate:modelValue": onProjectSelected,
                onClear: _cache[0] || (_cache[0] = $event => emit("clear"))
              }, {
                prefix: withCtx(() => [projectIcon.value.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  icon: projectIcon.value.value,
                  color: "text-dark"
                }, null, 8, ["icon"])) : projectIcon.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-light",
                  class: normalizeClass(_ctx.$style.emoji)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(projectIcon.value.value), 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)]),
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedProjects.value, project$1 => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: project$1.id,
                    value: project$1.id,
                    label: project$1.name ?? ""
                  }, {
                    default: withCtx(() => [createVNode(ProjectSharingInfo_default, {
                      project: project$1
                    }, null, 8, ["project"])]),
                    _: 2
                  }, 1032, ["value", "label"]);
                }), 128))]),
                _: 1
              }, 8, ["model-value", "placeholder", "no-data-text", "size", "disabled", "clearable", "popper-class"])) : createCommentVNode("", true), Array.isArray(model.value) ? (openBlock(), createElementBlock("ul", {
                key: 1,
                class: normalizeClass(_ctx.$style.selectedProjects)
              }, [props.homeProject ? (openBlock(), createElementBlock("li", {
                key: 0,
                class: normalizeClass(_ctx.$style.project),
                "data-test-id": "project-sharing-owner"
              }, [createVNode(ProjectSharingInfo_default, {
                project: props.homeProject
              }, {
                default: withCtx(() => [createVNode(unref(N8nBadge_default), {
                  theme: "tertiary",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("auth.roles.owner")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["project"])], 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(model.value, project$1 => {
                return openBlock(), createElementBlock("li", {
                  key: project$1.id,
                  class: normalizeClass(_ctx.$style.project),
                  "data-test-id": "project-sharing-list-item"
                }, [createVNode(ProjectSharingInfo_default, {
                  project: project$1
                }, null, 8, ["project"]), props.roles?.length && !props.static ? (openBlock(), createBlock(unref(N8nSelect_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.projectRoleSelect),
                  "model-value": props.roles[0],
                  disabled: props.readonly,
                  size: "small",
                  "onUpdate:modelValue": $event => onRoleAction(project$1, $event)
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.roles, role => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: role.slug,
                      value: role.slug,
                      label: role.displayName
                    }, null, 8, ["value", "label"]);
                  }), 128))]),
                  _: 2
                }, 1032, ["class", "model-value", "disabled", "onUpdate:modelValue"])) : createCommentVNode("", true), !props.static ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 1,
                  type: "tertiary",
                  "native-type": "button",
                  square: "",
                  icon: "trash-2",
                  disabled: props.readonly,
                  "data-test-id": "project-sharing-remove",
                  onClick: $event => onRoleAction(project$1, "remove")
                }, null, 8, ["disabled", "onClick"])) : createCommentVNode("", true)], 2);
              }), 128))], 2)) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectSharing.vue?vue&type=style&index=0&lang.module.scss
        project = "_project_nd1i0_123";
        selectedProjects = "_selectedProjects_nd1i0_131";
        projectRoleSelect = "_projectRoleSelect_nd1i0_142";
        popper = "_popper_nd1i0_146";
        emoji = "_emoji_nd1i0_150";
        ProjectSharing_vue_vue_type_style_index_0_lang_module_default = {
          project,
          selectedProjects,
          projectRoleSelect,
          popper,
          emoji
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectSharing.vue
        cssModules = {
          "$style": ProjectSharing_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ProjectSharing_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectSharing_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();