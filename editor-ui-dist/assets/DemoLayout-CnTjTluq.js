import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-8-eqnC2S.js";
import "./src-Cq27d_Gp.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./useClipboard-D9AU0bV9.js";
import "./executions.store-nTCUYDJR.js";
import "./assistant.store-CT263qz_.js";
import "./chatPanel.store-Br-ga6F1.js";
import "./RunData-DSfa3F2H.js";
import "./NDVEmptyState-C41gb8CX.js";
import "./externalSecrets.ee.store-DgMeWcz6.js";
import "./uniqBy-HUxZm4qP.js";
import "./usePinnedData-B4FHq9FM.js";
import "./nodeIcon-p8UmtDus.js";
import "./canvas.utils-BvLPDYAs.js";
import "./nodeCreator.store-D-pWr7VG.js";
import "./useCanvasOperations-01naG_2v.js";
import "./folders.store-B29vIVJe.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-HdSkOCP-.js";
import "./useRunWorkflow-BfL7BCzH.js";
import "./pushConnection.store-Di8YtKvV.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-bO4QCkn5.js";
import "./dateFormatter-C2jhIUgb.js";
import "./useExecutionHelpers-BqmfvwsO.js";
import "./KeyboardShortcutTooltip-Dvjl2Kjb.js";
import "./useKeybindings-CsWMJtRb.js";
import "./useLogsTreeExpand-Br8RXcPm.js";
import { t as LogsPanel_default } from "./LogsPanel-CK2KI1_5.js";
import "./AnimatedSpinner-BHDG51rn.js";
import "./ChatFile-D7N9M2uo.js";
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
