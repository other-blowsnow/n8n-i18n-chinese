import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-Dm0zgpAe.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-DpXAQiaT.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DKPoZMum.js";
import { r as useUIStore } from "./users.store-KDduniYy.js";
import "./ParameterInputList-BjP6qemy.js";
import "./constants-BFYSGQP4.js";
import "./merge-B0uVzL8N.js";
import "./_baseOrderBy-CjnCEHwl.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DBvy4NsP.js";
import { t as Modal_default } from "./Modal-DS2IP3Wk.js";
import "./useClipboard-kLXRilEV.js";
import "./executions.store-ByzTH5-P.js";
import "./assistant.store-C0mp11I1.js";
import "./chatPanel.store-BJNCJjNA.js";
import "./RunData-Cyd2mcBm.js";
import "./NDVEmptyState-CAVpRQIg.js";
import "./externalSecrets.ee.store-QSzeAebe.js";
import "./uniqBy-oibyPKTc.js";
import "./usePinnedData-B4TDiiKQ.js";
import "./nodeIcon-BKSh_82X.js";
import "./canvas.utils-BpFkmltQ.js";
import "./canvas.eventBus-IAuUOwZr.js";
import "./useCanvasOperations-DkB_TBZ3.js";
import "./useQuickConnect-4dZghdlT.js";
import "./CredentialIcon-Bw1bGZDR.js";
import "./useDynamicCredentials-BJ2deOke.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-CPLY-rD1.js";
import { t as NodeIcon_default } from "./NodeIcon-DaDADg-c.js";
import "./VirtualSchema-BBsTyxyL.js";
import "./useCalloutHelpers-DCrL0mMU.js";
import "./useTelemetryContext-CH2_um8_.js";
import "./useRunWorkflow-P8Wyk4xJ.js";
import "./pushConnection.store-BDq5Y2m6.js";
import "./nodeTransforms-CFcPHPkF.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-BFVKx2xB.js";
import "./dateFormatter-B_4Ykken.js";
import "./useExecutionHelpers-xnerzRKT.js";
import "./vue-C5mU5rBa.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CMh0BYmb.js";
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
