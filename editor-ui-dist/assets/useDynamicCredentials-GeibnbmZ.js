import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as useSettingsStore } from "./settings.store-CZYLRHOL.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-Bk3n6d07.js";
//#region src/features/resolvers/composables/useDynamicCredentials.ts
var useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
//#endregion
export { useDynamicCredentials as t };
