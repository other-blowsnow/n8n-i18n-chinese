import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-65UNw25j.js";
import "./src-BushEFrD.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-buY8IFeq.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import "./versions.store-evX19U2A.js";
import "./usePageRedirectionHelper-COwsK9BF.js";
import "./useClipboard-DUb9bZTD.js";
import "./executions.store-CZ7IudtY.js";
import "./assistant.store-CWYwgkmr.js";
import "./chatPanel.store-DMGDdE_b.js";
import "./RunData-NQo5-mYA.js";
import "./NDVEmptyState-DZmU4yg5.js";
import "./externalSecrets.ee.store-llIAkYfQ.js";
import "./uniqBy-Dj098wSc.js";
import "./usePinnedData-C8gnvP4e.js";
import "./nodeIcon-CD_sOlVS.js";
import "./canvas.utils-DMO0Z6xe.js";
import "./canvas.eventBus-C8w9bqJ2.js";
import "./useCanvasOperations-D5bkcPXX.js";
import "./setupPanel.store-CF2im1BD.js";
import "./nodeTransforms-DEpSiFLd.js";
import "./templateTransforms-B0pb7wSN.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-Bp2F1h7o.js";
import "./useRunWorkflow-_sIY4q0C.js";
import "./pushConnection.store-f62eviF-.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-DPXpfSOV.js";
import "./dateFormatter-HakUyV2l.js";
import "./useExecutionHelpers-CVHk79ok.js";
import "./KeyboardShortcutTooltip-_xCpLz9K.js";
import "./folders.store-DJ4CCWGb.js";
import "./useKeybindings-C9INeoZo.js";
import "./chatHubPanel.store-CLjAUqe4.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-BswtBMJg.js";
import "./useLogsTreeExpand-BsP2apvy.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-KGLPmUmC.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-BXI0Jazf.js";
import "./aiTemplatesStarterCollection.store-Cap_rMMZ.js";
import "./readyToRunWorkflows.store-DqrTytUn.js";
import "./useExecutionDebugging-CkfsoCrM.js";
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
		const { initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		useProvideWorkflowId();
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
