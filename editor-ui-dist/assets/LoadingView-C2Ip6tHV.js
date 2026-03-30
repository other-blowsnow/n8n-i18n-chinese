import { $ as openBlock, C as createBaseVNode, E as createElementBlock, I as h, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { R as N8nSpinner_default, Zi as N8nText_default, _t as useRouter } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Ln as useToast, ni as ResourceType, ri as getTruncatedProjectName, vi as ProjectTypes } from "./users.store-DNsxOyr9.js";
import { hs as VIEWS } from "./constants-DkMVfvP4.js";
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 2 };
var _hoisted_4 = {
	key: 1,
	class: "pt-s"
};
var _hoisted_5 = { href: "#" };
var ProjectMoveSuccessToastMessage_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMoveSuccessToastMessage",
	props: {
		routeName: {},
		resourceType: {},
		targetProject: {},
		isShareCredentialsChecked: { type: Boolean },
		areAllUsedCredentialsShareable: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isWorkflow = computed(() => props.resourceType === ResourceType.Workflow);
		const isTargetProjectTeam = computed(() => props.targetProject.type === ProjectTypes.Team);
		const targetProjectName = computed(() => {
			return getTruncatedProjectName(props.targetProject?.name);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [isWorkflow.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				tag: "p",
				class: "pt-xs"
			}, {
				default: withCtx(() => [props.isShareCredentialsChecked && props.areAllUsedCredentialsShareable ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow.withAllCredentials")), 1)) : props.isShareCredentialsChecked ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow.withSomeCredentials")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow")), 1))]),
				_: 1
			})) : createCommentVNode("", true), isTargetProjectTeam.value ? (openBlock(), createElementBlock("p", _hoisted_4, [createBaseVNode("a", _hoisted_5, toDisplayString(unref(i18n).baseText("projects.move.resource.success.link", { interpolate: { targetProjectName: targetProjectName.value } })), 1)])) : createCommentVNode("", true)]);
		};
	}
});
function useMoveResourceToProjectToast() {
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
	function showMoveToProjectToast(options) {
		const viewName = options.resourceType === ResourceType.Workflow ? VIEWS.PROJECTS_WORKFLOWS : VIEWS.PROJECTS_CREDENTIALS;
		toast.showToast({
			title: i18n.baseText("projects.move.resource.success.title", { interpolate: {
				resourceTypeLabel: options.resourceTypeLabel,
				resourceName: options.resourceName,
				targetProjectName: options.targetProjectName
			} }),
			message: h(ProjectMoveSuccessToastMessage_default, {
				routeName: viewName,
				resourceType: options.resourceType,
				targetProject: options.targetProject,
				isShareCredentialsChecked: options.shareUsedCredentials,
				areAllUsedCredentialsShareable: options.areAllUsedCredentialsShareable
			}),
			onClick: (event) => {
				if (event?.target instanceof HTMLAnchorElement) {
					event.preventDefault();
					router.push(options.destinationFolderId ? {
						name: VIEWS.PROJECTS_FOLDERS,
						params: {
							projectId: options.targetProject.id,
							folderId: options.destinationFolderId
						}
					} : {
						name: viewName,
						params: { projectId: options.targetProject.id }
					});
				}
			},
			type: "success",
			duration: 8e3
		});
	}
	return { showMoveToProjectToast };
}
var LoadingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LoadingView",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "node-view-loader"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default))], 2)], 2);
		};
	}
});
var LoadingView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_y2oo6_125",
	spinner: "_spinner_y2oo6_137"
};
var LoadingView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LoadingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LoadingView_vue_vue_type_style_index_0_lang_module_default }]]);
export { useMoveResourceToProjectToast as n, LoadingView_default as t };
