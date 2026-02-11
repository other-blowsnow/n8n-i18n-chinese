import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-aYnXQJFG.js";
import { Dt as ElSwitch, Ri as N8nText_default, Vi as N8nIcon_default } from "./src-Dk7k3IeM.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { gr as useToast } from "./users.store-vVKd46Ls.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-DO7VRdgq.js";
import { a as doppler_default, i as hashicorp_default, n as azure_key_vault_default, o as infisical_default, r as aws_secrets_manager_default, t as gcp_secrets_manager_default } from "./gcp-secrets-manager-CSr0f1EN.js";
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
			if (options.showError) toast.showError(error, "Error", error.response?.data?.data.error);
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
var _hoisted_1$1 = ["src", "alt"];
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
			return __props.provider.name === "awsSecretsManager" ? (openBlock(), createBlock(unref(aws_secrets_manager_default), { key: 0 })) : __props.provider.name === "azureKeyVault" ? (openBlock(), createBlock(unref(azure_key_vault_default), { key: 1 })) : __props.provider.name === "gcpSecretsManager" ? (openBlock(), createBlock(unref(gcp_secrets_manager_default), { key: 2 })) : (openBlock(), createElementBlock("img", {
				key: 3,
				src: image.value,
				alt: __props.provider.displayName,
				width: "28",
				height: "28"
			}, null, 8, _hoisted_1$1));
		};
	}
});
var _hoisted_1 = { class: "connection-switch" };
var ExternalSecretsProviderConnectionSwitch_ee_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
export { ExternalSecretsProviderImage_ee_default as n, useExternalSecretsProvider as r, ExternalSecretsProviderConnectionSwitch_ee_default as t };
