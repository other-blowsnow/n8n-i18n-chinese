import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { ju as EnterpriseEditionFeature } from "./constants-BiYlbN9Z.js";
import { t as useRootStore } from "./useRootStore-DbgDMM5M.js";
import { Ft as getSecretProviderConnectionByKey, It as getSecretProviderConnections, Lt as getSecretProviderTypes, t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { l as useRBACStore } from "./users.store-CUZkGc51.js";
//#region src/features/integrations/secretsProviders.ee/composables/useSecretsProvidersList.ee.ts
function useSecretsProvidersList() {
	const settingsStore = useSettingsStore();
	const rootStore = useRootStore();
	const rbacStore = useRBACStore();
	const providerTypes = ref([]);
	const secrets = ref({});
	const activeConnections = ref([]);
	const isLoadingProviderTypes = ref(false);
	const isLoadingActiveConnections = ref(false);
	const canCreate = computed(() => rbacStore.hasScope("externalSecretsProvider:create"));
	const canUpdate = computed(() => rbacStore.hasScope("externalSecretsProvider:update"));
	async function fetchProviderTypes() {
		isLoadingProviderTypes.value = true;
		try {
			providerTypes.value = await getSecretProviderTypes(rootStore.restApiContext);
		} finally {
			isLoadingProviderTypes.value = false;
		}
	}
	async function fetchActiveConnections() {
		if (!rbacStore.hasScope("externalSecretsProvider:list")) return;
		isLoadingActiveConnections.value = true;
		try {
			activeConnections.value = await getSecretProviderConnections(rootStore.restApiContext);
		} catch {
			activeConnections.value = [];
		} finally {
			isLoadingActiveConnections.value = false;
		}
	}
	async function fetchConnection(providerKey) {
		const connection = await getSecretProviderConnectionByKey(rootStore.restApiContext, providerKey);
		const index = activeConnections.value.findIndex((c) => c.name === providerKey);
		if (index !== -1) activeConnections.value[index] = connection;
	}
	const isLoading = computed(() => isLoadingProviderTypes.value || isLoadingActiveConnections.value);
	const isEnterpriseExternalSecretsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]);
	const activeProviders = computed(() => {
		return [...activeConnections.value].sort((a, b) => b.name.localeCompare(a.name));
	});
	return {
		providerTypes: computed(() => providerTypes.value),
		fetchProviderTypes,
		activeProviders,
		fetchActiveConnections,
		fetchConnection,
		canCreate,
		canUpdate,
		isLoading,
		isEnterpriseExternalSecretsEnabled,
		secrets: computed(() => secrets.value)
	};
}
//#endregion
export { useSecretsProvidersList as t };
