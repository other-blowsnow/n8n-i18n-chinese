import { d as defineComponent, e as createBlock, g as openBlock, bu as resolveDynamicComponent, K as mergeProps, w as withCtx, Y as renderSlot, i as createVNode, k as unref, N as N8nIcon, _ as _export_sfc, x as computed, r as ref, j as createBaseVNode, n as normalizeClass, h as createElementBlock, f as createCommentVNode, t as toDisplayString, D as useI18n, F as Fragment, A as renderList, q as N8nButton, l as createTextVNode, y as N8nPopoverReka, b as useRouter, a as useToast, ad as useEvaluationStore, a2 as useWorkflowsStore, eX as orderBy, gQ as convertToDisplayDate, c as useI18n$1, o as onMounted, m as N8nHeading, p as N8nText, z as N8nCallout, aa as N8nTooltip, gS as ElScrollbar, ab as _sfc_main$3, dI as N8nLoading, B as withModifiers, V as VIEWS } from "./index-lkSN61-i.js";
import { a as getTestCasesColumns, b as getDefaultOrderedColumns, c as applyCachedSortOrder, d as applyCachedVisibility, e as getTestTableHeaders, g as getErrorBaseKey, s as statusDictionary, T as TestTableBase } from "./evaluation.constants-BmY0_d9q.js";
import { u as useWorkflowSettingsCache } from "./useWorkflowsCache-CRoOBbZv.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nExternalLink" },
  __name: "ExternalLink",
  props: {
    href: { default: void 0 },
    size: { default: void 0 },
    newWindow: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.href ? "a" : "button"), mergeProps({
        href: _ctx.href,
        target: _ctx.href && _ctx.newWindow ? "_blank" : void 0,
        rel: _ctx.href && _ctx.newWindow ? "noopener noreferrer" : void 0,
        class: _ctx.$style.link
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          createVNode(unref(N8nIcon), {
            icon: "external-link",
            size: _ctx.size
          }, null, 8, ["size"])
        ]),
        _: 3
      }, 16, ["href", "target", "rel", "class"]);
    };
  }
});
const link = "_link_h1bca_123";
const style0$1 = {
  link
};
const cssModules$2 = {
  "$style": style0$1
};
const N8nExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = {
  key: 0,
  style: { display: "flex", flexDirection: "column", gap: 2 },
  "data-testid": "visible-columns-section"
};
const _hoisted_2$1 = ["data-column-key", "onDragstart", "onDragover", "onDrop"];
const _hoisted_3$1 = {
  key: 1,
  style: { display: "flex", flexDirection: "column", gap: 2 },
  "data-testid": "hidden-columns-section"
};
const _hoisted_4 = ["data-column-key"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableHeaderControlsButton",
  props: {
    columns: {},
    buttonSize: {},
    iconSize: {}
  },
  emits: ["update:columnVisibility", "update:columnOrder"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visibleColumns = computed(
      () => props.columns.filter(
        (column2) => !column2.disabled && column2.visible
      )
    );
    const hiddenColumns = computed(
      () => props.columns.filter(
        (column2) => !column2.disabled && !column2.visible
      )
    );
    const { t } = useI18n();
    const draggedItem = ref(null);
    const dragOverItem = ref(null);
    const emit = __emit;
    const resetDragState = () => {
      draggedItem.value = null;
      dragOverItem.value = null;
    };
    const handleDragStart = (event, columnKey) => {
      if (!event.dataTransfer) return;
      draggedItem.value = columnKey;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", columnKey);
    };
    const handleDragOver = (event, columnKey) => {
      event.preventDefault();
      if (!event.dataTransfer) return;
      event.dataTransfer.dropEffect = "move";
      dragOverItem.value = columnKey;
    };
    const handleDragLeave = () => {
      dragOverItem.value = null;
    };
    const handleDrop = (event, targetColumnKey) => {
      event.preventDefault();
      const draggedColumnKey = draggedItem.value;
      if (!draggedColumnKey || draggedColumnKey === targetColumnKey) {
        resetDragState();
        return;
      }
      const allColumnKeys = props.columns.map((col) => col.key);
      const draggedIndex = allColumnKeys.indexOf(draggedColumnKey);
      if (draggedIndex === -1) {
        resetDragState();
        return;
      }
      let newOrder;
      if (targetColumnKey === "END") {
        newOrder = [...allColumnKeys];
        newOrder.splice(draggedIndex, 1);
        newOrder.push(draggedColumnKey);
      } else {
        const targetIndex = allColumnKeys.indexOf(targetColumnKey);
        if (targetIndex === -1) {
          resetDragState();
          return;
        }
        newOrder = [...allColumnKeys];
        newOrder.splice(draggedIndex, 1);
        let insertIndex = targetIndex;
        if (draggedIndex <= targetIndex) {
          insertIndex = targetIndex - 1;
        }
        newOrder.splice(insertIndex, 0, draggedColumnKey);
      }
      emit("update:columnOrder", newOrder);
      resetDragState();
    };
    const handleDragEnd = () => {
      resetDragState();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(N8nPopoverReka, {
        class: normalizeClass(_ctx.$style.container),
        width: "260px",
        "max-height": "300px",
        "scroll-type": "auto"
      }, {
        trigger: withCtx(() => [
          createVNode(unref(N8nButton), {
            icon: "sliders-horizontal",
            type: "secondary",
            "icon-size": _ctx.iconSize,
            size: _ctx.buttonSize
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("tableControlsButton.display")), 1)
            ]),
            _: 1
          }, 8, ["icon-size", "size"])
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.contentContainer)
          }, [
            visibleColumns.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createBaseVNode("h5", {
                class: normalizeClass(_ctx.$style.header)
              }, toDisplayString(unref(t)("tableControlsButton.shown")), 3),
              (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column2) => {
                return openBlock(), createElementBlock("div", {
                  key: column2.key,
                  class: normalizeClass(_ctx.$style.columnWrapper)
                }, [
                  dragOverItem.value === column2.key ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.dropIndicator),
                    "data-testid": "drop-indicator"
                  }, null, 2)) : createCommentVNode("", true),
                  createBaseVNode("fieldset", {
                    class: normalizeClass([
                      _ctx.$style.column,
                      _ctx.$style.draggable,
                      { [_ctx.$style.dragging]: draggedItem.value === column2.key }
                    ]),
                    draggable: "true",
                    "data-testid": "visible-column",
                    "data-column-key": column2.key,
                    onDragstart: (event) => handleDragStart(event, column2.key),
                    onDragover: (event) => handleDragOver(event, column2.key),
                    onDragleave: handleDragLeave,
                    onDrop: (event) => handleDrop(event, column2.key),
                    onDragend: handleDragEnd
                  }, [
                    createVNode(unref(N8nIcon), {
                      icon: "grip-vertical",
                      class: normalizeClass(_ctx.$style.grip)
                    }, null, 8, ["class"]),
                    createBaseVNode("label", null, toDisplayString(column2.label), 1),
                    createVNode(unref(N8nIcon), {
                      class: normalizeClass(_ctx.$style.visibilityToggle),
                      icon: "eye",
                      "data-testid": "visibility-toggle-visible",
                      onClick: () => emit("update:columnVisibility", column2.key, false)
                    }, null, 8, ["class", "onClick"])
                  ], 42, _hoisted_2$1)
                ], 2);
              }), 128)),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.endDropZone),
                "data-testid": "end-drop-zone",
                onDragover: _cache[0] || (_cache[0] = (event) => handleDragOver(event, "END")),
                onDragleave: handleDragLeave,
                onDrop: _cache[1] || (_cache[1] = (event) => handleDrop(event, "END"))
              }, [
                dragOverItem.value === "END" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.dropIndicator),
                  "data-testid": "drop-indicator"
                }, null, 2)) : createCommentVNode("", true)
              ], 34)
            ])) : createCommentVNode("", true),
            hiddenColumns.value.length ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
              createBaseVNode("h4", {
                class: normalizeClass(_ctx.$style.header)
              }, toDisplayString(unref(t)("tableControlsButton.hidden")), 3),
              (openBlock(true), createElementBlock(Fragment, null, renderList(hiddenColumns.value, (column2) => {
                return openBlock(), createElementBlock("fieldset", {
                  key: column2.key,
                  class: normalizeClass([_ctx.$style.column, _ctx.$style.hidden]),
                  "data-testid": "hidden-column",
                  "data-column-key": column2.key
                }, [
                  createVNode(unref(N8nIcon), {
                    icon: "grip-vertical",
                    class: normalizeClass([_ctx.$style.grip, _ctx.$style.hidden])
                  }, null, 8, ["class"]),
                  createBaseVNode("label", null, toDisplayString(column2.label), 1),
                  createVNode(unref(N8nIcon), {
                    class: normalizeClass(_ctx.$style.visibilityToggle),
                    icon: "eye-off",
                    "data-testid": "visibility-toggle-hidden",
                    onClick: () => emit("update:columnVisibility", column2.key, true)
                  }, null, 8, ["class", "onClick"])
                ], 10, _hoisted_4);
              }), 128))
            ])) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const header$1 = "_header_1uqcv_123";
const grip = "_grip_1uqcv_129";
const hidden = "_hidden_1uqcv_133";
const contentContainer = "_contentContainer_1uqcv_137";
const column = "_column_1uqcv_141";
const draggable = "_draggable_1uqcv_153";
const dragging = "_dragging_1uqcv_161";
const columnWrapper = "_columnWrapper_1uqcv_166";
const dropIndicator = "_dropIndicator_1uqcv_170";
const endDropZone = "_endDropZone_1uqcv_181";
const visibilityToggle = "_visibilityToggle_1uqcv_194";
const style0 = {
  header: header$1,
  grip,
  hidden,
  contentContainer,
  column,
  draggable,
  dragging,
  columnWrapper,
  dropIndicator,
  endDropZone,
  visibilityToggle
};
const cssModules$1 = {
  "$style": style0
};
const N8nTableHeaderControlsButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { style: { "display": "flex" } };
const _hoisted_2 = { style: { "display": "flex", "justify-content": "space-between", "gap": "10px" } };
const _hoisted_3 = { style: { "display": "inline-flex", "gap": "12px", "align-items": "center", "max-width": "100%" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestRunDetailView",
  setup(__props) {
    const router = useRouter();
    const toast = useToast();
    const evaluationStore = useEvaluationStore();
    const workflowsStore = useWorkflowsStore();
    const locale = useI18n$1();
    const workflowsCache = useWorkflowSettingsCache();
    const isLoading = ref(true);
    const testCases = ref([]);
    const hasFailedTestCases = ref(false);
    const runId = computed(() => router.currentRoute.value.params.runId);
    const workflowId = computed(() => router.currentRoute.value.params.name);
    const workflowName = computed(() => workflowsStore.getWorkflowById(workflowId.value)?.name ?? "");
    const cachedUserPreferences = ref();
    const expandedRows = ref(/* @__PURE__ */ new Set());
    const run = computed(() => evaluationStore.testRunsById[runId.value]);
    const runErrorDetails = computed(() => {
      return run.value?.errorDetails;
    });
    const filteredTestCases = computed(
      () => orderBy(testCases.value, (record) => record.runAt, ["asc"]).map(
        (record, index) => Object.assign(record, { index: index + 1 })
      )
    );
    const isAllExpanded = computed(() => expandedRows.value.size === filteredTestCases.value.length);
    const testRunIndex = computed(
      () => Object.values(
        orderBy(evaluationStore.testRunsById, (record) => new Date(record.runAt), ["asc"]).filter(
          ({ workflowId: wId }) => wId === workflowId.value
        ) ?? {}
      ).findIndex(({ id }) => id === runId.value)
    );
    const formattedTime = computed(() => convertToDisplayDate(new Date(run.value?.runAt).getTime()));
    const openRelatedExecution = (row) => {
      const executionId = row.executionId;
      if (executionId) {
        const { href } = router.resolve({
          name: VIEWS.EXECUTION_PREVIEW,
          params: {
            name: workflowId.value,
            executionId
          }
        });
        window.open(href, "_blank");
      }
    };
    const inputColumns = computed(() => getTestCasesColumns(filteredTestCases.value, "inputs"));
    const orderedColumns = computed(() => {
      const defaultOrder = getDefaultOrderedColumns(run.value, filteredTestCases.value);
      const appliedCachedOrder = applyCachedSortOrder(defaultOrder, cachedUserPreferences.value?.order);
      return applyCachedVisibility(appliedCachedOrder, cachedUserPreferences.value?.visibility);
    });
    const columns = computed(() => [
      {
        prop: "index",
        width: 100,
        label: locale.baseText("evaluation.runDetail.testCase"),
        sortable: true
      },
      {
        prop: "status",
        label: locale.baseText("evaluation.listRuns.status"),
        minWidth: 125
      },
      ...getTestTableHeaders(orderedColumns.value, filteredTestCases.value)
    ]);
    const metrics = computed(() => run.value?.metrics ?? {});
    const fetchExecutionTestCases = async () => {
      if (!runId.value || !workflowId.value) return;
      isLoading.value = true;
      try {
        const testRun = await evaluationStore.getTestRun({
          workflowId: workflowId.value,
          runId: runId.value
        });
        const testCaseEvaluationExecutions = await evaluationStore.fetchTestCaseExecutions({
          workflowId: workflowId.value,
          runId: testRun.id
        });
        testCases.value = testCaseEvaluationExecutions ?? [];
        hasFailedTestCases.value = testCaseEvaluationExecutions?.some(
          (testCase) => testCase.status === "error"
        );
        await evaluationStore.fetchTestRuns(run.value.workflowId);
      } catch (error) {
        toast.showError(error, locale.baseText("evaluation.listRuns.toast.error.fetchTestCases"));
      } finally {
        isLoading.value = false;
      }
    };
    async function loadCachedUserPreferences() {
      cachedUserPreferences.value = await workflowsCache.getEvaluationPreferences(workflowId.value);
    }
    async function saveCachedUserPreferences() {
      if (cachedUserPreferences.value) {
        await workflowsCache.saveEvaluationPreferences(workflowId.value, cachedUserPreferences.value);
      }
    }
    async function handleColumnVisibilityUpdate(columnKey, visibility) {
      cachedUserPreferences.value ??= { order: [], visibility: {} };
      cachedUserPreferences.value.visibility[columnKey] = visibility;
      await saveCachedUserPreferences();
    }
    async function handleColumnOrderUpdate(newOrder) {
      cachedUserPreferences.value ??= { order: [], visibility: {} };
      cachedUserPreferences.value.order = newOrder;
      await saveCachedUserPreferences();
    }
    function toggleRowExpansion(row) {
      if (expandedRows.value.has(row.id)) {
        expandedRows.value.delete(row.id);
      } else {
        expandedRows.value.add(row.id);
      }
    }
    function toggleAllExpansion() {
      if (isAllExpanded.value) {
        expandedRows.value.clear();
      } else {
        expandedRows.value = new Set(filteredTestCases.value.map((row) => row.id));
      }
    }
    onMounted(async () => {
      await fetchExecutionTestCases();
      await loadCachedUserPreferences();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "test-definition-run-detail"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.backButton),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
          }, [
            createVNode(unref(N8nIcon), { icon: "arrow-left" }),
            createVNode(unref(N8nHeading), {
              size: "large",
              bold: true
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.runListHeader", {
                  interpolate: {
                    name: workflowName.value
                  }
                })), 1)
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.headerSeparator)
          }, "/", 2),
          createVNode(unref(N8nHeading), {
            size: "large",
            bold: true
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.testCasesListHeader", {
                interpolate: {
                  index: testRunIndex.value + 1
                }
              })), 1)
            ]),
            _: 1
          })
        ], 2),
        run.value?.status === "error" ? (openBlock(), createBlock(unref(N8nCallout), {
          key: 0,
          theme: "danger",
          icon: "triangle-alert",
          class: "mb-s"
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nText), {
              size: "small",
              class: normalizeClass(_ctx.$style.capitalized)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText(
                  `${unref(getErrorBaseKey)(run.value?.errorCode)}`,
                  runErrorDetails.value ? { interpolate: runErrorDetails.value } : {}
                ) ?? unref(locale).baseText(`${unref(getErrorBaseKey)("UNKNOWN_ERROR")}`)), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(ElScrollbar), {
          always: "",
          class: normalizeClass([_ctx.$style.scrollableSummary, "mb-m"])
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.summaryCard)
              }, [
                createVNode(unref(N8nText), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.summaryCardTitle)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.totalCases")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(unref(N8nText), {
                  size: "xlarge",
                  class: normalizeClass(_ctx.$style.summaryCardContentLargeNumber),
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(testCases.value.length), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.summaryCard)
              }, [
                createVNode(unref(N8nText), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.summaryCardTitle)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.ranAt")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                createBaseVNode("div", null, [
                  createVNode(unref(N8nText), { size: "medium" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(formattedTime.value.date) + " " + toDisplayString(formattedTime.value.time), 1)
                    ]),
                    _: 1
                  })
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.summaryCard)
              }, [
                createVNode(unref(N8nText), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.summaryCardTitle)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.status")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                run.value?.status === "completed" && hasFailedTestCases.value ? (openBlock(), createBlock(unref(N8nText), {
                  key: 0,
                  size: "medium",
                  color: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nText), {
                  key: 1,
                  color: unref(statusDictionary)[run.value?.status]?.color,
                  size: "medium",
                  class: normalizeClass(run.value?.status.toLowerCase()),
                  style: { "text-transform": "capitalize" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(run.value?.status), 1)
                  ]),
                  _: 1
                }, 8, ["color", "class"]))
              ], 2),
              (openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (value, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  class: normalizeClass(_ctx.$style.summaryCard)
                }, [
                  createVNode(unref(N8nTooltip), {
                    content: key,
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(N8nText), {
                        size: "small",
                        class: normalizeClass(_ctx.$style.summaryCardTitle),
                        style: { "text-overflow": "ellipsis", "overflow": "hidden" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(key), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ]),
                    _: 2
                  }, 1032, ["content"]),
                  createVNode(unref(N8nText), {
                    size: "xlarge",
                    class: normalizeClass(_ctx.$style.summaryCardContentLargeNumber),
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value.toFixed(2)), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 2);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["class"]),
        createBaseVNode("div", {
          class: normalizeClass(["mb-s", _ctx.$style.runsHeader])
        }, [
          createBaseVNode("div", null, [
            createVNode(unref(N8nHeading), {
              size: "large",
              bold: true
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.allTestCases", {
                  interpolate: {
                    count: filteredTestCases.value.length
                  }
                })), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.runsHeaderButtons)
          }, [
            createVNode(unref(_sfc_main$3), {
              icon: isAllExpanded.value ? "chevrons-down-up" : "chevrons-up-down",
              type: "secondary",
              size: "medium",
              onClick: toggleAllExpansion
            }, null, 8, ["icon"]),
            createVNode(unref(N8nTableHeaderControlsButton), {
              size: "medium",
              "icon-size": "small",
              columns: orderedColumns.value,
              "onUpdate:columnVisibility": handleColumnVisibilityUpdate,
              "onUpdate:columnOrder": handleColumnOrderUpdate
            }, null, 8, ["columns"])
          ], 2)
        ], 2),
        !isLoading.value && !inputColumns.value.length && run.value?.status === "completed" && run.value?.finalResult === "success" ? (openBlock(), createBlock(unref(N8nCallout), {
          key: 1,
          theme: "secondary",
          icon: "info",
          class: "mb-s"
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nText), {
              size: "small",
              class: normalizeClass(_ctx.$style.capitalized)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.notice.useSetInputs")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        isLoading.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.loading)
        }, [
          createVNode(unref(N8nLoading), {
            loading: true,
            rows: 5
          })
        ], 2)) : (openBlock(), createBlock(TestTableBase, {
          key: 3,
          data: filteredTestCases.value,
          columns: columns.value,
          "default-sort": { prop: "id", order: "descending" },
          "expanded-rows": expandedRows.value,
          onRowClick: toggleRowExpansion
        }, {
          id: withCtx(({ row }) => [
            createBaseVNode("div", _hoisted_2, toDisplayString(row.id), 1)
          ]),
          index: withCtx(({ row }) => [
            createBaseVNode("div", null, [
              row.executionId ? (openBlock(), createBlock(unref(N8nExternalLink), {
                key: 0,
                class: "open-execution-link",
                onClick: withModifiers(($event) => openRelatedExecution(row), ["stop", "prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode(" #" + toDisplayString(row.index), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(_ctx.$style.deletedExecutionRowIndex)
              }, "#" + toDisplayString(row.index), 3))
            ])
          ]),
          status: withCtx(({ row }) => [
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(N8nIcon), {
                icon: unref(statusDictionary)[row.status].icon,
                color: unref(statusDictionary)[row.status].color
              }, null, 8, ["icon", "color"]),
              row.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 0,
                placement: "top",
                "show-after": 300
              }, {
                content: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}`) || row.status), 1)
                ]),
                default: withCtx(() => [
                  createVNode(unref(N8nText), {
                    color: "danger",
                    class: normalizeClass(_ctx.$style.capitalized)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}`) || row.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024)) : (openBlock(), createBlock(unref(N8nText), {
                key: 1,
                class: normalizeClass(_ctx.$style.capitalized)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.status), 1)
                ]),
                _: 2
              }, 1032, ["class"]))
            ])
          ]),
          _: 1
        }, 8, ["data", "columns", "expanded-rows"]))
      ], 2);
    };
  }
});
const container = "_container_miblg_123";
const header = "_header_miblg_130";
const timestamp = "_timestamp_miblg_136";
const backButton = "_backButton_miblg_141";
const headerSeparator = "_headerSeparator_miblg_156";
const summary = "_summary_miblg_161";
const summaryStats = "_summaryStats_miblg_164";
const stat = "_stat_miblg_169";
const controls = "_controls_miblg_174";
const downloadButton = "_downloadButton_miblg_180";
const runsHeader = "_runsHeader_miblg_184";
const runsHeaderButtons = "_runsHeaderButtons_miblg_191";
const loading = "_loading_miblg_196";
const scrollableSummary = "_scrollableSummary_miblg_203";
const summaryCard = "_summaryCard_miblg_218";
const capitalized = "_capitalized_miblg_235";
const summaryCardTitle = "_summaryCardTitle_miblg_243";
const summaryCardContentLargeNumber = "_summaryCardContentLargeNumber_miblg_254";
const alertText = "_alertText_miblg_259";
const deletedExecutionRowIndex = "_deletedExecutionRowIndex_miblg_274";
const style1 = {
  container,
  header,
  timestamp,
  backButton,
  headerSeparator,
  summary,
  summaryStats,
  stat,
  controls,
  downloadButton,
  runsHeader,
  runsHeaderButtons,
  loading,
  scrollableSummary,
  summaryCard,
  capitalized,
  summaryCardTitle,
  summaryCardContentLargeNumber,
  alertText,
  deletedExecutionRowIndex
};
const cssModules = {
  "$style": style1
};
const TestRunDetailView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-e79aa4db"]]);
export {
  TestRunDetailView as default
};
