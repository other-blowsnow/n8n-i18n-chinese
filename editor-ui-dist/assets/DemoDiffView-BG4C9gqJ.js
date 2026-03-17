import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-Dm0zgpAe.js";
import "./src-DpXAQiaT.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DKPoZMum.js";
import "./users.store-KDduniYy.js";
import "./ParameterInputList-BjP6qemy.js";
import "./constants-BFYSGQP4.js";
import "./merge-B0uVzL8N.js";
import { r as useRootStore } from "./_baseOrderBy-CjnCEHwl.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DBvy4NsP.js";
import "./dataTable.store-DoJbb3rj.js";
import "./useClipboard-kLXRilEV.js";
import "./executions.store-ByzTH5-P.js";
import "./assistant.store-C0mp11I1.js";
import "./chatPanel.store-BJNCJjNA.js";
import "./RunData-Cyd2mcBm.js";
import "./NDVEmptyState-CAVpRQIg.js";
import "./externalSecrets.ee.store-QSzeAebe.js";
import "./uniqBy-oibyPKTc.js";
import "./communityNodes.store-BPojQhtx.js";
import "./usePinnedData-B4TDiiKQ.js";
import "./nodeIcon-BKSh_82X.js";
import "./canvas.utils-BpFkmltQ.js";
import "./canvas.eventBus-IAuUOwZr.js";
import "./useCanvasOperations-DkB_TBZ3.js";
import "./ContactAdministratorToInstall-C9fjcxqm.js";
import "./useQuickConnect-4dZghdlT.js";
import "./semver-l-8UtjEn.js";
import "./CredentialIcon-Bw1bGZDR.js";
import "./useDynamicCredentials-BJ2deOke.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-CPLY-rD1.js";
import "./NodeIcon-DaDADg-c.js";
import "./VirtualSchema-BBsTyxyL.js";
import "./useCalloutHelpers-DCrL0mMU.js";
import "./useTelemetryContext-CH2_um8_.js";
import "./useRunWorkflow-P8Wyk4xJ.js";
import "./pushConnection.store-BDq5Y2m6.js";
import "./nodeTransforms-CFcPHPkF.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-BFVKx2xB.js";
import "./dateFormatter-B_4Ykken.js";
import "./useExecutionHelpers-xnerzRKT.js";
import "./useFreeAiCredits-BLSBvXJX.js";
import "./NodeSettings-C6QhVHUG.js";
import "./CommunityNodeUpdateInfo-BZ08zZDL.js";
import "./KeyboardShortcutTooltip-BHivDLbD.js";
import "./vue-C5mU5rBa.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CaYou8N4.js";
import "./useCanvasMapping-0J_fDZqx.js";
import "./useKeybindings-DCGPJ1Pf.js";
import "./useNodeCreatorShortcutCoachmark-BgKFKa6B.js";
import "./useActions-FFhFpLeC.js";
import "./setupPanel.store-AIqdtsnw.js";
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
