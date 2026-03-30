import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-14clFqm4.js";
import "./src-jV4M2fcN.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-DNsxOyr9.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import "./versions.store-Cwz3Wqlv.js";
import "./usePageRedirectionHelper-H79gLsnv.js";
import "./useClipboard-CRF4y00Y.js";
import "./executions.store-K7FpV4h9.js";
import "./assistant.store-BbX4dYdI.js";
import "./chatPanel.store-Bqd0ExjH.js";
import "./RunData-JJuR-TUd.js";
import "./NDVEmptyState-C6YNICAt.js";
import "./externalSecrets.ee.store-BEePBoyo.js";
import "./uniqBy-CYOzxWHv.js";
import "./usePinnedData-mwDbTI9q.js";
import "./nodeIcon-BECwfvAM.js";
import "./canvas.utils-DpVKjWUr.js";
import "./canvas.eventBus-IAYDCx3W.js";
import "./useCanvasOperations-CD8a88Wn.js";
import "./setupPanel.store-D030fGpD.js";
import "./nodeTransforms-CRDKuOIX.js";
import "./templateTransforms-CmlkNmBG.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-BCEWdXjI.js";
import "./useRunWorkflow-CjrL2VOw.js";
import "./pushConnection.store-Cn2XGMRG.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BK7y9na5.js";
import "./dateFormatter-BGzaEmJI.js";
import "./useExecutionHelpers-BtxcfTcc.js";
import "./KeyboardShortcutTooltip-Oymux7s3.js";
import "./folders.store-qDED_OaN.js";
import "./useKeybindings-CN21vXYI.js";
import "./chatHubPanel.store-DdDtaCA6.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-DGMn4eTl.js";
import "./useLogsTreeExpand-BiScXBkG.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-B0Tn1nkH.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-DJSdAJJK.js";
import "./aiTemplatesStarterCollection.store-kE2p62CB.js";
import "./readyToRunWorkflows.store-CkDYUx2T.js";
import "./useExecutionDebugging-IjP9rHKo.js";
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
