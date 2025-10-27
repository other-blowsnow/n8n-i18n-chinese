import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import "./_MapCache-CMopfp37.js";
import "./src-B9lyFNPE.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-D09te2fm.js";
import "./icon-B8U-CfQv.js";
import "./overlay-CPmcXGrH.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-CzSaXdHQ.js";
import { o as useWorkflowsStore } from "./useTelemetry-BnWkdL5v.js";
import "./useToast-CYEyObML.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-7lEZpYki.js";
import "./merge-9-BpYlRV.js";
import "./assistant.store-BVON_WC2.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BSVJx8HC.js";
import "./useExternalHooks-BhwArgDu.js";
import "./chatPanel.store-C-k9-deH.js";
import "./npsSurvey.store-Bu7abrXf.js";
import "./cloudPlan.store-6mcCsbPK.js";
import "./templates.store-B66LeSvw.js";
import "./focusPanel.store-CBZJy8Ca.js";
import "./useWorkflowSaving-ClsTd_Kb.js";
import "./useRunWorkflow-Bd2-68As.js";
import "./executions.store-D5Bo0447.js";
import "./usePinnedData-en44HETZ.js";
import "./nodeCreator.store-DkZQyY8W.js";
import "./nodeIcon-DDhmw_5Z.js";
import "./useClipboard-DM6_szGh.js";
import "./useCanvasOperations-txv-wr0L.js";
import { t as LogsPanel_default } from "./LogsPanel-DLZHdXK5.js";
import "./folders.store-CrkPMTTZ.js";
import "./NodeIcon-CDBCK2ja.js";
import "./KeyboardShortcutTooltip-Dx9_zt2r.js";
import "./isEmpty-DxMcMfyi.js";
import "./NDVEmptyState-DXP-2qHk.js";
import "./externalSecrets.ee.store-BA9u6Jjb.js";
import "./uniqBy-CMy6VD1M.js";
import "./schemaPreview.store-CLfCgUB5.js";
import "./FileSaver.min-D8bnhVIu.js";
import "./vue-GniKVX87.js";
import "./vue-json-pretty-BlSK1oxV.js";
import "./RunDataHtml-BJNWCJaI.js";
import "./dateFormatter-BcAWObOP.js";
import "./useExecutionHelpers-C_T89TtO.js";
import "./useKeybindings-Bx4wnQ1Y.js";
import "./core-DfWDGJ3H.js";
import "./VueMarkdown-BinF0X9i.js";
import "./core-QrkR8HgP.js";
import "./xml-BZFrCZxf.js";
import "./AnimatedSpinner-vlvkUC5d.js";
import "./useLogsTreeExpand-mShGbaRT.js";
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
