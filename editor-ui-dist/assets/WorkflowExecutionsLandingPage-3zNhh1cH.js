import { d as defineComponent, b as useRouter, aa as useRoute, Z as useUIStore, a9 as useWorkflowsStore, x as computed, h as createElementBlock, g as openBlock, f as createCommentVNode, n as normalizeClass, i as createVNode, w as withCtx, k as createTextVNode, t as toDisplayString, l as unref, c as useI18n, m as N8nHeading, p as N8nText, q as N8nButton, ab as PLACEHOLDER_EMPTY_WORKFLOW_ID, V as VIEWS, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { W as WorkflowExecutionsInfoAccordion } from "./WorkflowExecutionsInfoAccordion-WToKq9W3.js";
import "./InfoAccordion-CLjAr6Sq.js";
const _hoisted_1 = {
  key: 0,
  "data-test-id": "workflow-execution-no-trigger-content"
};
const _hoisted_2 = {
  key: 1,
  "data-test-id": "workflow-execution-no-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      void router.push(workflowRoute);
    }
    function getWorkflowRoute() {
      const workflowId = workflowsStore.workflowId || route.params.name;
      if (workflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        return { name: VIEWS.NEW_WORKFLOW, params: {} };
      } else {
        return { name: VIEWS.WORKFLOW, params: { name: workflowId } };
      }
    }
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_N8nText = N8nText;
      const _component_N8nButton = N8nButton;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["workflow-executions-container", _ctx.$style.container])
      }, [
        executionCount.value === 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([_ctx.$style.messageContainer, _ctx.$style.noExecutionsMessage])
        }, [
          !containsTrigger.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(_component_N8nHeading, {
              tag: "h2",
              size: "xlarge",
              color: "text-dark",
              class: "mb-2xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.heading")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_N8nText, { size: "medium" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.message")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_N8nButton, {
              class: "mt-l",
              type: "tertiary",
              size: "large",
              onClick: onSetupFirstStep
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.buttonText")), 1)
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(_component_N8nHeading, {
              tag: "h2",
              size: "xlarge",
              color: "text-dark",
              class: "mb-2xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.heading")), 1)
              ]),
              _: 1
            }),
            createVNode(WorkflowExecutionsInfoAccordion)
          ]))
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container = "_container_1ktzu_123";
const messageContainer = "_messageContainer_1ktzu_133";
const icon = "_icon_1ktzu_144";
const style0 = {
  container,
  messageContainer,
  icon
};
const cssModules = {
  "$style": style0
};
const WorkflowExecutionsLandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkflowExecutionsLandingPage as default
};
