import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DXQZb51R.js";
import "./src-oGL8s0hT.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-RFJVPgry.js";
import "./users.store-DdXEJExY.js";
import "./ParameterInputList-Dne1h8tL.js";
import "./constants-D6tCZPKD.js";
import "./merge-CgbZmS72.js";
import { r as useRootStore } from "./_baseOrderBy-CJfk527n.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BBTAgZ3l.js";
import "./dataTable.store-RFfbhhh9.js";
import "./useClipboard-DZFpk_qt.js";
import "./executions.store-C7woX1VQ.js";
import "./assistant.store-g0pzjCqI.js";
import "./chatPanel.store-KCBWmLrv.js";
import "./RunData-84vqovsW.js";
import "./NDVEmptyState-BjtvppdF.js";
import "./externalSecrets.ee.store-DKyOUMdm.js";
import "./uniqBy-B_DSOsaw.js";
import "./communityNodes.store-IlKpFwkg.js";
import "./usePinnedData-BtukFGDK.js";
import "./nodeIcon-Csdtqfe_.js";
import "./canvas.utils-qLqfzoX-.js";
import "./nodeCreator.store-Dd9ZpPLH.js";
import "./useCanvasOperations-Bx0_H793.js";
import "./folders.store-hUU8r3mD.js";
import "./ContactAdministratorToInstall-C3ZRLsgU.js";
import "./useQuickConnect-vvxwxd04.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-CNiONAtZ.js";
import "./useDynamicCredentials-D7ZAY-Is.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DKP-TKjJ.js";
import "./NodeIcon-e9htlXPj.js";
import "./VirtualSchema-CvY8Ad5w.js";
import "./useCalloutHelpers-D9c-f7U6.js";
import "./useTelemetryContext-BsmX1FYx.js";
import "./useRunWorkflow-BnoEI1IA.js";
import "./pushConnection.store-Bf7pamA1.js";
import "./nodeTransforms-DIgULUKn.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-voOP5Dns.js";
import "./dateFormatter-DHh8Sn1A.js";
import "./useExecutionHelpers-OTEiWX23.js";
import "./useFreeAiCredits-DVyJIH17.js";
import "./NodeSettings-8P5ECyRO.js";
import "./KeyboardShortcutTooltip-DQue64WU.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-czBajqaY.js";
import "./useCanvasMapping-CPC19M2k.js";
import "./useKeybindings-BpJ3wPd8.js";
import "./QuickConnectBanner-qnyP_g7f.js";
import "./useActions-BXksT3yP.js";
import "./setupPanel.store-znM328ib.js";
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
