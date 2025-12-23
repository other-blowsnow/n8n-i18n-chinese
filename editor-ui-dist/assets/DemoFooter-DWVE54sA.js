import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-DZpzsuCB.js";
import "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-LAVj4VkL.js";
import { v as useWorkflowsStore } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./assistant.store-C6RPQyDt.js";
import "./chatPanel.store-ButVR73Z.js";
import "./npsSurvey.store-KZKvEKjG.js";
import "./cloudPlan.store-2sNk8KGc.js";
import "./templates.store-Bn6ky68e.js";
import "./focusPanel.store-B3Hj42tS.js";
import "./useWorkflowSaving-Cw6HTOE_.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-C5l19MhO.js";
import "./useRunWorkflow-XIsejmpa.js";
import "./usePinnedData-CWeGQujV.js";
import "./nodeCreator.store-DIZVn2cH.js";
import "./nodeIcon-7dyMxFgB.js";
import "./useClipboard-Dy2su5yb.js";
import "./useCanvasOperations-DMjr_djE.js";
import { t as LogsPanel_default } from "./LogsPanel-BtlzDM13.js";
import "./folders.store-BHgrqAL-.js";
import "./NodeIcon-BDiqVc0r.js";
import "./KeyboardShortcutTooltip-Clqv-mcZ.js";
import "./isEmpty-PCEL7TGG.js";
import "./NDVEmptyState-BU6X18Do.js";
import "./externalSecrets.ee.store-BnT4MP-2.js";
import "./uniqBy-BVnXCFIn.js";
import "./RunDataHtml-_b8v7-9v.js";
import "./VueMarkdown-DBt7Thyn.js";
import "./schemaPreview.store-BEPOaDMi.js";
import "./FileSaver.min--9uV1QmK.js";
import "./vue-json-pretty-B9qWbmOF.js";
import "./dateFormatter-CqPC8pC-.js";
import "./useExecutionHelpers-DUVi4eic.js";
import "./useKeybindings-DXSpR_-o.js";
import "./fileUtils-D3GQ2UWQ.js";
import "./core-CXk6RNMV.js";
import "./ChatFile-8ik4bOn3.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-BsWvcEGs.js";
import "./core-CiWhevuy.js";
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
