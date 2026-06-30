import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, W as nextTick, gt as watch, j as createVNode, q as onBeforeUnmount, tt as provide, vn as normalizeClass, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Ya as N8nIcon_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { du as EditorEnabledFeaturesKey, gu as WorkflowIdKey, hu as WorkflowDocumentStoreKey } from "./constants-DzzWpyjZ.js";
import { Bt as disposeNDVStore, Kt as useWorkflowExecutionStateStore, Ut as useNDVStore, Wt as disposeWorkflowExecutionStateStore, i as disposeWorkflowDocumentStore, l as assignNodeId, s as useWorkflowDocumentStore } from "./workflowDocument.store-DjpEjMiV.js";
import { A as useWorkflowNormalization } from "./useCanvasOperations-BlKqxocd.js";
import { t as canvasEventBus } from "./canvas.eventBus-D2fgw04H.js";
import { t as NodeView_default } from "./NodeView-CZ1Xc3JI.js";
//#region src/app/components/WorkflowPreviewHost.vue?vue&type=script&setup=true&lang.ts
var WorkflowPreviewHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewHost",
	props: {
		documentId: {},
		workflow: {}
	},
	setup(__props) {
		const props = __props;
		const { normalizeWorkflowData } = useWorkflowNormalization();
		const documentStore = shallowRef(null);
		provide(WorkflowIdKey, computed(() => documentStore.value?.workflowId ?? ""));
		provide(WorkflowDocumentStoreKey, documentStore);
		provide(EditorEnabledFeaturesKey, computed(() => ({
			readOnly: true,
			expandGroups: true,
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			executionSuccessToasts: false,
			executionErrorToasts: false
		})));
		function disposePreviewStores() {
			const scopedDocumentStore = documentStore.value;
			if (!scopedDocumentStore) return;
			const documentId = scopedDocumentStore.documentId;
			documentStore.value = null;
			disposeNDVStore(useNDVStore(documentId));
			disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(documentId));
			disposeWorkflowDocumentStore(scopedDocumentStore);
		}
		async function hydratePreview() {
			if (documentStore.value) disposePreviewStores();
			const [workflowIdFromDocumentId, version] = props.documentId.split("@");
			const scopedDocumentStore = useWorkflowDocumentStore(props.documentId);
			const { nodes, connections } = normalizeWorkflowData({
				nodes: (props.workflow.nodes ?? []).map((node) => {
					const previewNode = { ...node };
					if (!previewNode.id) assignNodeId(previewNode);
					return previewNode;
				}),
				connections: props.workflow.connections ?? {}
			});
			scopedDocumentStore.hydrate({
				name: "",
				active: false,
				isArchived: false,
				createdAt: "",
				updatedAt: "",
				...props.workflow,
				id: workflowIdFromDocumentId,
				versionId: version,
				nodes,
				connections
			});
			documentStore.value = scopedDocumentStore;
			await nextTick();
			canvasEventBus.emit("fitView");
		}
		watch(() => [props.documentId, props.workflow], hydratePreview, { immediate: true });
		onBeforeUnmount(() => {
			disposePreviewStores();
		});
		const isReady = computed(() => documentStore.value !== null);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "workflow-preview-host"
			}, [isReady.value ? (openBlock(), createBlock(NodeView_default, { key: 0 })) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
});
var WorkflowPreviewHost_vue_vue_type_style_index_0_lang_module_default = {
	host: "_host_1ytk6_125",
	centerState: "_centerState_1ytk6_133"
};
var WorkflowPreviewHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPreviewHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowPreviewHost_default as t };
