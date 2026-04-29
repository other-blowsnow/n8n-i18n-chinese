import { $ as openBlock, A as createTextVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-DvwgW1Lg.js";
import { Qi as N8nButton_default, Yi as N8nHeading_default, Zi as N8nText_default, lt as useRoute, ut as useRouter } from "./src-R8Z6Npql.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { r as useUIStore, s as useWorkflowsStore } from "./users.store-D5hjaxvb.js";
import { zr as VIEWS } from "./constants-BxmNKFHG.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-C7N3srba.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-By6Y0m8Q.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "workflow-execution-no-trigger-content"
};
var _hoisted_2 = {
	key: 1,
	"data-test-id": "workflow-execution-no-content"
};
var WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsLandingPage",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const workflowId = useInjectWorkflowId();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const executionCount = computed(() => workflowsStore.currentWorkflowExecutions.length);
		const containsTrigger = computed(() => workflowsStore.workflowTriggerNodes.length > 0);
		function onSetupFirstStep() {
			const resolvedWorkflowId = workflowId.value || route.params.name;
			uiStore.addFirstStepOnLoad = true;
			router.push({
				name: VIEWS.WORKFLOW,
				params: { name: resolvedWorkflowId },
				query: { ...route.query }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["workflow-executions-container", _ctx.$style.container]) }, [executionCount.value === 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.messageContainer, _ctx.$style.noExecutionsMessage])
			}, [!containsTrigger.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge",
					color: "text-dark",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.heading")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.message")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
					class: "mt-l",
					size: "large",
					onClick: onSetupFirstStep
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.buttonText")), 1)]),
					_: 1
				})
			])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "xlarge",
				color: "text-dark",
				class: "mb-2xs"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.heading")), 1)]),
				_: 1
			}), createVNode(WorkflowExecutionsInfoAccordion_default)]))], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_81587_125",
	messageContainer: "_messageContainer_81587_135",
	icon: "_icon_81587_146"
};
var WorkflowExecutionsLandingPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowExecutionsLandingPage_default as default };
