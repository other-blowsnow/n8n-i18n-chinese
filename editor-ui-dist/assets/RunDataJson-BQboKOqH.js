const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-q9hTm2cI.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/chunk-CC9Q-vWm.js","assets/src-DidBXlm8.js","assets/get-DTty8AWW.js","assets/_MapCache-AzCpuecL.js","assets/vue.runtime.esm-bundler-Bs4WIMNP.js","assets/htmlUtils-y-zflQYZ.js","assets/CalendarDate-DwzQ3MAK.js","assets/dist-CmlFwYoT.js","assets/sanitize-html-Z9mSNZC_.js","assets/__vite-browser-external-Byz2CIkm.js","assets/event-bus-DAq0yaAJ.js","assets/en-B10_Mv1Q.js","assets/src-BdfcrcZI.css","assets/workflows.store-DDm0zgUM.js","assets/src-D4ZcEdLA.js","assets/merge-D-_VARjB.js","assets/expression-runtime-stub-DPCJd7RV.js","assets/useRootStore-CffNiZQF.js","assets/constants-DiAcAyiD.js","assets/assert-Cfjx80o8.js","assets/settings.store-MdDUJyUn.js","assets/dist-CluHQ3LF.js","assets/evaluation.store-DpJzMWVz.js","assets/constants2-D6qsHKVK.js","assets/settings.store-xTAm7xED.js","assets/useDebounce-B7RJD4JN.js","assets/sortBy-DhZ_op7R.js","assets/_baseOrderBy-DRPuhbwz.js","assets/posthog.store-Di9fXa7o.js","assets/useTelemetry-ByPVpSRb.js","assets/views-4JHVC4Nc.js","assets/users.store-BnmshxQB.js","assets/constants-CJQKNI-b.js","assets/durations-CNO5pC2_.js","assets/useDocumentTitle-3grEV59C.js","assets/workflowsList.store-COsTVthz.js","assets/typesUtils-j22ByIP8.js","assets/dateformat-BBH_bLAf.js","assets/permissions-CTT33nwN.js","assets/rbac.store-odS8ox2M.js","assets/dropdown-DgNTzaUg.js","assets/refs-DBbZ9JIQ.js","assets/useToast-pZtUw1sf.js","assets/useExternalHooks-B4Dw9Thn.js","assets/z-indexes-BpR3Iam_.js","assets/injectionKeys-D4PRWWmQ.js","assets/useClipboard-CpQ2iaYq.js","assets/useInjectWorkflowId-DCFhpcor.js","assets/useNodeHelpers-CYneRdYV.js","assets/useLoadingService-B2-XHZ8N.js","assets/usePrivateCredentials-CPVpQ-pa.js","assets/usePinnedData-CqTzvTlG.js","assets/useExternalHooks-BlzQvlrt.js","assets/RunDataJsonActions-m_br2IQe.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { f as __vitePreload } from "./get-DTty8AWW.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { m as useElementSize } from "./dist-CmlFwYoT.js";
import { Mn as executionDataToJson, jt as getMappedExpression, ki as isString, tn as injectNDVStore, w as injectWorkflowDocumentStore } from "./workflows.store-DDm0zgUM.js";
import { B as nonExistingJsonPath } from "./constants-CJQKNI-b.js";
import { n as useTelemetry } from "./posthog.store-Di9fXa7o.js";
import { h as shorten } from "./typesUtils-j22ByIP8.js";
import { t as useExternalHooks } from "./useExternalHooks-BlzQvlrt.js";
import { t as Draggable_default } from "./Draggable-Dx6Sm9v2.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-4KAJJjtJ.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-DQOXN62o.js";
import { t as P } from "./vue-json-pretty-DZmHNIaq.js";
//#region src/features/ndv/runData/components/RunDataJson.vue?vue&type=script&setup=true&lang.ts
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
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-q9hTm2cI.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55])));
		const props = __props;
		const ndvStore = injectNDVStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const selectedJsonPath = ref(nonExistingJsonPath);
		const draggingPath = ref(null);
		const jsonDataContainer = ref(null);
		const { height } = useElementSize(jsonDataContainer);
		const jsonData = computed(() => executionDataToJson(props.inputData));
		const highlight = computed(() => ndvStore.value.highlightDraggables);
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
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
			});
		};
		const canDraggableDrop = computed(() => ndvStore.value.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.value.draggableStickyPos);
		const onDragStart = (el, data) => {
			if (el?.dataset.path) draggingPath.value = el.dataset.path;
			ndvStore.value.draggableStartDragging({
				type: "mapping",
				data: data ?? "",
				dimensions: el?.getBoundingClientRect() ?? null
			});
			ndvStore.value.resetMappingTelemetry();
		};
		const onDragEnd = (el) => {
			ndvStore.value.draggableStopDragging();
			draggingPath.value = null;
			const mappingTelemetry = ndvStore.value.mappingTelemetry;
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
					[_ctx.$style.highlight]: highlight.value,
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
var RunDataJson_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataJson_default as default };
