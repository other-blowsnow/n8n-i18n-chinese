import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-65UNw25j.js";
import "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-BHNvvSeY.js";
import "./users.store-buY8IFeq.js";
import "./ParameterInputList-B0ozRU8e.js";
import "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import { r as useRootStore } from "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import "./dataTable.store-BOyEf7pu.js";
import "./useClipboard-DUb9bZTD.js";
import "./executions.store-CZ7IudtY.js";
import "./assistant.store-CWYwgkmr.js";
import "./chatPanel.store-DMGDdE_b.js";
import "./RunData-NQo5-mYA.js";
import "./NDVEmptyState-DZmU4yg5.js";
import "./externalSecrets.ee.store-llIAkYfQ.js";
import "./uniqBy-Dj098wSc.js";
import "./communityNodes.store-DmrADSTu.js";
import "./usePinnedData-C8gnvP4e.js";
import "./nodeIcon-CD_sOlVS.js";
import "./canvas.utils-DMO0Z6xe.js";
import "./canvas.eventBus-C8w9bqJ2.js";
import "./useCanvasOperations-D5bkcPXX.js";
import "./setupPanel.store-CF2im1BD.js";
import "./nodeTransforms-DEpSiFLd.js";
import "./templateTransforms-B0pb7wSN.js";
import "./ContactAdministratorToInstall-B2N7oigj.js";
import "./useQuickConnect-tQYKZnYl.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-BcmNkOZQ.js";
import "./useDynamicCredentials-BuIRciS5.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-DGhmGwc9.js";
import "./NodeIcon-Bp2F1h7o.js";
import "./VirtualSchema-Bu4PUQZ1.js";
import "./useCalloutHelpers-B55p9wzV.js";
import "./useTelemetryContext-xzG23G1S.js";
import "./useRunWorkflow-_sIY4q0C.js";
import "./pushConnection.store-f62eviF-.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-DPXpfSOV.js";
import "./dateFormatter-HakUyV2l.js";
import "./useExecutionHelpers-CVHk79ok.js";
import "./useFreeAiCredits-DzozHFsF.js";
import "./NodeSettings-CJv7nqZw.js";
import "./CommunityNodeUpdateInfo-CLrwekDT.js";
import "./KeyboardShortcutTooltip-_xCpLz9K.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BdLBe7RL.js";
import "./useCanvasMapping-r7Atp9wW.js";
import "./useKeybindings-C9INeoZo.js";
import "./useNodeCreatorShortcutCoachmark-BbSqxeqi.js";
import "./useActions-DFvg4p_n.js";
import "./chatHubPanel.store-CLjAUqe4.js";
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
