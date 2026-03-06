import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B9vJNOCd.js";
import "./src-DiEfDBW_.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-CeIiqJPu.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-BDDzQuZL.js";
import "./merge-CZQEi9PS.js";
import "./_baseOrderBy-C5llb9iP.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CC7G435l.js";
import "./versions.store-Xt5DODWs.js";
import "./usePageRedirectionHelper-Cz7ZivjC.js";
import "./useClipboard-DTMDUgxK.js";
import "./executions.store-BMPiLOvN.js";
import "./assistant.store-CFrcACMV.js";
import "./chatPanel.store-D6z989iO.js";
import "./RunData-CmHtl5qv.js";
import "./NDVEmptyState-jHkX89aA.js";
import "./externalSecrets.ee.store-DtsdHH54.js";
import "./uniqBy-3Jc6dR-p.js";
import "./usePinnedData-D2WIv-jQ.js";
import "./nodeIcon-DzoQ5His.js";
import "./canvas.utils-BvHrBpk4.js";
import "./nodeCreator.store--jVl9OnG.js";
import "./useCanvasOperations-6BPR1ILX.js";
import "./folders.store-Bfs_o1tT.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-DV9xFvYB.js";
import "./useRunWorkflow-7le6oLrp.js";
import "./pushConnection.store-BJJMLsvy.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Cd320-6T.js";
import "./dateFormatter-Cxh7Pkii.js";
import "./useExecutionHelpers-B-pLgO3L.js";
import "./KeyboardShortcutTooltip-DNMCksvF.js";
import "./useKeybindings-BzIbxzrU.js";
import "./useLogsTreeExpand-D8g9ZpWs.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-B1nrcrpF.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-BhgWkNh2.js";
import "./aiTemplatesStarterCollection.store-osfPHu6l.js";
import "./readyToRunWorkflows.store-B3zlL_sv.js";
import "./useExecutionDebugging-DCv9_Idn.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const workflowState = useWorkflowState();
		provide(WorkflowStateKey, workflowState);
		const { workflowId, initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
		});
		onMounted(async () => {
			await initializeData();
		});
		onBeforeUnmount(() => {
			cleanupPostMessages();
			cleanupInitialization();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
