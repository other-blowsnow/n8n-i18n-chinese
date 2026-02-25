import { C as computed, Pt as reactive } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _c as reloadProvider, _r as useRBACStore, dc as connectProvider, fc as getExternalSecrets, gc as getProjectExternalSecrets, hc as getGlobalExternalSecrets, mc as getExternalSecretsProviders, pc as getExternalSecretsProvider, vc as testExternalSecretsProviderConnection, ws as useSettingsStore, yc as updateProvider } from "./users.store-B-dhu6_V.js";
import { Yc as EnterpriseEditionFeature } from "./constants-DM6W84kp.js";
import { j as defineStore, r as useRootStore } from "./_baseOrderBy-B5_tDn8L.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-Ck7sPrwZ.js";
function transformSecretsToNestedObject(secrets) {
	return Object.keys(secrets).reduce((providerAcc, provider) => {
		const providerSecrets = secrets[provider];
		if (!Array.isArray(providerSecrets)) return providerAcc;
		providerAcc[provider] = providerSecrets.reduce((secretAcc, secret) => {
			const splitSecret = secret.split(".");
			if (splitSecret.length === 1) {
				secretAcc[secret] = "*********";
				return secretAcc;
			}
			const obj = secretAcc[splitSecret[0]] ?? {};
			let acc = obj;
			for (let i = 1; i < splitSecret.length; i++) {
				const key = splitSecret[i];
				if (i === splitSecret.length - 1) {
					acc[key] = "*********";
					continue;
				}
				if (Object.keys(acc) && !acc[key]) acc[key] = {};
				acc = acc[key];
			}
			secretAcc[splitSecret[0]] = obj;
			return secretAcc;
		}, {});
		return providerAcc;
	}, {});
}
const useExternalSecretsStore = defineStore("externalSecrets", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const rbacStore = useRBACStore();
	const { check: checkDevFeatureFlag } = useEnvFeatureFlag();
	const state = reactive({
		providers: [],
		secrets: {},
		projectSecrets: {},
		connectionState: {}
	});
	const isEnterpriseExternalSecretsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]);
	const secrets = computed(() => state.secrets);
	const projectSecrets = computed(() => state.projectSecrets);
	const providers = computed(() => state.providers);
	const connectionState = computed(() => state.connectionState);
	const projectSecretsAsObject = computed(() => transformSecretsToNestedObject(projectSecrets.value));
	const globalSecretsAsObject = computed(() => transformSecretsToNestedObject(secrets.value));
	const secretsAsObject = computed(() => {
		if (checkDevFeatureFlag.value("EXTERNAL_SECRETS_FOR_PROJECTS")) return {
			...globalSecretsAsObject.value,
			...projectSecretsAsObject.value
		};
		return globalSecretsAsObject.value;
	});
	async function fetchGlobalSecrets() {
		if (rbacStore.hasScope("externalSecret:list")) try {
			state.secrets = checkDevFeatureFlag.value("EXTERNAL_SECRETS_FOR_PROJECTS") ? await getGlobalExternalSecrets(rootStore.restApiContext) : await getExternalSecrets(rootStore.restApiContext);
		} catch {
			state.secrets = {};
		}
	}
	async function fetchProjectSecrets(projectId) {
		if (!checkDevFeatureFlag.value("EXTERNAL_SECRETS_FOR_PROJECTS")) return;
		if (rbacStore.hasScope("externalSecret:list")) try {
			state.projectSecrets = await getProjectExternalSecrets(rootStore.restApiContext, projectId);
		} catch (error) {
			state.projectSecrets = {};
		}
	}
	async function reloadProvider$1(id) {
		const { updated } = await reloadProvider(rootStore.restApiContext, id);
		if (updated) await fetchGlobalSecrets();
		return updated;
	}
	async function getProviders() {
		state.providers = await getExternalSecretsProviders(rootStore.restApiContext);
	}
	async function testProviderConnection(id, data) {
		return await testExternalSecretsProviderConnection(rootStore.restApiContext, id, data);
	}
	async function getProvider(id) {
		const provider = await getExternalSecretsProvider(rootStore.restApiContext, id);
		const existingProviderIndex = state.providers.findIndex((p) => p.name === id);
		if (existingProviderIndex !== -1) state.providers.splice(existingProviderIndex, 1, provider);
		else state.providers.push(provider);
		return provider;
	}
	function updateStoredProvider(id, data) {
		const providerIndex = state.providers.findIndex((p) => p.name === id);
		state.providers = [
			...state.providers.slice(0, providerIndex),
			{
				...state.providers[providerIndex],
				...data,
				data: {
					...state.providers[providerIndex].data,
					...data.data
				}
			},
			...state.providers.slice(providerIndex + 1)
		];
	}
	async function updateProviderConnected(id, value) {
		await connectProvider(rootStore.restApiContext, id, value);
		await fetchGlobalSecrets();
		updateStoredProvider(id, {
			connected: value,
			state: value ? "connected" : "initializing"
		});
	}
	async function updateProvider$1(id, { data }) {
		await updateProvider(rootStore.restApiContext, id, data);
		await fetchGlobalSecrets();
		updateStoredProvider(id, { data });
	}
	function setConnectionState(id, connectionState$1) {
		state.connectionState[id] = connectionState$1;
	}
	return {
		state,
		providers,
		secrets,
		connectionState,
		secretsAsObject,
		globalSecretsAsObject,
		projectSecretsAsObject,
		isEnterpriseExternalSecretsEnabled,
		fetchGlobalSecrets,
		fetchProjectSecrets,
		getProvider,
		getProviders,
		testProviderConnection,
		updateProvider: updateProvider$1,
		updateStoredProvider,
		updateProviderConnected,
		reloadProvider: reloadProvider$1,
		setConnectionState
	};
});
export { useExternalSecretsStore as t };
