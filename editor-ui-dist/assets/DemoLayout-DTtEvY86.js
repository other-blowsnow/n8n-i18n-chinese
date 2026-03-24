import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-D5rots3X.js";
import "./src-Bnic0IZ0.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-CzbeKDa-.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-CvheVn3c.js";
import "./merge-BnWpgTIL.js";
import "./_baseOrderBy-B6NURhS_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BPQ7Jg24.js";
import "./versions.store-D_4t3Xlu.js";
import "./usePageRedirectionHelper-CVdBgnFq.js";
import "./useClipboard-wv2e_xGz.js";
import "./executions.store-Brk4n5HE.js";
import "./assistant.store-DeHW7KVq.js";
import "./chatPanel.store-YJTWj7q4.js";
import "./RunData-C4tlBX5S.js";
import "./NDVEmptyState-DZntCm5e.js";
import "./externalSecrets.ee.store-LI6UX4Fu.js";
import "./uniqBy-RDM8dGWt.js";
import "./usePinnedData-B8gt-FA4.js";
import "./nodeIcon-Dku-D2e9.js";
import "./canvas.utils-JzY87w_-.js";
import "./canvas.eventBus-Cip4bet-.js";
import "./useCanvasOperations-CHwmFsdd.js";
import "./setupPanel.store-CbAKGtR0.js";
import "./nodeTransforms-CyCEXDjF.js";
import "./templateTransforms-CmEf0ioF.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-C1S6log1.js";
import "./useRunWorkflow-C-_uO9iY.js";
import "./pushConnection.store-BfVjm7GD.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-CKpDqi--.js";
import "./dateFormatter-8rBEgO-6.js";
import "./useExecutionHelpers-DCj6fAyh.js";
import "./KeyboardShortcutTooltip-7zM93SbB.js";
import "./folders.store-CsKrzliH.js";
import "./useKeybindings-KTSceTOJ.js";
import "./chatHubPanel.store-C3EdXpaD.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-CFC7uqmL.js";
import "./useLogsTreeExpand-BsCk4KF9.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DieF5mv0.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-DmeJs4GK.js";
import "./aiTemplatesStarterCollection.store-D6E55rGH.js";
import "./readyToRunWorkflows.store-CJCUr-w_.js";
import "./useExecutionDebugging-BKldL2PH.js";
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
