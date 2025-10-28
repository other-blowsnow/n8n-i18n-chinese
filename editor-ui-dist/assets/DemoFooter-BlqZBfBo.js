import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import "./_MapCache-DZMn6F95.js";
import "./src-DuV1yrAd.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-OqsyiABz.js";
import "./icon-bSjxVZuQ.js";
import "./overlay-DSEmbFQU.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-BUlTkhLg.js";
import { o as useWorkflowsStore } from "./useTelemetry-C3cN19b2.js";
import "./useToast-B-CMvNEW.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-CiCQTzlI.js";
import "./merge-BF1fect_.js";
import "./assistant.store-ivvDmlgb.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-Dm5wldKp.js";
import "./useExternalHooks-CFOQ8Nn2.js";
import "./chatPanel.store-rZ0L8acY.js";
import "./npsSurvey.store-C1nTMANL.js";
import "./cloudPlan.store-CD7mCT0O.js";
import "./templates.store-CcFpD7-K.js";
import "./focusPanel.store-BADVh5Sc.js";
import "./useWorkflowSaving-UjOXroJ8.js";
import "./useRunWorkflow-ayk4R-2L.js";
import "./executions.store-FIIAHm-v.js";
import "./usePinnedData-DhNnlolU.js";
import "./nodeCreator.store-lRJSp4Qr.js";
import "./nodeIcon-Dm5sZJfm.js";
import "./useClipboard-DF_RdI9U.js";
import "./useCanvasOperations-BKFIHZ3t.js";
import { t as LogsPanel_default } from "./LogsPanel-CWmHILBo.js";
import "./folders.store-oty9WxlX.js";
import "./NodeIcon-gge00gA3.js";
import "./KeyboardShortcutTooltip-Br3xYUe5.js";
import "./isEmpty-C1vFWqQz.js";
import "./NDVEmptyState-0_NC9wG9.js";
import "./externalSecrets.ee.store-BFXCq3PM.js";
import "./uniqBy-B0930xzV.js";
import "./schemaPreview.store-seIpc89o.js";
import "./FileSaver.min-D8bnhVIu.js";
import "./vue-GniKVX87.js";
import "./vue-json-pretty-BlSK1oxV.js";
import "./RunDataHtml-BJNWCJaI.js";
import "./dateFormatter-CPXBq2a0.js";
import "./useExecutionHelpers-BbKzJyc8.js";
import "./useKeybindings-C8k5GQ4U.js";
import "./core-DfWDGJ3H.js";
import "./VueMarkdown-BLYNKxoo.js";
import "./core-QrkR8HgP.js";
import "./xml-BZFrCZxf.js";
import "./AnimatedSpinner-vlvkUC5d.js";
import "./useLogsTreeExpand-BvK44k5L.js";
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
