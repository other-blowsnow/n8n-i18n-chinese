import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { At as createEventBus, Qi as N8nButton_default, Yi as N8nHeading_default, Zi as N8nText_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { pr as useTelemetry } from "./users.store-DNsxOyr9.js";
import "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import { t as Modal_default } from "./Modal-CnoaU5im.js";
import { t as CredentialIcon_default } from "./CredentialIcon-C_ro4oh2.js";
import { t as CredentialPicker_default } from "./CredentialPicker-D8WMWQG2.js";
var CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const modalBus = ref(createEventBus());
		const selectedCredentialId = ref(props.data.initialValue);
		const displayName = computed(() => props.data.displayName);
		function onCredentialSelect(credentialId) {
			selectedCredentialId.value = credentialId;
		}
		function onCredentialDeselect() {
			selectedCredentialId.value = null;
		}
		function onDeleteCredential(credentialId) {
			if (!selectedCredentialId.value || credentialId !== selectedCredentialId.value) return;
			selectedCredentialId.value = null;
			if (credentialId === props.data.initialValue) props.data.onSelect(null);
		}
		function onCredentialModalOpened(credentialId) {
			telemetry.track("User opened Credential modal", {
				credential_type: props.data.credentialType,
				source: "chat",
				new_credential: !credentialId,
				workflow_id: null
			});
		}
		function onConfirm() {
			if (selectedCredentialId.value) {
				props.data.onSelect(selectedCredentialId.value);
				modalBus.value.emit("close");
			}
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": __props.data.credentialType,
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
					size: "medium",
					tag: "h2",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.title", { interpolate: { provider: displayName.value } })), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.chooseOrCreate", { interpolate: { provider: displayName.value } })), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [createVNode(CredentialPicker_default, {
					class: normalizeClass(_ctx.$style.credentialPicker),
					"app-name": displayName.value,
					"credential-type": __props.data.credentialType,
					"selected-credential-id": selectedCredentialId.value,
					"show-delete": true,
					"hide-create-new": true,
					onCredentialSelected: onCredentialSelect,
					onCredentialDeselected: onCredentialDeselect,
					onCredentialDeleted: onDeleteCredential,
					onCredentialModalOpened
				}, null, 8, [
					"class",
					"app-name",
					"credential-type",
					"selected-credential-id"
				])], 2)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
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
	content: "_content_18zaf_125",
	footer: "_footer_18zaf_132",
	header: "_header_18zaf_140",
	icon: "_icon_18zaf_146",
	credentialContainer: "_credentialContainer_18zaf_151",
	credentialPicker: "_credentialPicker_18zaf_158"
};
var CredentialSelectorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialSelectorModal_default as default };
