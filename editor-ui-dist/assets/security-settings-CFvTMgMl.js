import { S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { j as useEnvFeatureFlag } from "./workflows.store-BKfEj1aG.js";
import "./useRootStore-BUCt9XJo.js";
import "./settings.store-B-RgkKfn.js";
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
export { useRedactionEnforcementFeatureFlag as t };
