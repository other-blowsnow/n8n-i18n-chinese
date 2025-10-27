import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, ot as resolveComponent, st as resolveDirective, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CMopfp37.js";
import { ft as N8nTooltip_default, it as N8nBadge_default } from "./src-B9lyFNPE.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Br as ResourceType, Hr as splitName, Mn as ProjectTypes } from "./useTelemetry-BnWkdL5v.js";
import { oa as VIEWS } from "./constants-7lEZpYki.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-C6xTYnp5.js";
var ProjectState = /* @__PURE__ */ function(ProjectState$1) {
	ProjectState$1["SharedPersonal"] = "shared-personal";
	ProjectState$1["SharedOwned"] = "shared-owned";
	ProjectState$1["Owned"] = "owned";
	ProjectState$1["Personal"] = "personal";
	ProjectState$1["Team"] = "team";
	ProjectState$1["SharedTeam"] = "shared-team";
	ProjectState$1["Unknown"] = "unknown";
	return ProjectState$1;
}(ProjectState || {});
var ProjectCardBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
			if (projectState.value === ProjectState.Owned || projectState.value === ProjectState.SharedOwned) return i18n.baseText("projects.menu.personal");
			else {
				const { name, email } = splitName(props.resource.homeProject?.name ?? "");
				return name ?? email ?? "";
			}
		});
		const badgeIcon = computed(() => {
			switch (projectState.value) {
				case ProjectState.Owned:
				case ProjectState.SharedOwned:
				case ProjectState.Personal:
				case ProjectState.SharedPersonal: return {
					type: "icon",
					value: "user"
				};
				case ProjectState.Team:
				case ProjectState.SharedTeam: return isIconOrEmoji(props.resource.homeProject?.icon) ? props.resource.homeProject?.icon : {
					type: "icon",
					value: "layers"
				};
				default: return {
					type: "icon",
					value: "layers"
				};
			}
		});
		const badgeTooltip = computed(() => {
			switch (projectState.value) {
				case ProjectState.SharedOwned: return i18n.baseText("projects.badge.tooltip.sharedOwned", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					count: numberOfMembersInHomeTeamProject.value
				} });
				case ProjectState.SharedPersonal: return i18n.baseText("projects.badge.tooltip.sharedPersonal", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value,
					count: numberOfMembersInHomeTeamProject.value
				} });
				case ProjectState.Personal: return i18n.baseText("projects.badge.tooltip.personal", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value
				} });
				case ProjectState.Team: return i18n.baseText("projects.badge.tooltip.team", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value
				} });
				case ProjectState.SharedTeam: return i18n.baseText("projects.badge.tooltip.sharedTeam", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value,
					count: numberOfMembersInHomeTeamProject.value
				} });
				default: return "";
			}
		});
		const projectLocation = computed(() => {
			if (projectState.value !== ProjectState.Personal && projectState.value !== ProjectState.SharedPersonal && props.resource.homeProject?.id && props.resourceType === ResourceType.Workflow) return {
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: props.resource.homeProject.id }
			};
			return null;
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			const _directive_n8n_truncate = resolveDirective("n8n-truncate");
			return openBlock(), createElementBlock("div", mergeProps({ class: {
				[_ctx.$style.wrapper]: true,
				[_ctx.$style["no-border"]]: _ctx.showBadgeBorder
			} }, _ctx.$attrs), [
				badgeText.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
							default: withCtx(() => [withDirectives(createBaseVNode("span", { class: normalizeClass(_ctx.$style.nowrap) }, null, 2), [[
								_directive_n8n_truncate,
								badgeText.value,
								"20"
							]])]),
							_: 1
						}, 8, ["to"])) : withDirectives((openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass(_ctx.$style.nowrap)
						}, null, 2)), [[
							_directive_n8n_truncate,
							badgeText.value,
							"20"
						]])]),
						_: 1
					}, 8, ["class", "show-border"])]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default"),
				numberOfMembersInHomeTeamProject.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
				}, 8, ["disabled"])) : createCommentVNode("", true)
			], 16);
		};
	}
});
const wrapper = "_wrapper_1bg7p_123";
const badge = "_badge_1bg7p_133";
const projectBadge = "_projectBadge_1bg7p_146";
const nowrap = "_nowrap_1bg7p_159";
var ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	"no-border": "_no-border_1bg7p_129",
	badge,
	projectBadge,
	"count-badge": "_count-badge_1bg7p_151",
	nowrap
};
var ProjectCardBadge_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectCardBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectCardBadge_default as t };
