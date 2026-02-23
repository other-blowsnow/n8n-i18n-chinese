import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Bq6g7eJk.js";
import { Ci as useRoute } from "./src-Vlm7Mxf-.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-BwYRQvCY.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-RiJkz47J.js";
import "./merge-CLls_idn.js";
import "./_baseOrderBy-BE23B-S3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BghtiK4X.js";
import "./useClipboard-BYpnCAGs.js";
import "./executions.store-CrIhMc4b.js";
import "./assistant.store-BTYElwjc.js";
import "./chatPanel.store-yTWZP9H2.js";
import "./RunData-DoLiVaik.js";
import "./NDVEmptyState-H24YyLF4.js";
import "./useEnvFeatureFlag-B-aCettH.js";
import "./externalSecrets.ee.store-B6OogwlK.js";
import "./uniqBy-MGaViHTj.js";
import "./usePinnedData-BH7clGFt.js";
import "./nodeIcon-BqHYqRCI.js";
import "./canvas.utils-BI57Gahu.js";
import "./nodeCreator.store-tiiu6Zuw.js";
import "./useCanvasOperations-NgUCm3TB.js";
import "./folders.store-BY8Vuq5D.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-BdHBfPBt.js";
import "./useRunWorkflow-juGxUJAw.js";
import "./pushConnection.store-DEbstjnC.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-NTtbhQMS.js";
import "./dateFormatter-DCnAq71P.js";
import "./useExecutionHelpers-BOOTTweM.js";
import "./KeyboardShortcutTooltip-BU16z1Q2.js";
import "./useKeybindings-BrHKmGZk.js";
import "./useLogsTreeExpand-C5r2tV0R.js";
import { t as LogsPanel_default } from "./LogsPanel-DQmueNJk.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-DE9WHFOF.js";
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
