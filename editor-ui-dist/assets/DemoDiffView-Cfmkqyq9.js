import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B9vJNOCd.js";
import "./src-DiEfDBW_.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-vgkOv04g.js";
import "./users.store-CeIiqJPu.js";
import "./ParameterInputList-BnUqWIui.js";
import "./constants-BDDzQuZL.js";
import "./merge-CZQEi9PS.js";
import { r as useRootStore } from "./_baseOrderBy-C5llb9iP.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CC7G435l.js";
import "./dataTable.store-HygwMlrS.js";
import "./useClipboard-DTMDUgxK.js";
import "./executions.store-BMPiLOvN.js";
import "./assistant.store-CFrcACMV.js";
import "./chatPanel.store-D6z989iO.js";
import "./RunData-CmHtl5qv.js";
import "./NDVEmptyState-jHkX89aA.js";
import "./externalSecrets.ee.store-DtsdHH54.js";
import "./uniqBy-3Jc6dR-p.js";
import "./communityNodes.store-B5zhOnWl.js";
import "./usePinnedData-D2WIv-jQ.js";
import "./nodeIcon-DzoQ5His.js";
import "./canvas.utils-BvHrBpk4.js";
import "./nodeCreator.store--jVl9OnG.js";
import "./useCanvasOperations-6BPR1ILX.js";
import "./folders.store-Bfs_o1tT.js";
import "./ContactAdministratorToInstall-DbCp8wmF.js";
import "./useQuickConnect-CY-hJeuw.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-pIOmakIA.js";
import "./useDynamicCredentials-B2QriAoR.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-BwJ-JNV5.js";
import "./NodeIcon-DV9xFvYB.js";
import "./VirtualSchema-RJH2y_L1.js";
import "./useCalloutHelpers-BdKNkZvc.js";
import "./useTelemetryContext-Bh85kY8l.js";
import "./useRunWorkflow-7le6oLrp.js";
import "./pushConnection.store-BJJMLsvy.js";
import "./nodeTransforms-D8Di-pgT.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Cd320-6T.js";
import "./dateFormatter-Cxh7Pkii.js";
import "./useExecutionHelpers-B-pLgO3L.js";
import "./useFreeAiCredits-CJCQaZac.js";
import "./NodeSettings-DfsX_4fq.js";
import "./KeyboardShortcutTooltip-DNMCksvF.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-B0D2OXtT.js";
import "./useCanvasMapping-DXjH1FY5.js";
import "./useKeybindings-BzIbxzrU.js";
import "./QuickConnectBanner-cCkkggmP.js";
import "./useActions-FZfT061p.js";
import "./setupPanel.store-wtUXSwVl.js";
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
