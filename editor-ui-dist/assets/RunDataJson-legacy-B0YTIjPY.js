;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./Draggable-legacy-ntZACDJX.js", "./TextWithHighlights-legacy-C8fykrgk.js", "./useTelemetryContext-legacy-C7CV6nLc.js", "./vue-json-pretty-legacy-CpZv9WKV.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineAsyncComponent, defineComponent, createBlock, withCtx, openBlock, normalizeClass, Suspense, useElementSize, __vitePreload, __plugin_vue_export_helper_default, getMappedExpression, useNDVStore, shorten, isString, useTelemetry, executionDataToJson, nonExistingJsonPath, useExternalHooks, Draggable_default, TextWithHighlights_default, MappingPill_default, useTelemetryContext, P, __vite_style__, RunDataJson_vue_vue_type_script_setup_true_lang_default, jsonDisplay, mappable, highlight, dragged, compact, RunDataJson_vue_vue_type_style_index_0_lang_module_default, cssModules, RunDataJson_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        Suspense = _vueRuntimeEsmBundlerLegacy003Js.y;
      }, function (_MapCacheLegacy005Js) {
        useElementSize = _MapCacheLegacy005Js.E;
      }, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        getMappedExpression = _useTelemetryLegacy00HJs.Qt;
        useNDVStore = _useTelemetryLegacy00HJs.a;
        shorten = _useTelemetryLegacy00HJs.bi;
        isString = _useTelemetryLegacy00HJs.fr;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        executionDataToJson = _useTelemetryLegacy00HJs.zr;
      }, function (_constantsLegacy00RJs) {
        nonExistingJsonPath = _constantsLegacy00RJs.B;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {
        useExternalHooks = _useExternalHooksLegacy011Js.t;
      }, function (_DraggableLegacy02rJs) {
        Draggable_default = _DraggableLegacy02rJs.t;
      }, function (_TextWithHighlightsLegacy02vJs) {
        TextWithHighlights_default = _TextWithHighlightsLegacy02vJs.t;
      }, function (_useTelemetryContextLegacy02xJs) {
        MappingPill_default = _useTelemetryContextLegacy02xJs.n;
        useTelemetryContext = _useTelemetryContextLegacy02xJs.t;
      }, function (_vueJsonPrettyLegacy02HJs) {
        P = _vueJsonPrettyLegacy02HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._jsonDisplay_eimnw_123 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: var(--spacing--sm);\n  right: 0;\n  overflow-y: hidden;\n  line-height: 1.5;\n  word-break: normal;\n  height: 100%;\n}\n._jsonDisplay_eimnw_123:hover {\n  /* Shows .actionsGroup element from <run-data-json-actions /> child component */\n}\n._jsonDisplay_eimnw_123:hover > div:first-child {\n  opacity: 1;\n}\n._jsonDisplay_eimnw_123 ._mappable_eimnw_140 {\n  cursor: grab;\n}\n._jsonDisplay_eimnw_123 ._mappable_eimnw_140:hover {\n  background-color: var(--json--highlight--color);\n}\n._jsonDisplay_eimnw_123._highlight_eimnw_146 ._mappable_eimnw_140, ._jsonDisplay_eimnw_123._highlight_eimnw_146 ._mappable_eimnw_140:hover,\n._jsonDisplay_eimnw_123 ._dragged_eimnw_147,\n._jsonDisplay_eimnw_123 ._dragged_eimnw_147:hover {\n  background-color: var(--color--primary--tint-2);\n  color: var(--color--primary);\n}\n._jsonDisplay_eimnw_123._compact_eimnw_152 {\n  padding-left: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.vjs-tree {\n  color: var(--json--color);\n  --line-break--color: var(--code--line-break--color);\n  font-size: var(--font-size--2xs);\n}\n.vjs-tree-node:hover {\n  background-color: transparent;\n}\n.vjs-tree-node.is-highlight {\n  background-color: var(--json--highlight--color);\n}\n.vjs-key > span,\n.vjs-value > span {\n  color: var(--color--text--shade-1);\n  line-height: 1.7;\n  border-radius: var(--radius);\n}\n.vjs-value > span {\n  padding: 0 var(--spacing--5xs) 0 var(--spacing--5xs);\n  margin-left: var(--spacing--5xs);\n  white-space: pre-wrap;\n}\n.vjs-tree .vjs-value-null,\n.vjs-tree .vjs-value-null span {\n  color: var(--json--null--color);\n}\n.vjs-tree .vjs-value-boolean,\n.vjs-tree .vjs-value-boolean span {\n  color: var(--json--boolean--color);\n}\n.vjs-tree .vjs-value-number,\n.vjs-tree .vjs-value-number span {\n  color: var(--json--number--color);\n}\n.vjs-tree .vjs-value-string,\n.vjs-tree .vjs-value-string span {\n  color: var(--json--string--color);\n}\n.vjs-tree .vjs-key {\n  color: var(--json--key--color);\n}\n.vjs-tree .vjs-tree__brackets {\n  color: var(--json--brackets--color);\n}\n.vjs-tree .vjs-tree__brackets:hover {\n  color: var(--json--brackets--color--hover);\n}\n.vjs-tree .vjs-tree__content.has-line {\n  border-left: 1px dotted var(--json--line--color);\n}\n.vjs-tree .vjs-tree-list-holder-inner {\n  padding-bottom: var(--spacing--3xl);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/runData/components/RunDataJson.vue?vue&type=script&setup=true&lang.ts
        RunDataJson_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunDataJson",
          props: {
            editMode: {
              default: () => ({})
            },
            pushRef: {},
            paneType: {},
            node: {},
            inputData: {},
            mappingEnabled: {
              type: Boolean
            },
            distanceFromActive: {},
            outputIndex: {},
            runIndex: {},
            totalRuns: {},
            search: {},
            compact: {
              type: Boolean
            }
          },
          setup(__props) {
            const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./RunDataJsonActions-legacy-DoG2Ji_a.js"), true               ? void 0 : void 0));
            const props = __props;
            const ndvStore = useNDVStore();
            const externalHooks = useExternalHooks();
            const telemetry = useTelemetry();
            const telemetryContext = useTelemetryContext();
            const selectedJsonPath = ref(nonExistingJsonPath);
            const draggingPath = ref(null);
            const jsonDataContainer = ref(null);
            const {
              height
            } = useElementSize(jsonDataContainer);
            const jsonData = computed(() => executionDataToJson(props.inputData));
            const highlight$1 = computed(() => ndvStore.highlightDraggables);
            const getShortKey = el => {
              if (!el) return "";
              return shorten(el.dataset.name ?? "", 16, 2);
            };
            const getJsonParameterPath = path => {
              const subPath = path.replace(/^(\["?\d"?])/, "");
              return getMappedExpression({
                nodeName: props.node.name,
                distanceFromActive: props.distanceFromActive,
                path: subPath
              });
            };
            const canDraggableDrop = computed(() => ndvStore.canDraggableDrop);
            const draggableStickyPosition = computed(() => ndvStore.draggableStickyPos);
            const onDragStart = (el, data) => {
              if (el?.dataset.path) draggingPath.value = el.dataset.path;
              ndvStore.draggableStartDragging({
                type: "mapping",
                data: data ?? "",
                dimensions: el?.getBoundingClientRect() ?? null
              });
              ndvStore.resetMappingTelemetry();
            };
            const onDragEnd = el => {
              ndvStore.draggableStopDragging();
              draggingPath.value = null;
              const mappingTelemetry = ndvStore.mappingTelemetry;
              const telemetryPayload = {
                src_node_type: props.node.type,
                src_field_name: el.dataset.name ?? "",
                src_nodes_back: props.distanceFromActive,
                src_run_index: props.runIndex,
                src_runs_total: props.totalRuns,
                src_field_nest_level: el.dataset.depth ?? 0,
                src_view: "json",
                src_element: el,
                success: false,
                view_shown: telemetryContext.view_shown,
                ...mappingTelemetry
              };
              setTimeout(() => {
                externalHooks.run("runDataJson.onDragEnd", telemetryPayload);
                telemetry.track("User dragged data for mapping", telemetryPayload);
              }, 1e3);
            };
            const formatKey = value => {
              return isString(value) ? `"${value}"` : JSON.stringify(value);
            };
            const formatValue = value => {
              return JSON.stringify(value);
            };
            const getListItemName = path => {
              return path.replace(/^(\["?\d"?]\.?)/g, "");
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref_key: "jsonDataContainer",
                ref: jsonDataContainer,
                class: normalizeClass([_ctx.$style.jsonDisplay, {
                  [_ctx.$style.highlight]: highlight$1.value,
                  [_ctx.$style.compact]: props.compact
                }])
              }, [(openBlock(), createBlock(Suspense, null, {
                default: withCtx(() => [!_ctx.editMode.enabled ? (openBlock(), createBlock(unref(LazyRunDataJsonActions), {
                  key: 0,
                  node: _ctx.node,
                  "pane-type": _ctx.paneType,
                  "push-ref": _ctx.pushRef,
                  "distance-from-active": _ctx.distanceFromActive,
                  "selected-json-path": selectedJsonPath.value,
                  "json-data": jsonData.value,
                  "output-index": _ctx.outputIndex,
                  "run-index": _ctx.runIndex
                }, null, 8, ["node", "pane-type", "push-ref", "distance-from-active", "selected-json-path", "json-data", "output-index", "run-index"])) : createCommentVNode("", true)]),
                _: 1
              })), createVNode(Draggable_default, {
                type: "mapping",
                "target-data-key": "mappable",
                disabled: !_ctx.mappingEnabled,
                "can-drop": canDraggableDrop.value,
                "sticky-position": draggableStickyPosition.value,
                onDragstart: onDragStart,
                onDragend: onDragEnd
              }, {
                preview: withCtx(({
                  canDrop,
                  el
                }) => [el ? (openBlock(), createBlock(MappingPill_default, {
                  key: 0,
                  html: getShortKey(el),
                  "can-drop": canDrop
                }, null, 8, ["html", "can-drop"])) : createCommentVNode("", true)]),
                default: withCtx(() => [createVNode(unref(P), {
                  data: jsonData.value,
                  deep: 10,
                  "show-length": true,
                  "selected-value": selectedJsonPath.value,
                  "root-path": "",
                  "selectable-type": "single",
                  class: "json-data",
                  virtual: true,
                  height: unref(height),
                  "onUpdate:selectedValue": _cache[0] || (_cache[0] = $event => selectedJsonPath.value = $event)
                }, {
                  renderNodeKey: withCtx(({
                    node
                  }) => [createVNode(TextWithHighlights_default, {
                    content: formatKey(node.key),
                    search: _ctx.search,
                    "data-target": "mappable",
                    "data-value": getJsonParameterPath(node.path),
                    "data-name": node.key,
                    "data-path": node.path,
                    "data-depth": node.level,
                    class: normalizeClass({
                      [_ctx.$style.mappable]: _ctx.mappingEnabled,
                      [_ctx.$style.dragged]: draggingPath.value === node.path
                    })
                  }, null, 8, ["content", "search", "data-value", "data-name", "data-path", "data-depth", "class"])]),
                  renderNodeValue: withCtx(({
                    node
                  }) => [createVNode(TextWithHighlights_default, {
                    content: formatValue(node.content),
                    search: _ctx.search,
                    "data-target": "mappable",
                    "data-value": getJsonParameterPath(node.path),
                    "data-name": getListItemName(node.path),
                    "data-path": node.path,
                    "data-depth": node.level,
                    class: normalizeClass([{
                      [_ctx.$style.mappable]: _ctx.mappingEnabled,
                      [_ctx.$style.dragged]: draggingPath.value === node.path
                    }, "ph-no-capture"])
                  }, null, 8, ["content", "search", "data-value", "data-name", "data-path", "data-depth", "class"])]),
                  _: 1
                }, 8, ["data", "selected-value", "height"])]),
                _: 1
              }, 8, ["disabled", "can-drop", "sticky-position"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/RunDataJson.vue?vue&type=style&index=0&lang.module.scss
        jsonDisplay = "_jsonDisplay_eimnw_123";
        mappable = "_mappable_eimnw_140";
        highlight = "_highlight_eimnw_146";
        dragged = "_dragged_eimnw_147";
        compact = "_compact_eimnw_152";
        RunDataJson_vue_vue_type_style_index_0_lang_module_default = {
          jsonDisplay,
          mappable,
          highlight,
          dragged,
          compact
        }; //#endregion
        //#region src/features/ndv/runData/components/RunDataJson.vue
        cssModules = {
          "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", RunDataJson_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();