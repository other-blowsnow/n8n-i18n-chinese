import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-FALBSzR9.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-DSdtxpS-.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-3WlYP6ij.js";
import { r as useUIStore } from "./users.store-DjIPN_Jo.js";
import "./ParameterInputList-C-ZtoNWb.js";
import "./constants-Du1sDgQK.js";
import "./merge-m4Q4akAk.js";
import "./_baseOrderBy-DTSNQHzv.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DnInf_Mb.js";
import { t as Modal_default } from "./Modal-C9OdnfYn.js";
import "./useClipboard-3T72jxBx.js";
import "./executions.store-A8kDneRB.js";
import "./assistant.store-Boq9AJMi.js";
import "./chatPanel.store-CfycLreN.js";
import "./RunData-D2WSy1l-.js";
import "./NDVEmptyState-C0szQBKk.js";
import "./externalSecrets.ee.store-C-LJHlp4.js";
import "./uniqBy-BQFKKiq0.js";
import "./usePinnedData-CtdGdzxg.js";
import "./nodeIcon-s5A0N13y.js";
import "./canvas.utils-C7R5h5xc.js";
import "./canvas.eventBus-BFWN62oH.js";
import "./useCanvasOperations-C_yzmH-V.js";
import "./folders.store-Cr6j-iI3.js";
import "./useQuickConnect-5E7zQ8HL.js";
import "./CredentialIcon-ChDrMrU5.js";
import "./useDynamicCredentials-Bp2rbdxL.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-CmsE9iFx.js";
import { t as NodeIcon_default } from "./NodeIcon-BOrzk_Ua.js";
import "./VirtualSchema-BgOIR7qW.js";
import "./useCalloutHelpers-C_s4H0ZM.js";
import "./useTelemetryContext-DQM4wfce.js";
import "./useRunWorkflow-DbrvcSDD.js";
import "./pushConnection.store-Bkm15hXw.js";
import "./nodeTransforms-CdFcRbYz.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Y9Bm0NJN.js";
import "./dateFormatter-DXOLFsyr.js";
import "./useExecutionHelpers-Dm4y-kwA.js";
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DJYDLQOa.js";
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
