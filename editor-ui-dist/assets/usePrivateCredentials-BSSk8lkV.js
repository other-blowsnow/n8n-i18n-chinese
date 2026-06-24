import { S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { t as useSettingsStore } from "./settings.store-DROe9gro.js";
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
//#region src/features/resolvers/composables/usePrivateCredentials.ts
/**
* Gates the "private credentials" surfaces (per-user self-connect via the seeded
* system resolver). This is the base capability and is enabled by either the
* `PRIVATE_CREDENTIALS` flag or the superset `DYNAMIC_CREDENTIALS` flag.
*
* For the external/custom resolver surfaces (resolver management, workflow
* resolver dropdown, custom resolver create/edit) use `useDynamicCredentials`.
*/
var usePrivateCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && (check.value("PRIVATE_CREDENTIALS") || check.value("DYNAMIC_CREDENTIALS"))) };
};
//#endregion
export { useEnvFeatureFlag as n, usePrivateCredentials as t };
