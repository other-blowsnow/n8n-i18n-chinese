import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-65UNw25j.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-BHNvvSeY.js";
import { r as useUIStore } from "./users.store-buY8IFeq.js";
import "./ParameterInputList-B0ozRU8e.js";
import "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import { t as Modal_default } from "./Modal-Bi3rB-0H.js";
import "./useClipboard-DUb9bZTD.js";
import "./executions.store-CZ7IudtY.js";
import "./assistant.store-CWYwgkmr.js";
import "./chatPanel.store-DMGDdE_b.js";
import "./RunData-NQo5-mYA.js";
import "./NDVEmptyState-DZmU4yg5.js";
import "./externalSecrets.ee.store-llIAkYfQ.js";
import "./uniqBy-Dj098wSc.js";
import "./usePinnedData-C8gnvP4e.js";
import "./nodeIcon-CD_sOlVS.js";
import "./canvas.utils-DMO0Z6xe.js";
import "./canvas.eventBus-C8w9bqJ2.js";
import "./useCanvasOperations-D5bkcPXX.js";
import "./setupPanel.store-CF2im1BD.js";
import "./nodeTransforms-DEpSiFLd.js";
import "./templateTransforms-B0pb7wSN.js";
import "./useQuickConnect-tQYKZnYl.js";
import "./CredentialIcon-BcmNkOZQ.js";
import "./useDynamicCredentials-BuIRciS5.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-DGhmGwc9.js";
import { t as NodeIcon_default } from "./NodeIcon-Bp2F1h7o.js";
import "./VirtualSchema-Bu4PUQZ1.js";
import "./useCalloutHelpers-B55p9wzV.js";
import "./useTelemetryContext-xzG23G1S.js";
import "./useRunWorkflow-_sIY4q0C.js";
import "./pushConnection.store-f62eviF-.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-DPXpfSOV.js";
import "./dateFormatter-HakUyV2l.js";
import "./useExecutionHelpers-CVHk79ok.js";
import "./vue-K5kPXnPp.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CCVaMGUC.js";
var ToolSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const contentRef = ref(null);
		const isValid = ref(false);
		const nodeName = ref(props.data.node?.name ?? "");
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleConfirm() {
			const currentNode = contentRef.value?.node;
			if (!currentNode) return;
			props.data.onConfirm(currentNode);
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		return (_ctx, _cache) => {
			return __props.data.node ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				name: __props.modalName,
				width: "780px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [contentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": contentRef.value.nodeTypeDescription,
					size: 24,
					circle: true,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": nodeName.value,
					"max-width": 400,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleChangeName
				}, null, 8, ["model-value", "class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createVNode(ToolSettingsContent_default, {
					ref_key: "contentRef",
					ref: contentRef,
					"initial-node": __props.data.node,
					"existing-tool-names": __props.data.existingToolNames,
					"onUpdate:valid": handleValidUpdate,
					"onUpdate:nodeName": handleNodeNameUpdate
				}, null, 8, ["initial-node", "existing-tool-names"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value,
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_148s1_125",
	icon: "_icon_148s1_132",
	title: "_title_148s1_137",
	footer: "_footer_148s1_146",
	contentWrapper: "_contentWrapper_148s1_152"
};
var ToolSettingsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolSettingsModal_default as default };
