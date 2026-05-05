import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { lt as useRoute, ut as useRouter } from "./src-B_KTvkEk.js";
import { s as useWorkflowsStore } from "./users.store-BOtv0kUO.js";
import { t as BaseLayout_default } from "./BaseLayout-iVpWi2e3.js";
import { Mc as WorkflowStateKey, ls as randomString } from "./constants-c-L9DE1I.js";
import { t as useRootStore } from "./useRootStore-CCt5xa74.js";
import { n as useWorkflowState } from "./useWorkflowState-R0WNJI6k.js";
import { t as usePushConnectionStore } from "./pushConnection.store-BzgFWbjK.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-C9_pXImI.js";
import { t as usePushConnection } from "./usePushConnection-D2HLLqO4.js";
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
		const { initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		const pushConnection = usePushConnection({
			router: useRouter(),
			workflowState
		});
		const pushConnectionStore = usePushConnectionStore();
		if (!canExecute.value) workflowState.setActiveExecutionId(null);
		onBeforeMount(() => {
			setupPostMessages();
		});
		onMounted(async () => {
			await initializeData();
			pushConnection.initialize();
			if (canExecute.value) pushConnectionStore.pushConnect();
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
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { DemoLayout_default as default };
