import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B5pLjaIh.js";
import "./src-BIzQ9532.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-BBCNHvSo.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-C1mjwDyK.js";
import "./merge-Bf-2KzoL.js";
import "./_baseOrderBy-PADM6HdE.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CP9TQSjh.js";
import "./versions.store-CGNLq3HD.js";
import "./usePageRedirectionHelper-Cc9a9pHZ.js";
import "./useClipboard-UwxsiSCU.js";
import "./executions.store-IZLX19s3.js";
import "./assistant.store-BHTF4Pec.js";
import "./chatPanel.store-CL33MA2Z.js";
import "./RunData-0Xbmz9sJ.js";
import "./NDVEmptyState-B4UEVaWm.js";
import "./externalSecrets.ee.store-CBMXinmN.js";
import "./uniqBy-fD5BlqDd.js";
import "./usePinnedData-DGFmkWuZ.js";
import "./nodeIcon-CK3wnZGu.js";
import "./canvas.utils-C_LYlwVv.js";
import "./nodeCreator.store-DzuN1Q8w.js";
import "./useCanvasOperations-7gGZvdTh.js";
import "./folders.store-B5UUkbFr.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-BTgPnYCJ.js";
import "./useRunWorkflow-Bn_y3gri.js";
import "./pushConnection.store-B1LB880_.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-HF8QwEPn.js";
import "./dateFormatter-C0EurzjG.js";
import "./useExecutionHelpers-BC4lZ64L.js";
import "./KeyboardShortcutTooltip-I9mwgv0c.js";
import "./useKeybindings-B8SNS2kD.js";
import "./useLogsTreeExpand-CZQU8t73.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-CFu_CRYp.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-BNUIQHp9.js";
import "./aiTemplatesStarterCollection.store-FE00BRZ2.js";
import "./readyToRunWorkflows.store-DKuzDxzC.js";
import "./useExecutionDebugging-cxcPu6Ud.js";
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
		const { workflowId, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
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
