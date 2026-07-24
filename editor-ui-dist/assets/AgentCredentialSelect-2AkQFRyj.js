import { $ as openBlock, N as defineComponent, S as computed, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-BOG1VaCI.js";
//#region src/features/agents/components/AgentCredentialSelect.vue?vue&type=script&setup=true&lang.ts
var AgentCredentialSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCredentialSelect",
	props: {
		modelValue: {},
		credentials: {},
		placeholder: {},
		dataTestId: {},
		credentialPermissions: {},
		loading: { type: Boolean },
		disabled: { type: Boolean },
		size: { default: "small" }
	},
	emits: ["update:modelValue", "create"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const credentialOptions = computed(() => [...props.credentials].sort((a, b) => {
			const byName = a.name.localeCompare(b.name, void 0, { sensitivity: "base" });
			return byName === 0 ? a.id.localeCompare(b.id) : byName;
		}).map((credential) => ({
			id: credential.id,
			name: credential.name,
			typeDisplayName: credential.typeDisplayName,
			homeProject: credential.homeProject
		})));
		function onCredentialSelected(credentialId) {
			emit("update:modelValue", credentialId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CredentialsDropdown_default, {
				class: normalizeClass(_ctx.$style[props.size]),
				"credential-options": credentialOptions.value,
				"selected-credential-id": __props.modelValue ?? null,
				permissions: __props.credentialPermissions,
				placeholder: __props.placeholder,
				loading: __props.loading,
				disabled: __props.disabled,
				"data-test-id": __props.dataTestId,
				onCredentialSelected,
				onNewCredential: _cache[0] || (_cache[0] = ($event) => emit("create"))
			}, null, 8, [
				"class",
				"credential-options",
				"selected-credential-id",
				"permissions",
				"placeholder",
				"loading",
				"disabled",
				"data-test-id"
			]);
		};
	}
});
var AgentCredentialSelect_vue_vue_type_style_index_0_lang_module_default = {
	xlarge: "_xlarge_1wzoe_125",
	large: "_large_1wzoe_130",
	medium: "_medium_1wzoe_135",
	small: "_small_1wzoe_140",
	mini: "_mini_1wzoe_145"
};
var AgentCredentialSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCredentialSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCredentialSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentCredentialSelect_default as t };
