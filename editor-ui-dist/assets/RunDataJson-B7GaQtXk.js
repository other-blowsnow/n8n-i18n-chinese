const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-CL15uT0Z.js","assets/_plugin-vue_export-helper-DltO58Gh.js","assets/src-Cq27d_Gp.js","assets/CalendarDate-DpJ94D5y.js","assets/_MapCache-8-eqnC2S.js","assets/vue.runtime.esm-bundler-XtMkEjzB.js","assets/chunk-r2Y0G7H8.js","assets/sanitize-html-DjneYy0u.js","assets/en-J5yUMMPs.js","assets/src-rPQCGCai.css","assets/constants-Cyrg9Nbl.js","assets/merge-O0QrB7po.js","assets/users.store-qBZsmf9-.js","assets/_baseOrderBy-3Uh8XZv3.js","assets/dateformat-Bc6vycUF.js","assets/useDebounce-DmlUcXhA.js","assets/useClipboard-D9AU0bV9.js","assets/usePinnedData-B4FHq9FM.js","assets/RunDataJsonActions-m_br2IQe.css"])))=>i.map(i=>d[i]);
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, vn as normalizeClass, y as Suspense } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { D as useElementSize } from "./_MapCache-8-eqnC2S.js";
import { Gi as __vitePreload } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { $i as shorten, Gr as isString, It as useNDVStore, Nt as useTelemetry, _r as useExternalHooks, dt as getMappedExpression, s as useWorkflowsStore, vi as executionDataToJson } from "./users.store-qBZsmf9-.js";
import { z as nonExistingJsonPath } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import { t as Draggable_default } from "./Draggable-CJeFuBtr.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-Y6vRHk8-.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-CVJ50dfV.js";
import { t as P } from "./vue-json-pretty-C8ozTv7n.js";
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
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-CL15uT0Z.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])));
		const props = __props;
		const ndvStore = useNDVStore();
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const workflowsStore = useWorkflowsStore();
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
				path: subPath,
				binaryMode: workflowsStore.workflow.settings?.binaryMode
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
				default: withCtx(() => [!__props.editMode.enabled ? (openBlock(), createBlock(unref(LazyRunDataJsonActions), {
					key: 0,
					node: __props.node,
					"pane-type": __props.paneType,
					"push-ref": __props.pushRef,
					"distance-from-active": __props.distanceFromActive,
					"selected-json-path": selectedJsonPath.value,
					"json-data": jsonData.value,
					"output-index": __props.outputIndex,
					"run-index": __props.runIndex,
					execution: __props.execution
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
				disabled: !__props.mappingEnabled,
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
						search: __props.search,
						"data-target": "mappable",
						"data-value": getJsonParameterPath(node.path),
						"data-name": node.key,
						"data-path": node.path,
						"data-depth": node.level,
						class: normalizeClass({
							[_ctx.$style.mappable]: __props.mappingEnabled,
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
						search: __props.search,
						"data-target": "mappable",
						"data-value": getJsonParameterPath(node.path),
						"data-name": getListItemName(node.path),
						"data-path": node.path,
						"data-depth": node.level,
						class: normalizeClass([{
							[_ctx.$style.mappable]: __props.mappingEnabled,
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
	jsonDisplay: "_jsonDisplay_twg9l_125",
	mappable: "_mappable_twg9l_142",
	highlight: "_highlight_twg9l_148",
	dragged: "_dragged_twg9l_149",
	compact: "_compact_twg9l_154"
};
var RunDataJson_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default }]]);
export { RunDataJson_default as default };
