import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Ht as ProjectTypes } from "./users.store-qBZsmf9-.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-B_2Zohal.js";
var ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectBreadcrumb",
	props: {
		currentProject: { default: void 0 },
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
	setup(__props, { emit: __emit }) {
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
					[_ctx.$style.dragging]: __props.isDragging
				}),
				"data-test-id": "home-project",
				onMouseenter: onHover,
				onMouseup: _cache[0] || (_cache[0] = ($event) => __props.isDragging ? onProjectMouseUp() : null)
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
});
const dragging = "_dragging_17c3g_130";
var ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default = {
	"home-project": "_home-project_17c3g_125",
	dragging,
	"project-link": "_project-link_17c3g_143",
	"project-label": "_project-label_17c3g_150"
};
var ProjectBreadcrumb_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectBreadcrumb_default as t };
