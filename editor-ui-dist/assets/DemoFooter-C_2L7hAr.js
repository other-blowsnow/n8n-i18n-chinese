import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import "./_MapCache-pT3vKw8Z.js";
import "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import "./useMessage-jUPSaMjm.js";
import { o as useWorkflowsStore } from "./useTelemetry-DtLsIZAV.js";
import "./useToast-CHQFul-H.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import "./constants-D0AX3Nm9.js";
import "./merge-DCUiz6nU.js";
import "./assistant.store-CX60gpzk.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-DWQ-dLHa.js";
import "./chatPanel.store-DGBI3W9R.js";
import "./npsSurvey.store-DEuueXf8.js";
import "./cloudPlan.store-7ZjDj12x.js";
import "./templates.store-BTqzpfM6.js";
import "./focusPanel.store-Daf5mBiz.js";
import "./useWorkflowSaving-DBsN2W7N.js";
import "./retry-sDkwzrPY.js";
import "./executions.store-CxVl16wd.js";
import "./useRunWorkflow-zyGQQUeP.js";
import "./usePinnedData-B8pi1up-.js";
import "./nodeCreator.store-BVDssH8r.js";
import "./nodeIcon-Dg5JUWVU.js";
import "./useClipboard-xO0FYULk.js";
import "./useCanvasOperations-BnUxlRiU.js";
import { t as LogsPanel_default } from "./LogsPanel-BfHmsXbP.js";
import "./folders.store-CK-1rBGB.js";
import "./NodeIcon-hp4n8uco.js";
import "./KeyboardShortcutTooltip-DOaNiBZG.js";
import "./isEmpty-Dinn3ZIV.js";
import "./NDVEmptyState-Dh9X5Hnf.js";
import "./externalSecrets.ee.store-V58a3qe-.js";
import "./uniqBy-CkVygeOA.js";
import "./schemaPreview.store-DHKMCXv5.js";
import "./FileSaver.min-DaytN8ae.js";
import "./vue-json-pretty-BAtqAAV1.js";
import "./RunDataHtml-BNcvZDMJ.js";
import "./dateFormatter-CXO-zUXu.js";
import "./useExecutionHelpers-DKUJ5rAr.js";
import "./useKeybindings-C6hB1BS0.js";
import "./core-CzunNfUb.js";
import "./VueMarkdown-CURYkyJE.js";
import "./xml-B_gYdkaU.js";
import "./AnimatedSpinner-4ie3BOLv.js";
import "./useLogsTreeExpand-Ckyt9v9Z.js";
import "./core-CH2Kku_3.js";
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
