import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CpHp4FW8.js";
import "./src-zFYS4ILv.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-_kipJHtz.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-CZQU-a3W.js";
import "./merge-DSIHXZgh.js";
import "./_baseOrderBy-DqfNsAfh.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CWQqb9G0.js";
import "./versions.store-D4eyfbmW.js";
import "./usePageRedirectionHelper-BFUIxYoZ.js";
import "./useClipboard-BQBfRfcX.js";
import "./executions.store-OcRUv4TQ.js";
import "./assistant.store-CMWMK0wq.js";
import "./chatPanel.store-ndo3h9jB.js";
import "./RunData-CP6-a7aU.js";
import "./NDVEmptyState-CUnPOwBY.js";
import "./externalSecrets.ee.store-CLUqhodP.js";
import "./uniqBy-DPV92DSS.js";
import "./usePinnedData-Bo94EGnO.js";
import "./nodeIcon-AG_4F8uo.js";
import "./canvas.utils-DydQZk_m.js";
import "./canvas.eventBus-BOs9cl_2.js";
import "./useCanvasOperations-6eqdwN7p.js";
import "./folders.store-xsoNECNZ.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-Dns12ypz.js";
import "./useRunWorkflow-DFm74rX3.js";
import "./pushConnection.store-BXQOtW8R.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-wLGOIHtH.js";
import "./dateFormatter-OO4-jr6J.js";
import "./useExecutionHelpers-Cnb19Xrk.js";
import "./KeyboardShortcutTooltip-CTzi064H.js";
import "./useKeybindings-LAI81F8t.js";
import "./useLogsTreeExpand-DEc7AXhp.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-oegRBA-6.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-Bl5d1QiG.js";
import "./aiTemplatesStarterCollection.store-BgfuxtjQ.js";
import "./readyToRunWorkflows.store-BIfPuZvW.js";
import "./useExecutionDebugging-CX43vEk3.js";
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
