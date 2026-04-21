import { Ft as ref, Pt as readonly } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-3wVnX35v.js";
import { nt as getProvisioningConfig, rt as saveProvisioningConfig } from "./settings.store-DJhMgRBM.js";
//#region src/features/settings/sso/provisioning/composables/userRoleProvisioning.store.ts
/**
* Composable to load and save provisioning config
*/
var useUserRoleProvisioningStore = defineStore("userRoleProvisioning", () => {
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
//#endregion
export { useUserRoleProvisioningStore as t };
