import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-CTbb5kDz.js";
import { ct as N8nLink_default, qa as N8nText_default } from "./src-BwN8TeVO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { un as ProjectTypes } from "./workflows.store-zRtTM0cc.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-Bvwf_uf4.js";
//#region src/features/core/folders/components/ProjectBreadcrumb.vue?vue&type=script&setup=true&lang.ts
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
		},
		icon: { default: void 0 }
	},
	emits: ["projectHover", "projectDrop"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const projectIcon = computed(() => {
			if (props.icon) return props.icon;
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
				"data-droppable": "",
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
					class: normalizeClass(_ctx.$style["project-label"]),
					title: projectName.value
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
					_: 1
				}, 8, ["class", "title"])]),
				_: 1
			}, 8, ["to", "class"])], 34);
		};
	}
});
//#endregion
//#region src/features/core/folders/components/ProjectBreadcrumb.vue?vue&type=style&index=0&lang.module.scss
var dragging = "_dragging_12ho2_130";
var ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default = {
	"home-project": "_home-project_12ho2_125",
	dragging,
	"project-link": "_project-link_12ho2_143",
	"project-label": "_project-label_12ho2_149"
};
var ProjectBreadcrumb_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectBreadcrumb_default as t };
