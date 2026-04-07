import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DLeeJfJb.js";
import "./src-Bqvpi8Q1.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-BBfDn-OZ.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-B5_ykVXd.js";
import "./merge-3v6XMMbx.js";
import "./_baseOrderBy-Bz8EJorA.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-BRg29NgG.js";
import "./versions.store-BVx2XP1t.js";
import "./usePageRedirectionHelper-DuYK5OCJ.js";
import "./useClipboard-DNEZr-m8.js";
import "./executions.store-CCce-1Mq.js";
import "./assistant.store-00Qk07o1.js";
import "./chatPanel.store-CtbWyLUb.js";
import "./RunData-RkdQdvue.js";
import "./NDVEmptyState-Bc2jh4W1.js";
import "./externalSecrets.ee.store-gWcJFHeb.js";
import "./uniqBy-ChuoJM4g.js";
import "./usePinnedData-dLomBRXX.js";
import "./nodeIcon-ByND4dx-.js";
import "./canvas.utils-CGiL2NZU.js";
import "./canvas.eventBus-3XpLxS-w.js";
import "./useCanvasOperations-CokVTgHN.js";
import "./setupPanel.store-SOZIWxEl.js";
import "./nodeTransforms-CHFpFXHR.js";
import "./templateTransforms-CWzPtKQV.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-w-OfrP79.js";
import "./useRunWorkflow-DoIyyg_Q.js";
import "./pushConnection.store-CL67TxY0.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-GbrmpFOZ.js";
import "./dateFormatter-xop3SJMi.js";
import "./useExecutionHelpers-C1pndnDi.js";
import "./KeyboardShortcutTooltip-DXD1rySw.js";
import "./folders.store-T9S-XSM0.js";
import "./useKeybindings-C6N2BVbn.js";
import "./chatHubPanel.store-BiCByi4D.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-DIKPj1Mw.js";
import "./useLogsTreeExpand-uevD28mC.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-CfPaUVhS.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-BsCdtE_U.js";
import "./aiTemplatesStarterCollection.store-D9_DXLA1.js";
import "./readyToRunWorkflows.store-ODX93sD3.js";
import "./useExecutionDebugging-qv8gTpjg.js";
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
