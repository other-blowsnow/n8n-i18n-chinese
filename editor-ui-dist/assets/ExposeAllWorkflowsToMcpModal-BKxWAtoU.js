import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, X as onMounted, bt as withCtx, j as createVNode, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { Ft as createEventBus, no as N8nButton_default, to as N8nText_default } from "./src-bSQwfFcX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-B3_HjF9W.js";
import { t as Modal_default } from "./Modal-CdcPE3DB.js";
import { t as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY } from "./constants-BaS2AXfY.js";
import { t as useMCPStore } from "./mcp.store-BkN8AGMo.js";
import { t as useExposeAllWorkflowsToMcpStore } from "./exposeAllWorkflowsToMcp.store-BVTGGH0L.js";
//#region src/experiments/exposeAllWorkflowsToMcp/components/ExposeAllWorkflowsToMcpModal.vue?vue&type=script&setup=true&lang.ts
var ExposeAllWorkflowsToMcpModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExposeAllWorkflowsToMcpModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const mcpStore = useMCPStore();
		const experimentStore = useExposeAllWorkflowsToMcpStore();
		const modalBus = createEventBus();
		const isSaving = ref(false);
		const closedByAction = ref(false);
		async function onExposeAll(close) {
			isSaving.value = true;
			try {
				const response = await mcpStore.toggleWorkflowsMcpAccess({ allWorkflows: true }, true);
				closedByAction.value = true;
				experimentStore.trackConfirmed();
				toast.showMessage({
					type: "success",
					title: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.success.title"),
					message: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.success.message", {
						adjustToNumber: response.updatedCount,
						interpolate: { count: String(response.updatedCount) }
					})
				});
				await props.data.onExposed?.();
				close();
			} catch (error) {
				toast.showError(error, i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.error.title"));
			} finally {
				isSaving.value = false;
			}
		}
		function onNotNow(close) {
			closedByAction.value = true;
			experimentStore.trackDeclined();
			close();
		}
		function onModalClosed() {
			if (!closedByAction.value) experimentStore.trackDismissed();
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY),
				title: unref(i18n).baseText("experiments.exposeAllWorkflowsToMcp.modal.title"),
				width: "480px",
				"event-bus": unref(modalBus),
				closeOnClickModal: false
			}, {
				content: withCtx(() => [createVNode(unref(N8nText_default), {
					color: "text-base",
					"data-test-id": "expose-all-workflows-mcp-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.exposeAllWorkflowsToMcp.modal.description")), 1)]),
					_: 1
				})]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					label: unref(i18n).baseText("experiments.exposeAllWorkflowsToMcp.modal.notNow"),
					disabled: isSaving.value,
					"data-test-id": "expose-all-workflows-mcp-not-now-button",
					onClick: ($event) => onNotNow(close)
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: unref(i18n).baseText("experiments.exposeAllWorkflowsToMcp.modal.confirm"),
					loading: isSaving.value,
					"data-test-id": "expose-all-workflows-mcp-confirm-button",
					onClick: ($event) => onExposeAll(close)
				}, null, 8, [
					"label",
					"loading",
					"onClick"
				])], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
var ExposeAllWorkflowsToMcpModal_vue_vue_type_style_index_0_lang_module_default = { footer: "_footer_7lneu_125" };
var ExposeAllWorkflowsToMcpModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExposeAllWorkflowsToMcpModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExposeAllWorkflowsToMcpModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ExposeAllWorkflowsToMcpModal_default as default };
