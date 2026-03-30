import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CngBYgKR.js";
import { r as useUIStore } from "./users.store-DNsxOyr9.js";
import "./ParameterInputList-DOe0dhvs.js";
import "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import { t as Modal_default } from "./Modal-CnoaU5im.js";
import "./useClipboard-CRF4y00Y.js";
import "./executions.store-K7FpV4h9.js";
import "./assistant.store-BbX4dYdI.js";
import "./chatPanel.store-Bqd0ExjH.js";
import "./RunData-JJuR-TUd.js";
import "./NDVEmptyState-C6YNICAt.js";
import "./externalSecrets.ee.store-BEePBoyo.js";
import "./uniqBy-CYOzxWHv.js";
import "./usePinnedData-mwDbTI9q.js";
import "./nodeIcon-BECwfvAM.js";
import "./canvas.utils-DpVKjWUr.js";
import "./canvas.eventBus-IAYDCx3W.js";
import "./useCanvasOperations-CD8a88Wn.js";
import "./setupPanel.store-D030fGpD.js";
import "./nodeTransforms-CRDKuOIX.js";
import "./templateTransforms-CmlkNmBG.js";
import "./useQuickConnect-CtUYBQKT.js";
import "./CredentialIcon-C_ro4oh2.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-Bp5Gkrur.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-DGJFwOnb.js";
import { t as NodeIcon_default } from "./NodeIcon-BCEWdXjI.js";
import "./VirtualSchema-dXzIVdUH.js";
import "./useCalloutHelpers-CybvfldS.js";
import "./useTelemetryContext-4cEhMj-m.js";
import "./useRunWorkflow-CjrL2VOw.js";
import "./pushConnection.store-Cn2XGMRG.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BK7y9na5.js";
import "./dateFormatter-BGzaEmJI.js";
import "./useExecutionHelpers-BtxcfTcc.js";
import "./vue-DTCBCWxb.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-Cda4JsZJ.js";
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
