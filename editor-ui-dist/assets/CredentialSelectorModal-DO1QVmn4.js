import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-mhYEJTeq.js";
import { G as N8nSelect_default, K as N8nOption_default, Kn as N8nText_default, Wn as N8nHeading_default, qn as N8nButton_default } from "./src-BDzAa1Y3.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus } from "./truncate-CgT6TTic.js";
import "./icon-DD6uvFxo.js";
import "./overlay-CV0TQaLk.js";
import "./empty-C2SrrehM.js";
import "./dialog-BZ51cVF9.js";
import { Bt as useCredentialsStore } from "./useTelemetry-CX4Z1YmY.js";
import "./sanitize-html-CWrjF493.js";
import "./path-browserify-CcVVPqSM.js";
import { Zr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-CuU0cMc8.js";
import "./merge-CUyfvEnu.js";
import "./_baseOrderBy-CJFus1_r.js";
import "./dateformat-CaoB5ai3.js";
import "./useDebounce-CfE59s7M.js";
import "./useStyles-CEyEF3kW.js";
import { t as Modal_default } from "./Modal-CJtdZ1Wd.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CQYfUFHx.js";
import { f as providerDisplayNames } from "./constants-z4xKkxbS.js";
var CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const modalBus = ref(createEventBus());
		const selectedCredentialId = ref(props.data.initialValue);
		const availableCredentials = computed(() => {
			return credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[props.data.provider]);
		});
		function onCredentialSelect(credentialId) {
			selectedCredentialId.value = credentialId;
		}
		function onConfirm() {
			if (selectedCredentialId.value) {
				props.data.onSelect(props.data.provider, selectedCredentialId.value);
				modalBus.value.emit("close");
			}
		}
		function onCreateNew() {
			props.data.onCreateNew(props.data.provider);
			modalBus.value.emit("close");
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
				}), createVNode(unref(N8nSelect_default), {
					"model-value": selectedCredentialId.value,
					size: "large",
					placeholder: "Select credential...",
					"onUpdate:modelValue": onCredentialSelect
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableCredentials.value, (credential) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: credential.id,
							value: credential.id,
							label: credential.name
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, ["model-value"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					onClick: onCreateNew
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.createNew")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
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
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1ja21_123",
	footer: "_footer_1ja21_130",
	footerRight: "_footerRight_1ja21_137",
	header: "_header_1ja21_142",
	icon: "_icon_1ja21_148"
};
var CredentialSelectorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialSelectorModal_default as default };
