import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Bq6g7eJk.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-Vlm7Mxf-.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-BpFPErDn.js";
import { r as useUIStore } from "./users.store-BwYRQvCY.js";
import "./ParameterInputList-CMifcPXg.js";
import "./constants-RiJkz47J.js";
import "./merge-CLls_idn.js";
import "./_baseOrderBy-BE23B-S3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BghtiK4X.js";
import { t as Modal_default } from "./Modal-C-bnsegV.js";
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
import "./useQuickConnect-ksDLeUyB.js";
import "./CredentialIcon-D3LfD1As.js";
import "./useDynamicCredentials-DoTPXWtP.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./Draggable-BEBeE6ai.js";
import { t as NodeIcon_default } from "./NodeIcon-BdHBfPBt.js";
import "./VirtualSchema-BeuLcrBR.js";
import "./useCalloutHelpers-BjdGJ4pa.js";
import "./useTelemetryContext-CYrdY3-2.js";
import "./useRunWorkflow-juGxUJAw.js";
import "./pushConnection.store-DEbstjnC.js";
import "./nodeTransforms-D3mSzcq-.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-NTtbhQMS.js";
import "./dateFormatter-DCnAq71P.js";
import "./useExecutionHelpers-BOOTTweM.js";
import "./vue-B-h9D2g4.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-BN_e93Du.js";
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
