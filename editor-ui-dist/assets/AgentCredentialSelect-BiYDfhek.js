import { $ as openBlock, N as defineComponent, S as computed, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { nt as AGENT_VECTOR_STORE_CREDENTIAL_TYPES } from "./src-CY9eW8M_.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-CfhFCLO0.js";
//#region src/features/agents/vector-stores.ts
var AGENT_VECTOR_STORE_PROVIDER_DEFINITIONS = {
	pinecone: {
		displayName: "Pinecone",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.pinecone
	},
	supabase: {
		displayName: "Supabase",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.supabase
	},
	qdrant: {
		displayName: "Qdrant",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.qdrant
	},
	postgres: {
		displayName: "Postgres",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.postgres
	}
};
var AGENT_EMBEDDING_MODEL_OPTIONS = [
	{
		model: "openai/text-embedding-3-small",
		dimensions: 1536
	},
	{
		model: "openai/text-embedding-3-large",
		dimensions: 3072
	},
	{
		model: "openai/text-embedding-ada-002",
		dimensions: 1536
	},
	{
		model: "google/gemini-embedding-001",
		dimensions: 3072
	},
	{
		model: "google/text-embedding-004",
		dimensions: 768
	},
	{
		model: "mistral/mistral-embed",
		dimensions: 1024
	},
	{
		model: "cohere/embed-english-v3.0",
		dimensions: 1024
	},
	{
		model: "cohere/embed-multilingual-v3.0",
		dimensions: 1024
	}
];
var AGENT_EMBEDDING_PROVIDERS = [
	"openai",
	"google",
	"mistral",
	"cohere"
];
function isAgentEmbeddingProvider(value) {
	return AGENT_EMBEDDING_PROVIDERS.some((provider) => provider === value);
}
function getEmbeddingModelProvider(model) {
	const prefix = model.split("/")[0];
	return isAgentEmbeddingProvider(prefix) ? prefix : null;
}
function getEmbeddingModelsForProvider(provider) {
	return AGENT_EMBEDDING_MODEL_OPTIONS.filter((option) => getEmbeddingModelProvider(option.model) === provider);
}
//#endregion
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
export { getEmbeddingModelsForProvider as a, getEmbeddingModelProvider as i, AGENT_EMBEDDING_PROVIDERS as n, isAgentEmbeddingProvider as o, AGENT_VECTOR_STORE_PROVIDER_DEFINITIONS as r, AgentCredentialSelect_default as t };
