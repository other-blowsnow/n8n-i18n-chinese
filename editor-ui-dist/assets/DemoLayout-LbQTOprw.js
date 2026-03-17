import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Dm0zgpAe.js";
import "./src-DpXAQiaT.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-KDduniYy.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import { Fc as WorkflowStateKey, Nc as WorkflowDocumentStoreKey, Pc as WorkflowIdKey } from "./constants-BFYSGQP4.js";
import "./merge-B0uVzL8N.js";
import "./_baseOrderBy-CjnCEHwl.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DBvy4NsP.js";
import "./versions.store-BeRcylj7.js";
import "./usePageRedirectionHelper-DO-vNQ1E.js";
import "./useClipboard-kLXRilEV.js";
import "./executions.store-ByzTH5-P.js";
import "./assistant.store-C0mp11I1.js";
import "./chatPanel.store-BJNCJjNA.js";
import "./RunData-Cyd2mcBm.js";
import "./NDVEmptyState-CAVpRQIg.js";
import "./externalSecrets.ee.store-QSzeAebe.js";
import "./uniqBy-oibyPKTc.js";
import "./usePinnedData-B4TDiiKQ.js";
import "./nodeIcon-BKSh_82X.js";
import "./canvas.utils-BpFkmltQ.js";
import "./canvas.eventBus-IAuUOwZr.js";
import "./useCanvasOperations-DkB_TBZ3.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./NodeIcon-DaDADg-c.js";
import "./useRunWorkflow-P8Wyk4xJ.js";
import "./pushConnection.store-BDq5Y2m6.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-BFVKx2xB.js";
import "./dateFormatter-B_4Ykken.js";
import "./useExecutionHelpers-xnerzRKT.js";
import "./KeyboardShortcutTooltip-BHivDLbD.js";
import "./folders.store-C7zCXkJZ.js";
import "./useKeybindings-DCGPJ1Pf.js";
import "./useLogsTreeExpand-RFmex5iQ.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-B283-SpT.js";
import "./AnimatedSpinner-13fEQWHd.js";
import "./useResizablePanel-RlehuP6z.js";
import "./aiTemplatesStarterCollection.store-B_tDKHUq.js";
import "./readyToRunWorkflows.store-Dp1iXDuB.js";
import "./useExecutionDebugging-DHLxyuXP.js";
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
