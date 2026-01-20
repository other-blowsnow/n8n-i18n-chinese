import { Ft as readonly, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Ns as getProvisioningConfig, Ps as saveProvisioningConfig } from "./users.store-DmlY2Qk6.js";
import { k as defineStore, r as useRootStore } from "./_baseOrderBy-BQpO5lC4.js";
const useUserRoleProvisioningStore = defineStore("userRoleProvisioning", () => {
	const rootStore = useRootStore();
	const provisioningConfig = ref();
	const getProvisioningConfig$1 = async () => {
		try {
			const config = await getProvisioningConfig(rootStore.restApiContext);
			provisioningConfig.value = config;
			return config;
		} catch (error) {
			console.error("Failed to fetch provisioning config:", error);
			throw error;
		}
	};
	const saveProvisioningConfig$1 = async (config) => {
		try {
			const updatedConfig = await saveProvisioningConfig(rootStore.restApiContext, config);
			provisioningConfig.value = updatedConfig;
			return updatedConfig;
		} catch (error) {
			console.error("Failed to save provisioning config:", error);
			throw error;
		}
	};
	return {
		provisioningConfig: readonly(provisioningConfig),
		getProvisioningConfig: getProvisioningConfig$1,
		saveProvisioningConfig: saveProvisioningConfig$1
	};
});
export { useUserRoleProvisioningStore as t };
