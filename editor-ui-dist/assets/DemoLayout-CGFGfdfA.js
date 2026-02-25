import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-D28pXLlm.js";
import { Ci as useRoute } from "./src-6rUDOvr2.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-B-dhu6_V.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
import "./useClipboard-Db8b-eMX.js";
import "./executions.store-BiWDbfM9.js";
import "./assistant.store-CuYXAOOZ.js";
import "./chatPanel.store-CHKHydEf.js";
import "./RunData-CXIx10qd.js";
import "./NDVEmptyState-Bvu_kVPF.js";
import "./useEnvFeatureFlag-Ck7sPrwZ.js";
import "./externalSecrets.ee.store-W6cXMkVP.js";
import "./uniqBy-SR6modH5.js";
import "./usePinnedData-qbl5COxT.js";
import "./nodeIcon-DLD1xNLV.js";
import "./canvas.utils-DQc-Akl3.js";
import "./nodeCreator.store-Cx36G2NX.js";
import "./useCanvasOperations-Eb4g1ICO.js";
import "./folders.store-BSLXys7n.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-CIHbs5ma.js";
import "./useRunWorkflow-Cwx4WubZ.js";
import "./pushConnection.store-C4wrJ2s5.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-CnDLrgY4.js";
import "./dateFormatter-Be41lUNW.js";
import "./useExecutionHelpers-C4jrPUGB.js";
import "./KeyboardShortcutTooltip-BGeays24.js";
import "./useKeybindings-VVsUcxhO.js";
import "./useLogsTreeExpand-CbMlZc5_.js";
import { t as LogsPanel_default } from "./LogsPanel-cHIFKYb4.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-SsMdoGx0.js";
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
