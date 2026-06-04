import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import "./useRootStore-NTSmdx9S.js";
import "./settings.store-CrL-o4BC.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-C4v-787B.js";
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
export { useRedactionEnforcementFeatureFlag as t };
