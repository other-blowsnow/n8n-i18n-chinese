import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CGDCbL4z.js";
import { In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default } from "./src-DfShoi1k.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-CU7tM1AH.js";
import "./icon-B-yygaWQ.js";
import "./overlay-6s3koUtq.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-Do6N-7Ki.js";
import { Ni as useUIStore, o as useWorkflowsStore } from "./useTelemetry-DDk4UBtV.js";
import "./useToast-CEGrnEuj.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { mo as VIEWS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-Icf9Jupj.js";
import "./merge-qpXyOahO.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BXD6uaW9.js";
import "./useExternalHooks-DIeHOYfe.js";
import "./npsSurvey.store-2Ednwp0w.js";
import "./cloudPlan.store-DtVFrvjm.js";
import "./templates.store-3mu721hU.js";
import "./focusPanel.store-CwyDmVKB.js";
import "./useWorkflowSaving-xYJgnfrL.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-C38FY8QE.js";
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
			uiStore.addFirstStepOnLoad = true;
			const workflowRoute = getWorkflowRoute();
			router.push(workflowRoute);
		}
		function getWorkflowRoute() {
			const workflowId = workflowsStore.workflowId || route.params.name;
			if (workflowId === "__EMPTY__") return {
				name: VIEWS.NEW_WORKFLOW,
				params: {}
			};
			else return {
				name: VIEWS.WORKFLOW,
				params: { name: workflowId }
			};
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
	container: "_container_1ofdn_123",
	messageContainer: "_messageContainer_1ofdn_133",
	icon: "_icon_1ofdn_144"
};
var WorkflowExecutionsLandingPage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowExecutionsLandingPage_default as default };
