import { C as computed, Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-CyBAZEDf.js";
import { Hn as N8nButton_default, Vn as N8nText_default, xt as N8nIconButton_default, zn as N8nHeading_default } from "./src-CKNGGC1H.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus } from "./truncate-CZFeThpb.js";
import "./icon-521DvC2D.js";
import "./overlay-BNHSj7rn.js";
import "./empty-C2SrrehM.js";
import { t as useMessage } from "./useMessage-C56y91s7.js";
import "./dialog-YPIfvJn3.js";
import { Ht as useCredentialsStore } from "./useTelemetry-DfTC69TL.js";
import { t as useToast } from "./useToast-D5n7Pl1L.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import { $o as MODAL_CONFIRM, Qr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-DrLxPWeP.js";
import "./merge-CKju1Aqe.js";
import "./_baseOrderBy-BFxQ1EZq.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-BiLybJE6.js";
import "./useExternalHooks-CSQJVpG7.js";
import "./useStyles-DhM0cpS7.js";
import { t as Modal_default } from "./Modal-ffdO_Z6j.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DV5y8eJm.js";
import { f as providerDisplayNames } from "./constants-D2fYduVh.js";
import { t as CredentialPicker_default } from "./CredentialPicker-DQ3Z-qp0.js";
var CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const message = useMessage();
		const toast = useToast();
		const credentialsStore = useCredentialsStore();
		const modalBus = ref(createEventBus());
		const selectedCredentialId = ref(props.data.initialValue);
		const credentialType = computed(() => PROVIDER_CREDENTIAL_TYPE_MAP[props.data.provider]);
		const selectedCredential = computed(() => {
			if (!selectedCredentialId.value) return null;
			return credentialsStore.getCredentialById(selectedCredentialId.value);
		});
		function onCredentialSelect(credentialId) {
			selectedCredentialId.value = credentialId;
		}
		function onCredentialDeselect() {
			selectedCredentialId.value = null;
		}
		async function onDeleteCredential() {
			if (!selectedCredential.value) return;
			const credentialIdToDelete = selectedCredential.value.id;
			if (await message.confirm(i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", { interpolate: { savedCredentialName: selectedCredential.value.name } }), i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), { confirmButtonText: i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText") }) !== "confirm") return;
			try {
				await credentialsStore.deleteCredential({ id: credentialIdToDelete });
				selectedCredentialId.value = null;
				if (credentialIdToDelete === props.data.initialValue) props.data.onSelect(props.data.provider, null);
				modalBus.value.emit("close");
			} catch (error) {
				toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.deleteCredential.title"));
			}
		}
		function onConfirm() {
			if (selectedCredentialId.value) {
				props.data.onSelect(props.data.provider, selectedCredentialId.value);
				modalBus.value.emit("close");
			}
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: _ctx.modalName,
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.data.provider],
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
					size: "medium",
					tag: "h2",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.title", { interpolate: { provider: unref(providerDisplayNames)[_ctx.data.provider] } })), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.chooseOrCreate", { interpolate: { provider: unref(providerDisplayNames)[_ctx.data.provider] } })), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [createVNode(CredentialPicker_default, {
					class: normalizeClass(_ctx.$style.credentialPicker),
					"app-name": unref(providerDisplayNames)[_ctx.data.provider],
					"credential-type": credentialType.value,
					"selected-credential-id": selectedCredentialId.value,
					"hide-create-new": true,
					onCredentialSelected: onCredentialSelect,
					onCredentialDeselected: onCredentialDeselect
				}, null, 8, [
					"class",
					"app-name",
					"credential-type",
					"selected-credential-id"
				]), selectedCredentialId.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					"native-type": "button",
					title: unref(i18n).baseText("chatHub.credentials.selector.deleteButton"),
					icon: "trash-2",
					"icon-size": "large",
					type: "secondary",
					onClick: onDeleteCredential
				}, null, 8, ["title"])) : createCommentVNode("", true)], 2)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: !selectedCredentialId.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1edrp_123",
	footer: "_footer_1edrp_130",
	header: "_header_1edrp_138",
	icon: "_icon_1edrp_144",
	credentialContainer: "_credentialContainer_1edrp_149",
	credentialPicker: "_credentialPicker_1edrp_156"
};
var CredentialSelectorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialSelectorModal_default as default };
