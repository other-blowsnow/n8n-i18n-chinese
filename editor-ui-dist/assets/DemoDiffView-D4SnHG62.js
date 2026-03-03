import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B5pLjaIh.js";
import "./src-BIzQ9532.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Dm3aDjKG.js";
import "./users.store-BBCNHvSo.js";
import "./ParameterInputList-TnGuj9jA.js";
import "./constants-C1mjwDyK.js";
import "./merge-Bf-2KzoL.js";
import { r as useRootStore } from "./_baseOrderBy-PADM6HdE.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CP9TQSjh.js";
import "./dataTable.store-CAEeKfp1.js";
import "./useClipboard-UwxsiSCU.js";
import "./executions.store-IZLX19s3.js";
import "./assistant.store-BHTF4Pec.js";
import "./chatPanel.store-CL33MA2Z.js";
import "./RunData-0Xbmz9sJ.js";
import "./NDVEmptyState-B4UEVaWm.js";
import "./externalSecrets.ee.store-CBMXinmN.js";
import "./uniqBy-fD5BlqDd.js";
import "./communityNodes.store-PgWas1M0.js";
import "./usePinnedData-DGFmkWuZ.js";
import "./nodeIcon-CK3wnZGu.js";
import "./canvas.utils-C_LYlwVv.js";
import "./nodeCreator.store-DzuN1Q8w.js";
import "./useCanvasOperations-7gGZvdTh.js";
import "./folders.store-B5UUkbFr.js";
import "./ContactAdministratorToInstall-CJgzJtK-.js";
import "./useQuickConnect-BrLpCYym.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-CL_tUKXx.js";
import "./useDynamicCredentials-DbtQiy8h.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-D4I81vjq.js";
import "./NodeIcon-BTgPnYCJ.js";
import "./VirtualSchema-HlLr2OYN.js";
import "./useCalloutHelpers-FObLikxO.js";
import "./useTelemetryContext-DUqRvOqC.js";
import "./useRunWorkflow-Bn_y3gri.js";
import "./pushConnection.store-B1LB880_.js";
import "./nodeTransforms-C2soughD.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-HF8QwEPn.js";
import "./dateFormatter-C0EurzjG.js";
import "./useExecutionHelpers-BC4lZ64L.js";
import "./useFreeAiCredits-EPiPijvZ.js";
import "./NodeSettings-D3H3TRB2.js";
import "./KeyboardShortcutTooltip-I9mwgv0c.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-C5UGuVA0.js";
import "./useCanvasMapping-BNGbrMhs.js";
import "./useKeybindings-B8SNS2kD.js";
import "./QuickConnectBanner-BXnx4Kq-.js";
import "./useActions-BHe-7yNr.js";
import "./setupPanel.store-Ba2DnF9D.js";
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
