import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-It4eafc2.js";
import { Fn as N8nText_default, In as N8nButton_default, Nn as N8nHeading_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./overlay-DM1TXj1b.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-CpBf605K.js";
import { Li as useUIStore, o as useWorkflowsStore } from "./useTelemetry-D6pZULgL.js";
import "./useToast-BabYcC1S.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { co as VIEWS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-UStNMe6H.js";
import "./merge-D5iNo-Qh.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-SobFYd6D.js";
import "./useExternalHooks-D1vL2UOW.js";
import "./npsSurvey.store-Cx1qroDi.js";
import "./cloudPlan.store-CNTnzOJi.js";
import "./templates.store-hnMt_Ueb.js";
import "./focusPanel.store-eGpnuamO.js";
import "./useWorkflowSaving-CgZ406mQ.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-CuWKc9rW.js";
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
