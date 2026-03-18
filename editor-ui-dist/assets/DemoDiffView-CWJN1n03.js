import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-DxtWl4Bj.js";
import "./src-r-l70KdD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CZGS7X5w.js";
import "./users.store-BVdi4rdu.js";
import "./ParameterInputList-DqVChmhi.js";
import "./constants-O8ayp6Ax.js";
import "./merge-D1NMaQVD.js";
import { r as useRootStore } from "./_baseOrderBy-kQRaOW6n.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B05cbbQh.js";
import "./dataTable.store-BAot4mxf.js";
import "./useClipboard-BJgl3cCM.js";
import "./executions.store-u9fem2YL.js";
import "./assistant.store-BF-wrHSq.js";
import "./chatPanel.store-D1_fWN0p.js";
import "./RunData-CWHiIcfA.js";
import "./NDVEmptyState-CSXqK1bm.js";
import "./externalSecrets.ee.store-CryNl5Fx.js";
import "./uniqBy-CsPtcSMm.js";
import "./communityNodes.store-CGW5UMft.js";
import "./usePinnedData-BbPFe05Y.js";
import "./nodeIcon-BIiILicj.js";
import "./canvas.utils-CEtvFiQV.js";
import "./canvas.eventBus-CHoGJAGK.js";
import "./useCanvasOperations-DNS84kDN.js";
import "./ContactAdministratorToInstall-Y-XK-WYj.js";
import "./useQuickConnect-BERDxgdn.js";
import "./semver-l-8UtjEn.js";
import "./CredentialIcon-v962KpH2.js";
import "./useDynamicCredentials-DFRSAlMH.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-BE6g-CLv.js";
import "./NodeIcon-DcZBOray.js";
import "./VirtualSchema-COBO1XOA.js";
import "./useCalloutHelpers-DG55C_bp.js";
import "./useTelemetryContext-DgbFXhqe.js";
import "./useRunWorkflow-CDmYf51o.js";
import "./pushConnection.store-C65qYXYL.js";
import "./nodeTransforms-BJ3-mOcw.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-DCOmxIKb.js";
import "./dateFormatter-CdCv3sVH.js";
import "./useExecutionHelpers-BQ81wHnq.js";
import "./useFreeAiCredits-obBD-oen.js";
import "./NodeSettings-CVGpLHBC.js";
import "./CommunityNodeUpdateInfo-CxwFW0ab.js";
import "./KeyboardShortcutTooltip-xZG9cYH5.js";
import "./vue-C5mU5rBa.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CigGlqd_.js";
import "./useCanvasMapping-BWASACCK.js";
import "./useKeybindings-C4RM686u.js";
import "./useNodeCreatorShortcutCoachmark-C7QBSjRY.js";
import "./useActions-PGGn0X11.js";
import "./setupPanel.store-CLyX7W8g.js";
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
