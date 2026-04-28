import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as useSettingsStore } from "./settings.store-BOIB94F8.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-BRPsuP17.js";
//#region src/features/resolvers/composables/useDynamicCredentials.ts
var useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
//#endregion
export { useDynamicCredentials as t };
