import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DL4VDRVM.js";
import "./src-CO68IM2H.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-BnN4QvT3.js";
import "./users.store-Bj_XyNBb.js";
import "./ParameterInputList-CkTqdH_s.js";
import "./constants-CasV1Nn-.js";
import "./merge-aQ2KMKTv.js";
import { r as useRootStore } from "./_baseOrderBy-CfcpbHUH.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVsIZ8uv.js";
import "./dataTable.store-Bww8UgM5.js";
import "./useClipboard-Bxw3LQFN.js";
import "./executions.store-CjVhJlRx.js";
import "./assistant.store-DSLB991I.js";
import "./chatPanel.store-BA30Gt-r.js";
import "./RunData-BEftQbql.js";
import "./NDVEmptyState-YgsCrfWp.js";
import "./externalSecrets.ee.store-Br6q_MRL.js";
import "./uniqBy-BguIU7IC.js";
import "./communityNodes.store-DRDEfdIJ.js";
import "./usePinnedData-CEvgNFnp.js";
import "./nodeIcon-Dlbdx7jv.js";
import "./canvas.utils-DXtYJQO-.js";
import "./canvas.eventBus-BcjKaeFN.js";
import "./useCanvasOperations-BbmXPhWd.js";
import "./setupPanel.store-DYZJI1cj.js";
import "./nodeTransforms-BkycvANY.js";
import "./templateTransforms-CwPYKADA.js";
import "./ContactAdministratorToInstall-D0za7f8a.js";
import "./useQuickConnect-DSKSwOk3.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-DzGaiKya.js";
import "./useDynamicCredentials-DjGzGYY2.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-Dv6KEOI7.js";
import "./NodeIcon-CC7z2JLa.js";
import "./VirtualSchema-DCU6dq1a.js";
import "./useCalloutHelpers-DHLpBgZY.js";
import "./useTelemetryContext-BlkRO00Y.js";
import "./useRunWorkflow-DJwtSzCb.js";
import "./pushConnection.store-CCWmtksI.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-B8ocDGY_.js";
import "./dateFormatter-DARElawG.js";
import "./useExecutionHelpers-B2BS5eQA.js";
import "./useFreeAiCredits-B07yBvuC.js";
import "./NodeSettings-DponRSUA.js";
import "./CommunityNodeUpdateInfo-Os-0JT76.js";
import "./KeyboardShortcutTooltip-D8pjiE_j.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CWeS3eQ9.js";
import "./useCanvasMapping-DtU-sKy_.js";
import "./useKeybindings-m00chGP-.js";
import "./useNodeCreatorShortcutCoachmark-BspD7kZ-.js";
import "./useActions-CAsfuEDe.js";
import "./chatHubPanel.store-BCk3tV6x.js";
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
