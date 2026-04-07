import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DLeeJfJb.js";
import { h as N8nInlineTextEdit_default, ra as N8nButton_default } from "./src-Bqvpi8Q1.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-ChVR1_je.js";
import { r as useUIStore } from "./users.store-BBfDn-OZ.js";
import "./ParameterInputList-t6ljDbP7.js";
import "./constants-B5_ykVXd.js";
import "./merge-3v6XMMbx.js";
import "./_baseOrderBy-Bz8EJorA.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-BRg29NgG.js";
import { t as Modal_default } from "./Modal-C4tWiv6x.js";
import "./useClipboard-DNEZr-m8.js";
import "./executions.store-CCce-1Mq.js";
import "./assistant.store-00Qk07o1.js";
import "./chatPanel.store-CtbWyLUb.js";
import "./RunData-RkdQdvue.js";
import "./NDVEmptyState-Bc2jh4W1.js";
import "./externalSecrets.ee.store-gWcJFHeb.js";
import "./uniqBy-ChuoJM4g.js";
import "./usePinnedData-dLomBRXX.js";
import "./nodeIcon-ByND4dx-.js";
import "./canvas.utils-CGiL2NZU.js";
import "./canvas.eventBus-3XpLxS-w.js";
import "./useCanvasOperations-CokVTgHN.js";
import "./setupPanel.store-SOZIWxEl.js";
import "./nodeTransforms-CHFpFXHR.js";
import "./templateTransforms-CWzPtKQV.js";
import "./useQuickConnect-_wtnMIs5.js";
import "./CredentialIcon-BBioy-38.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-B7JhKYsA.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-DH9lAzIH.js";
import { t as NodeIcon_default } from "./NodeIcon-w-OfrP79.js";
import "./VirtualSchema-aD_c0af4.js";
import "./useCalloutHelpers-D1v8-4-s.js";
import "./useTelemetryContext-CIAtREVP.js";
import "./useRunWorkflow-DoIyyg_Q.js";
import "./pushConnection.store-CL67TxY0.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-GbrmpFOZ.js";
import "./dateFormatter-xop3SJMi.js";
import "./useExecutionHelpers-C1pndnDi.js";
import "./vue-DTCBCWxb.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-B3qsXFCp.js";
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
