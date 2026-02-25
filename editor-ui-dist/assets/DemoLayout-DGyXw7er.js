import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-D28pXLlm.js";
import { Ci as useRoute } from "./src-BPnX41kb.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-Dzwfthm5.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-DJi2tANw.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-DIP3iRVc.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-C7bvlNGQ.js";
import "./useClipboard-CJVeJQPL.js";
import "./executions.store-FiMweW-1.js";
import "./assistant.store-CX2RqSch.js";
import "./chatPanel.store-CG1Jl_8w.js";
import "./RunData-B5ec4zqt.js";
import "./NDVEmptyState-BuQ1DMFp.js";
import "./useEnvFeatureFlag-D0d3xQTx.js";
import "./externalSecrets.ee.store-DLAzGhQ9.js";
import "./uniqBy-CW1EKBts.js";
import "./usePinnedData-D0_pVdJU.js";
import "./nodeIcon-COQtWQBM.js";
import "./canvas.utils-C0nDCBMd.js";
import "./nodeCreator.store-CU0pOvyQ.js";
import "./useCanvasOperations-Bg6EndeW.js";
import "./folders.store-BtYwe6Tn.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-DKBaXy4A.js";
import "./useRunWorkflow-COepbjiS.js";
import "./pushConnection.store-VPzR9qb2.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-azdYLKEm.js";
import "./dateFormatter-Be41lUNW.js";
import "./useExecutionHelpers-DHBdKfZ-.js";
import "./KeyboardShortcutTooltip-CO2z5CTh.js";
import "./useKeybindings-zRfAe5jr.js";
import "./useLogsTreeExpand-BppUWw0O.js";
import { t as LogsPanel_default } from "./LogsPanel-CyzZlFEN.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-SsMdoGx0.js";
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
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
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
