import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-rh9OLi2r.js";
import "./src-CZpvcx8v.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-mlAhUFvR.js";
import { N as useWorkflowsStore } from "./builder.store-_aHZluMY.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import "./constants-BYz6vQlZ.js";
import "./merge-Qj6ZAWCV.js";
import "./_baseOrderBy-gMik9G3i.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-BR6oDN7-.js";
import "./assistant.store-DKK-J6eg.js";
import "./chatPanel.store-D3up0sNz.js";
import "./retry-B-tGcWte.js";
import "./executions.store-BgI9mGL0.js";
import "./useRunWorkflow-mx5KnT8m.js";
import "./usePinnedData-CAAF2IaS.js";
import "./nodeCreator.store-Bp0M1kch.js";
import "./nodeIcon-DIvfSMSF.js";
import "./useCanvasOperations-dhp3WEV2.js";
import { t as LogsPanel_default } from "./LogsPanel-CtlYwkmR.js";
import "./folders.store-w9b-OqkI.js";
import "./NodeIcon--bHNiZ7S.js";
import "./KeyboardShortcutTooltip-DZwF7YYP.js";
import "./useClipboard-AkTy1ewX.js";
import "./RunData-D9dmxmQZ.js";
import "./NDVEmptyState-DUIZoDA6.js";
import "./externalSecrets.ee.store-Dm7L1ZHd.js";
import "./uniqBy-fuL7JeZL.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-Dgt8mKei.js";
import "./schemaPreview.store-EWqJQJFC.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-DJZHNfZX.js";
import "./useExecutionHelpers-Bq41AMIG.js";
import "./useKeybindings-CngL7IhF.js";
import "./fileUtils-Bt1vr1SC.js";
import "./core-BMwklDiH.js";
import "./ChatFile-B6hcldJk.js";
import "./xml-DDfXMqo8.js";
import "./AnimatedSpinner-DBPcagVq.js";
import "./useLogsTreeExpand-BhbcuDui.js";
import "./core-DeR-PV8K.js";
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
