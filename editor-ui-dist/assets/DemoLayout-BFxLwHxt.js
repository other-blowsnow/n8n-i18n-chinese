import { $ as openBlock, N as defineComponent, S as computed, T as createCommentVNode, Wt as unref, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { lt as useRoute, ut as useRouter } from "./src-DJmr1lxY.js";
import { s as useWorkflowsStore } from "./users.store-DId3pj1b.js";
import { t as BaseLayout_default } from "./BaseLayout-ANcPukYF.js";
import { Pc as WorkflowStateKey, kc as NDVStoreKey, us as randomString } from "./constants-DKn5DlOG.js";
import { t as useRootStore } from "./useRootStore-COhM0Nxr.js";
import { n as useWorkflowState } from "./useWorkflowState-Ci_nAiDB.js";
import { t as usePushConnectionStore } from "./pushConnection.store-CcUEWroh.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BZUIUKU_.js";
import { t as usePushConnection } from "./usePushConnection-ou9lubTx.js";
//#endregion
//#region src/features/execution/logs/components/DemoFooter.vue
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const route = useRoute();
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
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
//#region src/app/layouts/DemoLayout.vue
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const route = useRoute();
		const canExecute = computed(() => route.query.canExecute === "true");
		if (window !== window.parent) useRootStore().setPushRef(randomString(10).toLowerCase());
		const workflowState = useWorkflowState();
		provide(WorkflowStateKey, workflowState);
		const { initializeData, initializeWorkflow, currentWorkflowDocumentStore, currentNDVStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(NDVStoreKey, currentNDVStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore,
			currentNDVStore
		});
		const pushConnection = usePushConnection({
			router: useRouter(),
			workflowState
		});
		const pushConnectionStore = usePushConnectionStore();
		if (!canExecute.value) workflowState.setActiveExecutionId(null);
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
				default: withCtx(() => [unref(currentWorkflowDocumentStore) && unref(currentNDVStore) ? (openBlock(), createBlock(_component_RouterView, { key: 0 })) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
});
//#endregion
export { DemoLayout_default as default };
