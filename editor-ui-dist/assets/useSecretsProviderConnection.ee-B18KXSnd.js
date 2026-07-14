import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useRootStore } from "./useRootStore-Cls9JR4X.js";
import { At as createSecretProviderConnection, Bt as testProjectSecretProviderConnection, Ht as updateProjectSecretProviderConnection, It as getSecretProviderConnectionByKey, Nt as enableSecretProviderConnection, Pt as getProjectSecretProviderConnectionByKey, Ut as updateSecretProviderConnection, Vt as testSecretProviderConnection, kt as createProjectSecretProviderConnection, zt as reloadSecretProviderConnection } from "./settings.store-D5e-Y58h.js";
//#region src/features/integrations/secretsProviders.ee/composables/useSecretsProviderConnection.ee.ts
/**
* Low-level composable for secrets provider connection API operations.
* This composable handles pure API calls and data transformations.
* UI feedback (toasts, errors) should be handled by the caller.
*/
function useSecretsProviderConnection(projectId) {
	const rootStore = useRootStore();
	const connectionState = ref("initializing");
	const connectionError = ref(void 0);
	const isLoading = ref(false);
	const isTesting = ref(false);
	function setConnectionState(state) {
		connectionState.value = state;
	}
	async function testConnection(providerKey) {
		isTesting.value = true;
		try {
			const { testState, error } = projectId ? await testProjectSecretProviderConnection(rootStore.restApiContext, projectId, providerKey) : await testSecretProviderConnection(rootStore.restApiContext, providerKey);
			connectionState.value = testState === "tested" ? "connected" : testState;
			connectionError.value = error;
			return connectionState.value;
		} catch {
			connectionState.value = "error";
			return "error";
		} finally {
			isTesting.value = false;
		}
	}
	async function getConnection(providerKey) {
		isLoading.value = true;
		try {
			return projectId ? await getProjectSecretProviderConnectionByKey(rootStore.restApiContext, projectId, providerKey) : await getSecretProviderConnectionByKey(rootStore.restApiContext, providerKey);
		} finally {
			isLoading.value = false;
		}
	}
	async function createConnection(connectionData) {
		return projectId ? await createProjectSecretProviderConnection(rootStore.restApiContext, projectId, {
			providerKey: connectionData.providerKey,
			type: connectionData.type,
			projectIds: [projectId],
			settings: connectionData.settings
		}) : await createSecretProviderConnection(rootStore.restApiContext, {
			...connectionData,
			isGlobal: true
		});
	}
	async function updateConnection(providerKey, connectionData) {
		return projectId ? await updateProjectSecretProviderConnection(rootStore.restApiContext, projectId, providerKey, { settings: connectionData.settings }) : await updateSecretProviderConnection(rootStore.restApiContext, providerKey, connectionData);
	}
	async function reloadConnection(providerKey) {
		return await reloadSecretProviderConnection(rootStore.restApiContext, providerKey);
	}
	async function activateConnection(providerKey) {
		return await enableSecretProviderConnection(rootStore.restApiContext, providerKey);
	}
	return {
		connectionState,
		connectionError,
		isLoading,
		isTesting,
		setConnectionState,
		getConnection,
		createConnection,
		updateConnection,
		testConnection,
		reloadConnection,
		activateConnection
	};
}
//#endregion
export { useSecretsProviderConnection as t };
