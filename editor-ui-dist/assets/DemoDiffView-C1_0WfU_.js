import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Bv7c3f3H.js";
import "./src-NOcRrhMI.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Yzer7ybu.js";
import "./users.store-D2CJwIMh.js";
import "./ParameterInputList-BRY5n8lN.js";
import "./constants-BfwnXJD0.js";
import "./merge-18y757JO.js";
import { r as useRootStore } from "./_baseOrderBy-DYXZYdmk.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CfqGZdKt.js";
import "./dataTable.store-1SN6-vjm.js";
import "./useClipboard-Bb3-B6uu.js";
import "./executions.store-DfGwL7WH.js";
import "./assistant.store-tITm29jM.js";
import "./chatPanel.store-Cp9tACqd.js";
import "./RunData-BA94cRtj.js";
import "./NDVEmptyState-BAMLqewf.js";
import "./externalSecrets.ee.store-FmmlxywU.js";
import "./uniqBy-Ce5w7A7u.js";
import "./communityNodes.store-B5ExKs5h.js";
import "./usePinnedData-CTUnN2lP.js";
import "./nodeIcon-DhJ-bHmj.js";
import "./canvas.utils-BiG2HRKB.js";
import "./canvas.eventBus-DmG4M5Yk.js";
import "./useCanvasOperations-CRp4NPu2.js";
import "./folders.store-B-Mq8WaA.js";
import "./ContactAdministratorToInstall-D0lt8fPW.js";
import "./useQuickConnect-DgWEOWZ1.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-WiMAjBb6.js";
import "./useDynamicCredentials-D5dvDUKp.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DX66yGGe.js";
import "./NodeIcon-BDI7RMj_.js";
import "./VirtualSchema-DAtzF-z6.js";
import "./useCalloutHelpers-k3SDXmzU.js";
import "./useTelemetryContext-CsMSx4jy.js";
import "./useRunWorkflow-03MlJmwX.js";
import "./pushConnection.store-DFU0MZ_9.js";
import "./nodeTransforms-e41k68mC.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BLO0vEso.js";
import "./dateFormatter-CU62HP2_.js";
import "./useExecutionHelpers-B5VewNwH.js";
import "./useFreeAiCredits-IZsJJ8xR.js";
import "./NodeSettings-pCYvtpIr.js";
import "./CommunityNodeUpdateInfo-DWDwhkqT.js";
import "./KeyboardShortcutTooltip-C7HcpLvs.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CbnmYzXl.js";
import "./useCanvasMapping-BahlvRj-.js";
import "./useKeybindings-C6FWDD0y.js";
import "./useNodeCreatorShortcutCoachmark-CiJDJZju.js";
import "./useActions-DSA2tDyc.js";
import "./setupPanel.store-rLSkaUF6.js";
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
