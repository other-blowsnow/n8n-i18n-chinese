const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-C77s4IJp.js","assets/index-Y0sphpVt.js","assets/index-C1XlnjOl.css","assets/_commonjs-dynamic-modules-TGKdzP3c.js","assets/RunDataJsonActions-DrgwFS0W.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, aA as useNDVStore, r as ref, cP as useElementSize, x as computed, fW as executionDataToJson, i as createElementBlock, g as openBlock, e as createBlock, j as createVNode, w as withCtx, f as createCommentVNode, m as unref, ec as defineAsyncComponent, dH as Suspense, hj as TextWithHighlights, n as normalizeClass, hk as MappingPill, gU as Draggable, aw as __vitePreload, hl as shorten, ho as getMappedExpression, hp as isString, hq as nonExistingJsonPath, aX as useExternalHooks, am as useTelemetry, _ as _export_sfc } from "./index-Y0sphpVt.js";
import { a as VueJsonPretty } from "./RunData-DxuRERNF.js";
import "./FileSaver.min-DH2NFi71.js";
import "./useExecutionHelpers-B_Y5s7gr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunDataJson",
  props: {
    editMode: { default: () => ({}) },
    pushRef: {},
    paneType: {},
    node: {},
    inputData: {},
    mappingEnabled: { type: Boolean },
    distanceFromActive: {},
    outputIndex: {},
    runIndex: {},
    totalRuns: {},
    search: {},
    compact: { type: Boolean }
  },
  setup(__props) {
    const LazyRunDataJsonActions = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataJsonActions-C77s4IJp.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0)
    );
    const props = __props;
    const ndvStore = useNDVStore();
    const externalHooks = useExternalHooks();
    const telemetry = useTelemetry();
    const selectedJsonPath = ref(nonExistingJsonPath);
    const draggingPath = ref(null);
    const jsonDataContainer = ref(null);
    const { height } = useElementSize(jsonDataContainer);
    const jsonData = computed(() => executionDataToJson(props.inputData));
    const highlight2 = computed(() => ndvStore.highlightDraggables);
    const getShortKey = (el) => {
      if (!el) {
        return "";
      }
      return shorten(el.dataset.name ?? "", 16, 2);
    };
    const getJsonParameterPath = (path) => {
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
      if (el?.dataset.path) {
        draggingPath.value = el.dataset.path;
      }
      ndvStore.draggableStartDragging({
        type: "mapping",
        data: data ?? "",
        dimensions: el?.getBoundingClientRect() ?? null
      });
      ndvStore.resetMappingTelemetry();
    };
    const onDragEnd = (el) => {
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
        ...mappingTelemetry
      };
      setTimeout(() => {
        void externalHooks.run("runDataJson.onDragEnd", telemetryPayload);
        telemetry.track("User dragged data for mapping", telemetryPayload, {
          withPostHog: true
        });
      }, 1e3);
    };
    const getContent = (value) => {
      return isString(value) ? `"${value}"` : JSON.stringify(value);
    };
    const getListItemName = (path) => {
      return path.replace(/^(\["?\d"?]\.?)/g, "");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "jsonDataContainer",
        ref: jsonDataContainer,
        class: normalizeClass([
          _ctx.$style.jsonDisplay,
          { [_ctx.$style.highlight]: highlight2.value, [_ctx.$style.compact]: props.compact }
        ])
      }, [
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            !_ctx.editMode.enabled ? (openBlock(), createBlock(unref(LazyRunDataJsonActions), {
              key: 0,
              node: _ctx.node,
              "pane-type": _ctx.paneType,
              "push-ref": _ctx.pushRef,
              "distance-from-active": _ctx.distanceFromActive,
              "selected-json-path": selectedJsonPath.value,
              "json-data": jsonData.value,
              "output-index": _ctx.outputIndex,
              "run-index": _ctx.runIndex
            }, null, 8, ["node", "pane-type", "push-ref", "distance-from-active", "selected-json-path", "json-data", "output-index", "run-index"])) : createCommentVNode("", true)
          ]),
          _: 1
        })),
        createVNode(Draggable, {
          type: "mapping",
          "target-data-key": "mappable",
          disabled: !_ctx.mappingEnabled,
          "can-drop": canDraggableDrop.value,
          "sticky-position": draggableStickyPosition.value,
          onDragstart: onDragStart,
          onDragend: onDragEnd
        }, {
          preview: withCtx(({ canDrop, el }) => [
            el ? (openBlock(), createBlock(MappingPill, {
              key: 0,
              html: getShortKey(el),
              "can-drop": canDrop
            }, null, 8, ["html", "can-drop"])) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            createVNode(unref(VueJsonPretty), {
              data: jsonData.value,
              deep: 10,
              "show-length": true,
              "selected-value": selectedJsonPath.value,
              "root-path": "",
              "selectable-type": "single",
              class: "json-data",
              virtual: true,
              height: unref(height),
              "onUpdate:selectedValue": _cache[0] || (_cache[0] = ($event) => selectedJsonPath.value = $event)
            }, {
              renderNodeKey: withCtx(({ node }) => [
                createVNode(TextWithHighlights, {
                  content: getContent(node.key),
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
                }, null, 8, ["content", "search", "data-value", "data-name", "data-path", "data-depth", "class"])
              ]),
              renderNodeValue: withCtx(({ node }) => [
                isNaN(node.index) ? (openBlock(), createBlock(TextWithHighlights, {
                  key: 0,
                  content: getContent(node.content),
                  search: _ctx.search
                }, null, 8, ["content", "search"])) : (openBlock(), createBlock(TextWithHighlights, {
                  key: 1,
                  content: getContent(node.content),
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
                }, null, 8, ["content", "search", "data-value", "data-name", "data-path", "data-depth", "class"]))
              ]),
              _: 1
            }, 8, ["data", "selected-value", "height"])
          ]),
          _: 1
        }, 8, ["disabled", "can-drop", "sticky-position"])
      ], 2);
    };
  }
});
const jsonDisplay = "_jsonDisplay_1rfof_123";
const mappable = "_mappable_1rfof_140";
const highlight = "_highlight_1rfof_146";
const dragged = "_dragged_1rfof_147";
const compact = "_compact_1rfof_152";
const style0 = {
  jsonDisplay,
  mappable,
  highlight,
  dragged,
  compact
};
const cssModules = {
  "$style": style0
};
const RunDataJson = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataJson as default
};
