import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-6rUDOvr2.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CHN0rO29.js";
import { r as useUIStore } from "./users.store-B-dhu6_V.js";
import "./ParameterInputList-mzudlnKi.js";
import "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
import { t as Modal_default } from "./Modal-DL8Z19vb.js";
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
import "./useQuickConnect-BoaN3_fT.js";
import "./CredentialIcon-B_f9FHPR.js";
import "./useDynamicCredentials-Bg1_U8gu.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./Draggable-g24SrThV.js";
import { t as NodeIcon_default } from "./NodeIcon-CIHbs5ma.js";
import "./VirtualSchema-CT-pks9s.js";
import "./useCalloutHelpers-CF1m5qxd.js";
import "./useTelemetryContext-DUS_CI7a.js";
import "./useRunWorkflow-Cwx4WubZ.js";
import "./pushConnection.store-C4wrJ2s5.js";
import "./nodeTransforms-Btvqhitj.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-CnDLrgY4.js";
import "./dateFormatter-Be41lUNW.js";
import "./useExecutionHelpers-C4jrPUGB.js";
import "./vue-B-h9D2g4.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DhYD853-.js";
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
