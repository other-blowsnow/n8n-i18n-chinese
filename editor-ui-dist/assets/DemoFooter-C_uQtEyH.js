import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-JtHpcr1I.js";
import "./src-B6-MneGY.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DXd76JRD.js";
import { N as useWorkflowsStore } from "./builder.store-phNxKIwY.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import "./constants-BZlxVYBu.js";
import "./merge-D-aSQi_3.js";
import "./_baseOrderBy-D1tl8utV.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-Dg_5JVAR.js";
import "./assistant.store-bLoUAqrK.js";
import "./chatPanel.store-BcnHKAyd.js";
import "./retry-dP46utx2.js";
import "./executions.store-RfboHLhs.js";
import "./useRunWorkflow-kntT2drG.js";
import "./usePinnedData-D-Smqalp.js";
import "./nodeCreator.store-gqSfOSXf.js";
import "./nodeIcon-C4t8TnBU.js";
import "./useClipboard-DRgKx2iV.js";
import "./useCanvasOperations-DPJBfLTc.js";
import { t as LogsPanel_default } from "./LogsPanel-BbCEXQ_u.js";
import "./folders.store-JmBXua95.js";
import "./NodeIcon-n0wXIYFn.js";
import "./KeyboardShortcutTooltip-C_yYKgzd.js";
import "./isEmpty-DV2jfkcd.js";
import "./NDVEmptyState-CIdWIMCb.js";
import "./externalSecrets.ee.store-DtYT3FCI.js";
import "./uniqBy-D8n9cziB.js";
import "./RunDataHtml-CkjC7YuF.js";
import "./VueMarkdown-Y7AFWrNU.js";
import "./schemaPreview.store-DqB1_rgZ.js";
import "./vue-json-pretty-DGKuDe33.js";
import "./dateFormatter-DuHkeUhi.js";
import "./useExecutionHelpers-CdzKu6_F.js";
import "./useKeybindings-DxLL86Ao.js";
import "./fileUtils-D_SiS8no.js";
import "./core-6W4wWNc1.js";
import "./ChatFile-cnNK8Kf8.js";
import "./xml-B6veOr9z.js";
import "./AnimatedSpinner-wiGFgffA.js";
import "./useLogsTreeExpand-CJ2UbKhU.js";
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
