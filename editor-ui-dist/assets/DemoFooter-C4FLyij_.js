import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-CTqgQu78.js";
import "./src-DCVyDAxv.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DX9fN0Iy.js";
import { N as useWorkflowsStore } from "./builder.store-BzXpa4sI.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import "./constants-DPoRm7NA.js";
import "./merge-D-8yFLuB.js";
import "./_baseOrderBy-BKb7g0di.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-BZos7FRz.js";
import "./assistant.store-r6mP3l73.js";
import "./chatPanel.store-CKzZKFUj.js";
import "./retry-B-tGcWte.js";
import "./executions.store-CwG58ye7.js";
import "./useRunWorkflow-BrZmM4zZ.js";
import "./usePinnedData-BXeDGVua.js";
import "./nodeCreator.store-Dd2igVXf.js";
import "./nodeIcon-CH2olWHM.js";
import "./useCanvasOperations-CuJQ4R_d.js";
import { t as LogsPanel_default } from "./LogsPanel-DGJnNNpQ.js";
import "./folders.store-B0QBaEv8.js";
import "./NodeIcon-BqPxtaM9.js";
import "./KeyboardShortcutTooltip-q3PDcgge.js";
import "./useClipboard-DzlKqzQE.js";
import "./RunData-6VmD37BQ.js";
import "./NDVEmptyState-DE7sa7yY.js";
import "./externalSecrets.ee.store-DcxT3yjo.js";
import "./uniqBy-B539Pi0w.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-BEYGMHT7.js";
import "./schemaPreview.store-CR2h4oK9.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-DDvJNJ-N.js";
import "./useExecutionHelpers-DdD5aMZt.js";
import "./useKeybindings-B71ZwBPB.js";
import "./fileUtils-Bt1vr1SC.js";
import "./core-BMwklDiH.js";
import "./ChatFile-B6hcldJk.js";
import "./xml-DDfXMqo8.js";
import "./AnimatedSpinner-DBPcagVq.js";
import "./useLogsTreeExpand-47vrd4wF.js";
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
