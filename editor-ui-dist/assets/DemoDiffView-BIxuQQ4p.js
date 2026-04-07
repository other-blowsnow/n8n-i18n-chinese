import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DLeeJfJb.js";
import "./src-Bqvpi8Q1.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-ChVR1_je.js";
import "./users.store-BBfDn-OZ.js";
import "./ParameterInputList-t6ljDbP7.js";
import "./constants-B5_ykVXd.js";
import "./merge-3v6XMMbx.js";
import { r as useRootStore } from "./_baseOrderBy-Bz8EJorA.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-BRg29NgG.js";
import "./dataTable.store-ZAeGgQx4.js";
import "./useClipboard-DNEZr-m8.js";
import "./executions.store-CCce-1Mq.js";
import "./assistant.store-00Qk07o1.js";
import "./chatPanel.store-CtbWyLUb.js";
import "./RunData-RkdQdvue.js";
import "./NDVEmptyState-Bc2jh4W1.js";
import "./externalSecrets.ee.store-gWcJFHeb.js";
import "./uniqBy-ChuoJM4g.js";
import "./communityNodes.store-Dg_tZ_2-.js";
import "./usePinnedData-dLomBRXX.js";
import "./nodeIcon-ByND4dx-.js";
import "./canvas.utils-CGiL2NZU.js";
import "./canvas.eventBus-3XpLxS-w.js";
import "./useCanvasOperations-CokVTgHN.js";
import "./setupPanel.store-SOZIWxEl.js";
import "./nodeTransforms-CHFpFXHR.js";
import "./templateTransforms-CWzPtKQV.js";
import "./ContactAdministratorToInstall-smTHO_t9.js";
import "./useQuickConnect-_wtnMIs5.js";
import "./semver-BsC5uf7T.js";
import "./CredentialIcon-BBioy-38.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-B7JhKYsA.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-DH9lAzIH.js";
import "./NodeIcon-w-OfrP79.js";
import "./VirtualSchema-aD_c0af4.js";
import "./useCalloutHelpers-D1v8-4-s.js";
import "./useTelemetryContext-CIAtREVP.js";
import "./useRunWorkflow-DoIyyg_Q.js";
import "./pushConnection.store-CL67TxY0.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-GbrmpFOZ.js";
import "./dateFormatter-xop3SJMi.js";
import "./useExecutionHelpers-C1pndnDi.js";
import "./useFreeAiCredits-CHAvQ6Dw.js";
import "./NodeSettings-DsLBxjqx.js";
import "./CommunityNodeUpdateInfo-Dq8qiZcO.js";
import "./KeyboardShortcutTooltip-DXD1rySw.js";
import "./vue-DTCBCWxb.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DiMiwXsw.js";
import "./useCanvasMapping-qv-uksK4.js";
import "./useKeybindings-C6N2BVbn.js";
import "./useNodeCreatorShortcutCoachmark-D603z12K.js";
import "./useActions-D9tO_gbi.js";
import "./chatHubPanel.store-BiCByi4D.js";
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
