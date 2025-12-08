import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-MkgS7cNj.js";
import "./src-CCUHkLSl.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-YYJo2Jl2.js";
import "./icon-4iaHNdRV.js";
import "./overlay-C9CiBcJM.js";
import "./empty-C2SrrehM.js";
import "./useMessage-D8Xh31vl.js";
import { o as useWorkflowsStore } from "./useTelemetry-C3BpPRvq.js";
import "./useToast-Ck3xggCR.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-CLp3mUiA.js";
import "./merge-xJWNAnWT.js";
import "./assistant.store-CpExYQGD.js";
import "./_baseOrderBy-B8VDCWzK.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-DLVvDUVS.js";
import "./useExternalHooks-CRZsdBXv.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-C3u4ES9m.js";
import "./npsSurvey.store-BC4dO5e-.js";
import "./cloudPlan.store-BvzpoaMA.js";
import "./templates.store-C3DYZmUX.js";
import "./focusPanel.store-7gp6Xx_u.js";
import "./useWorkflowSaving-C_L15FBf.js";
import "./retry-CalJieID.js";
import "./executions.store-hIsG6G5v.js";
import "./useRunWorkflow-D0fEwcPW.js";
import "./usePinnedData-BB7XKaAQ.js";
import "./nodeCreator.store-vUI_8nal.js";
import "./nodeIcon-CV43yAcn.js";
import "./useClipboard-BCopUCaf.js";
import "./useCanvasOperations-B5F8WBpU.js";
import { t as LogsPanel_default } from "./LogsPanel-ysChkmKi.js";
import "./folders.store-C5ZBQQf6.js";
import "./NodeIcon-CacDLsYF.js";
import "./KeyboardShortcutTooltip-lgcB9ai5.js";
import "./isEmpty-B4Np6WNX.js";
import "./NDVEmptyState-DtFHZecj.js";
import "./externalSecrets.ee.store-DhpmSbEm.js";
import "./uniqBy-C5XzJlKd.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-DLXdZZ6g.js";
import "./schemaPreview.store-DmOMdXHN.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-BDcxbi_a.js";
import "./useExecutionHelpers-D4q0uANI.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-CPhFRvf_.js";
import "./core-B834MECE.js";
import "./ChatFile-BbL40HHy.js";
import "./xml-BP5i5VLm.js";
import "./AnimatedSpinner-BKvs0-tV.js";
import "./useLogsTreeExpand-CHbP2x0S.js";
import "./core-DNyEixOf.js";
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
