import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-D5rots3X.js";
import "./src-Bnic0IZ0.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-H-OAxvI0.js";
import "./users.store-CzbeKDa-.js";
import "./ParameterInputList-NsHkAE9D.js";
import "./constants-CvheVn3c.js";
import "./merge-BnWpgTIL.js";
import { r as useRootStore } from "./_baseOrderBy-B6NURhS_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BPQ7Jg24.js";
import "./dataTable.store-Dm6kgH6_.js";
import "./useClipboard-wv2e_xGz.js";
import "./executions.store-Brk4n5HE.js";
import "./assistant.store-DeHW7KVq.js";
import "./chatPanel.store-YJTWj7q4.js";
import "./RunData-C4tlBX5S.js";
import "./NDVEmptyState-DZntCm5e.js";
import "./externalSecrets.ee.store-LI6UX4Fu.js";
import "./uniqBy-RDM8dGWt.js";
import "./communityNodes.store-DDiPHu0F.js";
import "./usePinnedData-B8gt-FA4.js";
import "./nodeIcon-Dku-D2e9.js";
import "./canvas.utils-JzY87w_-.js";
import "./canvas.eventBus-Cip4bet-.js";
import "./useCanvasOperations-CHwmFsdd.js";
import "./setupPanel.store-CbAKGtR0.js";
import "./nodeTransforms-CyCEXDjF.js";
import "./templateTransforms-CmEf0ioF.js";
import "./ContactAdministratorToInstall-Bvz9RtJF.js";
import "./useQuickConnect-BXXCmctK.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-mzRTHyHp.js";
import "./useDynamicCredentials-C4N9Pa4_.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-CmgAS6ND.js";
import "./NodeIcon-C1S6log1.js";
import "./VirtualSchema-DTXT9AfB.js";
import "./useCalloutHelpers-BLmSyYk-.js";
import "./useTelemetryContext-C7bTLX_P.js";
import "./useRunWorkflow-C-_uO9iY.js";
import "./pushConnection.store-BfVjm7GD.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-CKpDqi--.js";
import "./dateFormatter-8rBEgO-6.js";
import "./useExecutionHelpers-DCj6fAyh.js";
import "./useFreeAiCredits-7mGOZ0dP.js";
import "./NodeSettings-BPBWloiS.js";
import "./CommunityNodeUpdateInfo-C7iHwXFp.js";
import "./KeyboardShortcutTooltip-7zM93SbB.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CDJSA5f_.js";
import "./useCanvasMapping-IhVl4Yxd.js";
import "./useKeybindings-KTSceTOJ.js";
import "./useNodeCreatorShortcutCoachmark-BGTvjBLA.js";
import "./useActions-BZD-y2Ee.js";
import "./chatHubPanel.store-C3EdXpaD.js";
var DemoDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		function isValidWorkflow(obj) {
			if (obj === void 0 || obj === null) return true;
			return typeof obj === "object" && "nodes" in obj && "connections" in obj;
		}
		function emitPostMessageReady() {
			if (window.parent) window.parent.postMessage(JSON.stringify({
				command: "n8nReady",
				version: rootStore.versionCli
			}), "*");
		}
		async function onPostMessageReceived(messageEvent) {
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
			try {
				const json = JSON.parse(messageEvent.data);
				if (json && json.command === "openDiff") {
					if (!isValidWorkflow(json.oldWorkflow) || !isValidWorkflow(json.newWorkflow)) return;
					sourceWorkflow.value = json.oldWorkflow ?? void 0;
					targetWorkflow.value = json.newWorkflow ?? void 0;
					tidyUpEnabled.value = json.tidyUp === true;
				}
			} catch (e) {}
		}
		onMounted(() => {
			window.addEventListener("message", onPostMessageReceived);
			emitPostMessageReady();
		});
		onUnmounted(() => {
			window.removeEventListener("message", onPostMessageReceived);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.demoDiffView) }, [sourceWorkflow.value || targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 0,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": unref(i18n).baseText("workflowDiff.label.before"),
				"target-label": unref(i18n).baseText("workflowDiff.label.after"),
				"tidy-up": tidyUpEnabled.value
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"tidy-up"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.waitingState)
			}, [createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("workflowDiff.waitingForData")), 1)], 2))], 2);
		};
	}
});
var DemoDiffView_vue_vue_type_style_index_0_lang_module_default = {
	demoDiffView: "_demoDiffView_t8kr6_125",
	waitingState: "_waitingState_t8kr6_132"
};
var DemoDiffView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DemoDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DemoDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
export { DemoDiffView_default as default };
