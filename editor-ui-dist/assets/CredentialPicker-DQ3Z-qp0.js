import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-CyBAZEDf.js";
import { G as N8nSelect_default, Hn as N8nButton_default, K as N8nOption_default, Vn as N8nText_default, Wn as N8nIcon_default, xt as N8nIconButton_default } from "./src-CKNGGC1H.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Do as CREDENTIAL_EDIT_MODAL_KEY, Fi as useUIStore, Ht as useCredentialsStore, Pi as listenForModalChanges, Vt as listenForCredentialChanges } from "./useTelemetry-DfTC69TL.js";
import { g as assert } from "./_baseOrderBy-BFxQ1EZq.js";
var CredentialsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialsDropdown",
	props: {
		credentialOptions: {},
		selectedCredentialId: {}
	},
	emits: ["credentialSelected", "newCredential"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectRefs = ref(null);
		const NEW_CREDENTIALS_TEXT = i18n.baseText("nodeCredentials.createNew");
		const onCredentialSelected = (credentialId) => {
			emit("credentialSelected", credentialId);
		};
		const onCreateNewCredential = async () => {
			selectRefs.value?.blur();
			await nextTick();
			emit("newCredential");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nSelect_default), {
				ref_key: "selectRefs",
				ref: selectRefs,
				size: "small",
				"model-value": props.selectedCredentialId,
				"onUpdate:modelValue": onCredentialSelected,
				"popper-class": _ctx.$style.selectPopper
			}, {
				empty: withCtx(() => _cache[1] || (_cache[1] = [])),
				footer: withCtx(() => [createBaseVNode("button", {
					type: "button",
					"data-test-id": "node-credentials-select-item-new",
					class: normalizeClass([_ctx.$style.newCredential]),
					onClick: _cache[0] || (_cache[0] = ($event) => onCreateNewCredential())
				}, [createVNode(unref(N8nIcon_default), {
					size: "xsmall",
					icon: "plus"
				}), createTextVNode(" " + toDisplayString(unref(NEW_CREDENTIALS_TEXT)), 1)], 2)]),
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.credentialOptions, (item) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: item.id,
						"data-test-id": `node-credentials-select-item-${item.id}`,
						label: item.name,
						value: item.id
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.credentialOption, "mt-2xs mb-2xs"]) }, [createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.typeDisplayName), 1)]),
							_: 2
						}, 1024)], 2)]),
						_: 2
					}, 1032, [
						"data-test-id",
						"label",
						"value"
					]);
				}), 128))]),
				_: 1
			}, 8, ["model-value", "popper-class"]);
		};
	}
});
var CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	selectPopper: "_selectPopper_1pxbf_123",
	newCredential: "_newCredential_1pxbf_126",
	credentialOption: "_credentialOption_1pxbf_135"
};
var CredentialsDropdown_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
var CredentialPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialPicker",
	props: {
		appName: {},
		credentialType: {},
		selectedCredentialId: {},
		hideCreateNew: { type: Boolean }
	},
	emits: [
		"credentialSelected",
		"credentialDeselected",
		"credentialModalOpened"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const i18n = useI18n();
		const wasModalOpenedFromHere = ref(false);
		const availableCredentials = computed(() => {
			return credentialsStore.getCredentialsByType(props.credentialType).filter((credential) => credential.homeProject?.type === "personal");
		});
		const credentialOptions = computed(() => {
			return availableCredentials.value.map((credential) => ({
				id: credential.id,
				name: credential.name,
				typeDisplayName: credentialsStore.getCredentialTypeByName(credential.type)?.displayName
			}));
		});
		const onCredentialSelected = (credentialId) => {
			emit("credentialSelected", credentialId);
		};
		const createNewCredential = () => {
			uiStore.openNewCredential(props.credentialType, true);
			wasModalOpenedFromHere.value = true;
			emit("credentialModalOpened");
		};
		const editCredential = () => {
			assert(props.selectedCredentialId);
			uiStore.openExistingCredential(props.selectedCredentialId);
			wasModalOpenedFromHere.value = true;
			emit("credentialModalOpened");
		};
		listenForCredentialChanges({
			store: credentialsStore,
			onCredentialCreated: (credential) => {
				if (!wasModalOpenedFromHere.value) return;
				emit("credentialSelected", credential.id);
			},
			onCredentialDeleted: (deletedCredentialId) => {
				if (!wasModalOpenedFromHere.value) return;
				if (deletedCredentialId !== props.selectedCredentialId) return;
				const optionsWoDeleted = credentialOptions.value.map((credential) => credential.id).filter((id) => id !== deletedCredentialId);
				if (optionsWoDeleted.length > 0) emit("credentialSelected", optionsWoDeleted[0]);
				else emit("credentialDeselected");
			}
		});
		listenForModalChanges({
			store: uiStore,
			onModalClosed(modalName) {
				if (modalName === "editCredential" && wasModalOpenedFromHere.value) wasModalOpenedFromHere.value = false;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [credentialOptions.value.length > 0 || props.hideCreateNew ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.dropdown)
			}, [createVNode(CredentialsDropdown_default, {
				"credential-type": props.credentialType,
				"credential-options": credentialOptions.value,
				"selected-credential-id": props.selectedCredentialId,
				"data-test-id": "credential-dropdown",
				onCredentialSelected,
				onNewCredential: createNewCredential
			}, null, 8, [
				"credential-type",
				"credential-options",
				"selected-credential-id"
			]), createVNode(unref(N8nIconButton_default), {
				icon: "pen",
				type: "secondary",
				class: normalizeClass({
					[_ctx.$style.edit]: true,
					[_ctx.$style.invisible]: !props.selectedCredentialId
				}),
				title: unref(i18n).baseText("nodeCredentials.updateCredential"),
				"data-test-id": "credential-edit-button",
				onClick: _cache[0] || (_cache[0] = ($event) => editCredential())
			}, null, 8, ["class", "title"])], 2)) : !props.hideCreateNew ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				label: `Create new ${props.appName} credential`,
				"data-test-id": "create-credential",
				onClick: createNewCredential
			}, null, 8, ["label"])) : createCommentVNode("", true)]);
		};
	}
});
var CredentialPicker_vue_vue_type_style_index_0_lang_module_default = {
	dropdown: "_dropdown_10xvu_123",
	edit: "_edit_10xvu_127",
	invisible: "_invisible_10xvu_136"
};
var CredentialPicker_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialPicker_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialPicker_default as t };
