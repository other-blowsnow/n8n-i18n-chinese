;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./Draggable-legacy-CcVN489_.js", "./TextWithHighlights-legacy-CVW5NpX4.js", "./useTelemetryContext-legacy-CJA6Osaa.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, renderList, createTextVNode, useTemplateRef, vShow, createBaseVNode, withDirectives, I18nT, useI18n, N8nInfoTip_default, N8nIconButton_default, N8nTree_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, getPairedItemId, storeToRefs, useNDVStore, shorten, getMappedExpression, useWorkflowsStore, useTelemetry, useExternalHooks, Draggable_default, TextWithHighlights_default, MappingPill_default, useTelemetryContext, useExecutionHelpers, __vite_style__, data_mapping_gif_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, MAX_COLUMNS_LIMIT, RunDataTable_vue_vue_type_script_setup_true_lang_default, dataDisplay, compact, table, lightHeader, tableRightMargin, hasCollapsingColumn, isCollapsingColumn, nodeClass, emptyCell, header, draggableHeader, dragButton, highlight, draggingHeader, activeHeader, dataKey, value, nestedValue, mappable, empty, limitColWidth, minColWidth, hoveringKey, draggingKey, hoveringRow, warningTooltip, executionLinkCell, executionLinkRowHeader, collapseColumnButton, isHoveredColumn, RunDataTable_vue_vue_type_style_index_0_lang_module_default, cssModules, RunDataTable_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nTree_default = _srcLegacy007Js.m;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        getPairedItemId = _useTelemetryLegacy00FJs.Hn;
        storeToRefs = _useTelemetryLegacy00FJs.Sc;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        shorten = _useTelemetryLegacy00FJs.bi;
        getMappedExpression = _useTelemetryLegacy00FJs.en;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_DraggableLegacy02dJs) {
        Draggable_default = _DraggableLegacy02dJs.t;
      }, function (_TextWithHighlightsLegacy02hJs) {
        TextWithHighlights_default = _TextWithHighlightsLegacy02hJs.t;
      }, function (_useTelemetryContextLegacy02jJs) {
        MappingPill_default = _useTelemetryContextLegacy02jJs.n;
        useTelemetryContext = _useTelemetryContextLegacy02jJs.t;
      }, function (_dateFormatterLegacy02zJs) {}, function (_useExecutionHelpersLegacy02BJs) {
        useExecutionHelpers = _useExecutionHelpersLegacy02BJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dataDisplay_6nuo6_123 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: var(--spacing--xs);\n  right: 0;\n  overflow-y: auto;\n  line-height: 1.5;\n  word-break: normal;\n  height: 100%;\n  padding-bottom: var(--spacing--3xl);\n}\n._dataDisplay_6nuo6_123._compact_6nuo6_135 {\n  padding-left: var(--spacing--2xs);\n}\n._table_6nuo6_139 {\n  border-collapse: separate;\n  text-align: left;\n  width: 100%;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n}\n._table_6nuo6_139 th {\n  background-color: var(--color--background);\n  border-top: var(--border);\n  border-bottom: var(--border);\n  border-left: var(--border);\n  position: sticky;\n  top: 0;\n  color: var(--color--text--shade-1);\n  z-index: 1;\n}\n._lightHeader_6nuo6_156 ._table_6nuo6_139 th {\n  background-color: var(--color--background--light-2);\n}\n._table_6nuo6_139 th._tableRightMargin_6nuo6_159 {\n  background-color: transparent;\n}\n._table_6nuo6_139 td {\n  vertical-align: top;\n  padding: var(--spacing--4xs) var(--spacing--3xs);\n  border-bottom: var(--border);\n  border-left: var(--border);\n  overflow-wrap: break-word;\n  white-space: pre-wrap;\n  vertical-align: top;\n}\n._table_6nuo6_139 td:first-child,\n._table_6nuo6_139 td:nth-last-child(2) {\n  position: relative;\n  z-index: 0;\n}\n._table_6nuo6_139 td:first-child:after,\n._table_6nuo6_139 td:nth-last-child(2):after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 2px;\n  top: 0;\n}\n._table_6nuo6_139 td:nth-last-child(2):after {\n  right: -1px;\n}\n._table_6nuo6_139 td:first-child:after {\n  left: -1px;\n}\n._table_6nuo6_139 th:last-child,\n._table_6nuo6_139 td:last-child {\n  border-right: var(--border);\n}\n._hasCollapsingColumn_6nuo6_194 ._table_6nuo6_139 {\n  table-layout: fixed;\n}\n._hasCollapsingColumn_6nuo6_194 ._table_6nuo6_139 td:not(._isCollapsingColumn_6nuo6_197) {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._hasCollapsingColumn_6nuo6_194 ._table_6nuo6_139 td:not(._isCollapsingColumn_6nuo6_197) .n8n-tree {\n  height: 1.5em;\n  overflow: hidden;\n}\nth._isCollapsingColumn_6nuo6_197 {\n  border-top-color: var(--color--foreground--shade-2);\n  border-left-color: var(--color--foreground--shade-2);\n  border-right-color: var(--color--foreground--shade-2);\n}\ntd._isCollapsingColumn_6nuo6_197 {\n  border-left-color: var(--color--foreground--shade-2);\n  border-right-color: var(--color--foreground--shade-2);\n}\ntr:last-child td._isCollapsingColumn_6nuo6_197 {\n  border-bottom-color: var(--color--foreground--shade-2);\n}\ntd._isCollapsingColumn_6nuo6_197 + td,\nth._isCollapsingColumn_6nuo6_197 + th {\n  border-left-color: var(--color--foreground--shade-2);\n}\n._nodeClass_6nuo6_226 {\n  margin-bottom: var(--spacing--5xs);\n}\n._emptyCell_6nuo6_230 {\n  height: 32px;\n}\n._header_6nuo6_234 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--4xs) var(--spacing--3xs);\n}\n._header_6nuo6_234 span {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex-grow: 1;\n}\n._draggableHeader_6nuo6_246:hover {\n  cursor: grab;\n  background-color: var(--color--foreground);\n}\n._draggableHeader_6nuo6_246:hover ._dragButton_6nuo6_250 {\n  opacity: 1;\n}\n._highlight_6nuo6_254 ._draggableHeader_6nuo6_246 {\n  color: var(--color--primary);\n}\n._draggingHeader_6nuo6_258 {\n  color: var(--color--primary);\n  background-color: var(--color--primary--tint-2);\n}\n._activeHeader_6nuo6_263 ._dragButton_6nuo6_250 {\n  opacity: 1;\n}\n._dragButton_6nuo6_250 {\n  opacity: 0;\n}\n._dragButton_6nuo6_250 > svg {\n  vertical-align: middle;\n}\n._dataKey_6nuo6_274 {\n  color: var(--color--text--shade-1);\n  line-height: 1.7;\n  font-weight: var(--font-weight--bold);\n  border-radius: var(--radius);\n  padding: 0 var(--spacing--5xs) 0 var(--spacing--5xs);\n  margin-right: var(--spacing--5xs);\n}\n._value_6nuo6_283 {\n  line-height: var(--line-height--md);\n}\n._nestedValue_6nuo6_287 {\n  margin-left: var(--spacing--4xs);\n}\n._mappable_6nuo6_292 {\n  cursor: grab;\n}\n._empty_6nuo6_230 {\n  color: var(--color--danger);\n  font-style: italic;\n}\n._limitColWidth_6nuo6_301 {\n  max-width: 300px;\n}\n._minColWidth_6nuo6_305 {\n  min-width: 240px;\n}\n._hoveringKey_6nuo6_309 {\n  background-color: var(--color--foreground);\n}\n._draggingKey_6nuo6_313 {\n  background-color: var(--color--primary--tint-2);\n}\n._tableRightMargin_6nuo6_159 {\n  width: var(--ndv--spacing);\n  border-right: none !important;\n  border-top: none !important;\n  border-bottom: none !important;\n}\n._compact_6nuo6_135 ._tableRightMargin_6nuo6_159 {\n  padding: 0;\n  min-width: var(--spacing--2xs);\n  max-width: var(--spacing--2xs);\n}\n._hoveringRow_6nuo6_329 td:first-child:after,\n._hoveringRow_6nuo6_329 td:nth-last-child(2):after {\n  background-color: var(--color--secondary);\n}\n._warningTooltip_6nuo6_334 {\n  color: var(--color--warning);\n}\n._executionLinkCell_6nuo6_338 {\n  padding: var(--spacing--3xs) !important;\n}\n._executionLinkRowHeader_6nuo6_342 {\n  width: var(--spacing--md);\n}\n._collapseColumnButton_6nuo6_346 {\n  opacity: 0;\n  margin-block: calc(-2 * var(--spacing--2xs));\n}\n._collapseColumnButton_6nuo6_346 span {\n  flex-shrink: 0;\n}\n._isCollapsingColumn_6nuo6_197 ._collapseColumnButton_6nuo6_346, th._isHoveredColumn_6nuo6_353 ._collapseColumnButton_6nuo6_346, th:hover ._collapseColumnButton_6nuo6_346 {\n  opacity: 1;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region ../../../../../../../../../static/data-mapping-gif.gif
        data_mapping_gif_default = "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif"; //#endregion
        //#region src/features/ndv/runData/components/RunDataTable.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["data-row"];
        _hoisted_2 = ["data-row"];
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = ["width"];
        _hoisted_5 = ["data-test-id"];
        _hoisted_6 = ["data-row"];
        _hoisted_7 = ["data-row", "data-col"];
        _hoisted_8 = {
          key: 1
        };
        MAX_COLUMNS_LIMIT = 40;
        RunDataTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunDataTable",
          props: {
            node: {},
            inputData: {},
            distanceFromActive: {},
            pageOffset: {},
            runIndex: {
              default: 0
            },
            outputIndex: {
              default: 0
            },
            totalRuns: {
              default: 0
            },
            mappingEnabled: {
              type: Boolean,
              default: false
            },
            hasDefaultHoverState: {
              type: Boolean,
              default: false
            },
            search: {
              default: ""
            },
            headerBgColor: {
              default: "base"
            },
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
          emits: ["activeRowChanged", "displayModeChange", "mounted", "collapsingColumnChanged"],
          setup(__props, {
            emit: __emit
          }) {
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
            const {
              trackOpeningRelatedExecution,
              resolveRelatedExecutionUrl
            } = useExecutionHelpers();
            const {
              hoveringItem,
              focusedMappableInput,
              highlightDraggables: highlight$1
            } = storeToRefs(ndvStore);
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
                if (tbody) emit("mounted", {
                  avgRowHeight: tbody.offsetHeight / tableData.value.data.length
                });
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
              inputData.forEach(data => {
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
                tableColumns.forEach(key => {
                  if (entry.hasOwnProperty(key)) {
                    entryRows.push(entry[key]);
                    leftEntryColumns.splice(leftEntryColumns.indexOf(key), 1);
                    hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
                  } else entryRows.push(void 0);
                });
                leftEntryColumns.forEach(key => {
                  tableColumns.push(key);
                  entryRows.push(entry[key]);
                  hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
                });
                resultTableData.push(entryRows);
              });
              resultTableData.forEach(rows => {
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
            watch(focusedMappableInput, curr => {
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
              fixedColumnWidths.value = [...table$1.querySelectorAll("thead tr th")].map(el => el instanceof HTMLElement ? el.getBoundingClientRect().width : 0);
            }, {
              immediate: true,
              flush: "post"
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.dataDisplay, {
                  [_ctx.$style.highlight]: unref(highlight$1),
                  [_ctx.$style.lightHeader]: _ctx.headerBgColor === "light",
                  [_ctx.$style.compact]: props.compact,
                  [_ctx.$style.hasCollapsingColumn]: fixedColumnWidths.value !== void 0
                }])
              }, [tableData.value.columns && tableData.value.columns.length === 0 ? (openBlock(), createElementBlock("table", {
                key: 0,
                class: normalizeClass(_ctx.$style.table)
              }, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionLinkRowHeader)
              }, null, 2)) : createCommentVNode("", true), createBaseVNode("th", {
                class: normalizeClass(_ctx.$style.emptyCell)
              }, null, 2), createBaseVNode("th", {
                class: normalizeClass(_ctx.$style.tableRightMargin)
              }, null, 2)])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (_, index1) => {
                return openBlock(), createElementBlock("tr", {
                  key: index1,
                  class: normalizeClass({
                    [_ctx.$style.hoveringRow]: isHoveringRow(index1)
                  })
                }, [tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("td", {
                  key: 0,
                  "data-row": index1,
                  class: normalizeClass(_ctx.$style.executionLinkCell),
                  onMouseenter: onMouseEnterCell,
                  onMouseleave: onMouseLeaveCell
                }, [tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 0,
                  content: unref(i18n).baseText("runData.table.viewSubExecution", {
                    interpolate: {
                      id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}`
                    }
                  }),
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
                    onClick: $event => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
                  }, null, 8, ["href", "onClick"]), [[vShow, showExecutionLink(index1)]])]),
                  _: 2
                }, 1032, ["content"])) : createCommentVNode("", true)], 42, _hoisted_1)) : createCommentVNode("", true), createBaseVNode("td", {
                  "data-row": index1,
                  "data-col": 0,
                  onMouseenter: onMouseEnterCell,
                  onMouseleave: onMouseLeaveCell
                }, [createVNode(unref(N8nInfoTip_default), null, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.emptyItemHint")), 1)]),
                  _: 1
                })], 40, _hoisted_2), createBaseVNode("td", {
                  class: normalizeClass(_ctx.$style.tableRightMargin)
                }, null, 2)], 2);
              }), 128))])], 2)) : (openBlock(), createElementBlock("table", {
                key: 1,
                ref_key: "tableRef",
                ref: tableRef,
                class: normalizeClass(_ctx.$style.table)
              }, [fixedColumnWidths.value ? (openBlock(), createElementBlock("colgroup", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixedColumnWidths.value, (width, i) => {
                return openBlock(), createElementBlock("col", {
                  key: i,
                  width
                }, null, 8, _hoisted_4);
              }), 128))])) : createCommentVNode("", true), createBaseVNode("thead", null, [createBaseVNode("tr", null, [tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
                key: 0,
                class: normalizeClass(_ctx.$style.executionLinkRowHeader)
              }, null, 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.columns || [], (column, i) => {
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
                  content: withCtx(() => [createBaseVNode("div", null, [_cache[0] || (_cache[0] = createBaseVNode("img", {
                    src: "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif"
                  }, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.dragColumnToFieldHint")), 1)])]),
                  default: withCtx(() => [createVNode(Draggable_default, {
                    type: "mapping",
                    data: getExpression(column),
                    disabled: !_ctx.mappingEnabled,
                    "can-drop": canDraggableDrop.value,
                    "sticky-position": draggableStickyPosition.value,
                    onDragstart: onDragStart,
                    onDragend: column$1 => onDragEnd(column$1?.textContent ?? "", "column")
                  }, {
                    preview: withCtx(({
                      canDrop
                    }) => [createVNode(MappingPill_default, {
                      html: unref(shorten)(column, 16, 2),
                      "can-drop": canDrop
                    }, null, 8, ["html", "can-drop"])]),
                    default: withCtx(({
                      isDragging
                    }) => [createBaseVNode("div", {
                      class: normalizeClass({
                        [_ctx.$style.header]: true,
                        [_ctx.$style.draggableHeader]: _ctx.mappingEnabled,
                        [_ctx.$style.activeHeader]: (i === activeColumn.value || forceShowGrip.value) && _ctx.mappingEnabled,
                        [_ctx.$style.draggingHeader]: isDragging
                      })
                    }, [createVNode(TextWithHighlights_default, {
                      content: getValueToRender(column || ""),
                      search: _ctx.search
                    }, null, 8, ["content", "search"]), createVNode(unref(N8nTooltip_default), {
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
                        onClick: $event => handleSetCollapsingColumn(i)
                      }, null, 8, ["class", "icon", "aria-label", "onClick"])]),
                      _: 2
                    }, 1032, ["content", "disabled"]), _ctx.mappingEnabled ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(_ctx.$style.dragButton)
                    }, [createVNode(unref(N8nIcon_default), {
                      icon: "grip-vertical"
                    })], 2)) : createCommentVNode("", true)], 2)]),
                    _: 2
                  }, 1032, ["data", "disabled", "can-drop", "sticky-position", "onDragend"])]),
                  _: 2
                }, 1032, ["disabled"])], 2);
              }), 128)), columnLimitExceeded.value ? (openBlock(), createElementBlock("th", {
                key: 1,
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nTooltip_default), {
                placement: "bottom-end"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(I18nT), {
                  tag: "span",
                  keypath: "dataMapping.tableView.tableColumnsExceeded.tooltip",
                  scope: "global"
                }, {
                  columnLimit: withCtx(() => [createTextVNode(toDisplayString(columnLimit.value), 1)]),
                  link: withCtx(() => [createBaseVNode("a", {
                    onClick: switchToJsonView
                  }, toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded.tooltip.link")), 1)]),
                  _: 1
                })])]),
                default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style["warningTooltip"]),
                  icon: "triangle-alert"
                }, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded")), 1)])]),
                _: 1
              })], 2)) : createCommentVNode("", true), createBaseVNode("th", {
                class: normalizeClass(_ctx.$style.tableRightMargin)
              }, null, 2)])]), createVNode(Draggable_default, {
                ref_key: "draggableRef",
                ref: draggableRef,
                tag: "tbody",
                type: "mapping",
                "target-data-key": "mappable",
                disabled: !_ctx.mappingEnabled,
                onDragstart: onCellDragStart,
                onDragend: onCellDragEnd
              }, {
                preview: withCtx(({
                  canDrop,
                  el
                }) => [createVNode(MappingPill_default, {
                  html: unref(shorten)(getPathNameFromTarget(el) || "", 16, 2),
                  "can-drop": canDrop
                }, null, 8, ["html", "can-drop"])]),
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (row, index1) => {
                  return openBlock(), createElementBlock("tr", {
                    key: index1,
                    class: normalizeClass({
                      [_ctx.$style.hoveringRow]: isHoveringRow(index1)
                    }),
                    "data-test-id": isHoveringRow(index1) ? "hovering-item" : void 0
                  }, [tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    "data-row": index1,
                    class: normalizeClass(_ctx.$style.executionLinkCell),
                    onMouseenter: onMouseEnterCell,
                    onMouseleave: onMouseLeaveCell
                  }, [tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                    key: 0,
                    content: unref(i18n).baseText("runData.table.viewSubExecution", {
                      interpolate: {
                        id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}`
                      }
                    }),
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
                      onClick: $event => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
                    }, null, 8, ["href", "onClick"]), [[vShow, showExecutionLink(index1)]])]),
                    _: 2
                  }, 1032, ["content"])) : createCommentVNode("", true)], 42, _hoisted_6)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(row, (data, index2) => {
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
                    }, null, 8, ["content", "search", "class"])) : isObject(data) ? (openBlock(), createBlock(unref(N8nTree_default), {
                      key: 1,
                      "node-class": _ctx.$style.nodeClass,
                      value: data
                    }, {
                      label: withCtx(({
                        label,
                        path
                      }) => [createVNode(TextWithHighlights_default, {
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
                      }, null, 8, ["class", "content", "search", "data-name", "data-value", "data-depth", "onMouseenter"])]),
                      value: withCtx(({
                        value: value$1
                      }) => [createVNode(TextWithHighlights_default, {
                        content: getValueToRender(value$1),
                        search: _ctx.search,
                        class: normalizeClass({
                          [_ctx.$style.nestedValue]: true,
                          [_ctx.$style.empty]: isEmpty(value$1)
                        })
                      }, null, 8, ["content", "search", "class"])]),
                      _: 2
                    }, 1032, ["node-class", "value"])) : createCommentVNode("", true)], 42, _hoisted_7);
                  }), 128)), columnLimitExceeded.value ? (openBlock(), createElementBlock("td", _hoisted_8)) : createCommentVNode("", true), createBaseVNode("td", {
                    class: normalizeClass(_ctx.$style.tableRightMargin)
                  }, null, 2)], 10, _hoisted_5);
                }), 128))]),
                _: 1
              }, 8, ["disabled"])], 2))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/RunDataTable.vue?vue&type=style&index=0&lang.module.scss
        dataDisplay = "_dataDisplay_6nuo6_123";
        compact = "_compact_6nuo6_135";
        table = "_table_6nuo6_139";
        lightHeader = "_lightHeader_6nuo6_156";
        tableRightMargin = "_tableRightMargin_6nuo6_159";
        hasCollapsingColumn = "_hasCollapsingColumn_6nuo6_194";
        isCollapsingColumn = "_isCollapsingColumn_6nuo6_197";
        nodeClass = "_nodeClass_6nuo6_226";
        emptyCell = "_emptyCell_6nuo6_230";
        header = "_header_6nuo6_234";
        draggableHeader = "_draggableHeader_6nuo6_246";
        dragButton = "_dragButton_6nuo6_250";
        highlight = "_highlight_6nuo6_254";
        draggingHeader = "_draggingHeader_6nuo6_258";
        activeHeader = "_activeHeader_6nuo6_263";
        dataKey = "_dataKey_6nuo6_274";
        value = "_value_6nuo6_283";
        nestedValue = "_nestedValue_6nuo6_287 _value_6nuo6_283";
        mappable = "_mappable_6nuo6_292";
        empty = "_empty_6nuo6_230";
        limitColWidth = "_limitColWidth_6nuo6_301";
        minColWidth = "_minColWidth_6nuo6_305";
        hoveringKey = "_hoveringKey_6nuo6_309";
        draggingKey = "_draggingKey_6nuo6_313";
        hoveringRow = "_hoveringRow_6nuo6_329";
        warningTooltip = "_warningTooltip_6nuo6_334";
        executionLinkCell = "_executionLinkCell_6nuo6_338";
        executionLinkRowHeader = "_executionLinkRowHeader_6nuo6_342";
        collapseColumnButton = "_collapseColumnButton_6nuo6_346";
        isHoveredColumn = "_isHoveredColumn_6nuo6_353";
        RunDataTable_vue_vue_type_style_index_0_lang_module_default = {
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
        }; //#endregion
        //#region src/features/ndv/runData/components/RunDataTable.vue
        cssModules = {
          "$style": RunDataTable_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", RunDataTable_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();