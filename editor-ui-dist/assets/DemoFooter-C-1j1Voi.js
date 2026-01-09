import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-CXkqqBNu.js";
import "./src-CUTxC6Rl.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-OrFlV_nl.js";
import { N as useWorkflowsStore } from "./builder.store-6Ubaqfxq.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import "./constants-eN0e8XyV.js";
import "./merge-E8nEcjT4.js";
import "./_baseOrderBy-Ca3_tgno.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-zOuYGjD3.js";
import "./assistant.store-CL1xWHqK.js";
import "./chatPanel.store-CsUQ4Qg4.js";
import "./retry-dP46utx2.js";
import "./executions.store-B4S6yM7f.js";
import "./useRunWorkflow-BdQy2BQc.js";
import "./usePinnedData-Co00VkRJ.js";
import "./nodeCreator.store-Ci2K4r2I.js";
import "./nodeIcon-DsiEOlU0.js";
import "./useClipboard-D_i6_r95.js";
import "./useCanvasOperations-Drc8Q2xN.js";
import { t as LogsPanel_default } from "./LogsPanel-DkQjo7Fx.js";
import "./folders.store-TAyuZlWC.js";
import "./NodeIcon-c7CeRjf6.js";
import "./KeyboardShortcutTooltip-DcmjNmbF.js";
import "./isEmpty-Q93jFsOZ.js";
import "./NDVEmptyState-B58fX4Xp.js";
import "./externalSecrets.ee.store-DFWl_8gT.js";
import "./uniqBy-BpU9WL3C.js";
import "./RunDataHtml-CkjC7YuF.js";
import "./VueMarkdown-dctIqHs6.js";
import "./schemaPreview.store-BRnWQxw8.js";
import "./vue-json-pretty-DGKuDe33.js";
import "./dateFormatter-Bqze3YxZ.js";
import "./useExecutionHelpers-ityXEd1_.js";
import "./useKeybindings-BBwSpgzy.js";
import "./fileUtils-D_SiS8no.js";
import "./core-6W4wWNc1.js";
import "./ChatFile-cnNK8Kf8.js";
import "./xml-B6veOr9z.js";
import "./AnimatedSpinner-wiGFgffA.js";
import "./useLogsTreeExpand-BhsgDVAA.js";
import "./core-BbiIkN91.js";
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
