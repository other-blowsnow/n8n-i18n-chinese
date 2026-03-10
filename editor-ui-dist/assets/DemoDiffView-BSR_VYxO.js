import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-FALBSzR9.js";
import "./src-DSdtxpS-.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-3WlYP6ij.js";
import "./users.store-DjIPN_Jo.js";
import "./ParameterInputList-C-ZtoNWb.js";
import "./constants-Du1sDgQK.js";
import "./merge-m4Q4akAk.js";
import { r as useRootStore } from "./_baseOrderBy-DTSNQHzv.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DnInf_Mb.js";
import "./dataTable.store-BeorjCL4.js";
import "./useClipboard-3T72jxBx.js";
import "./executions.store-A8kDneRB.js";
import "./assistant.store-Boq9AJMi.js";
import "./chatPanel.store-CfycLreN.js";
import "./RunData-D2WSy1l-.js";
import "./NDVEmptyState-C0szQBKk.js";
import "./externalSecrets.ee.store-C-LJHlp4.js";
import "./uniqBy-BQFKKiq0.js";
import "./communityNodes.store-kIyNyma_.js";
import "./usePinnedData-CtdGdzxg.js";
import "./nodeIcon-s5A0N13y.js";
import "./canvas.utils-C7R5h5xc.js";
import "./canvas.eventBus-BFWN62oH.js";
import "./useCanvasOperations-C_yzmH-V.js";
import "./folders.store-Cr6j-iI3.js";
import "./ContactAdministratorToInstall-ColF8gM-.js";
import "./useQuickConnect-5E7zQ8HL.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-ChDrMrU5.js";
import "./useDynamicCredentials-Bp2rbdxL.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-CmsE9iFx.js";
import "./NodeIcon-BOrzk_Ua.js";
import "./VirtualSchema-BgOIR7qW.js";
import "./useCalloutHelpers-C_s4H0ZM.js";
import "./useTelemetryContext-DQM4wfce.js";
import "./useRunWorkflow-DbrvcSDD.js";
import "./pushConnection.store-Bkm15hXw.js";
import "./nodeTransforms-CdFcRbYz.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Y9Bm0NJN.js";
import "./dateFormatter-DXOLFsyr.js";
import "./useExecutionHelpers-Dm4y-kwA.js";
import "./useFreeAiCredits-9IiHDU9J.js";
import "./NodeSettings-ByOwECq7.js";
import "./CommunityNodeUpdateInfo-DtggWD96.js";
import "./KeyboardShortcutTooltip-QlYiYWRT.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BPm5dEiG.js";
import "./useCanvasMapping-C1jECbA3.js";
import "./useKeybindings-U6uc6f1q.js";
import "./useNodeCreatorShortcutCoachmark-DE4kHN37.js";
import "./useActions-Dsam-Hl_.js";
import "./setupPanel.store-DAaroILk.js";
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
