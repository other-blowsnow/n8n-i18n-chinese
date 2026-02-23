import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-C-EGnnaH.js";
import { bi as useRoute } from "./src-AoeVD7He.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-CU7DkGnX.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Cc as WorkflowIdKey } from "./constants-CumZmnWv.js";
import "./merge-DgwDWcpR.js";
import "./_baseOrderBy-CxotlRq1.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BX6oNCg_.js";
import "./useClipboard-BNj9_TRT.js";
import "./executions.store-NlPKYSwV.js";
import "./assistant.store-CPy14S4p.js";
import "./chatPanel.store-CkQWPjLG.js";
import "./RunData-DHyb4w-_.js";
import "./NDVEmptyState-BrbbWOj3.js";
import "./useEnvFeatureFlag-Imr5pM7d.js";
import "./externalSecrets.ee.store-XrmLLG8g.js";
import "./uniqBy-CrmFfhwW.js";
import "./usePinnedData-D9kYl6-o.js";
import "./nodeIcon-PKSJcu42.js";
import "./canvas.utils-BsGxI6nE.js";
import "./nodeCreator.store-CE2rQAUX.js";
import "./useCanvasOperations-e3kRe5Qo.js";
import "./folders.store-BpixiajR.js";
import "./RunDataHtml-Dprg2oeh.js";
import "./NodeIcon-Dt9Wjnlx.js";
import "./useRunWorkflow-CLzyCA9j.js";
import "./pushConnection.store-UDvGTgEt.js";
import "./vue-json-pretty-BB5lIPuK.js";
import "./collaboration.store-CjDP9MFo.js";
import "./dateFormatter-BAM8rHWw.js";
import "./useExecutionHelpers-CrHHUbpP.js";
import "./KeyboardShortcutTooltip-BNYSsFGN.js";
import "./useKeybindings-CIaHia8Z.js";
import "./useLogsTreeExpand-CHVtirJT.js";
import { t as LogsPanel_default } from "./LogsPanel-CyYclOAt.js";
import "./AnimatedSpinner-DnSOf2rO.js";
import "./useResizablePanel-Ca6BGTdN.js";
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
