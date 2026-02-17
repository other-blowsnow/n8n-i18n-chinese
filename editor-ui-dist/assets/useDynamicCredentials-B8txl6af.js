import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { xs as useSettingsStore } from "./users.store-Cq1Mo6lE.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-jsXDrTnO.js";
const useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
export { useDynamicCredentials as t };
