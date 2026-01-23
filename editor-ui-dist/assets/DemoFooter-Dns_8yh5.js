import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-tKLgTRxP.js";
import "./src-BEWDoF4J.js";
import "./truncate-C_KjD4NJ.js";
import { s as useWorkflowsStore } from "./users.store-BWRzHetq.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-BD0gNsa9.js";
import "./merge-3fzCA5ob.js";
import "./_baseOrderBy-CbTFF_zX.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-B7KnE39W.js";
import "./useClipboard-B1umY6YV.js";
import "./executions.store-B97uPUUs.js";
import "./assistant.store-h7A4x_Yl.js";
import "./chatPanel.store-DO4A2AXA.js";
import "./RunData-Cydu67VM.js";
import "./NDVEmptyState-esKxbwxp.js";
import "./externalSecrets.ee.store-DkJj4vbO.js";
import "./usePinnedData-Dka0HCuD.js";
import "./nodeCreator.store-qqd8WDCa.js";
import "./canvas.utils--NU8hj8z.js";
import "./nodeIcon-zzR4Bg9S.js";
import "./useCanvasOperations-CGCWVGfy.js";
import { t as LogsPanel_default } from "./LogsPanel-04jBA44K.js";
import "./folders.store-CHxTdgFM.js";
import "./pushConnection.store-Cdr2N-XQ.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-BSCq4Ik2.js";
import "./useRunWorkflow-Dg3Wi_le.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-DoMnzvZp.js";
import "./dateFormatter-D280TrkJ.js";
import "./useExecutionHelpers-COZc5BjB.js";
import "./KeyboardShortcutTooltip-URZXlhcT.js";
import "./useKeybindings-BRft1Dgb.js";
import "./ChatFile-DGN9Z6P_.js";
import "./AnimatedSpinner-B25lpnvb.js";
import "./useLogsTreeExpand-Bh0h8632.js";
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
export { DemoFooter_default as default };
