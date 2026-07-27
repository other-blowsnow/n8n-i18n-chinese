import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useSettingsStore } from "./settings.store-C5bX9q6f.js";
//#region src/features/resolvers/composables/usePrivateCredentials.ts
/**
* Gates the "private credentials" surfaces (per-user self-connect via the seeded
* system resolver). This is the base capability, generally available once the
* `dynamic-credentials` module is active.
*
* For the external/custom resolver surfaces (resolver management, workflow
* resolver dropdown, custom resolver create/edit) use `useDynamicCredentials`.
*/
var usePrivateCredentials = () => {
	const settingsStore = useSettingsStore();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials")) };
};
//#endregion
export { usePrivateCredentials as t };
