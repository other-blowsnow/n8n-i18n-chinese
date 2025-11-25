import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import "./_MapCache-DxwXn8uM.js";
import "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./overlay-DUEudB48.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-CcUQxayn.js";
import { o as useWorkflowsStore } from "./useTelemetry-Ct6_U3iA.js";
import "./useToast-Da575Qgf.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import "./assistant.store-C5F2CwlL.js";
import "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import "./useExternalHooks-B9_prI2u.js";
import "./useStyles-CBQs-v7u.js";
import "./chatPanel.store-BOmyyMrD.js";
import "./npsSurvey.store-CR_5TSEb.js";
import "./cloudPlan.store-CJIeBLfm.js";
import "./templates.store-CwmGwhfp.js";
import "./focusPanel.store-JyliN6VN.js";
import "./useWorkflowSaving-B9wnSzu8.js";
import "./retry-BJSZoz93.js";
import "./executions.store-DK5XAAkL.js";
import "./useRunWorkflow-BrOHbdYA.js";
import "./usePinnedData-XssKfx47.js";
import "./nodeCreator.store-C3L_NDAK.js";
import "./nodeIcon-CgagKz42.js";
import "./useClipboard-CT4iVqI5.js";
import "./useCanvasOperations-Cf0js5h-.js";
import { t as LogsPanel_default } from "./LogsPanel-FUVpm-WV.js";
import "./folders.store-ByA9-k5m.js";
import "./NodeIcon-mnGJPl1p.js";
import "./KeyboardShortcutTooltip-BxRhXm2u.js";
import "./isEmpty-Hh-e7tZO.js";
import "./NDVEmptyState-BO1-T5_H.js";
import "./externalSecrets.ee.store-BwI2enOr.js";
import "./uniqBy-CQDkXDcj.js";
import "./RunDataHtml-CisE_tGx.js";
import "./VueMarkdown-BB8En43O.js";
import "./schemaPreview.store-CojRTH5x.js";
import "./FileSaver.min-BPb-Xpdg.js";
import "./vue-json-pretty-D3IgtKs5.js";
import "./dateFormatter-DT9ovO6i.js";
import "./useExecutionHelpers-DSeYd0gh.js";
import "./useKeybindings-CX4xgORF.js";
import "./core-CP5FY4aX.js";
import "./xml-D4a2k3Fn.js";
import "./AnimatedSpinner-D4nYWC6B.js";
import "./useLogsTreeExpand-EKu9NKgB.js";
import "./core-TJWGyxJz.js";
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
