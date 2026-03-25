import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DL4VDRVM.js";
import "./src-CO68IM2H.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-Bj_XyNBb.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-CasV1Nn-.js";
import "./merge-aQ2KMKTv.js";
import "./_baseOrderBy-CfcpbHUH.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVsIZ8uv.js";
import "./versions.store-D5dvcg6l.js";
import "./usePageRedirectionHelper-CrJx6fiY.js";
import "./useClipboard-Bxw3LQFN.js";
import "./executions.store-CjVhJlRx.js";
import "./assistant.store-DSLB991I.js";
import "./chatPanel.store-BA30Gt-r.js";
import "./RunData-BEftQbql.js";
import "./NDVEmptyState-YgsCrfWp.js";
import "./externalSecrets.ee.store-Br6q_MRL.js";
import "./uniqBy-BguIU7IC.js";
import "./usePinnedData-CEvgNFnp.js";
import "./nodeIcon-Dlbdx7jv.js";
import "./canvas.utils-DXtYJQO-.js";
import "./canvas.eventBus-BcjKaeFN.js";
import "./useCanvasOperations-BbmXPhWd.js";
import "./setupPanel.store-DYZJI1cj.js";
import "./nodeTransforms-BkycvANY.js";
import "./templateTransforms-CwPYKADA.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-CC7z2JLa.js";
import "./useRunWorkflow-DJwtSzCb.js";
import "./pushConnection.store-CCWmtksI.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-B8ocDGY_.js";
import "./dateFormatter-DARElawG.js";
import "./useExecutionHelpers-B2BS5eQA.js";
import "./KeyboardShortcutTooltip-D8pjiE_j.js";
import "./folders.store-C13tey84.js";
import "./useKeybindings-m00chGP-.js";
import "./chatHubPanel.store-BCk3tV6x.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-g1RcDcae.js";
import "./useLogsTreeExpand-C_majobD.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BOY2gm_V.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-CVtEKi8H.js";
import "./aiTemplatesStarterCollection.store-BBg5J2t_.js";
import "./readyToRunWorkflows.store-Bbapxk5U.js";
import "./useExecutionDebugging-DDwWPBfb.js";
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
