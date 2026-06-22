import { S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { j as useEnvFeatureFlag } from "./workflows.store-BKCVa7q0.js";
import "./useRootStore-BXKn7r8-.js";
import "./settings.store-HAN34Lkc.js";
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
export { useRedactionEnforcementFeatureFlag as t };
