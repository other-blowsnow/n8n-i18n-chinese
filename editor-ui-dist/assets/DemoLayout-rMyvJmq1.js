import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Bv7c3f3H.js";
import "./src-NOcRrhMI.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-D2CJwIMh.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-BfwnXJD0.js";
import "./merge-18y757JO.js";
import "./_baseOrderBy-DYXZYdmk.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CfqGZdKt.js";
import "./versions.store-C5MwUeoH.js";
import "./usePageRedirectionHelper-CsNvv_27.js";
import "./useClipboard-Bb3-B6uu.js";
import "./executions.store-DfGwL7WH.js";
import "./assistant.store-tITm29jM.js";
import "./chatPanel.store-Cp9tACqd.js";
import "./RunData-BA94cRtj.js";
import "./NDVEmptyState-BAMLqewf.js";
import "./externalSecrets.ee.store-FmmlxywU.js";
import "./uniqBy-Ce5w7A7u.js";
import "./usePinnedData-CTUnN2lP.js";
import "./nodeIcon-DhJ-bHmj.js";
import "./canvas.utils-BiG2HRKB.js";
import "./canvas.eventBus-DmG4M5Yk.js";
import "./useCanvasOperations-CRp4NPu2.js";
import "./folders.store-B-Mq8WaA.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-BDI7RMj_.js";
import "./useRunWorkflow-03MlJmwX.js";
import "./pushConnection.store-DFU0MZ_9.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BLO0vEso.js";
import "./dateFormatter-CU62HP2_.js";
import "./useExecutionHelpers-B5VewNwH.js";
import "./KeyboardShortcutTooltip-C7HcpLvs.js";
import "./useKeybindings-C6FWDD0y.js";
import "./useLogsTreeExpand-CupcCLJw.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DYD8ijBC.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-B107rPl0.js";
import "./aiTemplatesStarterCollection.store-5kMSl-jJ.js";
import "./readyToRunWorkflows.store-2C1aNFYa.js";
import "./useExecutionDebugging-DSvF7b69.js";
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
