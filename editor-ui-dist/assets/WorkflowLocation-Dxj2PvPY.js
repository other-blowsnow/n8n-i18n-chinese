import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import { t as router_default } from "./router-Bu7Mbn4F.js";
var WorkflowLocation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowLocation",
	props: {
		workflowId: {},
		workflowName: { default: void 0 },
		homeProject: { default: void 0 },
		parentFolder: { default: void 0 },
		asLinks: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const projectName = computed(() => {
			if (props.homeProject?.type === "personal") return i18n.baseText("projects.menu.personal");
			return props.homeProject?.name ?? "";
		});
		const projectLink = computed(() => {
			if (!props.homeProject) return "";
			return router_default.resolve({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: props.homeProject.id }
			}).fullPath;
		});
		const folderLink = computed(() => {
			if (!props.homeProject || !props.parentFolder) return "";
			return `/projects/${props.homeProject.id}/folders/${props.parentFolder.id}/workflows`;
		});
		const workflowLink = computed(() => {
			if (!props.workflowId) return "";
			return router_default.resolve({
				name: VIEWS.WORKFLOW,
				params: { name: props.workflowId }
			}).fullPath;
		});
		const hasGrandparentFolder = computed(() => !!props.parentFolder?.parentFolderId);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["location-container"]) }, [
				__props.homeProject ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.truncate)
				}, [__props.asLinks ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					"data-test-id": "workflow-location-project-link",
					to: projectLink.value,
					theme: "text",
					class: normalizeClass([_ctx.$style["location-link"], _ctx.$style.truncate]),
					"new-window": true
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "workflow-location-project-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.truncate),
					"data-test-id": "workflow-location-project-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
					_: 1
				}, 8, ["class"]))], 2)) : createCommentVNode("", true),
				__props.parentFolder || __props.workflowName ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.separator),
					"data-test-id": "workflow-location-separator"
				}, " / ", 2)) : createCommentVNode("", true),
				hasGrandparentFolder.value ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass(_ctx.$style.grandparent),
					"data-test-id": "workflow-location-grandparent"
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.ellipsis) }, "...", 2), createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.separator),
					"data-test-id": "workflow-location-ellipsis-separator"
				}, "/", 2)], 2)) : createCommentVNode("", true),
				__props.parentFolder ? (openBlock(), createElementBlock("span", {
					key: 3,
					class: normalizeClass(_ctx.$style["parent-folder"])
				}, [__props.asLinks && __props.homeProject ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					"data-test-id": "workflow-location-folder-link",
					to: folderLink.value,
					theme: "text",
					class: normalizeClass([_ctx.$style["location-link"], _ctx.$style.truncate]),
					"new-window": true
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "workflow-location-folder-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.parentFolder.name), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.truncate),
					"data-test-id": "workflow-location-folder-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.parentFolder.name), 1)]),
					_: 1
				}, 8, ["class"]))], 2)) : createCommentVNode("", true),
				__props.parentFolder && __props.workflowName ? (openBlock(), createElementBlock("span", {
					key: 4,
					class: normalizeClass(_ctx.$style.separator)
				}, "/", 2)) : createCommentVNode("", true),
				__props.workflowName ? (openBlock(), createElementBlock("span", {
					key: 5,
					class: normalizeClass([_ctx.$style["workflow-name"], _ctx.$style.truncate])
				}, [__props.asLinks && __props.workflowId ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					"data-test-id": "workflow-location-workflow-link",
					to: workflowLink.value,
					theme: "text",
					class: normalizeClass([_ctx.$style["location-link"], _ctx.$style.truncate]),
					"new-window": true
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "workflow-location-workflow-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.workflowName), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.truncate),
					"data-test-id": "workflow-location-workflow-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.workflowName), 1)]),
					_: 1
				}, 8, ["class"]))], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
const ellipsis = "_ellipsis_1mlnw_134";
const separator = "_separator_1mlnw_139";
const grandparent = "_grandparent_1mlnw_144";
const truncate = "_truncate_1mlnw_158";
var WorkflowLocation_vue_vue_type_style_index_0_lang_module_default = {
	"location-container": "_location-container_1mlnw_125",
	ellipsis,
	separator,
	grandparent,
	"parent-folder": "_parent-folder_1mlnw_150",
	truncate,
	"location-link": "_location-link_1mlnw_166",
	"workflow-name": "_workflow-name_1mlnw_170"
};
var WorkflowLocation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowLocation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowLocation_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowLocation_default as t };
