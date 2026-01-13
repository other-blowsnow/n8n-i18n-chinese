import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-rh9OLi2r.js";
import "./src-CZpvcx8v.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-mlAhUFvR.js";
import { N as useWorkflowsStore } from "./builder.store-6KJtyMVD.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import "./constants-DHjZNdcm.js";
import "./merge-Qj6ZAWCV.js";
import "./_baseOrderBy-B6eGw9-M.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-BR6oDN7-.js";
import "./assistant.store-PcWphVY0.js";
import "./chatPanel.store-CrXr6ZmG.js";
import "./retry-B-tGcWte.js";
import "./executions.store-BdRY_AKj.js";
import "./useRunWorkflow-Bv5r8Aq0.js";
import "./usePinnedData-u0Hhv393.js";
import "./nodeCreator.store-Bd3NLVnm.js";
import "./nodeIcon-B_mp2WI1.js";
import "./useCanvasOperations-CkzKdQiW.js";
import { t as LogsPanel_default } from "./LogsPanel-CujiE85g.js";
import "./folders.store-BQhFQ3G1.js";
import "./NodeIcon-qjaO2roS.js";
import "./KeyboardShortcutTooltip-DZwF7YYP.js";
import "./useClipboard-CtE7l9mZ.js";
import "./RunData-CjTBLeaR.js";
import "./NDVEmptyState-DUIZoDA6.js";
import "./externalSecrets.ee.store-DXsseX73.js";
import "./uniqBy-okSc3wBK.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-Dgt8mKei.js";
import "./schemaPreview.store-CLtdUS5U.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-DJZHNfZX.js";
import "./useExecutionHelpers-IQquhOnR.js";
import "./useKeybindings-oU3PGlGW.js";
import "./fileUtils-Bt1vr1SC.js";
import "./core-BMwklDiH.js";
import "./ChatFile-B6hcldJk.js";
import "./xml-DDfXMqo8.js";
import "./AnimatedSpinner-DBPcagVq.js";
import "./useLogsTreeExpand-wk8NbL4x.js";
import "./core-DeR-PV8K.js";
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
