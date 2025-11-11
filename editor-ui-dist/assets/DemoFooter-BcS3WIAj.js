import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import "./_MapCache-CGDCbL4z.js";
import "./src-DfShoi1k.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-CU7tM1AH.js";
import "./icon-B-yygaWQ.js";
import "./overlay-6s3koUtq.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-Do6N-7Ki.js";
import { o as useWorkflowsStore } from "./useTelemetry-DDk4UBtV.js";
import "./useToast-CEGrnEuj.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-Icf9Jupj.js";
import "./merge-qpXyOahO.js";
import "./assistant.store-CxmCUx3N.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BXD6uaW9.js";
import "./useExternalHooks-DIeHOYfe.js";
import "./chatPanel.store-CoqrlOKd.js";
import "./npsSurvey.store-2Ednwp0w.js";
import "./cloudPlan.store-DtVFrvjm.js";
import "./templates.store-3mu721hU.js";
import "./focusPanel.store-CwyDmVKB.js";
import "./useWorkflowSaving-xYJgnfrL.js";
import "./retry-sDkwzrPY.js";
import "./executions.store-BdJfX-DE.js";
import "./useRunWorkflow-BlN1IiH4.js";
import "./usePinnedData-B8yN6LYD.js";
import "./nodeCreator.store-BitGgxtz.js";
import "./nodeIcon-VTkVy9x0.js";
import "./useClipboard-xRVJ4uKv.js";
import "./useCanvasOperations-QF5fOJzj.js";
import { t as LogsPanel_default } from "./LogsPanel-pyjoZz6W.js";
import "./folders.store-n0cFCHAH.js";
import "./NodeIcon-D-0Er6x_.js";
import "./KeyboardShortcutTooltip-C-2YYloH.js";
import "./isEmpty-D3G71vXT.js";
import "./NDVEmptyState-D1SlEYH7.js";
import "./externalSecrets.ee.store-520wkF-4.js";
import "./uniqBy-BONBbAhL.js";
import "./schemaPreview.store-BPEQmpky.js";
import "./FileSaver.min-DaytN8ae.js";
import "./vue-LyXhKoPx.js";
import "./vue-json-pretty-BltKoWq2.js";
import "./RunDataHtml-DdtrEw19.js";
import "./dateFormatter-C73FfANG.js";
import "./useExecutionHelpers-DtnVpteU.js";
import "./useKeybindings-BRWiQaGQ.js";
import "./core-CIkXL_1D.js";
import "./VueMarkdown-DM3Su5ZP.js";
import "./xml-F7krcG3E.js";
import "./AnimatedSpinner-Dd4F9nQ8.js";
import "./useLogsTreeExpand-D0-A_tvl.js";
import "./core-6lPsS9S5.js";
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
