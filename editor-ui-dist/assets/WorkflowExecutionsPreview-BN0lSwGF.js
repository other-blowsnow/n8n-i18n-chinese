import { d as defineComponent, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, j as createVNode, _ as _export_sfc, au as useExecutionsStore, a as useToast, r as ref, q as computed, c6 as resolveDirective, k as createBaseVNode, t as toDisplayString, m as unref, c as useI18n, e as createBlock, C as createEventBus, F as Fragment, D as renderList, w as withCtx, l as createTextVNode, aB as withDirectives, ah as useTelemetry, U as useRoute, b as useRouter, T as useWorkflowsStore, p as useSettingsStore, c7 as useTestDefinitionStore, a8 as getResourcePermissions, ab as EnterpriseEditionFeature, o as onMounted, f as createCommentVNode, b8 as N8nText, ba as N8nButton, c8 as RouterLink, V as VIEWS, c9 as ElDropdown, J as withModifiers, aT as _sfc_main$4, ca as N8nIcon, cb as ElDropdownMenu, cc as ElDropdownItem, aR as N8nTooltip, ar as h, aj as useMessage, ak as MODAL_CONFIRM } from "./index-CiIsbhGU.js";
import { _ as _sfc_main$3 } from "./AnnotationTagsDropdown.ee.vue_vue_type_script_setup_true_lang-C0a3twNF.js";
import { W as WorkflowPreview } from "./WorkflowPreview-DcocG8dZ.js";
import { u as useExecutionDebugging } from "./useExecutionDebugging-1PAgD17-.js";
import { u as useExecutionHelpers } from "./useExecutionHelpers-BMZuW6Y6.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VoteButtons",
  props: {
    vote: {}
  },
  emits: ["vote-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const onVoteClick = (vote2) => {
      emit("vote-click", vote2);
    };
    return (_ctx, _cache) => {
      const _component_n8n_icon_button = resolveComponent("n8n-icon-button");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.ratingIcon)
      }, [
        createVNode(_component_n8n_icon_button, {
          class: normalizeClass({ [_ctx.$style.up]: _ctx.vote === "up" }),
          type: "tertiary",
          text: "",
          size: "medium",
          icon: "thumbs-up",
          onClick: _cache[0] || (_cache[0] = ($event) => onVoteClick("up"))
        }, null, 8, ["class"]),
        createVNode(_component_n8n_icon_button, {
          class: normalizeClass({ [_ctx.$style.down]: _ctx.vote === "down" }),
          type: "tertiary",
          text: "",
          size: "medium",
          icon: "thumbs-down",
          onClick: _cache[1] || (_cache[1] = ($event) => onVoteClick("down"))
        }, null, 8, ["class"])
      ], 2);
    };
  }
});
const ratingIcon$1 = "_ratingIcon_18ubu_123";
const up = "_up_18ubu_127";
const down = "_down_18ubu_130";
const style0$2 = {
  ratingIcon: ratingIcon$1,
  up,
  down
};
const cssModules$2 = {
  "$style": style0$2
};
const VoteButtons = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowExecutionAnnotationPanel.ee",
  setup(__props) {
    const executionsStore = useExecutionsStore();
    const { showError } = useToast();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const tagsEventBus = createEventBus();
    const isTagsEditEnabled = ref(false);
    const appliedTagIds = ref([]);
    const tagsSaving = ref(false);
    const activeExecution = computed(() => {
      return executionsStore.activeExecution;
    });
    const vote2 = computed(() => activeExecution.value?.annotation?.vote || null);
    const tagIds = computed(() => activeExecution.value?.annotation?.tags.map((tag) => tag.id) ?? []);
    const tags = computed(() => activeExecution.value?.annotation?.tags);
    const tagsHasChanged = (prev, curr) => {
      if (prev.length !== curr.length) {
        return true;
      }
      const set = new Set(prev);
      return curr.reduce((acc, val) => acc || !set.has(val), false);
    };
    const onVoteClick = async (voteValue) => {
      if (!activeExecution.value) {
        return;
      }
      const voteToSet = voteValue === vote2.value ? null : voteValue;
      try {
        await executionsStore.annotateExecution(activeExecution.value.id, { vote: voteToSet });
      } catch (e) {
        showError(e, "executionAnnotationView.vote.error");
      }
    };
    const onTagsEditEnable = () => {
      appliedTagIds.value = tagIds.value;
      isTagsEditEnabled.value = true;
      setTimeout(() => {
        tagsEventBus.emit("focus");
      }, 0);
    };
    const onTagsBlur = async () => {
      if (!activeExecution.value) {
        return;
      }
      const currentTagIds = tagIds.value ?? [];
      const newTagIds = appliedTagIds.value;
      if (!tagsHasChanged(currentTagIds, newTagIds)) {
        isTagsEditEnabled.value = false;
        return;
      }
      if (tagsSaving.value) {
        return;
      }
      tagsSaving.value = true;
      try {
        await executionsStore.annotateExecution(activeExecution.value.id, { tags: newTagIds });
        if (newTagIds.length > 0) {
          telemetry.track("User added execution annotation tag", {
            tag_ids: newTagIds,
            execution_id: activeExecution.value.id
          });
        }
      } catch (e) {
        showError(e, "executionAnnotationView.tag.error");
      }
      tagsSaving.value = false;
      isTagsEditEnabled.value = false;
    };
    const onTagsEditEsc = () => {
      isTagsEditEnabled.value = false;
    };
    return (_ctx, _cache) => {
      const _component_el_tag = resolveComponent("el-tag");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        ref: "container",
        class: normalizeClass(["execution-annotation-panel", _ctx.$style.container]),
        "data-test-id": "execution-annotation-panel"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.section)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.vote)
          }, [
            createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("generic.rating")), 1),
            createVNode(VoteButtons, {
              vote: vote2.value,
              onVoteClick
            }, null, 8, ["vote"])
          ], 2),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.tags),
            "data-test-id": "annotation-tags-container"
          }, [
            isTagsEditEnabled.value ? (openBlock(), createBlock(_sfc_main$3, {
              key: 0,
              ref: "dropdown",
              modelValue: appliedTagIds.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
              "create-enabled": true,
              "event-bus": unref(tagsEventBus),
              placeholder: unref(i18n).baseText("executionAnnotationView.chooseOrCreateATag"),
              class: "tags-edit",
              "data-test-id": "workflow-tags-dropdown",
              onBlur: onTagsBlur,
              onEsc: onTagsEditEsc
            }, null, 8, ["modelValue", "event-bus", "placeholder"])) : tagIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createBaseVNode("span", {
                class: normalizeClass([_ctx.$style.addTag, _ctx.$style.addTagStandalone, "clickable"]),
                "data-test-id": "new-tag-link",
                onClick: onTagsEditEnable
              }, " + " + toDisplayString(unref(i18n).baseText("executionAnnotationView.addTag")), 3)
            ])) : (openBlock(), createElementBlock("span", {
              key: 2,
              class: normalizeClass([
                "tags-container",
                // FIXME: There are some global styles for tags relying on this classname
                _ctx.$style.tagsContainer
              ]),
              "data-test-id": "execution-annotation-tags",
              onClick: onTagsEditEnable
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
                return openBlock(), createElementBlock("span", {
                  key: tag.id,
                  class: "clickable"
                }, [
                  createVNode(_component_el_tag, {
                    title: tag.name,
                    type: "info",
                    size: "small",
                    "disable-transitions": true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["title"])
                ]);
              }), 128)),
              createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.addTagWrapper)
              }, [
                createVNode(_component_n8n_button, {
                  class: normalizeClass(_ctx.$style.addTag),
                  label: `+ ` + unref(i18n).baseText("executionAnnotationView.addTag"),
                  type: "secondary",
                  size: "mini",
                  outline: false,
                  text: true,
                  onClick: onTagsEditEnable
                }, null, 8, ["class", "label"])
              ], 2)
            ], 2))
          ], 2)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.section)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.heading)
          }, [
            createVNode(_component_n8n_heading, {
              tag: "h3",
              size: "small",
              color: "text-dark"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("generic.annotationData")), 1)
              ]),
              _: 1
            })
          ], 2),
          activeExecution.value?.customData && Object.keys(activeExecution.value?.customData).length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.metadata)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(activeExecution.value?.customData), (attr) => {
              return openBlock(), createElementBlock("div", {
                key: attr,
                class: normalizeClass(_ctx.$style.customDataEntry)
              }, [
                createVNode(_component_n8n_text, {
                  class: normalizeClass(_ctx.$style.key),
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(attr), 1)
                  ]),
                  _: 2
                }, 1032, ["class"]),
                createVNode(_component_n8n_text, {
                  class: normalizeClass(_ctx.$style.value),
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(activeExecution.value?.customData[attr]), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ], 2);
            }), 128))
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.noResultsContainer),
            "data-test-id": "execution-annotation-data-empty"
          }, [
            createVNode(_component_n8n_text, {
              color: "text-base",
              size: "small",
              align: "center"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [_directive_n8n_html, unref(i18n).baseText("executionAnnotationView.data.notFound")]
                ])
              ]),
              _: 1
            })
          ], 2))
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_1ld9i_123";
const section = "_section_1ld9i_139";
const metadata = "_metadata_1ld9i_148";
const heading = "_heading_1ld9i_152";
const controls = "_controls_1ld9i_159";
const vote = "_vote_1ld9i_171";
const ratingIcon = "_ratingIcon_1ld9i_180";
const highlight = "_highlight_1ld9i_184";
const customDataEntry = "_customDataEntry_1ld9i_188";
const key = "_key_1ld9i_195";
const noResultsContainer = "_noResultsContainer_1ld9i_199";
const tagsContainer = "_tagsContainer_1ld9i_209";
const addTag = "_addTag_1ld9i_219";
const addTagStandalone = "_addTagStandalone_1ld9i_230";
const addTagWrapper = "_addTagWrapper_1ld9i_234";
const style0$1 = {
  container,
  section,
  metadata,
  heading,
  controls,
  vote,
  ratingIcon,
  highlight,
  customDataEntry,
  key,
  noResultsContainer,
  "execution-annotation-panel": "_execution-annotation-panel_1ld9i_204",
  "el-skeleton__item": "_el-skeleton__item_1ld9i_204",
  tagsContainer,
  addTag,
  addTagStandalone,
  addTagWrapper
};
const cssModules$1 = {
  "$style": style0$1
};
const WorkflowExecutionAnnotationPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = ["data-test-id"];
const _hoisted_2 = { class: "retry-button" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkflowExecutionsPreview",
  props: {
    execution: {}
  },
  emits: ["deleteCurrentExecution", "retryExecution", "stopExecution"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const route = useRoute();
    const router = useRouter();
    const locale = useI18n();
    const executionHelpers = useExecutionHelpers();
    const message = useMessage();
    const toast = useToast();
    const executionDebugging = useExecutionDebugging();
    const workflowsStore = useWorkflowsStore();
    const settingsStore = useSettingsStore();
    const testDefinitionStore = useTestDefinitionStore();
    const executionsStore = useExecutionsStore();
    const retryDropdownRef = ref(null);
    const workflowId = computed(() => route.params.name);
    const workflowPermissions = computed(
      () => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow
    );
    const executionId = computed(() => route.params.executionId);
    const executionUIDetails = computed(
      () => props.execution ? executionHelpers.getUIDetails(props.execution) : null
    );
    const debugButtonData = computed(
      () => props.execution?.status === "success" ? {
        text: locale.baseText("executionsList.debug.button.copyToEditor"),
        type: "secondary"
      } : {
        text: locale.baseText("executionsList.debug.button.debugInEditor"),
        type: "primary"
      }
    );
    const isRetriable = computed(
      () => !!props.execution && executionHelpers.isExecutionRetriable(props.execution)
    );
    const isAnnotationEnabled = computed(
      () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]
    );
    const hasAnnotation = computed(
      () => !!props.execution?.annotation && (props.execution?.annotation.vote || props.execution?.annotation.tags.length > 0)
    );
    const testDefinitions = computed(
      () => testDefinitionStore.allTestDefinitionsByWorkflowId[workflowId.value] ?? []
    );
    const testDefinition = computed(
      () => testDefinitions.value.find((test) => test.id === route.query.testId)
    );
    const disableAddToTestTooltip = computed(() => {
      if (props.execution.mode === "evaluation") {
        return locale.baseText("testDefinition.executions.tooltip.noExecutions");
      }
      if (props.execution.status !== "success") {
        return locale.baseText("testDefinition.executions.tooltip.onlySuccess");
      }
      return "";
    });
    const getTagIds = (tags) => (tags ?? []).map((t) => t.id);
    const addExecutionTag = async (annotationTagId) => {
      const newTags = [...getTagIds(props.execution?.annotation?.tags), annotationTagId];
      await executionsStore.annotateExecution(props.execution.id, { tags: newTags });
      toast.showToast({
        title: locale.baseText("testDefinition.executions.toast.addedTo.title"),
        message: h(
          N8nText,
          {
            color: "primary",
            style: { cursor: "pointer " }
          },
          () => locale.baseText("testDefinition.executions.toast.closeTab")
        ),
        closeOnClick: false,
        onClick() {
          window.close();
        },
        type: "success"
      });
    };
    const removeExecutionTag = async (annotationTagId) => {
      const newTags = getTagIds(props.execution?.annotation?.tags).filter(
        (id) => id !== annotationTagId
      );
      await executionsStore.annotateExecution(props.execution.id, { tags: newTags });
      toast.showMessage({
        title: locale.baseText("testDefinition.executions.toast.removedFrom.title"),
        type: "success"
      });
    };
    const createTestForExecution = async (id) => {
      await router.push({
        name: VIEWS.NEW_TEST_DEFINITION,
        params: {
          name: workflowId.value
        },
        query: {
          executionId: id,
          annotationTags: getTagIds(props.execution?.annotation?.tags)
        }
      });
    };
    const commandCallbacks = {
      addTag: addExecutionTag,
      removeTag: removeExecutionTag,
      createTest: createTestForExecution
    };
    const handleCommand = async (command) => {
      const action = commandCallbacks[command.type];
      return await action(command.id);
    };
    const testList = computed(() => {
      return testDefinitions.value.reduce((acc, test) => {
        if (!test.annotationTagId) return acc;
        const added = isTagAlreadyAdded(test.annotationTagId);
        acc.push({
          label: test.name,
          value: test.annotationTagId,
          added,
          command: { type: added ? "removeTag" : "addTag", id: test.annotationTagId, name: test.name }
        });
        return acc;
      }, []);
    });
    function isTagAlreadyAdded(tagId) {
      return Boolean(tagId && props.execution?.annotation?.tags.some((tag) => tag.id === tagId));
    }
    const executionHasTestTag = computed(
      () => isTagAlreadyAdded(testDefinition.value?.annotationTagId)
    );
    async function onDeleteExecution() {
      const confirmationText = [
        hasAnnotation.value && locale.baseText("executionDetails.confirmMessage.annotationsNote"),
        locale.baseText("executionDetails.confirmMessage.message")
      ].filter(Boolean).join(" ");
      const deleteConfirmed = await message.confirm(
        confirmationText,
        locale.baseText("executionDetails.confirmMessage.headline"),
        {
          type: "warning",
          confirmButtonText: locale.baseText("executionDetails.confirmMessage.confirmButtonText"),
          cancelButtonText: ""
        }
      );
      if (deleteConfirmed !== MODAL_CONFIRM) {
        return;
      }
      emit("deleteCurrentExecution");
    }
    function handleRetryClick(command) {
      emit("retryExecution", { execution: props.execution, command });
    }
    function handleStopClick() {
      emit("stopExecution");
    }
    function onRetryButtonBlur(event) {
      if (retryDropdownRef.value && event.relatedTarget === null) {
        retryDropdownRef.value.handleClose();
      }
    }
    onMounted(async () => {
      await testDefinitionStore.fetchTestDefinitionsByWorkflowId(workflowId.value);
    });
    return (_ctx, _cache) => {
      const _component_N8nSpinner = resolveComponent("N8nSpinner");
      return executionUIDetails.value?.name === "new" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.newInfo)
      }, [
        createVNode(unref(N8nText), {
          class: normalizeClass(_ctx.$style.newMessage),
          color: "text-light"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.newMessage")), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(unref(N8nButton), {
          class: "mt-l",
          type: "tertiary",
          onClick: handleStopClick
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)
          ]),
          _: 1
        })
      ], 2)) : executionUIDetails.value?.name === "running" ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.runningInfo)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.spinner)
        }, [
          createVNode(_component_N8nSpinner, { type: "ring" })
        ], 2),
        createVNode(unref(N8nText), {
          class: normalizeClass(_ctx.$style.runningMessage),
          color: "text-light"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningMessage")), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(unref(N8nButton), {
          "data-test-id": "stop-execution",
          class: "mt-l",
          type: "tertiary",
          disabled: !workflowPermissions.value.execute,
          onClick: handleStopClick
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 2)) : executionUIDetails.value ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.$style.previewContainer)
      }, [
        _ctx.execution ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.executionDetails),
          "data-test-id": `execution-preview-details-${executionId.value}`
        }, [
          isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(WorkflowExecutionAnnotationPanel, { key: 0 })) : createCommentVNode("", true),
          createBaseVNode("div", null, [
            createVNode(unref(N8nText), {
              size: "large",
              color: "text-base",
              bold: true,
              "data-test-id": "execution-time"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(executionUIDetails.value?.startTime), 1)
              ]),
              _: 1
            }),
            _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
            executionUIDetails.value?.name === "running" ? (openBlock(), createBlock(_component_N8nSpinner, {
              key: 0,
              size: "small",
              class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
            }, null, 8, ["class"])) : createCommentVNode("", true),
            createVNode(unref(N8nText), {
              size: "medium",
              class: normalizeClass([_ctx.$style.status, _ctx.$style[executionUIDetails.value.name]]),
              "data-test-id": "execution-preview-label"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(executionUIDetails.value.label), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            _cache[4] || (_cache[4] = createTextVNode(" " + toDisplayString(" ") + " ")),
            executionUIDetails.value?.showTimestamp === false ? (openBlock(), createBlock(unref(N8nText), {
              key: 1,
              color: "text-base",
              size: "medium"
            }, {
              default: withCtx(() => [
                createTextVNode(" | ID#" + toDisplayString(_ctx.execution.id), 1)
              ]),
              _: 1
            })) : executionUIDetails.value.name === "running" ? (openBlock(), createBlock(unref(N8nText), {
              key: 2,
              color: "text-base",
              size: "medium"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning", {
                  interpolate: { time: executionUIDetails.value?.runningTime }
                })) + " | ID#" + toDisplayString(_ctx.execution.id), 1)
              ]),
              _: 1
            })) : executionUIDetails.value.name !== "waiting" ? (openBlock(), createBlock(unref(N8nText), {
              key: 3,
              color: "text-base",
              size: "medium",
              "data-test-id": "execution-preview-id"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeFinished", {
                  interpolate: { time: executionUIDetails.value?.runningTime ?? "unknown" }
                })) + " | ID#" + toDisplayString(_ctx.execution.id), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
            _ctx.execution.mode === "retry" ? (openBlock(), createBlock(unref(N8nText), {
              key: 4,
              color: "text-base",
              size: "medium"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " ", 1),
                createVNode(unref(RouterLink), {
                  class: normalizeClass(_ctx.$style.executionLink),
                  to: {
                    name: unref(VIEWS).EXECUTION_PREVIEW,
                    params: {
                      workflowId: _ctx.execution.workflowId,
                      executionId: _ctx.execution.retryOf
                    }
                  }
                }, {
                  default: withCtx(() => [
                    createTextVNode(" #" + toDisplayString(_ctx.execution.retryOf), 1)
                  ]),
                  _: 1
                }, 8, ["class", "to"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.actions)
          }, [
            createVNode(unref(N8nTooltip), {
              placement: "top",
              content: disableAddToTestTooltip.value,
              disabled: !disableAddToTestTooltip.value
            }, {
              default: withCtx(() => [
                createVNode(unref(ElDropdown), {
                  trigger: "click",
                  placement: "bottom-end",
                  "data-test-id": "test-execution-crud",
                  onCommand: handleCommand
                }, {
                  dropdown: withCtx(() => [
                    createVNode(unref(ElDropdownMenu), {
                      class: normalizeClass(_ctx.$style.testDropdownMenu)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.testDropdownMenuScroll)
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(testList.value, (test) => {
                            return openBlock(), createBlock(unref(ElDropdownItem), {
                              key: test.value,
                              command: test.command,
                              "data-test-id": "test-execution-add-to"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(N8nText), {
                                  color: test.added ? "primary" : "text-dark",
                                  class: normalizeClass(_ctx.$style.fontMedium)
                                }, {
                                  default: withCtx(() => [
                                    test.added ? (openBlock(), createBlock(unref(N8nIcon), {
                                      key: 0,
                                      icon: "check",
                                      color: "primary"
                                    })) : createCommentVNode("", true),
                                    createTextVNode(" " + toDisplayString(test.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "class"])
                              ]),
                              _: 2
                            }, 1032, ["command"]);
                          }), 128))
                        ], 2),
                        createVNode(unref(ElDropdownItem), {
                          class: normalizeClass(_ctx.$style.createTestButton),
                          command: { type: "createTest", id: _ctx.execution.id },
                          disabled: !workflowPermissions.value.update,
                          "data-test-id": "test-execution-create"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(N8nText), {
                              class: normalizeClass(_ctx.$style.fontMedium)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(N8nIcon), { icon: "plus" }),
                                createTextVNode(" " + toDisplayString(unref(locale).baseText("testDefinition.executions.tooltip.addTo")), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["class", "command", "disabled"])
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  default: withCtx(() => [
                    testDefinition.value ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(_ctx.$style.buttonGroup)
                    }, [
                      executionHasTestTag.value ? (openBlock(), createBlock(unref(N8nButton), {
                        key: 0,
                        disabled: !!disableAddToTestTooltip.value,
                        type: "secondary",
                        "data-test-id": "test-execution-remove",
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => removeExecutionTag(testDefinition.value.annotationTagId), ["stop"]))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.executions.removeFrom", {
                            interpolate: { name: testDefinition.value.name }
                          })), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton), {
                        key: 1,
                        disabled: !!disableAddToTestTooltip.value,
                        type: "primary",
                        "data-test-id": "test-execution-add",
                        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => addExecutionTag(testDefinition.value.annotationTagId), ["stop"]))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.executions.addTo.existing", {
                            interpolate: { name: testDefinition.value.name }
                          })), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])),
                      createVNode(unref(_sfc_main$4), {
                        disabled: !!disableAddToTestTooltip.value,
                        icon: "angle-down",
                        type: executionHasTestTag.value ? "secondary" : "primary",
                        "data-test-id": "test-execution-toggle"
                      }, null, 8, ["disabled", "type"])
                    ], 2)) : (openBlock(), createBlock(unref(N8nButton), {
                      key: 1,
                      disabled: !!disableAddToTestTooltip.value,
                      type: "secondary",
                      "data-test-id": "test-execution-toggle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.executions.addTo.new")) + " ", 1),
                        createVNode(unref(N8nIcon), {
                          icon: "angle-down",
                          size: "small",
                          class: "ml-2xs"
                        })
                      ]),
                      _: 1
                    }, 8, ["disabled"]))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["content", "disabled"]),
            createVNode(unref(RouterLink), {
              to: {
                name: unref(VIEWS).EXECUTION_DEBUG,
                params: {
                  name: _ctx.execution.workflowId,
                  executionId: _ctx.execution.id
                }
              }
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  size: "medium",
                  type: debugButtonData.value.type,
                  class: normalizeClass(_ctx.$style.debugLink),
                  disabled: !workflowPermissions.value.update
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      "data-test-id": "execution-debug-button",
                      onClick: _cache[2] || (_cache[2] = //@ts-ignore
                      (...args) => unref(executionDebugging).handleDebugLinkClick && unref(executionDebugging).handleDebugLinkClick(...args))
                    }, toDisplayString(debugButtonData.value.text), 1)
                  ]),
                  _: 1
                }, 8, ["type", "class", "disabled"])
              ]),
              _: 1
            }, 8, ["to"]),
            isRetriable.value ? (openBlock(), createBlock(unref(ElDropdown), {
              key: 0,
              ref: "retryDropdown",
              trigger: "click",
              class: "mr-xs",
              onCommand: handleRetryClick
            }, {
              dropdown: withCtx(() => [
                createVNode(unref(ElDropdownMenu), null, {
                  default: withCtx(() => [
                    createVNode(unref(ElDropdownItem), { command: "current-workflow" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ElDropdownItem), { command: "original-workflow" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_2, [
                  createVNode(unref(_sfc_main$4), {
                    size: "medium",
                    type: "tertiary",
                    title: unref(locale).baseText("executionsList.retryExecution"),
                    disabled: !workflowPermissions.value.update,
                    icon: "redo",
                    "data-test-id": "execution-preview-retry-button",
                    onBlur: onRetryButtonBlur
                  }, null, 8, ["title", "disabled"])
                ])
              ]),
              _: 1
            }, 512)) : createCommentVNode("", true),
            createVNode(unref(_sfc_main$4), {
              title: unref(locale).baseText("executionDetails.deleteExecution"),
              disabled: !workflowPermissions.value.update,
              icon: "trash",
              size: "medium",
              type: "tertiary",
              "data-test-id": "execution-preview-delete-button",
              onClick: onDeleteExecution
            }, null, 8, ["title", "disabled"])
          ], 2)
        ], 10, _hoisted_1)) : createCommentVNode("", true),
        (openBlock(), createBlock(WorkflowPreview, {
          key: executionId.value,
          mode: "execution",
          "loader-type": "spinner",
          "execution-id": executionId.value,
          "execution-mode": _ctx.execution?.mode || ""
        }, null, 8, ["execution-id", "execution-mode"]))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const previewContainer = "_previewContainer_w0lyd_123";
const executionDetails = "_executionDetails_w0lyd_129";
const spinner = "_spinner_w0lyd_148";
const running = "_running_w0lyd_154";
const waiting = "_waiting_w0lyd_159";
const success = "_success_w0lyd_163";
const error = "_error_w0lyd_167";
const newInfo = "_newInfo_w0lyd_171";
const runningInfo = "_runningInfo_w0lyd_172";
const newMessage = "_newMessage_w0lyd_179";
const runningMessage = "_runningMessage_w0lyd_180";
const debugLink = "_debugLink_w0lyd_186";
const actions = "_actions_w0lyd_191";
const testDropdownMenu = "_testDropdownMenu_w0lyd_196";
const testDropdownMenuScroll = "_testDropdownMenuScroll_w0lyd_200";
const createTestButton = "_createTestButton_w0lyd_206";
const fontMedium = "_fontMedium_w0lyd_216";
const buttonGroup = "_buttonGroup_w0lyd_220";
const style0 = {
  previewContainer,
  executionDetails,
  spinner,
  running,
  waiting,
  success,
  error,
  newInfo,
  runningInfo,
  newMessage,
  runningMessage,
  debugLink,
  actions,
  testDropdownMenu,
  testDropdownMenuScroll,
  createTestButton,
  "is-disabled": "_is-disabled_w0lyd_212",
  fontMedium,
  buttonGroup
};
const cssModules = {
  "$style": style0
};
const WorkflowExecutionsPreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkflowExecutionsPreview as default
};
