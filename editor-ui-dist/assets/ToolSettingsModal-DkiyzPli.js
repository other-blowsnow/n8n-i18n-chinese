import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-DxtWl4Bj.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-r-l70KdD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CZGS7X5w.js";
import { r as useUIStore } from "./users.store-BVdi4rdu.js";
import "./ParameterInputList-DqVChmhi.js";
import "./constants-O8ayp6Ax.js";
import "./merge-D1NMaQVD.js";
import "./_baseOrderBy-kQRaOW6n.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B05cbbQh.js";
import { t as Modal_default } from "./Modal-YT5RyqWW.js";
import "./useClipboard-BJgl3cCM.js";
import "./executions.store-u9fem2YL.js";
import "./assistant.store-BF-wrHSq.js";
import "./chatPanel.store-D1_fWN0p.js";
import "./RunData-CWHiIcfA.js";
import "./NDVEmptyState-CSXqK1bm.js";
import "./externalSecrets.ee.store-CryNl5Fx.js";
import "./uniqBy-CsPtcSMm.js";
import "./usePinnedData-BbPFe05Y.js";
import "./nodeIcon-BIiILicj.js";
import "./canvas.utils-CEtvFiQV.js";
import "./canvas.eventBus-CHoGJAGK.js";
import "./useCanvasOperations-DNS84kDN.js";
import "./useQuickConnect-BERDxgdn.js";
import "./CredentialIcon-v962KpH2.js";
import "./useDynamicCredentials-DFRSAlMH.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-BE6g-CLv.js";
import { t as NodeIcon_default } from "./NodeIcon-DcZBOray.js";
import "./VirtualSchema-COBO1XOA.js";
import "./useCalloutHelpers-DG55C_bp.js";
import "./useTelemetryContext-DgbFXhqe.js";
import "./useRunWorkflow-CDmYf51o.js";
import "./pushConnection.store-C65qYXYL.js";
import "./nodeTransforms-BJ3-mOcw.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-DCOmxIKb.js";
import "./dateFormatter-CdCv3sVH.js";
import "./useExecutionHelpers-BQ81wHnq.js";
import "./vue-C5mU5rBa.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-Di06oKh3.js";
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
