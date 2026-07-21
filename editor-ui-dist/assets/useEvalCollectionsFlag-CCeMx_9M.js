import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ua as EVAL_COLLECTIONS_FLAG } from "./constants-BG93cxLW.js";
import { g as usePostHog } from "./users.store-ChwfO1rT.js";
//#region src/features/ai/evaluation.ee/composables/useEvalCollectionsFlag.ts
/**
* Frontend gate for the eval-collections feature surface. Mirrors the
* `084_eval_collections` PostHog rollout flag that the backend consults to
* 404 the controller routes. The env override
* `N8N_EVAL_COLLECTIONS_ENABLED=true` flips PostHog to "enabled for every
* user on the running main" — useful for local + QA — without round-tripping
* the cohort layer.
*
* Coerces PostHog's `boolean | undefined` return to a strict boolean so
* `v-if="isEvalCollectionsEnabled"` is never undefined-flickering during
* the initial flag-fetch frame.
*/
var useEvalCollectionsFlag = () => {
	const postHog = usePostHog();
	return computed(() => postHog.isFeatureEnabled(EVAL_COLLECTIONS_FLAG) === true);
};
//#endregion
export { useEvalCollectionsFlag as t };
