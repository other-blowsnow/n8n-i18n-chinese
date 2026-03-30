import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CngBYgKR.js";
import "./users.store-DNsxOyr9.js";
import "./ParameterInputList-DOe0dhvs.js";
import "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import { r as useRootStore } from "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import "./dataTable.store-AFhslfDW.js";
import "./useClipboard-CRF4y00Y.js";
import "./executions.store-K7FpV4h9.js";
import "./assistant.store-BbX4dYdI.js";
import "./chatPanel.store-Bqd0ExjH.js";
import "./RunData-JJuR-TUd.js";
import "./NDVEmptyState-C6YNICAt.js";
import "./externalSecrets.ee.store-BEePBoyo.js";
import "./uniqBy-CYOzxWHv.js";
import "./communityNodes.store-CeGWWW8E.js";
import "./usePinnedData-mwDbTI9q.js";
import "./nodeIcon-BECwfvAM.js";
import "./canvas.utils-DpVKjWUr.js";
import "./canvas.eventBus-IAYDCx3W.js";
import "./useCanvasOperations-CD8a88Wn.js";
import "./setupPanel.store-D030fGpD.js";
import "./nodeTransforms-CRDKuOIX.js";
import "./templateTransforms-CmlkNmBG.js";
import "./ContactAdministratorToInstall-BZfOYCUn.js";
import "./useQuickConnect-CtUYBQKT.js";
import "./semver-BsC5uf7T.js";
import "./CredentialIcon-C_ro4oh2.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-Bp5Gkrur.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-DGJFwOnb.js";
import "./NodeIcon-BCEWdXjI.js";
import "./VirtualSchema-dXzIVdUH.js";
import "./useCalloutHelpers-CybvfldS.js";
import "./useTelemetryContext-4cEhMj-m.js";
import "./useRunWorkflow-CjrL2VOw.js";
import "./pushConnection.store-Cn2XGMRG.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BK7y9na5.js";
import "./dateFormatter-BGzaEmJI.js";
import "./useExecutionHelpers-BtxcfTcc.js";
import "./useFreeAiCredits-DdzVEcPD.js";
import "./NodeSettings-Cm_WMJRH.js";
import "./CommunityNodeUpdateInfo-BTdjs5dP.js";
import "./KeyboardShortcutTooltip-Oymux7s3.js";
import "./vue-DTCBCWxb.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-C6Nf6eNH.js";
import "./useCanvasMapping-k9w4ZUGo.js";
import "./useKeybindings-CN21vXYI.js";
import "./useNodeCreatorShortcutCoachmark-DVQ0P5L1.js";
import "./useActions-Dy-A6-Te.js";
import "./chatHubPanel.store-DdDtaCA6.js";
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
