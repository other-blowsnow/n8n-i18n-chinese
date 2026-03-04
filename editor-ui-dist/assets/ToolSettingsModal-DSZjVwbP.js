import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DXQZb51R.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-oGL8s0hT.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-RFJVPgry.js";
import { r as useUIStore } from "./users.store-DdXEJExY.js";
import "./ParameterInputList-Dne1h8tL.js";
import "./constants-D6tCZPKD.js";
import "./merge-CgbZmS72.js";
import "./_baseOrderBy-CJfk527n.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BBTAgZ3l.js";
import { t as Modal_default } from "./Modal-B92OYkjs.js";
import "./useClipboard-DZFpk_qt.js";
import "./executions.store-C7woX1VQ.js";
import "./assistant.store-g0pzjCqI.js";
import "./chatPanel.store-KCBWmLrv.js";
import "./RunData-84vqovsW.js";
import "./NDVEmptyState-BjtvppdF.js";
import "./externalSecrets.ee.store-DKyOUMdm.js";
import "./uniqBy-B_DSOsaw.js";
import "./usePinnedData-BtukFGDK.js";
import "./nodeIcon-Csdtqfe_.js";
import "./canvas.utils-qLqfzoX-.js";
import "./nodeCreator.store-Dd9ZpPLH.js";
import "./useCanvasOperations-Bx0_H793.js";
import "./folders.store-hUU8r3mD.js";
import "./useQuickConnect-vvxwxd04.js";
import "./CredentialIcon-CNiONAtZ.js";
import "./useDynamicCredentials-D7ZAY-Is.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DKP-TKjJ.js";
import { t as NodeIcon_default } from "./NodeIcon-e9htlXPj.js";
import "./VirtualSchema-CvY8Ad5w.js";
import "./useCalloutHelpers-D9c-f7U6.js";
import "./useTelemetryContext-BsmX1FYx.js";
import "./useRunWorkflow-BnoEI1IA.js";
import "./pushConnection.store-Bf7pamA1.js";
import "./nodeTransforms-DIgULUKn.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-voOP5Dns.js";
import "./dateFormatter-DHh8Sn1A.js";
import "./useExecutionHelpers-OTEiWX23.js";
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-D0Mr2-zL.js";
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
