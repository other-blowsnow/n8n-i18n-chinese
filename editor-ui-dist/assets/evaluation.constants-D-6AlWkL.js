import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, c as useCssModule, et as openBlock, it as renderList, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { n as ElTableColumn, t as ElTable } from "./table-utH6uwMI.js";
import { Ta as require_isEqual } from "./constants-C_oOJnqT.js";
var LONG_TABLE_CELL_MIN_WIDTH = 250;
var specialKeys = [
	"promptTokens",
	"completionTokens",
	"totalTokens",
	"executionTime"
];
function getDefaultOrderedColumns(run, filteredTestCases) {
	const metricColumns = Object.keys(run?.metrics ?? {}).filter((key) => !specialKeys.includes(key));
	const specialColumns = specialKeys.filter((key) => run?.metrics ? key in run.metrics : false);
	const inputColumns = getTestCasesColumns(filteredTestCases ?? [], "inputs");
	const outputColumns = getTestCasesColumns(filteredTestCases ?? [], "outputs");
	return [
		...mapToColumns(inputColumns, "inputs"),
		...mapToColumns(outputColumns, "outputs"),
		...mapToColumns(metricColumns, "metrics", true),
		...mapToColumns(specialColumns, "metrics", true)
	];
}
function applyCachedVisibility(columns, visibility) {
	if (!visibility) return columns;
	return columns.map((column) => column.disabled ? column : {
		...column,
		visible: visibility.hasOwnProperty(column.key) ? visibility[column.key] : column.visible
	});
}
function applyCachedSortOrder(defaultOrder, cachedOrder) {
	if (!cachedOrder?.length) return defaultOrder;
	const result = cachedOrder.map((columnKey) => {
		const matchingColumn = defaultOrder.find((col) => columnKey === col.key);
		if (!matchingColumn) return {
			key: columnKey,
			disabled: true
		};
		return matchingColumn;
	});
	const missingColumns = defaultOrder.filter((defaultCol) => !cachedOrder.includes(defaultCol.key));
	result.push(...missingColumns);
	return result;
}
function getTestCasesColumns(cases, columnType) {
	const inputColumnNames = cases.reduce((set, testCase) => {
		Object.keys(testCase[columnType] ?? {}).forEach((key) => set.add(key));
		return set;
	}, /* @__PURE__ */ new Set([]));
	return Array.from(inputColumnNames.keys());
}
function mapToColumns(columnNames, columnType, numeric) {
	return columnNames.map((column) => ({
		key: `${columnType}.${column}`,
		label: column,
		visible: true,
		disabled: false,
		columnType,
		numeric
	}));
}
function formatValue(key, value, { numeric } = { numeric: false }) {
	let stringValue;
	if (numeric && typeof value === "number" && !specialKeys.includes(key)) stringValue = value.toFixed(2) ?? "-";
	else if (typeof value === "object" && value !== null) stringValue = JSON.stringify(value, null, 2);
	else stringValue = `${value}`;
	return stringValue;
}
function getTestTableHeaders(columnNames, testCases) {
	return columnNames.filter((column) => !column.disabled && column.visible).map((column) => {
		const hasLongContent = Boolean(testCases.find((row) => {
			const value = row[column.columnType]?.[column.label];
			return formatValue(column.label, value, { numeric: column.numeric })?.length > 10;
		}));
		return {
			prop: column.key,
			label: column.disabled ? column.key : column.label,
			sortable: true,
			filter: true,
			showHeaderTooltip: true,
			minWidth: hasLongContent ? LONG_TABLE_CELL_MIN_WIDTH : 125,
			formatter: (row) => {
				const value = row[column.columnType]?.[column.label];
				return formatValue(column.label, value, { numeric: column.numeric });
			}
		};
	});
}
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual());
var TestTableBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestTableBase",
	props: {
		data: {},
		columns: {},
		showControls: { type: Boolean },
		defaultSort: { default: () => ({
			prop: "date",
			order: "descending"
		}) },
		selectable: {
			type: Boolean,
			default: false
		},
		selectableFilter: {
			type: Function,
			default: () => true
		},
		expandedRows: { default: () => /* @__PURE__ */ new Set() }
	},
	emits: ["rowClick", "selectionChange"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const $style = useCssModule();
		const tableRef = ref();
		const selectedRows = ref([]);
		const localData = ref([]);
		const emit = __emit;
		watch(() => props.data, async (newData) => {
			if (!(0, import_isEqual.default)(localData.value, newData)) {
				const currentSelectionIds = selectedRows.value.map((row) => row.id);
				localData.value = newData;
				await nextTick();
				tableRef.value?.sort(props.defaultSort.prop, props.defaultSort.order);
				currentSelectionIds.forEach((id) => {
					const row = localData.value.find((r) => r.id === id);
					if (row) tableRef.value?.toggleRowSelection(row, true);
				});
			}
		}, {
			immediate: true,
			deep: true
		});
		const handleSelectionChange = (rows) => {
			selectedRows.value = rows;
			emit("selectionChange", rows);
		};
		const handleColumnResize = (newWidth, _oldWidth, column) => {
			if (column.minWidth && newWidth < column.minWidth) column.width = column.minWidth;
		};
		const getCellClassName = ({ row }) => {
			return `${props.expandedRows?.has(row.id) ? $style.expandedCell : $style.baseCell}`;
		};
		const getRowClassName = ({ row }) => {
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
				onRowClick: _cache[0] || (_cache[0] = (row) => _ctx.$emit("rowClick", row))
			}, {
				default: withCtx(() => [_ctx.selectable ? (openBlock(), createBlock(unref(ElTableColumn), {
					key: 0,
					type: "selection",
					selectable: _ctx.selectableFilter,
					"data-test-id": "table-column-select",
					width: "46",
					fixed: "",
					align: "center"
				}, null, 8, ["selectable"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
					return openBlock(), createBlock(unref(ElTableColumn), mergeProps({
						key: column.prop,
						ref_for: true
					}, column, {
						resizable: true,
						"data-test-id": "table-column",
						"min-width": column.minWidth ?? unref(125)
					}), {
						header: withCtx((headerProps) => [createVNode(unref(N8nTooltip_default), {
							content: headerProps.column.label,
							placement: "top",
							disabled: !column.showHeaderTooltip
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).customHeaderCell) }, [createBaseVNode("div", { class: normalizeClass(unref($style).customHeaderCellLabel) }, toDisplayString(headerProps.column.label), 3), headerProps.column.sortable && headerProps.column.order ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(unref($style).customHeaderCellSort)
							}, [createVNode(unref(N8nIcon_default), {
								icon: headerProps.column.order === "descending" ? "arrow-up" : "arrow-down",
								size: "small"
							}, null, 8, ["icon"])], 2)) : createCommentVNode("", true)], 2)]),
							_: 2
						}, 1032, ["content", "disabled"])]),
						default: withCtx(({ row }) => [
							column.prop === "id" ? renderSlot(_ctx.$slots, "id", mergeProps({
								key: 0,
								ref_for: true
							}, { row })) : createCommentVNode("", true),
							column.prop === "index" ? renderSlot(_ctx.$slots, "index", mergeProps({
								key: 1,
								ref_for: true
							}, { row })) : createCommentVNode("", true),
							column.prop === "status" ? renderSlot(_ctx.$slots, "status", mergeProps({
								key: 2,
								ref_for: true
							}, { row })) : createCommentVNode("", true)
						]),
						_: 2
					}, 1040, ["min-width"]);
				}), 128))]),
				_: 3
			}, 8, [
				"class",
				"default-sort",
				"data"
			]);
		};
	}
});
var TestTableBase_vue_vue_type_style_index_0_lang_module_default = {
	baseCell: "_baseCell_1cahf_123",
	expandedCell: "_expandedCell_1cahf_134",
	customRow: "_customRow_1cahf_144",
	customDisabledRow: "_customDisabledRow_1cahf_149",
	customHeaderCell: "_customHeaderCell_1cahf_154",
	customHeaderCellLabel: "_customHeaderCellLabel_1cahf_159",
	customHeaderCellSort: "_customHeaderCellSort_1cahf_168",
	table: "_table_1cahf_173"
};
var TestTableBase_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TestTableBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestTableBase_vue_vue_type_style_index_0_lang_module_default }]]);
var testCaseErrorDictionary = {
	MOCKED_NODE_NOT_FOUND: "evaluation.runDetail.error.mockedNodeMissing",
	FAILED_TO_EXECUTE_WORKFLOW: "evaluation.runDetail.error.executionFailed",
	INVALID_METRICS: "evaluation.runDetail.error.invalidMetrics",
	UNKNOWN_ERROR: "evaluation.runDetail.error.unknownError",
	NO_METRICS_COLLECTED: "evaluation.runDetail.error.noMetricsCollected"
};
var testRunErrorDictionary = {
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
const getErrorBaseKey = (errorCode) => {
	return testCaseErrorDictionary[errorCode] ?? testRunErrorDictionary[errorCode] ?? "";
};
const statusDictionary = {
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
};
export { applyCachedVisibility as a, getTestTableHeaders as c, applyCachedSortOrder as i, statusDictionary as n, getDefaultOrderedColumns as o, TestTableBase_default as r, getTestCasesColumns as s, getErrorBaseKey as t };
