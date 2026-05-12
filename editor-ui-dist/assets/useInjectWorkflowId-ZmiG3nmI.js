import { R as inject } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { jc as WorkflowIdKey } from "./constants-c-L9DE1I.js";
//#region src/app/utils/injectStrict.ts
function injectStrict(key, fallback) {
	const resolved = inject(key, fallback);
	if (!resolved) throw new Error(`Could not resolve ${key.description}`);
	return resolved;
}
//#endregion
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { injectStrict as n, useInjectWorkflowId as t };
