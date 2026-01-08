import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-DLq73A0R.js";
import "./src-CL49VK19.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BAEVufvF.js";
import { N as useWorkflowsStore } from "./builder.store-DrVW4RlB.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import "./constants-Oype6HO3.js";
import "./merge-Cq52MC8u.js";
import "./_baseOrderBy-DIdKn55r.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-B-ua3X-C.js";
import "./assistant.store-DPS_wR-m.js";
import "./chatPanel.store-DGqcPVRh.js";
import "./retry-dP46utx2.js";
import "./executions.store-CwWDq-sV.js";
import "./useRunWorkflow-C0ysJWuO.js";
import "./usePinnedData-IPhrYERP.js";
import "./nodeCreator.store-BA_1PGJB.js";
import "./nodeIcon-DFgIRt1r.js";
import "./useClipboard-uVazWowF.js";
import "./useCanvasOperations-BX621FTb.js";
import { t as LogsPanel_default } from "./LogsPanel-Cx7zkFiR.js";
import "./folders.store-D9W-Seae.js";
import "./NodeIcon-CM59lF72.js";
import "./KeyboardShortcutTooltip-BBzdcU8y.js";
import "./isEmpty-C9ky0TwZ.js";
import "./NDVEmptyState-CVDj8Hhj.js";
import "./externalSecrets.ee.store-DJepnUJ7.js";
import "./uniqBy-ClCZZpon.js";
import "./RunDataHtml-CkjC7YuF.js";
import "./VueMarkdown-Cx-j8ZYk.js";
import "./schemaPreview.store-CTG9_T8r.js";
import "./vue-json-pretty-DGKuDe33.js";
import "./dateFormatter-rhQTad0M.js";
import "./useExecutionHelpers-CC2-kMUr.js";
import "./useKeybindings-B_5XS-Ms.js";
import "./fileUtils-D_SiS8no.js";
import "./core-6W4wWNc1.js";
import "./ChatFile-cnNK8Kf8.js";
import "./xml-B6veOr9z.js";
import "./AnimatedSpinner-wiGFgffA.js";
import "./useLogsTreeExpand-DcobnjV4.js";
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
