import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-FALBSzR9.js";
import "./src-DSdtxpS-.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DjIPN_Jo.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-Du1sDgQK.js";
import "./merge-m4Q4akAk.js";
import "./_baseOrderBy-DTSNQHzv.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DnInf_Mb.js";
import "./versions.store-Clq11YDT.js";
import "./usePageRedirectionHelper-Da0Q0qMi.js";
import "./useClipboard-3T72jxBx.js";
import "./executions.store-A8kDneRB.js";
import "./assistant.store-Boq9AJMi.js";
import "./chatPanel.store-CfycLreN.js";
import "./RunData-D2WSy1l-.js";
import "./NDVEmptyState-C0szQBKk.js";
import "./externalSecrets.ee.store-C-LJHlp4.js";
import "./uniqBy-BQFKKiq0.js";
import "./usePinnedData-CtdGdzxg.js";
import "./nodeIcon-s5A0N13y.js";
import "./canvas.utils-C7R5h5xc.js";
import "./canvas.eventBus-BFWN62oH.js";
import "./useCanvasOperations-C_yzmH-V.js";
import "./folders.store-Cr6j-iI3.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-BOrzk_Ua.js";
import "./useRunWorkflow-DbrvcSDD.js";
import "./pushConnection.store-Bkm15hXw.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Y9Bm0NJN.js";
import "./dateFormatter-DXOLFsyr.js";
import "./useExecutionHelpers-Dm4y-kwA.js";
import "./KeyboardShortcutTooltip-QlYiYWRT.js";
import "./useKeybindings-U6uc6f1q.js";
import "./useLogsTreeExpand-D8VtZ7Wx.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BFb2_nhe.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-CWWtC723.js";
import "./aiTemplatesStarterCollection.store-04IEKYAL.js";
import "./readyToRunWorkflows.store-B_5ScJUv.js";
import "./useExecutionDebugging-CtpStBpR.js";
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
