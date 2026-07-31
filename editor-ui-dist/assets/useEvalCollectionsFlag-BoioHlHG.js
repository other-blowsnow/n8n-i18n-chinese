import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useSettingsStore } from "./settings.store-CQqpFn-s.js";
import "./constants-BzyjfRY2.js";
import { g as usePostHog } from "./users.store-3B2-cSx1.js";
//#region src/features/ai/evaluation.ee/composables/useEvalCollectionsFlag.ts
/**
* Frontend gate for the eval-collections feature surface, matching the
* `084_eval_collections` flag the backend consults to 404 the controller
* routes. It combines two independent signals:
*
*  - `settings.evaluation.collectionsEnabled` — the backend-provided operator
*    override (`N8N_EVAL_COLLECTIONS_ENABLED`). Delivered in the settings
*    payload, so it works even when the in-browser PostHog client never
*    initializes (telemetry off), where the flag would otherwise stay false.
*  - the PostHog client flag — carries per-cohort rollout when telemetry is on.
*
* Coerces to a strict boolean so `v-if="isEvalCollectionsEnabled"` never
* undefined-flickers during the initial flag-fetch frame.
*/
var useEvalCollectionsFlag = () => {
	const postHog = usePostHog();
	const settingsStore = useSettingsStore();
	return computed(() => settingsStore.settings.evaluation?.collectionsEnabled === true || postHog.isFeatureEnabled("084_eval_collections") === true);
};
//#endregion
export { useEvalCollectionsFlag as t };
