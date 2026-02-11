import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B1YZmiaS.js";
import { yi as useRoute } from "./src-BKhrJAXQ.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-D4KlI7i9.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-f59869wg.js";
import "./merge-BtJrdwQI.js";
import "./_baseOrderBy-LIkFSIqt.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CFG_KaDf.js";
import "./useClipboard-ytjZTUnd.js";
import "./executions.store-BBf1wmLb.js";
import "./assistant.store-CGT1gghh.js";
import "./chatPanel.store-DA0Bac44.js";
import "./RunData-Dc3TSFOx.js";
import "./NDVEmptyState-CrNhNLMR.js";
import "./useEnvFeatureFlag-BEUtvS6s.js";
import "./externalSecrets.ee.store-ONoYyZYS.js";
import "./uniqBy-N_gU_uid.js";
import "./usePinnedData-BgFOWKki.js";
import "./nodeIcon-CDCxkllR.js";
import "./canvas.utils-Bvp_du9O.js";
import "./nodeCreator.store-DEkW42sn.js";
import "./useCanvasOperations-DGQwLlLK.js";
import "./folders.store-CC8rU1bE.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-BEiPnuKm.js";
import "./useRunWorkflow-Bphn2Pvd.js";
import "./pushConnection.store-C1vVAOC2.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-D2N1DwPG.js";
import "./dateFormatter-XVJCQ2fN.js";
import "./useExecutionHelpers-CO5CakHQ.js";
import "./KeyboardShortcutTooltip-B-kciyp2.js";
import "./useKeybindings-CZPRuRLz.js";
import "./useLogsTreeExpand-D-Z-HmQl.js";
import { t as LogsPanel_default } from "./LogsPanel-BHcTn846.js";
import "./AnimatedSpinner--2Ek9VrF.js";
import "./ChatFile-BrXecLHH.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
