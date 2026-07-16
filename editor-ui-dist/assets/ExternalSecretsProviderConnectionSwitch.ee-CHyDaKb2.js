import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, j as createVNode, ot as resolveDirective, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { Wt as ElSwitch, Ya as N8nIcon_default, qa as N8nText_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-CYomjipa.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-BQ9FgKZZ.js";
import { a as hashicorp_default, i as aws_secrets_manager_default, n as gcp_secrets_manager_default, o as doppler_default, r as azure_key_vault_default, s as infisical_default, t as one_password_default } from "./one-password-BDSr0BvB.js";
//#region src/features/integrations/externalSecrets.ee/composables/useExternalSecretsProvider.ts
function useExternalSecretsProvider(provider, providerData) {
	const toast = useToast();
	const externalSecretsStore = useExternalSecretsStore();
	const initialConnectionState = ref("initializing");
	const connectionState = computed(() => externalSecretsStore.connectionState[provider.value?.name ?? ""]);
	const setConnectionState = (state) => {
		if (!provider.value) return;
		externalSecretsStore.setConnectionState(provider.value.name, state);
	};
	const normalizedProviderData = computed(() => {
		return Object.entries(providerData.value).reduce((acc, [key, value]) => {
			const property = provider.value?.properties?.find((p) => p.name === key);
			if (property && shouldDisplayProperty(property)) acc[key] = value;
			return acc;
		}, {});
	});
	function shouldDisplayProperty(property) {
		let visible = true;
		if (property.displayOptions?.show) visible = visible && Object.entries(property.displayOptions.show).every(([key, value]) => {
			return value?.includes(providerData.value[key]);
		});
		if (property.displayOptions?.hide) visible = visible && !Object.entries(property.displayOptions.hide).every(([key, value]) => {
			return value?.includes(providerData.value[key]);
		});
		return visible;
	}
	async function testConnection(options = { showError: true }) {
		if (!provider.value) return "initializing";
		try {
			const { testState } = await externalSecretsStore.testProviderConnection(provider.value.name, normalizedProviderData.value);
			setConnectionState(testState);
			return testState;
		} catch (error) {
			setConnectionState("error");
			if (options.showError) toast.showError(error, "Error", { message: error.response?.data?.data.error });
			return "error";
		} finally {
			if (provider.value.connected && ["connected", "error"].includes(connectionState.value)) externalSecretsStore.updateStoredProvider(provider.value.name, { state: connectionState.value });
		}
	}
	return {
		initialConnectionState,
		connectionState,
		normalizedProviderData,
		testConnection,
		setConnectionState,
		shouldDisplayProperty
	};
}
//#endregion
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderImage.ee.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["src", "alt"];
//#endregion
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderImage.ee.vue
var ExternalSecretsProviderImage_ee_default = /* @__PURE__ */ defineComponent({
	__name: "ExternalSecretsProviderImage.ee",
	props: { provider: {} },
	setup(__props) {
		const image = computed(() => ({
			doppler: doppler_default,
			infisical: infisical_default,
			vault: hashicorp_default
		})[__props.provider.name]);
		return (_ctx, _cache) => {
			return __props.provider.name === "awsSecretsManager" ? (openBlock(), createBlock(unref(aws_secrets_manager_default), { key: 0 })) : __props.provider.name === "azureKeyVault" ? (openBlock(), createBlock(unref(azure_key_vault_default), { key: 1 })) : __props.provider.name === "gcpSecretsManager" ? (openBlock(), createBlock(unref(gcp_secrets_manager_default), { key: 2 })) : __props.provider.name === "onePassword" ? (openBlock(), createBlock(unref(one_password_default), { key: 3 })) : (openBlock(), createElementBlock("img", {
				key: 4,
				src: image.value,
				alt: __props.provider.displayName,
				width: "28",
				height: "28"
			}, null, 8, _hoisted_1$1));
		};
	}
});
//#endregion
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderConnectionSwitch.ee.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "connection-switch" };
//#endregion
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderConnectionSwitch.ee.vue
var ExternalSecretsProviderConnectionSwitch_ee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ExternalSecretsProviderConnectionSwitch.ee",
	props: {
		provider: {},
		eventBus: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		},
		beforeUpdate: {
			type: Function,
			default: void 0
		}
	},
	emits: ["change"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const externalSecretsStore = useExternalSecretsStore();
		const i18n = useI18n();
		const toast = useToast();
		const saving = ref(false);
		const connectedTextColor = computed(() => {
			return props.provider.connected ? "success" : "text-light";
		});
		onMounted(() => {
			if (props.eventBus) props.eventBus.on("connect", onUpdateConnected);
		});
		async function onUpdateConnected(value) {
			const boolValue = typeof value === "boolean" ? value : Boolean(value);
			try {
				saving.value = true;
				if (props.beforeUpdate) {
					if (!await props.beforeUpdate(boolValue)) {
						saving.value = false;
						return;
					}
				}
				await externalSecretsStore.updateProviderConnected(props.provider.name, boolValue);
				emit("change", boolValue);
			} catch (error) {
				toast.showError(error, "Error");
			} finally {
				saving.value = false;
			}
		}
		return (_ctx, _cache) => {
			const _directive_loading = resolveDirective("loading");
			return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
				__props.provider.state === "error" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					color: "danger",
					icon: "triangle-alert",
					class: "mr-2xs"
				})) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					color: connectedTextColor.value,
					bold: "",
					class: "mr-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.externalSecrets.card.${__props.provider.connected ? "connected" : "disconnected"}`)), 1)]),
					_: 1
				}, 8, ["color"]),
				createVNode(unref(ElSwitch), {
					"model-value": __props.provider.connected,
					title: unref(i18n).baseText("settings.externalSecrets.card.connectedSwitch.title", { interpolate: { provider: __props.provider.displayName } }),
					disabled: __props.disabled,
					"data-test-id": "settings-external-secrets-connected-switch",
					"onUpdate:modelValue": onUpdateConnected
				}, null, 8, [
					"model-value",
					"title",
					"disabled"
				])
			])), [[_directive_loading, saving.value]]);
		};
	}
}), [["__scopeId", "data-v-baa1c9fc"]]);
//#endregion
export { ExternalSecretsProviderImage_ee_default as n, useExternalSecretsProvider as r, ExternalSecretsProviderConnectionSwitch_ee_default as t };
