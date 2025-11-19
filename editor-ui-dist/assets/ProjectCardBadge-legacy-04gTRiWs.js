;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./ProjectIcon-legacy-ktkmz5xT.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, createBlock, mergeProps, normalizeClass, renderSlot, withCtx, openBlock, createTextVNode, resolveComponent, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nBadge_default, N8nTooltip_default, __plugin_vue_export_helper_default, ResourceType, ProjectTypes, splitName, VIEWS, isIconOrEmoji, ProjectIcon_default, __vite_style__, ProjectState, ProjectCardBadge_vue_vue_type_script_setup_true_lang_default, wrapper, badge, projectBadge, nowrap, ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectCardBadge_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nBadge_default = _srcLegacy007Js.it;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        ResourceType = _useTelemetryLegacy00FJs.Ir;
        ProjectTypes = _useTelemetryLegacy00FJs.On;
        splitName = _useTelemetryLegacy00FJs.Rr;
      }, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_ProjectIconLegacy025Js) {
        isIconOrEmoji = _ProjectIconLegacy025Js.n;
        ProjectIcon_default = _ProjectIconLegacy025Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1bg7p_123 {\n  display: flex;\n  align-items: center;\n  border: var(--border);\n  border-radius: var(--radius);\n}\n._wrapper_1bg7p_123._no-border_1bg7p_129 {\n  border: none;\n}\n._badge_1bg7p_133 {\n  padding: var(--spacing--4xs) var(--spacing--2xs);\n  background-color: var(--color--background--light-3);\n  border-color: var(--color--foreground);\n  z-index: 1;\n  position: relative;\n  height: 23px;\n}\n._badge_1bg7p_133 .n8n-text,\n._badge_1bg7p_133 a {\n  color: var(--color--text);\n}\n._projectBadge_1bg7p_146 > span {\n  display: flex;\n  gap: var(--spacing--3xs);\n}\n._count-badge_1bg7p_151 {\n  font-size: var(--font-size--2xs);\n  padding: var(--spacing--4xs) var(--spacing--3xs);\n  color: var(--color--text);\n  border-left: var(--border);\n  line-height: var(--line-height--md);\n}\n._nowrap_1bg7p_159 {\n  white-space: nowrap !important;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/collaboration/projects/components/ProjectCardBadge.vue?vue&type=script&setup=true&lang.ts
        ProjectState = /* @__PURE__ */function (ProjectState$1) {
          ProjectState$1["SharedPersonal"] = "shared-personal";
          ProjectState$1["SharedOwned"] = "shared-owned";
          ProjectState$1["Owned"] = "owned";
          ProjectState$1["Personal"] = "personal";
          ProjectState$1["Team"] = "team";
          ProjectState$1["SharedTeam"] = "shared-team";
          ProjectState$1["Unknown"] = "unknown";
          return ProjectState$1;
        }(ProjectState || {});
        ProjectCardBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectCardBadge",
          props: {
            resource: {},
            resourceType: {},
            resourceTypeLabel: {},
            personalProject: {},
            showBadgeBorder: {
              type: Boolean,
              default: true
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const isShared = computed(() => {
              return "sharedWithProjects" in props.resource && props.resource.sharedWithProjects?.length;
            });
            const projectState = computed(() => {
              if (props.resource.homeProject && props.personalProject && props.resource.homeProject.id === props.personalProject.id || !props.resource.homeProject) {
                if (isShared.value) return ProjectState.SharedOwned;
                return ProjectState.Owned;
              } else if (props.resource.homeProject?.type !== ProjectTypes.Team) {
                if (isShared.value) return ProjectState.SharedPersonal;
                return ProjectState.Personal;
              } else if (props.resource.homeProject?.type === ProjectTypes.Team) {
                if (isShared.value) return ProjectState.SharedTeam;
                return ProjectState.Team;
              }
              return ProjectState.Unknown;
            });
            const numberOfMembersInHomeTeamProject = computed(() => "sharedWithProjects" in props.resource ? props.resource.sharedWithProjects?.length ?? 0 : 0);
            const badgeText = computed(() => {
              if (projectState.value === ProjectState.Owned || projectState.value === ProjectState.SharedOwned) return i18n.baseText("projects.menu.personal");else {
                const {
                  name,
                  email
                } = splitName(props.resource.homeProject?.name ?? "");
                return name ?? email ?? "";
              }
            });
            const badgeIcon = computed(() => {
              switch (projectState.value) {
                case ProjectState.Owned:
                case ProjectState.SharedOwned:
                case ProjectState.Personal:
                case ProjectState.SharedPersonal:
                  return {
                    type: "icon",
                    value: "user"
                  };
                case ProjectState.Team:
                case ProjectState.SharedTeam:
                  return isIconOrEmoji(props.resource.homeProject?.icon) ? props.resource.homeProject?.icon : {
                    type: "icon",
                    value: "layers"
                  };
                default:
                  return {
                    type: "icon",
                    value: "layers"
                  };
              }
            });
            const badgeTooltip = computed(() => {
              switch (projectState.value) {
                case ProjectState.SharedOwned:
                  return i18n.baseText("projects.badge.tooltip.sharedOwned", {
                    interpolate: {
                      resourceTypeLabel: props.resourceTypeLabel,
                      count: numberOfMembersInHomeTeamProject.value
                    }
                  });
                case ProjectState.SharedPersonal:
                  return i18n.baseText("projects.badge.tooltip.sharedPersonal", {
                    interpolate: {
                      resourceTypeLabel: props.resourceTypeLabel,
                      name: badgeText.value,
                      count: numberOfMembersInHomeTeamProject.value
                    }
                  });
                case ProjectState.Personal:
                  return i18n.baseText("projects.badge.tooltip.personal", {
                    interpolate: {
                      resourceTypeLabel: props.resourceTypeLabel,
                      name: badgeText.value
                    }
                  });
                case ProjectState.Team:
                  return i18n.baseText("projects.badge.tooltip.team", {
                    interpolate: {
                      resourceTypeLabel: props.resourceTypeLabel,
                      name: badgeText.value
                    }
                  });
                case ProjectState.SharedTeam:
                  return i18n.baseText("projects.badge.tooltip.sharedTeam", {
                    interpolate: {
                      resourceTypeLabel: props.resourceTypeLabel,
                      name: badgeText.value,
                      count: numberOfMembersInHomeTeamProject.value
                    }
                  });
                default:
                  return "";
              }
            });
            const projectLocation = computed(() => {
              if (projectState.value !== ProjectState.Personal && projectState.value !== ProjectState.SharedPersonal && props.resource.homeProject?.id && props.resourceType === ResourceType.Workflow) return {
                name: VIEWS.PROJECTS_WORKFLOWS,
                params: {
                  projectId: props.resource.homeProject.id
                }
              };
              return null;
            });
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              const _directive_n8n_truncate = resolveDirective("n8n-truncate");
              return openBlock(), createElementBlock("div", mergeProps({
                class: {
                  [_ctx.$style.wrapper]: true,
                  [_ctx.$style["no-border"]]: _ctx.showBadgeBorder
                }
              }, _ctx.$attrs), [badgeText.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                disabled: !badgeTooltip.value || numberOfMembersInHomeTeamProject.value !== 0,
                placement: "top"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(badgeTooltip.value), 1)]),
                default: withCtx(() => [createVNode(unref(N8nBadge_default), {
                  class: normalizeClass([_ctx.$style.badge, _ctx.$style.projectBadge]),
                  theme: "tertiary",
                  "data-test-id": "card-badge",
                  "show-border": _ctx.showBadgeBorder
                }, {
                  default: withCtx(() => [createVNode(ProjectIcon_default, {
                    icon: badgeIcon.value,
                    "border-less": true,
                    size: "mini"
                  }, null, 8, ["icon"]), projectLocation.value ? (openBlock(), createBlock(_component_RouterLink, {
                    key: 0,
                    to: projectLocation.value
                  }, {
                    default: withCtx(() => [withDirectives(createBaseVNode("span", {
                      class: normalizeClass(_ctx.$style.nowrap)
                    }, null, 2), [[_directive_n8n_truncate, badgeText.value, "20"]])]),
                    _: 1
                  }, 8, ["to"])) : withDirectives((openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.nowrap)
                  }, null, 2)), [[_directive_n8n_truncate, badgeText.value, "20"]])]),
                  _: 1
                }, 8, ["class", "show-border"])]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default"), numberOfMembersInHomeTeamProject.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                disabled: !badgeTooltip.value || numberOfMembersInHomeTeamProject.value === 0,
                placement: "top"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(badgeTooltip.value), 1)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["count-badge"]),
                  theme: "tertiary",
                  bold: ""
                }, " +" + toDisplayString(numberOfMembersInHomeTeamProject.value), 3)]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true)], 16);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectCardBadge.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_1bg7p_123";
        badge = "_badge_1bg7p_133";
        projectBadge = "_projectBadge_1bg7p_146";
        nowrap = "_nowrap_1bg7p_159";
        ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          "no-border": "_no-border_1bg7p_129",
          badge,
          projectBadge,
          "count-badge": "_count-badge_1bg7p_151",
          nowrap
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectCardBadge.vue
        cssModules = {
          "$style": ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", ProjectCardBadge_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectCardBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();