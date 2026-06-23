import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, bt as withCtx, j as createVNode, q as onBeforeUnmount, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { gt as useRouter, ht as useRoute } from "./src-BwN8TeVO.js";
import { t as BaseLayout_default } from "./BaseLayout-qUapheSs.js";
import { ui as VIEWS, wc as randomString } from "./constants-BiYlbN9Z.js";
import { _ as injectWorkflowExecutionStateStore, ni as createExecutionDataId, ri as useExecutionDataStore, v as useWorkflowExecutionStateStore, y as createWorkflowDocumentId } from "./workflows.store-Cb_U1DcB.js";
import { t as useRootStore } from "./useRootStore-DbgDMM5M.js";
import { o as useWorkflowId } from "./builder.store-CtNK1dxn.js";
import { t as usePushConnectionStore } from "./pushConnection.store-CcpWZbe3.js";
import { n as LogsPanel_default, t as useWorkflowInitialization } from "./useWorkflowInitialization-CAtCAG5a.js";
import { n as usePostMessageHandler } from "./usePostMessageHandler-DRg_1R43.js";
import { t as usePushConnection } from "./usePushConnection-0i9zbE6i.js";
//#endregion
//#region src/features/execution/logs/components/DemoFooter.vue
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const route = useRoute();
		const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
		const hasExecutionData = computed(() => workflowExecutionStateStore.value.activeExecution);
		const canExecute = computed(() => route.query.canExecute === "true");
		return (_ctx, _cache) => {
			return hasExecutionData.value || canExecute.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": !canExecute.value
			}, null, 8, ["is-read-only"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/composables/useReportWorkflowFailuresToParent.ts
function collectErrorsFromRunData(runData) {
	const errors = [];
	for (const [nodeName, tasks] of Object.entries(runData)) {
		const error = tasks?.at(-1)?.error;
		if (!error) continue;
		const description = error.description ? ` (${error.description})` : "";
		errors.push({
			nodeName,
			errorMessage: `${error.message ?? "Unknown error"}${description}`
		});
	}
	return errors;
}
/**
* Lives in the embedded canvas iframe. Listens for `executionFinished` push
* events on the iframe's own connection (parent has a separate `pushRef`, so
* iframe-triggered runs are not visible there) and forwards per-node failures
* to the parent via `postMessage` so the chat can surface a "Fix with AI" card.
*
* Reads the per-execution data store (keyed by the executionId we just got the
* finish event for) once per failed run — by then the in-iframe push handlers
* have already populated it. Avoids a deep `watch` over the whole run-data tree.
*/
function useReportWorkflowFailuresToParent() {
	if (window.parent === window) return;
	const route = useRoute();
	onBeforeUnmount(usePushConnectionStore().addEventListener((event) => {
		if (route.name !== VIEWS.DEMO || route.query.canExecute !== "true") return;
		if (event.type !== "executionFinished") return;
		if (event.data.status === "success") return;
		const runData = useExecutionDataStore(createExecutionDataId(event.data.executionId)).executionRunData;
		if (!runData) return;
		const errors = collectErrorsFromRunData(runData);
		if (errors.length === 0) return;
		window.parent.postMessage(JSON.stringify({
			command: "reportWorkflowFailures",
			workflowId: event.data.workflowId,
			executionId: event.data.executionId,
			errors
		}), window.location.origin);
	}));
}
//#endregion
//#region src/app/layouts/DemoLayout.vue
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const route = useRoute();
		const canExecute = computed(() => route.query.canExecute === "true");
		if (window !== window.parent) useRootStore().setPushRef(randomString(10).toLowerCase());
		const workflowId = useWorkflowId();
		const { initializeData, initializeWorkflow, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization();
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({ currentWorkflowDocumentStore });
		useReportWorkflowFailuresToParent();
		const pushConnection = usePushConnection({ router: useRouter() });
		const pushConnectionStore = usePushConnectionStore();
		if (!canExecute.value) useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId.value)).setActiveExecutionId(null);
		onMounted(async () => {
			await initializeData();
			await initializeWorkflow();
			pushConnection.initialize();
			if (canExecute.value) pushConnectionStore.pushConnect();
			setupPostMessages();
		});
		onBeforeUnmount(() => {
			if (canExecute.value) pushConnectionStore.pushDisconnect();
			pushConnection.terminate();
			cleanupPostMessages();
			cleanupInitialization();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [unref(currentWorkflowDocumentStore) ? (openBlock(), createBlock(_component_RouterView, { key: 0 })) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
});
//#endregion
export { DemoLayout_default as default };
