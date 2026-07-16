import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, Mt as markRaw, N as defineComponent, O as createSlots, S as computed, _ as Fragment, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as I18nT, s as useI18n } from "./src-CEUyFjtd.js";
import { Ja as N8nButton_default, Ya as N8nIcon_default, lt as N8nLink_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-61j3djBg.js";
import { t as useToast } from "./useToast-CYomjipa.js";
import { g as EXECUTION_DATA_REDACTION_DOCS_URL } from "./constants-BaNoJas_.js";
import { Kt as injectWorkflowExecutionStateStore, a as injectWorkflowDocumentStore, cn as useWorkflowsStore, fn as useExecutionDataStore, ln as createExecutionDataId } from "./workflowDocument.store-LDfI_CPs.js";
import { p as useTelemetry } from "./users.store-CHh4wCL_.js";
import { t as NDVEmptyState_default } from "./NDVEmptyState-BRFTibmT.js";
//#region ~icons/mdi/close
var _hoisted_1 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
	}, null, -1)])]);
}
var close_default = markRaw({
	name: "mdi-close",
	render
});
//#endregion
//#region src/features/execution/executions/components/RevealDataWarning.vue?vue&type=script&setup=true&lang.ts
var RevealDataWarning_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RevealDataWarning",
	props: {
		warning: {},
		logged: {},
		legitimate: {},
		policy: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("p", null, toDisplayString(__props.warning), 1),
				createBaseVNode("ul", { class: normalizeClass(_ctx.$style.list) }, [
					createBaseVNode("li", null, toDisplayString(__props.logged), 1),
					createBaseVNode("li", null, toDisplayString(__props.legitimate), 1),
					createBaseVNode("li", null, toDisplayString(__props.policy), 1)
				], 2),
				createVNode(unref(N8nLink_default), {
					to: unref(EXECUTION_DATA_REDACTION_DOCS_URL),
					size: "small",
					"new-window": "",
					"data-test-id": "reveal-data-warning-docs-link"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
					_: 1
				}, 8, ["to"])
			]);
		};
	}
});
var RevealDataWarning_vue_vue_type_style_index_0_lang_module_default = { list: "_list_8ssgn_125" };
var RevealDataWarning_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RevealDataWarning_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RevealDataWarning_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/composables/useExecutionRedaction.ts
function useExecutionRedaction() {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const message = useMessage();
	const telemetry = useTelemetry();
	const { showError } = useToast();
	const i18n = useI18n();
	const redactionInfo = computed(() => workflowExecutionStateStore.value.activeExecution?.data?.redactionInfo);
	const isRedacted = computed(() => redactionInfo.value?.isRedacted === true);
	const canReveal = computed(() => redactionInfo.value?.canReveal === true);
	const isDynamicCredentials = computed(() => redactionInfo.value?.reason === "dynamic_credentials");
	async function revealData() {
		telemetry.track("User clicked reveal data", {
			workflow_id: workflowDocumentStore.value.workflowId,
			execution_id: workflowExecutionStateStore.value.activeExecution?.id
		});
		const warningContent = h(RevealDataWarning_default, {
			warning: i18n.baseText("ndv.redacted.revealModal.warning"),
			logged: i18n.baseText("ndv.redacted.revealModal.logged"),
			legitimate: i18n.baseText("ndv.redacted.revealModal.legitimate"),
			policy: i18n.baseText("ndv.redacted.revealModal.policy")
		});
		if (await message.confirm(warningContent, i18n.baseText("ndv.redacted.revealModal.title"), {
			confirmButtonText: i18n.baseText("ndv.redacted.revealModal.confirmButton"),
			showClose: true,
			customClass: "reveal-redacted-data-modal"
		}) !== "confirm") return;
		const executionId = workflowExecutionStateStore.value.activeExecution?.id;
		if (!executionId) return;
		try {
			const revealed = await workflowsStore.fetchExecutionDataById(executionId, { redactExecutionData: false });
			if (revealed?.data) useExecutionDataStore(createExecutionDataId(executionId)).setExecutionRunData(revealed.data);
		} catch (error) {
			showError(error, i18n.baseText("ndv.redacted.revealError"));
		}
	}
	return {
		isRedacted,
		canReveal,
		isDynamicCredentials,
		revealData
	};
}
//#endregion
//#region src/features/ndv/panel/components/RedactedDataState.vue?vue&type=script&setup=true&lang.ts
var RedactedDataState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RedactedDataState",
	props: {
		title: {},
		isDynamicCredentials: { type: Boolean },
		canReveal: { type: Boolean }
	},
	emits: ["openSettings", "reveal"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(NDVEmptyState_default, {
				class: normalizeClass(_ctx.$style.root),
				title: __props.title,
				"data-test-id": "ndv-data-redacted"
			}, createSlots({
				icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "shredder",
					size: "xxlarge",
					color: "text-light"
				})]),
				default: withCtx(() => [
					__props.isDynamicCredentials ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.redacted.dynamicCredentials.description")), 1)], 64)) : __props.canReveal ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createTextVNode(toDisplayString(unref(i18n).baseText("ndv.redacted.description.sentence1")), 1),
						_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
						createVNode(unref(I18nT), {
							keypath: "ndv.redacted.description.sentence2",
							tag: "span",
							scope: "global"
						}, {
							link: withCtx(() => [createVNode(unref(N8nLink_default), {
								size: "medium",
								style: { "white-space": "nowrap" },
								onClick: _cache[0] || (_cache[0] = ($event) => emit("openSettings"))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.redacted.description.link")), 1)]),
								_: 1
							})]),
							_: 1
						})
					], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.redacted.noPermission.description")), 1)], 64)),
					_cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
					createVNode(unref(N8nLink_default), {
						to: unref(EXECUTION_DATA_REDACTION_DOCS_URL),
						size: "medium",
						"new-window": "",
						"data-test-id": "redacted-data-docs-link"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
						_: 1
					}, 8, ["to"])
				]),
				_: 2
			}, [__props.canReveal ? {
				name: "actions",
				fn: withCtx(() => [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("ndv.redacted.revealButton"),
					variant: "outline",
					size: "medium",
					"data-test-id": "ndv-reveal-redacted-data",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("reveal"))
				}, null, 8, ["label"])]),
				key: "0"
			} : void 0]), 1032, ["class", "title"]);
		};
	}
});
var RedactedDataState_vue_vue_type_style_index_0_lang_module_default = { root: "_root_l9v7v_2" };
var RedactedDataState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RedactedDataState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RedactedDataState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useExecutionRedaction as n, close_default as r, RedactedDataState_default as t };
