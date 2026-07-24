import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { Ct as useRoute, St as onBeforeRouteLeave, ro as N8nIcon_default, wt as useRouter } from "./src-bSQwfFcX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { hi as VIEWS } from "./constants-CSBjw1Ht.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BaE0TfJz.js";
import { t as useAgentReturnContextStore } from "./agentReturnContext.store-DYumNDTP.js";
//#region src/features/agents/components/BackToWorkflowBanner.vue?vue&type=script&setup=true&lang.ts
var BackToWorkflowBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BackToWorkflowBanner",
	emits: ["back"],
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.banner),
				"data-test-id": "agent-back-to-workflow",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("back"))
			}, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-left",
				size: "large"
			}), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agents.backToWorkflow")), 3)], 2);
		};
	}
});
var BackToWorkflowBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner: "_banner_1rzmt_2",
	label: "_label_1rzmt_32"
};
var BackToWorkflowBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BackToWorkflowBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BackToWorkflowBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentView.vue?vue&type=script&setup=true&lang.ts
var AgentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentView",
	setup(__props) {
		const documentTitle = useDocumentTitle();
		const locale = useI18n();
		const route = useRoute();
		const router = useRouter();
		const returnContext = useAgentReturnContextStore();
		const routeAgentId = computed(() => {
			const id = route.params.agentId;
			return Array.isArray(id) ? id[0] : id;
		});
		const showBackBanner = computed(() => !!returnContext.context && returnContext.context.agentId === routeAgentId.value);
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		onBeforeRouteLeave(() => {
			returnContext.clear();
		});
		async function onBackToWorkflow() {
			const ctx = returnContext.context;
			if (!ctx) return;
			returnContext.clear();
			await router.push({
				name: VIEWS.WORKFLOW,
				params: {
					workflowId: ctx.workflowId,
					...ctx.nodeId ? { nodeId: ctx.nodeId } : {}
				}
			});
		}
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.agentView) }, [showBackBanner.value ? (openBlock(), createBlock(BackToWorkflowBanner_default, {
				key: 0,
				onBack: onBackToWorkflow
			})) : createCommentVNode("", true), createVNode(_component_RouterView)], 2);
		};
	}
});
var AgentView_vue_vue_type_style_index_0_lang_module_default = { agentView: "_agentView_1rlmu_2" };
var AgentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentView_default as default };
