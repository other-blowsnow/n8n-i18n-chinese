import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DxwXn8uM.js";
import { Fn as N8nHeading_default, Ln as N8nText_default, Rn as N8nButton_default } from "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./overlay-DUEudB48.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-CcUQxayn.js";
import { Ni as useUIStore, o as useWorkflowsStore } from "./useTelemetry-Ct6_U3iA.js";
import "./useToast-Da575Qgf.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Oo as VIEWS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import "./useExternalHooks-B9_prI2u.js";
import "./useStyles-CBQs-v7u.js";
import "./npsSurvey.store-CR_5TSEb.js";
import "./cloudPlan.store-CJIeBLfm.js";
import "./templates.store-CwmGwhfp.js";
import "./focusPanel.store-JyliN6VN.js";
import "./useWorkflowSaving-B9wnSzu8.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-BYBrFhRc.js";
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
