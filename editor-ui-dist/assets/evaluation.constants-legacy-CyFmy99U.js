;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./table-legacy-CJnsmGne.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var __toESM, createElementBlock, createCommentVNode, nextTick, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, mergeProps, Fragment, normalizeClass, watch, renderSlot, withCtx, useCssModule, openBlock, renderList, createBaseVNode, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, ElTableColumn, ElTable, require_isEqual, __vite_style__, SHORT_TABLE_CELL_MIN_WIDTH, LONG_TABLE_CELL_MIN_WIDTH, specialKeys, import_isEqual, TestTableBase_vue_vue_type_script_setup_true_lang_default, baseCell, expandedCell, customRow, customDisabledRow, customHeaderCell, customHeaderCellLabel, customHeaderCellSort, table, TestTableBase_vue_vue_type_style_index_0_lang_module_default, cssModules, TestTableBase_default, testCaseErrorDictionary, testRunErrorDictionary, getErrorBaseKey, statusDictionary;
    function getDefaultOrderedColumns(run, filteredTestCases) {
      const metricColumns = Object.keys(run?.metrics ?? {}).filter(key => !specialKeys.includes(key));
      const specialColumns = specialKeys.filter(key => run?.metrics ? key in run.metrics : false);
      const inputColumns = getTestCasesColumns(filteredTestCases ?? [], "inputs");
      const outputColumns = getTestCasesColumns(filteredTestCases ?? [], "outputs");
      return [...mapToColumns(inputColumns, "inputs"), ...mapToColumns(outputColumns, "outputs"), ...mapToColumns(metricColumns, "metrics", true), ...mapToColumns(specialColumns, "metrics", true)];
    }
    function applyCachedVisibility(columns, visibility) {
      if (!visibility) return columns;
      return columns.map(column => column.disabled ? column : {
        ...column,
        visible: visibility.hasOwnProperty(column.key) ? visibility[column.key] : column.visible
      });
    }
    function applyCachedSortOrder(defaultOrder, cachedOrder) {
      if (!cachedOrder?.length) return defaultOrder;
      const result = cachedOrder.map(columnKey => {
        const matchingColumn = defaultOrder.find(col => columnKey === col.key);
        if (!matchingColumn) return {
          key: columnKey,
          disabled: true
        };
        return matchingColumn;
      });
      const missingColumns = defaultOrder.filter(defaultCol => !cachedOrder.includes(defaultCol.key));
      result.push(...missingColumns);
      return result;
    }
    function getTestCasesColumns(cases, columnType) {
      const inputColumnNames = cases.reduce((set, testCase) => {
        Object.keys(testCase[columnType] ?? {}).forEach(key => set.add(key));
        return set;
      }, /* @__PURE__ */new Set([]));
      return Array.from(inputColumnNames.keys());
    }
    function mapToColumns(columnNames, columnType, numeric) {
      return columnNames.map(column => ({
        key: `${columnType}.${column}`,
        label: column,
        visible: true,
        disabled: false,
        columnType,
        numeric
      }));
    }
    function formatValue(key, value, {
      numeric
    } = {
      numeric: false
    }) {
      let stringValue;
      if (numeric && typeof value === "number" && !specialKeys.includes(key)) stringValue = value.toFixed(2) ?? "-";else if (typeof value === "object" && value !== null) stringValue = JSON.stringify(value, null, 2);else stringValue = `${value}`;
      return stringValue;
    }
    function getTestTableHeaders(columnNames, testCases) {
      return columnNames.filter(column => !column.disabled && column.visible).map(column => {
        const hasLongContent = Boolean(testCases.find(row => {
          const value = row[column.columnType]?.[column.label];
          return formatValue(column.label, value, {
            numeric: column.numeric
          })?.length > 10;
        }));
        return {
          prop: column.key,
          label: column.disabled ? column.key : column.label,
          sortable: true,
          filter: true,
          showHeaderTooltip: true,
          minWidth: hasLongContent ? LONG_TABLE_CELL_MIN_WIDTH : 125,
          formatter: row => {
            const value = row[column.columnType]?.[column.label];
            return formatValue(column.label, value, {
              numeric: column.numeric
            });
          }
        };
      });
    }

    //#endregion
    //#region src/features/ai/evaluation.ee/components/shared/TestTableBase.vue?vue&type=script&setup=true&lang.ts
    _export({
      a: applyCachedVisibility,
      c: getTestTableHeaders,
      i: applyCachedSortOrder,
      o: getDefaultOrderedColumns,
      s: getTestCasesColumns
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_srcLegacy007Js) {
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_tableLegacy00jJs) {
        ElTableColumn = _tableLegacy00jJs.n;
        ElTable = _tableLegacy00jJs.t;
      }, function (_constantsLegacy00NJs) {
        require_isEqual = _constantsLegacy00NJs.Ta;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._baseCell_1cahf_123 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 1px solid var(--border-color--light) !important;\n  vertical-align: top !important;\n}\n._baseCell_1cahf_123 > div {\n  white-space: nowrap !important;\n}\n._expandedCell_1cahf_134 {\n  white-space: normal;\n  background: var(--color--background--light-1);\n  border-bottom: 1px solid var(--border-color--light) !important;\n  vertical-align: top !important;\n}\n._expandedCell_1cahf_134 > div {\n  white-space: normal !important;\n}\n._customRow_1cahf_144 {\n  cursor: pointer;\n  --table--row--color--background--hover: var(--color--background);\n}\n._customDisabledRow_1cahf_149 {\n  cursor: default;\n  --table--row--color--background--hover: var(--color--background--light-2);\n}\n._customHeaderCell_1cahf_154 {\n  display: flex;\n  gap: 4px;\n}\n._customHeaderCellLabel_1cahf_159 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-weight: var(--font-weight--bold);\n  color: var(--color--text);\n}\n._customHeaderCellSort_1cahf_168 {\n  display: flex;\n  align-items: center;\n}\n._table_1cahf_173 {\n  border-radius: 12px;\n}\n._table_1cahf_173 .el-table__column-resize-proxy {\n  background-color: var(--color--primary);\n  width: 3px;\n}\n._table_1cahf_173 thead th {\n  padding: 6px 0;\n}\n._table_1cahf_173 .caret-wrapper {\n  display: none;\n}\n._table_1cahf_173 .el-scrollbar__thumb {\n  background-color: var(--color--foreground);\n}\n._table_1cahf_173 .el-scrollbar__bar {\n  opacity: 1;\n}\n._table_1cahf_173 * {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n._table_1cahf_173 *::-webkit-scrollbar {\n  display: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/evaluation.ee/evaluation.utils.ts
        SHORT_TABLE_CELL_MIN_WIDTH = 125;
        LONG_TABLE_CELL_MIN_WIDTH = 250;
        specialKeys = ["promptTokens", "completionTokens", "totalTokens", "executionTime"];
        import_isEqual = /* @__PURE__ */__toESM(require_isEqual());
        TestTableBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TestTableBase",
          props: {
            data: {},
            columns: {},
            showControls: {
              type: Boolean
            },
            defaultSort: {
              default: () => ({
                prop: "date",
                order: "descending"
              })
            },
            selectable: {
              type: Boolean,
              default: false
            },
            selectableFilter: {
              type: Function,
              default: () => true
            },
            expandedRows: {
              default: () => /* @__PURE__ */new Set()
            }
          },
          emits: ["rowClick", "selectionChange"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const $style = useCssModule();
            const tableRef = ref();
            const selectedRows = ref([]);
            const localData = ref([]);
            const emit = __emit;
            watch(() => props.data, async newData => {
              if (!(0, import_isEqual.default)(localData.value, newData)) {
                const currentSelectionIds = selectedRows.value.map(row => row.id);
                localData.value = newData;
                await nextTick();
                tableRef.value?.sort(props.defaultSort.prop, props.defaultSort.order);
                currentSelectionIds.forEach(id => {
                  const row = localData.value.find(r => r.id === id);
                  if (row) tableRef.value?.toggleRowSelection(row, true);
                });
              }
            }, {
              immediate: true,
              deep: true
            });
            const handleSelectionChange = rows => {
              selectedRows.value = rows;
              emit("selectionChange", rows);
            };
            const handleColumnResize = (newWidth, _oldWidth, column) => {
              if (column.minWidth && newWidth < column.minWidth) column.width = column.minWidth;
            };
            const getCellClassName = ({
              row
            }) => {
              return `${props.expandedRows?.has(row.id) ? $style.expandedCell : $style.baseCell}`;
            };
            const getRowClassName = ({
              row
            }) => {
              return `${"status" in row && row?.status === "error" ? $style.customDisabledRow : $style.customRow} ${props.expandedRows?.has(row.id) ? $style.expandedRow : ""}`;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElTable), {
                ref_key: "tableRef",
                ref: tableRef,
                class: normalizeClass(unref($style).table),
                "default-sort": _ctx.defaultSort,
                data: localData.value,
                border: true,
                "cell-class-name": getCellClassName,
                "row-class-name": getRowClassName,
                "scrollbar-always-on": "",
                onSelectionChange: handleSelectionChange,
                onHeaderDragend: handleColumnResize,
                onRowClick: _cache[0] || (_cache[0] = row => _ctx.$emit("rowClick", row))
              }, {
                default: withCtx(() => [_ctx.selectable ? (openBlock(), createBlock(unref(ElTableColumn), {
                  key: 0,
                  type: "selection",
                  selectable: _ctx.selectableFilter,
                  "data-test-id": "table-column-select",
                  width: "46",
                  fixed: "",
                  align: "center"
                }, null, 8, ["selectable"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, column => {
                  return openBlock(), createBlock(unref(ElTableColumn), mergeProps({
                    key: column.prop,
                    ref_for: true
                  }, column, {
                    resizable: true,
                    "data-test-id": "table-column",
                    "min-width": column.minWidth ?? unref(125)
                  }), {
                    header: withCtx(headerProps => [createVNode(unref(N8nTooltip_default), {
                      content: headerProps.column.label,
                      placement: "top",
                      disabled: !column.showHeaderTooltip
                    }, {
                      default: withCtx(() => [createBaseVNode("div", {
                        class: normalizeClass(unref($style).customHeaderCell)
                      }, [createBaseVNode("div", {
                        class: normalizeClass(unref($style).customHeaderCellLabel)
                      }, toDisplayString(headerProps.column.label), 3), headerProps.column.sortable && headerProps.column.order ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(unref($style).customHeaderCellSort)
                      }, [createVNode(unref(N8nIcon_default), {
                        icon: headerProps.column.order === "descending" ? "arrow-up" : "arrow-down",
                        size: "small"
                      }, null, 8, ["icon"])], 2)) : createCommentVNode("", true)], 2)]),
                      _: 2
                    }, 1032, ["content", "disabled"])]),
                    default: withCtx(({
                      row
                    }) => [column.prop === "id" ? renderSlot(_ctx.$slots, "id", mergeProps({
                      key: 0,
                      ref_for: true
                    }, {
                      row
                    })) : createCommentVNode("", true), column.prop === "index" ? renderSlot(_ctx.$slots, "index", mergeProps({
                      key: 1,
                      ref_for: true
                    }, {
                      row
                    })) : createCommentVNode("", true), column.prop === "status" ? renderSlot(_ctx.$slots, "status", mergeProps({
                      key: 2,
                      ref_for: true
                    }, {
                      row
                    })) : createCommentVNode("", true)]),
                    _: 2
                  }, 1040, ["min-width"]);
                }), 128))]),
                _: 3
              }, 8, ["class", "default-sort", "data"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/TestTableBase.vue?vue&type=style&index=0&lang.module.scss
        baseCell = "_baseCell_1cahf_123";
        expandedCell = "_expandedCell_1cahf_134";
        customRow = "_customRow_1cahf_144";
        customDisabledRow = "_customDisabledRow_1cahf_149";
        customHeaderCell = "_customHeaderCell_1cahf_154";
        customHeaderCellLabel = "_customHeaderCellLabel_1cahf_159";
        customHeaderCellSort = "_customHeaderCellSort_1cahf_168";
        table = "_table_1cahf_173";
        TestTableBase_vue_vue_type_style_index_0_lang_module_default = {
          baseCell,
          expandedCell,
          customRow,
          customDisabledRow,
          customHeaderCell,
          customHeaderCellLabel,
          customHeaderCellSort,
          table
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/shared/TestTableBase.vue
        cssModules = {
          "$style": TestTableBase_vue_vue_type_style_index_0_lang_module_default
        };
        _export("r", TestTableBase_default = /* @__PURE__ */__plugin_vue_export_helper_default(TestTableBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
        //#region src/features/ai/evaluation.ee/evaluation.constants.ts
        testCaseErrorDictionary = {
          MOCKED_NODE_NOT_FOUND: "evaluation.runDetail.error.mockedNodeMissing",
          FAILED_TO_EXECUTE_WORKFLOW: "evaluation.runDetail.error.executionFailed",
          INVALID_METRICS: "evaluation.runDetail.error.invalidMetrics",
          UNKNOWN_ERROR: "evaluation.runDetail.error.unknownError",
          NO_METRICS_COLLECTED: "evaluation.runDetail.error.noMetricsCollected"
        };
        testRunErrorDictionary = {
          TEST_CASES_NOT_FOUND: "evaluation.listRuns.error.testCasesNotFound",
          INTERRUPTED: "evaluation.listRuns.error.executionInterrupted",
          UNKNOWN_ERROR: "evaluation.listRuns.error.unknownError",
          EVALUATION_TRIGGER_NOT_FOUND: "evaluation.listRuns.error.evaluationTriggerNotFound",
          EVALUATION_TRIGGER_NOT_CONFIGURED: "evaluation.listRuns.error.evaluationTriggerNotConfigured",
          EVALUATION_TRIGGER_DISABLED: "evaluation.listRuns.error.evaluationTriggerDisabled",
          SET_OUTPUTS_NODE_NOT_CONFIGURED: "evaluation.listRuns.error.setOutputsNodeNotConfigured",
          SET_METRICS_NODE_NOT_FOUND: "evaluation.listRuns.error.setMetricsNodeNotFound",
          SET_METRICS_NODE_NOT_CONFIGURED: "evaluation.listRuns.error.setMetricsNodeNotConfigured",
          CANT_FETCH_TEST_CASES: "evaluation.listRuns.error.cantFetchTestCases",
          PARTIAL_CASES_FAILED: "evaluation.runDetail.error.partialCasesFailed"
        };
        _export("t", getErrorBaseKey = errorCode => {
          return testCaseErrorDictionary[errorCode] ?? testRunErrorDictionary[errorCode] ?? "";
        });
        _export("n", statusDictionary = {
          new: {
            icon: "status-new",
            color: "foreground-xdark"
          },
          running: {
            icon: "spinner",
            color: "secondary"
          },
          completed: {
            icon: "status-completed",
            color: "success"
          },
          error: {
            icon: "triangle-alert",
            color: "danger"
          },
          cancelled: {
            icon: "status-canceled",
            color: "foreground-xdark"
          },
          warning: {
            icon: "status-warning",
            color: "warning"
          },
          success: {
            icon: "status-completed",
            color: "success"
          }
        }); //#endregion
      }
    };
  });
})();