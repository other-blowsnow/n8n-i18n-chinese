import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Li as N8nHeading_default, Lt as useRoute, Rt as useRouter, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { r as useUIStore, s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-BZdh7TKt.js";
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
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const executionCount = computed(() => workflowsStore.currentWorkflowExecutions.length);
		const containsTrigger = computed(() => workflowsStore.workflowTriggerNodes.length > 0);
		function onSetupFirstStep() {
			const workflowId = workflowsStore.workflowId || route.params.name;
			uiStore.addFirstStepOnLoad = true;
			router.push({
				name: VIEWS.WORKFLOW,
				params: { name: workflowId },
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
					class: "mt-l",
					type: "tertiary",
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
var WorkflowExecutionsLandingPage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowExecutionsLandingPage_default as default };
