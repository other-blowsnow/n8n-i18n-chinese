const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-BqSzWoaS.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-j4VKDieO.js","assets/preload-helper-CR0ecmWK.js","assets/truncate-BlCeUq7F.js","assets/_MapCache-DZpzsuCB.js","assets/vue.runtime.esm-bundler-tP5dCd7J.js","assets/chunk-6z4oVpB-.js","assets/CalendarDate-B-JEhNYg.js","assets/sanitize-html-Cft-jOcY.js","assets/empty-BuGRxzl4.js","assets/path-browserify-BgjP7RyT.js","assets/en-b3uD8cvU.js","assets/src-DS0bffpn.css","assets/constants-ksa9xIxI.js","assets/merge-D6lLi7TL.js","assets/builder.store-BjWbk2Wl.js","assets/_baseOrderBy-B2FQHwl_.js","assets/dateformat-hG8NERse.js","assets/useDebounce-Cb7xvwM5.js","assets/useClipboard-Dy2su5yb.js","assets/usePinnedData-CWeGQujV.js","assets/RunDataJsonActions-CZx7rSSE.css"])))=>i.map(i=>d[i]);
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, vn as normalizeClass, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { E as useElementSize } from "./_MapCache-DZpzsuCB.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BlCeUq7F.js";
import "./empty-BuGRxzl4.js";
import { Cr as isString, Xr as executionDataToJson, _ as useNDVStore, cn as getMappedExpression, i as useExternalHooks, ji as shorten, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import { V as nonExistingJsonPath } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import { t as Draggable_default } from "./Draggable-BRjYmAgg.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-C4QSPTGM.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-CErjd9fg.js";
import { t as P } from "./vue-json-pretty-B9qWbmOF.js";
var RunDataJson_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		compact: { type: Boolean },
		execution: {}
	},
	setup(__props) {
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-BqSzWoaS.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])));
		const props = __props;
		const ndvStore = useNDVStore();
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const selectedJsonPath = ref(nonExistingJsonPath);
		const draggingPath = ref(null);
		const jsonDataContainer = ref(null);
		const { height } = useElementSize(jsonDataContainer);
		const jsonData = computed(() => executionDataToJson(props.inputData));
		const highlight$1 = computed(() => ndvStore.highlightDraggables);
		const getShortKey = (el) => {
			if (!el) return "";
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
			if (el?.dataset.path) draggingPath.value = el.dataset.path;
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
				view_shown: telemetryContext.view_shown,
				...mappingTelemetry
			};
			setTimeout(() => {
				externalHooks.run("runDataJson.onDragEnd", telemetryPayload);
				telemetry.track("User dragged data for mapping", telemetryPayload);
			}, 1e3);
		};
		const formatKey = (value) => {
			return isString(value) ? `"${value}"` : JSON.stringify(value);
		};
		const formatValue = (value) => {
			return JSON.stringify(value);
		};
		const getListItemName = (path) => {
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
					"run-index": _ctx.runIndex,
					execution: _ctx.execution
				}, null, 8, [
					"node",
					"pane-type",
					"push-ref",
					"distance-from-active",
					"selected-json-path",
					"json-data",
					"output-index",
					"run-index",
					"execution"
				])) : createCommentVNode("", true)]),
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
				preview: withCtx(({ canDrop, el }) => [el ? (openBlock(), createBlock(MappingPill_default, {
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
					"onUpdate:selectedValue": _cache[0] || (_cache[0] = ($event) => selectedJsonPath.value = $event)
				}, {
					renderNodeKey: withCtx(({ node }) => [createVNode(TextWithHighlights_default, {
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
					}, null, 8, [
						"content",
						"search",
						"data-value",
						"data-name",
						"data-path",
						"data-depth",
						"class"
					])]),
					renderNodeValue: withCtx(({ node }) => [createVNode(TextWithHighlights_default, {
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
					}, null, 8, [
						"content",
						"search",
						"data-value",
						"data-name",
						"data-path",
						"data-depth",
						"class"
					])]),
					_: 1
				}, 8, [
					"data",
					"selected-value",
					"height"
				])]),
				_: 1
			}, 8, [
				"disabled",
				"can-drop",
				"sticky-position"
			])], 2);
		};
	}
});
var RunDataJson_vue_vue_type_style_index_0_lang_module_default = {
	jsonDisplay: "_jsonDisplay_eimnw_123",
	mappable: "_mappable_eimnw_140",
	highlight: "_highlight_eimnw_146",
	dragged: "_dragged_eimnw_147",
	compact: "_compact_eimnw_152"
};
var RunDataJson_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default }]]);
export { RunDataJson_default as default };
