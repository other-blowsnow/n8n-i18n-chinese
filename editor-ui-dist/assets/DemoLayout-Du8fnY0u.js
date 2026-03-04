import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DXQZb51R.js";
import "./src-oGL8s0hT.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DdXEJExY.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-D6tCZPKD.js";
import "./merge-CgbZmS72.js";
import "./_baseOrderBy-CJfk527n.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BBTAgZ3l.js";
import "./versions.store-BSvvFnEg.js";
import "./usePageRedirectionHelper-87shxc1K.js";
import "./useClipboard-DZFpk_qt.js";
import "./executions.store-C7woX1VQ.js";
import "./assistant.store-g0pzjCqI.js";
import "./chatPanel.store-KCBWmLrv.js";
import "./RunData-84vqovsW.js";
import "./NDVEmptyState-BjtvppdF.js";
import "./externalSecrets.ee.store-DKyOUMdm.js";
import "./uniqBy-B_DSOsaw.js";
import "./usePinnedData-BtukFGDK.js";
import "./nodeIcon-Csdtqfe_.js";
import "./canvas.utils-qLqfzoX-.js";
import "./nodeCreator.store-Dd9ZpPLH.js";
import "./useCanvasOperations-Bx0_H793.js";
import "./folders.store-hUU8r3mD.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-e9htlXPj.js";
import "./useRunWorkflow-BnoEI1IA.js";
import "./pushConnection.store-Bf7pamA1.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-voOP5Dns.js";
import "./dateFormatter-DHh8Sn1A.js";
import "./useExecutionHelpers-OTEiWX23.js";
import "./KeyboardShortcutTooltip-DQue64WU.js";
import "./useKeybindings-BpJ3wPd8.js";
import "./useLogsTreeExpand-BOk2waFe.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DAFuD3xE.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-B03ntSjw.js";
import "./aiTemplatesStarterCollection.store-CKELQawI.js";
import "./readyToRunWorkflows.store-C9IAiu0N.js";
import "./useExecutionDebugging-DikmnvSA.js";
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
