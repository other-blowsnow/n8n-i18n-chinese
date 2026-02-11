import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-aYnXQJFG.js";
import { yi as useRoute } from "./src-Dk7k3IeM.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-vVKd46Ls.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-CKBJKVau.js";
import "./merge-DszHxbC0.js";
import "./_baseOrderBy-DAciTS0t.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CjFlk2i6.js";
import "./useClipboard-nkoUVkOz.js";
import "./executions.store-CSFNT-I7.js";
import "./assistant.store-BIpaprD4.js";
import "./chatPanel.store-Bu4rhvVR.js";
import "./RunData-BIish2Al.js";
import "./NDVEmptyState-CEic-rUq.js";
import "./useEnvFeatureFlag-BWumxE2Y.js";
import "./externalSecrets.ee.store-DO7VRdgq.js";
import "./uniqBy-DOGsBU9z.js";
import "./usePinnedData-BoopsGn4.js";
import "./nodeIcon-puKGOFsf.js";
import "./canvas.utils-JuzCJB3j.js";
import "./nodeCreator.store-BfmFk5Hd.js";
import "./useCanvasOperations-CR5Wfuss.js";
import "./folders.store-XQQufkq7.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-cnDcnMrq.js";
import "./useRunWorkflow-1WwHrpzR.js";
import "./pushConnection.store-DZDHscTl.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-dDzQ8i-o.js";
import "./dateFormatter-BMzXwW1w.js";
import "./useExecutionHelpers-Bka9tyOz.js";
import "./KeyboardShortcutTooltip-C9r-UqRj.js";
import "./useKeybindings-CCBwXi3k.js";
import "./useLogsTreeExpand-COsmkax8.js";
import { t as LogsPanel_default } from "./LogsPanel-ChSACxLK.js";
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
