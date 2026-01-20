import { Cn as toDisplayString, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import { En as N8nHeading_default, On as N8nText_default, kn as N8nButton_default, q as N8nFormInput_default } from "./src-Ca6p-F4w.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import { T as createEventBus } from "./truncate-D24O8Gpt.js";
import "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { Jr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import { t as Modal_default } from "./Modal-Cj637Btj.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DSNX9u5m.js";
import { i as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, y as providerDisplayNames } from "./constants-Bgby4me8.js";
var ModelByIdSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ModelByIdSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const modalBus = ref(createEventBus());
		const modelId = ref(props.data.initialValue);
		const inputRef = ref(null);
		const i18n = useI18n();
		onMounted(() => {
			setTimeout(() => {
				inputRef.value?.inputRef?.select();
				inputRef.value?.inputRef?.focus();
			});
		});
		function onConfirm() {
			if (modelId.value) {
				props.data.onSelect(props.data.provider, modelId.value);
				modalBus.value.emit("close");
			}
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY),
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[__props.data.provider],
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
					size: "medium",
					tag: "h2",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.title", { interpolate: { provider: unref(providerDisplayNames)[__props.data.provider] } })), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.choose")), 1)]),
					_: 1
				}), createVNode(unref(N8nFormInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					modelValue: modelId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelId.value = $event),
					name: "model",
					label: "",
					"max-length": "64",
					"focus-initially": "",
					onEnter: onConfirm
				}, null, 8, ["modelValue"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: !modelId.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var ModelByIdSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_u2ob0_123",
	footer: "_footer_u2ob0_130",
	header: "_header_u2ob0_137",
	icon: "_icon_u2ob0_143"
};
var ModelByIdSelectorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ModelByIdSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelByIdSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ModelByIdSelectorModal_default as default };
