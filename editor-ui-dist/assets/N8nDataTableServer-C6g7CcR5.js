import { d as defineComponent, bv as isRef, ch as shallowRef, ab as watch, r as ref, fl as watchEffect, aN as h, l as unref, e5 as mergeModels, fm as useSlots, x as computed, e6 as useModel, fn as ElCheckbox, cf as useThrottleFn, h as createElementBlock, g as openBlock, j as createBaseVNode, f as createCommentVNode, P as normalizeStyle, n as normalizeClass, F as Fragment, y as renderList, e as createBlock, k as createTextVNode, t as toDisplayString, bS as withModifiers, J as renderSlot, i as createVNode, fo as ElSkeletonItem, D as mergeProps, fp as _sfc_main$1, fq as ElSelect, w as withCtx, fr as ElOption, bu as get, _ as _export_sfc } from "./index-CklTsoJI.js";
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function" ? {
        ...column,
        accessorFn: accessor
      } : {
        ...column,
        accessorKey: accessor
      };
    },
    display: (column) => column,
    group: (column) => column
  };
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function makeStateUpdater(key, instance) {
  return (updater) => {
    instance.setState((old) => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every((val) => typeof val === "number");
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = (subArr) => {
    subArr.forEach((item) => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return (depArgs) => {
    let depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    const newDeps = getDeps(depArgs);
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
  return {
    debug: () => {
      var _tableOptions$debugAl;
      return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
    },
    key: false,
    onChange
  };
}
function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
      table: table2,
      column: column2,
      row: row2,
      cell: cell2,
      getValue: cell2.getValue,
      renderValue: cell2.renderValue
    }), getMemoOptions(table.options, "debugCells"))
  };
  table._features.forEach((feature) => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}
function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? typeof String.prototype.replaceAll === "function" ? accessorKey.replaceAll(".", "_") : accessorKey.replace(/\./g, "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    if (accessorKey.includes(".")) {
      accessorFn = (originalRow) => {
        let result = originalRow;
        for (const key of accessorKey.split(".")) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
        }
        return result;
      };
    } else {
      accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d) => d.getFlatColumns())];
    }, getMemoOptions(table.options, "debugColumns")),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
        return orderColumns2(leafColumns);
      }
      return [column];
    }, getMemoOptions(table.options, "debugColumns"))
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }
  return column;
}
const debug = "debugHeaders";
function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = (h2) => {
        if (h2.subHeaders && h2.subHeaders.length) {
          h2.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h2);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header,
      column
    })
  };
  table._features.forEach((feature) => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
const Headers = {
  createTable: (table) => {
    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, getMemoOptions(table.options, debug));
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, "center");
    }, getMemoOptions(table.options, debug));
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
    }, getMemoOptions(table.options, debug));
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
    }, getMemoOptions(table.options, debug));
    table.getFooterGroups = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return headerGroups.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
        return header.getLeafHeaders();
      }).flat();
    }, getMemoOptions(table.options, debug));
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  let maxDepth = 0;
  const findMaxDepth = function(columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter((column) => column.getIsVisible()).forEach((column) => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
      headers: []
    };
    const pendingParentHeaders = [];
    headersToGroup.forEach((headerToGroup) => {
      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        column = headerToGroup.column.parent;
      } else {
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d) => d.column === column).length}` : void 0,
          depth,
          index: pendingParentHeaders.length
        });
        header.subHeaders.push(headerToGroup);
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();
  const recurseHeadersForSpans = (headers) => {
    const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
    return filteredHeaders.map((header) => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}
const createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (columnId) => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: (columnId) => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: (columnId) => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => flattenBy(row.subRows, (d) => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : void 0,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
      return leafColumns.map((column) => {
        return createCell(table, row, column, column.id);
      });
    }, getMemoOptions(table.options, "debugRows")),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, getMemoOptions(table.options, "debugRows"))
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};
const ColumnFaceting = {
  createColumn: (column, table) => {
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return void 0;
      }
      return column._getFacetedMinMaxValues();
    };
  }
};
const includesString = (row, columnId, filterValue) => {
  var _filterValue$toString, _row$getValue;
  const search = filterValue == null || (_filterValue$toString = filterValue.toString()) == null ? void 0 : _filterValue$toString.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = (val) => testFalsey(val);
const includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = (val) => testFalsey(val);
const equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = (val) => testFalsey(val);
const arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = (val) => testFalsey(val);
const arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some((val) => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
const arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some((val) => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
const equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = (val) => testFalsey(val);
const weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = (val) => testFalsey(val);
const inNumberRange = (row, columnId, filterValue) => {
  let [min2, max2] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min2 && rowValue <= max2;
};
inNumberRange.resolveFilterValue = (val) => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
  let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min2 > max2) {
    const temp = min2;
    min2 = max2;
    max2 = temp;
  }
  return [min2, max2];
};
inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
const filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
function testFalsey(val) {
  return val === void 0 || val === null || val === "";
}
const ColumnFiltering = {
  getDefaultColumnDef: () => {
    return {
      filterFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      columnFilters: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnFiltersChange: makeStateUpdater("columnFilters", table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return filterFns.includesString;
      }
      if (typeof value === "number") {
        return filterFns.inNumberRange;
      }
      if (typeof value === "boolean") {
        return filterFns.equals;
      }
      if (value !== null && typeof value === "object") {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (
        // @ts-ignore
        (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn]
      );
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find((d) => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex((d) => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = (value) => {
      table.setColumnFilters((old) => {
        const filterFn = column.getFilterFn();
        const previousFilter = old == null ? void 0 : old.find((d) => d.id === column.id);
        const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : void 0);
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter((d) => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousFilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map((d) => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
  },
  createRow: (row, _table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: (table) => {
    table.setColumnFilters = (updater) => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = (old) => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
          const column = leafColumns.find((d) => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.resetColumnFilters = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
}
const sum = (columnId, _leafRows, childRows) => {
  return childRows.reduce((sum2, next) => {
    const nextValue = next.getValue(columnId);
    return sum2 + (typeof nextValue === "number" ? nextValue : 0);
  }, 0);
};
const min = (columnId, _leafRows, childRows) => {
  let min2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
      min2 = value;
    }
  });
  return min2;
};
const max = (columnId, _leafRows, childRows) => {
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
      max2 = value;
    }
  });
  return max2;
};
const extent = (columnId, _leafRows, childRows) => {
  let min2;
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min2 === void 0) {
        if (value >= value) min2 = max2 = value;
      } else {
        if (min2 > value) min2 = value;
        if (max2 < value) max2 = value;
      }
    }
  });
  return [min2, max2];
};
const mean = (columnId, leafRows) => {
  let count2 = 0;
  let sum2 = 0;
  leafRows.forEach((row) => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count2, sum2 += value;
    }
  });
  if (count2) return sum2 / count2;
  return;
};
const median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map((row) => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map((d) => d.getValue(columnId))).values());
};
const uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map((d) => d.getValue(columnId))).size;
};
const count = (_columnId, leafRows) => {
  return leafRows.length;
};
const aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};
const ColumnGrouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: (props) => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGroupingChange: makeStateUpdater("grouping", table),
      groupedColumnMode: "reorder"
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping((old) => {
        if (old != null && old.includes(column.id)) {
          return old.filter((d) => d !== column.id);
        }
        return [...old != null ? old : [], column.id];
      });
    };
    column.getCanGroup = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup) return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "number") {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === "[object Date]") {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: (table) => {
    table.setGrouping = (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = (defaultState) => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = (columnId) => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
  if (groupedColumnMode === "remove") {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map((g) => leafColumns.find((col) => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}
const ColumnOrdering = {
  getInitialState: (state) => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnOrderChange: makeStateUpdater("columnOrder", table)
    };
  },
  createColumn: (column, table) => {
    column.getIndex = memo((position) => [_getVisibleLeafColumns(table, position)], (columns) => columns.findIndex((d) => d.id === column.id), getMemoOptions(table.options, "debugColumns"));
    column.getIsFirstColumn = (position) => {
      var _columns$;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
    };
    column.getIsLastColumn = (position) => {
      var _columns;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
    };
  },
  createTable: (table) => {
    table.setColumnOrder = (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = (defaultState) => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns) => {
      let orderedColumns = [];
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];
        const columnsCopy = [...columns];
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex((d) => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, getMemoOptions(table.options, "debugTable"));
  }
};
const getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
const ColumnPinning = {
  getInitialState: (state) => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnPinningChange: makeStateUpdater("columnPinning", table)
    };
  },
  createColumn: (column, table) => {
    column.pin = (position) => {
      const columnIds = column.getLeafColumns().map((d) => d.id).filter(Boolean);
      table.setColumnPinning((old) => {
        var _old$left3, _old$right3;
        if (position === "right") {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === "left") {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some((d) => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map((d) => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some((d) => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some((d) => right == null ? void 0 : right.includes(d));
      return isLeft ? "left" : isRight ? "right" : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allCells.filter((d) => !leftAndRight.includes(d.column.id));
    }, getMemoOptions(table.options, "debugRows"));
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left], (allCells, left) => {
      const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => ({
        ...d,
        position: "left"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows"));
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => ({
        ...d,
        position: "right"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows"));
  },
  createTable: (table) => {
    table.setColumnPinning = (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns"));
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns"));
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allColumns.filter((d) => !leftAndRight.includes(d.id));
    }, getMemoOptions(table.options, "debugColumns"));
  }
};
const defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
const getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
const ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: (state) => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: makeStateUpdater("columnSizing", table),
      onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(0, column.getIndex(position)).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns"));
    column.getAfter = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(column.getIndex(position) + 1).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns"));
    column.resetSize = () => {
      table.setColumnSizing((_ref2) => {
        let {
          [column.id]: _,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum2 = 0;
      const recurse = (header2) => {
        if (header2.subHeaders.length) {
          header2.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum2;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = (_contextDocument) => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return (e) => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map((d) => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== "number") {
            return;
          }
          table.setColumnSizingInfo((old) => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach((_ref3) => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === "onChange" || eventType === "end") {
            table.setColumnSizing((old) => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = (clientXPos) => updateOffset("move", clientXPos);
        const onEnd = (clientXPos) => {
          updateOffset("end", clientXPos);
          table.setColumnSizingInfo((old) => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = _contextDocument || typeof document !== "undefined" ? document : null;
        const mouseEvents = {
          moveHandler: (e2) => onMove(e2.clientX),
          upHandler: (e2) => {
            contextDocument == null || contextDocument.removeEventListener("mousemove", mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("mouseup", mouseEvents.upHandler);
            onEnd(e2.clientX);
          }
        };
        const touchEvents = {
          moveHandler: (e2) => {
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onMove(e2.touches[0].clientX);
            return false;
          },
          upHandler: (e2) => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener("touchmove", touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("touchend", touchEvents.upHandler);
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onEnd((_e$touches$ = e2.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          contextDocument == null || contextDocument.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo((old) => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: (table) => {
    table.setColumnSizing = (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = (defaultState) => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = (defaultState) => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
let passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === "boolean") return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop2 = () => {
    };
    window.addEventListener("test", noop2, options);
    window.removeEventListener("test", noop2);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === "touchstart";
}
const ColumnVisibility = {
  getInitialState: (state) => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = (value) => {
      if (column.getCanHide()) {
        table.setColumnVisibility((old) => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _ref, _table$getState$colum;
      const childColumns = column.columns;
      return (_ref = childColumns.length ? childColumns.some((c) => c.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return (e) => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
      return cells.filter((cell) => cell.column.getIsVisible());
    }, getMemoOptions(table.options, "debugRows"));
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], getMemoOptions(table.options, "debugRows"));
  },
  createTable: (table) => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter((d) => d.getIsVisible()).map((d) => d.id).join("_")], (columns) => {
        return columns.filter((d) => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, getMemoOptions(table.options, "debugColumns"));
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns());
    table.setColumnVisibility = (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = (defaultState) => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = (value) => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return (e) => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
function _getVisibleLeafColumns(table, position) {
  return !position ? table.getVisibleLeafColumns() : position === "center" ? table.getCenterVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}
const GlobalFaceting = {
  createTable: (table) => {
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__");
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__");
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__");
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};
const GlobalFiltering = {
  getInitialState: (state) => {
    return {
      globalFilter: void 0,
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGlobalFilterChange: makeStateUpdater("globalFilter", table),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (column) => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === "string" || typeof value === "number";
      }
    };
  },
  createColumn: (column, table) => {
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
      return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
  },
  createTable: (table) => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      const {
        globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
    };
    table.setGlobalFilter = (updater) => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = (defaultState) => {
      table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
    };
  }
};
const RowExpanding = {
  getInitialState: (state) => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onExpandedChange: makeStateUpdater("expanded", table),
      paginateExpandedRows: true
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = (expanded) => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = (defaultState) => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return (e) => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;
      if (typeof expanded === "boolean") {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }
      if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
        return false;
      }
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach((id) => {
        const splitId = id.split(".");
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = (expanded) => {
      table.setExpanded((old) => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand) return;
        row.toggleExpanded();
      };
    };
  }
};
const defaultPageIndex = 0;
const defaultPageSize = 10;
const getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
const RowPagination = {
  getInitialState: (state) => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...state == null ? void 0 : state.pagination
      }
    };
  },
  getDefaultOptions: (table) => {
    return {
      onPaginationChange: makeStateUpdater("pagination", table)
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = (updater) => {
      const safeUpdater = (old) => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = (defaultState) => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = (updater) => {
      table.setPagination((old) => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = (defaultState) => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = (defaultState) => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = (updater) => {
      table.setPagination((old) => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    table.setPageCount = (updater) => table.setPagination((old) => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === "number") {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], (pageCount) => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
      }
      return pageOptions;
    }, getMemoOptions(table.options, "debugTable"));
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex((old) => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex((old) => {
        return old + 1;
      });
    };
    table.firstPage = () => {
      return table.setPageIndex(0);
    };
    table.lastPage = () => {
      return table.setPageIndex(table.getPageCount() - 1);
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
    };
    table.getRowCount = () => {
      var _table$options$rowCou;
      return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
    };
  }
};
const getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
const RowPinning = {
  getInitialState: (state) => {
    return {
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowPinningChange: makeStateUpdater("rowPinning", table)
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map((_ref) => {
        let {
          id
        } = _ref;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map((_ref2) => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const rowIds = /* @__PURE__ */ new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning((old) => {
        var _old$top3, _old$bottom3;
        if (position === "bottom") {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter((d) => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === "top") {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter((d) => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref3;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === "function") {
        return enableRowPinning(row);
      }
      return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some((d) => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some((d) => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? "top" : isBottom ? "bottom" : false;
    };
    row.getPinnedIndex = () => {
      var _ref4, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position) return -1;
      const visiblePinnedRowIds = (_ref4 = position === "top" ? table.getTopRows() : table.getBottomRows()) == null ? void 0 : _ref4.map((_ref5) => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
  },
  createTable: (table) => {
    table.setRowPinning = (updater) => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = (defaultState) => {
      var _table$initialState$r, _table$initialState;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table._getPinnedRows = (visibleRows, pinnedRowIds, position) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => {
          const row = table.getRow(rowId, true);
          return row.getIsAllParentsExpanded() ? row : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => visibleRows.find((row) => row.id === rowId))
      );
      return rows.filter(Boolean).map((d) => ({
        ...d,
        position
      }));
    };
    table.getTopRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top], (allRows, topPinnedRowIds) => table._getPinnedRows(allRows, topPinnedRowIds, "top"), getMemoOptions(table.options, "debugRows"));
    table.getBottomRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.bottom], (allRows, bottomPinnedRowIds) => table._getPinnedRows(allRows, bottomPinnedRowIds, "bottom"), getMemoOptions(table.options, "debugRows"));
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = /* @__PURE__ */ new Set([...top != null ? top : [], ...bottom != null ? bottom : []]);
      return allRows.filter((d) => !topAndBottom.has(d.id));
    }, getMemoOptions(table.options, "debugRows"));
  }
};
const RowSelection = {
  getInitialState: (state) => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowSelectionChange: makeStateUpdater("rowSelection", table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: (table) => {
    table.setRowSelection = (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = (defaultState) => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = (value) => {
      table.setRowSelection((old) => {
        value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
        if (value) {
          preGroupedFlatRows.forEach((row) => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach((row) => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = (value) => table.setRowSelection((old) => {
      const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach((row) => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable"));
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable"));
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable"));
    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d) => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection((old) => {
        var _opts$selectChildren;
        value = typeof value !== "undefined" ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "some";
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "all";
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === "function") {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === "function") {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === "function") {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return (e) => {
        var _target;
        if (!canSelect) return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
const mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};
  const recurseRows = function(rows, depth) {
    return rows.map((row) => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach((subRow) => {
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === "all") {
        someSelected = true;
      } else if (subRowChildrenSelected === "some") {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? "all" : someSelected ? "some" : false;
}
const reSplitAlphaNumeric = /([0-9]+)/gm;
const alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const datetime = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);
  return a > b ? 1 : a < b ? -1 : 0;
};
const basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};
function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === "number") {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return "";
    }
    return String(a);
  }
  if (typeof a === "string") {
    return a;
  }
  return "";
}
function compareAlphanumeric(aStr, bStr) {
  const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}
const sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};
const RowSorting = {
  getInitialState: (state) => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: "auto",
      sortUndefined: 1
    };
  },
  getDefaultOptions: (table) => {
    return {
      onSortingChange: makeStateUpdater("sorting", table),
      isMultiSortEvent: (e) => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === "[object Date]") {
          return sortingFns.datetime;
        }
        if (typeof value === "string") {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return "asc";
      }
      return "desc";
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== "undefined" && desc !== null;
      table.setSorting((old) => {
        const existingSorting = old == null ? void 0 : old.find((d) => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex((d) => d.id === column.id);
        let newSorting = [];
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "add";
          }
        } else {
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = "replace";
          } else if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "replace";
          }
        }
        if (sortAction === "toggle") {
          if (!hasManualValue) {
            if (!nextSortingOrder) {
              sortAction = "remove";
            }
          }
        }
        if (sortAction === "add") {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === "toggle") {
          newSorting = old.map((d) => {
            if (d.id === column.id) {
              return {
                ...d,
                desc: nextDesc
              };
            }
            return d;
          });
        } else if (sortAction === "remove") {
          newSorting = old.filter((d) => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
      return sortDescFirst ? "desc" : "asc";
    };
    column.getNextSortingOrder = (multi) => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
      (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
        return false;
      }
      return isSorted === "desc" ? "asc" : "desc";
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d) => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? "desc" : "asc";
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d) => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      table.setSorting((old) => old != null && old.length ? old.filter((d) => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return (e) => {
        if (!canSort) return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: (table) => {
    table.setSorting = (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = (defaultState) => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};
const builtInFeatures = [
  Headers,
  ColumnVisibility,
  ColumnOrdering,
  ColumnPinning,
  ColumnFaceting,
  ColumnFiltering,
  GlobalFaceting,
  //depends on ColumnFaceting
  GlobalFiltering,
  //depends on ColumnFiltering
  RowSorting,
  ColumnGrouping,
  //depends on RowSorting
  RowExpanding,
  RowPagination,
  RowPinning,
  RowSelection,
  ColumnSizing
];
function createTable(options) {
  var _options$_features, _options$initialState;
  const _features = [...builtInFeatures, ...(_options$_features = options._features) != null ? _options$_features : []];
  let table = {
    _features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = (options2) => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options2);
    }
    return {
      ...defaultOptions,
      ...options2
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
  };
  table._features.forEach((feature) => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: (cb) => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch((error) => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: (updater) => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: (updater) => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join(".") : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn) => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: (props) => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: (props) => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, getMemoOptions(options, "debugColumns")),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
      const recurseColumns = function(columnDefs2, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs2.map((columnDef) => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, getMemoOptions(options, "debugColumns")),
    getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
      return allColumns.flatMap((column) => {
        return column.getFlatColumns();
      });
    }, getMemoOptions(options, "debugColumns")),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, getMemoOptions(options, "debugColumns")),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
      let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
      return orderColumns2(leafColumns);
    }, getMemoOptions(options, "debugColumns")),
    getColumn: (columnId) => {
      const column = table._getAllFlatColumnsById()[columnId];
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}
function getCoreRowModel() {
  return (table) => memo(() => [table.options.data], (data) => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function(originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, void 0, parentRow == null ? void 0 : parentRow.id);
        rowModel.flatRows.push(row);
        rowModel.rowsById[row.id] = row;
        rows.push(row);
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, getMemoOptions(table.options, "debugTable", "getRowModel", () => table._autoResetPageIndex()));
}
/**
   * vue-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function trueFn() {
  return true;
}
const $PROXY = Symbol("merge-proxy");
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return "value" in s ? s.value : s;
}
function mergeProxy() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  return new Proxy({
    get(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        const v = resolveSource(sources[i])[property];
        if (v !== void 0) return v;
      }
    },
    has(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        if (property in resolveSource(sources[i])) return true;
      }
      return false;
    },
    keys() {
      const keys = [];
      for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
      return [...Array.from(new Set(keys))];
    }
  }, propTraps);
}
const FlexRender = defineComponent({
  props: ["render", "props"],
  setup: (props) => {
    return () => {
      if (typeof props.render === "function" || typeof props.render === "object") {
        return h(props.render, props.props);
      }
      return props.render;
    };
  }
});
function getOptionsWithReactiveData(options) {
  return mergeProxy(options, {
    data: unref(options.data)
  });
}
function useVueTable(initialOptions) {
  const IS_REACTIVE = isRef(initialOptions.data);
  const resolvedOptions = mergeProxy({
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    mergeOptions(defaultOptions, options) {
      return IS_REACTIVE ? {
        ...defaultOptions,
        ...options
      } : mergeProxy(defaultOptions, options);
    }
  }, IS_REACTIVE ? getOptionsWithReactiveData(initialOptions) : initialOptions);
  const table = createTable(resolvedOptions);
  if (IS_REACTIVE) {
    const dataRef = shallowRef(initialOptions.data);
    watch(dataRef, () => {
      table.setState((prev) => ({
        ...prev,
        data: dataRef.value
      }));
    }, {
      immediate: true
    });
  }
  const state = ref(table.initialState);
  watchEffect(() => {
    table.setOptions((prev) => {
      var _initialOptions$state;
      const stateProxy = new Proxy({}, {
        get: (_, prop) => state.value[prop]
      });
      return mergeProxy(prev, IS_REACTIVE ? getOptionsWithReactiveData(initialOptions) : initialOptions, {
        // merge the initialState and `options.state`
        // create a new proxy on each `setOptions` call
        // and get the value from state on each property access
        state: mergeProxy(stateProxy, (_initialOptions$state = initialOptions.state) != null ? _initialOptions$state : {}),
        // Similarly, we'll maintain both our internal state and any user-provided
        // state.
        onStateChange: (updater) => {
          if (updater instanceof Function) {
            state.value = updater(state.value);
          } else {
            state.value = updater;
          }
          initialOptions.onStateChange == null || initialOptions.onStateChange(updater);
        }
      });
    });
  });
  return table;
}
const _hoisted_1 = { class: "n8n-data-table-server-wrapper" };
const _hoisted_2 = { class: "table-scroll" };
const _hoisted_3 = ["onMousedown"];
const _hoisted_4 = ["onMousedown", "onTouchstart", "onDblclick"];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = ["colspan"];
const _hoisted_7 = { key: 0 };
const _hoisted_8 = ["colspan"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  key: 0,
  class: "table-pagination",
  "data-test-id": "pagination"
};
const _hoisted_11 = { class: "table-pagination__sizes" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "N8nDataTableServer",
  props: /* @__PURE__ */ mergeModels({
    items: {},
    headers: {},
    itemsLength: {},
    loading: { type: Boolean },
    multiSort: { type: Boolean },
    showSelect: { type: Boolean },
    itemValue: { type: [Function, String], default: "id" },
    returnObject: { type: Boolean },
    itemSelectable: { type: [Boolean, Function], default: void 0 },
    pageSizes: { default: () => [10, 25, 50, 100] }
  }, {
    "page": { default: 0 },
    "pageModifiers": {},
    "items-per-page": { default: 10 },
    "items-per-pageModifiers": {},
    "sort-by": { default: [], required: false },
    "sort-byModifiers": {},
    "selection": {},
    "selectionModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:options", "click:row"], ["update:page", "update:items-per-page", "update:sort-by", "update:selection"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emit = __emit;
    const data = shallowRef(props.items.concat());
    watch(
      () => props.items,
      () => {
        data.value = props.items.concat();
      },
      // the sync will NOT work without the deep watcher
      { deep: true }
    );
    function itemKeySlot(info) {
      const slotName = `item.${info.column.id}`;
      return slots[slotName] ? slots[slotName]({ item: info.row.original, value: info.getValue() }) : info.getValue();
    }
    function isValueAccessor(column) {
      return !!column.value;
    }
    function getHeaderTitle(column) {
      const value = typeof column.value === "function" ? "" : column.value;
      return column.title ?? column.key ?? value;
    }
    function isAccessorColumn(column) {
      return typeof column.value === "function";
    }
    const getColumnMeta = (column) => {
      return column.columnDef.meta ?? {};
    };
    const MIN_COLUMN_WIDTH = 75;
    function getValueAccessor(column) {
      if (isAccessorColumn(column)) {
        return columnHelper.accessor(column.value, {
          id: column.key,
          cell: itemKeySlot,
          header: () => getHeaderTitle(column),
          enableSorting: !column.disableSort,
          minSize: column.minWidth ?? MIN_COLUMN_WIDTH,
          size: column.width,
          meta: {
            cellProps: {
              align: column.align
            }
          }
        });
      } else {
        return columnHelper.accessor(column.value, {
          id: column.key ?? column.value,
          cell: itemKeySlot,
          header: () => getHeaderTitle(column),
          enableSorting: !column.disableSort,
          minSize: column.minWidth ?? MIN_COLUMN_WIDTH,
          size: column.width,
          meta: {
            cellProps: {
              align: column.align
            }
          }
        });
      }
    }
    function mapHeaders(columns) {
      return columns.map((column, index) => {
        if (isValueAccessor(column)) {
          return getValueAccessor(column);
        }
        if (column.key) {
          const accessor = column.key;
          return columnHelper.accessor(column.key, {
            id: accessor,
            cell: itemKeySlot,
            header: () => getHeaderTitle(column),
            enableSorting: !column.disableSort,
            minSize: column.minWidth ?? MIN_COLUMN_WIDTH,
            size: column.width,
            meta: {
              cellProps: {
                align: column.align
              }
            }
          });
        }
        return columnHelper.display({
          id: `display_column_${index}`,
          header: () => getHeaderTitle(column),
          size: column.width,
          meta: {
            cellProps: {
              align: column.align
            }
          }
        });
      });
    }
    const columnsDefinition = computed(() => {
      return [...props.showSelect ? [selectColumn] : [], ...mapHeaders(props.headers)];
    });
    const page = useModel(__props, "page");
    watch(page, () => table.setPageIndex(page.value));
    const itemsPerPage = useModel(__props, "items-per-page");
    watch(itemsPerPage, () => table.setPageSize(itemsPerPage.value));
    const pagination = computed({
      get() {
        return {
          pageIndex: page.value,
          pageSize: itemsPerPage.value
        };
      },
      set(newValue) {
        page.value = newValue.pageIndex;
        itemsPerPage.value = newValue.pageSize;
      }
    });
    const showPagination = computed(() => props.itemsLength > Math.min(...props.pageSizes));
    const sortBy = useModel(__props, "sort-by");
    function handleSortingChange(updaterOrValue) {
      const newValue = typeof updaterOrValue === "function" ? updaterOrValue(sortBy.value) : updaterOrValue;
      sortBy.value = newValue;
      emit("update:options", {
        page: page.value,
        itemsPerPage: itemsPerPage.value,
        sortBy: newValue
      });
    }
    const SELECT_COLUMN_ID = "data-table-select";
    const selectColumn = {
      id: SELECT_COLUMN_ID,
      enableResizing: false,
      size: 38,
      enablePinning: true,
      header: ({ table: table2 }) => {
        const checkboxRef = ref();
        return h(ElCheckbox, {
          ref: checkboxRef,
          modelValue: table2.getIsAllRowsSelected(),
          indeterminate: table2.getIsSomeRowsSelected(),
          onChange: () => {
            const input = checkboxRef.value?.$el.getElementsByTagName("input")[0];
            if (!input) return;
            table2.getToggleAllRowsSelectedHandler()?.({ target: input });
          }
        });
      },
      cell: ({ row }) => {
        const checkboxRef = ref();
        return h(ElCheckbox, {
          ref: checkboxRef,
          modelValue: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          onChange: () => {
            const input = checkboxRef.value?.$el.getElementsByTagName("input")[0];
            if (!input) return;
            row.getToggleSelectedHandler()?.({ target: input });
          }
        });
      },
      meta: {
        cellProps: {
          align: void 0
        }
      }
    };
    function getRowId(originalRow, index, parent) {
      if (typeof props.itemValue === "function") {
        return props.itemValue(originalRow, index, parent);
      }
      return String(get(originalRow, props.itemValue));
    }
    function handleRowSelectionChange(updaterOrValue) {
      if (typeof updaterOrValue === "function") {
        rowSelection.value = updaterOrValue(rowSelection.value);
      } else {
        rowSelection.value = updaterOrValue;
      }
      if (props.returnObject) {
        selection.value = Object.keys(rowSelection.value).map((id) => table.getRow(id).original);
      } else {
        selection.value = Object.keys(rowSelection.value);
      }
    }
    const selection = useModel(__props, "selection");
    const rowSelection = ref(
      (selection.value ?? []).reduce((acc, item, index) => {
        const key = typeof item === "string" ? item : getRowId(item, index);
        acc[key] = true;
        return acc;
      }, {})
    );
    const emitUpdateOptions = useThrottleFn(
      (payload) => emit("update:options", payload),
      100
    );
    function handlePageSizeChange(newPageSize) {
      const maxPage = Math.max(0, Math.ceil(props.itemsLength / newPageSize) - 1);
      const newPage = Math.min(page.value, maxPage);
      page.value = newPage;
      itemsPerPage.value = newPageSize;
    }
    const columnHelper = createColumnHelper();
    const table = useVueTable({
      data,
      columns: columnsDefinition.value,
      get rowCount() {
        return props.itemsLength;
      },
      state: {
        get sorting() {
          return sortBy.value;
        },
        get pagination() {
          return pagination.value;
        },
        get rowSelection() {
          return rowSelection.value;
        }
      },
      getCoreRowModel: getCoreRowModel(),
      onSortingChange: handleSortingChange,
      onPaginationChange(updaterOrValue) {
        const newValue = typeof updaterOrValue === "function" ? updaterOrValue(pagination.value) : updaterOrValue;
        void emitUpdateOptions({
          page: newValue.pageIndex,
          itemsPerPage: newValue.pageSize,
          sortBy: sortBy.value
        });
      },
      manualSorting: true,
      enableMultiSort: props.multiSort,
      manualPagination: true,
      columnResizeMode: "onChange",
      columnResizeDirection: "ltr",
      getRowId,
      enableRowSelection: (row) => {
        if (typeof props.itemSelectable === "undefined") {
          return true;
        }
        if (typeof props.itemSelectable === "boolean") {
          return props.itemSelectable;
        }
        if (typeof props.itemSelectable === "function") {
          return props.itemSelectable(row.original);
        }
        return Boolean(get(row.original, props.itemSelectable));
      },
      onRowSelectionChange: handleRowSelectionChange
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("table", {
              class: normalizeClass(["n8n-data-table-server", { "table--loading": _ctx.loading }]),
              style: normalizeStyle({
                width: `${unref(table).getCenterTotalSize()}px`,
                borderSpacing: 0,
                minWidth: "100%",
                tableLayout: "fixed"
              })
            }, [
              createBaseVNode("thead", {
                style: { position: "sticky", top: 0, zIndex: 2 },
                class: normalizeClass({ loading: _ctx.loading })
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                  return openBlock(), createElementBlock("tr", {
                    key: headerGroup.id
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                      return openBlock(), createElementBlock("th", {
                        key: header.id,
                        style: normalizeStyle({
                          cursor: header.column.getCanSort() ? "pointer" : void 0,
                          width: `${header.getSize()}px`
                        }),
                        onMousedown: ($event) => header.column.getToggleSortingHandler()?.($event)
                      }, [
                        !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                          key: 0,
                          render: header.column.columnDef.header,
                          props: header.getContext()
                        }, null, 8, ["render", "props"])) : createCommentVNode("", true),
                        header.column.getCanSort() ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString({ asc: "↑", desc: "↓" }[header.column.getIsSorted()]), 1)
                        ], 64)) : createCommentVNode("", true),
                        header.column.getCanResize() ? (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: normalizeClass({ resizer: true, ["is-resizing"]: header.column.getIsResizing() }),
                          onMousedown: withModifiers(($event) => header.getResizeHandler()?.($event), ["stop"]),
                          onTouchstart: ($event) => header.getResizeHandler()?.($event),
                          onDblclick: ($event) => header.column.resetSize()
                        }, null, 42, _hoisted_4)) : createCommentVNode("", true)
                      ], 44, _hoisted_3);
                    }), 128))
                  ]);
                }), 128)),
                _ctx.loading ? (openBlock(), createElementBlock("tr", _hoisted_5, [
                  createBaseVNode("th", {
                    colspan: unref(table).getVisibleFlatColumns().length,
                    class: "loading-row"
                  }, _cache[2] || (_cache[2] = [
                    createBaseVNode("div", { class: "progress-bar" }, [
                      createBaseVNode("div", { class: "progress-bar-value" })
                    ], -1)
                  ]), 8, _hoisted_6)
                ])) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("tbody", null, [
                unref(slots).cover ? (openBlock(), createElementBlock("tr", _hoisted_7, [
                  createBaseVNode("td", {
                    class: "cover",
                    colspan: unref(table).getVisibleFlatColumns().length
                  }, [
                    renderSlot(_ctx.$slots, "cover", {}, void 0, true)
                  ], 8, _hoisted_8)
                ])) : createCommentVNode("", true),
                _ctx.loading && !unref(table).getRowModel().rows.length ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(itemsPerPage.value, (item) => {
                  return openBlock(), createElementBlock("tr", { key: item }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(table).getVisibleFlatColumns(), (coll) => {
                      return openBlock(), createElementBlock("td", {
                        key: coll.id,
                        class: "el-skeleton is-animated"
                      }, [
                        createVNode(unref(ElSkeletonItem))
                      ]);
                    }), 128))
                  ]);
                }), 128)) : unref(table).getRowModel().rows.length ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(table).getRowModel().rows, (row) => {
                  return renderSlot(_ctx.$slots, "item", mergeProps({
                    key: row.id,
                    ref_for: true
                  }, { item: row.original, cells: row.getVisibleCells() }), () => [
                    createBaseVNode("tr", {
                      onClick: ($event) => emit("click:row", $event, { item: row.original })
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                        return openBlock(), createElementBlock("td", {
                          key: cell.id,
                          class: normalizeClass({
                            [`cell-align--${getColumnMeta(cell.column).cellProps.align}`]: Boolean(
                              getColumnMeta(cell.column).cellProps.align
                            )
                          })
                        }, [
                          createVNode(unref(FlexRender), {
                            render: cell.column.columnDef.cell,
                            props: cell.getContext()
                          }, null, 8, ["render", "props"])
                        ], 2);
                      }), 128))
                    ], 8, _hoisted_9)
                  ], true);
                }), 128)) : createCommentVNode("", true)
              ])
            ], 6)
          ])
        ]),
        showPagination.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createVNode(unref(_sfc_main$1), {
            "current-page": page.value + 1,
            "page-size": itemsPerPage.value,
            "page-sizes": _ctx.pageSizes,
            layout: "prev, pager, next",
            total: _ctx.itemsLength,
            "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => page.value = $event - 1)
          }, null, 8, ["current-page", "page-size", "page-sizes", "total"]),
          createBaseVNode("div", _hoisted_11, [
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "table-pagination__sizes__label" }, "Page size", -1)),
            createVNode(unref(ElSelect), {
              modelValue: itemsPerPage.value,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => itemsPerPage.value = $event),
                handlePageSizeChange
              ],
              modelModifiers: { number: true },
              class: "table-pagination__sizes__select",
              size: "small",
              teleported: false
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pageSizes, (item) => {
                  return openBlock(), createBlock(unref(ElOption), {
                    key: item,
                    label: item,
                    value: item
                  }, null, 8, ["label", "value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const N8nDataTableServer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03a55eaa"]]);
export {
  N8nDataTableServer as N
};
