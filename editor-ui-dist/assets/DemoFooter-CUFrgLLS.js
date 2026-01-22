import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Cs_Gdags.js";
import "./src-8oxUnO8e.js";
import "./truncate-ChR23AMy.js";
import { s as useWorkflowsStore } from "./users.store-BpO9xL6v.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-CD_zYicS.js";
import "./merge-DitvRgnI.js";
import "./_baseOrderBy-7QDPJbgm.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DMnUQHzZ.js";
import "./useClipboard-DHvXJ1Oh.js";
import "./executions.store-DH39TTBl.js";
import "./assistant.store-DJmcsXti.js";
import "./chatPanel.store-CkHKD6cs.js";
import "./RunData-CP1YFI4R.js";
import "./NDVEmptyState-wkLJkKVw.js";
import "./externalSecrets.ee.store-DZNxDrHz.js";
import "./usePinnedData-BBAxQvsh.js";
import "./nodeCreator.store-aJebRrdL.js";
import "./canvas.utils-C1vRWLZo.js";
import "./nodeIcon-B3c6KgVf.js";
import "./useCanvasOperations-w41DOg-d.js";
import { t as LogsPanel_default } from "./LogsPanel-Sliia1mR.js";
import "./folders.store-DCvgEJjh.js";
import "./pushConnection.store-B2mVlkxA.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-Dh1Yx0Iu.js";
import "./useRunWorkflow-Cwm1eN57.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-DFK-V19t.js";
import "./dateFormatter-CsnA3goE.js";
import "./useExecutionHelpers-B-PbVGYJ.js";
import "./KeyboardShortcutTooltip-DVmEdfdZ.js";
import "./useKeybindings-DOw24KNG.js";
import "./ChatFile-DGN9Z6P_.js";
import "./AnimatedSpinner-B25lpnvb.js";
import "./useLogsTreeExpand-WbnM4TtJ.js";
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
