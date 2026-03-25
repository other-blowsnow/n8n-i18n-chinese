import { Ft as ref } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { Cc as testSecretProviderConnection, Sc as testProjectSecretProviderConnection, Tc as updateSecretProviderConnection, _c as getProjectSecretProviderConnectionByKey, fc as createProjectSecretProviderConnection, gc as enableSecretProviderConnection, pc as createSecretProviderConnection, vc as getSecretProviderConnectionByKey, wc as updateProjectSecretProviderConnection, xc as reloadSecretProviderConnection } from "./users.store-Bj_XyNBb.js";
import { r as useRootStore } from "./_baseOrderBy-CfcpbHUH.js";
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
export { useSecretsProviderConnection as t };
