import { d as defineComponent, b as useRouter, x as computed, c as useI18n, h as resolveComponent, e as createBlock, g as openBlock, m as unref, V as VIEWS, af as ProjectTypes, gW as splitName, au as ResourceType, bX as resolveDirective, i as createElementBlock, bK as mergeProps, j as createVNode, A as renderSlot, w as withCtx, f as createCommentVNode, n as normalizeClass, aI as withDirectives, fD as ProjectIcon, k as createBaseVNode, l as createTextVNode, t as toDisplayString, _ as _export_sfc } from "./index-Y0sphpVt.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EmptySharedSectionActionBox",
  props: {
    personalProject: {},
    resourceType: { default: "workflows" }
  },
  setup(__props) {
    const i18n = useI18n();
    const router = useRouter();
    const props = __props;
    const heading = computed(() => {
      return i18n.baseText("workflows.empty.shared-with-me", {
        interpolate: {
          resource: i18n.baseText(`generic.${props.resourceType === "workflows" ? "workflow" : "credential"}`).toLowerCase()
        }
      });
    });
    const onPersonalLinkClick = (event) => {
      event.preventDefault();
      void router.push({
        name: VIEWS.PROJECTS_WORKFLOWS,
        params: { projectId: props.personalProject.id }
      });
    };
    return (_ctx, _cache) => {
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      return openBlock(), createBlock(_component_n8n_action_box, {
        "data-test-id": "empty-shared-action-box",
        heading: heading.value,
        description: unref(i18n).baseText("workflows.empty.shared-with-me.link"),
        onDescriptionClick: onPersonalLinkClick
      }, null, 8, ["heading", "description"]);
    };
  }
});
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectCardBadge",
  props: {
    resource: {},
    resourceType: {},
    resourceTypeLabel: {},
    personalProject: {},
    showBadgeBorder: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const isShared = computed(() => {
      return "sharedWithProjects" in props.resource && props.resource.sharedWithProjects?.length;
    });
    const projectState = computed(() => {
      if (props.resource.homeProject && props.personalProject && props.resource.homeProject.id === props.personalProject.id || !props.resource.homeProject) {
        if (isShared.value) {
          return "shared-owned";
        }
        return "owned";
      } else if (props.resource.homeProject?.type !== ProjectTypes.Team) {
        if (isShared.value) {
          return "shared-personal";
        }
        return "personal";
      } else if (props.resource.homeProject?.type === ProjectTypes.Team) {
        if (isShared.value) {
          return "shared-team";
        }
        return "team";
      }
      return "unknown";
    });
    const numberOfMembersInHomeTeamProject = computed(
      () => "sharedWithProjects" in props.resource ? props.resource.sharedWithProjects?.length ?? 0 : 0
    );
    const badgeText = computed(() => {
      if (projectState.value === "owned" || projectState.value === "shared-owned") {
        return i18n.baseText("projects.menu.personal");
      } else {
        const { name, email } = splitName(props.resource.homeProject?.name ?? "");
        return name ?? email ?? "";
      }
    });
    const badgeIcon = computed(() => {
      switch (projectState.value) {
        case "owned":
        case "shared-owned":
        case "personal":
        case "shared-personal":
          return { type: "icon", value: "user" };
        case "team":
        case "shared-team":
          return props.resource.homeProject?.icon ?? { type: "icon", value: "layer-group" };
        default:
          return { type: "icon", value: "layer-group" };
      }
    });
    const badgeTooltip = computed(() => {
      switch (projectState.value) {
        case "shared-owned":
          return i18n.baseText("projects.badge.tooltip.sharedOwned", {
            interpolate: {
              resourceTypeLabel: props.resourceTypeLabel,
              count: numberOfMembersInHomeTeamProject.value
            }
          });
        case "shared-personal":
          return i18n.baseText("projects.badge.tooltip.sharedPersonal", {
            interpolate: {
              resourceTypeLabel: props.resourceTypeLabel,
              name: badgeText.value,
              count: numberOfMembersInHomeTeamProject.value
            }
          });
        case "personal":
          return i18n.baseText("projects.badge.tooltip.personal", {
            interpolate: {
              resourceTypeLabel: props.resourceTypeLabel,
              name: badgeText.value
            }
          });
        case "team":
          return i18n.baseText("projects.badge.tooltip.team", {
            interpolate: {
              resourceTypeLabel: props.resourceTypeLabel,
              name: badgeText.value
            }
          });
        case "shared-team":
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
      if (projectState.value !== "personal" && projectState.value !== "shared-personal" && props.resource.homeProject?.id && props.resourceType === ResourceType.Workflow) {
        return {
          name: VIEWS.PROJECTS_WORKFLOWS,
          params: { projectId: props.resource.homeProject.id }
        };
      }
      return null;
    });
    return (_ctx, _cache) => {
      const _component_ProjectIcon = ProjectIcon;
      const _component_router_link = resolveComponent("router-link");
      const _component_N8nBadge = resolveComponent("N8nBadge");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      const _directive_n8n_truncate = resolveDirective("n8n-truncate");
      return openBlock(), createElementBlock("div", mergeProps({
        class: { [_ctx.$style.wrapper]: true, [_ctx.$style["no-border"]]: _ctx.showBadgeBorder }
      }, _ctx.$attrs), [
        createVNode(_component_N8nTooltip, {
          disabled: !badgeTooltip.value || numberOfMembersInHomeTeamProject.value !== 0,
          placement: "top"
        }, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(badgeTooltip.value), 1)
          ]),
          default: withCtx(() => [
            badgeText.value ? (openBlock(), createBlock(_component_N8nBadge, {
              key: 0,
              class: normalizeClass([_ctx.$style.badge, _ctx.$style.projectBadge]),
              theme: "tertiary",
              "data-test-id": "card-badge",
              "show-border": _ctx.showBadgeBorder
            }, {
              default: withCtx(() => [
                createVNode(_component_ProjectIcon, {
                  icon: badgeIcon.value,
                  "border-less": true,
                  size: "mini"
                }, null, 8, ["icon"]),
                projectLocation.value ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  to: projectLocation.value
                }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("span", null, null, 512), [
                      [_directive_n8n_truncate, badgeText.value, "20"]
                    ])
                  ]),
                  _: 1
                }, 8, ["to"])) : withDirectives((openBlock(), createElementBlock("span", _hoisted_1, null, 512)), [
                  [_directive_n8n_truncate, badgeText.value, "20"]
                ])
              ]),
              _: 1
            }, 8, ["class", "show-border"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["disabled"]),
        renderSlot(_ctx.$slots, "default"),
        createVNode(_component_N8nTooltip, {
          disabled: !badgeTooltip.value || numberOfMembersInHomeTeamProject.value === 0,
          placement: "top"
        }, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(badgeTooltip.value), 1)
          ]),
          default: withCtx(() => [
            numberOfMembersInHomeTeamProject.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style["count-badge"]),
              theme: "tertiary",
              bold: ""
            }, " +" + toDisplayString(numberOfMembersInHomeTeamProject.value), 3)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 16);
    };
  }
});
const wrapper = "_wrapper_1w2ly_123";
const badge = "_badge_1w2ly_133";
const projectBadge = "_projectBadge_1w2ly_146";
const style0 = {
  wrapper,
  "no-border": "_no-border_1w2ly_129",
  badge,
  projectBadge,
  "count-badge": "_count-badge_1w2ly_151"
};
const cssModules = {
  "$style": style0
};
const ProjectCardBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectCardBadge as P,
  _sfc_main$1 as _
};
