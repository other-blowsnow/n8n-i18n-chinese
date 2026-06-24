import { Pt as reactive, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { ju as EnterpriseEditionFeature } from "./constants-BiYlbN9Z.js";
import { cn as useProjectsStore } from "./workflows.store-B-Pu_sWP.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-DbgDMM5M.js";
import { $t as updateProvider, Gt as getExternalSecretsProvider, Jt as getGlobalExternalSecretsForProject, Kt as getExternalSecretsProviders, Ut as connectProvider, Wt as getExternalSecrets, Xt as reloadProvider, Yt as getProjectExternalSecrets, Zt as testExternalSecretsProviderConnection, qt as getGlobalExternalSecrets, t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { l as useRBACStore } from "./users.store-CUZkGc51.js";
//#region src/features/integrations/externalSecrets.ee/externalSecrets.ee.store.ts
/**
* Transforms flat dot-notated secret keys into a nested object structure.
*
* Takes secrets grouped by provider (e.g., `{ "aws": ["db.host", "db.password", "api_key"] }`)
* and converts them into nested objects with masked values (e.g., `{ "aws": { "db": { "host": "*********", "password": "*********" }, "api_key": "*********" } }`).
*
* @param secrets - Record of provider names to arrays of dot-notated secret keys
* @returns Nested object structure with all values masked as '*********'
*/
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
var useExternalSecretsStore = defineStore("externalSecrets", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const rbacStore = useRBACStore();
	const projectsStore = useProjectsStore();
	const externalSecretsModuleSettings = computed(() => settingsStore.moduleSettings["external-secrets"]);
	const state = reactive({
		providers: [],
		secrets: {},
		projectSecrets: {},
		connectionState: {}
	});
	const isEnterpriseExternalSecretsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]);
	const isLegacyMode = computed(() => isEnterpriseExternalSecretsEnabled.value && !externalSecretsModuleSettings.value?.roleBasedAccess && !externalSecretsModuleSettings.value?.forProjects && !externalSecretsModuleSettings.value?.multipleConnections);
	const secrets = computed(() => state.secrets);
	const projectSecrets = computed(() => state.projectSecrets);
	const providers = computed(() => state.providers);
	const connectionState = computed(() => state.connectionState);
	const projectSecretsAsObject = computed(() => transformSecretsToNestedObject(projectSecrets.value));
	const globalSecretsAsObject = computed(() => transformSecretsToNestedObject(secrets.value));
	const secretsAsObject = computed(() => {
		if (externalSecretsModuleSettings.value?.forProjects)
 /**
		* This combines secrets from both global and project scopes.
		* Note: The backend enforces that provider names are unique across scopes, preventing conflicts.
		*/
		return {
			...globalSecretsAsObject.value,
			...projectSecretsAsObject.value
		};
		return globalSecretsAsObject.value;
	});
	/**
	* TODO: remove this once beta features (multiple connections and scoped access) are stable
	*/
	async function fetchLegacySecrets() {
		if (rbacStore.hasScope("externalSecret:list")) try {
			state.secrets = await getExternalSecrets(rootStore.restApiContext);
		} catch {
			state.secrets = {};
		}
	}
	/**
	* TODO: remove this once scoped access is stable
	*/
	async function fetchMultiConnectionsGlobalSecrets() {
		if (rbacStore.hasScope("externalSecret:list")) try {
			state.secrets = await getGlobalExternalSecrets(rootStore.restApiContext);
		} catch {
			state.secrets = {};
		}
	}
	async function fetchScopedGlobalSecrets(projectId) {
		try {
			state.secrets = await getGlobalExternalSecretsForProject(rootStore.restApiContext, projectId);
		} catch {
			state.secrets = {};
		}
	}
	async function fetchGlobalSecrets(projectId) {
		const moduleConfig = externalSecretsModuleSettings.value;
		if (!moduleConfig) return;
		if (moduleConfig.roleBasedAccess) {
			if (!projectId) return;
			await fetchScopedGlobalSecrets(projectId);
			return;
		}
		if (moduleConfig.forProjects || moduleConfig.multipleConnections) {
			await fetchMultiConnectionsGlobalSecrets();
			return;
		}
		await fetchLegacySecrets();
	}
	async function fetchProjectSecrets(projectId) {
		if (!externalSecretsModuleSettings.value) return;
		if (!externalSecretsModuleSettings.value.forProjects) return;
		if (!(projectId !== projectsStore.personalProject?.id)) return;
		const project = projectsStore.currentProject?.id === projectId ? projectsStore.currentProject : projectsStore.myProjects.find((p) => p.id === projectId);
		if (rbacStore.hasScope("externalSecret:list") || project?.scopes?.includes("externalSecret:list") === true) try {
			state.projectSecrets = await getProjectExternalSecrets(rootStore.restApiContext, projectId);
		} catch {
			state.projectSecrets = {};
		}
	}
	async function fetchSecretsForProject(projectId) {
		if (!externalSecretsModuleSettings.value) return;
		await Promise.all([fetchGlobalSecrets(projectId), fetchProjectSecrets(projectId)]);
	}
	async function reloadProvider$1(id) {
		const { updated } = await reloadProvider(rootStore.restApiContext, id);
		if (updated && isLegacyMode.value) await fetchGlobalSecrets();
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
		if (isLegacyMode.value) await fetchGlobalSecrets();
		updateStoredProvider(id, {
			connected: value,
			state: value ? "connected" : "initializing"
		});
	}
	async function updateProvider$1(id, { data }) {
		await updateProvider(rootStore.restApiContext, id, data);
		if (isLegacyMode.value) await fetchGlobalSecrets();
		updateStoredProvider(id, { data });
	}
	function setConnectionState(id, connectionState) {
		state.connectionState[id] = connectionState;
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
		fetchSecretsForProject,
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
//#endregion
export { useExternalSecretsStore as t };
