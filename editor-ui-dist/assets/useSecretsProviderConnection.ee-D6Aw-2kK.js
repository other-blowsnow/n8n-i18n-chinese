import { It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _c as testSecretProviderConnection, dc as createSecretProviderConnection, pc as getSecretProviderConnectionByKey, vc as updateSecretProviderConnection } from "./users.store-DdXEJExY.js";
import { r as useRootStore } from "./_baseOrderBy-CJfk527n.js";
function useSecretsProviderConnection() {
	const rootStore = useRootStore();
	const connectionState = ref("initializing");
	const connectionError = ref(void 0);
	const isLoading = ref(false);
	const isTesting = ref(false);
	async function testConnection(providerKey) {
		isTesting.value = true;
		try {
			const { testState, error } = await testSecretProviderConnection(rootStore.restApiContext, providerKey);
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
			return await getSecretProviderConnectionByKey(rootStore.restApiContext, providerKey);
		} finally {
			isLoading.value = false;
		}
	}
	async function createConnection(connectionData) {
		return await createSecretProviderConnection(rootStore.restApiContext, {
			...connectionData,
			isGlobal: true
		});
	}
	async function updateConnection(providerKey, connectionData) {
		return await updateSecretProviderConnection(rootStore.restApiContext, providerKey, connectionData);
	}
	return {
		connectionState,
		connectionError,
		isLoading,
		isTesting,
		getConnection,
		createConnection,
		updateConnection,
		testConnection
	};
}
export { useSecretsProviderConnection as t };
