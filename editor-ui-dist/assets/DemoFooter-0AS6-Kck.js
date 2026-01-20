import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-nsH9LP_7.js";
import "./src-Ca6p-F4w.js";
import "./truncate-D24O8Gpt.js";
import { s as useWorkflowsStore } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import "./useClipboard-COOY7RLM.js";
import "./executions.store-DSp00BkK.js";
import "./assistant.store-B3ZFF4Ef.js";
import "./chatPanel.store-DnsqMUFN.js";
import "./RunData-DSaFgePp.js";
import "./NDVEmptyState-CaUC8YU6.js";
import "./externalSecrets.ee.store-CBf5I68W.js";
import "./usePinnedData-4-JhUel-.js";
import "./nodeCreator.store-Bf5ZJhZK.js";
import "./canvas.utils-B0dhpigY.js";
import "./nodeIcon-CQGkjIor.js";
import "./useCanvasOperations-BUQ5rpp1.js";
import { t as LogsPanel_default } from "./LogsPanel-Cfbg-sUa.js";
import "./folders.store-BnPPwuN5.js";
import "./pushConnection.store-DXsSwlon.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-4gz_aHHs.js";
import "./useRunWorkflow-LeVtfwBY.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-CrY9Fd9n.js";
import "./dateFormatter-B-hJFNTY.js";
import "./useExecutionHelpers-6-te5Woc.js";
import "./KeyboardShortcutTooltip-B0jiPSJu.js";
import "./useKeybindings-Bm5AnrA0.js";
import "./ChatFile-DGN9Z6P_.js";
import "./AnimatedSpinner-B25lpnvb.js";
import "./useLogsTreeExpand-DQFWB6TJ.js";
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
