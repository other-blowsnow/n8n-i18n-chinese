import { d as defineComponent, Z as useUIStore, e as createBlock, g as openBlock, dY as N8nActionBox, l as unref, c as useI18n, f0 as COMMUNITY_PLUS_ENROLLMENT_MODAL, h as createElementBlock, n as normalizeClass, N as N8nIcon, F as Fragment, k as createTextVNode, t as toDisplayString, _ as _export_sfc, i as createVNode, j as createBaseVNode, f as createCommentVNode, Q as renderSlot, p as N8nText, w as withCtx, aL as N8nBadge, b as useRouter, a9 as useWorkflowsStore, ag as useEvaluationStore, e_ as useUsageStore, aB as usePageRedirectionHelper, x as computed, r as ref, q as N8nButton, z as N8nCallout, a6 as I18nT, ab as PLACEHOLDER_EMPTY_WORKFLOW_ID, V as VIEWS, ah as useNodeTypesStore, a as useToast, aj as useSourceControlStore, bW as useCanvasOperations, eX as useAsyncState, af as watch, T as resolveComponent, C as N8nLink, am as EVALUATIONS_DOCS_URL, ap as useTelemetry } from "./index-BsWH3eYA.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EvaluationsPaywall",
  setup(__props) {
    const i18n = useI18n();
    const uiStore = useUIStore();
    const goToUpgrade = async () => {
      uiStore.openModalWithData({
        name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
        data: {
          customHeading: void 0
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_n8n_action_box = N8nActionBox;
      return openBlock(), createBlock(_component_n8n_action_box, {
        "data-test-id": "evaluations-unlicensed",
        heading: unref(i18n).baseText("evaluations.paywall.title"),
        description: unref(i18n).baseText("evaluations.paywall.description"),
        "button-text": unref(i18n).baseText("evaluations.paywall.cta"),
        onClick: goToUpgrade
      }, null, 8, ["heading", "description", "button-text"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StepIndicator",
  props: {
    stepNumber: {},
    isCompleted: { type: Boolean },
    isActive: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.$style.stepIndicator,
          _ctx.isCompleted && _ctx.$style.completed,
          _ctx.isActive && _ctx.$style.active,
          !_ctx.isActive && !_ctx.isCompleted && _ctx.$style.inactive
        ])
      }, [
        _ctx.isCompleted ? (openBlock(), createBlock(unref(N8nIcon), {
          key: 0,
          icon: "check",
          size: "xsmall"
        })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.stepNumber), 1)
        ], 64))
      ], 2);
    };
  }
});
const stepIndicator = "_stepIndicator_7bbfs_123";
const active = "_active_7bbfs_137";
const completed = "_completed_7bbfs_141";
const inactive = "_inactive_7bbfs_146";
const style0$3 = {
  stepIndicator,
  active,
  completed,
  inactive
};
const cssModules$3 = {
  "$style": style0$3
};
const StepIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StepHeader",
  props: {
    stepNumber: {},
    title: {},
    isCompleted: { type: Boolean },
    isActive: { type: Boolean },
    isOptional: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const locale = useI18n();
    const handleClick = (event) => {
      if (!event.target.closest("button") && !event.target.closest("a") && !event.target.closest("input") && !event.target.closest("select")) {
        emit("click");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.stepHeader),
        onClick: handleClick
      }, [
        createVNode(StepIndicator, {
          "step-number": _ctx.stepNumber,
          "is-completed": _ctx.isCompleted,
          "is-active": _ctx.isActive
        }, null, 8, ["step-number", "is-completed", "is-active"]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.titleSlot)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode(unref(N8nText), {
              size: "medium",
              color: _ctx.isActive || _ctx.isCompleted ? "text-dark" : "text-light",
              tag: "span",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.title), 1)
              ]),
              _: 1
            }, 8, ["color"])
          ])
        ], 2),
        _ctx.isOptional ? (openBlock(), createBlock(unref(N8nBadge), {
          key: 0,
          style: { "background-color": "var(--color-background-base)", "border": "none" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.stepHeader.optional")), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const stepHeader = "_stepHeader_1lr9z_123";
const style0$2 = {
  stepHeader
};
const cssModules$2 = {
  "$style": style0$2
};
const StepHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SetupWizard",
  emits: ["runTest"],
  setup(__props) {
    const router = useRouter();
    const locale = useI18n();
    const workflowsStore = useWorkflowsStore();
    const evaluationStore = useEvaluationStore();
    const usageStore = useUsageStore();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const hasRuns = computed(() => {
      return evaluationStore.testRunsByWorkflowId[workflowsStore.workflow.id]?.length > 0;
    });
    const evaluationsAvailable = computed(() => {
      return usageStore.workflowsWithEvaluationsLimit === -1 || usageStore.workflowsWithEvaluationsCount < usageStore.workflowsWithEvaluationsLimit;
    });
    const evaluationsQuotaExceeded = computed(() => {
      return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
    });
    const activeStepIndex = ref(0);
    const initializeActiveStep = () => {
      if (evaluationsQuotaExceeded.value) {
        activeStepIndex.value = 2;
        return;
      }
      if (evaluationStore.evaluationTriggerExists && evaluationStore.evaluationSetMetricsNodeExist) {
        activeStepIndex.value = 3;
      } else if (evaluationStore.evaluationTriggerExists && evaluationStore.evaluationSetOutputsNodeExist) {
        activeStepIndex.value = 2;
      } else if (evaluationStore.evaluationTriggerExists) {
        activeStepIndex.value = 1;
      } else {
        activeStepIndex.value = 0;
      }
    };
    initializeActiveStep();
    const toggleStep = (index) => {
      activeStepIndex.value = index;
    };
    function navigateToWorkflow(action) {
      const routeWorkflowId = workflowsStore.workflow.id === PLACEHOLDER_EMPTY_WORKFLOW_ID ? "new" : workflowsStore.workflow.id;
      void router.push({
        name: VIEWS.WORKFLOW,
        params: { name: routeWorkflowId },
        query: action ? { action } : void 0
      });
    }
    function onSeePlans() {
      void pageRedirectionHelper.goToUpgrade("evaluations", "upgrade-evaluations");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "evaluation-setup-wizard"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.steps)
        }, [
          createBaseVNode("div", {
            class: normalizeClass([_ctx.$style.step, _ctx.$style.completed])
          }, [
            createVNode(StepHeader, {
              "step-number": 1,
              title: unref(locale).baseText("evaluations.setupWizard.step1.title"),
              "is-completed": unref(evaluationStore).evaluationTriggerExists,
              "is-active": activeStepIndex.value === 0,
              onClick: _cache[0] || (_cache[0] = ($event) => toggleStep(0))
            }, null, 8, ["title", "is-completed", "is-active"]),
            activeStepIndex.value === 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.stepContent)
            }, [
              createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.bulletPoints)
              }, [
                createBaseVNode("li", null, [
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item1")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item2")), 1)
                    ]),
                    _: 1
                  })
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actionButton)
              }, [
                createVNode(unref(N8nButton), {
                  size: "small",
                  type: "secondary",
                  onClick: _cache[1] || (_cache[1] = ($event) => navigateToWorkflow("addEvaluationTrigger"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.button")), 1)
                  ]),
                  _: 1
                })
              ], 2)
            ], 2)) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([_ctx.$style.step, activeStepIndex.value === 1 ? _ctx.$style.active : ""])
          }, [
            createVNode(StepHeader, {
              "step-number": 2,
              title: unref(locale).baseText("evaluations.setupWizard.step2.title"),
              "is-completed": unref(evaluationStore).evaluationSetOutputsNodeExist,
              "is-active": activeStepIndex.value === 1,
              onClick: _cache[2] || (_cache[2] = ($event) => toggleStep(1))
            }, null, 8, ["title", "is-completed", "is-active"]),
            activeStepIndex.value === 1 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.stepContent)
            }, [
              createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.bulletPoints)
              }, [
                createBaseVNode("li", null, [
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.item1")), 1)
                    ]),
                    _: 1
                  })
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actionButton)
              }, [
                createVNode(unref(N8nButton), {
                  size: "small",
                  type: "secondary",
                  onClick: _cache[3] || (_cache[3] = ($event) => navigateToWorkflow("addEvaluationNode"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.button")), 1)
                  ]),
                  _: 1
                })
              ], 2)
            ], 2)) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.step)
          }, [
            createVNode(StepHeader, {
              "step-number": 3,
              title: unref(locale).baseText("evaluations.setupWizard.step3.title"),
              "is-completed": unref(evaluationStore).evaluationSetMetricsNodeExist,
              "is-active": activeStepIndex.value === 2,
              "is-optional": true,
              onClick: _cache[4] || (_cache[4] = ($event) => toggleStep(2))
            }, null, 8, ["title", "is-completed", "is-active"]),
            activeStepIndex.value === 2 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.stepContent)
            }, [
              !evaluationsQuotaExceeded.value ? (openBlock(), createElementBlock("ul", {
                key: 0,
                class: normalizeClass(_ctx.$style.bulletPoints)
              }, [
                createBaseVNode("li", null, [
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item1")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item2")), 1)
                    ]),
                    _: 1
                  })
                ])
              ], 2)) : (openBlock(), createBlock(unref(N8nCallout), {
                key: 1,
                theme: "warning",
                iconless: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.limitReached")), 1)
                ]),
                _: 1
              })),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actionButton)
              }, [
                !evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton), {
                  key: 0,
                  size: "small",
                  type: "secondary",
                  onClick: _cache[5] || (_cache[5] = ($event) => navigateToWorkflow("addEvaluationNode"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.button")), 1)
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nButton), {
                  key: 1,
                  size: "small",
                  onClick: onSeePlans
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("generic.seePlans")), 1)
                  ]),
                  _: 1
                })),
                createVNode(unref(N8nButton), {
                  size: "small",
                  text: "",
                  style: { "color": "var(--color-text-light)" },
                  onClick: _cache[6] || (_cache[6] = ($event) => toggleStep(3))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.skip")), 1)
                  ]),
                  _: 1
                })
              ], 2),
              unref(usageStore).workflowsWithEvaluationsLimit !== -1 && evaluationsAvailable.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.quotaNote)
              }, [
                createVNode(unref(N8nText), {
                  size: "xsmall",
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(I18nT), {
                      keypath: "evaluations.setupWizard.step3.notice",
                      scope: "global"
                    }, {
                      link: withCtx(() => [
                        createBaseVNode("a", {
                          style: { "text-decoration": "underline", "color": "inherit" },
                          onClick: onSeePlans
                        }, toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.notice.link")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true)
            ], 2)) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.step)
          }, [
            createVNode(StepHeader, {
              "step-number": 4,
              title: unref(locale).baseText("evaluations.setupWizard.step4.title"),
              "is-completed": false,
              "is-active": activeStepIndex.value === 3,
              onClick: _cache[9] || (_cache[9] = ($event) => toggleStep(3))
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.actionButton, _ctx.$style.actionButtonInline])
                }, [
                  unref(evaluationStore).evaluationSetMetricsNodeExist && !evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton), {
                    key: 0,
                    size: "medium",
                    type: "secondary",
                    disabled: !unref(evaluationStore).evaluationTriggerExists || !unref(evaluationStore).evaluationSetOutputsNodeExist && !unref(evaluationStore).evaluationSetMetricsNodeExist,
                    onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("runTest"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.button")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton), {
                    key: 1,
                    size: "medium",
                    type: "secondary",
                    disabled: !unref(evaluationStore).evaluationTriggerExists || !unref(evaluationStore).evaluationSetOutputsNodeExist && !unref(evaluationStore).evaluationSetMetricsNodeExist,
                    onClick: _cache[8] || (_cache[8] = ($event) => navigateToWorkflow("executeEvaluation"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.altButton")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]))
                ], 2)
              ]),
              _: 1
            }, 8, ["title", "is-active"])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_11w5z_123";
const steps = "_steps_11w5z_127";
const step = "_step_11w5z_127";
const stepContent = "_stepContent_11w5z_137";
const slideDown = "_slideDown_11w5z_1";
const bulletPoints = "_bulletPoints_11w5z_142";
const actionButton = "_actionButton_11w5z_149";
const actionButtonInline = "_actionButtonInline_11w5z_158";
const quotaNote = "_quotaNote_11w5z_162";
const style0$1 = {
  container,
  steps,
  step,
  stepContent,
  slideDown,
  bulletPoints,
  actionButton,
  actionButtonInline,
  quotaNote
};
const cssModules$1 = {
  "$style": style0$1
};
const SetupWizard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EvaluationsRootView",
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const usageStore = useUsageStore();
    const evaluationStore = useEvaluationStore();
    const nodeTypesStore = useNodeTypesStore();
    const telemetry = useTelemetry();
    const toast = useToast();
    const locale = useI18n();
    const sourceControlStore = useSourceControlStore();
    const { initializeWorkspace } = useCanvasOperations();
    const evaluationsLicensed = computed(() => {
      return usageStore.workflowsWithEvaluationsLimit !== 0;
    });
    const isProtectedEnvironment = computed(() => {
      return sourceControlStore.preferences.branchReadOnly;
    });
    const runs = computed(() => {
      return Object.values(evaluationStore.testRunsById ?? {}).filter(
        ({ workflowId }) => workflowId === props.name
      );
    });
    const hasRuns = computed(() => {
      return runs.value.length > 0;
    });
    const showWizard = computed(() => !hasRuns.value);
    async function runTest() {
      try {
        await evaluationStore.startTestRun(props.name);
      } catch (error) {
        toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
        return;
      }
      try {
        await evaluationStore.fetchTestRuns(props.name);
      } catch (error) {
        toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
      }
    }
    const evaluationsQuotaExceeded = computed(() => {
      return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
    });
    const { isReady } = useAsyncState(async () => {
      try {
        await usageStore.getLicenseInfo();
        await evaluationStore.fetchTestRuns(props.name);
      } catch (error) {
        toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
      }
      const workflowId = props.name;
      const isAlreadyInitialized = workflowsStore.workflow.id === workflowId;
      if (isAlreadyInitialized) return;
      if (workflowId && workflowId !== "new") {
        if (workflowsStore.workflow.id === PLACEHOLDER_EMPTY_WORKFLOW_ID) {
          try {
            const data = await workflowsStore.fetchWorkflow(workflowId);
            if (nodeTypesStore.allNodeTypes.length === 0) {
              await nodeTypesStore.getNodeTypes();
            }
            initializeWorkspace(data);
          } catch (error) {
            toast.showError(error, locale.baseText("nodeView.showError.openWorkflow.title"));
          }
        }
      }
    }, void 0);
    watch(
      isReady,
      (ready) => {
        if (ready) {
          if (showWizard.value) {
            telemetry.track("User viewed tests tab", {
              workflow_id: props.name,
              test_type: "evaluation",
              view: "setup",
              trigger_set_up: evaluationStore.evaluationTriggerExists,
              output_set_up: evaluationStore.evaluationSetOutputsNodeExist,
              metrics_set_up: evaluationStore.evaluationSetMetricsNodeExist,
              quota_reached: evaluationsQuotaExceeded.value
            });
          } else {
            telemetry.track("User viewed tests tab", {
              workflow_id: props.name,
              test_type: "evaluation",
              view: "overview",
              run_count: runs.value.length
            });
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.evaluationsView)
      }, [
        unref(isReady) && showWizard.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.setupContent)
        }, [
          createBaseVNode("div", null, [
            createVNode(unref(N8nText), {
              size: "large",
              color: "text-dark",
              tag: "h3",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              tag: "p",
              size: "small",
              color: "text-base",
              class: normalizeClass(_ctx.$style.description)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.description")) + " ", 1),
                createVNode(unref(N8nLink), {
                  size: "small",
                  href: unref(EVALUATIONS_DOCS_URL)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.moreInfo")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          isProtectedEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout), {
            key: 0,
            theme: "info",
            icon: "info"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("evaluations.readOnlyNotice")), 1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.config)
          }, [
            _cache[0] || (_cache[0] = createBaseVNode("iframe", {
              style: { "min-width": "500px" },
              width: "500",
              height: "280",
              src: "https://www.youtube.com/embed/5LlF196PKaE",
              title: "n8n Evaluation quickstart",
              frameborder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              referrerpolicy: "strict-origin-when-cross-origin",
              allowfullscreen: ""
            }, null, -1)),
            evaluationsLicensed.value ? (openBlock(), createBlock(SetupWizard, {
              key: 0,
              onRunTest: runTest
            })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
          ], 2))
        ], 2)) : unref(isReady) ? (openBlock(), createBlock(_component_router_view, { key: 1 })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const evaluationsView = "_evaluationsView_i8p9m_123";
const setupContent = "_setupContent_i8p9m_130";
const description = "_description_i8p9m_139";
const config = "_config_i8p9m_144";
const setupDescription = "_setupDescription_i8p9m_150";
const style0 = {
  evaluationsView,
  setupContent,
  description,
  config,
  setupDescription
};
const cssModules = {
  "$style": style0
};
const EvaluationsRootView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  EvaluationsRootView as default
};
