import { d as defineComponent, as as useCssModule, x as computed, ez as getCurrentInstance, h as createElementBlock, f as createCommentVNode, g as openBlock, F as Fragment, A as renderList, n as normalizeClass, l as unref, Q as renderSlot, j as createBaseVNode, t as toDisplayString, e as createBlock, bu as createSlots, w as withCtx, K as mergeProps, _ as _export_sfc, aH as useTemplateRef, r as ref, a_ as useNDVStore, a9 as useWorkflowsStore, dI as useExecutionHelpers, et as storeToRefs, o as onMounted, af as watch, b4 as withDirectives, i as createVNode, a5 as _sfc_main$2, b5 as vShow, c as useI18n, a4 as N8nTooltip, k as createTextVNode, cS as InfoTip, g9 as Draggable, gO as __unplugin_components_0, N as N8nIcon, gP as MappingPill, gQ as shorten, a6 as I18nT, gR as getPairedItemId, gS as getMappedExpression, bs as useExternalHooks, ap as useTelemetry } from "./index-BsWH3eYA.js";
const _hoisted_1$1 = {
  key: 0,
  class: "n8n-tree"
};
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { key: 3 };
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nTree" },
  __name: "Tree",
  props: {
    value: { default: () => ({}) },
    path: { default: () => [] },
    depth: { default: 0 },
    nodeClass: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const $style = useCssModule();
    const classes = computed(() => {
      return { [props.nodeClass]: !!props.nodeClass, [$style.indent]: props.depth > 0 };
    });
    const isObject = (data) => {
      return typeof data === "object" && data !== null;
    };
    const isSimple = (data) => {
      if (data === null || data === void 0) {
        return true;
      }
      if (typeof data === "object" && Object.keys(data).length === 0) {
        return true;
      }
      if (Array.isArray(data) && data.length === 0) {
        return true;
      }
      return typeof data !== "object";
    };
    const getPath = (key) => {
      if (Array.isArray(props.value)) {
        return [...props.path, parseInt(key, 10)];
      }
      return [...props.path, key];
    };
    const N8nTree = getCurrentInstance()?.type;
    return (_ctx, _cache) => {
      return isObject(_ctx.value) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.value), (label, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(classes.value)
          }, [
            isSimple(_ctx.value[label]) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref($style).simple)
            }, [
              !!_ctx.$slots.label ? renderSlot(_ctx.$slots, "label", {
                key: 0,
                label,
                path: getPath(label)
              }) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(label), 1)),
              _cache[0] || (_cache[0] = createBaseVNode("span", null, ":", -1)),
              !!_ctx.$slots.value ? renderSlot(_ctx.$slots, "value", {
                key: 2,
                value: _ctx.value[label]
              }) : (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(_ctx.value[label]), 1))
            ], 2)) : (openBlock(), createElementBlock("div", _hoisted_4$1, [
              !!_ctx.$slots.label ? renderSlot(_ctx.$slots, "label", {
                key: 0,
                label,
                path: getPath(label)
              }) : (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(label), 1)),
              isObject(_ctx.value[label]) ? (openBlock(), createBlock(unref(N8nTree), {
                key: 2,
                path: getPath(label),
                depth: _ctx.depth + 1,
                value: _ctx.value[label],
                "node-class": _ctx.nodeClass
              }, createSlots({ _: 2 }, [
                !!_ctx.$slots.label ? {
                  name: "label",
                  fn: withCtx((data) => [
                    renderSlot(_ctx.$slots, "label", mergeProps({ ref_for: true }, data))
                  ]),
                  key: "0"
                } : void 0,
                !!_ctx.$slots.value ? {
                  name: "value",
                  fn: withCtx((data) => [
                    renderSlot(_ctx.$slots, "value", mergeProps({ ref_for: true }, data))
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["path", "depth", "value", "node-class"])) : createCommentVNode("", true)
            ]))
          ], 2);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const indent = "_indent_1jh97_123";
const simple = "_simple_1jh97_127";
const style0$1 = {
  indent,
  simple
};
const cssModules$1 = {
  "$style": style0$1
};
const Tree = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _imports_0 = "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif";
const _hoisted_1 = ["data-row"];
const _hoisted_2 = ["data-row"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["width"];
const _hoisted_5 = ["data-test-id"];
const _hoisted_6 = ["data-row"];
const _hoisted_7 = ["data-row", "data-col"];
const _hoisted_8 = { key: 1 };
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
    disableHoverHighlight: { type: Boolean, default: false },
    collapsingColumnName: {}
  },
  emits: ["activeRowChanged", "displayModeChange", "mounted", "collapsingColumnChanged"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const externalHooks = useExternalHooks();
    const tableRef = useTemplateRef("tableRef");
    const activeColumn = ref(-1);
    const forceShowGrip = ref(false);
    const draggedColumn = ref(false);
    const draggingPath = ref(null);
    const hoveringPath = ref(null);
    const hoveringColumnIndex = ref(-1);
    const activeRow = ref(null);
    const columnLimit = ref(MAX_COLUMNS_LIMIT);
    const columnLimitExceeded = ref(false);
    const draggableRef = ref();
    const fixedColumnWidths = ref();
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
    const collapsingColumnIndex = computed(() => {
      if (!props.collapsingColumnName) {
        return -1;
      }
      return tableData.value.columns.indexOf(props.collapsingColumnName);
    });
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
      const col = target.dataset.col;
      const parsedCol = col ? parseInt(col, 10) : Number.NaN;
      if (!isNaN(parsedCol)) {
        hoveringColumnIndex.value = parsedCol;
        if (target && props.mappingEnabled) {
          activeColumn.value = parsedCol;
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
      hoveringColumnIndex.value = -1;
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
        telemetry.track("User dragged data for mapping", telemetryPayload);
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
    function handleSetCollapsingColumn(columnIndex) {
      emit(
        "collapsingColumnChanged",
        collapsingColumnIndex.value === columnIndex ? null : tableData.value.columns[columnIndex] ?? null
      );
    }
    watch(focusedMappableInput, (curr) => {
      setTimeout(
        () => {
          forceShowGrip.value = !!focusedMappableInput.value;
        },
        curr ? 300 : 150
      );
    });
    watch(
      [collapsingColumnIndex, tableRef],
      ([index, table2]) => {
        if (index === -1) {
          fixedColumnWidths.value = void 0;
          return;
        }
        if (table2 === null) {
          return;
        }
        fixedColumnWidths.value = [...table2.querySelectorAll("thead tr th")].map(
          (el) => el instanceof HTMLElement ? el.getBoundingClientRect().width : 0
        );
      },
      { immediate: true, flush: "post" }
    );
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.$style.dataDisplay,
          {
            [_ctx.$style.highlight]: unref(highlight2),
            [_ctx.$style.lightHeader]: _ctx.headerBgColor === "light",
            [_ctx.$style.compact]: props.compact,
            [_ctx.$style.hasCollapsingColumn]: fixedColumnWidths.value !== void 0
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
                  tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip), {
                    key: 0,
                    content: unref(i18n).baseText("runData.table.viewSubExecution", {
                      interpolate: {
                        id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}`
                      }
                    }),
                    placement: "left",
                    "hide-after": 0
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(unref(_sfc_main$2), {
                        element: "a",
                        type: "secondary",
                        icon: "external-link",
                        "data-test-id": "debug-sub-execution",
                        size: "mini",
                        target: "_blank",
                        href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
                        onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
                      }, null, 8, ["href", "onClick"]), [
                        [vShow, showExecutionLink(index1)]
                      ])
                    ]),
                    _: 2
                  }, 1032, ["content"])) : createCommentVNode("", true)
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
          ref_key: "tableRef",
          ref: tableRef,
          class: normalizeClass(_ctx.$style.table)
        }, [
          fixedColumnWidths.value ? (openBlock(), createElementBlock("colgroup", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(fixedColumnWidths.value, (width, i) => {
              return openBlock(), createElementBlock("col", {
                key: i,
                width
              }, null, 8, _hoisted_4);
            }), 128))
          ])) : createCommentVNode("", true),
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionLinkRowHeader)
              }, null, 2)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.columns || [], (column, i) => {
                return openBlock(), createElementBlock("th", {
                  key: column,
                  class: normalizeClass({
                    [_ctx.$style.isCollapsingColumn]: collapsingColumnIndex.value === i,
                    [_ctx.$style.isHoveredColumn]: hoveringColumnIndex.value === i
                  })
                }, [
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
                            createVNode(__unplugin_components_0, {
                              content: getValueToRender(column || ""),
                              search: _ctx.search
                            }, null, 8, ["content", "search"]),
                            createVNode(unref(N8nTooltip), {
                              content: unref(i18n).baseText("dataMapping.tableView.columnCollapsing.tooltip"),
                              disabled: _ctx.mappingEnabled || collapsingColumnIndex.value === i
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), {
                                  class: normalizeClass(_ctx.$style.collapseColumnButton),
                                  type: "tertiary",
                                  size: "xmini",
                                  text: "",
                                  icon: collapsingColumnIndex.value === i ? "chevrons-up-down" : "chevrons-down-up",
                                  "aria-label": unref(i18n).baseText("dataMapping.tableView.columnCollapsing"),
                                  onClick: ($event) => handleSetCollapsingColumn(i)
                                }, null, 8, ["class", "icon", "aria-label", "onClick"])
                              ]),
                              _: 2
                            }, 1032, ["content", "disabled"]),
                            _ctx.mappingEnabled ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: normalizeClass(_ctx.$style.dragButton)
                            }, [
                              createVNode(_component_n8n_icon, { icon: "grip-vertical" })
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["data", "disabled", "can-drop", "sticky-position", "onDragend"])
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ], 2);
              }), 128)),
              columnLimitExceeded.value ? (openBlock(), createElementBlock("th", {
                key: 1,
                class: normalizeClass(_ctx.$style.header)
              }, [
                createVNode(unref(N8nTooltip), { placement: "bottom-end" }, {
                  content: withCtx(() => [
                    createBaseVNode("div", null, [
                      createVNode(unref(I18nT), {
                        tag: "span",
                        keypath: "dataMapping.tableView.tableColumnsExceeded.tooltip",
                        scope: "global"
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
                      createVNode(_component_n8n_icon, {
                        class: normalizeClass(_ctx.$style["warningTooltip"]),
                        icon: "triangle-alert"
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
                    tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip), {
                      key: 0,
                      content: unref(i18n).baseText("runData.table.viewSubExecution", {
                        interpolate: {
                          id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}`
                        }
                      }),
                      placement: "left",
                      "hide-after": 0
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(unref(_sfc_main$2), {
                          element: "a",
                          type: "secondary",
                          icon: "external-link",
                          "data-test-id": "debug-sub-execution",
                          size: "mini",
                          target: "_blank",
                          href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
                          onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
                        }, null, 8, ["href", "onClick"]), [
                          [vShow, showExecutionLink(index1)]
                        ])
                      ]),
                      _: 2
                    }, 1032, ["content"])) : createCommentVNode("", true)
                  ], 42, _hoisted_6)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(row, (data, index2) => {
                    return openBlock(), createElementBlock("td", {
                      key: index2,
                      "data-row": index1,
                      "data-col": index2,
                      class: normalizeClass([
                        hasJsonInColumn(index2) ? _ctx.$style.minColWidth : _ctx.$style.limitColWidth,
                        collapsingColumnIndex.value === index2 ? _ctx.$style.isCollapsingColumn : ""
                      ]),
                      onMouseenter: onMouseEnterCell,
                      onMouseleave: onMouseLeaveCell
                    }, [
                      isSimple(data) ? (openBlock(), createBlock(__unplugin_components_0, {
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
                          createVNode(__unplugin_components_0, {
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
                          createVNode(__unplugin_components_0, {
                            content: getValueToRender(value2),
                            search: _ctx.search,
                            class: normalizeClass({ [_ctx.$style.nestedValue]: true, [_ctx.$style.empty]: isEmpty(value2) })
                          }, null, 8, ["content", "search", "class"])
                        ]),
                        _: 2
                      }, 1032, ["node-class", "value"])) : createCommentVNode("", true)
                    ], 42, _hoisted_7);
                  }), 128)),
                  columnLimitExceeded.value ? (openBlock(), createElementBlock("td", _hoisted_8)) : createCommentVNode("", true),
                  createBaseVNode("td", {
                    class: normalizeClass(_ctx.$style.tableRightMargin)
                  }, null, 2)
                ], 10, _hoisted_5);
              }), 128))
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 2))
      ], 2);
    };
  }
});
const dataDisplay = "_dataDisplay_7vm96_123";
const compact = "_compact_7vm96_135";
const table = "_table_7vm96_139";
const lightHeader = "_lightHeader_7vm96_156";
const tableRightMargin = "_tableRightMargin_7vm96_159";
const hasCollapsingColumn = "_hasCollapsingColumn_7vm96_194";
const isCollapsingColumn = "_isCollapsingColumn_7vm96_197";
const nodeClass = "_nodeClass_7vm96_226";
const emptyCell = "_emptyCell_7vm96_230";
const header = "_header_7vm96_234";
const draggableHeader = "_draggableHeader_7vm96_246";
const dragButton = "_dragButton_7vm96_250";
const highlight = "_highlight_7vm96_254";
const draggingHeader = "_draggingHeader_7vm96_258";
const activeHeader = "_activeHeader_7vm96_263";
const dataKey = "_dataKey_7vm96_274";
const value = "_value_7vm96_283";
const nestedValue = "_nestedValue_7vm96_287 _value_7vm96_283";
const mappable = "_mappable_7vm96_292";
const empty = "_empty_7vm96_230";
const limitColWidth = "_limitColWidth_7vm96_300";
const minColWidth = "_minColWidth_7vm96_304";
const hoveringKey = "_hoveringKey_7vm96_308";
const draggingKey = "_draggingKey_7vm96_312";
const hoveringRow = "_hoveringRow_7vm96_328";
const warningTooltip = "_warningTooltip_7vm96_333";
const executionLinkCell = "_executionLinkCell_7vm96_337";
const executionLinkRowHeader = "_executionLinkRowHeader_7vm96_341";
const collapseColumnButton = "_collapseColumnButton_7vm96_345";
const isHoveredColumn = "_isHoveredColumn_7vm96_352";
const style0 = {
  dataDisplay,
  compact,
  table,
  lightHeader,
  tableRightMargin,
  hasCollapsingColumn,
  isCollapsingColumn,
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
  executionLinkRowHeader,
  collapseColumnButton,
  isHoveredColumn
};
const cssModules = {
  "$style": style0
};
const RunDataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataTable as default
};
