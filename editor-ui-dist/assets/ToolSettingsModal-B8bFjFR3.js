import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B9vJNOCd.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-DiEfDBW_.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-vgkOv04g.js";
import { r as useUIStore } from "./users.store-CeIiqJPu.js";
import "./ParameterInputList-BnUqWIui.js";
import "./constants-BDDzQuZL.js";
import "./merge-CZQEi9PS.js";
import "./_baseOrderBy-C5llb9iP.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CC7G435l.js";
import { t as Modal_default } from "./Modal-B8VLpDqo.js";
import "./useClipboard-DTMDUgxK.js";
import "./executions.store-BMPiLOvN.js";
import "./assistant.store-CFrcACMV.js";
import "./chatPanel.store-D6z989iO.js";
import "./RunData-CmHtl5qv.js";
import "./NDVEmptyState-jHkX89aA.js";
import "./externalSecrets.ee.store-DtsdHH54.js";
import "./uniqBy-3Jc6dR-p.js";
import "./usePinnedData-D2WIv-jQ.js";
import "./nodeIcon-DzoQ5His.js";
import "./canvas.utils-BvHrBpk4.js";
import "./nodeCreator.store--jVl9OnG.js";
import "./useCanvasOperations-6BPR1ILX.js";
import "./folders.store-Bfs_o1tT.js";
import "./useQuickConnect-CY-hJeuw.js";
import "./CredentialIcon-pIOmakIA.js";
import "./useDynamicCredentials-B2QriAoR.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-BwJ-JNV5.js";
import { t as NodeIcon_default } from "./NodeIcon-DV9xFvYB.js";
import "./VirtualSchema-RJH2y_L1.js";
import "./useCalloutHelpers-BdKNkZvc.js";
import "./useTelemetryContext-Bh85kY8l.js";
import "./useRunWorkflow-7le6oLrp.js";
import "./pushConnection.store-BJJMLsvy.js";
import "./nodeTransforms-D8Di-pgT.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Cd320-6T.js";
import "./dateFormatter-Cxh7Pkii.js";
import "./useExecutionHelpers-B-pLgO3L.js";
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DdRWaKx6.js";
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
