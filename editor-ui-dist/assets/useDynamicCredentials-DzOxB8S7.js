import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as useSettingsStore } from "./settings.store-CnuErby1.js";
//#region src/features/shared/envFeatureFlag/useEnvFeatureFlag.ts
var useEnvFeatureFlag = () => {
	const settingsStore = useSettingsStore();
	return { check: computed(() => (flag) => {
		const key = `N8N_ENV_FEAT_${flag}`;
		const settingsProvidedEnvFeatFlag = settingsStore.settings.envFeatureFlags?.[key];
		if (settingsProvidedEnvFeatFlag !== void 0) return settingsProvidedEnvFeatFlag !== "false" && !!settingsProvidedEnvFeatFlag;
		const buildTimeValue = {
			"BASE_URL": "/%7B%7BBASE_PATH%7D%7D/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": false,
			"VUE_APP_PUBLIC_PATH": "/{{BASE_PATH}}/"
		}[key];
		if (buildTimeValue !== void 0) return buildTimeValue !== "false" && !!buildTimeValue;
		return false;
	}) };
};
//#endregion
//#region src/features/resolvers/composables/useDynamicCredentials.ts
var useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
//#endregion
export { useDynamicCredentials as t };
