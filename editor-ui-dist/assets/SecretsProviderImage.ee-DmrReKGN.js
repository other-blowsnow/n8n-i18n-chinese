import { C as computed, D as createElementBlock, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { a as doppler_default, i as hashicorp_default, n as azure_key_vault_default, o as infisical_default, r as aws_secrets_manager_default, t as gcp_secrets_manager_default } from "./gcp-secrets-manager-DsGzJ3tF.js";
var _hoisted_1 = ["src", "alt"];
var SecretsProviderImage_ee_default = /* @__PURE__ */ defineComponent({
	__name: "SecretsProviderImage.ee",
	props: { provider: {} },
	setup(__props) {
		const image = computed(() => {
			const providerName = __props.provider.type;
			return {
				doppler: doppler_default,
				infisical: infisical_default,
				vault: hashicorp_default
			}[providerName];
		});
		return (_ctx, _cache) => {
			return __props.provider.type === "awsSecretsManager" ? (openBlock(), createBlock(unref(aws_secrets_manager_default), { key: 0 })) : __props.provider.type === "azureKeyVault" ? (openBlock(), createBlock(unref(azure_key_vault_default), { key: 1 })) : __props.provider.type === "gcpSecretsManager" ? (openBlock(), createBlock(unref(gcp_secrets_manager_default), { key: 2 })) : (openBlock(), createElementBlock("img", {
				key: 3,
				src: image.value,
				alt: __props.provider.displayName,
				width: "28",
				height: "28"
			}, null, 8, _hoisted_1));
		};
	}
});
export { SecretsProviderImage_ee_default as t };
