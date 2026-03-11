import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-CpHp4FW8.js";
import "./src-zFYS4ILv.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Cu8NO5aH.js";
import "./users.store-_kipJHtz.js";
import "./ParameterInputList-Bo_S786v.js";
import "./constants-CZQU-a3W.js";
import "./merge-DSIHXZgh.js";
import { r as useRootStore } from "./_baseOrderBy-DqfNsAfh.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CWQqb9G0.js";
import "./dataTable.store-YanxIL_l.js";
import "./useClipboard-BQBfRfcX.js";
import "./executions.store-OcRUv4TQ.js";
import "./assistant.store-CMWMK0wq.js";
import "./chatPanel.store-ndo3h9jB.js";
import "./RunData-CP6-a7aU.js";
import "./NDVEmptyState-CUnPOwBY.js";
import "./externalSecrets.ee.store-CLUqhodP.js";
import "./uniqBy-DPV92DSS.js";
import "./communityNodes.store-BXwpm2EC.js";
import "./usePinnedData-Bo94EGnO.js";
import "./nodeIcon-AG_4F8uo.js";
import "./canvas.utils-DydQZk_m.js";
import "./canvas.eventBus-BOs9cl_2.js";
import "./useCanvasOperations-6eqdwN7p.js";
import "./folders.store-xsoNECNZ.js";
import "./ContactAdministratorToInstall-9TMKSWOg.js";
import "./useQuickConnect-DUvpqAKX.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-Crhu4kcp.js";
import "./useDynamicCredentials-ChNgWiT6.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DUxK_hhI.js";
import "./NodeIcon-Dns12ypz.js";
import "./VirtualSchema-CZTJ2Fsd.js";
import "./useCalloutHelpers-BxD5AJlU.js";
import "./useTelemetryContext-CUfXdcP1.js";
import "./useRunWorkflow-DFm74rX3.js";
import "./pushConnection.store-BXQOtW8R.js";
import "./nodeTransforms-BeofbYXi.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-wLGOIHtH.js";
import "./dateFormatter-OO4-jr6J.js";
import "./useExecutionHelpers-Cnb19Xrk.js";
import "./useFreeAiCredits-BwC18ZQs.js";
import "./NodeSettings-DQfwznUD.js";
import "./CommunityNodeUpdateInfo-DhmYE9tK.js";
import "./KeyboardShortcutTooltip-CTzi064H.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BR_RMmto.js";
import "./useCanvasMapping-mKmiRHoM.js";
import "./useKeybindings-LAI81F8t.js";
import "./useNodeCreatorShortcutCoachmark-B1nlaLoW.js";
import "./useActions-Bb6IDOWu.js";
import "./setupPanel.store-1iLNUVBb.js";
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
