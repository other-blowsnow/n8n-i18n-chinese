import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DmEDgiBe.js";
import { bi as useRoute } from "./src-CTpXJon-.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-Cq1Mo6lE.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Cc as WorkflowIdKey } from "./constants-DinfAOkS.js";
import "./merge-DYtQhreu.js";
import "./_baseOrderBy-vlX6A-VD.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BDNPykkK.js";
import "./useClipboard-D1FfaIKw.js";
import "./executions.store-C236s-JF.js";
import "./assistant.store-DK24SG4o.js";
import "./chatPanel.store-D2XD22Gw.js";
import "./RunData-CwHQFz76.js";
import "./NDVEmptyState-aNF7i83n.js";
import "./useEnvFeatureFlag-jsXDrTnO.js";
import "./externalSecrets.ee.store-C1MorEjF.js";
import "./uniqBy-CPbSD5bI.js";
import "./usePinnedData-BySu1iBX.js";
import "./nodeIcon-Eq5IsRFB.js";
import "./canvas.utils-DPULF5QP.js";
import "./nodeCreator.store-CwETq5WT.js";
import "./useCanvasOperations-D96JM4f8.js";
import "./folders.store-ChxjOYG1.js";
import "./RunDataHtml-Dprg2oeh.js";
import "./NodeIcon-ZpxaQclQ.js";
import "./useRunWorkflow-DPPsMHjJ.js";
import "./pushConnection.store-DheeiSTr.js";
import "./vue-json-pretty-BB5lIPuK.js";
import "./collaboration.store-5Vt1Ga6j.js";
import "./dateFormatter-D3tpCIMY.js";
import "./useExecutionHelpers-AzO5Ou5y.js";
import "./KeyboardShortcutTooltip-Yje-Gyud.js";
import "./useKeybindings-BllbO5n3.js";
import "./useLogsTreeExpand-BwzEOENs.js";
import { t as LogsPanel_default } from "./LogsPanel-p_uKMFlu.js";
import "./AnimatedSpinner-DnSOf2rO.js";
import "./useResizablePanel-D2RuTB3N.js";
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
