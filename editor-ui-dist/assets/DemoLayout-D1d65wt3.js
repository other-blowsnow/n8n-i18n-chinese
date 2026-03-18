import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DxtWl4Bj.js";
import "./src-r-l70KdD.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-BVdi4rdu.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import { Fc as WorkflowStateKey, Nc as WorkflowDocumentStoreKey, Pc as WorkflowIdKey } from "./constants-O8ayp6Ax.js";
import "./merge-D1NMaQVD.js";
import "./_baseOrderBy-kQRaOW6n.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B05cbbQh.js";
import "./versions.store-C1Zk5ElX.js";
import "./usePageRedirectionHelper-DJqfOGCC.js";
import "./useClipboard-BJgl3cCM.js";
import "./executions.store-u9fem2YL.js";
import "./assistant.store-BF-wrHSq.js";
import "./chatPanel.store-D1_fWN0p.js";
import "./RunData-CWHiIcfA.js";
import "./NDVEmptyState-CSXqK1bm.js";
import "./externalSecrets.ee.store-CryNl5Fx.js";
import "./uniqBy-CsPtcSMm.js";
import "./usePinnedData-BbPFe05Y.js";
import "./nodeIcon-BIiILicj.js";
import "./canvas.utils-CEtvFiQV.js";
import "./canvas.eventBus-CHoGJAGK.js";
import "./useCanvasOperations-DNS84kDN.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./NodeIcon-DcZBOray.js";
import "./useRunWorkflow-CDmYf51o.js";
import "./pushConnection.store-C65qYXYL.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-DCOmxIKb.js";
import "./dateFormatter-CdCv3sVH.js";
import "./useExecutionHelpers-BQ81wHnq.js";
import "./KeyboardShortcutTooltip-xZG9cYH5.js";
import "./folders.store-D8OrtvcI.js";
import "./useKeybindings-C4RM686u.js";
import "./useLogsTreeExpand-C_LrgXfa.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DU5YA2Zy.js";
import "./AnimatedSpinner-13fEQWHd.js";
import "./useResizablePanel-B9V3MVGi.js";
import "./aiTemplatesStarterCollection.store-BxIiQxqm.js";
import "./readyToRunWorkflows.store-ZGNA3vlQ.js";
import "./useExecutionDebugging-DP6-GcmE.js";
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
