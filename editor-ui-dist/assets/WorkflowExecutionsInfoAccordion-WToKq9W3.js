import { d as defineComponent, b as useRouter, az as useWorkflowSaving, v as useSettingsStore, Z as useUIStore, a9 as useWorkflowsStore, ax as useNpsSurveyStore, r as ref, x as computed, c as useI18n, dP as deepCopy, ab as PLACEHOLDER_EMPTY_WORKFLOW_ID, af as watch, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, k as createTextVNode, i as createVNode, t as toDisplayString, l as unref, a4 as N8nTooltip, C as N8nLink, B as withModifiers, n as normalizeClass, ao as WORKFLOW_SETTINGS_MODAL_KEY, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { N as N8nInfoAccordion } from "./InfoAccordion-CLjAr6Sq.js";
const _hoisted_1 = { class: "mt-2xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkflowExecutionsInfoAccordion",
  props: {
    initiallyExpanded: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const router = useRouter();
    const workflowSaving = useWorkflowSaving({ router });
    const locale = useI18n();
    const settingsStore = useSettingsStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const npsSurveyStore = useNpsSurveyStore();
    const defaultValues = ref({
      saveFailedExecutions: "all",
      saveSuccessfulExecutions: "all",
      saveManualExecutions: false
    });
    const workflowSaveSettings = ref({
      saveFailedExecutions: false,
      saveSuccessfulExecutions: false,
      saveTestExecutions: false
    });
    const accordionItems = computed(() => [
      {
        id: "productionExecutions",
        label: locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutions"),
        icon: productionExecutionsIcon.value.icon,
        iconColor: productionExecutionsIcon.value.color,
        tooltip: productionExecutionsStatus.value === "unknown" ? locale.baseText(
          "executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip"
        ) : null
      },
      {
        id: "manualExecutions",
        label: locale.baseText("executionsLandingPage.emptyState.accordion.testExecutions"),
        icon: workflowSaveSettings.value.saveTestExecutions ? "check" : "x",
        iconColor: workflowSaveSettings.value.saveTestExecutions ? "success" : "danger"
      }
    ]);
    const shouldExpandAccordion = computed(() => {
      if (!props.initiallyExpanded) {
        return false;
      }
      return !workflowSaveSettings.value.saveFailedExecutions || !workflowSaveSettings.value.saveSuccessfulExecutions || !workflowSaveSettings.value.saveTestExecutions;
    });
    const productionExecutionsIcon = computed(() => {
      if (productionExecutionsStatus.value === "saving") {
        return { icon: "check", color: "success" };
      } else if (productionExecutionsStatus.value === "not-saving") {
        return { icon: "x", color: "danger" };
      }
      return { icon: "triangle-alert", color: "warning" };
    });
    const productionExecutionsStatus = computed(() => {
      if (workflowSaveSettings.value.saveSuccessfulExecutions === workflowSaveSettings.value.saveFailedExecutions) {
        if (workflowSaveSettings.value.saveSuccessfulExecutions) {
          return "saving";
        }
        return "not-saving";
      } else {
        return "unknown";
      }
    });
    const workflowSettings = computed(() => deepCopy(workflowsStore.workflowSettings));
    const accordionIcon = computed(() => {
      if (!workflowSaveSettings.value.saveTestExecutions || productionExecutionsStatus.value !== "saving") {
        return { icon: "triangle-alert", color: "warning" };
      }
      return void 0;
    });
    const currentWorkflowId = computed(() => workflowsStore.workflowId);
    const isNewWorkflow = computed(() => {
      return !currentWorkflowId.value || currentWorkflowId.value === PLACEHOLDER_EMPTY_WORKFLOW_ID || currentWorkflowId.value === "new";
    });
    const workflowName = computed(() => workflowsStore.workflowName);
    const currentWorkflowTagIds = computed(() => workflowsStore.workflowTags);
    watch(workflowSettings, (newSettings) => {
      updateSettings(newSettings);
    });
    onMounted(() => {
      defaultValues.value.saveFailedExecutions = settingsStore.saveDataErrorExecution;
      defaultValues.value.saveSuccessfulExecutions = settingsStore.saveDataSuccessExecution;
      defaultValues.value.saveManualExecutions = settingsStore.saveManualExecutions;
      updateSettings(workflowSettings.value);
    });
    function updateSettings(wfSettings) {
      workflowSaveSettings.value.saveFailedExecutions = wfSettings.saveDataErrorExecution === void 0 ? defaultValues.value.saveFailedExecutions === "all" : wfSettings.saveDataErrorExecution === "all";
      workflowSaveSettings.value.saveSuccessfulExecutions = wfSettings.saveDataSuccessExecution === void 0 ? defaultValues.value.saveSuccessfulExecutions === "all" : wfSettings.saveDataSuccessExecution === "all";
      workflowSaveSettings.value.saveTestExecutions = wfSettings.saveManualExecutions === void 0 ? defaultValues.value.saveManualExecutions : wfSettings.saveManualExecutions;
    }
    function onAccordionClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        event.preventDefault();
        uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
      }
    }
    function onItemTooltipClick(item, event) {
      if (item === "productionExecutions" && event.target instanceof HTMLAnchorElement) {
        event.preventDefault();
        uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
      }
    }
    function openWorkflowSettings() {
      uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
    }
    async function onSaveWorkflowClick() {
      let currentId = void 0;
      if (currentWorkflowId.value !== PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        currentId = currentWorkflowId.value;
      } else if (router.currentRoute.value.params.name && router.currentRoute.value.params.name !== "new") {
        const routeName = router.currentRoute.value.params.name;
        currentId = Array.isArray(routeName) ? routeName[0] : routeName;
      }
      if (!currentId) {
        return;
      }
      const saved = await workflowSaving.saveCurrentWorkflow({
        id: currentId,
        name: workflowName.value,
        tags: currentWorkflowTagIds.value
      });
      if (saved) {
        await npsSurveyStore.fetchPromptsData();
      }
    }
    return (_ctx, _cache) => {
      const _component_N8nLink = N8nLink;
      const _component_N8nTooltip = N8nTooltip;
      const _component_N8nInfoAccordion = N8nInfoAccordion;
      return openBlock(), createBlock(_component_N8nInfoAccordion, {
        class: normalizeClass([_ctx.$style.accordion, "mt-2xl"]),
        title: unref(i18n).baseText("executionsLandingPage.emptyState.accordion.title"),
        items: accordionItems.value,
        "initially-expanded": shouldExpandAccordion.value,
        "header-icon": accordionIcon.value,
        "onClick:body": onAccordionClick,
        onTooltipClick: onItemTooltipClick
      }, {
        customContent: withCtx(() => [
          createBaseVNode("footer", _hoisted_1, [
            createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer")) + " ", 1),
            createVNode(_component_N8nTooltip, {
              disabled: !isNewWorkflow.value
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(_component_N8nLink, {
                    onClick: withModifiers(onSaveWorkflowClick, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipLink")), 1)
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipText")), 1)
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_N8nLink, {
                  class: normalizeClass({ [_ctx.$style.disabled]: isNewWorkflow.value }),
                  size: "small",
                  onClick: withModifiers(openWorkflowSettings, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.settingsLink")), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        _: 1
      }, 8, ["class", "title", "items", "initially-expanded", "header-icon"]);
    };
  }
});
const accordion = "_accordion_xb266_123";
const disabled = "_disabled_xb266_151";
const style0 = {
  accordion,
  disabled
};
const cssModules = {
  "$style": style0
};
const WorkflowExecutionsInfoAccordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkflowExecutionsInfoAccordion as W
};
