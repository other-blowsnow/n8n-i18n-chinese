import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, U as mergeModels, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, ft as useModel, it as renderList, j as createTextVNode, m as withKeys, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CXkqqBNu.js";
import { J as N8nSelect_default, Sn as N8nButton_default, Y as N8nOption_default, k as N8nNotice_default, wn as N8nIcon_default } from "./src-CUTxC6Rl.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { T as createEventBus } from "./truncate-OrFlV_nl.js";
import { O as useTelemetry, v as useToast } from "./builder.store-6Ubaqfxq.js";
import "./empty-BuGRxzl4.js";
import "./dialog-CslPNKym.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import "./constants-eN0e8XyV.js";
import "./merge-E8nEcjT4.js";
import "./_baseOrderBy-Ca3_tgno.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-zOuYGjD3.js";
import "./executions.store-B4S6yM7f.js";
import "./usePinnedData-Co00VkRJ.js";
import "./nodeCreator.store-Ci2K4r2I.js";
import "./nodeIcon-DsiEOlU0.js";
import "./useClipboard-D_i6_r95.js";
import "./useCanvasOperations-Drc8Q2xN.js";
import "./folders.store-TAyuZlWC.js";
import "./NodeIcon-c7CeRjf6.js";
import "./versions.store-v0vKVtHF.js";
import "./banners.store-DyZlLN6R.js";
import "./dataTable.store-CHAY2GSA.js";
import { t as Modal_default } from "./Modal-CxTHbH8w.js";
import "./roles.store-_wvWVvpQ.js";
import "./router-Dap_Jhd3.js";
import "./sso.store-ClELWe6m.js";
import "./insights.store-DshLG9HF.js";
import "./insights.constants-C8GITe6H.js";
import "./insights.utils-sT5n3acX.js";
import { a as MCP_DOCS_PAGE_URL, i as MCP_CONNECT_WORKFLOWS_MODAL_KEY, n as LOADING_INDICATOR_TIMEOUT, t as ELIGIBLE_WORKFLOWS_DOCS_SECTION } from "./mcp.constants-DQPD3Ntp.js";
import "./constants-DLTaaipl.js";
import "./useRecentResources-CW6odWUn.js";
import { t as useMCPStore } from "./mcp.store-JB8HIZJH.js";
import { t as WorkflowLocation_default } from "./WorkflowLocation-CVtP0MXi.js";
var MCPWorkflowsSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPWorkflowsSelect",
	props: /* @__PURE__ */ mergeModels({
		placeholder: {},
		disabled: { type: Boolean }
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["ready", "confirm"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const i18n = useI18n();
		const toast = useToast();
		const modelValue = useModel(__props, "modelValue");
		const emit = __emit;
		const mcpStore = useMCPStore();
		const isLoading = ref(false);
		const hasFetched = ref(false);
		const isDropdownVisible = ref(false);
		const selectRef = ref();
		const workflowOptions = ref([]);
		let loadingTimeoutId = null;
		const showEmptyState = computed(() => {
			return !isLoading.value && hasFetched.value && workflowOptions.value.length === 0;
		});
		async function searchWorkflows(query) {
			if (loadingTimeoutId) {
				clearTimeout(loadingTimeoutId);
				loadingTimeoutId = null;
			}
			isLoading.value = true;
			hasFetched.value = false;
			try {
				workflowOptions.value = (await mcpStore.getMcpEligibleWorkflows({
					take: 10,
					query: query ?? void 0
				}))?.data ?? [];
			} catch (e) {
				toast.showError(e, i18n.baseText("settings.mcp.connectWorkflows.error"));
			} finally {
				await waitFor(200);
				isLoading.value = false;
				hasFetched.value = true;
			}
		}
		async function waitFor(timeout) {
			await new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, timeout);
			});
		}
		function focusOnInput() {
			selectRef.value?.focusOnInput();
		}
		function removeOption(value) {
			workflowOptions.value = workflowOptions.value.filter((option) => option.id !== value);
		}
		function onVisibleChange(visible) {
			isDropdownVisible.value = visible;
		}
		function onKeydownCapture(event) {
			if (event.key === "Enter" && !isDropdownVisible.value && modelValue.value) {
				event.preventDefault();
				event.stopPropagation();
				emit("confirm");
			}
		}
		onMounted(async () => {
			await searchWorkflows();
			emit("ready");
		});
		__expose({
			focusOnInput,
			removeOption
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { onKeydownCapture: withKeys(onKeydownCapture, ["enter"]) }, [createVNode(unref(N8nSelect_default), {
				ref_key: "selectRef",
				ref: selectRef,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				"data-test-id": "mcp-workflows-select",
				placeholder: _ctx.placeholder,
				disabled: _ctx.disabled,
				loading: isLoading.value,
				filterable: true,
				remote: true,
				"remote-method": searchWorkflows,
				"popper-class": {
					[_ctx.$style["mcp-workflows-select-loading"]]: isLoading.value,
					[_ctx.$style["mcp-workflows-select-empty"]]: showEmptyState.value
				},
				onVisibleChange
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style["search-icon"]),
					icon: "search",
					size: "large"
				}, null, 8, ["class"])]),
				default: withCtx(() => [showEmptyState.value ? (openBlock(), createBlock(unref(N8nOption_default), {
					key: 0,
					value: "",
					disabled: "",
					class: normalizeClass(_ctx.$style["empty-option"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connectWorkflows.emptyState")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(workflowOptions.value, (workflow) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: workflow.id,
						value: workflow.id,
						label: workflow.name
					}, {
						default: withCtx(() => [createVNode(WorkflowLocation_default, {
							"workflow-id": workflow.id,
							"workflow-name": workflow.name,
							"home-project": workflow.homeProject,
							"parent-folder": workflow.parentFolder
						}, null, 8, [
							"workflow-id",
							"workflow-name",
							"home-project",
							"parent-folder"
						])]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"placeholder",
				"disabled",
				"loading",
				"popper-class"
			])], 32);
		};
	}
});
var MCPWorkflowsSelect_vue_vue_type_style_index_0_lang_module_default = {
	"mcp-workflows-select-loading": "_mcp-workflows-select-loading_w21ij_123",
	"mcp-workflows-select-empty": "_mcp-workflows-select-empty_w21ij_124",
	"empty-option": "_empty-option_w21ij_131"
};
var MCPWorkflowsSelect_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPWorkflowsSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPWorkflowsSelect_vue_vue_type_style_index_0_lang_module_default }]]);
var MCPConnectWorkflowsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPConnectWorkflowsModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const isSaving = ref(false);
		const selectedWorkflowId = ref();
		const selectRef = ref(null);
		const modalBus = createEventBus();
		const closedByAction = ref(false);
		const docsLink = `${MCP_DOCS_PAGE_URL}#${ELIGIBLE_WORKFLOWS_DOCS_SECTION}`;
		const canSave = computed(() => !!selectedWorkflowId.value);
		const cancel = (close) => {
			closedByAction.value = true;
			telemetry.track("User dismissed mcp workflows dialog");
			close();
		};
		async function save(close) {
			if (!selectedWorkflowId.value) return;
			isSaving.value = true;
			try {
				await props.data.onEnableMcpAccess(selectedWorkflowId.value);
				closedByAction.value = true;
				telemetry.track("User selected workflow from list", { workflowId: selectedWorkflowId.value });
				close();
			} finally {
				isSaving.value = false;
			}
		}
		function onModalClosed() {
			if (!closedByAction.value) telemetry.track("User dismissed mcp workflows dialog");
		}
		function onSelectReady() {
			selectRef.value?.focusOnInput();
		}
		function onConfirm() {
			if (!isSaving.value) save(() => modalBus.emit("close"));
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(MCP_CONNECT_WORKFLOWS_MODAL_KEY),
				title: unref(i18n).baseText("settings.mcp.connectWorkflows.modalTitle"),
				width: "600px",
				class: normalizeClass(_ctx.$style.container),
				"event-bus": unref(modalBus)
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nNotice_default), {
					"data-test-id": "mcp-connect-workflows-info-notice",
					theme: "info",
					content: unref(i18n).baseText("settings.mcp.connectWorkflows.notice", { interpolate: { docsLink } }),
					class: normalizeClass(_ctx.$style.notice)
				}, null, 8, ["content", "class"]), createVNode(MCPWorkflowsSelect_default, {
					ref_key: "selectRef",
					ref: selectRef,
					modelValue: selectedWorkflowId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedWorkflowId.value = $event),
					placeholder: unref(i18n).baseText("settings.mcp.connectWorkflows.input.placeholder"),
					disabled: isSaving.value,
					onReady: onSelectReady,
					onConfirm
				}, null, 8, [
					"modelValue",
					"placeholder",
					"disabled"
				])], 2)]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("generic.cancel"),
					size: "small",
					disabled: isSaving.value,
					type: "tertiary",
					"data-test-id": "mcp-connect-workflows-cancel-button",
					onClick: ($event) => cancel(close)
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				]), createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("settings.mcp.connectWorkflows.confirm.label"),
					loading: isSaving.value,
					disabled: !canSave.value || isSaving.value,
					type: "primary",
					"data-test-id": "mcp-connect-workflows-save-button",
					onClick: ($event) => save(close)
				}, null, 8, [
					"label",
					"loading",
					"disabled",
					"onClick"
				])], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"class",
				"event-bus"
			]);
		};
	}
});
var MCPConnectWorkflowsModal_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1omke_123",
	content: "_content_1omke_128",
	notice: "_notice_1omke_133",
	footer: "_footer_1omke_140"
};
var MCPConnectWorkflowsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPConnectWorkflowsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectWorkflowsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { MCPConnectWorkflowsModal_default as default };
