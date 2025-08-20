import { d as defineComponent, h as createElementBlock, g as openBlock, n as normalizeClass, i as createVNode, a5 as _sfc_main$4, _ as _export_sfc, a9 as useWorkflowsStore, aa as useRoute, r as ref, x as computed, aC as getResourcePermissions, ci as resolveDirective, e as createBlock, f as createCommentVNode, l as unref, E as ElDropdown, w as withCtx, q as N8nButton, c as useI18n, aL as N8nBadge, k as createTextVNode, t as toDisplayString, j as createBaseVNode, m as N8nHeading, F as Fragment, A as renderList, p as N8nText, b4 as withDirectives, a as useToast, a$ as useExecutionsStore, T as resolveComponent, W as createEventBus, ap as useTelemetry, dI as useExecutionHelpers, v as useSettingsStore, aF as EnterpriseEditionFeature, dJ as _sfc_main$6, dQ as RouterLink, V as VIEWS, H as ElDropdownMenu, I as ElDropdownItem, aq as useMessage, ar as MODAL_CONFIRM } from "./index-BsWH3eYA.js";
import { _ as _sfc_main$5 } from "./AnnotationTagsDropdown.ee.vue_vue_type_script_setup_true_lang-pNFoAlGS.js";
import { W as WorkflowPreview } from "./WorkflowPreview-CKGMAmhl.js";
import { u as useExecutionDebugging } from "./useExecutionDebugging-CX6sISQz.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VoteButtons",
  props: {
    vote: {}
  },
  emits: ["vote-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const onVoteClick = (vote) => {
      emit("vote-click", vote);
    };
    return (_ctx, _cache) => {
      const _component_n8n_icon_button = _sfc_main$4;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.ratingIcon)
      }, [
        createVNode(_component_n8n_icon_button, {
          class: normalizeClass([_ctx.$style.icon, _ctx.vote === "up" && _ctx.$style.up]),
          type: "tertiary",
          text: "",
          size: "small",
          icon: "thumbs-up",
          onClick: _cache[0] || (_cache[0] = ($event) => onVoteClick("up"))
        }, null, 8, ["class"]),
        createVNode(_component_n8n_icon_button, {
          class: normalizeClass([_ctx.$style.icon, _ctx.vote === "down" && _ctx.$style.down]),
          type: "tertiary",
          text: "",
          size: "small",
          icon: "thumbs-down",
          onClick: _cache[1] || (_cache[1] = ($event) => onVoteClick("down"))
        }, null, 8, ["class"])
      ], 2);
    };
  }
});
const ratingIcon = "_ratingIcon_1gp02_123";
const icon = "_icon_1gp02_127";
const up = "_up_1gp02_130";
const down = "_down_1gp02_130";
const style0$3 = {
  ratingIcon,
  icon,
  up,
  down
};
const cssModules$3 = {
  "$style": style0$3
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowExecutionAnnotationPanel.ee",
  props: {
    execution: {}
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const route = useRoute();
    const i18n = useI18n();
    const annotationDropdownRef = ref(null);
    const isDropdownVisible = ref(false);
    const workflowId = computed(() => route.params.name);
    const workflowPermissions = computed(
      () => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow
    );
    const customDataLength = computed(() => {
      return props.execution?.customData ? Object.keys(props.execution?.customData).length : 0;
    });
    function onEllipsisButtonBlur(event) {
      if (annotationDropdownRef.value && event.relatedTarget === null) {
        annotationDropdownRef.value.handleClose();
      }
    }
    function onDropdownVisibleChange(visible) {
      isDropdownVisible.value = visible;
    }
    return (_ctx, _cache) => {
      const _component_n8n_badge = N8nBadge;
      const _component_N8nButton = N8nButton;
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_text = N8nText;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return _ctx.execution ? (openBlock(), createBlock(unref(ElDropdown), {
        key: 0,
        ref_key: "annotationDropdownRef",
        ref: annotationDropdownRef,
        trigger: "click",
        onVisibleChange: onDropdownVisibleChange
      }, {
        dropdown: withCtx(() => [
          createBaseVNode("div", {
            ref: "container",
            class: normalizeClass(["execution-annotation-panel", _ctx.$style.container]),
            "data-test-id": "execution-annotation-panel"
          }, [
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
              _ctx.execution?.customData && Object.keys(_ctx.execution?.customData).length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.metadata)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.execution?.customData), (attr) => {
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
                        createTextVNode(toDisplayString(_ctx.execution?.customData[attr]), 1)
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
          ], 2)
        ]),
        default: withCtx(() => [
          createVNode(_component_N8nButton, {
            title: unref(i18n).baseText("executionDetails.additionalActions"),
            disabled: !workflowPermissions.value.update,
            icon: "list-checks",
            class: normalizeClass({
              [_ctx.$style.highlightDataButton]: true,
              [_ctx.$style.highlightDataButtonActive]: customDataLength.value > 0,
              [_ctx.$style.highlightDataButtonOpen]: isDropdownVisible.value
            }),
            size: "small",
            type: "secondary",
            "data-test-id": "execution-preview-ellipsis-button",
            onBlur: onEllipsisButtonBlur
          }, {
            default: withCtx(() => [
              customDataLength.value > 0 ? (openBlock(), createBlock(_component_n8n_badge, {
                key: 0,
                class: normalizeClass(_ctx.$style.badge),
                theme: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(customDataLength.value.toString()), 1)
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["title", "disabled", "class"])
        ]),
        _: 1
      }, 512)) : createCommentVNode("", true);
    };
  }
});
const highlightDataButton$1 = "_highlightDataButton_snwak_123";
const highlightDataButtonActive$1 = "_highlightDataButtonActive_snwak_128";
const highlightDataButtonOpen$1 = "_highlightDataButtonOpen_snwak_132";
const badge$1 = "_badge_snwak_138";
const container = "_container_snwak_142";
const section = "_section_snwak_154";
const metadata = "_metadata_snwak_163";
const heading = "_heading_snwak_167";
const controls = "_controls_snwak_174";
const customDataEntry = "_customDataEntry_snwak_186";
const key = "_key_snwak_193";
const noResultsContainer = "_noResultsContainer_snwak_197";
const style0$2 = {
  highlightDataButton: highlightDataButton$1,
  highlightDataButtonActive: highlightDataButtonActive$1,
  highlightDataButtonOpen: highlightDataButtonOpen$1,
  badge: badge$1,
  container,
  section,
  metadata,
  heading,
  controls,
  customDataEntry,
  key,
  noResultsContainer,
  "execution-annotation-panel": "_execution-annotation-panel_snwak_202",
  "el-skeleton__item": "_el-skeleton__item_snwak_202"
};
const cssModules$2 = {
  "$style": style0$2
};
const WorkflowExecutionAnnotationPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowExecutionAnnotationTags.ee",
  props: {
    execution: {}
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const telemetry = useTelemetry();
    const { showError } = useToast();
    const executionsStore = useExecutionsStore();
    const tagIds = computed(() => props.execution.annotation?.tags.map((tag) => tag.id) ?? []);
    const tags2 = computed(() => props.execution.annotation?.tags);
    const tagsEventBus = createEventBus();
    const isTagsEditEnabled = ref(false);
    const appliedTagIds = ref([]);
    const tagsSaving = ref(false);
    const tagsHasChanged = (prev, curr) => {
      if (prev.length !== curr.length) {
        return true;
      }
      const set = new Set(prev);
      return curr.reduce((acc, val) => acc || !set.has(val), false);
    };
    const onTagsEditEnable = () => {
      appliedTagIds.value = tagIds.value;
      isTagsEditEnabled.value = true;
      tagsEventBus.emit("focus");
    };
    const onTagsBlur = async () => {
      if (!props.execution) {
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
        await executionsStore.annotateExecution(props.execution.id, { tags: newTagIds });
        if (newTagIds.length > 0) {
          telemetry.track("User added execution annotation tag", {
            tag_ids: newTagIds,
            execution_id: props.execution.id
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
      const _component_N8nButton = N8nButton;
      const _component_el_tag = resolveComponent("el-tag");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.executionDetailsTags)
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.$style.tags),
          "data-test-id": "annotation-tags-container"
        }, [
          isTagsEditEnabled.value ? (openBlock(), createBlock(_sfc_main$5, {
            key: 0,
            ref: "dropdown",
            modelValue: appliedTagIds.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
            "create-enabled": true,
            "event-bus": unref(tagsEventBus),
            placeholder: unref(locale).baseText("executionAnnotationView.chooseOrCreateATag"),
            class: "tags-edit",
            "data-test-id": "workflow-tags-dropdown",
            onBlur: onTagsBlur,
            onEsc: onTagsEditEsc
          }, null, 8, ["modelValue", "event-bus", "placeholder"])) : tagIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createVNode(_component_N8nButton, {
              class: normalizeClass([_ctx.$style.addTagButton, "clickable"]),
              label: unref(locale).baseText("executionAnnotationView.addTag"),
              type: "secondary",
              size: "mini",
              outline: false,
              text: true,
              "data-test-id": "new-tag-link",
              icon: "plus",
              onClick: onTagsEditEnable
            }, null, 8, ["class", "label"])
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(tags2.value, (tag) => {
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
              createVNode(_component_N8nButton, {
                class: normalizeClass([_ctx.$style.addTagButton, _ctx.$style.addTagButtonIconOnly, "clickable"]),
                type: "secondary",
                size: "mini",
                outline: false,
                text: true,
                "data-test-id": "new-tag-link",
                icon: "plus",
                onClick: onTagsEditEnable
              }, null, 8, ["class"])
            ], 2)
          ], 2))
        ], 2)
      ], 2);
    };
  }
});
const tags = "_tags_19zht_123";
const addTagButton = "_addTagButton_19zht_128";
const addTagButtonIconOnly = "_addTagButtonIconOnly_19zht_149";
const tagsContainer = "_tagsContainer_19zht_154";
const style0$1 = {
  tags,
  addTagButton,
  addTagButtonIconOnly,
  tagsContainer
};
const cssModules$1 = {
  "$style": style0$1
};
const WorkflowExecutionAnnotationTags = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
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
    const locale = useI18n();
    const { showError } = useToast();
    const executionHelpers = useExecutionHelpers();
    const message = useMessage();
    const executionDebugging = useExecutionDebugging();
    const workflowsStore = useWorkflowsStore();
    const settingsStore = useSettingsStore();
    const retryDropdownRef = ref(null);
    const workflowId = computed(() => route.params.name);
    const workflowPermissions = computed(
      () => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow
    );
    const executionId = computed(() => route.params.executionId);
    const nodeId = computed(() => route.params.nodeId);
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
    const executionsStore = useExecutionsStore();
    const activeExecution = computed(() => {
      return executionsStore.activeExecution;
    });
    const vote = computed(() => activeExecution.value?.annotation?.vote || null);
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
      if (props.execution) {
        emit("retryExecution", { execution: props.execution, command });
      }
    }
    function handleStopClick() {
      emit("stopExecution");
    }
    function onRetryButtonBlur(event) {
      if (retryDropdownRef.value && event.relatedTarget === null) {
        retryDropdownRef.value.handleClose();
      }
    }
    const onVoteClick = async (voteValue) => {
      if (!activeExecution.value) {
        return;
      }
      const voteToSet = voteValue === vote.value ? null : voteValue;
      try {
        await executionsStore.annotateExecution(activeExecution.value.id, { vote: voteToSet });
      } catch (e) {
        showError(e, "executionAnnotationView.vote.error");
      }
    };
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      const _component_N8nButton = N8nButton;
      const _component_N8nSpinner = _sfc_main$6;
      const _component_VoteButtons = __unplugin_components_3;
      const _component_N8nIconButton = _sfc_main$4;
      return executionUIDetails.value?.name === "new" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.newInfo)
      }, [
        createVNode(_component_N8nText, {
          class: normalizeClass(_ctx.$style.newMessage),
          color: "text-light"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.newMessage")), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(_component_N8nButton, {
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
        createVNode(_component_N8nText, {
          class: normalizeClass(_ctx.$style.runningMessage),
          color: "text-light"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningMessage")), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(_component_N8nButton, {
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
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.executionDetailsLeft)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.executionTitle)
            }, [
              createVNode(_component_N8nText, {
                size: "large",
                color: "text-dark",
                bold: true,
                "data-test-id": "execution-time"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(executionUIDetails.value?.startTime), 1)
                ]),
                _: 1
              }),
              isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(_component_VoteButtons, {
                key: 0,
                "data-test-id": "execution-preview-vote-buttons",
                vote: vote.value,
                class: normalizeClass(_ctx.$style.voteButtons),
                onVoteClick
              }, null, 8, ["vote", "class"])) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.executionDetailsInfo)
            }, [
              executionUIDetails.value?.name === "running" ? (openBlock(), createBlock(_component_N8nSpinner, {
                key: 0,
                size: "small",
                class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
              }, null, 8, ["class"])) : createCommentVNode("", true),
              createVNode(_component_N8nText, {
                size: "medium",
                class: normalizeClass([_ctx.$style.status, _ctx.$style[executionUIDetails.value.name]]),
                "data-test-id": "execution-preview-label"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(executionUIDetails.value.label), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              _cache[1] || (_cache[1] = createTextVNode(" " + toDisplayString(" ") + " ")),
              executionUIDetails.value?.showTimestamp === false ? (openBlock(), createBlock(_component_N8nText, {
                key: 1,
                color: "text-base",
                size: "medium"
              }, {
                default: withCtx(() => [
                  createTextVNode(" | ID#" + toDisplayString(_ctx.execution.id), 1)
                ]),
                _: 1
              })) : executionUIDetails.value.name === "running" ? (openBlock(), createBlock(_component_N8nText, {
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
              })) : executionUIDetails.value.name !== "waiting" ? (openBlock(), createBlock(_component_N8nText, {
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
              })) : createCommentVNode("", true)
            ], 2),
            _ctx.execution.mode === "retry" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.executionDetailsRetry)
            }, [
              createVNode(_component_N8nText, {
                color: "text-base",
                size: "small"
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
              })
            ], 2)) : createCommentVNode("", true),
            isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(WorkflowExecutionAnnotationTags, {
              key: 1,
              execution: _ctx.execution
            }, null, 8, ["execution"])) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.actions)
          }, [
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
                createVNode(_component_N8nButton, {
                  size: "medium",
                  type: debugButtonData.value.type,
                  class: normalizeClass(_ctx.$style.debugLink),
                  disabled: !workflowPermissions.value.update
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      "data-test-id": "execution-debug-button",
                      onClick: _cache[0] || (_cache[0] = //@ts-ignore
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
                  createVNode(_component_N8nIconButton, {
                    size: "medium",
                    type: "tertiary",
                    title: unref(locale).baseText("executionsList.retryExecution"),
                    disabled: !workflowPermissions.value.update,
                    icon: "redo-2",
                    "data-test-id": "execution-preview-retry-button",
                    onBlur: onRetryButtonBlur
                  }, null, 8, ["title", "disabled"])
                ])
              ]),
              _: 1
            }, 512)) : createCommentVNode("", true),
            isAnnotationEnabled.value && activeExecution.value ? (openBlock(), createBlock(WorkflowExecutionAnnotationPanel, {
              key: 1,
              execution: activeExecution.value
            }, null, 8, ["execution"])) : createCommentVNode("", true),
            createVNode(_component_N8nIconButton, {
              title: unref(locale).baseText("executionDetails.deleteExecution"),
              disabled: !workflowPermissions.value.update,
              icon: "trash-2",
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
          "execution-mode": _ctx.execution?.mode || "",
          "node-id": nodeId.value
        }, null, 8, ["execution-id", "execution-mode", "node-id"]))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const previewContainer = "_previewContainer_1v3g2_123";
const executionDetails = "_executionDetails_1v3g2_129";
const executionDetailsLeft = "_executionDetailsLeft_1v3g2_147";
const executionTitle = "_executionTitle_1v3g2_153";
const voteButtons = "_voteButtons_1v3g2_159";
const spinner = "_spinner_1v3g2_163";
const running = "_running_1v3g2_169";
const waiting = "_waiting_1v3g2_174";
const success = "_success_1v3g2_178";
const error = "_error_1v3g2_182";
const newInfo = "_newInfo_1v3g2_186";
const runningInfo = "_runningInfo_1v3g2_187";
const newMessage = "_newMessage_1v3g2_194";
const runningMessage = "_runningMessage_1v3g2_195";
const debugLink = "_debugLink_1v3g2_201";
const actions = "_actions_1v3g2_206";
const highlightDataButton = "_highlightDataButton_1v3g2_211";
const highlightDataButtonActive = "_highlightDataButtonActive_1v3g2_216";
const highlightDataButtonOpen = "_highlightDataButtonOpen_1v3g2_220";
const badge = "_badge_1v3g2_226";
const style0 = {
  previewContainer,
  executionDetails,
  executionDetailsLeft,
  executionTitle,
  voteButtons,
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
  highlightDataButton,
  highlightDataButtonActive,
  highlightDataButtonOpen,
  badge
};
const cssModules = {
  "$style": style0
};
const WorkflowExecutionsPreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkflowExecutionsPreview as default
};
