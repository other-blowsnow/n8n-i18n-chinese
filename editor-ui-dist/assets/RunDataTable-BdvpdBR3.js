import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, j as createVNode, p as vShow, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { c as I18nT, s as useI18n } from "./src-DaQgCvnv.js";
import { D as N8nTree_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, tt as N8nInfoTip_default, zi as N8nTooltip_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-CKu-1MdO.js";
import { _i as BINARY_DATA_VIEW_MODAL_KEY } from "./constants-DzzWpyjZ.js";
import { Gt as injectWorkflowExecutionStateStore, Vt as injectNDVStore, _t as getMappedExpression, a as injectWorkflowDocumentStore, fn as getPairedItemId, sn as useWorkflowsStore } from "./workflowDocument.store-DjpEjMiV.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CUxYM5yQ.js";
import { T as shorten } from "./workflowsList.store-DBU92DSv.js";
import { t as useExternalHooks } from "./useExternalHooks-CyKmx-YO.js";
import { t as require_FileSaver_min } from "./FileSaver.min-Cwbwb3yH.js";
import { t as Draggable_default } from "./Draggable-DvTxhLWg.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-RJ8T24h4.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-C3LFvNW9.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-BXi-adNv.js";
//#endregion
//#region src/features/ndv/runData/components/BinaryEntryDataTable.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var _hoisted_1$1 = ["src", "alt"];
var BYTES_THRESHOLD = 1048576;
var BinaryEntryDataTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BinaryEntryDataTable",
	props: {
		value: {},
		depth: {}
	},
	setup(__props) {
		const props = __props;
		const workflowsStore = useWorkflowsStore();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const tablePreview = computed(() => {
			if (!fileUrl.value) return false;
			const mimeType = props.value.mimeType;
			const bytes = Number(props.value.bytes);
			return (mimeType?.startsWith("image/") ?? false) && (bytes === void 0 ? false : bytes < BYTES_THRESHOLD);
		});
		const fileName = computed(() => {
			const { fileName, fileExtension } = props.value;
			const name = fileName ?? "file";
			if (name?.includes(".")) return name;
			return fileExtension ? `${name}.${fileExtension}` : name;
		});
		const fileUrl = computed(() => {
			const { id, mimeType } = props.value;
			return workflowsStore.getBinaryUrl(id, "download", fileName.value, mimeType ?? "");
		});
		const fileMeta = computed(() => {
			const { mimeType, fileSize } = props.value;
			return mimeType + (fileSize ? `, ${fileSize}` : "");
		});
		const downloadBinaryData = async () => {
			try {
				const response = await fetch(fileUrl.value);
				if (!response.ok) throw new Error("Error downloading file");
				(0, import_FileSaver_min.saveAs)(await response.blob(), fileName.value);
			} catch (error) {
				useToast().showMessage({
					title: i18n.baseText("runData.downloadBinaryData.error.title"),
					message: i18n.baseText("runData.downloadBinaryData.error.message"),
					type: "error"
				});
			}
		};
		const viewBinaryData = () => {
			uiStore.openModalWithData({
				name: BINARY_DATA_VIEW_MODAL_KEY,
				data: { binaryData: props.value }
			});
		};
		const containerStyle = computed(() => ({ marginLeft: props.depth ? `${props.depth * 15}px` : "0" }));
		const fileIcon = computed(() => {
			return props.value.mimeType?.startsWith("text/") ?? false ? "file-text" : "file";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				style: normalizeStyle(containerStyle.value)
			}, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.wrapper),
					onClick: viewBinaryData
				}, [tablePreview.value ? (openBlock(), createElementBlock("img", {
					key: 0,
					src: fileUrl.value,
					class: normalizeClass(_ctx.$style.imagePreview),
					alt: fileName.value || "Image preview"
				}, null, 10, _hoisted_1$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.iconWrapper)
				}, [createVNode(unref(N8nIcon_default), {
					icon: fileIcon.value,
					size: "xlarge"
				}, null, 8, ["icon"])], 2))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.filename),
					onClick: viewBinaryData
				}, toDisplayString(fileName.value), 3), fileMeta.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.meta)
				}, toDisplayString(fileMeta.value), 3)) : createCommentVNode("", true)], 2),
				createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.download),
					onClick: downloadBinaryData
				}, [createVNode(unref(N8nIcon_default), {
					icon: "download",
					size: "large"
				})], 2)
			], 6);
		};
	}
});
var BinaryEntryDataTable_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_6ylyr_125",
	download: "_download_6ylyr_139",
	wrapper: "_wrapper_6ylyr_143",
	iconWrapper: "_iconWrapper_6ylyr_155",
	imagePreview: "_imagePreview_6ylyr_165",
	info: "_info_6ylyr_172",
	filename: "_filename_6ylyr_182",
	meta: "_meta_6ylyr_193"
};
var BinaryEntryDataTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BinaryEntryDataTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BinaryEntryDataTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/runData/components/RunDataTable.vue?vue&type=script&setup=true&lang.ts
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
		const ndvStore = injectNDVStore();
		const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const { trackOpeningRelatedExecution, resolveRelatedExecutionUrl } = useExecutionHelpers();
		const hoveringItem = computed(() => ndvStore.value.hoveringItem);
		const focusedMappableInput = computed(() => ndvStore.value.focusedMappableInput);
		const highlight = computed(() => ndvStore.value.highlightDraggables);
		const canDraggableDrop = computed(() => ndvStore.value.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.value.draggableStickyPos);
		const pairedItemMappings = computed(() => workflowExecutionStateStore.value.activeExecutionPairedItemMappings);
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
				path: [column],
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
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
				path: [column, ...path],
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
			});
		}
		function isEmpty(value) {
			return value === "" || Array.isArray(value) && value.length === 0 || typeof value === "object" && value !== null && Object.keys(value).length === 0 || value === null || value === void 0;
		}
		function getValueToRender(value) {
			if (value === "") return i18n.baseText("runData.emptyString");
			if (typeof value === "string") return value;
			if (Array.isArray(value) && value.length === 0) return i18n.baseText("runData.emptyArray");
			if (typeof value === "object" && value !== null && Object.keys(value).length === 0) return i18n.baseText("runData.emptyObject");
			if (value === null || value === void 0) return `${value}`;
			if (value === true || value === false || typeof value === "number") return value.toString();
			return JSON.stringify(value);
		}
		function onDragStart(el, data) {
			draggedColumn.value = true;
			ndvStore.value.draggableStartDragging({
				type: "mapping",
				data: data ?? "",
				dimensions: el?.getBoundingClientRect() ?? null
			});
			ndvStore.value.resetMappingTelemetry();
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
			ndvStore.value.draggableStopDragging();
			setTimeout(() => {
				const mappingTelemetry = ndvStore.value.mappingTelemetry;
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
		watch([collapsingColumnIndex, tableRef], ([index, table]) => {
			if (index === -1) {
				fixedColumnWidths.value = void 0;
				return;
			}
			if (table === null) return;
			fixedColumnWidths.value = [...table.querySelectorAll("thead tr th")].map((el) => el instanceof HTMLElement ? el.getBoundingClientRect().width : 0);
		}, {
			immediate: true,
			flush: "post"
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.dataDisplay, {
				[_ctx.$style.highlight]: highlight.value,
				[_ctx.$style.lightHeader]: __props.headerBgColor === "light",
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
							variant: "subtle",
							icon: "external-link",
							"data-test-id": "debug-sub-execution",
							size: "xsmall",
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
							disabled: !__props.mappingEnabled,
							"show-after": 1e3
						}, {
							content: withCtx(() => [createBaseVNode("div", null, [_cache[0] || (_cache[0] = createBaseVNode("img", { src: "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif" }, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.dragColumnToFieldHint")), 1)])]),
							default: withCtx(() => [createVNode(Draggable_default, {
								type: "mapping",
								data: getExpression(column),
								disabled: !__props.mappingEnabled,
								"can-drop": canDraggableDrop.value,
								"sticky-position": draggableStickyPosition.value,
								onDragstart: onDragStart,
								onDragend: (column) => onDragEnd(column?.textContent ?? "", "column")
							}, {
								preview: withCtx(({ canDrop }) => [createVNode(MappingPill_default, {
									html: unref(shorten)(column, 16, 2),
									"can-drop": canDrop
								}, null, 8, ["html", "can-drop"])]),
								default: withCtx(({ isDragging }) => [createBaseVNode("div", { class: normalizeClass({
									[_ctx.$style.header]: true,
									[_ctx.$style.draggableHeader]: __props.mappingEnabled,
									[_ctx.$style.activeHeader]: (i === activeColumn.value || forceShowGrip.value) && __props.mappingEnabled,
									[_ctx.$style.draggingHeader]: isDragging
								}) }, [
									createVNode(TextWithHighlights_default, {
										content: getValueToRender(column || ""),
										search: __props.search
									}, null, 8, ["content", "search"]),
									createVNode(unref(N8nTooltip_default), {
										content: unref(i18n).baseText("dataMapping.tableView.columnCollapsing.tooltip"),
										disabled: __props.mappingEnabled || collapsingColumnIndex.value === i
									}, {
										default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
											variant: "ghost",
											class: normalizeClass(_ctx.$style.collapseColumnButton),
											size: "xsmall",
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
									__props.mappingEnabled ? (openBlock(), createElementBlock("div", {
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
					disabled: !__props.mappingEnabled,
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
									variant: "subtle",
									icon: "external-link",
									"data-test-id": "debug-sub-execution",
									size: "xsmall",
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
									search: __props.search,
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
											[_ctx.$style.hoveringKey]: __props.mappingEnabled && isHovering(path, index2),
											[_ctx.$style.draggingKey]: isDraggingKey(path, index2),
											[_ctx.$style.dataKey]: true,
											[_ctx.$style.mappable]: __props.mappingEnabled
										}),
										content: label || unref(i18n).baseText("runData.unnamedField"),
										search: __props.search,
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
									binary: withCtx(({ value }) => [createVNode(BinaryEntryDataTable_default, { value }, null, 8, ["value"])]),
									value: withCtx(({ value }) => [createVNode(TextWithHighlights_default, {
										content: getValueToRender(value),
										search: __props.search,
										class: normalizeClass({
											[_ctx.$style.nestedValue]: true,
											[_ctx.$style.empty]: isEmpty(value)
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
	dataDisplay: "_dataDisplay_1t0g0_125",
	compact: "_compact_1t0g0_137",
	table: "_table_1t0g0_141",
	lightHeader: "_lightHeader_1t0g0_158",
	tableRightMargin: "_tableRightMargin_1t0g0_161",
	hasCollapsingColumn: "_hasCollapsingColumn_1t0g0_196",
	isCollapsingColumn: "_isCollapsingColumn_1t0g0_199",
	nodeClass: "_nodeClass_1t0g0_228",
	emptyCell: "_emptyCell_1t0g0_232",
	header: "_header_1t0g0_236",
	draggableHeader: "_draggableHeader_1t0g0_248",
	dragButton: "_dragButton_1t0g0_252",
	highlight: "_highlight_1t0g0_256",
	draggingHeader: "_draggingHeader_1t0g0_260",
	activeHeader: "_activeHeader_1t0g0_265",
	dataKey: "_dataKey_1t0g0_276",
	value: "_value_1t0g0_285",
	nestedValue: "_nestedValue_1t0g0_289 _value_1t0g0_285",
	mappable: "_mappable_1t0g0_294",
	empty: "_empty_1t0g0_232",
	limitColWidth: "_limitColWidth_1t0g0_303",
	minColWidth: "_minColWidth_1t0g0_307",
	hoveringKey: "_hoveringKey_1t0g0_311",
	draggingKey: "_draggingKey_1t0g0_315",
	hoveringRow: "_hoveringRow_1t0g0_331",
	warningTooltip: "_warningTooltip_1t0g0_336",
	executionLinkCell: "_executionLinkCell_1t0g0_340",
	executionLinkRowHeader: "_executionLinkRowHeader_1t0g0_344",
	collapseColumnButton: "_collapseColumnButton_1t0g0_348",
	isHoveredColumn: "_isHoveredColumn_1t0g0_354"
};
var RunDataTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataTable_default as default };
