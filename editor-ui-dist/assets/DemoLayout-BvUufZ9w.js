import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DKnT_8zF.js";
import { yi as useRoute } from "./src-D-UaKLq6.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-DLa4KoOQ.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-DnWvXsAO.js";
import "./merge-BwFl-s2u.js";
import "./_baseOrderBy-Ct8os4Zc.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-nPI-lV8D.js";
import "./useClipboard-AG9-eCG9.js";
import "./executions.store-C1vWfEpm.js";
import "./assistant.store-D-clIjwZ.js";
import "./chatPanel.store-S6bwgdkq.js";
import "./RunData-BCkKEPou.js";
import "./NDVEmptyState-PSOriYcX.js";
import "./useEnvFeatureFlag-DS2ksn3f.js";
import "./externalSecrets.ee.store-TPsc4Qby.js";
import "./uniqBy-C12mgLLs.js";
import "./usePinnedData-DdqAJLEe.js";
import "./nodeIcon-CcHQxG6q.js";
import "./canvas.utils-CehoSnOc.js";
import "./nodeCreator.store--7aPJJwB.js";
import "./useCanvasOperations-CrPWj_YE.js";
import "./folders.store-Bumnlqzv.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-eodi0mi8.js";
import "./useRunWorkflow-6_dQcMtT.js";
import "./pushConnection.store-DSCA-39n.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-XS0Cta85.js";
import "./dateFormatter-Cz7gGON7.js";
import "./useExecutionHelpers-ofC7dumT.js";
import "./KeyboardShortcutTooltip-Co_G4rI3.js";
import "./useKeybindings-Li4mNZE6.js";
import "./useLogsTreeExpand-DrqxA_9M.js";
import { t as LogsPanel_default } from "./LogsPanel-Ct2XaXqT.js";
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
