import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, mt as useTemplateRef, p as vShow, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, gt as useI18n } from "./_MapCache-CMopfp37.js";
import { Fn as N8nIcon_default, P as N8nInfoTip_default, bt as N8nIconButton_default, ft as N8nTooltip_default, p as N8nTree_default } from "./src-B9lyFNPE.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-D09te2fm.js";
import "./icon-B8U-CfQv.js";
import "./empty-BuGRxzl4.js";
import { Kn as getPairedItemId, _c as storeToRefs, a as useNDVStore, en as getMappedExpression, o as useWorkflowsStore, t as useTelemetry, wi as shorten } from "./useTelemetry-BnWkdL5v.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-7lEZpYki.js";
import "./merge-9-BpYlRV.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BSVJx8HC.js";
import { t as useExternalHooks } from "./useExternalHooks-BhwArgDu.js";
import { t as Draggable_default } from "./Draggable-Dx1WUTsP.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-4Fm26J2a.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-UPqMtM_b.js";
import "./dateFormatter-BcAWObOP.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-C_T89TtO.js";
var _hoisted_1 = ["data-row"];
var _hoisted_2 = ["data-row"];
var _hoisted_3 = { key: 0 };
var _hoisted_4 = ["width"];
var _hoisted_5 = ["data-test-id"];
var _hoisted_6 = ["data-row"];
var _hoisted_7 = ["data-row", "data-col"];
var _hoisted_8 = { key: 1 };
var MAX_COLUMNS_LIMIT = 40;
var RunDataTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataTable",
	props: {
		node: {},
		inputData: {},
		distanceFromActive: {},
		pageOffset: {},
		runIndex: { default: 0 },
		outputIndex: { default: 0 },
		totalRuns: { default: 0 },
		mappingEnabled: {
			type: Boolean,
			default: false
		},
		hasDefaultHoverState: {
			type: Boolean,
			default: false
		},
		search: { default: "" },
		headerBgColor: { default: "base" },
		compact: {
			type: Boolean,
			default: false
		},
		disableHoverHighlight: {
			type: Boolean,
			default: false
		},
		collapsingColumnName: {}
	},
	emits: [
		"activeRowChanged",
		"displayModeChange",
		"mounted",
		"collapsingColumnChanged"
	],
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
		const telemetryContext = useTelemetryContext();
		const { trackOpeningRelatedExecution, resolveRelatedExecutionUrl } = useExecutionHelpers();
		const { hoveringItem, focusedMappableInput, highlightDraggables: highlight$1 } = storeToRefs(ndvStore);
		const canDraggableDrop = computed(() => ndvStore.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.draggableStickyPos);
		const pairedItemMappings = computed(() => workflowsStore.workflowExecutionPairedItemMappings);
		const tableData = computed(() => convertToTable(props.inputData));
		const collapsingColumnIndex = computed(() => {
			if (!props.collapsingColumnName) return -1;
			return tableData.value.columns.indexOf(props.collapsingColumnName);
		});
		onMounted(() => {
			if (tableData.value?.columns && draggableRef.value) {
				const tbody = draggableRef.value.$refs.wrapper;
				if (tbody) emit("mounted", { avgRowHeight: tbody.offsetHeight / tableData.value.data.length });
			}
		});
		function isHoveringRow(row) {
			if (props.disableHoverHighlight) return false;
			if (row === activeRow.value) return true;
			const itemIndex = props.pageOffset + row;
			if (itemIndex === 0 && !hoveringItem.value && props.hasDefaultHoverState && props.distanceFromActive === 1) return true;
			const itemNodeId = getPairedItemId(props.node?.name ?? "", props.runIndex || 0, props.outputIndex || 0, itemIndex);
			if (!hoveringItem.value || !pairedItemMappings.value[itemNodeId]) return false;
			const hoveringItemId = getPairedItemId(hoveringItem.value.nodeName, hoveringItem.value.runIndex, hoveringItem.value.outputIndex, hoveringItem.value.itemIndex);
			return pairedItemMappings.value[itemNodeId].has(hoveringItemId);
		}
		function showExecutionLink(index) {
			if (index === activeRow.value) return true;
			if (activeRow.value === null) return index === 0;
			return false;
		}
		function onMouseEnterCell(e) {
			const target = e.target;
			const col = target.dataset.col;
			const parsedCol = col ? parseInt(col, 10) : NaN;
			if (!isNaN(parsedCol)) {
				hoveringColumnIndex.value = parsedCol;
				if (target && props.mappingEnabled) activeColumn.value = parsedCol;
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
			if (!props.node) return "";
			return getMappedExpression({
				nodeName: props.node.name,
				distanceFromActive: props.distanceFromActive,
				path: [column]
			});
		}
		function getPathNameFromTarget(el) {
			if (!el) return "";
			return el.dataset.name;
		}
		function getCellPathName(path, colIndex) {
			const lastKey = path[path.length - 1];
			if (typeof lastKey === "string") return lastKey;
			if (path.length > 1) return `${path[path.length - 2]}[${lastKey}]`;
			return `${tableData.value.columns[colIndex]}[${lastKey}]`;
		}
		function getCellExpression(path, colIndex) {
			if (!props.node) return "";
			const column = tableData.value.columns[colIndex];
			return getMappedExpression({
				nodeName: props.node.name,
				distanceFromActive: props.distanceFromActive,
				path: [column, ...path]
			});
		}
		function isEmpty(value$1) {
			return value$1 === "" || Array.isArray(value$1) && value$1.length === 0 || typeof value$1 === "object" && value$1 !== null && Object.keys(value$1).length === 0 || value$1 === null || value$1 === void 0;
		}
		function getValueToRender(value$1) {
			if (value$1 === "") return i18n.baseText("runData.emptyString");
			if (typeof value$1 === "string") return value$1;
			if (Array.isArray(value$1) && value$1.length === 0) return i18n.baseText("runData.emptyArray");
			if (typeof value$1 === "object" && value$1 !== null && Object.keys(value$1).length === 0) return i18n.baseText("runData.emptyObject");
			if (value$1 === null || value$1 === void 0) return `${value$1}`;
			if (value$1 === true || value$1 === false || typeof value$1 === "number") return value$1.toString();
			return JSON.stringify(value$1);
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
			if (el?.dataset.value) draggingPath.value = el.dataset.value;
			onDragStart(el, data);
		}
		function onCellDragEnd(el) {
			draggingPath.value = null;
			onDragEnd(el.dataset.name ?? "", "tree", el.dataset.depth ?? "0");
		}
		function isDraggingKey(path, colIndex) {
			if (!draggingPath.value) return;
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
					view_shown: telemetryContext.view_shown,
					...mappingTelemetry
				};
				externalHooks.run("runDataTable.onDragEnd", telemetryPayload);
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
				if (!data.hasOwnProperty("json")) return;
				entry = data.json;
				entryRows = [];
				const entryColumns = Object.keys(entry || {});
				if (entryColumns.length > MAX_COLUMNS_LIMIT) {
					columnLimitExceeded.value = true;
					leftEntryColumns = entryColumns.slice(0, MAX_COLUMNS_LIMIT);
				} else leftEntryColumns = entryColumns;
				if (data.metadata?.subExecution) {
					metadata.data.push(data.metadata);
					metadata.hasExecutionIds = true;
				} else metadata.data.push(void 0);
				tableColumns.forEach((key) => {
					if (entry.hasOwnProperty(key)) {
						entryRows.push(entry[key]);
						leftEntryColumns.splice(leftEntryColumns.indexOf(key), 1);
						hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
					} else entryRows.push(void 0);
				});
				leftEntryColumns.forEach((key) => {
					tableColumns.push(key);
					entryRows.push(entry[key]);
					hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
				});
				resultTableData.push(entryRows);
			});
			resultTableData.forEach((rows) => {
				if (tableColumns.length > rows.length) rows.push(...new Array(tableColumns.length - rows.length));
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
			emit("collapsingColumnChanged", collapsingColumnIndex.value === columnIndex ? null : tableData.value.columns[columnIndex] ?? null);
		}
		watch(focusedMappableInput, (curr) => {
			setTimeout(() => {
				forceShowGrip.value = !!focusedMappableInput.value;
			}, curr ? 300 : 150);
		});
		watch([collapsingColumnIndex, tableRef], ([index, table$1]) => {
			if (index === -1) {
				fixedColumnWidths.value = void 0;
				return;
			}
			if (table$1 === null) return;
			fixedColumnWidths.value = [...table$1.querySelectorAll("thead tr th")].map((el) => el instanceof HTMLElement ? el.getBoundingClientRect().width : 0);
		}, {
			immediate: true,
			flush: "post"
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.dataDisplay, {
				[_ctx.$style.highlight]: unref(highlight$1),
				[_ctx.$style.lightHeader]: _ctx.headerBgColor === "light",
				[_ctx.$style.compact]: props.compact,
				[_ctx.$style.hasCollapsingColumn]: fixedColumnWidths.value !== void 0
			}]) }, [tableData.value.columns && tableData.value.columns.length === 0 ? (openBlock(), createElementBlock("table", {
				key: 0,
				class: normalizeClass(_ctx.$style.table)
			}, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
				tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
					key: 0,
					class: normalizeClass(_ctx.$style.executionLinkRowHeader)
				}, null, 2)) : createCommentVNode("", true),
				createBaseVNode("th", { class: normalizeClass(_ctx.$style.emptyCell) }, null, 2),
				createBaseVNode("th", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
			])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (_, index1) => {
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
					}, [tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("runData.table.viewSubExecution", { interpolate: { id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}` } }),
						placement: "left",
						"hide-after": 0
					}, {
						default: withCtx(() => [withDirectives(createVNode(unref(N8nIconButton_default), {
							element: "a",
							type: "secondary",
							icon: "external-link",
							"data-test-id": "debug-sub-execution",
							size: "mini",
							target: "_blank",
							href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
							onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
						}, null, 8, ["href", "onClick"]), [[vShow, showExecutionLink(index1)]])]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)], 42, _hoisted_1)) : createCommentVNode("", true),
					createBaseVNode("td", {
						"data-row": index1,
						"data-col": 0,
						onMouseenter: onMouseEnterCell,
						onMouseleave: onMouseLeaveCell
					}, [createVNode(unref(N8nInfoTip_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.emptyItemHint")), 1)]),
						_: 1
					})], 40, _hoisted_2),
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
				], 2);
			}), 128))])], 2)) : (openBlock(), createElementBlock("table", {
				key: 1,
				ref_key: "tableRef",
				ref: tableRef,
				class: normalizeClass(_ctx.$style.table)
			}, [
				fixedColumnWidths.value ? (openBlock(), createElementBlock("colgroup", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixedColumnWidths.value, (width, i) => {
					return openBlock(), createElementBlock("col", {
						key: i,
						width
					}, null, 8, _hoisted_4);
				}), 128))])) : createCommentVNode("", true),
				createBaseVNode("thead", null, [createBaseVNode("tr", null, [
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
						}, [createVNode(unref(N8nTooltip_default), {
							placement: "bottom-start",
							disabled: !_ctx.mappingEnabled,
							"show-after": 1e3
						}, {
							content: withCtx(() => [createBaseVNode("div", null, [_cache[0] || (_cache[0] = createBaseVNode("img", { src: "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif" }, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.dragColumnToFieldHint")), 1)])]),
							default: withCtx(() => [createVNode(Draggable_default, {
								type: "mapping",
								data: getExpression(column),
								disabled: !_ctx.mappingEnabled,
								"can-drop": canDraggableDrop.value,
								"sticky-position": draggableStickyPosition.value,
								onDragstart: onDragStart,
								onDragend: (column$1) => onDragEnd(column$1?.textContent ?? "", "column")
							}, {
								preview: withCtx(({ canDrop }) => [createVNode(MappingPill_default, {
									html: unref(shorten)(column, 16, 2),
									"can-drop": canDrop
								}, null, 8, ["html", "can-drop"])]),
								default: withCtx(({ isDragging }) => [createBaseVNode("div", { class: normalizeClass({
									[_ctx.$style.header]: true,
									[_ctx.$style.draggableHeader]: _ctx.mappingEnabled,
									[_ctx.$style.activeHeader]: (i === activeColumn.value || forceShowGrip.value) && _ctx.mappingEnabled,
									[_ctx.$style.draggingHeader]: isDragging
								}) }, [
									createVNode(TextWithHighlights_default, {
										content: getValueToRender(column || ""),
										search: _ctx.search
									}, null, 8, ["content", "search"]),
									createVNode(unref(N8nTooltip_default), {
										content: unref(i18n).baseText("dataMapping.tableView.columnCollapsing.tooltip"),
										disabled: _ctx.mappingEnabled || collapsingColumnIndex.value === i
									}, {
										default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
											class: normalizeClass(_ctx.$style.collapseColumnButton),
											type: "tertiary",
											size: "xmini",
											text: "",
											icon: collapsingColumnIndex.value === i ? "chevrons-up-down" : "chevrons-down-up",
											"aria-label": unref(i18n).baseText("dataMapping.tableView.columnCollapsing"),
											onClick: ($event) => handleSetCollapsingColumn(i)
										}, null, 8, [
											"class",
											"icon",
											"aria-label",
											"onClick"
										])]),
										_: 2
									}, 1032, ["content", "disabled"]),
									_ctx.mappingEnabled ? (openBlock(), createElementBlock("div", {
										key: 0,
										class: normalizeClass(_ctx.$style.dragButton)
									}, [createVNode(unref(N8nIcon_default), { icon: "grip-vertical" })], 2)) : createCommentVNode("", true)
								], 2)]),
								_: 2
							}, 1032, [
								"data",
								"disabled",
								"can-drop",
								"sticky-position",
								"onDragend"
							])]),
							_: 2
						}, 1032, ["disabled"])], 2);
					}), 128)),
					columnLimitExceeded.value ? (openBlock(), createElementBlock("th", {
						key: 1,
						class: normalizeClass(_ctx.$style.header)
					}, [createVNode(unref(N8nTooltip_default), { placement: "bottom-end" }, {
						content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(I18nT), {
							tag: "span",
							keypath: "dataMapping.tableView.tableColumnsExceeded.tooltip",
							scope: "global"
						}, {
							columnLimit: withCtx(() => [createTextVNode(toDisplayString(columnLimit.value), 1)]),
							link: withCtx(() => [createBaseVNode("a", { onClick: switchToJsonView }, toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded.tooltip.link")), 1)]),
							_: 1
						})])]),
						default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style["warningTooltip"]),
							icon: "triangle-alert"
						}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded")), 1)])]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					createBaseVNode("th", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
				])]),
				createVNode(Draggable_default, {
					ref_key: "draggableRef",
					ref: draggableRef,
					tag: "tbody",
					type: "mapping",
					"target-data-key": "mappable",
					disabled: !_ctx.mappingEnabled,
					onDragstart: onCellDragStart,
					onDragend: onCellDragEnd
				}, {
					preview: withCtx(({ canDrop, el }) => [createVNode(MappingPill_default, {
						html: unref(shorten)(getPathNameFromTarget(el) || "", 16, 2),
						"can-drop": canDrop
					}, null, 8, ["html", "can-drop"])]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (row, index1) => {
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
							}, [tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 0,
								content: unref(i18n).baseText("runData.table.viewSubExecution", { interpolate: { id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}` } }),
								placement: "left",
								"hide-after": 0
							}, {
								default: withCtx(() => [withDirectives(createVNode(unref(N8nIconButton_default), {
									element: "a",
									type: "secondary",
									icon: "external-link",
									"data-test-id": "debug-sub-execution",
									size: "mini",
									target: "_blank",
									href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
									onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
								}, null, 8, ["href", "onClick"]), [[vShow, showExecutionLink(index1)]])]),
								_: 2
							}, 1032, ["content"])) : createCommentVNode("", true)], 42, _hoisted_6)) : createCommentVNode("", true),
							(openBlock(true), createElementBlock(Fragment, null, renderList(row, (data, index2) => {
								return openBlock(), createElementBlock("td", {
									key: index2,
									"data-row": index1,
									"data-col": index2,
									class: normalizeClass([hasJsonInColumn(index2) ? _ctx.$style.minColWidth : _ctx.$style.limitColWidth, collapsingColumnIndex.value === index2 ? _ctx.$style.isCollapsingColumn : ""]),
									onMouseenter: onMouseEnterCell,
									onMouseleave: onMouseLeaveCell
								}, [isSimple(data) ? (openBlock(), createBlock(TextWithHighlights_default, {
									key: 0,
									content: getValueToRender(data),
									search: _ctx.search,
									class: normalizeClass({
										[_ctx.$style.value]: true,
										[_ctx.$style.empty]: isEmpty(data)
									})
								}, null, 8, [
									"content",
									"search",
									"class"
								])) : isObject(data) ? (openBlock(), createBlock(unref(N8nTree_default), {
									key: 1,
									"node-class": _ctx.$style.nodeClass,
									value: data
								}, {
									label: withCtx(({ label, path }) => [createVNode(TextWithHighlights_default, {
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
									}, null, 8, [
										"class",
										"content",
										"search",
										"data-name",
										"data-value",
										"data-depth",
										"onMouseenter"
									])]),
									value: withCtx(({ value: value$1 }) => [createVNode(TextWithHighlights_default, {
										content: getValueToRender(value$1),
										search: _ctx.search,
										class: normalizeClass({
											[_ctx.$style.nestedValue]: true,
											[_ctx.$style.empty]: isEmpty(value$1)
										})
									}, null, 8, [
										"content",
										"search",
										"class"
									])]),
									_: 2
								}, 1032, ["node-class", "value"])) : createCommentVNode("", true)], 42, _hoisted_7);
							}), 128)),
							columnLimitExceeded.value ? (openBlock(), createElementBlock("td", _hoisted_8)) : createCommentVNode("", true),
							createBaseVNode("td", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
						], 10, _hoisted_5);
					}), 128))]),
					_: 1
				}, 8, ["disabled"])
			], 2))], 2);
		};
	}
});
var RunDataTable_vue_vue_type_style_index_0_lang_module_default = {
	dataDisplay: "_dataDisplay_fhmfi_123",
	compact: "_compact_fhmfi_135",
	table: "_table_fhmfi_139",
	lightHeader: "_lightHeader_fhmfi_156",
	tableRightMargin: "_tableRightMargin_fhmfi_159",
	hasCollapsingColumn: "_hasCollapsingColumn_fhmfi_194",
	isCollapsingColumn: "_isCollapsingColumn_fhmfi_197",
	nodeClass: "_nodeClass_fhmfi_226",
	emptyCell: "_emptyCell_fhmfi_230",
	header: "_header_fhmfi_234",
	draggableHeader: "_draggableHeader_fhmfi_246",
	dragButton: "_dragButton_fhmfi_250",
	highlight: "_highlight_fhmfi_254",
	draggingHeader: "_draggingHeader_fhmfi_258",
	activeHeader: "_activeHeader_fhmfi_263",
	dataKey: "_dataKey_fhmfi_274",
	value: "_value_fhmfi_283",
	nestedValue: "_nestedValue_fhmfi_287 _value_fhmfi_283",
	mappable: "_mappable_fhmfi_292",
	empty: "_empty_fhmfi_230",
	limitColWidth: "_limitColWidth_fhmfi_301",
	minColWidth: "_minColWidth_fhmfi_305",
	hoveringKey: "_hoveringKey_fhmfi_309",
	draggingKey: "_draggingKey_fhmfi_313",
	hoveringRow: "_hoveringRow_fhmfi_329",
	warningTooltip: "_warningTooltip_fhmfi_334",
	executionLinkCell: "_executionLinkCell_fhmfi_338",
	executionLinkRowHeader: "_executionLinkRowHeader_fhmfi_342",
	collapseColumnButton: "_collapseColumnButton_fhmfi_346",
	isHoveredColumn: "_isHoveredColumn_fhmfi_353"
};
var RunDataTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataTable_vue_vue_type_style_index_0_lang_module_default }]]);
export { RunDataTable_default as default };
