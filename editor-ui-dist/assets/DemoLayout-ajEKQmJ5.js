import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B4mjoJ1H.js";
import "./src-nB6Mt80o.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-ybjmCzHY.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CDo2A27r.js";
import "./merge-dRKz4Wxq.js";
import "./_baseOrderBy-C9cRRXWU.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BiwutIlT.js";
import "./useClipboard-D5tR3s4K.js";
import "./executions.store-Dp5NLNq7.js";
import "./assistant.store-BzCM7zwh.js";
import "./chatPanel.store-BRDQcWPh.js";
import "./RunData-DX340akE.js";
import "./NDVEmptyState-CO5UE1bR.js";
import "./externalSecrets.ee.store-CmkTQvJl.js";
import "./uniqBy-Ch31Y2Hr.js";
import "./usePinnedData-CiyNsvwj.js";
import "./nodeIcon-DqzTG5eV.js";
import "./canvas.utils-CNSKgUUL.js";
import "./nodeCreator.store-8E7tEULM.js";
import "./useCanvasOperations-DSUMBAch.js";
import "./folders.store-Bfmzqgey.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-CHKyiaAx.js";
import "./useRunWorkflow-kkBpKQx9.js";
import "./pushConnection.store-CdkW88sU.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-Ch3Cngbv.js";
import "./dateFormatter-B6Mrgsuq.js";
import "./useExecutionHelpers-CgUIDPvs.js";
import "./KeyboardShortcutTooltip-ByafR9iG.js";
import "./useKeybindings-CaA0FIqQ.js";
import "./useLogsTreeExpand-DJXnfZHb.js";
import { t as LogsPanel_default } from "./LogsPanel-DsErXlZk.js";
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
