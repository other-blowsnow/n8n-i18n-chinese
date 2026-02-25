import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { ws as useSettingsStore } from "./users.store-B-dhu6_V.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-Ck7sPrwZ.js";
const useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
export { useDynamicCredentials as t };
