import { d as defineComponent, r as ref, aA as useNDVStore, T as useWorkflowsStore, eR as storeToRefs, x as computed, o as onMounted, $ as watch, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, f as createCommentVNode, F as Fragment, G as renderList, j as createVNode, w as withCtx, aI as withDirectives, e as createBlock, m as unref, a$ as _sfc_main$1, aJ as vShow, c as useI18n, aZ as N8nTooltip, l as createTextVNode, t as toDisplayString, fo as InfoTip, gU as Draggable, hj as TextWithHighlights, hk as MappingPill, hl as shorten, hm as Tree, hn as getPairedItemId, ho as getMappedExpression, aX as useExternalHooks, am as useTelemetry, _ as _export_sfc } from "./index-Y0sphpVt.js";
import { u as useExecutionHelpers } from "./useExecutionHelpers-B_Y5s7gr.js";
const _imports_0 = "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif";
const _hoisted_1 = ["data-row"];
const _hoisted_2 = ["data-row"];
const _hoisted_3 = ["data-test-id"];
const _hoisted_4 = ["data-row"];
const _hoisted_5 = ["data-row", "data-col"];
const _hoisted_6 = { key: 1 };
const MAX_COLUMNS_LIMIT = 40;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunDataTable",
  props: {
    node: {},
    inputData: {},
    distanceFromActive: {},
    pageOffset: {},
    runIndex: { default: 0 },
    outputIndex: { default: 0 },
    totalRuns: { default: 0 },
    mappingEnabled: { type: Boolean, default: false },
    hasDefaultHoverState: { type: Boolean, default: false },
    search: { default: "" },
    headerBgColor: { default: "base" },
    compact: { type: Boolean, default: false },
    disableHoverHighlight: { type: Boolean, default: false }
  },
  emits: ["activeRowChanged", "displayModeChange", "mounted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const externalHooks = useExternalHooks();
    const activeColumn = ref(-1);
    const forceShowGrip = ref(false);
    const draggedColumn = ref(false);
    const draggingPath = ref(null);
    const hoveringPath = ref(null);
    const activeRow = ref(null);
    const columnLimit = ref(MAX_COLUMNS_LIMIT);
    const columnLimitExceeded = ref(false);
    const draggableRef = ref();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const { trackOpeningRelatedExecution, resolveRelatedExecutionUrl } = useExecutionHelpers();
    const {
      hoveringItem,
      focusedMappableInput,
      highlightDraggables: highlight2
    } = storeToRefs(ndvStore);
    const canDraggableDrop = computed(() => ndvStore.canDraggableDrop);
    const draggableStickyPosition = computed(() => ndvStore.draggableStickyPos);
    const pairedItemMappings = computed(() => workflowsStore.workflowExecutionPairedItemMappings);
    const tableData = computed(() => convertToTable(props.inputData));
    onMounted(() => {
      if (tableData.value?.columns && draggableRef.value) {
        const tbody = draggableRef.value.$refs.wrapper;
        if (tbody) {
          emit("mounted", {
            avgRowHeight: tbody.offsetHeight / tableData.value.data.length
          });
        }
      }
    });
    function isHoveringRow(row) {
      if (props.disableHoverHighlight) {
        return false;
      }
      if (row === activeRow.value) {
        return true;
      }
      const itemIndex = props.pageOffset + row;
      if (itemIndex === 0 && !hoveringItem.value && props.hasDefaultHoverState && props.distanceFromActive === 1) {
        return true;
      }
      const itemNodeId = getPairedItemId(
        props.node?.name ?? "",
        props.runIndex || 0,
        props.outputIndex || 0,
        itemIndex
      );
      if (!hoveringItem.value || !pairedItemMappings.value[itemNodeId]) {
        return false;
      }
      const hoveringItemId = getPairedItemId(
        hoveringItem.value.nodeName,
        hoveringItem.value.runIndex,
        hoveringItem.value.outputIndex,
        hoveringItem.value.itemIndex
      );
      return pairedItemMappings.value[itemNodeId].has(hoveringItemId);
    }
    function showExecutionLink(index) {
      if (index === activeRow.value) {
        return true;
      }
      if (activeRow.value === null) {
        return index === 0;
      }
      return false;
    }
    function onMouseEnterCell(e) {
      const target = e.target;
      if (target && props.mappingEnabled) {
        const col = target.dataset.col;
        if (col && !isNaN(parseInt(col, 10))) {
          activeColumn.value = parseInt(col, 10);
        }
      }
      if (target) {
        const row = target.dataset.row;
        if (row && !isNaN(parseInt(row, 10))) {
          activeRow.value = parseInt(row, 10);
          emit("activeRowChanged", props.pageOffset + activeRow.value);
        }
      }
    }
    function onMouseLeaveCell() {
      activeColumn.value = -1;
      activeRow.value = null;
      emit("activeRowChanged", null);
    }
    function onMouseEnterKey(path, colIndex) {
      hoveringPath.value = getCellExpression(path, colIndex);
    }
    function onMouseLeaveKey() {
      hoveringPath.value = null;
    }
    function isHovering(path, colIndex) {
      const expr = getCellExpression(path, colIndex);
      return hoveringPath.value === expr;
    }
    function getExpression(column) {
      if (!props.node) {
        return "";
      }
      return getMappedExpression({
        nodeName: props.node.name,
        distanceFromActive: props.distanceFromActive,
        path: [column]
      });
    }
    function getPathNameFromTarget(el) {
      if (!el) {
        return "";
      }
      return el.dataset.name;
    }
    function getCellPathName(path, colIndex) {
      const lastKey = path[path.length - 1];
      if (typeof lastKey === "string") {
        return lastKey;
      }
      if (path.length > 1) {
        const prevKey = path[path.length - 2];
        return `${prevKey}[${lastKey}]`;
      }
      const column = tableData.value.columns[colIndex];
      return `${column}[${lastKey}]`;
    }
    function getCellExpression(path, colIndex) {
      if (!props.node) {
        return "";
      }
      const column = tableData.value.columns[colIndex];
      return getMappedExpression({
        nodeName: props.node.name,
        distanceFromActive: props.distanceFromActive,
        path: [column, ...path]
      });
    }
    function isEmpty(value2) {
      return value2 === "" || Array.isArray(value2) && value2.length === 0 || typeof value2 === "object" && value2 !== null && Object.keys(value2).length === 0 || value2 === null || value2 === void 0;
    }
    function getValueToRender(value2) {
      if (value2 === "") {
        return i18n.baseText("runData.emptyString");
      }
      if (typeof value2 === "string") {
        return value2;
      }
      if (Array.isArray(value2) && value2.length === 0) {
        return i18n.baseText("runData.emptyArray");
      }
      if (typeof value2 === "object" && value2 !== null && Object.keys(value2).length === 0) {
        return i18n.baseText("runData.emptyObject");
      }
      if (value2 === null || value2 === void 0) {
        return `[${value2}]`;
      }
      if (value2 === true || value2 === false || typeof value2 === "number") {
        return value2.toString();
      }
      return JSON.stringify(value2);
    }
    function onDragStart(el, data) {
      draggedColumn.value = true;
      ndvStore.draggableStartDragging({
        type: "mapping",
        data: data ?? "",
        dimensions: el?.getBoundingClientRect() ?? null
      });
      ndvStore.resetMappingTelemetry();
    }
    function onCellDragStart(el, data) {
      if (el?.dataset.value) {
        draggingPath.value = el.dataset.value;
      }
      onDragStart(el, data);
    }
    function onCellDragEnd(el) {
      draggingPath.value = null;
      onDragEnd(el.dataset.name ?? "", "tree", el.dataset.depth ?? "0");
    }
    function isDraggingKey(path, colIndex) {
      if (!draggingPath.value) {
        return;
      }
      return draggingPath.value === getCellExpression(path, colIndex);
    }
    function onDragEnd(column, src, depth = "0") {
      ndvStore.draggableStopDragging();
      setTimeout(() => {
        const mappingTelemetry = ndvStore.mappingTelemetry;
        const telemetryPayload = {
          src_node_type: props.node.type,
          src_field_name: column,
          src_nodes_back: props.distanceFromActive,
          src_run_index: props.runIndex,
          src_runs_total: props.totalRuns,
          src_field_nest_level: parseInt(depth, 10),
          src_view: "table",
          src_element: src,
          success: false,
          ...mappingTelemetry
        };
        void externalHooks.run("runDataTable.onDragEnd", telemetryPayload);
        telemetry.track("User dragged data for mapping", telemetryPayload, {
          withPostHog: true
        });
      }, 1e3);
    }
    function isSimple(data) {
      return typeof data !== "object" || data === null || Array.isArray(data) && data.length === 0 || typeof data === "object" && Object.keys(data).length === 0;
    }
    function isObject(data) {
      return !isSimple(data);
    }
    function hasJsonInColumn(colIndex) {
      return tableData.value.hasJson[tableData.value.columns[colIndex]];
    }
    function convertToTable(inputData) {
      const resultTableData = [];
      const tableColumns = [];
      let leftEntryColumns, entryRows;
      let entry;
      const metadata = {
        hasExecutionIds: false,
        data: []
      };
      const hasJson = {};
      inputData.forEach((data) => {
        if (!data.hasOwnProperty("json")) {
          return;
        }
        entry = data.json;
        entryRows = [];
        const entryColumns = Object.keys(entry || {});
        if (entryColumns.length > MAX_COLUMNS_LIMIT) {
          columnLimitExceeded.value = true;
          leftEntryColumns = entryColumns.slice(0, MAX_COLUMNS_LIMIT);
        } else {
          leftEntryColumns = entryColumns;
        }
        if (data.metadata?.subExecution) {
          metadata.data.push(data.metadata);
          metadata.hasExecutionIds = true;
        } else {
          metadata.data.push(void 0);
        }
        tableColumns.forEach((key) => {
          if (entry.hasOwnProperty(key)) {
            entryRows.push(entry[key]);
            leftEntryColumns.splice(leftEntryColumns.indexOf(key), 1);
            hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
          } else {
            entryRows.push(void 0);
          }
        });
        leftEntryColumns.forEach((key) => {
          tableColumns.push(key);
          entryRows.push(entry[key]);
          hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
        });
        resultTableData.push(entryRows);
      });
      resultTableData.forEach((rows) => {
        if (tableColumns.length > rows.length) {
          rows.push(...new Array(tableColumns.length - rows.length));
        }
      });
      return {
        hasJson,
        columns: tableColumns,
        data: resultTableData,
        metadata
      };
    }
    function switchToJsonView() {
      emit("displayModeChange", "json");
    }
    watch(focusedMappableInput, (curr) => {
      setTimeout(
        () => {
          forceShowGrip.value = !!focusedMappableInput.value;
        },
        curr ? 300 : 150
      );
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.$style.dataDisplay,
          {
            [_ctx.$style.highlight]: unref(highlight2),
            [_ctx.$style.lightHeader]: _ctx.headerBgColor === "light",
            [_ctx.$style.compact]: props.compact
          }
        ])
      }, [
        tableData.value.columns && tableData.value.columns.length === 0 ? (openBlock(), createElementBlock("table", {
          key: 0,
          class: normalizeClass(_ctx.$style.table)
        }, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionLinkRowHeader)
              }, null, 2)) : createCommentVNode("", true),
              createBaseVNode("th", {
                class: normalizeClass(_ctx.$style.emptyCell)
              }, null, 2),
              createBaseVNode("th", {
                class: normalizeClass(_ctx.$style.tableRightMargin)
              }, null, 2)
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (_, index1) => {
              return openBlock(), createElementBlock("tr", {
                key: index1,
                class: normalizeClass({ [_ctx.$style.hoveringRow]: isHoveringRow(index1) })
              }, [
                tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("td", {
                  key: 0,
                  "data-row": index1,
                  class: normalizeClass(_ctx.$style.executionLinkCell),
                  onMouseenter: onMouseEnterCell,
                  onMouseleave: onMouseLeaveCell
                }, [
                  createVNode(unref(N8nTooltip), {
                    content: unref(i18n).baseText("runData.table.viewSubExecution", {
                      interpolate: {
                        id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}`
                      }
                    }),
                    placement: "left",
                    "hide-after": 0
                  }, {
                    default: withCtx(() => [
                      tableData.value.metadata.data[index1] ? withDirectives((openBlock(), createBlock(unref(_sfc_main$1), {
                        key: 0,
                        element: "a",
                        type: "secondary",
                        icon: "external-link-alt",
                        "data-test-id": "debug-sub-execution",
                        size: "mini",
                        target: "_blank",
                        href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
                        onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
                      }, null, 8, ["href", "onClick"])), [
                        [vShow, showExecutionLink(index1)]
                      ]) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["content"])
                ], 42, _hoisted_1)) : createCommentVNode("", true),
                createBaseVNode("td", {
                  "data-row": index1,
                  "data-col": 0,
                  onMouseenter: onMouseEnterCell,
                  onMouseleave: onMouseLeaveCell
                }, [
                  createVNode(unref(InfoTip), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("runData.emptyItemHint")), 1)
                    ]),
                    _: 1
                  })
                ], 40, _hoisted_2),
                createBaseVNode("td", {
                  class: normalizeClass(_ctx.$style.tableRightMargin)
                }, null, 2)
              ], 2);
            }), 128))
          ])
        ], 2)) : (openBlock(), createElementBlock("table", {
          key: 1,
          class: normalizeClass(_ctx.$style.table)
        }, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionLinkRowHeader)
              }, null, 2)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.columns || [], (column, i) => {
                return openBlock(), createElementBlock("th", { key: column }, [
                  createVNode(unref(N8nTooltip), {
                    placement: "bottom-start",
                    disabled: !_ctx.mappingEnabled,
                    "show-after": 1e3
                  }, {
                    content: withCtx(() => [
                      createBaseVNode("div", null, [
                        _cache[0] || (_cache[0] = createBaseVNode("img", { src: _imports_0 }, null, -1)),
                        createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.dragColumnToFieldHint")), 1)
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(Draggable, {
                        type: "mapping",
                        data: getExpression(column),
                        disabled: !_ctx.mappingEnabled,
                        "can-drop": canDraggableDrop.value,
                        "sticky-position": draggableStickyPosition.value,
                        onDragstart: onDragStart,
                        onDragend: (column2) => onDragEnd(column2?.textContent ?? "", "column")
                      }, {
                        preview: withCtx(({ canDrop }) => [
                          createVNode(MappingPill, {
                            html: unref(shorten)(column, 16, 2),
                            "can-drop": canDrop
                          }, null, 8, ["html", "can-drop"])
                        ]),
                        default: withCtx(({ isDragging }) => [
                          createBaseVNode("div", {
                            class: normalizeClass({
                              [_ctx.$style.header]: true,
                              [_ctx.$style.draggableHeader]: _ctx.mappingEnabled,
                              [_ctx.$style.activeHeader]: (i === activeColumn.value || forceShowGrip.value) && _ctx.mappingEnabled,
                              [_ctx.$style.draggingHeader]: isDragging
                            })
                          }, [
                            createVNode(TextWithHighlights, {
                              content: getValueToRender(column || ""),
                              search: _ctx.search
                            }, null, 8, ["content", "search"]),
                            createBaseVNode("div", {
                              class: normalizeClass(_ctx.$style.dragButton)
                            }, [
                              createVNode(_component_font_awesome_icon, { icon: "grip-vertical" })
                            ], 2)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["data", "disabled", "can-drop", "sticky-position", "onDragend"])
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ]);
              }), 128)),
              columnLimitExceeded.value ? (openBlock(), createElementBlock("th", {
                key: 1,
                class: normalizeClass(_ctx.$style.header)
              }, [
                createVNode(unref(N8nTooltip), { placement: "bottom-end" }, {
                  content: withCtx(() => [
                    createBaseVNode("div", null, [
                      createVNode(_component_i18n_t, {
                        tag: "span",
                        keypath: "dataMapping.tableView.tableColumnsExceeded.tooltip"
                      }, {
                        columnLimit: withCtx(() => [
                          createTextVNode(toDisplayString(columnLimit.value), 1)
                        ]),
                        link: withCtx(() => [
                          createBaseVNode("a", { onClick: switchToJsonView }, toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded.tooltip.link")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("span", null, [
                      createVNode(_component_font_awesome_icon, {
                        class: normalizeClass(_ctx.$style["warningTooltip"]),
                        icon: "exclamation-triangle"
                      }, null, 8, ["class"]),
                      createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded")), 1)
                    ])
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true),
              createBaseVNode("th", {
                class: normalizeClass(_ctx.$style.tableRightMargin)
              }, null, 2)
            ])
          ]),
          createVNode(Draggable, {
            ref_key: "draggableRef",
            ref: draggableRef,
            tag: "tbody",
            type: "mapping",
            "target-data-key": "mappable",
            disabled: !_ctx.mappingEnabled,
            onDragstart: onCellDragStart,
            onDragend: onCellDragEnd
          }, {
            preview: withCtx(({ canDrop, el }) => [
              createVNode(MappingPill, {
                html: unref(shorten)(getPathNameFromTarget(el) || "", 16, 2),
                "can-drop": canDrop
              }, null, 8, ["html", "can-drop"])
            ]),
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (row, index1) => {
                return openBlock(), createElementBlock("tr", {
                  key: index1,
                  class: normalizeClass({ [_ctx.$style.hoveringRow]: isHoveringRow(index1) }),
                  "data-test-id": isHoveringRow(index1) ? "hovering-item" : void 0
                }, [
                  tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    "data-row": index1,
                    class: normalizeClass(_ctx.$style.executionLinkCell),
                    onMouseenter: onMouseEnterCell,
                    onMouseleave: onMouseLeaveCell
                  }, [
                    createVNode(unref(N8nTooltip), {
                      content: unref(i18n).baseText("runData.table.viewSubExecution", {
                        interpolate: {
                          id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}`
                        }
                      }),
                      placement: "left",
                      "hide-after": 0
                    }, {
                      default: withCtx(() => [
                        tableData.value.metadata.data[index1] ? withDirectives((openBlock(), createBlock(unref(_sfc_main$1), {
                          key: 0,
                          element: "a",
                          type: "secondary",
                          icon: "external-link-alt",
                          "data-test-id": "debug-sub-execution",
                          size: "mini",
                          target: "_blank",
                          href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
                          onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
                        }, null, 8, ["href", "onClick"])), [
                          [vShow, showExecutionLink(index1)]
                        ]) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ], 42, _hoisted_4)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(row, (data, index2) => {
                    return openBlock(), createElementBlock("td", {
                      key: index2,
                      "data-row": index1,
                      "data-col": index2,
                      class: normalizeClass(hasJsonInColumn(index2) ? _ctx.$style.minColWidth : _ctx.$style.limitColWidth),
                      onMouseenter: onMouseEnterCell,
                      onMouseleave: onMouseLeaveCell
                    }, [
                      isSimple(data) ? (openBlock(), createBlock(TextWithHighlights, {
                        key: 0,
                        content: getValueToRender(data),
                        search: _ctx.search,
                        class: normalizeClass({ [_ctx.$style.value]: true, [_ctx.$style.empty]: isEmpty(data) })
                      }, null, 8, ["content", "search", "class"])) : isObject(data) ? (openBlock(), createBlock(unref(Tree), {
                        key: 1,
                        "node-class": _ctx.$style.nodeClass,
                        value: data
                      }, {
                        label: withCtx(({ label, path }) => [
                          createVNode(TextWithHighlights, {
                            "data-target": "mappable",
                            class: normalizeClass({
                              [_ctx.$style.hoveringKey]: _ctx.mappingEnabled && isHovering(path, index2),
                              [_ctx.$style.draggingKey]: isDraggingKey(path, index2),
                              [_ctx.$style.dataKey]: true,
                              [_ctx.$style.mappable]: _ctx.mappingEnabled
                            }),
                            content: label || unref(i18n).baseText("runData.unnamedField"),
                            search: _ctx.search,
                            "data-name": getCellPathName(path, index2),
                            "data-value": getCellExpression(path, index2),
                            "data-depth": path.length,
                            onMouseenter: () => onMouseEnterKey(path, index2),
                            onMouseleave: onMouseLeaveKey
                          }, null, 8, ["class", "content", "search", "data-name", "data-value", "data-depth", "onMouseenter"])
                        ]),
                        value: withCtx(({ value: value2 }) => [
                          createVNode(TextWithHighlights, {
                            content: getValueToRender(value2),
                            search: _ctx.search,
                            class: normalizeClass({ [_ctx.$style.nestedValue]: true, [_ctx.$style.empty]: isEmpty(value2) })
                          }, null, 8, ["content", "search", "class"])
                        ]),
                        _: 2
                      }, 1032, ["node-class", "value"])) : createCommentVNode("", true)
                    ], 42, _hoisted_5);
                  }), 128)),
                  columnLimitExceeded.value ? (openBlock(), createElementBlock("td", _hoisted_6)) : createCommentVNode("", true),
                  createBaseVNode("td", {
                    class: normalizeClass(_ctx.$style.tableRightMargin)
                  }, null, 2)
                ], 10, _hoisted_3);
              }), 128))
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 2))
      ], 2);
    };
  }
});
const dataDisplay = "_dataDisplay_1dwr4_123";
const compact = "_compact_1dwr4_135";
const table = "_table_1dwr4_139";
const lightHeader = "_lightHeader_1dwr4_156";
const tableRightMargin = "_tableRightMargin_1dwr4_159";
const nodeClass = "_nodeClass_1dwr4_195";
const emptyCell = "_emptyCell_1dwr4_199";
const header = "_header_1dwr4_203";
const draggableHeader = "_draggableHeader_1dwr4_215";
const dragButton = "_dragButton_1dwr4_219";
const highlight = "_highlight_1dwr4_223";
const draggingHeader = "_draggingHeader_1dwr4_227";
const activeHeader = "_activeHeader_1dwr4_232";
const dataKey = "_dataKey_1dwr4_241";
const value = "_value_1dwr4_250";
const nestedValue = "_nestedValue_1dwr4_254 _value_1dwr4_250";
const mappable = "_mappable_1dwr4_259";
const empty = "_empty_1dwr4_199";
const limitColWidth = "_limitColWidth_1dwr4_267";
const minColWidth = "_minColWidth_1dwr4_271";
const hoveringKey = "_hoveringKey_1dwr4_275";
const draggingKey = "_draggingKey_1dwr4_279";
const hoveringRow = "_hoveringRow_1dwr4_295";
const warningTooltip = "_warningTooltip_1dwr4_300";
const executionLinkCell = "_executionLinkCell_1dwr4_304";
const executionLinkRowHeader = "_executionLinkRowHeader_1dwr4_308";
const style0 = {
  dataDisplay,
  compact,
  table,
  lightHeader,
  tableRightMargin,
  nodeClass,
  emptyCell,
  header,
  draggableHeader,
  dragButton,
  highlight,
  draggingHeader,
  activeHeader,
  dataKey,
  value,
  nestedValue,
  mappable,
  empty,
  limitColWidth,
  minColWidth,
  hoveringKey,
  draggingKey,
  hoveringRow,
  warningTooltip,
  executionLinkCell,
  executionLinkRowHeader
};
const cssModules = {
  "$style": style0
};
const RunDataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataTable as default
};
